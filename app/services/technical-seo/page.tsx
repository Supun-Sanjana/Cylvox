import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/seo";

const TECHNICAL_SEO_FAQS = [
  {
    question: "What is technical SEO and why does it matter?",
    answer:
      "Technical SEO is the practice of optimizing server architecture, crawlability, indexability, structured data, and rendering performance so search engines can efficiently discover, process, and rank your content. Without solid technical SEO foundations, even the highest-quality content won't appear in search results because crawlers can't access or interpret it. Google processes over 8.5 billion searches daily and now evaluates Core Web Vitals as a direct ranking signal — making technical SEO the non-negotiable baseline for organic visibility.",
  },
  {
    question: "How does technical SEO differ from on-page and off-page SEO?",
    answer:
      "Technical SEO focuses on infrastructure — server response times, crawl budget optimization, XML sitemaps, robots.txt directives, structured data markup, and Core Web Vitals performance metrics. On-page SEO covers content optimization including title tags, heading hierarchy, keyword density, and internal linking. Off-page SEO addresses backlink acquisition and brand authority signals. All three disciplines work together as a unified search strategy, but technical SEO is the foundation that determines whether search engines can even find and index your on-page content.",
  },
  {
    question: "What are Core Web Vitals and how do they affect rankings?",
    answer:
      "Core Web Vitals are Google's three key performance metrics that measure real-world user experience — Largest Contentful Paint (LCP under 2.5 seconds), Interaction to Next Paint (INP under 200 milliseconds), and Cumulative Layout Shift (CLS under 0.1). Since 2021, Core Web Vitals have been a confirmed Google ranking signal within the Page Experience system. Sites that pass all three thresholds receive a measurable ranking boost over competitors with poor performance scores, making Core Web Vitals optimization a critical component of any technical SEO strategy.",
  },
  {
    question: "How does Next.js App Router improve technical SEO?",
    answer:
      "Next.js App Router leverages React Server Components to render 100% of HTML, headings, navigation links, and JSON-LD structured data on the server, completely eliminating client-side JavaScript dependencies for Googlebot crawling and indexing. The built-in generateMetadata API produces dynamic title tags, canonical URLs, and OpenGraph images at the edge, achieving sub-200ms TTFB. This server-first architecture ensures every page is fully crawlable on first request — a critical technical SEO advantage over client-rendered frameworks.",
  },
  {
    question: "What is IndexNow and how does it speed up search indexing?",
    answer:
      "IndexNow is an open protocol that lets websites push instant notifications to search engines including Bing, Yandex, and partner networks when content is created, updated, or deleted — reducing indexing latency from days to minutes. At Cylvox, we wire IndexNow into CMS publish events via automated n8n workflows, ensuring every content change triggers an immediate ping to search engine APIs. This eliminates the traditional wait for organic crawling and gives your fresh content a significant speed-to-index advantage.",
  },
  {
    question: "How long does a technical SEO audit take and what does it include?",
    answer:
      "A comprehensive Cylvox technical SEO audit typically takes 2–3 weeks and covers our complete 11-phase engineering blueprint. The audit evaluates crawlability and zero-orphan page validation, indexability controls, Core Web Vitals performance tuning, structured data validation, canonical URL integrity, robots.txt and dynamic sitemap architecture, next-gen image optimization, 301 redirect chain resolution, and competitive performance benchmarking — all verified with PageSpeed Insights, Lighthouse, and Schema.org validation reports.",
  },
];

