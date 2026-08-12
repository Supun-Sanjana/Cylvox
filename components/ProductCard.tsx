"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  tag: string;
  oneLiner: string;
  description: string;
  cta: string;
  ctaHref: string;
  isFree?: boolean;
  isFlagship?: boolean;
  image?: string;
  delay?: number;
};

export default function ProductCard({
  name,
  tag,
  oneLiner,
  description,
  cta,
  ctaHref,
  isFree = false,
  isFlagship = false,
  image,
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col rounded-2xl bg-surface border overflow-hidden transition-colors duration-300 ${
        isFlagship
          ? "border-primary/40 shadow-[0_0_40px_rgba(204,255,0,0.06)]"
          : "border-border hover:border-white/20"
      }`}
    >
      {/* Flagship glow accent */}
      {isFlagship && (
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      )}

      {/* Placeholder Image */}
      <div className="relative aspect-[16/9] w-full bg-background overflow-hidden">
        {image ? (
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Decorative grid pattern placeholder */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "radial-gradient(circle, #f4f5ff 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }} />
            <div className="relative z-10 flex flex-col items-center gap-3 text-muted-foreground/40">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 32L16 22L24 28L32 20L44 30" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="34" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="text-xs font-semibold tracking-wider uppercase">Preview</span>
            </div>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tag badge */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`inline-block px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider uppercase rounded-full border ${
              isFree
                ? "bg-primary/10 text-primary border-primary/20"
                : isFlagship
                ? "bg-primary/15 text-primary border-primary/30"
                : "bg-surface text-foreground/80 border-border"
            }`}
          >
            {tag}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-foreground mb-2 leading-snug tracking-tight">
          {name}
        </h3>

        {/* One-liner */}
        <p className="text-sm text-primary/80 font-medium mb-3 leading-relaxed">
          {oneLiner}
        </p>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* CTA Button */}
        {isFree ? (
          <a
            href={ctaHref}
            download
            className="inline-flex items-center justify-center gap-2 w-full rounded-full px-5 py-3 text-sm font-bold transition-all duration-200 border border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>{cta}</span>
          </a>
        ) : (
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 w-full rounded-full px-5 py-3 text-sm font-bold transition-all duration-200 bg-primary text-black hover:opacity-90 shadow-md"
          >
            <span>{cta}</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
