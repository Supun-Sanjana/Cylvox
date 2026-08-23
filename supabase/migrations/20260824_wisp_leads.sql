create table if not exists public.wisp_leads (
  id uuid primary key default gen_random_uuid(),
  email text,
  domain text not null,
  source text not null check (source in ('registration', 'contact')),
  issues jsonb not null,
  message text,
  created_at timestamptz not null default now()
);

create index if not exists wisp_leads_domain_idx on public.wisp_leads (domain);
create index if not exists wisp_leads_created_idx on public.wisp_leads (created_at desc);

alter table public.wisp_leads enable row level security;
