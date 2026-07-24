"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Database,
  Zap,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Lock,
  Globe
} from "lucide-react";

interface CaseStudy {
  id: string;
  category: "audit" | "automation" | "cms" | "perf";
  categoryName: string;
  categoryColor: string;
  icon: any;
  client: string;
  title: string;
  metric: string;
  impact: string;
  description: string;
  tags: string[];
  gradient: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "aurapay",
    category: "audit",
    categoryName: "Vibe-Code Security Audit",
    categoryColor: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    icon: ShieldCheck,
    client: "AuraPay Fintech",
    title: "Hardening a Cursor-Built Fintech App Before $2.5M Seed Round",
    metric: "0 Flaws Remaining",
    impact: "$2.5M Seed Round Secured",
    description:
      "Audited a rapidly built AI-assisted Next.js fintech dashboard. Uncovered and remediated 14 critical vulnerabilities including API key leaks, missing rate limiters, and JWT auth bypasses.",
    tags: ["Vibe-Code Audit", "Auth Hardening", "Next.js", "Supabase"],
    gradient: "from-amber-500/20 to-transparent",
  },
  {
    id: "omniscale",
    category: "automation",
    categoryName: "n8n AI Automations",
    categoryColor: "bg-cyan-400/10 text-cyan-300 border-cyan-400/30",
    icon: Cpu,
    client: "OmniScale AI SaaS",
    title: "Autonomous Lead Enrichment & Content Pipeline with n8n",
    metric: "45,000+ Tasks / mo",
    impact: "10x Faster Lead Processing",
    description:
      "Architected custom multi-step n8n AI workflows that capture web leads, enrich prospect metadata via custom LLM agents, and auto-sync records to Sanity CMS and Slack in real-time.",
    tags: ["n8n Workflows", "AI Agents", "Sanity CMS", "Webhooks"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "veloce",
    category: "cms",
    categoryName: "Headless Sanity CMS",
    categoryColor: "bg-rose-400/10 text-rose-300 border-rose-400/30",
    icon: Database,
    client: "Veloce Commerce",
    title: "WordPress to Headless Sanity CMS Migration with Sub-Second ISR",
    metric: "0.38s LCP Speed",
    impact: "+185% Conversion Rate",
    description:
      "Replaced a slow legacy monolith with Next.js App Router and Sanity GROQ schemas. Marketing now publishes landing pages instantly without dev deployments.",
    tags: ["Sanity.io", "GROQ Schema", "Next.js ISR", "Vercel"],
    gradient: "from-rose-500/20 to-transparent",
  },
  {
    id: "hyperdrive",
    category: "perf",
    categoryName: "SEO & Core Web Vitals",
    categoryColor: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
    icon: Zap,
    client: "HyperDrive B2B",
    title: "Engineering a 99/100 Lighthouse Performance & Organic SEO Engine",
    metric: "+310% Organic Traffic",
    impact: "#1 Keyword Rankings",
    description:
      "Executed edge bundle minification, JSON-LD structured schema injection, and layout shift elimination to achieve sub-second page loads and 100/100 Lighthouse scores.",
    tags: ["SEO Optimization", "Core Web Vitals", "Edge Caching", "Lighthouse 99"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
];

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredData =
    activeFilter === "all"
      ? caseStudiesData
      : caseStudiesData.filter((c) => c.category === activeFilter);

  return (
    <section
      id="cases"
      className="scroll-mt-24 relative py-20 sm:py-28 px-4 sm:px-8 bg-[#070913] text-white overflow-hidden"
    >
      {/* Background Ambient Aura */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Purple/Blue Sphere (Top Right) */}
        <div className="absolute top-[10%] right-[5%]">
          <motion.div
            animate={{
              scale: [1, 1.4, 0.9, 1.3, 1],
              x: ["0vw", "-15vw", "20vw", "-10vw", "0vw"],
              y: ["0vh", "20vh", "-15vh", "15vh", "0vh"],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            className="w-[70vw] max-w-[800px] h-[70vw] max-h-[800px] rounded-full filter blur-[140px] opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(204, 255, 0, 0.15) 0%, rgba(204, 255, 0, 0.05) 50%, transparent 80%)",
            }}
          />
        </div>
        
        {/* Pink/Green Sphere (Bottom Left) */}
        <div className="absolute bottom-[5%] left-[0%]">
          <motion.div
            animate={{
              scale: [1, 1.5, 0.8, 1.4, 1],
              x: ["0vw", "20vw", "-20vw", "10vw", "0vw"],
              y: ["0vh", "-20vh", "25vh", "-15vh", "0vh"],
              rotate: [360, 270, 180, 90, 0],
            }}
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
            className="w-[65vw] max-w-[750px] h-[65vw] max-h-[750px] rounded-full filter blur-[130px] opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(204, 255, 0, 0.1) 0%, rgba(204, 255, 0, 0.03) 50%, transparent 80%)",
            }}
          />
        </div>

        {/* Amber/Rose Sphere (Top Left) */}
        <div className="absolute top-[0%] left-[10%]">
          <motion.div
            animate={{
              scale: [1, 1.3, 0.9, 1.2, 1],
              x: ["0vw", "15vw", "-10vw", "20vw", "0vw"],
              y: ["0vh", "10vh", "-20vh", "15vh", "0vh"],
              rotate: [0, 120, 240, 360],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="w-[60vw] max-w-[700px] h-[60vw] max-h-[700px] rounded-full filter blur-[120px] opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(204, 255, 0, 0.1) 0%, rgba(204, 255, 0, 0.05) 50%, transparent 80%)",
            }}
          />
        </div>

        {/* Cyan/Teal Sphere (Bottom Right) */}
        <div className="absolute bottom-[20%] right-[0%]">
          <motion.div
            animate={{
              scale: [1, 1.4, 0.85, 1.3, 1],
              x: ["0vw", "-25vw", "15vw", "-10vw", "0vw"],
              y: ["0vh", "-15vh", "20vh", "-20vh", "0vh"],
              rotate: [360, 240, 120, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="w-[75vw] max-w-[850px] h-[75vw] max-h-[850px] rounded-full filter blur-[150px] opacity-45"
            style={{
              background:
                "radial-gradient(circle, rgba(204, 255, 0, 0.12) 0%, rgba(204, 255, 0, 0.04) 50%, transparent 80%)",
            }}
          />
        </div>

        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.8) 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#ccff00] mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>PROVEN CASE STUDIES</span>
          </div>

          <h2 className="font-[family-name:var(--font-syne)] font-black text-[clamp(32px,5vw,56px)] leading-[1.05] tracking-[-0.04em] max-w-3xl mb-4 text-white">
            Real Systems. <em className="text-[#ccff00] not-italic">Measurable Impact.</em>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
            See how we transform vibe-coded AI prototypes into hardened, high-performing enterprise platforms for growing software agencies and venture-backed startups.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
            {[
              { id: "all", label: "All Projects" },
              { id: "audit", label: "Security Audits" },
              { id: "automation", label: "n8n AI Workflows" },
              { id: "cms", label: "Sanity CMS" },
              { id: "perf", label: "SEO / Speed" },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "text-white shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="caseStudyFilter"
                      className="absolute inset-0 bg-[#ccff00] rounded-full shadow-[0_4px_15px_rgba(204,255,0,0.5)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => {
              const CategoryIcon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative rounded-2xl border border-white/15 bg-[#0e111f]/90 p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl hover:border-[#ccff00]/40 transition-all duration-300"
                >
                  {/* Top Card Header */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold border ${item.categoryColor}`}
                      >
                        <CategoryIcon className="w-3.5 h-3.5" />
                        {item.categoryName}
                      </span>
                      <span className="text-xs font-mono text-gray-400 font-semibold">
                        {item.client}
                      </span>
                    </div>

                    <h3 className="font-black text-xl sm:text-2xl text-white mb-3 leading-snug group-hover:text-[#ccff00] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Metric & Tags Footer */}
                  <div>
                    {/* Metric Callout Box */}
                    <div className="grid grid-cols-2 gap-3 p-3.5 bg-white/[0.04] border border-white/10 rounded-xl mb-5">
                      <div>
                        <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                          Key Outcome
                        </span>
                        <strong className="text-emerald-400 text-sm font-extrabold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          {item.metric}
                        </strong>
                      </div>
                      <div>
                        <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                          Business Impact
                        </span>
                        <strong className="text-[#ccff00] text-sm font-extrabold flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5 text-[#ccff00]" />
                          {item.impact}
                        </strong>
                      </div>
                    </div>

                    {/* Tag Pills & CTA */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#ccff00] hover:text-white transition-colors"
                      >
                        Details <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-200 backdrop-blur-md">
            <span>Have a vibe-coded app or workflow ready for scaling?</span>
            <a
              href="#contact"
              className="text-[#ccff00] font-extrabold hover:underline inline-flex items-center gap-1"
            >
              Book an Agency Audit &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
