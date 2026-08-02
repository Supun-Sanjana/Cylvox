import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata = {
  title: "Technical SEO, Schema & Core Web Vitals Agency | Cylvox",
  description:
    "End-to-end technical SEO architecture, dynamic CMS metadata, automated IndexNow search submission, JSON-LD structured schema, and 95+ Core Web Vitals optimization for Next.js and Supabase websites.",
  alternates: { canonical: "/services/technical-seo" },
  openGraph: {
    title: "Technical SEO, Schema & Core Web Vitals Agency | Cylvox",
    description:
      "End-to-end technical SEO architecture, automated sitemaps, IndexNow integration, JSON-LD schema, and 95+ Core Web Vitals performance tuning.",
    url: "/services/technical-seo",
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
  },
};

const KEYWORDS_AND_TECH = [
  "Next.js SEO", "Supabase CMS", "Vercel Edge CDN", "IndexNow API",
  "Bing Webmaster Tools", "Microsoft Clarity Tracking", "Google Search Console", 
  "JSON-LD Schema.org", "Open Graph Protocol", "Core Web Vitals", 
  "PageSpeed Insights (90+/95+)", "LCP Optimization (<1.8s)", "TTFB Reduction (<500ms)", 
  "INP Tuning (<200ms)", "CLS (<0.1)", "AVIF & WebP Compression", 
  "Dynamic XML Sitemaps", "Automated robots.txt", "Canonical URL Security", 
  "301 Redirect Architecture", "Tree-Shaking & JS Deferrals", "Postgres Query Tuning"
];

const PHASES = [
  {
    number: "01",
    title: "Search Engine & Analytics Engine",
    badge: "Clarity & IndexNow",
    description:
      "Full site deployment of Microsoft Clarity tracking for heatmaps and session recordings that survive future code deployments. Configuration of Bing Webmaster Tools with automatic IndexNow API triggers to instantly notify Bing and search engines the second a Quest, Deal, Blog, or CMS page is published, updated, or deleted."
  },
  {
    number: "02",
    title: "Dynamic XML Sitemap System",
    badge: "Auto-<lastmod> & Filtering",
    description:
      "Fully dynamic, server-side XML sitemap generation that automatically includes newly published pages, purges deleted content, and updates <lastmod> timestamps in real time. Enforces strict inclusion of only canonical, indexable routes while automatically excluding admin dashboards, redirects, 404s, and noindex pages."
  },
  {
    number: "03",
    title: "Dynamic robots.txt Architecture",
    badge: "Crawl Routing",
    description:
      "Automated robots.txt file generation that guides search engine crawlers precisely where to go. Explicitly allows crawling across Homepages, CMS pages, Blogs, Quests, Deals, and Categories while locking down admin dashboards, authentication endpoints, and internal system API routes, paired with direct sitemap references."
  },
  {
    number: "04",
    title: "CMS-Managed SEO Metadata Panel",
    badge: "Supabase & Server-Side Renders",
    description:
      "Custom editable SEO fields embedded natively inside your CMS (Supabase or Headless CMS), stored in Postgres, and rendered server-side directly into the HTML <head> for zero hardcoded values. Includes live search engine result previews, real-time character counters for SEO Titles and Meta Descriptions, canonical overrides, Meta Robots toggles, and Open Graph media control."
  },
  {
    number: "05",
    title: "Automated Canonical URL Enforcement",
    badge: "Duplicate Content Shield",
    description:
      "Automated canonical URL generation for every public route to totally eliminate duplicate content penalties across varying query parameters or syndication channels. Includes manual override capabilities via CMS SEO fields for granular editorial oversight."
  },
  {
    number: "06",
    title: "Structured Data (Schema.org JSON-LD)",
    badge: "Rich Results Architecture",
    description:
      "Dynamic JSON-LD schema generation tailored to specific content architectures. Deploys Organization & WebSite schemas on homepages, Article on blog posts, FAQPage on FAQ sections, and BreadcrumbList across navigation hierarchies. Dynamically populates complex listing types like Course, Event, JobPosting, Offer, and Product directly from CMS database fields."
  },
  {
    number: "07",
    title: "Next-Gen Image SEO & LCP Preloads",
    badge: "AVIF, WebP & next/image",
    description:
      "Comprehensive optimization across every asset using Next.js next/image with automatic compression to AVIF format with WebP fallback. Implements strict responsive sizing with mandatory width/height attributes to eradicate layout shifts, applies intelligent below-the-fold lazy loading, and aggressively preloads Largest Contentful Paint (hero) images. Pairs with editable Alt Text fields in the CMS."
  },
  {
    number: "08",
    title: "Core Web Vitals & Performance Tuning",
    badge: "90+ Mobile / 95+ Desktop",
    description:
      "Engineering every public page to crush Google's Core Web Vitals: LCP < 1.8s, INP < 200ms, CLS < 0.1, TTFB < 500ms, and FCP < 1.8s. We eliminate render-blocking CSS, implement JavaScript dynamic imports, tree-shake dead code, defer non-critical third-party scripts, preload primary typography with font-display: swap, optimize Vercel Edge CDN caching, and refactor Supabase Postgres database queries to prevent duplicate fetching and utilize efficient pagination."
  },
  {
    number: "09",
    title: "Automatic 301 URL Redirect System",
    badge: "Link Equity Preservation",
    description:
      "Automated 301 permanent redirect generation triggered seamlessly whenever an editorial slug change occurs in the CMS. Totally prevents broken 404 backlinks, preserves established SEO link juice and ranking power, and programmatically guarantees zero redirect chains or infinite redirect loops."
  },
  {
    number: "10",
    title: "Intelligent Custom 404 Fallback",
    badge: "User Retention UI",
    description:
      "Conversion-engineered 404 error page featuring functional search capabilities, dynamic suggested content recommendations from active database items, and clear home navigation to convert potential bounces into re-engaged visitors."
  },
  {
    number: "11",
    title: "Crawlability & Zero-Orphan Audit",
    badge: "Structural Perfection",
    description:
      "Strict site-wide link structural validation guaranteeing all intended public routes are cleanly crawlable and indexable with zero orphaned pages. Eliminates accidental noindex leaks and verifies that sitemaps distribute exclusively canonical URLs."
  }
];

