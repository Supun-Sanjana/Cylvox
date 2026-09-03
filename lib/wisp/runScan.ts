import * as cheerio from 'cheerio';
import { fetchHomepage, normalizeUrl, ScanFetchError } from './fetchPage';
import { extractJsonLd } from './jsonld';
import { checkIndexability } from './checks/indexability';
import { checkAuthorship } from './checks/authorship';
import { checkStructuredData } from './checks/schema';
import { checkOnPage } from './checks/onpage';
import { checkDiscoverability } from './checks/discoverability';
import type { ScanResult } from './types';
import { addIssueGuidance } from './issueGuidance';

export { ScanFetchError };

export async function runScan(rawUrl: string): Promise<ScanResult> {
  const url = normalizeUrl(rawUrl);
  const page = await fetchHomepage(url);
  const $ = cheerio.load(page.html);
  const { blocks: jsonLdBlocks, parseErrors } = extractJsonLd($);

  const indexabilityIssues = await checkIndexability($, page.status, page.headers, page.finalUrl);
  const authorshipIssues = checkAuthorship($, jsonLdBlocks);
  const structuredDataIssues = checkStructuredData(jsonLdBlocks, parseErrors);
  const onPageIssues = checkOnPage($);
  const discoverabilityIssues = await checkDiscoverability(new URL(page.finalUrl).origin);

  const issues = [...indexabilityIssues, ...authorshipIssues, ...structuredDataIssues, ...onPageIssues, ...discoverabilityIssues].map(addIssueGuidance);

  return {
    url: rawUrl,
    finalUrl: page.finalUrl,
    scannedAt: new Date().toISOString(),
    issues,
    checksRun: ['indexability', 'authorship', 'structured-data', 'on-page', 'discoverability'],
    clean: issues.filter((i) => i.sev === 'critical').length === 0,
  };
}
