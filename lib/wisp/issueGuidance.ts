const ISSUE_GUIDANCE: Record<string, string> = {
  'non-200-status': 'Inspect the homepage response and hosting, redirect, or application logic so the canonical homepage resolves with HTTP 200.',
  'homepage-noindex': 'Remove the noindex directive from the homepage meta robots tag or X-Robots-Tag header unless keeping the homepage out of search is intentional.',
  'missing-canonical': 'Add a canonical link element in the homepage head pointing to the preferred absolute URL.',
  'homepage-blocked-by-robots': 'Update robots.txt so the catch-all User-agent: * group does not disallow the entire site; keep only paths that should stay private blocked.',
  'no-author-byline': 'Add a visible author name or byline to editorial content, and link it to a stable author profile where appropriate.',
  'no-author-bio': 'Publish a concise author biography that explains relevant experience, credentials, and the topics the author covers.',
  'no-person-schema': 'Add valid Person JSON-LD for the author and connect it to the article author field, including stable profile or sameAs links when available.',
  'invalid-json-ld': 'Validate each JSON-LD block as JSON, then correct malformed quotes, commas, escaping, or template output before deploying it.',
  'no-structured-data': 'Add schema markup that accurately describes the page type, using only properties supported by the visible page content.',
  'faq-schema-incomplete': 'Complete the FAQ schema with question and accepted-answer text that matches the FAQ content rendered on the page.',
  'article-schema-missing-fields': 'Complete the Article schema with the headline, author, datePublished, and dateModified values that are visible or reliably maintained on the page.',
  'missing-title': 'Add one unique, descriptive title element to the homepage head.',
  'duplicate-title': 'Remove duplicate title elements so the page has one authoritative title.',
  'title-length-out-of-range': 'Rewrite the title to be concise and descriptive, aiming for roughly 10–60 characters.',
  'missing-meta-description': 'Add a concise meta description that accurately summarizes the homepage.',
  'missing-h1': 'Add one visible H1 that clearly states the homepage’s primary topic or value proposition.',
  'multiple-h1': 'Keep one primary H1 and change supporting headings to H2 or lower.',
  'images-missing-alt': 'Add descriptive alt text to meaningful images and use alt="" for decorative images.',
  'robots-txt-missing': 'Publish a valid robots.txt at the site root with crawler guidance appropriate for the site.',
  'sitemap-missing': 'Generate and publish a sitemap.xml, then ensure it responds successfully at the site root.',
  'llms-txt-missing': 'Optionally publish an llms.txt file describing the site in a way that may help AI and search systems understand it better.',
};

export function addIssueGuidance<T extends { id: string }>(issue: T): T & { howToFix: string } {
  return {
    ...issue,
    howToFix: ISSUE_GUIDANCE[issue.id] ?? 'Review the finding against the page source and apply the smallest change that resolves the underlying issue.',
  };
}
