import { NextRequest, NextResponse } from 'next/server';
import { runScan, ScanFetchError } from '@/lib/wisp/runScan';
import { normalizeUrl } from '@/lib/wisp/fetchPage';
import { checkRateLimit, recordScan, hashIp } from '@/lib/wisp/rateLimit';

// cheerio + the Buffer usage in fetchPage.ts need the Node runtime,
// not Edge.
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  let body: { url?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  if (!body.url || typeof body.url !== 'string') {
    return NextResponse.json({ error: 'missing_url', message: 'A URL is required.' }, { status: 400 });
  }

  let domain: string;
  try {
    domain = normalizeUrl(body.url).hostname;
  } catch (err) {
    if (err instanceof ScanFetchError) {
      return NextResponse.json({ error: err.code, message: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'invalid_url', message: 'That URL is not valid.' }, { status: 400 });
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';
  const ipHash = hashIp(ip);

  try {
    const rate = await checkRateLimit(domain, ipHash);
    if (!rate.allowed) {
      const message =
        rate.reason === 'domain_cooldown'
          ? 'This site was already scanned in the last 24 hours.'
          : "Too many scans from this connection today — try again tomorrow.";
      return NextResponse.json({ error: rate.reason, message }, { status: 429 });
    }

    const result = await runScan(body.url);
    await recordScan(domain, ipHash);

    return NextResponse.json(result);
  } catch (err) {
    if (err instanceof ScanFetchError) {
      const status = err.code === 'timeout' ? 504 : err.code === 'fetch_failed' ? 502 : 422;
      return NextResponse.json({ error: err.code, message: err.message }, { status });
    }
    console.error('wisp-scan failed:', err);
    return NextResponse.json(
      { error: 'scan_failed', message: 'Something went wrong scanning that site.' },
      { status: 500 }
    );
  }
}
