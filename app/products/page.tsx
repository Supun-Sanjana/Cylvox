import { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Automation & SEO Products | Cylvox",
  description: "n8n Automation Templates and Trust Signal Auditor (Trustlyne).",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Automation & SEO Products | Cylvox",
    description: "n8n Automation Templates and Trust Signal Auditor (Trustlyne).",
    url: "/products",
    siteName: "Cylvox",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Cylvox Products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation & SEO Products | Cylvox",
    description: "n8n Automation Templates and Trust Signal Auditor (Trustlyne).",
    images: ["/og-image.jpg"],
  },
};

export default function ProductsHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-12 text-foreground">
          Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Reveal delay={0.1}>
            <div className="bg-surface border border-border rounded-2xl p-8 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-foreground mb-2">n8n Automation Templates</h2>
              <p className="text-muted-foreground mb-6 flex-grow">
                Free & premium n8n workflows for technical SEO, Core Web Vitals, and content production.
              </p>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-semibold text-foreground">
                  6 workflows · 3 Free
                </span>
              </div>
              <Link href="/products/n8n-templates" className="font-semibold text-primary hover:opacity-80 transition-opacity">
                Browse Templates →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-surface border border-border rounded-2xl p-8 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-foreground mb-2">Trust Signal Auditor</h2>
              <p className="text-muted-foreground mb-6 flex-grow">
                WordPress plugin. Scans your site for missing E-E-A-T signals, indexability traps, and authorship errors.
              </p>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-semibold text-foreground">
                  WordPress Plugin · Free
                </span>
              </div>
              <Link href="/products/trust-signal-auditor" className="font-semibold text-primary hover:opacity-80 transition-opacity">
                View Plugin →
              </Link>
            </div>
          </Reveal>
          
        </div>
      </section>
    </>
  );
}
