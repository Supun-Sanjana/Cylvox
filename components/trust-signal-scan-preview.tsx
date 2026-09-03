"use client";

import { FormEvent, useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Download, Loader2, Search, ShieldCheck, XCircle } from "lucide-react";
import type { ScanIssue, ScanResult } from "@/lib/wisp/types";
import { TRUSTLYNE_PLUGIN_URL } from "@/lib/wisp/pluginConfig";

type DiagnosticTab = "all" | "authorship" | "indexability" | "structured-data";

function categoryForIssue(issue: ScanIssue): Exclude<DiagnosticTab, "all"> {
  if (issue.id.includes("author")) return "authorship";
  if (issue.id.includes("schema") || issue.id.includes("structured") || issue.id.includes("json-ld")) return "structured-data";
  return "indexability";
}

export function TrustSignalScanPreview() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<ScanResult | null>(null);
  const [activeTab, setActiveTab] = useState<DiagnosticTab>("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [waitlistState, setWaitlistState] = useState<"idle" | "loading" | "done" | "error">("idle");

  const filteredIssues = useMemo(
    () => result?.issues.filter((issue) => activeTab === "all" || categoryForIssue(issue) === activeTab) ?? [],
    [activeTab, result]
  );

  async function handleScan(event: FormEvent) {
    event.preventDefault();
    if (!url.trim() || loading) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch("/api/wisp-scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.message ?? "Could not scan that site.");
      setResult(data as ScanResult);
    } catch (scanError) {
      setError(scanError instanceof Error ? scanError.message : "Could not scan that site.");
    } finally {
      setLoading(false);
    }
  }

  async function handleWaitlist(event: FormEvent) {
    event.preventDefault();
    if (!email.trim() || !result || waitlistState === "loading") return;
    setWaitlistState("loading");
    try {
      const response = await fetch("/api/wisp-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          domain: result.finalUrl,
          issues: result.issues,
          source: "plugin-waitlist",
        }),
      });
      if (!response.ok) throw new Error("Unable to join the waitlist.");
      setWaitlistState("done");
    } catch {
      setWaitlistState("error");
    }
  }

  return (
    <div id="interactive-audit" className="w-full max-w-6xl mx-auto rounded-3xl border border-border bg-surface shadow-2xl overflow-hidden text-left">
      <div className="bg-[#18181b] text-white px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-mono">
        <span className="font-semibold text-zinc-200">Trustlyne · WordPress trust audit</span>
        <span className="inline-flex items-center gap-2 text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />Live scan</span>
      </div>

      <div className="p-6 sm:p-8 md:p-10 space-y-8 bg-surface">
        <form onSubmit={handleScan} className="flex flex-col sm:flex-row gap-3">
          <input className="min-w-0 flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-violet-500" value={url} onChange={(event) => setUrl(event.target.value)} placeholder="yoursite.com" aria-label="WordPress site URL" />
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background disabled:opacity-60" disabled={loading || !url.trim()}>
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}{loading ? "Scanning…" : "Scan site"}
          </button>
        </form>
        <p className="text-xs text-muted-foreground">Homepage scan · free · checks indexability, authorship, and structured data.</p>
        {error && <p className="rounded-xl border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-600">{error}</p>}

        {result && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-muted/30 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Scan result</p><h3 className="mt-1 text-2xl font-display font-bold">{result.clean ? "Nothing critical found" : `${result.issues.length} issue${result.issues.length === 1 ? "" : "s"} found`}</h3><p className="mt-1 text-xs text-muted-foreground break-all">{result.finalUrl}</p></div>
              {result.clean ? <CheckCircle2 className="h-8 w-8 text-emerald-600" /> : <AlertTriangle className="h-8 w-8 text-amber-500" />}
            </div>

            <div className="flex flex-wrap gap-2 border-b border-border pb-4">
              {(["all", "authorship", "indexability", "structured-data"] as DiagnosticTab[]).map((tab) => <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`rounded-xl px-4 py-2 text-xs font-semibold capitalize ${activeTab === tab ? "bg-foreground text-background" : "bg-muted/60 text-muted-foreground"}`}>{tab === "all" ? "All checks" : tab.replace("structured-data", "structured data")}</button>)}
            </div>

            {filteredIssues.length === 0 ? <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-sm text-emerald-700">No findings in this category. The scan completed with real checks from the Wisp engine.</div> : <div className="space-y-3">{filteredIssues.map((issue) => <IssueCard key={issue.id} issue={issue} />)}</div>}

            <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div><p className="font-semibold">{TRUSTLYNE_PLUGIN_URL ? "Continue with Trustlyne" : "Trustlyne is coming soon"}</p><p className="mt-1 text-sm text-muted-foreground">{TRUSTLYNE_PLUGIN_URL ? "Install the WordPress plugin to keep these trust checks close to your site." : "Leave your email and we’ll let you know when the WordPress plugin is ready."}</p></div>
              {TRUSTLYNE_PLUGIN_URL ? <a href={TRUSTLYNE_PLUGIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background"><Download className="h-4 w-4" />Install Trustlyne</a> : waitlistState === "done" ? <span className="text-sm font-semibold text-emerald-700">You’re on the list.</span> : <form onSubmit={handleWaitlist} className="flex w-full sm:w-auto gap-2"><input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="min-w-0 flex-1 rounded-xl border border-border bg-background px-3 py-2.5 text-sm" aria-label="Email for Trustlyne waitlist" /><button className="rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background disabled:opacity-60" disabled={waitlistState === "loading"}>{waitlistState === "loading" ? "Joining…" : "Notify me"}</button></form>}
              {waitlistState === "error" && <span className="text-xs text-red-600">Please try again.</span>}
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="h-4 w-4" /><span>Findings come from the same real scan engine as Wisp; no mock score is shown.</span></div>
      </div>
    </div>
  );
}

function IssueCard({ issue }: { issue: ScanIssue }) {
  return <article className={`rounded-2xl border p-5 ${issue.sev === "critical" ? "border-red-500/30 bg-red-500/5" : "border-amber-500/30 bg-amber-500/5"}`}><div className="flex items-start gap-3"><div className="mt-0.5">{issue.sev === "critical" ? <XCircle className="h-5 w-5 text-red-500" /> : <Search className="h-5 w-5 text-amber-500" />}</div><div><div className="flex flex-wrap items-center gap-2"><h4 className="font-semibold">{issue.title}</h4><span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{issue.sev}</span></div><p className="mt-2 text-sm text-muted-foreground">{issue.body}</p>{issue.howToFix && <p className="mt-3 text-sm"><strong>How to fix:</strong> {issue.howToFix}</p>}</div></div></article>;
}
