import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, productListSchema } from "@/lib/seo";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Hammer, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "n8n Automation Templates for SEO & WordPress | Cylvox",
  description:
    "Free and premium n8n workflow templates for technical SEO, Core Web Vitals monitoring, and content automation — built from real client results, not generic bundles.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "n8n Automation Templates for SEO & WordPress | Cylvox",
    description:
      "Free and premium n8n workflow templates for technical SEO, Core Web Vitals monitoring, and content automation.",
    url: "/products",
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cylvox n8n Automation Templates for SEO & WordPress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Automation Templates for SEO & WordPress | Cylvox",
    description:
      "Free and premium n8n workflow templates for technical SEO, Core Web Vitals monitoring, and content automation.",
    images: ["/og-image.jpg"],
  },
};

const FREE_TEMPLATES = [
  {
    name: "WordPress → IndexNow Instant Indexing",
    tag: "Free",
    image: "/products/wordpress-indexnow.png",
    oneLiner:
      "The moment you publish, Bing and other search engines get notified instantly — instead of waiting weeks for a crawl.",
    description:
      "This is the exact instant-indexing setup running in production on a live client site. Plug in your IndexNow key, connect your WordPress credentials, and every new post gets submitted automatically. No more waiting around for search engines to notice you exist.",
    cta: "Download Free",
    ctaHref: "/workflows/01-wordpress-indexnow-instant-indexing.json",
  },
  {
    name: "Broken Link (404) Monitor",
    tag: "Free",
    image: "/products/broken-link-monitor.png",
    oneLiner:
      "Catch dead links before your visitors — or Google — do.",
    description:
      "Runs daily against your sitemap, checks every URL, and Slacks you a list of anything broken. Simple, quiet, and it just works in the background so 404s never pile up unnoticed.",
    cta: "Download Free",
    ctaHref: "/workflows/02-broken-link-monitor.json",
  },
  {
    name: "Rank Math SEO Score Audit Trigger",
    tag: "Free",
    image: "/products/rankmath-seo-audit.png",
    oneLiner:
      "A quick SEO gut-check the moment you hit publish.",
    description:
      "Checks title length, meta description, word count, keyword usage, and image presence on every new post — and flags anything under a 70 score straight to Slack. A lightweight taste of the checks that power Cylvox's full AEO/E-E-A-T auditor.",
    cta: "Download Free",
    ctaHref: "/workflows/03-rankmath-seo-audit-trigger.json",
  },
];

const PAID_TEMPLATES = [
  {
    name: "Competitor SEO & Price Monitor",
    tag: "$12",
    image: "/products/competitor-monitor.png",
    oneLiner:
      "Know what your competitors are doing before your client asks you.",
    description:
      "Every day, this workflow checks your competitors' pages — pricing, titles, meta descriptions — logs it to a tracking sheet, and sends you a digest. Built from the same logic behind Cylvox's competitor-monitoring service.",
    cta: "Buy Now — $12",
    ctaHref: "/contact?ref=competitor-monitor",
  },
  {
    name: "Core Web Vitals Daily Monitor",
    tag: "$15",
    image: "/products/core-web-vitals.png",
    oneLiner:
      "Catch a performance regression the day it happens, not the day your client notices.",
    description:
      "Runs Google PageSpeed Insights against your key pages daily, logs LCP/CLS/INP trends to a sheet, and alerts you the moment a score drops below 90. The same monitoring discipline that got a client site to 95 mobile / 99 desktop.",
    cta: "Buy Now — $15",
    ctaHref: "/contact?ref=core-web-vitals",
  },
  {
    name: "Full Content Pipeline: Draft → SEO Check → Publish → Index",
    tag: "$19 · Best Value",
    image: "/products/content-pipeline.png",
    oneLiner:
      "Send a topic. Get a fully drafted, SEO-tagged, image-matched, search-engine-notified post.",
    description:
      "This is the whole system — the one that's been quietly producing content at roughly a penny an article in production. Send a topic and keyword, and it drafts the article, pulls a matching stock photo, creates the WordPress draft, sets your Rank Math meta, and pings IndexNow the moment it's live. Everything the other templates do, chained into one pipeline.",
    cta: "Buy Now — $19",
    ctaHref: "/contact?ref=content-pipeline",
    isFlagship: true,
  },
];

