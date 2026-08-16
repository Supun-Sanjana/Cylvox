"use client";

import { useState } from "react";
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Sparkles, 
  RefreshCw, 
  ShieldCheck, 
  FileCode, 
  UserCheck, 
  Search,
  Check
} from "lucide-react";

type DiagnosticTab = "all" | "authorship" | "indexability" | "schema";

interface Issue {
  id: string;
  category: "authorship" | "indexability" | "schema";
  severity: "critical" | "warning" | "passed";
  title: string;
  target: string;
  description: string;
  fixableWithAi: boolean;
  aiSuggestion?: {
    type: string;
    before: string;
    after: string;
  };
}

const mockIssues: Issue[] = [
  {
    id: "auth-1",
    category: "authorship",
    severity: "warning",
    title: "Incomplete Author Biography",
    target: "Author: Supun Sanjana (/author/sanjana)",
    description: "Author profile bio is under 25 words with zero external authority credentials or sameAs social profiles.",
    fixableWithAi: true,
    aiSuggestion: {
      type: "Author Bio (E-E-A-T Optimized)",
      before: "Staff writer and tech enthusiast writing about search engines.",
      after: "Supun Sanjana is a Technical SEO consultant and software engineer specializing in Core Web Vitals, headless architectures, and enterprise crawl budget optimization with over 8 years of search engineering experience."
    }
  },
  {
    id: "schema-1",
    category: "schema",
    severity: "critical",
    title: "Missing Person & Article JSON-LD Schema",
    target: "Post: Scaling High-Concurrency WordPress",
    description: "Post is missing valid Person authorship entity linkage in schema graph, risking loss of Google AI Overview citations.",
    fixableWithAi: true,
    aiSuggestion: {
      type: "Person + Article Schema JSON-LD",
      before: "<!-- No schema detected in <head> -->",
      after: `{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Scaling High-Concurrency WordPress",
  "author": {
    "@type": "Person",
    "name": "Supun Sanjana",
    "jobTitle": "Technical SEO Consultant",
    "sameAs": ["https://www.linkedin.com/in/sanjana-supun", "https://github.com/Supun-Sanjana"]
  }
}`
    }
  },
  {
    id: "idx-1",
    category: "indexability",
    severity: "passed",
    title: "Author Archives Indexable",
    target: "Path: /author/*",
    description: "No accidental 'noindex' robot meta tag found on author hierarchy.",
    fixableWithAi: false
  },
  {
    id: "auth-2",
    category: "authorship",
    severity: "passed",
    title: "Gravatar Profile Verified",
    target: "Email Hash: md5(sanjana@...)",
    description: "Local HEAD probe confirmed active 200 OK avatar image on secure.gravatar.com.",
    fixableWithAi: false
  },
  {
    id: "idx-2",
    category: "indexability",
    severity: "warning",
    title: "About Page Orphan Warning",
    target: "Page: /about-the-team",
    description: "About page has fewer than 2 internal inbound links across standard post archive content.",
    fixableWithAi: false
  }
];

