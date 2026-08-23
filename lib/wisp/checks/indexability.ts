import type { CheerioAPI } from 'cheerio';
import type { ScanIssue } from '../types';
import { fetchRobotsTxt } from '../fetchPage';

export async function checkIndexability(
  $: CheerioAPI,
  status: number,
  headers: Headers,
  finalUrl: string
): Promise<ScanIssue[]> {
  const issues: ScanIssue[] = [];
  const origin = new URL(finalUrl).origin;

  if (status < 200 || status >= 300) {
    issues.push({
      id: 'non-200-status',
      sev: 'critical',
      title: `Homepage returned a ${status}`,
      body: `Search engines expect a 200 on the homepage. A ${status} response can quietly tank indexing over time.`,
    });
  }

  const metaRobots = $('meta[name="robots" i]').attr('content') || '';
  const xRobotsHeader = headers.get('x-robots-tag') || '';
  if (/noindex/i.test(metaRobots) || /noindex/i.test(xRobotsHeader)) {
    const source = /noindex/i.test(metaRobots)
      ? 'a <meta name="robots"> tag'
      : 'the X-Robots-Tag header';
    issues.push({
      id: 'homepage-noindex',
      sev: 'critical',
      title: 'Homepage is set to noindex',
      body: `Found "noindex" in ${source}. This tells search engines not to index the page at all.`,
    });
  }

  const canonical = $('link[rel="canonical" i]').attr('href');
  if (!canonical) {
    issues.push({
      id: 'missing-canonical',
      sev: 'minor',
      title: 'No canonical tag on the homepage',
      body: 'A self-referencing canonical tag helps avoid duplicate-content confusion, especially on sites reachable via multiple URL variants (www, trailing slash, http vs https).',
    });
  }

  const robotsTxt = await fetchRobotsTxt(origin);
  if (robotsTxt && isRootDisallowedForAll(robotsTxt)) {
    issues.push({
      id: 'homepage-blocked-by-robots',
      sev: 'critical',
      title: 'robots.txt disallows the whole site',
      body: 'robots.txt has a "Disallow: /" rule under User-agent: * — this blocks crawling for every well-behaved bot, including Googlebot.',
    });
  }

  return issues;
}

/**
 * Deliberately simple robots.txt parser: only checks whether the
 * catch-all (User-agent: *) group disallows the root path. This isn't a
 * full spec-compliant parser (no wildcard/pattern matching, no per-bot
 * groups) — good enough to catch the common "entire site blocked"
 * mistake without pulling in a dependency for it.
 */
function isRootDisallowedForAll(robotsTxt: string): boolean {
  const lines = robotsTxt.split('\n').map((l) => l.trim());
  let inCatchAllGroup = false;

  for (const line of lines) {
    if (/^user-agent:\s*\*/i.test(line)) {
      inCatchAllGroup = true;
      continue;
    }
    if (/^user-agent:/i.test(line)) {
      inCatchAllGroup = false;
      continue;
    }
    if (inCatchAllGroup && /^disallow:\s*\/\s*$/i.test(line)) {
      return true;
    }
  }
  return false;
}
