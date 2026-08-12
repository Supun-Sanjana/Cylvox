"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function TrustSignalHero() {
  const reduce = useReducedMotion();
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-background pt-32 pb-16">
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8">
          
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-foreground bg-surface rounded-full border border-border shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Free WordPress Plugin
            </span>
          </motion.div>

          <motion.h1 
            className="text-6xl sm:text-7xl lg:text-[5.5rem] font-display tracking-tight leading-[1.05] text-foreground max-w-4xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            Stop Losing Traffic to <br className="hidden md:block" />
            <em className="text-primary not-italic">Hidden E-E-A-T Gaps.</em>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-[55ch] leading-relaxed"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
          >
            Scan your WordPress site for missing trust signals, indexability traps, and authorship errors. Get a 0-100 score and fix issues before Google drops your rankings.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 pt-6"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.3 }}
          >
            <Link 
              href="#waitlist" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-primary-foreground bg-primary rounded-full transition-transform duration-300 hover:scale-[1.03]"
            >
              Coming Soon to WordPress.org
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            className="w-full max-w-5xl mt-20 relative"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.4, duration: 1.2 }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-border bg-surface shadow-sm">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/placeholders/squish_veiled_figure_1786554718616.jpg"
                  alt="Cylvox Trust Signal Auditor dashboard aesthetic preview"
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
