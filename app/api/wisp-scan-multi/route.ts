import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { runMultiScan } from '@/lib/wisp/multiScan';
import { normalizeUrl, ScanFetchError } from '@/lib/wisp/fetchPage';
import { checkRateLimit, recordScan, hashIp } from '@/lib/wisp/rateLimit';

// Same reasoning as wisp-scan: cheerio needs Node, not Edge.
export const runtime = 'nodejs';
// Scanning up to 8 pages at concurrency 3 is normally well under a
// minute, but give it real headroom on hosts that respect this (Vercel
// Pro+/self-hosted). On plans that cap function duration lower than
// this, MAX_PAGES should come down to match rather than this number
// going up — see lib/wisp/discoverPages.ts.
export const maxDuration = 60;

const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cylvox.com';

function getSupabase() {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
}

// Outside production, append the real underlying error so local debugging
// doesn't dead-end at a generic string. In production this stays generic —
// Postgres/Supabase error text can leak schema details we don't want to
// hand back to an anonymous caller.
function devMessage(err: unknown, fallback: string): string {
  if (process.env.NODE_ENV === 'production') return fallback;
  const detail =
    err && typeof err === 'object' && 'message' in err
      ? String((err as { message?: unknown }).message)
      : String(err);
  return detail ? `${fallback} (${detail})` : fallback;
}

export async function POST(req: NextRequest) {
  let body: { email?: string; domain?: string; url?: string; issues?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  const rawUrl = body.url || body.domain;
  if (!body.email || !rawUrl) {
    return NextResponse.json({ error: 'missing_fields', message: 'Email and a URL are required.' }, { status: 400 });
  }

  // Fail loudly and safely here rather than letting createClient() throw
  // synchronously below — an unguarded throw at that point happens before
  // any of this route's error handling runs, so the client just sees a
  // broken response and falls back to a generic message. This is the
  // most common local-dev failure mode (missing .env.local values).
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('wisp-scan-multi: SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not set');
    return NextResponse.json(
      {
        error: 'server_misconfigured',
        message:
          process.env.NODE_ENV === 'production'
            ? 'This feature is temporarily unavailable.'
            : 'SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set in your local env.',
      },
      { status: 500 }
    );
  }

  const supabase = getSupabase();

  let homepageUrl: URL;
  try {
    homepageUrl = normalizeUrl(rawUrl);
  } catch (err) {
    if (err instanceof ScanFetchError) {
      return NextResponse.json({ error: err.code, message: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'invalid_url', message: 'That URL is not valid.' }, { status: 400 });
  }
  const domain = homepageUrl.hostname;

  // Reuse the same domain-cooldown / per-IP limiting the single-page
  // scan uses, against the same wisp_scans table — a multi-page scan is
  // heavier, so it should be at least as rate-limited as a single-page
  // one, not less.
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';
  const ipHash = hashIp(ip);

  try {
    const rate = await checkRateLimit(domain, ipHash);
    if (!rate.allowed) {
      const message =
        rate.reason === 'domain_cooldown'
          ? 'This site was already scanned in the last 24 hours.'
          : "Too many scans from this connection today — try again tomorrow.";
      return NextResponse.json({ error: rate.reason, message }, { status: 429 });
    }
  } catch (err) {
    console.error('wisp-scan-multi rate limit check failed:', err);
    return NextResponse.json(
      { error: 'rate_limit_check_failed', message: devMessage(err, 'Could not check scan limits.') },
      { status: 500 }
    );
  }

  // Keep the existing wisp_leads insert for analytics/CRM continuity —
  // this table already tracks registration-source leads and nothing
  // downstream needs to change.
  await supabase
    .from('wisp_leads')
    .insert({
      email: body.email,
      domain,
      issues: body.issues ?? [],
      source: 'registration',
      message: null,
    })
    .then(({ error }) => {
      if (error) console.error('wisp_leads insert failed:', error);
    });

  const { data: jobRow, error: insertError } = await supabase
    .from('wisp_multi_scans')
    .insert({ domain, root_url: homepageUrl.toString(), email: body.email, status: 'running' })
    .select('id, report_token')
    .single();

  if (insertError || !jobRow) {
    console.error('wisp_multi_scans insert failed:', insertError);
    return NextResponse.json(
      {
        error: 'scan_job_failed',
        message: devMessage(
          insertError,
          "Couldn't start the scan job. If this is local/dev, confirm the wisp_multi_scans migration has been applied."
        ),
      },
      { status: 500 }
    );
  }

  const reportUrl = `${siteBaseUrl}/report/${jobRow.report_token}`;

  try {
    const result = await runMultiScan(rawUrl);
    await recordScan(domain, ipHash);

    await supabase
      .from('wisp_multi_scans')
      .update({
        status: 'done',
        pages_scanned: result.pagesScanned,
        total_issues: result.totalIssues,
        critical_issues: result.criticalIssues,
        likely_wordpress: result.likelyWordPress,
        completed_at: new Date().toISOString(),
      })
      .eq('id', jobRow.id);

    const pageRows = result.pages.map((p) => ({
      multi_scan_id: jobRow.id,
      url: p.url,
      status: p.status,
      issues: p.issues,
      clean: p.clean,
      error_message: p.errorMessage ?? null,
    }));
    const { error: pagesError } = await supabase.from('wisp_page_results').insert(pageRows);
    if (pagesError) console.error('wisp_page_results insert failed:', pagesError);

    await sendReportEmail(body.email, domain, reportUrl, result.criticalIssues, result.pagesScanned);

    return NextResponse.json({
      ok: true,
      reportUrl,
      pagesScanned: result.pagesScanned,
      criticalIssues: result.criticalIssues,
    });
  } catch (err) {
    console.error('wisp-scan-multi failed:', err);
    await supabase
      .from('wisp_multi_scans')
      .update({
        status: 'failed',
        error_message: err instanceof Error ? err.message : 'unknown_error',
        completed_at: new Date().toISOString(),
      })
      .eq('id', jobRow.id);

    return NextResponse.json(
      { error: 'scan_failed', message: "Couldn't finish scanning that site. Try again shortly." },
      { status: 500 }
    );
  }
}

async function sendReportEmail(
  email: string,
  domain: string,
  reportUrl: string,
  criticalIssues: number,
  pagesScanned: number
): Promise<void> {
  if (!process.env.RESEND_API_KEY) return;
  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    const issueLine =
      criticalIssues > 0
        ? `${criticalIssues} critical issue${criticalIssues === 1 ? '' : 's'} across ${pagesScanned} pages`
        : `no critical issues across ${pagesScanned} pages — nice`;

    await resend.emails.send({
      from: 'Wisp <hello@cylvox.com>',
      to: email,
      subject: `Your ${domain} scan is ready`,
      text: `Wisp checked ${pagesScanned} pages on ${domain} and found ${issueLine}.\n\nFull report: ${reportUrl}`,
    });
  } catch (err) {
    console.error('report email failed to send:', err);
  }
}