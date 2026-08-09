"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function TrustSignalHero() {
  const reduce = useReducedMotion();
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-zinc-950 pt-24 pb-16">
      {/* Background ambient glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8">
          
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
              <CheckCircle2 className="w-4 h-4" />
              Free WordPress Plugin
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-sans tracking-tighter leading-[1.1] text-white max-w-4xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            Stop Losing Traffic to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Hidden E-E-A-T Gaps.
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-zinc-400 max-w-[60ch] leading-relaxed"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
          >
            Scan your WordPress site for missing trust signals, indexability traps, and authorship errors. Get a 0-100 score and fix issues before Google drops your rankings.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.3 }}
          >
            <Link 
              href="#waitlist" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-zinc-950 bg-white rounded-full hover:bg-zinc-100 transition-colors focus:ring-2 focus:ring-white/20 focus:outline-none"
            >
              Coming Soon to WordPress.org
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            className="w-full max-w-5xl mt-16 relative"
            initial={reduce ? false : { opacity: 0, y: 40, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ ...transition, delay: 0.4, duration: 1.2 }}
            style={{ perspective: "1000px" }}
          >
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-black/50 backdrop-blur-sm">
              {/* Glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/trust-signal-score-hero.jpg"
                  alt="Cylvox Trust Signal Auditor scoring dashboard showing a 92 out of 100 SEO score"
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
