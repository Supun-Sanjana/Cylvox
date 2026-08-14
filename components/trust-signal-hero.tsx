"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function TrustSignalHero() {
  const reduce = useReducedMotion();
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section className="relative pt-32 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      <div className="flex-1 text-left">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-foreground bg-surface rounded-full border border-border shadow-sm mb-8">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Free WordPress Plugin
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-display mb-6 tracking-tight leading-[1.05] text-foreground"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.1 }}
        >
          Stop Losing Traffic to <br className="hidden xl:block" />
          <em className="text-primary not-italic">Hidden E-E-A-T Gaps.</em>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
        >
          Scan your WordPress site for missing trust signals, indexability traps, and authorship errors. Get a 0-100 score and fix issues before Google drops your rankings.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-start gap-4 pt-8"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.3 }}
        >
          <Link 
            href="#waitlist" 
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 font-medium transition-transform hover:scale-105"
          >
            Coming Soon to WP.org
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <div className="flex-1 w-full mt-12 lg:mt-0">
        <motion.div 
          className="relative aspect-[4/3] lg:aspect-[1.1/1] w-full rounded-[2.5rem] overflow-hidden border border-border shadow-sm bg-surface"
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transition, delay: 0.4, duration: 1.2 }}
        >
          <Image
            src="/placeholders/dune_auditor_monolith.jpg"
            alt="Dune aesthetic representation of navigating trust signals"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
