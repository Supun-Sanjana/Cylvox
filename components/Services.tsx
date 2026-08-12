"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Link from "next/link";
import { SectionLabel } from "./SectionLabel";
import { SERVICES as services } from "@/lib/constants";

export default function Services() {
  return (
    <section
      id="services"
      className="px-4 py-20 sm:px-8 sm:py-32 bg-background"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal direction="up">
          <SectionLabel>Our Capabilities</SectionLabel>
          <h2
            className="mt-5 text-balance font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground"
          >
            Engineered to perform.{" "}
            <em className="text-primary not-italic">
              Hardened to scale.
            </em>
          </h2>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.number} delay={i * 0.05} direction="up">
                <Link href={service.link} className="block w-full h-full">
                  <motion.div
                    whileHover={{ scale: 0.97, y: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative flex flex-col justify-between h-full p-8 sm:p-10 bg-surface border border-border rounded-[2.5rem] shadow-sm overflow-hidden"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center justify-center size-14 rounded-full bg-background border border-border shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-foreground" />
                        </div>
                        <span className="font-display text-xl text-muted-foreground">
                          {service.number}
                        </span>
                      </div>

                      <div className="inline-flex mb-4">
                        <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-background text-foreground rounded-full border border-border shadow-sm">
                          {service.badge}
                        </span>
                      </div>
                      
                      <h3
                        className="font-display font-semibold tracking-tight
                                   leading-[1.1] text-3xl sm:text-4xl mb-4 text-foreground"
                      >
                        {service.title}
                      </h3>
                      
                      <p className="max-w-[90%] text-base sm:text-lg leading-relaxed text-muted-foreground mb-8">
                        {service.text}
                      </p>
                    </div>

                    <div className="relative z-10 mt-auto flex items-center justify-between pt-8 border-t border-border">
                      <span className="text-sm font-semibold text-foreground tracking-wide uppercase">Explore capability</span>
                      <span className="flex items-center justify-center size-10 rounded-full bg-background border border-border group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    </div>
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