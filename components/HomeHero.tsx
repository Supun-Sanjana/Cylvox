"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

// Renders the inverted curve fillet to seamlessly bridge the background and image corners
const CornerFillet = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute w-8 h-8 text-background fill-current ${className}`} viewBox="0 0 32 32">
    <path d="M0 0v32C0 14.327 14.327 0 32 0H0z" />
  </svg>
);

const MouseRevealImage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="absolute inset-0 bg-surface rounded-[2.5rem] overflow-hidden border border-border"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Monochrome Image */}
      <Image 
        src="/placeholders/squish_crystals_1786554808524.jpg" 
        alt="Abstract background"
        fill
        sizes="(max-width: 1024px) 0vw, 60vw"
        className="object-cover opacity-50 mix-blend-luminosity"
        priority
      />
      
      {/* Top Colorful Image (Masked by Mouse) */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isHovered ? 1 : 0,
          WebkitMaskImage: `radial-gradient(circle 900px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0) 100%)`,
          maskImage: `radial-gradient(circle 900px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0) 100%)`
        }}
      >
        <Image 
          src="/placeholders/squish_crystals_1786554808524.jpg" 
          alt="Abstract background"
          fill
          sizes="(max-width: 1024px) 0vw, 60vw"
          className="object-cover opacity-90 saturate-150 contrast-125"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

// Extracted cards to avoid code duplication between mobile (stack) and desktop (masks)
const CardWebVitals = () => (
  <div className="w-full h-full bg-surface border border-border rounded-[1.5rem] p-5 sm:p-6 flex flex-col justify-center relative overflow-hidden group hover:border-white/10 transition-colors">
    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors" />
    <div className="text-4xl sm:text-5xl font-display text-foreground mb-2">99<span className="text-primary text-2xl sm:text-3xl">/100</span></div>
    <p className="text-xs sm:text-sm text-foreground font-semibold">Core Web Vitals</p>
    <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 leading-relaxed">Engineered for perfect real-world performance scores.</p>
  </div>
);

const CardTTFB = () => (
  <div className="w-full h-full bg-primary rounded-[1.5rem] p-5 sm:p-6 flex flex-col justify-center relative overflow-hidden group">
    <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
    <div className="text-5xl sm:text-6xl font-display text-black mb-1 drop-shadow-sm">0.38s</div>
    <p className="text-[10px] sm:text-xs text-black/80 font-bold uppercase tracking-wider">Average TTFB</p>
    <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 bg-black/10 px-3 py-1.5 rounded-full w-fit backdrop-blur-sm border border-black/10">
      <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
      <span className="text-[9px] sm:text-[10px] font-bold text-black uppercase tracking-wider">Live Metrics</span>
    </div>
  </div>
);

export default function HomeHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-8 bg-background min-h-svh flex items-center overflow-hidden">
      
      {/* ── Mobile-Only Background Image ── */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image 
          src="/placeholders/squish_crystals_1786554808524.jpg" 
          alt="Abstract background"
          fill
          sizes="(max-width: 1024px) 100vw, 0vw"
          className="object-cover opacity-60 saturate-150"
          priority
        />
        {/* Gradient mask so text stays readable and blends into the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 relative">
        
        {/* ── Left Column: Text & CTA ── */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.28, 1] }}
          className="lg:col-span-5 flex flex-col items-start text-left pt-10 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Technical Studio
          </div>
          
          <h1 className="font-display text-6xl sm:text-7xl xl:text-[6.5rem] tracking-tight leading-[0.95] text-foreground mb-8 drop-shadow-sm">
            Precision <br />
            <span className="text-white">Engineered</span> <br />
            <em className="text-primary not-italic">Infrastructure.</em>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-12 font-light leading-relaxed drop-shadow-sm">
            We build the ultra-fast web architecture and execute technical SEO that search engines reward and users love.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="group relative flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-8 font-bold text-black transition-transform hover:scale-105 active:scale-95">
              Start a Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#cases" className="flex h-14 items-center justify-center px-8 font-bold text-foreground border border-border bg-background/50 backdrop-blur-md rounded-full transition-all hover:bg-surface hover:border-white/20">
              View Case Studies
            </Link>
          </div>
        </motion.div>

        {/* ── Mobile-Only Bento Cards (Visible only < lg) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden w-full mt-4"
        >
          <div className="h-[200px]"><CardWebVitals /></div>
          <div className="h-[200px]"><CardTTFB /></div>
        </motion.div>

        {/* ── Right Column: Interlocking Image Grid (Desktop Only) ── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.28, 1] }}
          className="hidden lg:block lg:col-span-7 relative w-full lg:h-[700px] xl:h-[800px]"
        >
          {/* Main Background Image Container */}
          <MouseRevealImage />

          {/* 1. Top-Left Mask */}
          <div className="hidden lg:block absolute top-0 left-0 w-[300px] h-[220px] bg-background rounded-br-[2.5rem] pr-5 pb-5 z-20">
            <CornerFillet className="top-0 -right-8 rotate-0" />
            <CornerFillet className="-bottom-8 left-0 rotate-0" />
            <CardWebVitals />
          </div>

          {/* 2. Bottom-Left Mask */}
          <div className="hidden lg:block absolute bottom-0 left-0 w-[320px] h-[220px] bg-background rounded-tr-[2.5rem] pr-5 pt-5 z-20">
            <CornerFillet className="bottom-0 -right-8 -rotate-90" />
            <CornerFillet className="-top-8 left-0 -rotate-90" />
            <CardTTFB />
          </div>

          {/* 3. Top-Right Mask */}
          <div className="hidden lg:block absolute top-0 right-0 w-[180px] h-[160px] bg-background rounded-bl-[2.5rem] pl-5 pb-5 z-20">
            <CornerFillet className="top-0 -left-8 rotate-90" />
            <CornerFillet className="-bottom-8 right-0 rotate-90" />
            
            <div className="w-full h-full bg-surface border border-border rounded-[1.5rem] flex flex-col items-center justify-center hover:border-primary/50 transition-colors cursor-default relative overflow-hidden group">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors" />
              <div className="text-4xl font-display text-foreground">10x</div>
              <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-2 text-center px-2">Faster API <br/> Syncs</div>
            </div>
          </div>

          {/* 4. Floating Spinning Badge (Center Right) */}
          <div className="hidden lg:block absolute top-1/2 -right-16 -translate-y-1/2 w-36 h-36 bg-background rounded-full p-2 z-30">
            <div className="w-full h-full bg-surface border border-border rounded-full flex items-center justify-center relative animate-[spin_15s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 overflow-visible text-muted-foreground">
                <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                <text className="text-[10px] font-bold tracking-[0.15em] uppercase fill-current" textAnchor="middle">
                  <textPath href="#circlePath" startOffset="0%">•</textPath>
                  <textPath href="#circlePath" startOffset="25%">Cylvox Studio</textPath>
                  <textPath href="#circlePath" startOffset="50%">•</textPath>
                  <textPath href="#circlePath" startOffset="75%">Technical SEO</textPath>
                </text>
              </svg>
              <ArrowUpRight className="w-6 h-6 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
