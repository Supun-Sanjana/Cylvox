-- Multi-page scan jobs, triggered from the Wisp email-gate ("scan my
-- full site") flow. One row per registration; report_token is the
-- unguessable id used in the public /report/[token] page URL and the
-- link sent by email — no login required to view it.

create table if not exists public.wisp_multi_scans (
  id uuid primary key default gen_random_uuid(),
  report_token uuid not null default gen_random_uuid() unique,
  domain text not null,
  root_url text not null,
  email text not null,
  status text not null default 'running' check (status in ('running', 'done', 'failed')),
  pages_scanned int not null default 0,
  total_issues int not null default 0,
  critical_issues int not null default 0,
  likely_wordpress boolean not null default false,
  error_message text,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create index if not exists wisp_multi_scans_domain_created_idx
  on public.wisp_multi_scans (domain, created_at desc);

-- report_token already has a unique index via the column constraint,
-- which is what the report page looks up by.

alter table public.wisp_multi_scans enable row level security;
-- Written and read via the service-role key only (API route + report
-- page's server-side fetch use the unguessable token as the actual
-- access control, not RLS policies) — same pattern as wisp_scans.

create table if not exists public.wisp_page_results (
  id uuid primary key default gen_random_uuid(),
  multi_scan_id uuid not null references public.wisp_multi_scans (id) on delete cascade,
  url text not null,
  status text not null check (status in ('ok', 'failed')),
  issues jsonb not null default '[]'::jsonb,
  clean boolean not null default true,
  error_message text,
  created_at timestamptz not null default now()
);

create index if not exists wisp_page_results_multi_scan_idx
  on public.wisp_page_results (multi_scan_id);

alter table public.wisp_page_results enable row level security;
