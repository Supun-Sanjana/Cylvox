import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata = {
  title: "Website Performance & SEO Optimization | Cylvox",
  description: "Speed up your website and improve your search rankings. We offer technical SEO, Core Web Vitals optimization, and WordPress speed enhancements.",
  alternates: { canonical: "/services/optimization" },
  openGraph: {
    title: "Website Performance & SEO Optimization | Cylvox",
    description: "Speed up your website and improve your search rankings. We offer technical SEO, Core Web Vitals optimization, and WordPress speed enhancements.",
    url: "/services/optimization",
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Cylvox Performance Optimization Services" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Website Performance & SEO Optimization | Cylvox",
    description: "Speed up your website and improve your search rankings. We offer technical SEO, Core Web Vitals optimization, and WordPress speed enhancements.",
    images: ["/og-image.jpg"],
  },
};

export default function OptimizationPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
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
        <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase bg-[#ccff00]/10 text-[#ccff00] rounded-full border border-[#ccff00]/20">
          Sub-Second Performance
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Performance & <span className="text-[#ccff00]">SEO Optimization</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-16 leading-relaxed max-w-3xl">
          A slow website costs you customers. We specialize in deep technical optimization, improving Core Web Vitals, enhancing technical SEO, and turbocharging WordPress and Next.js sites so you rank higher and convert better.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20 border-t border-white/10 pt-12">
          {/* Why You Need This */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-[#ccff00]">/</span> Why You Need This
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Rank Higher on Google:</strong> Search engines penalize slow, unoptimized websites. By fixing your Core Web Vitals (LCP, CLS, INP), we give you the technical foundation needed to outrank competitors.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Lower Bounce Rates:</strong> 53% of mobile users abandon sites that take over 3 seconds to load. We shave off critical seconds to keep your audience engaged.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Maximize Ad Spend:</strong> If you run paid ads to a slow landing page, you are burning money. A faster page means a higher Quality Score and cheaper CPCs.</p>
              </li>
            </ul>
          </div>

          {/* What We Deliver */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-[#ccff00]">/</span> What We Deliver
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Technical SEO Audits:</strong> Comprehensive audits of your site architecture, schema markup, meta tags, and crawlability issues.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Core Web Vitals Remediation:</strong> Identifying and fixing render-blocking resources, unoptimized images, and heavy JavaScript bundles.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">WordPress Speed Tuning:</strong> Deep optimization of WP databases, caching layers, and asset delivery pipelines to make WordPress fly.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#ccff00]/5 border border-[#ccff00]/20 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-black mb-4">Stop losing traffic to a slow website.</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Get a comprehensive performance audit and discover exactly how much revenue your current site speed is costing you.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#ccff00] text-[#09080e] font-black rounded-full
                       px-8 py-4 shadow-[0_4px_20px_rgba(204,255,0,0.3)]
                       hover:bg-[#a3cc00] transition-all duration-200"
          >
            <span>Get an Optimization Audit</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
