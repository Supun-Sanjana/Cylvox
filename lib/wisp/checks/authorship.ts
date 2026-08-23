import type { CheerioAPI } from 'cheerio';
import type { ScanIssue } from '../types';
import { containsType, hasField } from '../jsonld';

// Heuristic selectors — these cover the common WP theme / hand-rolled
// patterns, not an exhaustive list. False negatives are expected on
// unusual themes; that's why the "no bio" finding explicitly flags
// itself as heuristic in its body text rather than stating it as fact.
const BYLINE_SELECTORS = [
  '[rel="author"]',
  '.author-name',
  '.byline',
  '.post-author',
  '[itemprop="author"]',
  'a[href*="/author/"]',
];

const BIO_SELECTORS = [
  '.author-bio',
  '.author-description',
  '.author-box',
  '[itemprop="description"]',
  '.about-author',
];

export function checkAuthorship($: CheerioAPI, jsonLdBlocks: unknown[]): ScanIssue[] {
  const issues: ScanIssue[] = [];

  const hasByline = BYLINE_SELECTORS.some((sel) => $(sel).length > 0);
  const hasAuthorField = jsonLdBlocks.some((block) => hasField(block, 'author'));
  const hasPersonSchema = jsonLdBlocks.some((block) => containsType(block, 'Person'));
  const hasNamedAuthor = hasByline || hasAuthorField;

  if (!hasNamedAuthor) {
    issues.push({
      id: 'no-author-byline',
      sev: 'critical',
      title: 'No author byline detected',
      body: "Couldn't find a visible author name or an author field in structured data. Unattributed content is one of the first things reviewers check for E-E-A-T.",
    });
  }

  const hasBioText = BIO_SELECTORS.some((sel) => $(sel).text().trim().length > 20);
  if (hasNamedAuthor && !hasBioText) {
    issues.push({
      id: 'no-author-bio',
      sev: 'critical',
      title: 'Author name found, but no bio nearby',
      body: "A byline exists but no bio or credentials were found near it. This check is heuristic — worth a manual look if the theme structures author info unusually.",
    });
  }

  if (hasNamedAuthor && !hasPersonSchema) {
    issues.push({
      id: 'no-person-schema',
      sev: 'minor',
      title: 'No Person schema for the author',
      body: 'Structured data has no Person type tied to the author. This is what lets search engines connect a byline to a specific, credentialed entity rather than just a name string.',
    });
  }

  return issues;
}
