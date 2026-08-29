"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const metrics = [
  { value: "54", arrow: true, value2: "99", label: "PageSpeed score (Core Web Vitals)" },
  { value: "13.4s", arrow: true, value2: "0.38s", label: "Largest Contentful Paint (LCP)" },
  { value: "100%", arrow: false, value2: "", label: "Security & Vulnerability Audit Coverage" },
];

export default function ProofBand() {
  return (
    <section
      id="proof"
      className="bg-surface text-foreground relative overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full filter blur-[140px] pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, rgba(204, 255, 0, 0.15), transparent 70%)" }}
      />

      <div className="px-4 py-20 sm:px-8 sm:py-28 relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <Reveal direction="up">
          <h2
            className="mt-5 font-display tracking-tight leading-[1.1] text-5xl sm:text-6xl lg:text-7xl max-w-[800px] mb-0 text-foreground text-balance"
          >
            The numbers don't lie.
          </h2>
        </Reveal>

        {/* Metrics grid */}
        <div
          className="grid grid-cols-3 mt-16
                     border-t border-b border-white/10
                     max-sm:grid-cols-1 relative"
        >
          {/* Subtle glow behind metrics */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ccff00]/5 to-transparent blur-3xl pointer-events-none" />

          {metrics.map((m, i) => (
            <Reveal key={i} delay={i * 0.15} direction="up" className="relative z-10">
              <div
                className={`flex flex-col justify-between min-h-[185px] py-10
                            ${i > 0 ? "pl-10 border-l border-white/10 max-sm:pl-0 max-sm:border-l-0 max-sm:border-t" : "pr-10 max-sm:pr-0"}
                            max-sm:min-h-[142px] max-sm:py-8`}
              >
                <motion.strong
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="font-display tracking-tighter leading-none
                             text-6xl sm:text-7xl lg:text-8xl text-foreground"
                >
                  {m.value}
                  {m.arrow && (
                    <i className="not-italic text-primary/50 text-4xl lg:text-6xl align-middle mx-3"> &rarr; </i>
                  )}
                  <span className="text-primary tracking-tighter text-glow drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">{m.value2}</span>
                </motion.strong>
                <span className="text-sm font-semibold tracking-wide uppercase text-muted-foreground mt-8">{m.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Proof note */}
        <Reveal delay={0.4} direction="up">
          <p className="flex items-center gap-2 mt-8 mb-0 text-xs text-muted-foreground/60 font-medium">
            *Metrics recorded post-migration for Veloce Commerce & OutQuest. View full case studies below.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
