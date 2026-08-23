import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import ProofBand from "@/components/Proofband";
import Process from "@/components/Process";
import Closing from "@/components/Closing";

import { baseUrl } from "@/lib/seo";

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
