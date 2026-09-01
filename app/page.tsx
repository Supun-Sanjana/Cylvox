import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";

import { baseUrl } from "@/lib/seo";

// Below-the-fold, framer-motion-heavy sections — split out of the
// initial bundle. ssr stays true (default) so content is still
// server-rendered for crawlers; only the JS chunk is deferred.
const Services = dynamic(() => import("@/components/Services"));
const ProofBand = dynamic(() => import("@/components/Proofband"));
const Process = dynamic(() => import("@/components/Process"));
const Closing = dynamic(() => import("@/components/Closing"));

export const metadata = {
  title:       "Technical SEO, Core Web Vitals & Search Automation | Cylvox",
  description: "Technical SEO architecture, Core Web Vitals optimization, and search automation for complex websites.",
  alternates: { canonical: baseUrl },
  openGraph: {
    title:       "Technical SEO, Core Web Vitals & Search Automation | Cylvox",
    description: "Technical SEO architecture, Core Web Vitals optimization, and search automation for complex websites.",
    url:         baseUrl,
    siteName:    "Cylvox",
    locale:      "en_US",
    type:        "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Cylvox Technical SEO, Core Web Vitals, and Search Automation",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Technical SEO, Core Web Vitals & Search Automation | Cylvox",
    description: "Technical SEO architecture, Core Web Vitals optimization, and search automation for complex websites.",
    images:      [`${baseUrl}/og-image.jpg`],
  },
};

import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import HomeHero from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";

const HOMEPAGE_FAQS = [
  {
    question: "What services does Cylvox offer?",
    answer: "Cylvox operates as an independent technical studio offering high-end Technical SEO architecture, Core Web Vitals optimization, automated n8n workflows, Next.js web engineering, and UI/UX design. We specialize in building fast, scalable search infrastructure for complex modern websites."
  },
  {
    question: "Who is behind Cylvox?",
    answer: "Cylvox is an independent solo studio founded and run by Supun Sanjana — a technical SEO specialist and web engineer. You work directly with the engineer building your systems, avoiding account managers and black-box agency processes."
  },
  {
    question: "What technology stack does Cylvox specialize in?",
    answer: "We engineer systems using the modern web stack: Next.js App Router (React Server Components) for front-end architecture, Supabase (PostgreSQL) for scalable backend infrastructure, Vercel Edge caching for sub-second TTFB, and self-hosted n8n for high-concurrency API automation."
  },
  {
    question: "Does Cylvox work with digital agencies?",
    answer: "Yes, Cylvox acts as a dedicated technical partner for creative, marketing, and SEO agencies. We handle the complex headless architectures, database tuning, and Core Web Vitals engineering that traditional agencies often lack the in-house technical resources to execute."
  }
];

export default function Page() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <CaseStudies />
      <ProofBand />
      
      <div className="bg-background">
        <JsonLd data={faqPageSchema(HOMEPAGE_FAQS)} />
        <FAQ
          faqs={HOMEPAGE_FAQS}
          title="Frequently Asked Questions"
          subtitle="Learn more about our technical services and approach."
        />
      </div>

      <Closing />
    </>
  );
}
