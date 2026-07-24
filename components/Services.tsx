"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldAlert, Cpu, Database, Zap, Palette, Code2 } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    title: "Vibe-Coded App Audits",
    badge: "Security & Code",
    icon: ShieldAlert,
    text: "Deep vulnerability scans, logic flaw fixes, auth hardening, and architectural cleanup for apps built with Cursor, v0, Bolt, or Lovable.",
  },
  {
    number: "02",
    title: "AI Workflows & n8n",
    badge: "Automation",
    icon: Cpu,
    text: "Autonomous n8n pipelines, custom AI agents, and webhook integrations that handle content, leads, and operational tasks 24/7.",
  },
  {
    number: "03",
    title: "Headless CMS Integration",
    badge: "Sanity & Content",
    icon: Database,
    text: "Structured, editor-friendly content architectures powered by Sanity.io and Next.js for lightning-fast publishing without code updates.",
  },
  {
    number: "04",
    title: "SEO & Performance Engine",
    badge: "Sub-second LCP",
    icon: Zap,
    text: "Technical SEO schemas, edge caching, image optimization, and 99+ Core Web Vitals scores that turn organic search into revenue.",
  },
  {
    number: "05",
    title: "Brand & UI/UX Design",
    badge: "Conversion UI",
    icon: Palette,
    text: "High-end visual design systems, interactive prototypes, and conversion-engineered interfaces built to make brands impossible to ignore.",
  },
  {
    number: "06",
    title: "Full-Stack Web Engineering",
    badge: "Next.js & React",
    icon: Code2,
    text: "Production-ready, type-safe Next.js applications engineered for high concurrency, security, and effortless scalability.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-[clamp(24px,8.5vw,140px)] py-[clamp(96px,13vw,190px)] relative"
    >
      {/* Header */}
      <Reveal direction="up">
        <h2
          className="font-[family-name:var(--font-syne)] font-black tracking-[-0.075em]
                     leading-[0.98] text-[clamp(42px,5.5vw,82px)] max-w-[850px] mb-0 text-white"
        >
          Engineered to perform.{" "}
          <em className="text-[#ccff00] not-italic">
            Hardened to scale.
          </em>
        </h2>
      </Reveal>

      {/* 2-col grid */}
      <div
        className="grid grid-cols-2 mt-[clamp(60px,8vw,110px)] border-t border-white/10
                   max-sm:grid-cols-1"
      >
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.number} delay={i * 0.1} direction="up">
              <motion.div
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)", x: 3 }}
                transition={{ duration: 0.2 }}
                className={`group relative grid grid-cols-[50px_1fr_24px] gap-4
                            min-h-[250px] py-[32px] border-b border-white/10 cursor-pointer
                            ${i % 2 === 0
                              ? "pl-4 sm:pl-8 pr-[46px] border-r border-white/10 max-sm:border-r-0 max-sm:pr-4"
                              : "pl-[46px] pr-4 sm:pr-8 max-sm:pl-4"
                            }
                            ${i === 0 || i === 3 ? "bg-gradient-to-br from-[#ccff00]/5 to-transparent" : ""}
                            max-sm:grid-cols-[40px_1fr_20px] max-sm:min-h-[190px]
                            max-sm:py-[24px]`}
              >
                <div className="flex flex-col items-start gap-2">
                  <span className="font-bold text-[14px] text-[#ccff00]">
                    {service.number}
                  </span>
                  <Icon className="w-5 h-5 text-[#ccff00] group-hover:scale-110 transition-transform duration-200" />
                </div>

                <div>
                  <div className="inline-block px-2.5 py-0.5 mb-3 text-[10px] font-extrabold tracking-wider uppercase bg-[#ccff00]/10 text-[#ccff00] rounded-full border border-[#ccff00]/20">
                    {service.badge}
                  </div>
                  <h3
                    className="font-black tracking-[-0.05em]
                               leading-[1.1] text-[clamp(22px,2.2vw,32px)] mb-[14px] text-white"
                  >
                    {service.title}
                  </h3>
                  <p className="max-w-[340px] text-[14px] leading-[1.6] text-gray-400 mb-0 font-medium">
                    {service.text}
                  </p>
                </div>

                <span className="pt-[3px] text-[#ccff00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}