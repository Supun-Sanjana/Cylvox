// Finds a small, bounded set of page URLs to run the multi-page scan
// against. Sitemap first (most sites have one and it's authoritative);
// falls back to same-domain links found on the homepage if there's no
// usable sitemap. Never returns more than MAX_PAGES — this exists to
// keep the scan fast and cheap, not to be a full crawler.

import * as cheerio from 'cheerio';
import { USER_AGENT } from './fetchPage';

export const MAX_PAGES = 8;
const SITEMAP_TIMEOUT_MS = 6000;
const MAX_SITEMAP_BYTES = 3 * 1024 * 1024;

const SKIP_EXTENSIONS = /\.(xml|pdf|jpg|jpeg|png|gif|svg|webp|css|js|json|ico|txt|zip|mp4|woff2?)$/i;
const SKIP_PATH_HINTS = /\/(wp-admin|wp-json|feed|tag|category|author)\//i;

/**
 * Returns up to MAX_PAGES absolute URLs (homepage always first),
 * deduplicated, same-origin only.
 */
export async function discoverPages(homepageUrl: URL, homepageHtml: string): Promise<string[]> {
  const origin = homepageUrl.origin;
  const seen = new Set<string>([homepageUrl.toString()]);
  const ordered: string[] = [homepageUrl.toString()];

  const fromSitemap = await tryFetchSitemap(origin);
  for (const url of fromSitemap) {
    if (ordered.length >= MAX_PAGES) break;
    if (!seen.has(url)) {
      seen.add(url);
      ordered.push(url);
    }
  }

  if (ordered.length < MAX_PAGES) {
    const fromLinks = extractSameOriginLinks(homepageHtml, origin);
    for (const url of fromLinks) {
      if (ordered.length >= MAX_PAGES) break;
      if (!seen.has(url)) {
        seen.add(url);
        ordered.push(url);
      }
    }
  }

  return ordered;
}

async function tryFetchSitemap(origin: string): Promise<string[]> {
  try {
    const res = await fetch(`${origin}/sitemap.xml`, {
      headers: { 'User-Agent': USER_AGENT, Accept: 'application/xml,text/xml' },
      signal: AbortSignal.timeout(SITEMAP_TIMEOUT_MS),
    });
    if (!res.ok) return [];

    const contentLength = res.headers.get('content-length');
    if (contentLength && Number(contentLength) > MAX_SITEMAP_BYTES) return [];

    const xml = await res.text();
    if (xml.length > MAX_SITEMAP_BYTES) return [];

    const $ = cheerio.load(xml, { xmlMode: true });

    // Sitemap index (points at other sitemaps) — only follow the first
    // child sitemap, one hop deep, to keep this bounded and fast.
    const sitemapRefs = $('sitemapindex > sitemap > loc')
      .map((_, el) => $(el).text().trim())
      .get();

    if (sitemapRefs.length > 0) {
      return await tryFetchSitemap(new URL(sitemapRefs[0]).origin + new URL(sitemapRefs[0]).pathname);
    }

    const locs = $('urlset > url > loc')
      .map((_, el) => $(el).text().trim())
      .get()
      .filter((loc) => isUsableUrl(loc, origin));

    return locs;
  } catch {
    return [];
  }
}

function extractSameOriginLinks(html: string, origin: string): string[] {
  try {
    const $ = cheerio.load(html);
    const links = $('a[href]')
      .map((_, el) => $(el).attr('href'))
      .get()
      .map((href) => {
        try {
          return new URL(href!, origin).toString();
        } catch {
          return null;
        }
      })
      .filter((url): url is string => !!url && isUsableUrl(url, origin));

    return Array.from(new Set(links));
  } catch {
    return [];
  }
}

function isUsableUrl(url: string, origin: string): boolean {
  try {
    const parsed = new URL(url);
    if (parsed.origin !== origin) return false;
    if (SKIP_EXTENSIONS.test(parsed.pathname)) return false;
    if (SKIP_PATH_HINTS.test(parsed.pathname)) return false;
    return true;
  } catch {
    return false;
  }
}
