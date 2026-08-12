"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Aperture from "./Aperture";
import { SectionLabel } from "./SectionLabel";
import { usePointerVars, useParallax, useMagnetic } from "@/lib/motion";

const CAPABILITIES = [
  "Security audits",
  "n8n automation",
  "Headless Sanity",
  "Core Web Vitals",
  "Technical SEO",
  "Next.js engineering",
  "Supabase scaling",
  "Conversion UI",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { ref: fieldRef } = usePointerVars<HTMLDivElement>();
  const parallax = useParallax(1);
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.22);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // The aperture sinks and closes as you scroll away from it.
  const artY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const artScale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const artOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="atmos relative isolate flex min-h-svh flex-col overflow-hidden"
    >
      {/* ── Atmosphere ─────────────────────────────────────────── */}
      <div ref={fieldRef} className="absolute inset-0 -z-10">
        <div className="dots absolute inset-0 opacity-45" />
        <div className="dots-live absolute inset-0" />

        <motion.div
          style={{ y: artY, scale: artScale, opacity: artOpacity }}
          className="absolute left-1/2 top-[4%] w-[74vmin] -translate-x-1/2 sm:w-[62vmin] lg:left-[72%] lg:top-[6%] lg:w-[54vmin]"
        >
          <Aperture offset={parallax} className="w-full" />
        </motion.div>

        {/* Keeps the headline readable where it crosses the bloom */}
        <div className="scrim absolute inset-0 max-lg:hidden" />

        <div className="horizon absolute inset-x-0 bottom-0 h-[42vh]" />
        <div className="grain absolute inset-0" />
      </div>

      {/* ── Copy ───────────────────────────────────────────────── */}
      <motion.div
        style={{ y: copyY, opacity: copyOpacity }}
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-14 pt-36 sm:px-8 sm:pb-20 sm:pt-44 lg:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.28, 1] }}
        >
          <SectionLabel>Cylvox Solo Studio</SectionLabel>
        </motion.div>

        <h1 className="font-display mt-7 max-w-[19ch] text-balance text-[clamp(2.9rem,9.2vw,7.5rem)] leading-[0.94] text-foreground">
          {["From", "vibe-coded", "to"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                delay: 0.12 + i * 0.09,
                ease: [0.22, 1, 0.28, 1],
              }}
              className={`mr-[0.28em] inline-block ${
                word === "vibe-coded" ? "italic text-primary" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.42, ease: [0.22, 1, 0.28, 1] }}
            className="inline-block"
          >
            enterprise-ready
            <span className="text-primary">.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.28, 1] }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          An independent studio that audits AI-generated apps for the flaws
          their builders never saw, then re-engineers them into systems that
          hold under real traffic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.68, ease: [0.22, 1, 0.28, 1] }}
          className="mt-11 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <Link
            ref={ctaRef}
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[0_14px_44px_-12px_rgba(204,255,0,0.6)] transition-colors duration-300 hover:bg-foreground"
          >
            Audit your app
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-input px-7 py-4 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/60 hover:text-primary"
          >
            Explore capabilities
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Drifting capability rail ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9 }}
        className="relative border-t border-border/70 bg-background/25 py-5 backdrop-blur-sm"
      >
        <div className="flex w-max animate-drift items-center gap-10 pl-10">
          {[...CAPABILITIES, ...CAPABILITIES].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="tech-label flex shrink-0 items-center gap-10 text-muted-foreground"
            >
              {item}
              <span
                aria-hidden="true"
                className="size-1 rounded-full bg-primary/60"
              />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
