import type { ScanIssue } from './types';

export function buildContactUrl(domain: string, issues: ScanIssue[]): string {
  const summary = issues.map((i) => i.title).join('; ');
  const params = new URLSearchParams({
    source: 'wisp',
    domain,
    issues: summary,
  });
  return `/contact?${params.toString()}`;
}
