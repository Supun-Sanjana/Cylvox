"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Search, Cpu, Code2, PenTool } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    id: "technical-seo",
    title: "Technical SEO",
    badge: "Crawlability & Core Web Vitals",
    icon: Search,
    text: "Make every important page fast, crawlable, indexable, and eligible for rich results.",
    link: "/services/technical-seo",
  },
  {
    number: "02",
    id: "ai-automation",
    title: "AI Automation",
    badge: "n8n & AI Agents",
    icon: Cpu,
    text: "Automate search operations and repetitive business workflows with dependable AI and API orchestration.",
    link: "/services/ai-automation",
  },
  {
    number: "03",
    id: "ui-ux-design",
    title: "UI/UX Design",
    badge: "Conversion-Engineered",
    icon: PenTool,
    text: "Craft digital experiences that are intuitive, beautiful, and strategically aligned with your business goals.",
    link: "/services/ui-ux-design",
  },
  {
    number: "04",
    id: "web-engineering",
    title: "Web Engineering",
    badge: "Next.js & Supabase",
    icon: Code2,
    text: "Build resilient web systems that support technical SEO, performance, and reliable business operations.",
    link: "/services/web-development",
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="px-4 py-20 sm:px-8 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <Reveal direction="up">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground mb-12 sm:mb-16 max-w-[20ch]">
            What we build.
          </h2>
        </Reveal>

        {/* ── Bento Grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Cell 1 — Technical SEO: hero card, 2 cols */}
          <Reveal direction="up" delay={0} className="md:col-span-2">
            <Link
              href={services[0].link}
              id={services[0].id}
              className="block h-full group"
            >
              <motion.div
                whileHover={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="relative flex h-full min-h-[340px] sm:min-h-[400px] flex-col justify-between overflow-hidden rounded-[2.5rem] bg-[#ccff00]/[0.04] border border-[#ccff00]/20 p-8 sm:p-10 text-foreground backdrop-blur-sm"
                style={{ transformOrigin: "top center" }}
              >
                {/* Signal corner glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-0 h-[220px] w-[220px] rounded-full bg-[#ccff00]/15 blur-[90px]"
                />

                <div className="relative z-10">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-full border border-[#ccff00]/20 bg-[#ccff00]/10">
                      <Search className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-display text-lg text-primary/40">
                      {services[0].number}
                    </span>
                  </div>

                  <div className="mb-5 inline-flex">
                    <span className="rounded-full border border-[#ccff00]/20 bg-[#ccff00]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                      {services[0].badge}
                    </span>
                  </div>

                  <h3 className="mb-5 font-display text-3xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
                    {services[0].title}
                  </h3>
                  <p className="max-w-[52ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {services[0].text}
                  </p>
                </div>

                <div className="relative z-10 mt-auto flex items-center justify-between border-t border-[#ccff00]/10 pt-8">
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary/60">
                    Explore capability
                  </span>
                  <span className="flex size-10 items-center justify-center rounded-full border border-[#ccff00]/20 bg-[#ccff00]/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </Reveal>

          {/* Cell 2 — AI Automation: compact vertical, 1 col */}
          <Reveal direction="up" delay={0.07}>
            <Link
              href={services[1].link}
              id={services[1].id}
              className="block h-full group"
            >
              <motion.div
                whileHover={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="relative flex h-full min-h-[340px] sm:min-h-[400px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border bg-surface p-8 sm:p-10 backdrop-blur-sm"
                style={{ transformOrigin: "top center" }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative z-10">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-full border border-border bg-background">
                      <Cpu className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="font-display text-lg text-muted-foreground">
                      {services[1].number}
                    </span>
                  </div>

                  <div className="mb-5 inline-flex">
                    <span className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground">
                      {services[1].badge}
                    </span>
                  </div>

                  <h3 className="mb-4 font-display text-2xl leading-tight tracking-tight text-foreground sm:text-3xl">
                    {services[1].title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {services[1].text}
                  </p>
                </div>

                <div className="relative z-10 mt-auto flex items-center justify-between border-t border-border pt-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                    Explore capability
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full border border-border bg-background transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </Reveal>

          {/* Cell 3 — Web Engineering: compact vertical, 1 col */}
          <Reveal direction="up" delay={0.12}>
            <Link
              href={services[2].link}
              id={services[2].id}
              className="block h-full group"
            >
              <motion.div
                whileHover={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border bg-surface p-8 sm:p-10 backdrop-blur-sm"
                style={{ transformOrigin: "bottom center" }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-full border border-border bg-background">
                      <PenTool className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="font-display text-lg text-muted-foreground">
                      {services[2].number}
                    </span>
                  </div>

                  <div className="mb-4 inline-flex">
                    <span className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground">
                      {services[2].badge}
                    </span>
                  </div>

                  <h3 className="mb-4 font-display text-2xl leading-tight tracking-tight text-foreground sm:text-3xl">
                    {services[2].title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {services[2].text}
                  </p>
                </div>

                <div className="relative z-10 mt-auto flex items-center justify-between border-t border-border pt-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                    Explore capability
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full border border-border bg-background transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </Reveal>

          {/* Cell 4 — UI/UX Design: 2 cols */}
          <Reveal direction="up" delay={0.18} className="md:col-span-2">
            <Link
              href={services[3].link}
              id={services[3].id}
              className="block h-full group"
            >
              <motion.div
                whileHover={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border bg-surface p-8 sm:p-10 backdrop-blur-sm"
                style={{ transformOrigin: "bottom center" }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative z-10">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-full border border-border bg-background">
                      <Code2 className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="font-display text-lg text-muted-foreground">
                      {services[3].number}
                    </span>
                  </div>

                  <div className="mb-5 inline-flex">
                    <span className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground">
                      {services[3].badge}
                    </span>
                  </div>

                  <h3 className="mb-4 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-5xl">
                    {services[3].title}
                  </h3>
                  <p className="max-w-[42ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {services[3].text}
                  </p>
                </div>

                <div className="relative z-10 mt-auto flex items-center justify-between border-t border-border pt-6">
                  <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    Explore capability
                  </span>
                  <span className="flex size-10 items-center justify-center rounded-full border border-border bg-background transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
