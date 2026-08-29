"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import { usePointerVars, useMagnetic, useParallax } from "@/lib/motion";
import Aperture from "@/components/Aperture";

const CAPABILITIES = [
  "Technical SEO",
  "Core Web Vitals",
  "Search Automation",
  "AI Automation",
];

const STATS = [
  { before: "54", after: "99", label: "PageSpeed Score" },
  { before: "13.4s", after: "0.38s", label: "Largest Contentful Paint" },
  { before: "—", after: "100%", label: "Vulnerability Audit Coverage" },
];

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { ref: fieldRef } = usePointerVars<HTMLElement>();
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.22);
  const parallaxOffset = useParallax(0.8);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  const copyY = useTransform(smoothProgress, [0, 1], ["0%", "-10%"]);
  const copyOpacity = useTransform(smoothProgress, [0, 0.65], [1, 0]);
  const bentosY = useTransform(smoothProgress, [0, 1], ["0%", "-5%"]);
  const bentosOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;
        fieldRef.current = node;
      }}
      id="top"
      className="relative isolate flex min-h-svh flex-col overflow-hidden w-full bg-background pt-32"
    >
      {/* ── Ambient Aperture Backdrop ───────────────────────────── */}
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.28, 1] }}
        aria-hidden
      >
        <Aperture 
          offset={parallaxOffset} 
          scrollYProgress={scrollYProgress} 
          className="w-[80vw] max-w-[800px] opacity-70 blur-[2px]" 
        />
      </motion.div>

      {/* ── Main Content Centered ─────────────────────────────────── */}
      <div className="relative z-20 flex w-full max-w-5xl mx-auto flex-1 flex-col justify-center px-4 sm:px-8 text-center pb-24">
        <motion.div style={{ y: copyY, opacity: copyOpacity }} className="flex flex-col items-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.28, 1] }}
            className="mb-8 flex items-center gap-2.5"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="tech-label text-muted-foreground tracking-widest uppercase">Independent Technical Studio</span>
          </motion.div>

          {/* H1 — massive */}
          <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] tracking-tight text-foreground max-w-[12ch] mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.28, 1] }}
              className="block"
            >
              Speed is
            </motion.span>
            <motion.em
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.28, 1] }}
              className="not-italic text-primary block"
            >
              revenue.
            </motion.em>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.28, 1] }}
            className="mt-8 max-w-lg mx-auto text-base sm:text-xl leading-relaxed text-muted-foreground font-medium"
          >
            We engineer the technical SEO and web infrastructure that search engines reward.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.28, 1] }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              ref={ctaRef}
              href="/contact"
              className="group flex h-14 items-center gap-2.5 overflow-hidden rounded-full bg-primary px-8 font-bold text-primary-foreground shadow-[0_0_40px_rgba(204,255,0,0.2)] transition-all hover:bg-primary/90 hover:shadow-[0_0_60px_rgba(204,255,0,0.3)] active:scale-[0.97]"
            >
              <span>Get a Technical SEO Audit</span>
              <ArrowUpRight className="h-5 w-5 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/work"
              className="flex h-14 items-center px-8 font-bold text-foreground border border-border bg-surface/50 backdrop-blur-sm rounded-full transition-colors hover:bg-surface hover:border-white/20"
            >
              View our work
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Stats Strip Below Fold ────────────────────────────────── */}
        <motion.div
          style={{ y: bentosY, opacity: bentosOpacity }}
          className="mt-28 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:max-w-4xl lg:mx-auto w-full"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.22, 1, 0.28, 1],
              }}
              className="flex flex-col items-center justify-center gap-2 rounded-3xl border border-border bg-surface/50 p-6 backdrop-blur-md transition-all hover:border-white/10"
            >
              <div className="flex items-baseline gap-2">
                {stat.before !== "—" && (
                  <span className="font-display text-lg text-muted-foreground/40 line-through decoration-1">
                    {stat.before}
                  </span>
                )}
                <span className="font-display text-3xl font-medium text-primary">
                  {stat.after}
                </span>
              </div>
              <div className="text-center font-sans text-xs text-muted-foreground font-semibold tracking-wide uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Capability Rail ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0 }}
        className="relative z-30 mt-auto border-t border-border bg-surface/30 py-5 backdrop-blur-md"
      >
        <div className="flex w-max animate-drift items-center gap-12 pl-12">
          {[...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="tech-label flex shrink-0 items-center gap-12 text-muted-foreground font-semibold"
            >
              {item}
              <span aria-hidden="true" className="size-1.5 rounded-full bg-primary/40" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
