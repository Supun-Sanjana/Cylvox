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
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-sans tracking-tight text-white mb-6">
            The Free Scan
          </h2>
          <p className="text-zinc-400 text-lg max-w-[50ch]">
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
          <motion.div variants={item} className="md:col-span-1 rounded-2xl bg-zinc-900 border border-white/10 p-8 flex flex-col hover:bg-zinc-800/80 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Indexability Traps</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Detects accidentally noindexed About pages and blocked author archives that prevent Google from verifying your expertise.
            </p>
          </motion.div>

          {/* Feature 2: Authorship Verification */}
          <motion.div variants={item} className="md:col-span-2 rounded-2xl bg-zinc-900 border border-white/10 p-8 flex flex-col hover:bg-zinc-800/80 transition-colors">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Authorship Verification</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
              Checks for complete bios, valid display names, and linked Gravatar profiles. Anonymous authors signal low trust to search engines; we ensure your real human expertise is proven.
            </p>
          </motion.div>

          {/* Feature 3: Structured Data */}
          <motion.div variants={item} className="md:col-span-2 rounded-2xl bg-zinc-900 border border-white/10 p-8 flex flex-col hover:bg-zinc-800/80 transition-colors">
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
              <FileJson className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">Structured Data Validation</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
              Verifies Article, FAQPage, and Person schema integration (with Rank Math compatibility) to ensure your content is eligible for AI Overviews and rich snippets.
            </p>
          </motion.div>

          {/* Phase 2 Teaser */}
          <motion.div variants={item} className="md:col-span-1 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 p-8 flex flex-col relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-6 relative z-10">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3 relative z-10">Phase 2: AI Fixes</h3>
            <p className="text-zinc-400 text-sm leading-relaxed relative z-10 mb-6">
              Missing a bio? AI generates one based on your real credentials. Missing schema? We'll write the JSON-LD for you in one click.
            </p>
            <div className="mt-auto relative z-10">
              <span className="inline-flex items-center text-xs font-medium uppercase tracking-wider text-emerald-400">
                Coming Soon
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
