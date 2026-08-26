// Heuristic only — good enough to decide which CTA to show on the report
// page, not asserted anywhere as a certainty. False negatives are fine
// (worst case: generic CTA instead of the WordPress-specific one).

export function isLikelyWordPress(html: string): boolean {
  return (
    /wp-content\//i.test(html) ||
    /wp-includes\//i.test(html) ||
    /<meta[^>]+name=["']generator["'][^>]+content=["']WordPress/i.test(html) ||
    /\/wp-json\//i.test(html)
  );
}
