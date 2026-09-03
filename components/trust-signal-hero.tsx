"use client";
import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Download, Sparkles, Loader2 } from "lucide-react";
import { TRUSTLYNE_PLUGIN_URL } from "@/lib/wisp/pluginConfig";

export function TrustSignalHero() {
  const reduce = useReducedMotion();
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };
  const [email, setEmail] = useState("");
  const [waitlistState, setWaitlistState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleWaitlist(event: FormEvent) {
    event.preventDefault();
    if (!email.trim() || waitlistState === "loading") return;
    setWaitlistState("loading");
    try {
      const response = await fetch("/api/wisp-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          domain: "trust-signal-hero", // no scan performed at this entry point — tags where the signup came from
          issues: [],
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
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="inline-flex items-center gap-2 px-4 py-1.5 text-xs sm:text-sm font-semibold text-foreground bg-surface rounded-full border border-border shadow-sm mb-6"
      >
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>{TRUSTLYNE_PLUGIN_URL ? "Official WordPress.org Plugin • v1.0.0" : "WordPress Plugin • Coming Soon"}</span>
      </motion.div>

      <motion.h1 
        className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight leading-[1.08] text-foreground max-w-5xl mx-auto mb-6"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.1 }}
      >
        Scan Your WordPress Site for <br className="hidden sm:inline" />
        <span className="italic font-normal">Hidden E-E-A-T &amp; Trust Gaps.</span>
      </motion.h1>

      <motion.p 
        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.2 }}
      >
        Trust Signal Auditor scans your WordPress site for missing trust signals, indexability traps, and authorship errors so you can fix critical issues before they undermine discoverability.
      </motion.p>

      <motion.div 
        className="flex flex-wrap items-center justify-center gap-4"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.3 }}
      >
        {TRUSTLYNE_PLUGIN_URL ? (
          <a href={TRUSTLYNE_PLUGIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 font-semibold text-sm sm:text-base transition-transform hover:scale-[1.03] shadow-md">
            <Download className="w-4 h-4" />
            Install Trustlyne
          </a>
        ) : waitlistState === "done" ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-700 px-8 py-4 font-semibold text-sm sm:text-base">
            You&rsquo;re on the list — we&rsquo;ll email you at launch.
          </span>
        ) : (
          <form onSubmit={handleWaitlist} className="inline-flex w-full sm:w-auto flex-col xs:flex-row gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              aria-label="Email for Trustlyne launch notification"
              className="min-w-0 flex-1 rounded-full border border-border bg-background px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              type="submit"
              disabled={waitlistState === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-4 font-semibold text-sm sm:text-base transition-transform hover:scale-[1.03] shadow-md disabled:opacity-60"
            >
              {waitlistState === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
              {waitlistState === "loading" ? "Joining…" : "Notify me at launch"}
            </button>
          </form>
        )}
        {waitlistState === "error" && (
          <span className="w-full text-center text-xs text-red-600 sm:w-auto sm:text-left">Please try again.</span>
        )}
        <a 
          href="#interactive-audit" 
          className="inline-flex items-center justify-center gap-2 rounded-full bg-surface border border-border text-foreground px-8 py-4 font-semibold text-sm sm:text-base hover:bg-muted transition-colors"
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          Interactive Demo
        </a>
      </motion.div>

      {/* Trust Badges */}
      <motion.div 
        className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...transition, delay: 0.4 }}
      >
        <span>100% Free Core Scan</span>
        <span>•</span>
        <span>Zero Client-Side Telemetry</span>
        <span>•</span>
        <span>GPLv2 Licensed</span>
        <span>•</span>
        <span>WP 6.0+ &amp; PHP 7.4+</span>
      </motion.div>
    </section>
  );
}
