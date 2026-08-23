-- Tracks scan attempts for rate limiting only. No scan results are
-- stored here — this table exists purely so the API route can answer
-- "has this domain been scanned in the last 24h" and "has this IP
-- scanned too many times today" without an in-memory store that
-- wouldn't survive a serverless cold start / multiple instances.

create table if not exists public.wisp_scans (
  id uuid primary key default gen_random_uuid(),
  domain text not null,
  ip_hash text not null,
  created_at timestamptz not null default now()
);

create index if not exists wisp_scans_domain_created_idx
  on public.wisp_scans (domain, created_at desc);

create index if not exists wisp_scans_iphash_created_idx
  on public.wisp_scans (ip_hash, created_at desc);

-- This table is only ever written to via the service-role key from the
-- API route (never from the browser), so RLS just needs to be on with
-- no permissive policies — service role bypasses RLS by design.
alter table public.wisp_scans enable row level security;
