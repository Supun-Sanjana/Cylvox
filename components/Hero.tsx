"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
  const { ref: fieldRef } = usePointerVars<HTMLElement>();
  const parallax = useParallax(1);
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.22);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // The aperture sinks and closes as you scroll away from it.
  const artY = useTransform(smoothProgress, [0, 1], ["0%", "22%"]);
  const artOpacity = useTransform(smoothProgress, [0, 0.85], [1, 0]);
  const imgZoom = useTransform(smoothProgress, [0, 1], [1.05, 1.4]);

  const copyY = useTransform(smoothProgress, [0, 1], ["0%", "-14%"]);
  const copyOpacity = useTransform(smoothProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;
        fieldRef.current = node;
      }}
      id="top"
      className="atmos relative isolate flex min-h-svh flex-col overflow-hidden w-full"
    >
      {/* ── Atmosphere ─────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-10 pointer-events-none lg:block hidden">
        <div className="dots absolute inset-0 opacity-45" />
        <div className="dots-live absolute inset-0" />
      </div>

      <motion.div
        style={{ y: artY, opacity: artOpacity }}
        className="absolute inset-0 w-full h-full lg:h-auto lg:inset-auto lg:left-[66%] lg:top-1/2 lg:-translate-y-1/2 lg:w-[38vw] lg:max-w-[500px] z-0 lg:z-10"
      >
        {/* Full screen on mobile, Framed Window on desktop */}
        <div className="relative w-full h-full lg:h-auto lg:aspect-[4/5] lg:rounded-[3rem] overflow-hidden lg:border lg:border-black/5 lg:shadow-[0_40px_80px_rgba(0,0,0,0.12)] bg-[#1c1a19] group">
          <motion.div
            style={{
              scale: imgZoom,
              x: useTransform(smoothProgress, [0, 1], ["0%", "5%"]),
              y: useTransform(smoothProgress, [0, 1], ["0%", "5%"])
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src="/hero.jpeg"
              alt="Monolith Auditing System"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover pointer-events-none select-none"
              draggable={false}
            />
          </motion.div>
          {/* Inner shadows and grain for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a19]/90 via-black/40 to-black/20 lg:from-[#1c1a19]/80 lg:via-transparent lg:to-transparent pointer-events-none mix-blend-multiply" />
          <div className="absolute inset-0 lg:ring-1 lg:ring-inset lg:ring-white/10 lg:rounded-[3rem] pointer-events-none" />
        </div>
      </motion.div>

      {/* ── Copy ───────────────────────────────────────────────── */}
      <motion.div
        style={{ y: copyY, opacity: copyOpacity }}
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-20 pt-36 sm:px-8 sm:pb-24 lg:justify-center lg:pb-0 lg:pt-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.28, 1] }}
        >
          <SectionLabel className="max-lg:text-white/90">Cylvox Solo Studio</SectionLabel>
        </motion.div>

        <h1 className="font-display mt-7 max-w-[19ch] text-balance text-[clamp(2.9rem,9.2vw,7.5rem)] leading-[0.94] text-white lg:text-foreground relative z-20">
          {["From", "invisible", "to"].map((word, i) => (
            <motion.span
              key={word}
              style={{
                display: "inline-block",
                y: useTransform(smoothProgress, [0, 1], [0, -(20 + i * 30)]),
                opacity: useTransform(smoothProgress, [0, 0.3 + i * 0.15], [1, 0])
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1,
                  delay: 0.12 + i * 0.09,
                  ease: [0.22, 1, 0.28, 1],
                }}
                className={`mr-[0.28em] inline-block ${
                  word === "invisible" ? "italic text-white/70 lg:text-muted-foreground" : ""
                }`}
              >
                {word}
              </motion.span>
            </motion.span>
          ))}
          <motion.span
            style={{
              display: "inline-block",
              y: useTransform(smoothProgress, [0, 1], [0, -110]),
              opacity: useTransform(smoothProgress, [0, 0.75], [1, 0])
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.42, ease: [0.22, 1, 0.28, 1] }}
              className="inline-block"
            >
              page one
              <span className="text-primary">.</span>
            </motion.span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.28, 1] }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-white/80 lg:text-muted-foreground sm:text-lg relative z-20"
        >
          An independent studio that audits AI-generated apps for the flaws
          their builders never saw, then re-engineers them into systems that
          hold under real traffic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.68, ease: [0.22, 1, 0.28, 1] }}
          className="mt-11 flex flex-wrap items-center gap-3 sm:gap-4 relative z-20"
        >
          <Link
            ref={ctaRef}
            href="/contact"
            className="group flex h-12 items-center gap-3 overflow-hidden rounded-full bg-primary px-6 font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95"
          >
            <span className="relative">Audit your app</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/services"
            className="flex h-12 items-center px-6 font-medium text-white/90 border border-white/20 hover:bg-white/10 lg:text-muted-foreground lg:border-input rounded-full transition-colors lg:hover:bg-accent lg:hover:text-foreground"
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
        className="relative border-t border-white/10 lg:border-border/70 bg-black/20 lg:bg-background/25 py-5 backdrop-blur-sm z-30 mt-auto"
      >
        <div className="flex w-max animate-drift items-center gap-10 pl-10">
          {[...CAPABILITIES, ...CAPABILITIES].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="tech-label flex shrink-0 items-center gap-10 text-white/70 lg:text-muted-foreground"
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
