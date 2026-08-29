"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CaseStudies() {
  return (
    <section id="cases" className="px-4 py-20 sm:py-32 sm:px-8 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-20">
          <Reveal direction="up">
            <h2 className="mt-5 text-balance font-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
              Proof, not promises.
            </h2>
          </Reveal>
        </div>

        {/* ── Bento Grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 min-h-[800px]">
          
          {/* Card 1 — Large Left (Join OutQuest) */}
          <Reveal direction="up" delay={0} className="md:col-span-1 lg:col-span-7 h-full">
            <Link href="/case-studies/join-outquest" className="group block relative w-full h-full min-h-[500px] rounded-[2.5rem] overflow-hidden bg-surface border border-border transition-all hover:border-white/10">
              
              {/* Abstract Glassmorphism Background (matching the 3D vibe) */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0F14]">
                 <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/20 blur-[120px] transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute bottom-[10%] -right-[20%] w-[60%] h-[80%] rounded-full bg-indigo-600/15 blur-[120px] transition-transform duration-1000 group-hover:-translate-x-10" />
                 
                 {/* Subtle grid or noise could go here, but keeping it clean like Apple */}
                 <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
              </div>

              {/* Content overlaid at bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 z-10 bg-gradient-to-t from-background via-background/60 to-transparent">
                <div className="mt-auto">
                  <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3 block">
                    Next.js SEO Overhaul
                  </span>
                  <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
                    Join OutQuest
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base max-w-md mb-8 leading-relaxed">
                    A global platform rebuilt around dynamic metadata and crawler-ready structure, engineered for maximum search visibility.
                  </p>
                  
                  <div className="flex items-center justify-between pointer-events-auto">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full border border-border text-[10px] uppercase font-bold text-muted-foreground backdrop-blur-md">
                        99/100 CWV
                      </span>
                      <span className="px-3 py-1 rounded-full border border-border text-[10px] uppercase font-bold text-muted-foreground backdrop-blur-md">
                        Dynamic Sitemap
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-center size-12 rounded-full border border-border bg-surface/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors backdrop-blur-md">
                      <ArrowUpRight className="size-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Right Column Stack */}
          <div className="md:col-span-1 lg:col-span-5 flex flex-col gap-4">
            
            {/* Card 2 — Top Right (SG Plantation ERP) */}
            <Reveal direction="up" delay={0.1} className="flex-1">
              <Link href="/case-studies/sg-plantation-erp" className="group block relative w-full h-full min-h-[350px] rounded-[2.5rem] overflow-hidden bg-surface border border-border p-8 sm:p-10 flex flex-col transition-all hover:border-white/10">
                
                {/* Big Graphic Overlay */}
                <div className="absolute -top-6 -right-6 size-[220px] sm:size-[280px] rounded-full border-[24px] border-white/5 flex items-center justify-center z-0 transition-transform duration-700 group-hover:scale-105 group-hover:border-white/10">
                  <span className="font-display text-[120px] sm:text-[130px] text-white/5 leading-none -mt-4 transition-colors duration-700 group-hover:text-white/10 tracking-tighter">
                    10x
                  </span>
                </div>
                
                <div className="relative z-10 mt-auto pointer-events-none">
                  <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3 block">
                    Internal Custom ERP
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
                    SG Plantation
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base max-w-[280px] mb-8 leading-relaxed">
                    A highly secure Enterprise Resource Planning system built for high-concurrency data entry.
                  </p>
                  
                  <div className="flex items-center justify-between pointer-events-auto">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full border border-border bg-background/50 text-[10px] uppercase font-bold text-muted-foreground backdrop-blur-md">
                        Zero Downtime
                      </span>
                      <span className="px-3 py-1 rounded-full border border-border bg-background/50 text-[10px] uppercase font-bold text-muted-foreground backdrop-blur-md">
                        Serverless
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-center size-10 rounded-full border border-border bg-surface/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors shrink-0 backdrop-blur-md">
                      <ArrowUpRight className="size-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Card 3 — Bottom Right (NVTI Baddegama) */}
            <Reveal direction="up" delay={0.2} className="flex-1">
              <Link href="https://nvtibaddegama.site" target="_blank" className="group block relative w-full h-full min-h-[350px] rounded-[2.5rem] overflow-hidden bg-[#ccff00]/[0.03] border border-[#ccff00]/20 p-8 sm:p-10 flex flex-col transition-all hover:border-[#ccff00]/40">
                
                {/* Big Graphic Overlay */}
                <div className="absolute -top-6 -right-6 size-[220px] sm:size-[280px] rounded-full border-[24px] border-[#ccff00]/10 flex items-center justify-center z-0 transition-transform duration-700 group-hover:scale-105 group-hover:border-[#ccff00]/20">
                  <span className="font-display text-[100px] sm:text-[130px] text-[#ccff00]/20 leading-none -mt-4 transition-colors duration-700 group-hover:text-[#ccff00]/30">
                    0.38
                  </span>
                </div>

                <div className="relative z-10 mt-auto pointer-events-none">
                  <span className="text-xs font-bold tracking-widest uppercase text-primary/60 mb-3 block">
                    Institutional Portal
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
                    NVTI Baddegama
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base max-w-[280px] mb-8 leading-relaxed">
                    A practical training platform designed for daily reliability and lightning-fast speed.
                  </p>
                  
                  <div className="flex items-center justify-between pointer-events-auto">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full border border-[#ccff00]/20 bg-[#ccff00]/10 text-[10px] uppercase font-bold text-primary backdrop-blur-md">
                        Live Platform
                      </span>
                      <span className="px-3 py-1 rounded-full border border-[#ccff00]/20 bg-[#ccff00]/10 text-[10px] uppercase font-bold text-primary backdrop-blur-md">
                        Lightweight Stack
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-center size-10 rounded-full border border-[#ccff00]/30 bg-[#ccff00]/10 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors shrink-0 backdrop-blur-md">
                      <ArrowUpRight className="size-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

          </div>
        </div>

      </div>
    </section>
  );
}
