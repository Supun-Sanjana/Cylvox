import CaseStudies from "@/components/CaseStudies";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { baseUrl } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Web Development & Automation | Cylvox",
  description:
    "See how Cylvox hardens AI-assisted apps, migrates slow sites to modern stacks, and builds automation that runs without supervision. Real projects, not theory.",
  alternates: { canonical: `${baseUrl}/work` },
  openGraph: {
    title: "Case Studies | Web Development & Automation | Cylvox",
    description: "Real projects: audits, migrations, performance, and automation builds.",
    url: `${baseUrl}/work`,
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
    images: [{ url: `${baseUrl}/og-image.jpg`, width: 1200, height: 630, alt: "Cylvox Case Studies" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Case Studies | Web Development & Automation | Cylvox",
    description: "See how Cylvox hardens AI-assisted apps, migrates slow sites to modern stacks, and builds automation that runs without supervision.",
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-foreground">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-foreground bg-surface rounded-full border border-border shadow-sm mb-8">
            Case Studies
          </div>
          <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight leading-[1.05]">
            Recent <em className="text-primary not-italic">engineering work.</em>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A look at the kind of problems we take on — hardening AI-assisted apps before they scale, migrating slow legacy sites to modern stacks, and building automation that runs without supervision. Each case study below breaks down the approach, not just the result.
          </p>
        </div>
      </section>
      <CaseStudies />
    </>
  );
}
