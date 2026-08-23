"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { SectionLabel } from "./SectionLabel";

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
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full filter blur-[140px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(204, 255, 0, 0.24), transparent 70%)" }}
      />

      <div className="px-4 py-20 sm:px-8 sm:py-28 relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <Reveal direction="up">
          <SectionLabel>Performance Metrics</SectionLabel>
          <h2
            className="mt-5 font-display font-semibold tracking-tight leading-[1.15]
                       text-3xl sm:text-4xl lg:text-5xl max-w-[800px] mb-0 text-foreground text-balance"
          >
            Good products deserve a{" "}
            <em className="text-primary not-italic">
              fast, secure
            </em>{" "}
            home.
          </h2>
        </Reveal>

        {/* Metrics grid */}
        <div
          className="grid grid-cols-3 mt-14
                     border-t border-b border-border
                     max-sm:grid-cols-1"
        >
          {metrics.map((m, i) => (
            <Reveal key={i} delay={i * 0.15} direction="up">
              <div
                className={`flex flex-col justify-between min-h-[185px] py-8
                            ${i > 0 ? "pl-8 border-l border-border max-sm:pl-0 max-sm:border-l-0 max-sm:border-t" : "pr-8 max-sm:pr-0"}
                            max-sm:min-h-[142px] max-sm:py-6`}
              >
                <motion.strong
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="font-display font-semibold tracking-tight leading-none
                             text-4xl sm:text-5xl lg:text-6xl text-foreground"
                >
                  {m.value}
                  {m.arrow && (
                    <i className="not-italic text-primary"> &rarr; </i>
                  )}
                  <span className="text-primary font-semibold">{m.value2}</span>
                </motion.strong>
                <span className="text-sm font-medium text-muted-foreground mt-4">{m.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Proof note */}
        <Reveal delay={0.4} direction="up">
          <p className="flex items-center gap-2 mt-8 mb-0 text-xs text-muted-foreground font-medium">
            *Metrics recorded post-migration for Veloce Commerce & OutQuest. View full case studies below.
          </p>
        </Reveal>

      </div>
    </section>
  );
}