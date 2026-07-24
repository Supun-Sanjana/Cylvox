"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Align & Audit",
    text: "We analyze your tech stack, audience goals, and audit vibe-coded software for architectural flaws.",
  },
  {
    number: "02",
    title: "Design & Shape",
    text: "We create distinctive visual design systems and experience maps built to convert visitors.",
  },
  {
    number: "03",
    title: "Build & Automate",
    text: "We engineer Next.js apps, integrate Headless Sanity CMS, and set up 24/7 n8n AI workflows.",
  },
  {
    number: "04",
    title: "Hardened Scale",
    text: "We optimize Core Web Vitals, implement security guards, and measure continuous performance.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="px-[clamp(24px,8.5vw,140px)] py-[clamp(96px,13vw,190px)] relative"
    >
      {/* Section header */}
      <Reveal direction="up">
        <div
          className="grid grid-cols-[1fr_1.4fr] items-center gap-x-[8vw] max-w-none
                     max-md:grid-cols-1 max-md:gap-y-6"
        >
          <div>
            <h2
              className="font-[family-name:var(--font-syne)] font-black tracking-[-0.075em] leading-[0.98]
                         text-[clamp(42px,5.5vw,82px)] mb-0 text-white"
            >
              A clear path from{" "}
              <em className="text-[#ccff00] not-italic">
                prototype to scale.
              </em>
            </h2>
          </div>

          <p className="max-w-[400px] text-[15px] sm:text-[16px] leading-relaxed text-gray-400 font-medium
                        max-md:max-w-none">
            Senior software engineers & designers. Direct Slack access. Zero handoffs into black boxes.
          </p>
        </div>
      </Reveal>

      {/* Steps track */}
      <div
        className="grid grid-cols-4 mt-[clamp(60px,9vw,130px)] border-t border-white/10
                   max-sm:grid-cols-1"
      >
        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.15} direction="up">
            <motion.div
              whileHover={{ y: -4 }}
              className={`relative min-h-82.5 py-7 px-6 transition-all duration-300 rounded-3xl cursor-default
                          hover:bg-white/5 hover:backdrop-blur-md hover:shadow-[0_8px_30px_rgba(255,255,255,0.06)]
                          ${i > 0
                            ? "border-l border-white/10 max-sm:border-l-0 max-sm:border-t"
                            : ""
                          }
                          max-sm:min-h-61.25 max-sm:py-6.25 max-sm:px-2`}
            >
              <span className="block mb-16 font-black text-[18px] text-[#ccff00]
                               max-sm:mb-10">
                {step.number}
              </span>
              <h3
                className="font-black tracking-[-0.05em]
                           text-[28px] leading-tight mb-4 text-white"
              >
                {step.title}
              </h3>
              <p className="text-[13.5px] leading-[1.6] text-gray-400 font-medium max-w-[230px] mb-0">
                {step.text}
              </p>

              {/* Animated bottom highlight indicator on hover */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ccff00] origin-left"
              />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}