import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { baseUrl } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Web Engineering for Technical SEO | Cylvox",
  description: "Web engineering built to serve technical SEO and Core Web Vitals — Next.js, Supabase, and infrastructure that keeps rankings fast, crawlable, and scalable.",
  alternates: { canonical: `${baseUrl}/services/web-development` },
  openGraph: {
    title: "Next.js Web Engineering for Technical SEO | Cylvox",
    description: "Web engineering built to serve technical SEO and Core Web Vitals — Next.js, Supabase, and infrastructure that keeps rankings fast, crawlable, and scalable.",
    url: `${baseUrl}/services/web-development`,
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
    images: [{ url: `${baseUrl}/og-image.jpg`, width: 1200, height: 630, alt: "Cylvox Web Development Services" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Next.js Web Engineering for Technical SEO | Cylvox",
    description: "Web engineering built to serve technical SEO and Core Web Vitals — Next.js, Supabase, and infrastructure that keeps rankings fast, crawlable, and scalable.",
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const TECH_STACK = [
  "Next.js", "React", "Supabase", "PostgreSQL", "Prisma ORM", 
  "Vercel", "Cloudflare", "Tailwind CSS"
];

export default function WebDevelopmentPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-foreground">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Web Development", path: "/services/web-development" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Next.js Web Engineering",
          description:
            "Web engineering built to serve technical SEO and Core Web Vitals — Next.js, Supabase, and infrastructure that keeps rankings fast, crawlable, and scalable.",
          path: "/services/web-development",
          serviceType: "Web Engineering",
        })}
      />
      <div className="max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Web Development" },
          ]}
        />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-foreground bg-surface rounded-full border border-border shadow-sm mb-8">
          Next.js & React Engineering
        </div>
        <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight leading-[1.05]">
          Web Engineering, <em className="text-primary not-italic">Built to Rank</em>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-16 leading-relaxed">
          We build digital experiences optimized for visibility and performance. From server-rendered architectures to Core Web Vitals optimization, our engineering team leverages modern infrastructure to deliver measurable SEO outcomes.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20 border-t border-border pt-12">
          {/* Why You Need This */}
          <div>
            <h2 className="text-3xl font-display font-semibold mb-6 text-foreground flex items-center gap-2">Why You Need This
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Sub-Second Load Times:</strong> Slow apps lose users. We engineer for speed, ensuring your LCP (Largest Contentful Paint) is always in the green, maximizing conversions.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Enterprise Scalability:</strong> Stop worrying about traffic spikes. Our modern stacks (Next.js, Serverless, Edge computing) scale infinitely without breaking a sweat.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Future-Proof Architecture:</strong> We don't use legacy bloated frameworks. You get clean, type-safe, maintainable code that your future developers will thank you for.</p>
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
                <p><strong className="text-foreground">Server-Rendered Experiences:</strong> Fast, SEO-optimized Next.js architectures built for maximum search visibility.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Core Web Vitals Optimization:</strong> Engineering practices that ensure your LCP, CLS, and INP metrics are always in the green.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Scalable Infrastructure:</strong> Reliable edge deployment and optimized database architecture using Vercel, Supabase, and PostgreSQL.</p>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Our Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mb-16">
          {TECH_STACK.map((tech) => (
            <span key={tech} className="px-4 py-2 bg-surface border border-border rounded-full text-sm font-medium text-foreground/90 shadow-sm hover:border-[#ccff00]/50 hover:bg-[#ccff00]/5 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>

        <div className="bg-surface border border-border rounded-[2.5rem] p-10 md:p-16 text-center shadow-sm">
          <h3 className="text-4xl font-display tracking-tight mb-4 text-foreground">Ready to accelerate your growth?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Stop settling for underperforming infrastructure. Let's architect a web presence that drives traffic and outranks the competition.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full
                       px-8 py-4 transition-transform duration-300 hover:scale-[1.03]"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
