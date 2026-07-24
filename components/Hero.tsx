"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Cpu,
  Database,
  Lock,
  CheckCircle2,
  Check,
  Terminal,
  Activity,
  Sparkles
} from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [pointer, setPointer] = useState({ x: 50, y: 35 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeTab, setActiveTab] = useState<"audit" | "automation" | "cms" | "perf">("audit");

  // Framer Motion Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const deckY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const deckScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const deckRotateX = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  // Track pointer position relative to hero bounds
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      setPointer({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };
    hero.addEventListener("pointermove", onMove);
    return () => hero.removeEventListener("pointermove", onMove);
  }, []);

  // Auto switch tabs every 5.5s with easeInOut transition
  useEffect(() => {
    const tabs: Array<"audit" | "automation" | "cms" | "perf"> = ["audit", "automation", "cms", "perf"];
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const idx = tabs.indexOf(current);
        return tabs[(idx + 1) % tabs.length];
      });
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const pointerVars = {
    "--x": `${pointer.x}%`,
    "--y": `${pointer.y}%`,
  } as React.CSSProperties;

  return (
    <section
      ref={heroRef}
      id="top"
      style={pointerVars}
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
      className="hero-shell relative overflow-hidden isolate w-full min-h-[100svh] text-white m-0 rounded-none"
    >
      {/* ── Squish Exact Sky Blue & Electric Cerulean Gradient Base ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 80% at 50% -10%, #60a5fa 0%, #3b82f6 30%, #1d4ed8 65%, #0f172a 100%)
          `,
        }}
      />

      {/* ── Squish Ethereal Center Bloom (Pink/Peach/Purple Floral Aura) ── */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: auraOpacity }}
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      >
        {/* Central Pink/Peach Glowing Bloom */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 4, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[25%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full filter blur-[95px] opacity-80 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(244, 114, 182, 0.75) 0%, rgba(251, 146, 60, 0.55) 35%, rgba(192, 132, 252, 0.35) 65%, transparent 85%)",
          }}
        />

        {/* Ambient Top Cyan Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [-15, 15, -15],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full filter blur-[110px] opacity-75 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.65) 0%, rgba(99, 102, 241, 0.45) 50%, transparent 75%)",
          }}
        />

        {/* Ambient Bottom Lime Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [10, -10, 10],
            y: [10, -10, 10],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[15%] -left-[5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full filter blur-[120px] opacity-50 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(204, 255, 0, 0.35) 0%, rgba(204, 255, 0, 0.1) 45%, transparent 75%)",
          }}
        />

        {/* Squish Signature High-Contrast White Dot Grid Matrix */}
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.9) 1.3px, transparent 1.3px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(circle 400px at var(--x, 50%) var(--y, 35%), #000 0%, #000a 60%, transparent 100%)",
          }}
        />

        {/* Noise overlay */}
        <div className="grain absolute inset-0 opacity-20 mix-blend-overlay" />
      </motion.div>

      {/* ── Main Hero Content ──────────────────────────────────── */}
      <div className="relative z-10 pt-[clamp(90px,12vh,140px)] pb-[clamp(40px,7vh,75px)] px-[clamp(16px,5vw,80px)] max-w-[1440px] mx-auto flex flex-col justify-between min-h-[100svh]">
        
        {/* Top Grid: Left Copy & Right Interactive Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto">
          
          {/* Left Column: Hero Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
          

            {/* Squish-Style Editorial Headline */}
            <h1
              className="font-[family-name:var(--font-syne)] font-black leading-[0.95] sm:leading-[0.92] tracking-[-0.06em]
                         text-[clamp(36px,6.5vw,84px)] mb-5 sm:mb-6 text-white drop-shadow-md"
            >
              From <em className="text-[#ccff00] not-italic pr-1">vibe-coded</em> to enterprise-ready.
            </h1>

            {/* Description */}
            <p className="max-w-xl text-[14.5px] sm:text-[17px] leading-[1.6] sm:leading-[1.65] text-white/90 mb-7 sm:mb-8 font-medium drop-shadow-sm">
              We design, develop, and optimize high-concurrency web systems. Specializing in 
              <strong className="text-white font-black"> n8n AI automations</strong>, 
              <strong className="text-white font-black"> Headless Sanity CMS</strong>, 
              <strong className="text-white font-black"> sub-second SEO performance</strong>, and 
              <strong className="text-white font-black"> security audits for AI-generated apps</strong>.
            </p>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 sm:mb-9 max-w-xl">
              {[
                { label: "Vibe-Code Security Scans", icon: ShieldCheck, color: "text-amber-100 bg-white/15 border-white/25" },
                { label: "n8n AI Automations", icon: Cpu, color: "text-cyan-100 bg-white/15 border-white/25" },
                { label: "Sanity Headless CMS", icon: Database, color: "text-rose-100 bg-white/15 border-white/25" },
                { label: "99+ Core Web Vitals & SEO", icon: Zap, color: "text-emerald-100 bg-white/15 border-white/25" },
              ].map((pill, i) => {
                const Icon = pill.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ ease: "easeInOut", duration: 0.2 }}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.75 rounded-xl border text-[11px] sm:text-xs font-bold backdrop-blur-md shadow-sm transition-all ${pill.color}`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>{pill.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* HIGH-CONTRAST CALL TO ACTION BUTTONS WITH EXPLICIT DARK TEXT */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 max-sm:w-full">
              <motion.a
                whileHover={{ scale: 1.04, boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#09080e] font-black text-sm px-6 py-3.5 sm:px-7 sm:py-4 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-[#ccff00] max-sm:w-full"
                style={{ color: "#09080e" }}
              >
                <span style={{ color: "#09080e" }}>Audit Your App</span>
                <ArrowUpRight className="w-4.5 h-4.5 stroke-[3]" style={{ color: "#09080e" }} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, backgroundColor: "rgba(15, 23, 42, 0.9)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-sm font-extrabold text-white px-6 py-3.5 sm:py-4 rounded-full bg-slate-950/70 border border-white/30 backdrop-blur-md shadow-md transition-all duration-200 max-sm:w-full"
              >
                Explore Capabilities
              </motion.a>
            </div>

          </motion.div>

          {/* Right Column: Interactive LIVE ENGINE Deck (Framed with Parallax Scroll) */}
          <motion.div
            id="deck"
            style={{ y: deckY, scale: deckScale, rotateX: deckRotateX }}
            className="lg:col-span-5 w-full perspective-1000 mt-4 lg:mt-0 scroll-mt-32"
          >
            <div className="relative rounded-2xl border border-white/20 bg-[#0a0d18]/90 p-4 sm:p-5.5 shadow-[0_30px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-3xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/10">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/90 inline-block shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/90 inline-block shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/90 inline-block shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  <span className="ml-1.5 sm:ml-2 text-[11px] sm:text-xs font-mono text-gray-300 flex items-center gap-1.5 font-semibold">
                    <Terminal className="w-3.5 h-3.5 text-[#ccff00] shrink-0" /> cylvox-system-deck.v2
                  </span>
                </div>
                
                {/* LIVE ENGINE indicator - STATIC GLOW */}
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 sm:px-2.5 rounded-full border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                  <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> LIVE ENGINE
                </div>
              </div>

              {/* Tab Selector Buttons */}
              <div className="grid grid-cols-4 gap-1 p-1 sm:p-1.5 bg-white/5 rounded-xl border border-white/10 mb-3.5 text-[11px] sm:text-xs font-bold">
                {[
                  { id: "audit", label: "Audit", icon: ShieldCheck },
                  { id: "automation", label: "n8n AI", icon: Cpu },
                  { id: "cms", label: "Sanity", icon: Database },
                  { id: "perf", label: "SEO/Perf", icon: Zap },
                ].map((t) => {
                  const Icon = t.icon;
                  const isActive = activeTab === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id as any)}
                      className={`relative flex items-center justify-center gap-1 py-1.5 px-1 sm:py-2 sm:px-2 rounded-lg transition-all ${
                        isActive
                          ? "text-[#09080e] font-extrabold shadow-lg"
                          : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute inset-0 bg-[#ccff00] rounded-lg shadow-[0_4px_15px_rgba(204,255,0,0.3)]"
                          transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1">
                        <Icon className="w-3.5 h-3.5 shrink-0" /> <span>{t.label}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Display */}
              <div className="bg-[#050811] rounded-xl p-3.5 sm:p-4.5 border border-white/10 min-h-[250px] sm:min-h-[265px] flex flex-col justify-between font-mono text-xs">
                
                {/* 1. VIBE CODE SECURITY AUDIT SCANNER */}
                {activeTab === "audit" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="space-y-2.5 sm:space-y-3"
                  >
                    <div className="flex items-center justify-between text-gray-200 border-b border-white/10 pb-2">
                      <span className="text-[#ccff00] font-bold flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                        <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ccff00] shrink-0" /> Vibe-Code Inspector
                      </span>
                      <span className="text-[9.5px] sm:text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-extrabold">
                        GRADE: A+
                      </span>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2 text-[10.5px] sm:text-[11px]">
                      <div className="flex items-center justify-between bg-white/[0.04] p-1.5 sm:p-2 rounded-lg border border-white/5">
                        <span className="text-gray-200 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> API Keys & Secrets
                        </span>
                        <span className="text-emerald-400 font-bold">0 Leaked Keys</span>
                      </div>

                      <div className="flex items-center justify-between bg-white/[0.04] p-1.5 sm:p-2 rounded-lg border border-white/5">
                        <span className="text-gray-200 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Auth & Rate Limits
                        </span>
                        <span className="text-emerald-400 font-bold">Protected</span>
                      </div>

                      <div className="flex items-center justify-between bg-white/[0.04] p-1.5 sm:p-2 rounded-lg border border-white/5">
                        <span className="text-gray-200 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Prompt Injection
                        </span>
                        <span className="text-[#ccff00] font-bold">Hardened</span>
                      </div>

                      <div className="flex items-center justify-between bg-white/[0.04] p-1.5 sm:p-2 rounded-lg border border-white/5">
                        <span className="text-gray-200 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> SQLi / XSS Code
                        </span>
                        <span className="text-emerald-400 font-bold">Cleaned</span>
                      </div>
                    </div>

                    <div className="pt-1.5 flex items-center justify-between text-[10.5px] sm:text-[11px] text-gray-400 font-sans">
                      <span>Status: <strong className="text-white">Bulletproof</strong></span>
                      <a href="#contact" className="text-[#ccff00] font-bold hover:underline flex items-center gap-1">
                        Request Audit &rarr;
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* 2. N8N AI WORKFLOWS */}
                {activeTab === "automation" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="space-y-2.5 sm:space-y-3"
                  >
                    <div className="flex items-center justify-between text-gray-200 border-b border-white/10 pb-2">
                      <span className="text-cyan-300 font-bold flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                        <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" /> n8n AI Pipeline
                      </span>
                      <span className="text-[9.5px] sm:text-[10px] text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/30 font-bold">
                        24/7 ACTIVE
                      </span>
                    </div>

                    {/* Visual Workflow Nodes */}
                    <div className="flex items-center justify-between gap-1 py-2 sm:py-3 text-[10px]">
                      <div className="flex-1 bg-cyan-950/50 border border-cyan-500/40 p-1.5 sm:p-2 rounded-lg text-center shadow-inner">
                        <span className="block text-gray-400 text-[8.5px]">TRIGGER</span>
                        <strong className="text-cyan-200 text-[10px]">Webhook</strong>
                      </div>
                      <span className="text-[#ccff00] font-bold">&rarr;</span>
                      <div className="flex-1 bg-[#ccff00]/10 border border-[#ccff00]/40 p-1.5 sm:p-2 rounded-lg text-center shadow-inner">
                        <span className="block text-gray-400 text-[8.5px]">AI AGENT</span>
                        <strong className="text-[#ccff00] text-[10px]">n8n Engine</strong>
                      </div>
                      <span className="text-[#ccff00] font-bold">&rarr;</span>
                      <div className="flex-1 bg-emerald-950/50 border border-emerald-500/40 p-1.5 sm:p-2 rounded-lg text-center shadow-inner">
                        <span className="block text-gray-400 text-[8.5px]">OUTPUT</span>
                        <strong className="text-emerald-200 text-[10px]">Sanity+Slack</strong>
                      </div>
                    </div>

                    <div className="bg-white/[0.04] p-2 rounded-lg border border-white/5 text-[10.5px] sm:text-[11px] space-y-1 text-gray-300">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Execution Speed:</span>
                        <span className="text-emerald-400 font-bold">1.18s avg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Pipeline Uptime:</span>
                        <span className="text-emerald-400 font-bold">99.99%</span>
                      </div>
                    </div>

                    <p className="text-[10px] text-gray-400 font-sans italic">
                      Automating web leads, CRM syncing, AI content pipelines & DB actions.
                    </p>
                  </motion.div>
                )}

                {/* 3. HEADLESS CMS (SANITY) */}
                {activeTab === "cms" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="space-y-2.5 sm:space-y-3"
                  >
                    <div className="flex items-center justify-between text-gray-200 border-b border-white/10 pb-2">
                      <span className="text-rose-300 font-bold flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                        <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 shrink-0" /> Sanity CMS Engine
                      </span>
                      <span className="text-[9.5px] sm:text-[10px] text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded border border-rose-500/30 font-bold">
                        ISR REAL-TIME
                      </span>
                    </div>

                    <div className="bg-[#03050c] p-2.5 sm:p-3 rounded-lg border border-white/10 font-mono text-[10px] sm:text-[10.5px] text-gray-300 leading-relaxed overflow-hidden">
                      <span className="text-gray-400">// Sanity GROQ Schema Sync</span><br />
                      <span className="text-rose-400">*[_type == &quot;landingPage&quot;]</span> &#123;<br />
                      &nbsp;&nbsp;<span className="text-white">title</span>: <span className="text-amber-200">&quot;Cylvox Agency&quot;</span>,<br />
                      &nbsp;&nbsp;<span className="text-white">status</span>: <span className="text-emerald-400">&quot;PUBLISHED&quot;</span>,<br />
                      &nbsp;&nbsp;<span className="text-white">revalidate</span>: <span className="text-[#ccff00]">60</span><br />
                      &#125;
                    </div>

                    <div className="flex items-center justify-between text-[10.5px] sm:text-[11px] text-gray-300 pt-1 font-sans">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <Check className="w-3.5 h-3.5 shrink-0" /> No Code Redeployment Required
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* 4. SPEED & SEO ENGINE */}
                {activeTab === "perf" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="space-y-2.5 sm:space-y-3"
                  >
                    <div className="flex items-center justify-between text-gray-200 border-b border-white/10 pb-2">
                      <span className="text-emerald-300 font-bold flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" /> Core Web Vitals & SEO
                      </span>
                      <span className="text-[9.5px] sm:text-[10px] text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                        99/100 LIGHTHOUSE
                      </span>
                    </div>

                    {/* Gauges */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center py-1.5 sm:py-2 font-mono">
                      <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-1.5 sm:p-2">
                        <div className="text-base sm:text-lg font-black text-emerald-400">100</div>
                        <div className="text-[8.5px] sm:text-[9px] text-gray-300 font-bold">PERF</div>
                      </div>
                      <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-1.5 sm:p-2">
                        <div className="text-base sm:text-lg font-black text-emerald-400">100</div>
                        <div className="text-[8.5px] sm:text-[9px] text-gray-300 font-bold">SEO</div>
                      </div>
                      <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-1.5 sm:p-2">
                        <div className="text-base sm:text-lg font-black text-[#ccff00]">0.38s</div>
                        <div className="text-[8.5px] sm:text-[9px] text-gray-300 font-bold">LCP</div>
                      </div>
                    </div>

                    <div className="bg-white/[0.04] p-2 rounded-lg border border-white/5 text-[10.5px] sm:text-[11px] space-y-1 text-gray-300">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Structured Schema:</span>
                        <span className="text-emerald-400 font-bold">Validated</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Edge Cache Ratio:</span>
                        <span className="text-emerald-400 font-bold">99.4%</span>
                      </div>
                    </div>
                  </motion.div>
                )}

              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="pt-6 sm:pt-8 border-t border-white/20 mt-6 sm:mt-8 flex flex-wrap items-center justify-between gap-4 sm:gap-6 text-xs text-white/90"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Accepting Q3 Client Projects & App Audits</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-bold text-white/90 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-200 shrink-0" /> 100% Audit Coverage</span>
            <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-200 shrink-0" /> Sub-Second Speed</span>
            <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200 shrink-0" /> Custom n8n Workflows</span>
          </div>
        </motion.div>

      </div>

    </section>
  );
}