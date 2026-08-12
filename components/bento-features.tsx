"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Search, ShieldAlert, FileJson, Sparkles } from "lucide-react";

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
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display tracking-tight text-foreground mb-6">
            The Free Scan
          </h2>
          <p className="text-muted-foreground text-lg max-w-[50ch]">
            Identify the critical E-E-A-T gaps holding back your rankings before the next Helpful Content Update.
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
          <motion.div variants={item} className="md:col-span-1 rounded-[2.5rem] bg-surface border border-border p-10 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-background border border-border text-foreground flex items-center justify-center mb-6">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-display text-foreground mb-4">Indexability Traps</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Detects accidentally noindexed About pages and blocked author archives that prevent Google from verifying your expertise.
            </p>
          </motion.div>

          {/* Feature 2: Authorship Verification */}
          <motion.div variants={item} className="md:col-span-2 rounded-[2.5rem] bg-surface border border-border p-10 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-background border border-border text-foreground flex items-center justify-center mb-6">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-display text-foreground mb-4">Authorship Verification</h3>
            <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
              Checks for complete bios, valid display names, and linked Gravatar profiles. Anonymous authors signal low trust to search engines; we ensure your real human expertise is proven.
            </p>
          </motion.div>

          {/* Feature 3: Structured Data */}
          <motion.div variants={item} className="md:col-span-2 rounded-[2.5rem] bg-surface border border-border p-10 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-background border border-border text-foreground flex items-center justify-center mb-6">
              <FileJson className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-display text-foreground mb-4">Structured Data Validation</h3>
            <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
              Verifies Article, FAQPage, and Person schema integration (with Rank Math compatibility) to ensure your content is eligible for AI Overviews and rich snippets.
            </p>
          </motion.div>

          {/* Phase 2 Teaser */}
          <motion.div variants={item} className="md:col-span-1 rounded-[2.5rem] bg-surface border border-border p-10 flex flex-col relative overflow-hidden group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-background border border-border text-primary flex items-center justify-center mb-6 relative z-10">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-display text-foreground mb-4 relative z-10">Phase 2: AI Fixes</h3>
            <p className="text-muted-foreground text-base leading-relaxed relative z-10 mb-8">
              Missing a bio? AI generates one based on your real credentials. Missing schema? We'll write the JSON-LD for you in one click.
            </p>
            <div className="mt-auto relative z-10">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary border border-border px-3 py-1 bg-background rounded-full">
                Coming Soon
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