const DELIVERABLES = [
  "Before & After Google PageSpeed Insights benchmarking reports (Targeting 90+ Mobile, 95+ Desktop)",
  "Before & After comprehensive Google Lighthouse audit audits",
  "Google Search Console Rich Results Test validation passes across all schema types",
  "Schema.org Structured Data Validator passes for JSON-LD implementations",
  "Verified robots.txt & dynamic sitemap.xml validation reports",
  "Confirmed Bing Webmaster Tools property configuration and indexing setup",
  "Active Microsoft Clarity tracking confirmation with live recording verification",
  "Tested and functional IndexNow real-time webhook propagation verification"
];

export default function TechnicalSEOPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Technical SEO & Architecture", path: "/services/technical-seo" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Technical SEO, Schema & Core Web Vitals Optimization",
          description:
            "End-to-end technical SEO architecture, dynamic CMS metadata, automated IndexNow search submission, JSON-LD structured schema, and 95+ Core Web Vitals optimization.",
          path: "/services/technical-seo",
          serviceType: "Technical SEO & Performance Optimization",
        })}
      />
      
      <div className="max-w-6xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Technical SEO" },
          ]}
        />
        
        <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase bg-[#ccff00]/10 text-[#ccff00] rounded-full border border-[#ccff00]/20">
          Complete Indexing & Performance Architecture
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight max-w-4xl">
          Technical SEO & <span className="text-[#ccff00]">Core Web Vitals Architecture</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 mb-16 leading-relaxed max-w-3xl">
          We engineer bulletproof search infrastructures for high-growth Next.js and Supabase websites. By uniting real-time indexing automation, server-side rendered metadata, structured JSON-LD schema, and aggressive Core Web Vitals optimization, we turn search algorithms into your unfair commercial advantage.
        </p>

        {/* Why You Need This & What We Deliver Split */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 border-t border-white/10 pt-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-[#ccff00]">/</span> Why Technical SEO Wins
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Instantaneous Indexing via IndexNow:</strong> Waiting weeks for Google and Bing to crawl new content is archaic. By pushing direct programmatic notifications the second you publish or update content in your CMS, your pages get indexed in minutes, not days.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Dominate SERPs with Rich Results:</strong> Search engines reward clean structure. Dynamic JSON-LD Schema (for offers, products, FAQs, articles, and courses) expands your real estate on results pages with eye-catching badges and pricing details that multiply organic click-through rates.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Crush Google&apos;s Core Web Vitals Penalties:</strong> Page speed is an official ranking signal and conversion multiplier. With 95+ desktop and 90+ mobile PageSpeed targets, sub-500ms TTFB, and zero layout shifts, we eliminate abandonment rates and slash paid ad CPCs.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Editorial Freedom Without Dev Deployments:</strong> Your content and marketing teams get a dedicated live-preview SEO panel inside your database or headless CMS to tweak meta titles, canonicals, and social preview cards instantly without touching code or triggering git commits.</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-[#ccff00]">/</span> The Architectural Edge
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Zero Hardcoded Slop:</strong> Every canonical tag, meta description, and robot directive is computed server-side directly in Next.js Application Root layout and page heads, keeping source code pristine and completely future-proof.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Self-Healing Link Ecosystems:</strong> Changing a URL slug no longer results in catastrophic 404 errors. Our architecture registers changes and builds permanent 301 redirects on the fly, protecting your hard-earned domain authority.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Database & CDN Convergence:</strong> True performance isn&apos;t just image compression. We dive into your Supabase database queries, pruning unneeded select fields, eliminating N+1 loop requests, and tuning Vercel Edge caching headers.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Transparent Verification Proof:</strong> We never deliver vague assurances. You receive hard, undeniable validation reports—from Lighthouse benchmarks to verified schema tools and Microsoft Clarity session data collection.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 11-Phase Technical Architecture Section */}
        <div className="mb-20 border-t border-white/10 pt-16">
          <div className="max-w-3xl mb-12">
            <div className="inline-block px-3 py-1 mb-4 text-[10px] font-extrabold tracking-wider uppercase bg-[#ccff00]/10 text-[#ccff00] rounded-full border border-[#ccff00]/20">
              11-Phase Engineering Blueprint
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              The Comprehensive Technical SEO Implementation
            </h2>
            <p className="text-gray-400 text-base mt-3">
              We execute an uncompromising 11-phase architecture covering every dimension of modern technical SEO, crawlability, search analytics, and frontend speed performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHASES.map((phase) => (
              <div 
                key={phase.number}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#ccff00]/40 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono font-black text-sm text-[#ccff00] bg-[#ccff00]/10 px-2.5 py-1 rounded border border-[#ccff00]/20">
                      Phase {phase.number}
                    </span>
                    <span className="text-[11px] font-bold tracking-wide uppercase text-white/60 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {phase.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight leading-snug">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guaranteed Project Deliverables */}
        <div className="mb-20 bg-[#ccff00]/5 border border-[#ccff00]/20 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white tracking-tight">
            Guaranteed Project Deliverables & Proof of Work
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl text-sm md:text-base">
            A project is never considered finished until every verification test passes with pristine scores. You receive comprehensive diagnostic proof upon handoff:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DELIVERABLES.map((item, index) => (
              <div key={index} className="flex items-center gap-3.5 bg-white/5 border border-white/10 p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-[#ccff00] shrink-0" />
                <span className="text-sm font-medium text-white/90 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Keywords Pill Cloud */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-white tracking-tight">
            Architected With Industry-Standard Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {KEYWORDS_AND_TECH.map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/90 shadow-sm hover:border-[#ccff00]/50 hover:bg-[#ccff00]/10 hover:text-white transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
            Ready to unlock instant indexing & sub-second speeds?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-base">
            Let&apos;s deploy our 11-phase technical SEO and Core Web Vitals architecture onto your Next.js and Supabase ecosystem today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#ccff00] text-[#09080e] font-black rounded-full
                       px-9 py-4 shadow-[0_4px_20px_rgba(204,255,0,0.3)]
                       hover:bg-[#a3cc00] hover:scale-[1.02] transition-all duration-200"
          >
            <span>Claim Your Technical SEO Audit</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </Link>
        </div>

      </div>
    </div>
  );
}
