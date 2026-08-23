import type { CheerioAPI } from 'cheerio';

export interface JsonLdExtraction {
  blocks: unknown[];
  parseErrors: number;
}

/**
 * Pulls every <script type="application/ld+json"> block off the page,
 * flattening arrays and @graph wrappers so downstream checks can just
 * treat this as "a list of schema objects" without caring how they were
 * nested in the source.
 */
export function extractJsonLd($: CheerioAPI): JsonLdExtraction {
  const blocks: unknown[] = [];
  let parseErrors = 0;

  $('script[type="application/ld+json"]').each((_, el) => {
    const raw = $(el).contents().text();
    if (!raw || !raw.trim()) return;

    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        blocks.push(...parsed);
      } else if (parsed && Array.isArray((parsed as any)['@graph'])) {
        blocks.push(...(parsed as any)['@graph']);
      } else {
        blocks.push(parsed);
      }
    } catch {
      parseErrors += 1;
    }
  });

  return { blocks, parseErrors };
}

export function containsType(block: unknown, type: string): boolean {
  if (!block || typeof block !== 'object') return false;
  const t = (block as any)['@type'];
  if (t === type || (Array.isArray(t) && t.includes(type))) return true;
  return Object.values(block as object).some((v) => containsType(v, type));
}

export function hasField(block: unknown, field: string): boolean {
  if (!block || typeof block !== 'object') return false;
  if (field in (block as object)) return true;
  return Object.values(block as object).some((v) => hasField(v, field));
}
