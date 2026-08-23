import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

// Service-role client — this file is only ever imported server-side
// (from the route handler), never bundled for the client.
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

const DOMAIN_COOLDOWN_HOURS = 24;
const MAX_SCANS_PER_IP_PER_DAY = 20;

export function hashIp(ip: string): string {
  // We never need the raw IP back — a truncated hash is enough to rate
  // limit without storing something that's arguably PII in plain form.
  return crypto.createHash('sha256').update(ip).digest('hex').slice(0, 24);
}

export interface RateLimitResult {
  allowed: boolean;
  reason?: 'domain_cooldown' | 'ip_limit';
}

export async function checkRateLimit(domain: string, ipHash: string): Promise<RateLimitResult> {
  const domainSince = new Date(Date.now() - DOMAIN_COOLDOWN_HOURS * 60 * 60 * 1000).toISOString();

  const { count: domainCount, error: domainErr } = await supabase
    .from('wisp_scans')
    .select('id', { count: 'exact', head: true })
    .eq('domain', domain)
    .gte('created_at', domainSince);

  if (domainErr) throw domainErr;
  if ((domainCount ?? 0) > 0) {
    return { allowed: false, reason: 'domain_cooldown' };
  }

  const daySince = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const { count: ipCount, error: ipErr } = await supabase
    .from('wisp_scans')
    .select('id', { count: 'exact', head: true })
    .eq('ip_hash', ipHash)
    .gte('created_at', daySince);

  if (ipErr) throw ipErr;
  if ((ipCount ?? 0) >= MAX_SCANS_PER_IP_PER_DAY) {
    return { allowed: false, reason: 'ip_limit' };
  }

  return { allowed: true };
}

export async function recordScan(domain: string, ipHash: string): Promise<void> {
  const { error } = await supabase.from('wisp_scans').insert({ domain, ip_hash: ipHash });
  if (error) throw error;
}