const TRUST_POINTS = [
  {
    icon: Hammer,
    headline: "Built from real work, not guesses.",
    body: "Every template here started as something built for an actual paying client — not assembled to fill out a bundle.",
  },
  {
    icon: ShieldCheck,
    headline: "You can test-drive first.",
    body: "Three free templates, no email gate, no card. If they're not useful, the paid ones won't be either — so judge for yourself.",
  },
  {
    icon: Zap,
    headline: "Plug-and-play, no OAuth headaches.",
    body: "Alerts use Slack webhooks instead of full OAuth apps — copy one URL and you're done.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      <JsonLd
        data={productListSchema([
          ...FREE_TEMPLATES.map((t) => ({
            name: t.name,
            description: t.description,
            price: "0",
          })),
          ...PAID_TEMPLATES.map((t) => ({
            name: t.name,
            description: t.description,
            price: t.tag.replace(/[^0-9]/g, ""),
          })),
        ])}
      />

      {/* ── Page Header ─────────────────────────────────────────── */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-foreground">
        <div className="max-w-3xl">
          <SectionLabel className="mb-6">Cylvox Products</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl mb-6 tracking-tight leading-[1.15] text-foreground">
            Automation & SEO tools, built from what{" "}
            <span className="text-jade">actually worked</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            No generic template dumps. Every workflow here is pulled straight
            from real client work — the same automations that got a live site to
            95+ PageSpeed and indexed in hours, not weeks. Grab the free ones,
            or go deeper with the paid builds.
          </p>
        </div>
      </section>

      {/* ── Free Templates ──────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 pb-20">
        <Reveal>
          <SectionLabel className="mb-4">Start Free</SectionLabel>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            Three n8n workflows you can import and run today. Built to prove the
            quality before you consider anything paid.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FREE_TEMPLATES.map((template, i) => (
            <ProductCard
              key={template.name}
              {...template}
              isFree
              delay={i * 0.1}
            />
          ))}
        </div>
      </section>

      {/* ── Paid Templates ──────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-20">
        <Reveal>
          <SectionLabel className="mb-4">Go Deeper</SectionLabel>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            These automate the parts of running an SEO-driven site that actually
            eat your time — competitor tracking, performance monitoring, and full
            content production.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAID_TEMPLATES.map((template, i) => (
            <ProductCard
              key={template.name}
              {...template}
              isFlagship={template.isFlagship ?? false}
              delay={i * 0.1}
            />
          ))}
        </div>
      </section>

      {/* ── Trust Strip ─────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 border-t border-border">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 tracking-tight">
            Why these aren&apos;t just another template bundle
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_POINTS.map((point, i) => (
            <Reveal key={point.headline} delay={i * 0.1}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-full border border-border bg-surface">
                  <point.icon className="w-5 h-5 text-primary stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug">
                  {point.headline}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Solo studio microcopy */}
        <Reveal delay={0.3}>
          <p className="mt-12 text-xs text-muted-foreground/60 font-medium tracking-wide uppercase text-center">
            Built by a solo studio, not an agency
          </p>
        </Reveal>
      </section>

      {/* ── Bundle Upsell ───────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <Reveal>
          <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/[0.04] to-transparent p-8 sm:p-12 overflow-hidden">
            {/* Top accent line */}
            <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                  Or get all 6 in one bundle
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Save vs buying individually — the complete SEO automation
                  stack for your WordPress site in one download.
                </p>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-3xl font-black text-primary">$35</span>
                  <span className="text-sm text-muted-foreground line-through">
                    $46
                  </span>
                  <span className="text-xs font-bold text-primary/70 uppercase tracking-wider">
                    Save $11
                  </span>
                </div>
              </div>

              <a
                href="/contact?ref=full-bundle"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold rounded-full px-8 py-3.5 text-sm shadow-md hover:opacity-90 transition-opacity shrink-0"
              >
                <span>Get the Bundle</span>
                <Zap className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
