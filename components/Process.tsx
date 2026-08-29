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
      className="px-4 py-20 sm:px-8 sm:py-32 relative bg-background"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <Reveal direction="up">
          <div
            className="grid grid-cols-[1fr_1.4fr] items-end gap-x-12
                       max-md:grid-cols-1 max-md:gap-y-6"
          >
            <div>
              <h2
                className="mt-5 text-balance font-display text-4xl sm:text-5xl lg:text-6xl text-foreground"
              >
                How we work.
              </h2>
            </div>

            <p className="max-w-[400px] text-lg text-muted-foreground font-medium
                          max-md:max-w-none md:pb-2">
              Senior software engineers & designers. Direct Slack access. Zero handoffs into black boxes.
            </p>
          </div>
        </Reveal>

        <div
          className="grid grid-cols-4 gap-6 mt-16
                     max-sm:grid-cols-1"
        >
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.15} direction="up">
              <motion.div
                className={`group relative min-h-80 py-10 px-8 transition-all duration-300 rounded-[2.5rem] cursor-default bg-surface border border-border shadow-sm backdrop-blur-sm overflow-hidden
                            hover:shadow-md hover:-translate-y-1 hover:border-white/10
                            ${i > 0
                              ? "max-sm:mt-4"
                              : ""
                            }
                            max-sm:min-h-60 max-sm:py-8 max-sm:px-6`}
              >
                <span className="block mb-16 font-display text-3xl text-primary
                                 max-sm:mb-10">
                  {step.number}
                </span>
                <h3
                  className="font-display font-semibold tracking-tight
                             text-3xl leading-tight mb-4 text-foreground"
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-[1.6] text-muted-foreground font-medium max-w-[230px] mb-0">
                  {step.text}
                </p>

                {/* Animated bottom highlight indicator on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
