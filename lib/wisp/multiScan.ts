import * as cheerio from 'cheerio';
import { fetchHomepage, normalizeUrl, ScanFetchError } from './fetchPage';
import { extractJsonLd } from './jsonld';
import { checkAuthorship } from './checks/authorship';
import { checkStructuredData } from './checks/schema';
import { discoverPages, MAX_PAGES } from './discoverPages';
import { isLikelyWordPress } from './detectPlatform';
import type { ScanIssue } from './types';

const CONCURRENCY = 3;

export interface PageScanResult {
  url: string;
  status: 'ok' | 'failed';
  issues: ScanIssue[];
  clean: boolean;
  errorMessage?: string;
}

export interface MultiScanResult {
  rootUrl: string;
  domain: string;
  pages: PageScanResult[];
  pagesScanned: number;
  totalIssues: number;
  criticalIssues: number;
  likelyWordPress: boolean;
}

/**
 * Scans the homepage plus up to MAX_PAGES-1 more pages discovered via
 * sitemap.xml (or homepage links as a fallback). Runs the same three
 * checks used by the single-page Wisp scan against every page. Bounded
 * and concurrency-limited so this comfortably finishes inside one
 * serverless request rather than needing a background job queue.
 */
export async function runMultiScan(rawUrl: string): Promise<MultiScanResult> {
  const homepageUrl = normalizeUrl(rawUrl);
  const homepage = await fetchHomepage(homepageUrl);

  const pageUrls = await discoverPages(homepageUrl, homepage.html);
  const likelyWordPress = isLikelyWordPress(homepage.html);

  // Homepage is already fetched — scan it directly instead of re-fetching,
  // then fan out over the rest with bounded concurrency.
  const homepageResult = scanFetchedPage(homepageUrl.toString(), homepage.html);
  const restResults = await runWithConcurrency(
    pageUrls.slice(1, MAX_PAGES),
    CONCURRENCY,
    (url) => scanOnePage(url)
  );

  const pages = [homepageResult, ...restResults];
  const totalIssues = pages.reduce((sum, p) => sum + p.issues.length, 0);
  const criticalIssues = pages.reduce(
    (sum, p) => sum + p.issues.filter((i) => i.sev === 'critical').length,
    0
  );

  return {
    rootUrl: homepageUrl.toString(),
    domain: homepageUrl.hostname,
    pages,
    pagesScanned: pages.length,
    totalIssues,
    criticalIssues,
    likelyWordPress,
  };
}

async function scanOnePage(url: string): Promise<PageScanResult> {
  try {
    const parsed = normalizeUrl(url);
    const page = await fetchHomepage(parsed);
    return scanFetchedPage(url, page.html);
  } catch (err) {
    const message = err instanceof ScanFetchError ? err.message : 'Could not scan this page.';
    return { url, status: 'failed', issues: [], clean: true, errorMessage: message };
  }
}

function scanFetchedPage(url: string, html: string): PageScanResult {
  const $ = cheerio.load(html);
  const { blocks: jsonLdBlocks, parseErrors } = extractJsonLd($);
  const issues = runPerPageChecks($, jsonLdBlocks, parseErrors);

  return {
    url,
    status: 'ok',
    issues,
    clean: issues.filter((i) => i.sev === 'critical').length === 0,
  };
}

// checkIndexability (the third check the single-page scan runs) is async
// because it does its own robots.txt fetch. robots.txt is domain-wide,
// not per-page, so re-running it for every page in a multi-page scan
// would be redundant work and slow. It's deliberately skipped here —
// authorship + structured-data are the two checks that genuinely vary
// page to page and matter most for a multi-page trust-signal comparison.
function runPerPageChecks(
  $: cheerio.CheerioAPI,
  jsonLdBlocks: ReturnType<typeof extractJsonLd>['blocks'],
  parseErrors: ReturnType<typeof extractJsonLd>['parseErrors']
): ScanIssue[] {
  const authorshipIssues = checkAuthorship($, jsonLdBlocks);
  const structuredDataIssues = checkStructuredData(jsonLdBlocks, parseErrors);
  return [...authorshipIssues, ...structuredDataIssues];
}

/** Simple bounded-concurrency mapper — no external queue library needed
 *  for a job this small (at most MAX_PAGES-1 items). */
async function runWithConcurrency<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let index = 0;

  async function worker(): Promise<void> {
    while (index < items.length) {
      const current = index++;
      results[current] = await fn(items[current]);
    }
  }

  const workers = Array.from({ length: Math.min(limit, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}
