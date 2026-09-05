import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { baseUrl } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Web Vitals & Performance Optimization | Cylvox",
  description: "Speed up your website and improve your search rankings. We offer technical SEO, Core Web Vitals optimization, and WordPress speed enhancements.",
  alternates: { canonical: `${baseUrl}/services/optimization` },
  openGraph: {
    title: "Core Web Vitals & Performance Optimization | Cylvox",
    description: "Speed up your website and improve your search rankings. We offer technical SEO, Core Web Vitals optimization, and WordPress speed enhancements.",
    url: `${baseUrl}/services/optimization`,
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
    images: [{ url: `${baseUrl}/og-image.jpg`, width: 1200, height: 630, alt: "Cylvox Performance Optimization Services" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Core Web Vitals & Performance Optimization | Cylvox",
    description: "Speed up your website and improve your search rankings. We offer technical SEO, Core Web Vitals optimization, and WordPress speed enhancements.",
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function OptimizationPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-foreground">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Performance & SEO Optimization", path: "/services/optimization" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Performance & Technical SEO Optimization",
          description:
            "Speed up your website and improve your search rankings. We offer technical SEO, Core Web Vitals optimization, and WordPress speed enhancements.",
          path: "/services/optimization",
          serviceType: "Search Engine Optimization",
        })}
      />
      <div className="max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Optimization" },
          ]}
        />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-foreground bg-surface rounded-full border border-border shadow-sm mb-8">
          Sub-Second Performance
        </div>
        <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight leading-[1.05]">
          Performance & <em className="text-primary not-italic">SEO Optimization</em>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-16 leading-relaxed">
          A slow website costs you customers. We specialize in deep technical optimization, improving Core Web Vitals, enhancing technical SEO, and turbocharging WordPress and Next.js sites so you rank higher and convert better.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20 border-t border-border pt-12">
          {/* Why You Need This */}
          <div>
            <h2 className="text-3xl font-display font-semibold mb-6 text-foreground flex items-center gap-2">Why You Need This
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Rank Higher on Google:</strong> Search engines penalize slow, unoptimized websites. By fixing your Core Web Vitals (LCP, CLS, INP), we give you the technical foundation needed to outrank competitors.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Lower Bounce Rates:</strong> 53% of mobile users abandon sites that take over 3 seconds to load. We shave off critical seconds to keep your audience engaged.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Maximize Ad Spend:</strong> If you run paid ads to a slow landing page, you are burning money. A faster page means a higher Quality Score and cheaper CPCs.</p>
              </li>
            </ul>
          </div>

          {/* What We Deliver */}
          <div>
            <h2 className="text-3xl font-display font-semibold mb-6 text-foreground flex items-center gap-2">What We Deliver
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Technical SEO Audits:</strong> Comprehensive audits of your site architecture, schema markup, meta tags, and crawlability issues.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Core Web Vitals Remediation:</strong> Identifying and fixing render-blocking resources, unoptimized images, and heavy JavaScript bundles.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">WordPress Speed Tuning:</strong> Deep optimization of WP databases, caching layers, and asset delivery pipelines to make WordPress fly.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-[2.5rem] p-10 md:p-16 text-center shadow-sm">
          <h3 className="text-4xl font-display tracking-tight mb-4 text-foreground">Stop losing traffic to a slow website.</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Get a comprehensive performance audit and discover exactly how much revenue your current site speed is costing you.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full
                       px-8 py-4 transition-transform duration-300 hover:scale-[1.03]"
          >
            <span>Get an Optimization Audit</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
