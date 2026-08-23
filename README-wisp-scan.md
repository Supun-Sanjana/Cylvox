# Wisp homepage scan — setup notes

## What this is

A rule-based scanner: fetch a homepage server-side, run deterministic
checks (indexability, authorship, structured data), return a list of
issues. No AI involved anywhere in this pass — detection is all
HTML/header/JSON-LD parsing, same category of logic as the Trustlyne
plugin's checks, just adapted to fetch arbitrary external HTML instead
of querying the WP DB directly. Cost to run: effectively zero.

## Install

```bash
npm install cheerio @supabase/supabase-js
```

## Env vars

```
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

Use the **service role** key, not the anon key — `lib/wisp/rateLimit.ts`
writes to `wisp_scans` directly and RLS on that table has no permissive
policies for anon/authenticated roles by design (see the migration
comment). Never import `rateLimit.ts` from anything that ships to the
browser.

## Apply the migration

```bash
supabase migration up
# or, if you're pushing directly:
psql "$DATABASE_URL" -f supabase/migrations/20260823_wisp_scans.sql
```

## File map

```
lib/wisp/
  types.ts               ScanIssue / ScanResult shapes
  fetchPage.ts            SSRF-safe fetch, timeout, 2MB cap, robots.txt fetch
  jsonld.ts               JSON-LD extraction + type/field helpers
  rateLimit.ts            Supabase-backed domain cooldown + per-IP daily cap
  runScan.ts              orchestrates fetch + all checks
  checks/
    indexability.ts       noindex, robots.txt, canonical, HTTP status
    authorship.ts         byline, bio, Person schema
    schema.ts             JSON-LD presence, FAQ/Article completeness

app/api/wisp-scan/route.ts   POST handler wiring rate limit + scan together

supabase/migrations/20260823_wisp_scans.sql
```

## Request / response shape

```
POST /api/wisp-scan
{ "url": "zymgut.com" }
```

```jsonc
// 200
{
  "url": "zymgut.com",
  "finalUrl": "https://zymgut.com/",
  "scannedAt": "2026-08-23T12:00:00.000Z",
  "issues": [
    { "id": "no-author-bio", "sev": "critical", "title": "...", "body": "..." }
  ],
  "checksRun": ["indexability", "authorship", "structured-data"],
  "clean": false
}
```

```jsonc
// 429 — rate limited
{ "error": "domain_cooldown", "message": "This site was already scanned in the last 24 hours." }
```

The `issues[]` shape (`{ id, sev, title, body }`) matches what the Wisp
widget prototype already renders — `sev` maps directly to `.sev-critical`
/ `.sev-minor`, `title`/`body` drop straight into the issue list markup.
Wiring the widget to this route should just mean replacing the mock
`mockFindings` array with a real `fetch('/api/wisp-scan', ...)` call.

## What's deliberately NOT in this pass

- **Multi-page scanning.** This only ever fetches the homepage. The
  email-gated "scan full site" flow from the widget prototype needs a
  separate, bigger piece of work (crawl + queue + likely a background
  job, since scanning a whole site synchronously in one request isn't
  realistic). Worth its own planning pass rather than bolting onto this.
- **AI-written summaries.** The `title`/`body` copy is static per
  check right now. If you want Wisp's personality voice woven into the
  actual findings (not just the scanning-ticker lines), that's a small,
  optional, separate step — one cheap model call per scan at most, and
  easy to add later without touching the detection logic above.
- **Caching scan results for display.** Right now a repeat scan within
  the cooldown window is just rejected with a 429. If you want "show me
  the last result instead of just blocking," that means storing the
  actual `ScanResult` (not just the rate-limit row) — a deliberate
  choice not made here since it changes the privacy story slightly
  (you'd be retaining scanned findings, not just an anonymized counter).

## Testing

I couldn't run this against a live site from here — my sandbox's
network egress is limited to package registries, not general web
fetches. Before wiring it into the real widget:

1. Run it locally against a few real sites you know the answers for —
   zymgut.com is a good first target since you know its current gaps.
2. Deliberately test a `noindex` page, a page with broken JSON-LD, and
   a page with clean schema, to confirm each check fires (and doesn't
   false-positive) the way you'd expect.
3. Confirm the SSRF guard actually rejects `http://localhost:3000` and
   `http://192.168.1.1` locally before this is ever exposed publicly.
