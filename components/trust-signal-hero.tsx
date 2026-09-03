"use client";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Download, Sparkles } from "lucide-react";
import { TRUSTLYNE_PLUGIN_URL } from "@/lib/wisp/pluginConfig";

export function TrustSignalHero() {
  const reduce = useReducedMotion();
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="inline-flex items-center gap-2 px-4 py-1.5 text-xs sm:text-sm font-semibold text-foreground bg-surface rounded-full border border-border shadow-sm mb-6"
      >
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>Official WordPress.org Plugin • v1.0.0</span>
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
        ) : (
          <a href="#interactive-audit" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 font-semibold text-sm sm:text-base transition-transform hover:scale-[1.03] shadow-md">
            <Download className="w-4 h-4" />
            Trustlyne coming soon
          </a>
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
