// Fetches a homepage server-side for scanning. Because the URL is
// user-submitted, this file exists specifically to stop someone using the
// scanner to probe internal infrastructure (SSRF) or to abuse it as a
// free proxy/DoS vector. Every guard below earns its place.

const BLOCKED_HOSTNAME_PATTERNS = [
  /^localhost$/i,
  /^127\./,
  /^0\.0\.0\.0$/,
  /^10\./,
  /^169\.254\./,
  /^172\.(1[6-9]|2\d|3[0-1])\./,
  /^192\.168\./,
  /^::1$/,
  /^\[::1\]$/,
];

const MAX_BYTES = 2 * 1024 * 1024; // 2MB — a homepage has no business being bigger
const FETCH_TIMEOUT_MS = 15_000;
const MAX_FETCH_ATTEMPTS = 2;
const ROBOTS_TIMEOUT_MS = 4000;
export const USER_AGENT = 'CylvoxWispBot/1.0 (+https://cylvox.com/wisp)';

export class ScanFetchError extends Error {
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

function isBlockedHostname(hostname: string): boolean {
  return BLOCKED_HOSTNAME_PATTERNS.some((p) => p.test(hostname));
}

/**
 * Validates and normalizes a user-submitted URL. Throws ScanFetchError
 * for anything that isn't a plain public http/https URL.
 */
export function normalizeUrl(input: string): URL {
  let raw = input.trim();
  if (!/^https?:\/\//i.test(raw)) {
    raw = `https://${raw}`;
  }

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new ScanFetchError('invalid_url', "That doesn't look like a valid URL.");
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new ScanFetchError('invalid_protocol', 'Only http/https URLs are supported.');
  }

  if (isBlockedHostname(url.hostname)) {
    throw new ScanFetchError('blocked_host', "That host can't be scanned.");
  }

  return url;
}

export interface FetchedPage {
  finalUrl: string;
  status: number;
  html: string;
  headers: Headers;
}

export async function fetchHomepage(url: URL): Promise<FetchedPage> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_FETCH_ATTEMPTS; attempt += 1) {
    try {
      return await fetchHomepageOnce(url);
    } catch (err) {
      lastError = err;
      if (attempt === MAX_FETCH_ATTEMPTS || !isRetryableTimeout(err)) throw err;
    }
  }

  throw lastError;
}

function isRetryableTimeout(error: unknown): boolean {
  return error instanceof ScanFetchError && (error.code === 'timeout' || error.code === 'fetch_failed');
}

async function fetchHomepageOnce(url: URL): Promise<FetchedPage> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(url.toString(), {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': USER_AGENT,
        Accept: 'text/html,application/xhtml+xml',
      },
    });

    // Redirects can land somewhere internal even if the original host was
    // fine — re-check the *final* hostname, not just the one the user typed.
    const finalHost = new URL(res.url).hostname;
    if (isBlockedHostname(finalHost)) {
      throw new ScanFetchError('blocked_host', "That host can't be scanned.");
    }

    const contentLength = res.headers.get('content-length');
    if (contentLength && Number(contentLength) > MAX_BYTES) {
      throw new ScanFetchError('too_large', 'That page is too large to scan.');
    }

    const html = await readBodyCapped(res, controller);

    return {
      finalUrl: res.url,
      status: res.status,
      html,
      headers: res.headers,
    };
  } catch (err: any) {
    if (err instanceof ScanFetchError) throw err;
    if (err.name === 'AbortError') {
      throw new ScanFetchError('timeout', 'That site took too long to respond.');
    }
    throw new ScanFetchError('fetch_failed', 'Could not reach that site.');
  } finally {
    clearTimeout(timeout);
  }
}

async function readBodyCapped(res: Response, controller: AbortController): Promise<string> {
  const reader = res.body?.getReader();
  if (!reader) {
    // Some runtimes/mocks may not expose a streaming body — fall back,
    // still enforcing the cap after the fact.
    const text = await res.text();
    if (Buffer.byteLength(text, 'utf-8') > MAX_BYTES) {
      throw new ScanFetchError('too_large', 'That page is too large to scan.');
    }
    return text;
  }

  let received = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    received += value.byteLength;
    if (received > MAX_BYTES) {
      controller.abort();
      throw new ScanFetchError('too_large', 'That page is too large to scan.');
    }
    chunks.push(value);
  }
  return Buffer.concat(chunks.map((c) => Buffer.from(c))).toString('utf-8');
}

/**
 * Best-effort robots.txt fetch. Failures here should never break the scan —
 * if robots.txt is unreachable, we simply skip that one check.
 */
export interface RobotsTxtResult {
  status: number | null;
  text: string | null;
}

export async function fetchRobotsTxtInfo(origin: string): Promise<RobotsTxtResult> {
  try {
    const res = await fetch(`${origin}/robots.txt`, {
      headers: { 'User-Agent': USER_AGENT },
      signal: AbortSignal.timeout(ROBOTS_TIMEOUT_MS),
    });
    if (!res.ok) return { status: res.status, text: null };
    const text = await res.text();
    return { status: res.status, text: text.slice(0, 50_000) };
  } catch {
    return { status: null, text: null };
  }
}

export async function fetchRobotsTxt(origin: string): Promise<string | null> {
  return (await fetchRobotsTxtInfo(origin)).text;
}
