import type { Metadata } from "next";
import { TrustSignalHero } from "@/components/trust-signal-hero";
import { BentoFeatures } from "@/components/bento-features";
import { serviceSchema, baseUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Trust Signal Auditor | Find E-E-A-T Gaps in WordPress",
  description: "Scan your WordPress site for missing trust signals, indexability traps, and authorship errors. Get a 0-100 SEO score before Google drops your rankings.",
  alternates: {
    canonical: "/trust-signal-auditor",
  },
  openGraph: {
    title: "Trust Signal Auditor | Find E-E-A-T Gaps in WordPress",
    description: "Scan your WordPress site for missing trust signals, indexability traps, and authorship errors.",
    url: `${baseUrl}/trust-signal-auditor`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/trust-signal-score-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Cylvox Trust Signal Auditor UI showing a 92 out of 100 SEO score",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Signal Auditor | Find E-E-A-T Gaps in WordPress",
    description: "Scan your WordPress site for missing trust signals, indexability traps, and authorship errors.",
    images: [`${baseUrl}/trust-signal-score-hero.jpg`],
  },
};

export default function TrustSignalAuditorPage() {
  const jsonLd = serviceSchema({
    name: "Trust Signal Auditor Plugin",
    description: "Scan your WordPress site for missing trust signals, indexability traps, and authorship errors. Get a 0-100 score.",
    path: "/trust-signal-auditor",
    serviceType: "SEO Software",
  });

  return (
    <main className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TrustSignalHero />
      <BentoFeatures />
    </main>
  );
}
