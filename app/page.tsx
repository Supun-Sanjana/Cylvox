import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import ProofBand from "@/components/Proofband";
import Process from "@/components/Process";
import Closing from "@/components/Closing";

import { baseUrl } from "@/lib/seo";

export const metadata = {
  title:       "Next.js Web Development & AI Automation Studio | Cylvox",
  description: "Cylvox Solo Studio engineers high-concurrency Next.js web applications, headless Sanity CMS architectures, and autonomous n8n workflows for modern enterprises.",
  alternates: { canonical: baseUrl },
  openGraph: {
    title:       "Next.js Web Development & AI Automation Studio | Cylvox",
    description: "Cylvox Solo Studio engineers high-concurrency Next.js web applications, headless Sanity CMS architectures, and autonomous n8n workflows for modern enterprises.",
    url:         baseUrl,
    siteName:    "Cylvox",
    locale:      "en_US",
    type:        "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Cylvox Solo Studio — Next.js & AI Automation",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Next.js Web Development & AI Automation Studio | Cylvox",
    description: "Cylvox Solo Studio engineers high-concurrency Next.js web applications, headless Sanity CMS architectures, and autonomous n8n workflows for modern enterprises.",
    images:      [`${baseUrl}/og-image.jpg`],
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <ProofBand />
      <Process />
      <Closing />
    </>
  );
}
