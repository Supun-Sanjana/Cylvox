"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import Link from "next/link";

const projects = [
  {
    tag: "SEO & Core Web Vitals",
    title: "From Zero SEO Foundation to a 99/100 Desktop Performance Score",
    image: "/case-studies/out-quest/joinoutquest desktop per.png",
    slug: 'outquest-technical-seo',
  },
  {
    tag: "Vibe-Code Security Audit",
    title: "Hardening a Cursor-Built Fintech App Before $2.5M Seed Round",
    image: "/placeholder-1.png", // We will use a fallback or standard img for these
    client: "AuraPay Fintech",
  },
  {
    tag: "n8n AI Automations",
    title: "Autonomous Lead Enrichment & Content Pipeline with n8n",
    image: "/placeholder-2.png",
    client: "OmniScale AI SaaS",
  },
  {
    tag: "Headless Sanity CMS",
    title: "WordPress to Headless Sanity CMS Migration with Sub-Second ISR",
    image: "/placeholder-3.png",
    client: "Veloce Commerce",
  },
];

export default function CaseStudies() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActive(index);
  };

  const move = (dir: -1 | 1) => {
    const next = Math.min(Math.max(active + dir, 0), projects.length - 1);
    scrollTo(next);
  };

  return (
    <section id="cases" className="px-4 py-20 sm:py-28 sm:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_auto] lg:items-end">
          <div>
            <SectionLabel>Proven Case Studies</SectionLabel>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl text-foreground">
              Real Systems. <em className="text-primary not-italic">Measurable Impact.</em>
            </h2>
          </div>
          <p className="text-pretty text-muted-foreground lg:pb-2 text-lg">
            See how we transform vibe-coded AI prototypes into hardened, high-performing enterprise platforms.
          </p>
          <div className="flex gap-3 lg:pb-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous project"
              className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next project"
              className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {projects.map((project, i) => (
            <li
              key={project.title}
              className="group relative w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl bg-surface border border-border sm:w-[46%] lg:w-[40%]"
            >
              <div className="relative aspect-[4/3] w-full bg-muted/20">
                {/* Fallback for placeholder images so Next doesn't error out */}
                {project.image.includes('placeholder') ? (
                  <div className="w-full h-full flex items-center justify-center bg-card">
                    <span className="text-muted-foreground font-mono text-sm">Image Coming Soon</span>
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 46vw, 40vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 rounded-xl bg-background/90 p-5 backdrop-blur border border-border/50 shadow-lg">
                <div>
                  <span className="inline-block rounded-full bg-card border border-border px-3 py-1 text-xs text-primary font-bold">
                    {project.tag}
                  </span>
                  <div className="mt-2 text-xs font-mono text-muted-foreground">{project.client}</div>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground">
                    {project.title}
                  </h3>
                </div>
                {project.slug ? (
                  <Link
                    href={`/case-studies/${project.slug}`}
                    aria-label={`Read ${project.title} case study`}
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-card border border-border text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                  >
                    <ArrowUpRight className="size-4" />
                  </Link>
                ) : (
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-card border border-border text-foreground">
                    <ArrowUpRight className="size-4" />
                  </span>
                )}
              </div>
              <span className="sr-only">{`Project ${i + 1} of ${projects.length}`}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center gap-2.5">
          {projects.map((project, i) => (
            <button
              key={project.title}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to ${project.title}`}
              aria-current={active === i}
              className={`size-2.5 rounded-full transition-colors ${
                active === i ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
