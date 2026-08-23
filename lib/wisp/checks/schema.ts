import type { ScanIssue } from '../types';
import { containsType } from '../jsonld';

export function checkStructuredData(jsonLdBlocks: unknown[], parseErrors: number): ScanIssue[] {
  const issues: ScanIssue[] = [];

  if (parseErrors > 0) {
    issues.push({
      id: 'invalid-json-ld',
      sev: 'critical',
      title: `${parseErrors} broken JSON-LD block${parseErrors > 1 ? 's' : ''}`,
      body: 'One or more <script type="application/ld+json"> blocks failed to parse as valid JSON. Search engines silently ignore invalid structured data rather than partially reading it.',
    });
  }

  if (jsonLdBlocks.length === 0) {
    issues.push({
      id: 'no-structured-data',
      sev: 'critical',
      title: 'No structured data found',
      body: 'No JSON-LD schema markup on the homepage — no Organization, WebSite, or Article schema at all.',
    });
    return issues; // nothing else to evaluate
  }

  const faqBlocks = jsonLdBlocks.filter((b) => containsType(b, 'FAQPage'));
  if (faqBlocks.some((b) => !looksLikeValidFaq(b))) {
    issues.push({
      id: 'faq-schema-incomplete',
      sev: 'minor',
      title: 'FAQ schema is incomplete',
      body: 'A FAQPage block exists but is missing mainEntity or has malformed Question/Answer pairs.',
    });
  }

  const articleBlocks = jsonLdBlocks.filter(
    (b) => containsType(b, 'Article') || containsType(b, 'BlogPosting')
  );
  const missingFields = articleBlocks.flatMap((b) => missingArticleFields(b));
  if (missingFields.length > 0) {
    const unique = [...new Set(missingFields)];
    issues.push({
      id: 'article-schema-missing-fields',
      sev: 'minor',
      title: 'Article schema is missing fields',
      body: `Missing: ${unique.join(', ')}. Incomplete Article schema is often ignored entirely rather than partially applied.`,
    });
  }

  return issues;
}

function looksLikeValidFaq(block: unknown): boolean {
  if (!block || typeof block !== 'object') return false;
  const entity = (block as any).mainEntity;
  if (!entity) return false;
  const list = Array.isArray(entity) ? entity : [entity];
  if (list.length === 0) return false;
  return list.every((q) => q?.['@type'] === 'Question' && q?.name && q?.acceptedAnswer?.text);
}

function missingArticleFields(block: unknown): string[] {
  if (!block || typeof block !== 'object') return [];
  const required = ['headline', 'datePublished', 'author'];
  return required.filter((field) => !(field in (block as object)));
}