export const metadata = {
  title: "Technical SEO, Schema & Core Web Vitals Solo Studio | Cylvox",
  description:
    "End-to-end technical SEO architecture, dynamic CMS metadata, automated IndexNow search submission, JSON-LD structured schema, and 95+ Core Web Vitals optimization for Next.js and Supabase websites.",
  alternates: { canonical: "/services/technical-seo" },
  openGraph: {
    title: "Technical SEO, Schema & Core Web Vitals Solo Studio | Cylvox",
    description:
      "End-to-end technical SEO architecture, automated sitemaps, IndexNow integration, JSON-LD schema, and 95+ Core Web Vitals performance tuning.",
    url: "/services/technical-seo",
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Cylvox Technical SEO Services" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Technical SEO, Schema & Core Web Vitals Solo Studio | Cylvox",
    description: "End-to-end technical SEO architecture, dynamic CMS metadata, automated IndexNow search submission, JSON-LD structured schema, and 95+ Core Web Vitals optimization for Next.js and Supabase websites.",
    images: ["/og-image.jpg"],
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
    <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-foreground">
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
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-foreground bg-surface rounded-full border border-border shadow-sm mb-8">
          Complete Indexing & Performance Architecture
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight max-w-4xl">
          Technical SEO & <span className="text-[#ccff00]">Core Web Vitals Architecture</span>
        </h1>
        
        {/* BLUF Definition for AEO / GEO Extraction */}
        <p className="text-xl md:text-2xl text-foreground font-semibold mb-6 leading-relaxed max-w-3xl">
          Technical SEO is the practice of optimizing a website&apos;s server architecture, crawlability, indexability, structured data, and rendering performance so search engines and AI crawlers can discover, evaluate, and index pages without friction. Cylvox delivers this as an 11-phase engineering blueprint.
        </p>

        <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl">
          We engineer bulletproof search infrastructures for high-growth Next.js and Supabase websites. By uniting real-time indexing automation, server-side rendered metadata, structured JSON-LD schema, and aggressive Core Web Vitals optimization, we turn search algorithms into your unfair commercial advantage.
        </p>

        {/* Semantic Comparison Table for GEO / Rich Snippets */}
        <div className="mb-16 max-w-4xl overflow-x-auto border border-border rounded-2xl bg-surface/50">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface border-b border-border">
              <tr>
                <th className="p-4 font-bold text-foreground">Discipline</th>
                <th className="p-4 font-bold text-foreground">Focus Area</th>
                <th className="p-4 font-bold text-foreground">Cylvox Implementation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              <tr>
                <td className="p-4 font-semibold text-foreground">Technical SEO</td>
                <td className="p-4">Infrastructure, crawling, rendering, schema, speed</td>
                <td className="p-4">Core Web Vitals optimization, JSON-LD, Next.js RSCs</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">On-Page SEO</td>
                <td className="p-4">Content quality, heading structure, keyword density</td>
                <td className="p-4">CMS-integrated SEO fields, automated canonicals</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">Off-Page SEO</td>
                <td className="p-4">Backlink profile, brand mentions, domain authority</td>
                <td className="p-4">Automated 301 redirects to preserve link equity</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Why You Need This & What We Deliver Split */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 border-t border-border pt-12">
          <div>
            <h2 className="text-3xl font-display font-semibold mb-6 text-foreground flex items-center gap-2">Why Technical SEO Wins
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Instantaneous Indexing via IndexNow:</strong> Waiting weeks for Google and Bing to crawl new content is archaic. By pushing direct programmatic notifications the second you publish or update content in your CMS, your pages get indexed in minutes, not days.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Dominate SERPs with Rich Results:</strong> Search engines reward clean structure. Dynamic JSON-LD Schema (for offers, products, FAQs, articles, and courses) expands your real estate on results pages with eye-catching badges and pricing details that multiply organic click-through rates.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Crush Google&apos;s Core Web Vitals Penalties:</strong> Page speed is an official ranking signal and conversion multiplier. With 95+ desktop and 90+ mobile PageSpeed targets, sub-500ms TTFB, and zero layout shifts, we eliminate abandonment rates and slash paid ad CPCs.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Editorial Freedom Without Dev Deployments:</strong> Your content and marketing teams get a dedicated live-preview SEO panel inside your database or headless CMS to tweak meta titles, canonicals, and social preview cards instantly without touching code or triggering git commits.</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-display font-semibold mb-6 text-foreground flex items-center gap-2">The Architectural Edge
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Zero Hardcoded Slop:</strong> Every canonical tag, meta description, and robot directive is computed server-side directly in Next.js Application Root layout and page heads, keeping source code pristine and completely future-proof.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Self-Healing Link Ecosystems:</strong> Changing a URL slug no longer results in catastrophic 404 errors. Our architecture registers changes and builds permanent 301 redirects on the fly, protecting your hard-earned domain authority.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Database & CDN Convergence:</strong> True performance isn&apos;t just image compression. We dive into your Supabase database queries, pruning unneeded select fields, eliminating N+1 loop requests, and tuning Vercel Edge caching headers.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Transparent Verification Proof:</strong> We never deliver vague assurances. You receive hard, undeniable validation reports—from Lighthouse benchmarks to verified schema tools and Microsoft Clarity session data collection.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 11-Phase Technical Architecture Section */}
        <div className="mb-20 border-t border-border pt-16">
          <div className="max-w-3xl mb-12">
            <div className="inline-block px-3 py-1 mb-4 text-[10px] font-extrabold tracking-wider uppercase bg-[#ccff00]/10 text-[#ccff00] rounded-full border border-[#ccff00]/20">
              11-Phase Engineering Blueprint
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
              The Comprehensive Technical SEO Implementation
            </h2>
            <p className="text-muted-foreground text-base mt-3">
              We execute an uncompromising 11-phase architecture covering every dimension of modern technical SEO, crawlability, search analytics, and frontend speed performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHASES.map((phase) => (
              <div 
                key={phase.number}
                className="bg-surface border border-border rounded-[2rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono font-black text-sm text-[#ccff00] bg-[#ccff00]/10 px-2.5 py-1 rounded border border-[#ccff00]/20">
                      Phase {phase.number}
                    </span>
                    <span className="text-[11px] font-bold tracking-wide uppercase text-muted-foreground bg-surface px-2.5 py-1 rounded-full border border-border">
                      {phase.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight leading-snug">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guaranteed Project Deliverables */}
        <div className="mb-20 bg-[#ccff00]/5 border border-[#ccff00]/20 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-black mb-4 text-foreground tracking-tight">
            Guaranteed Project Deliverables & Proof of Work
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl text-sm md:text-base">
            A project is never considered finished until every verification test passes with pristine scores. You receive comprehensive diagnostic proof upon handoff:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DELIVERABLES.map((item, index) => (
              <div key={index} className="flex items-center gap-3.5 bg-surface border border-border p-4 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-[#ccff00] shrink-0" />
                <span className="text-sm font-medium text-foreground/90 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Keywords Pill Cloud */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">
            Architected With Industry-Standard Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {KEYWORDS_AND_TECH.map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-surface border border-border rounded-full text-sm font-medium text-foreground shadow-sm hover:border-[#ccff00]/50 hover:bg-[#ccff00]/10 hover:text-foreground transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>



        {/* FAQ Section */}
        <div className="mb-20 border-t border-border pt-16">
          <JsonLd data={faqPageSchema(TECHNICAL_SEO_FAQS)} />
          <FAQ
            faqs={TECHNICAL_SEO_FAQS}
            title="Frequently Asked Questions"
            subtitle="Common questions about technical SEO architecture, Core Web Vitals optimization, and our engineering process."
          />
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-border rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
            Ready to unlock instant indexing & sub-second speeds?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-base">
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