export function TrustSignalScanPreview() {
  const [activeTab, setActiveTab] = useState<DiagnosticTab>("all");
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [appliedFixes, setAppliedFixes] = useState<string[]>([]);
  const [isApplying, setIsApplying] = useState(false);

  const filteredIssues = mockIssues.filter(
    (issue) => activeTab === "all" || issue.category === activeTab
  );

  const handleApplyFix = (issue: Issue) => {
    setIsApplying(true);
    setTimeout(() => {
      setAppliedFixes((prev) => [...prev, issue.id]);
      setIsApplying(false);
      setSelectedIssue(null);
    }, 600);
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl border border-border bg-surface shadow-2xl overflow-hidden text-left">
      {/* WordPress Admin Emulation Header Bar */}
      <div className="bg-[#18181b] text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between border-b border-border/20 text-xs sm:text-sm font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
          </div>
          <span className="text-zinc-400 border-l border-zinc-700 pl-3 hidden sm:inline">WordPress Admin</span>
          <span className="font-semibold text-zinc-200">Tools → Trust Signal Auditor</span>
        </div>
        <div className="flex items-center gap-3 text-zinc-400 text-xs">
          <span className="inline-flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Scan Ready
          </span>
          <span>v1.0.0</span>
        </div>
      </div>

      {/* Main Admin Body */}
      <div className="p-6 sm:p-8 md:p-10 space-y-8 bg-surface">
        {/* Score Card & Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* 0-100 Score Display */}
          <div className="md:col-span-4 rounded-2xl bg-muted/40 border border-border p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">E-E-A-T Score</p>
                <h3 className="text-4xl sm:text-5xl font-display font-bold text-foreground mt-1">92<span className="text-xl text-muted-foreground font-sans font-normal">/100</span></h3>
              </div>
              <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded-full">
                Optimal
              </span>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              Based on on-site audits of Authorship completeness, Gravatar verification, Schema depth, and Indexability controls.
            </p>

            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-medium">
              <span className="text-muted-foreground">Last Scanned: Just now</span>
              <span className="text-foreground font-semibold inline-flex items-center gap-1">
                <RefreshCw className="w-3 h-3" /> Full Site
              </span>
            </div>
          </div>

          {/* Quick Metrics Breakdown */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-muted/30 border border-border flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <UserCheck className="w-5 h-5 text-foreground" />
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400">1 Warning</span>
              </div>
              <div className="mt-4">
                <p className="text-xl font-bold text-foreground">Authorship</p>
                <p className="text-xs text-muted-foreground mt-1">Gravatars, bios, SameAs credentials</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-muted/30 border border-border flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <Search className="w-5 h-5 text-foreground" />
                <span className="text-xs font-bold text-emerald-600">Passed</span>
              </div>
              <div className="mt-4">
                <p className="text-xl font-bold text-foreground">Indexability</p>
                <p className="text-xs text-muted-foreground mt-1">Archive robots meta & orphan checks</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-muted/30 border border-border flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <FileCode className="w-5 h-5 text-foreground" />
                <span className="text-xs font-bold text-red-500">1 Critical</span>
              </div>
              <div className="mt-4">
                <p className="text-xl font-bold text-foreground">Structured Data</p>
                <p className="text-xs text-muted-foreground mt-1">Person & Article JSON-LD validation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex flex-wrap gap-2">
            {(["all", "authorship", "indexability", "schema"] as DiagnosticTab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all ${
                  activeTab === tab
                    ? "bg-foreground text-background shadow-sm"
                    : "bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {tab === "all" ? "All Diagnostic Checks" : tab}
              </button>
            ))}
          </div>

          <div className="text-xs text-muted-foreground">
            Showing <strong className="text-foreground font-medium">{filteredIssues.length}</strong> audits
          </div>
        </div>

        {/* Diagnostic Issues List */}
        <div className="space-y-3">
          {filteredIssues.map((issue) => {
            const isFixed = appliedFixes.includes(issue.id);
            return (
              <div
                key={issue.id}
                className={`p-5 rounded-2xl border transition-all duration-200 ${
                  isFixed 
                    ? "bg-emerald-500/5 border-emerald-500/30" 
                    : issue.severity === "critical"
                    ? "bg-red-500/5 border-red-500/30"
                    : issue.severity === "warning"
                    ? "bg-amber-500/5 border-amber-500/30"
                    : "bg-surface border-border/80 hover:border-border"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 shrink-0">
                      {isFixed ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : issue.severity === "critical" ? (
                        <XCircle className="w-5 h-5 text-red-500" />
                      ) : issue.severity === "warning" ? (
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      )}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-semibold text-foreground text-sm sm:text-base">
                          {issue.title}
                        </h4>
                        {isFixed ? (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                            Fixed &amp; Saved
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-muted text-muted-foreground">
                            {issue.category}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground font-mono mt-0.5">
                        {issue.target}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                        {issue.description}
                      </p>
                    </div>
                  </div>

                  {/* Action / Apply Fix Button */}
                  <div className="sm:shrink-0 flex items-center justify-end">
                    {isFixed ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-500/10 px-3.5 py-2 rounded-xl">
                        <Check className="w-3.5 h-3.5" /> Resolved
                      </span>
                    ) : issue.fixableWithAi ? (
                      <button
                        type="button"
                        onClick={() => setSelectedIssue(issue)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-foreground text-background hover:opacity-90 transition-all shadow-sm group cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
                        Apply Fix (AI)
                      </button>
                    ) : (
                      <span className="text-xs text-muted-foreground font-medium px-3 py-1 bg-muted rounded-lg">
                        {issue.severity === "passed" ? "Verified" : "Manual review"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* External Service Transparent Notice */}
        <div className="rounded-2xl bg-muted/30 border border-border p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-foreground shrink-0" />
            <span>
              <strong>Zero Data Exfiltration on Scan:</strong> All audits run 100% locally. AI remediation only triggers upon your explicit click.
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a href="/trust-signal-auditor/privacy" className="underline hover:text-foreground font-medium">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/trust-signal-auditor/terms" className="underline hover:text-foreground font-medium">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* AI Suggestion Preview Modal / Drawer */}
      {selectedIssue && selectedIssue.aiSuggestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-surface border border-border rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-foreground text-xs font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Apply Fix Preview via api.cylvox.com
                </div>
                <h3 className="text-xl font-bold font-display text-foreground">
                  {selectedIssue.aiSuggestion.type}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Review the proposed remediation before approving changes to your WordPress database.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedIssue(null)}
                className="text-muted-foreground hover:text-foreground p-1 rounded-lg text-lg leading-none cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                  Current / Detected State
                </span>
                <div className="p-3.5 rounded-xl bg-muted text-xs font-mono text-muted-foreground overflow-x-auto">
                  {selectedIssue.aiSuggestion.before}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground block mb-1">
                  AI-Assisted Suggestion (Ready for Manual Approval)
                </span>
                <div className="p-4 rounded-xl bg-zinc-900 text-zinc-100 text-xs font-mono overflow-x-auto whitespace-pre-wrap border border-zinc-800">
                  {selectedIssue.aiSuggestion.after}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-muted-foreground">
                Payload sent: Post title &amp; author name only.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedIssue(null)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-border font-semibold text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isApplying}
                  onClick={() => handleApplyFix(selectedIssue)}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isApplying ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Saving to WordPress...
                    </>
                  ) : (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Approve &amp; Apply Fix
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
