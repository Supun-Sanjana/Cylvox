"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldAlert, Cpu, Database, Zap, Palette, Code2, Search, Server } from "lucide-react";
import Reveal from "./Reveal";
import Link from "next/link";
import { SectionLabel } from "./SectionLabel";

const services = [
  {
    number: "01",
    title: "Vibe-Coded App Audits",
    badge: "Security & Code",
    icon: ShieldAlert,
    text: "Deep vulnerability scans, logic flaw fixes, auth hardening, and architectural cleanup for apps built with Cursor, v0, Bolt, or Lovable.",
    link: "/services/web-development"
  },
  {
    number: "02",
    title: "AI Workflows & n8n",
    badge: "Automation",
    icon: Cpu,
    text: "Autonomous n8n pipelines, custom AI agents, and webhook integrations that handle content, leads, and operational tasks 24/7.",
    link: "/services/ai-automation"
  },
  {
    number: "03",
    title: "Headless CMS Integration",
    badge: "Sanity & Content",
    icon: Database,
    text: "Structured, editor-friendly content architectures powered by Sanity.io and Next.js for lightning-fast publishing without code updates.",
    link: "/services/web-development"
  },
  {
    number: "04",
    title: "Core Web Vitals & Speed Tuning",
    badge: "Sub-Second LCP",
    icon: Zap,
    text: "Deep frontend remediation, render-blocking JS elimination, edge caching, and guaranteed 90+/95+ PageSpeed Insights and Lighthouse scores.",
    link: "/services/optimization"
  },
  {
    number: "05",
    title: "Technical SEO & Schema Engine",
    badge: "IndexNow & JSON-LD",
    icon: Search,
    text: "Complete 11-phase indexing architecture: automated IndexNow search pings, dynamic XML sitemaps, server-side CMS metadata, and Schema.org rich results.",
    link: "/services/technical-seo"
  },
  {
    number: "06",
    title: "Brand & UI/UX Design",
    badge: "Conversion UI",
    icon: Palette,
    text: "High-end visual design systems, interactive prototypes, and conversion-engineered interfaces built to make brands impossible to ignore.",
    link: "/services/ui-ux-design"
  },
  {
    number: "07",
    title: "Full-Stack Web Engineering",
    badge: "Next.js & React",
    icon: Code2,
    text: "Production-ready, type-safe Next.js applications engineered for high concurrency, robust security, and effortless scalability.",
    link: "/services/web-development"
  },
  {
    number: "08",
    title: "Supabase & Backend Scaling",
    badge: "Postgres & Edge API",
    icon: Server,
    text: "High-concurrency Postgres schema design, database query optimization, automated pagination, and low-latency Serverless Edge infrastructures.",
    link: "/services/web-development"
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-4 py-20 sm:px-8 sm:py-28 bg-surface"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal direction="up">
          <SectionLabel>Our Capabilities</SectionLabel>
          <h2
            className="mt-5 text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl text-foreground"
          >
            Engineered to perform.{" "}
            <em className="text-primary not-italic">
              Hardened to scale.
            </em>
          </h2>
        </Reveal>

        {/* 2-col grid */}
        <div
          className="grid grid-cols-2 mt-14 border-t border-border
                     max-sm:grid-cols-1"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.number} delay={i * 0.1} direction="up">
                <Link href={service.link} className="block w-full h-full">
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)", x: 3 }}
                    transition={{ duration: 0.2 }}
                    className={`group relative grid grid-cols-[50px_1fr_24px] gap-4
                                min-h-[250px] py-8 border-b border-border cursor-pointer h-full
                                ${i % 2 === 0
                                  ? "pl-4 sm:pl-8 pr-[46px] border-r border-border max-sm:border-r-0 max-sm:pr-4"
                                  : "pl-[46px] pr-4 sm:pr-8 max-sm:pl-4"
                                }
                                ${i === 0 || i === 3 || i === 4 || i === 7 ? "bg-primary/5" : ""}
                                max-sm:grid-cols-[40px_1fr_20px] max-sm:min-h-[190px]
                                max-sm:py-6`}
                  >
                    <div className="flex flex-col items-start gap-2">
                      <span className="font-bold text-sm text-primary">
                        {service.number}
                      </span>
                      <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    </div>

                    <div>
                      <div className="inline-block px-2.5 py-0.5 mb-3 text-[10px] font-extrabold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                        {service.badge}
                      </div>
                      <h3
                        className="font-display font-semibold tracking-tight
                                   leading-[1.1] text-2xl sm:text-3xl mb-3 text-foreground"
                      >
                        {service.title}
                      </h3>
                      <p className="max-w-[340px] text-sm leading-[1.6] text-muted-foreground mb-0 font-medium">
                        {service.text}
                      </p>
                    </div>

                    <span className="pt-[3px] text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  </motion.div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}