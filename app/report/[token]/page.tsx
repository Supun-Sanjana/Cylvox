import { createClient } from '@supabase/supabase-js';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildContactUrl } from '@/lib/wisp/buildContactUrl';
import type { ScanIssue } from '@/lib/wisp/types';

export const metadata: Metadata = {
  title: 'Your Wisp scan report',
  robots: { index: false, follow: false }, // token-gated, not meant to rank
};

interface MultiScanRow {
  id: string;
  domain: string;
  root_url: string;
  status: 'running' | 'done' | 'failed';
  pages_scanned: number;
  total_issues: number;
  critical_issues: number;
  likely_wordpress: boolean;
  created_at: string;
}

interface PageResultRow {
  url: string;
  status: 'ok' | 'failed';
  issues: ScanIssue[];
  clean: boolean;
  error_message: string | null;
}

function getSupabase() {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
}

async function getReport(token: string) {
  const supabase = getSupabase();

  const { data: scan } = await supabase
    .from('wisp_multi_scans')
    .select('id, domain, root_url, status, pages_scanned, total_issues, critical_issues, likely_wordpress, created_at')
    .eq('report_token', token)
    .single<MultiScanRow>();

  if (!scan) return null;

  const { data: pages } = await supabase
    .from('wisp_page_results')
    .select('url, status, issues, clean, error_message')
    .eq('multi_scan_id', scan.id)
    .order('created_at', { ascending: true })
    .returns<PageResultRow[]>();

  return { scan, pages: pages ?? [] };
}

type PageProps = { params: Promise<{ token: string }> };

export default async function ReportPage({ params }: PageProps) {
  const { token } = await params;
  const report = await getReport(token);

  if (!report) notFound();
  const { scan, pages } = report;

  const allIssues = pages.flatMap((p) => p.issues);
  const contactHref = buildContactUrl(scan.domain, allIssues);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-muted-foreground mb-2">Wisp report for</p>
        <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-6">{scan.domain}</h1>

        {scan.status === 'running' && (
          <div className="rounded-2xl border border-border bg-surface p-6 text-foreground">
            Still scanning — refresh this page in a minute. If it&apos;s been longer than that, the scan may
            have hit a snag; feel free to <Link href="/contact" className="underline">reach out</Link>.
          </div>
        )}

        {scan.status === 'failed' && (
          <div className="rounded-2xl border border-border bg-surface p-6 text-foreground">
            This scan didn&apos;t finish successfully. <Link href="/contact" className="underline">Let us know</Link> and
            we&apos;ll take a manual look instead.
          </div>
        )}

        {scan.status === 'done' && (
          <>
            <div className="flex flex-wrap gap-4 mb-8">
              <Stat label="Pages scanned" value={scan.pages_scanned} />
              <Stat label="Critical issues" value={scan.critical_issues} accent={scan.critical_issues > 0} />
              <Stat label="Total findings" value={scan.total_issues} />
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href={contactHref}
                className="inline-flex items-center rounded-full bg-jade text-void px-5 py-2.5 text-sm font-medium"
              >
                Have Cylvox fix it
              </Link>
              {scan.likely_wordpress && (
                <Link
                  href="/trust-signal-auditor"
                  className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground"
                >
                  This looks like WordPress — install Trustlyne to keep monitoring it
                </Link>
              )}
            </div>

            <div className="space-y-4">
              {pages.map((page) => (
                <PageCard key={page.url} page={page} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-surface px-5 py-4 min-w-[140px]">
      <div className={`text-3xl font-display ${accent ? 'text-coral' : 'text-foreground'}`}>{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function PageCard({ page }: { page: PageResultRow }) {
  let path = page.url;
  try {
    const u = new URL(page.url);
    path = u.pathname === '' ? '/' : u.pathname;
  } catch {
    // keep raw url as fallback
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-foreground">{path}</span>
        {page.status === 'failed' ? (
          <span className="text-sm text-muted-foreground">couldn&apos;t scan — {page.error_message}</span>
        ) : page.clean ? (
          <span className="text-sm text-jade">clean</span>
        ) : (
          <span className="text-sm text-coral">
            {page.issues.filter((i) => i.sev === 'critical').length} critical
          </span>
        )}
      </div>

      {page.status === 'ok' && page.issues.length > 0 && (
        <ul className="space-y-1.5 mt-3">
          {page.issues.map((issue) => (
            <li key={issue.id} className="text-sm text-muted-foreground">
              <span
                className={`inline-block text-xs uppercase tracking-wide mr-2 ${
                  issue.sev === 'critical' ? 'text-coral' : 'text-gold'
                }`}
              >
                {issue.sev}
              </span>
              <b className="text-foreground">{issue.title}</b> — {issue.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
