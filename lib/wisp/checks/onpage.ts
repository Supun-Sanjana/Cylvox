import type { CheerioAPI } from 'cheerio';
import type { ScanIssue } from '../types';

export function checkOnPage($: CheerioAPI): ScanIssue[] {
  const issues: ScanIssue[] = [];
  const titles = $('title');
  const title = titles.first().text().trim();
  if (titles.length === 0 || !title) {
    issues.push({ id: 'missing-title', sev: 'critical', title: 'Homepage is missing a title', body: 'Every indexable page should have a unique, descriptive title in the document head.' });
  } else if (titles.length > 1) {
    issues.push({ id: 'duplicate-title', sev: 'minor', title: 'Homepage contains multiple title tags', body: 'Multiple title elements make it unclear which title search engines should use.' });
  } else if (title.length < 10 || title.length > 60) {
    issues.push({ id: 'title-length-out-of-range', sev: 'minor', title: 'Homepage title length is out of range', body: `The title is ${title.length} characters; aim for a clear title of roughly 10–60 characters.` });
  }

  const description = $('meta[name="description" i]').attr('content')?.trim() ?? '';
  if (!description) {
    issues.push({ id: 'missing-meta-description', sev: 'minor', title: 'Homepage is missing a meta description', body: 'A concise meta description gives search engines useful context for the page snippet.' });
  }

  const h1Count = $('h1').length;
  if (h1Count === 0) {
    issues.push({ id: 'missing-h1', sev: 'minor', title: 'Homepage has no H1 heading', body: 'Add one clear primary heading that describes the page’s main topic.' });
  } else if (h1Count > 1) {
    issues.push({ id: 'multiple-h1', sev: 'minor', title: 'Homepage has multiple H1 headings', body: 'Use one primary H1 and structure supporting sections with lower-level headings.' });
  }

  const missingAlt = $('img').filter((_, image) => !($(image).attr('alt') ?? '').trim()).length;
  if (missingAlt > 0) {
    issues.push({ id: 'images-missing-alt', sev: 'minor', title: `${missingAlt} image${missingAlt === 1 ? '' : 's'} missing alt text`, body: 'Provide concise alternative text for meaningful images; use an empty alt attribute only for decorative images.' });
  }
  return issues;
}
