"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Search, ShieldAlert, FileJson, Sparkles, ExternalLink, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export function BentoFeatures() {
  const reduce = useReducedMotion();
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            Comprehensive Diagnostics
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6">
            Four Layers of Trust Auditing
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
            Search engines penalize anonymous content and poorly indexed entities. Trust Signal Auditor detects critical gaps before the next algorithm update.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Feature 1: Indexability Traps */}
          <motion.div variants={item} className="md:col-span-1 rounded-[2.5rem] bg-surface border border-border p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-muted border border-border text-foreground flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Indexability Traps</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Detects accidentally noindexed About pages, blocked author archives, and misconfigured robots directives that prevent Googlebot from verifying your brand and authors.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/80 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Local On-Site Execution
            </div>
          </motion.div>

          {/* Feature 2: Authorship Verification */}
          <motion.div variants={item} className="md:col-span-2 rounded-[2.5rem] bg-surface border border-border p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-muted border border-border text-foreground flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Authorship &amp; E-E-A-T Verification</h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Verifies complete author bios, flags generic placeholder handles (e.g. &ldquo;admin&rdquo;), validates external <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground font-mono">sameAs</code> profile links, and confirms active Gravatar avatars via secure HEAD probing.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/80 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-muted-foreground">
              <span className="uppercase tracking-wider">Gravatar HEAD Check Disclosed</span>
              <span className="text-foreground">Zero Private Data Exfiltrated</span>
            </div>
          </motion.div>

          {/* Feature 3: Structured Data */}
          <motion.div variants={item} className="md:col-span-2 rounded-[2.5rem] bg-surface border border-border p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-muted border border-border text-foreground flex items-center justify-center mb-6">
                <FileJson className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Structured Data &amp; Schema Validation</h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Audits your post and site headers for compliant Person, Article, and Organization JSON-LD markup. Compatible with existing SEO plugins (Rank Math, Yoast, SEOPress) to ensure rich result eligibility in Google Search &amp; AI Overviews.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/80 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-muted-foreground">
              <span className="uppercase tracking-wider">Schema.org Standard Compliance</span>
              <span className="text-foreground">Rich Snippet &amp; AI Readiness</span>
            </div>
          </motion.div>

          {/* Feature 4: Optional Apply Fix via api.cylvox.com */}
          <motion.div variants={item} className="md:col-span-1 rounded-[2.5rem] bg-muted/40 border border-border p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Optional: AI Apply Fix</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Connect your optional API key to generate expert bio drafts and missing JSON-LD schema snippets. Every AI suggestion requires explicit manual review before saving.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/80">
              <Link
                href="/trust-signal-auditor/privacy"
                className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:underline"
              >
                View Privacy &amp; Data Pipeline <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
