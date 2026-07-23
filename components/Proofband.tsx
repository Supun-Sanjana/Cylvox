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
      className="bg-[#0e0c14] text-[#f7f2ec] relative overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full filter blur-[140px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)" }}
      />

      <div className="px-[clamp(24px,8.5vw,140px)] py-[clamp(96px,13vw,190px)] relative z-10">

        {/* Header */}
        <Reveal direction="up">
          <p className="flex items-center gap-2 mb-[23px] text-[11px] font-extrabold
                        tracking-[0.18em] uppercase text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Empirical Results
          </p>
          <h2
            className="font-[family-name:var(--font-syne)] font-black tracking-[-0.075em] leading-[0.98]
                       text-[clamp(42px,5.5vw,82px)] max-w-[800px] mb-0 text-white"
          >
            Good products deserve a{" "}
            <em className="font-[Georgia,serif] font-normal tracking-[-0.085em] text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-300 not-italic">
              fast, secure
            </em>{" "}
            home.
          </h2>
        </Reveal>

        {/* Metrics grid */}
        <div
          className="grid grid-cols-3 mt-[clamp(65px,8vw,120px)]
                     border-t border-b border-white/15
                     max-sm:grid-cols-1"
        >
          {metrics.map((m, i) => (
            <Reveal key={i} delay={i * 0.15} direction="up">
              <div
                className={`flex flex-col justify-between min-h-[185px] py-[31px]
                            ${i > 0 ? "pl-[35px] border-l border-white/15 max-sm:pl-0 max-sm:border-l-0 max-sm:border-t" : "pr-[35px] max-sm:pr-0"}
                            max-sm:min-h-[142px] max-sm:py-[27px]`}
              >
                <motion.strong
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="font-[family-name:var(--font-syne)] font-black tracking-[-0.065em] leading-[1]
                             text-[clamp(32px,3.9vw,58px)] text-white"
                >
                  {m.value}
                  {m.arrow && (
                    <i className="not-italic text-purple-400"> &rarr; </i>
                  )}
                  <span className="text-purple-300 font-black">{m.value2}</span>
                </motion.strong>
                <span className="text-[13px] font-medium text-gray-400 mt-2">{m.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Proof note */}
        <Reveal delay={0.4} direction="up">
          <p className="flex items-center gap-2 mt-[28px] mb-0 text-[12px] text-gray-400 font-medium">
            <span
              className="w-[8px] h-[8px] rounded-full bg-purple-400
                         shadow-[0_0_10px_rgba(192,132,252,0.8)] flex-shrink-0"
            />
            Real performance & security benchmark metrics. Zero hype.
          </p>
        </Reveal>

      </div>
    </section>
  );
}