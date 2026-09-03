alter table public.wisp_leads
  drop constraint if exists wisp_leads_source_check;

alter table public.wisp_leads
  add constraint wisp_leads_source_check
  check (source in ('registration', 'contact', 'plugin-waitlist'));
