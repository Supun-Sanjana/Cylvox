import type { ScanIssue } from '../types';
import { USER_AGENT, fetchRobotsTxtInfo } from '../fetchPage';

const RESOURCE_TIMEOUT_MS = 4000;

async function fetchStatus(url: string): Promise<number | null> {
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': USER_AGENT, Accept: 'text/plain,application/xml,text/xml' },
      signal: AbortSignal.timeout(RESOURCE_TIMEOUT_MS),
    });
    return response.status;
  } catch {
    return null;
  }
}

export async function checkDiscoverability(origin: string): Promise<ScanIssue[]> {
  const issues: ScanIssue[] = [];
  const robots = await fetchRobotsTxtInfo(origin);
  if (robots.status === 404 || robots.status === 410) {
    issues.push({ id: 'robots-txt-missing', sev: 'minor', title: 'robots.txt is missing', body: 'A robots.txt file gives well-behaved crawlers clear guidance about which parts of the site may be crawled.' });
  }

  const sitemapStatus = await fetchStatus(`${origin}/sitemap.xml`);
  if (sitemapStatus === null || sitemapStatus < 200 || sitemapStatus >= 400) {
    issues.push({ id: 'sitemap-missing', sev: 'minor', title: 'sitemap.xml is missing or unreachable', body: 'A reachable XML sitemap can help search engines discover the site’s canonical URLs.' });
  }

  const llmsStatus = await fetchStatus(`${origin}/llms.txt`);
  if (llmsStatus === null || llmsStatus < 200 || llmsStatus >= 300) {
    issues.push({ id: 'llms-txt-missing', sev: 'minor', title: 'llms.txt was not found', body: 'An llms.txt file may help AI and search systems understand the site better; this is an optional discoverability enhancement, not a ranking guarantee.' });
  }
  return issues;
}
