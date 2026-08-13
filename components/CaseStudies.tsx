import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import Link from "next/link";
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";

const projects = [
  {
    tag: "Technical SEO Plugin",
    title: "Zymgut (Brine & Thrive)",
    description: "Optimized a WordPress health and fermentation blog using custom plugin architecture, dramatically improving organic search visibility for gut health recipes and tutorials.",
    images: [
      
      "/case-studies/zymgut/plugin-score-1.png",
      "/case-studies/zymgut/plugin-score-2.png"
    ],
    slug: 'zymgut',
    features: [
      { title: "Custom Architecture", text: "Bespoke plugin development for deep technical SEO controls." },
      { title: "Organic Growth", text: "Structured data implementation for rich recipe snippets." }
    ],
    stats: [
      { metric: "100%", label: "Indexing Rate", text: "Automated search engine pings." },
      { metric: "#1", label: "Page Rankings", text: "Captured high-intent niche keywords." }
    ]
  },
  {
    tag: "Next.js SEO Overhaul",
    title: "Join OutQuest Global Opportunities",
    description: "Engineered a complete technical SEO overhaul for a global opportunity platform built on Next.js. Implemented dynamic sitemaps, server-side metadata, and schema markup.",
    images: [
      "/case-studies/out-quest/joinoutquest.png",
      "/case-studies/out-quest/joinoutquest desktop per.png",
      "/case-studies/out-quest/joinoutquest mobile per.png"
    ],
    slug: 'join-outquest',
    features: [
      { title: "Dynamic Schemas", text: "Automated JSON-LD generation for hundreds of quests." },
      { title: "Server-Side Metadata", text: "Perfectly optimized open-graph and title tags injected on the edge." }
    ],
    stats: [
      { metric: "99/100", label: "Core Web Vitals", text: "Verified by Google PageSpeed Insights." },
      { metric: "Fast", label: "Crawl Budget", text: "Optimized XML sitemaps and robots.txt." }
    ]
  },
  {
    tag: "Internal Custom ERP",
    title: "SG Plantation ERP",
    description: "Developed a highly secure, custom Next.js Enterprise Resource Planning system for internal plantation management. Engineered for high-concurrency data entry and RBAC.",
    images: ["/placeholders/squish_crystals_1786554808524.jpg"],
    slug: 'sg-plantation-erp',
    features: [
      { title: "Role-Based Access", text: "Strict data siloing for managers and field workers." },
      { title: "Real-Time Tracking", text: "Live operational data sync across the plantation." }
    ],
    stats: [
      { metric: "0", label: "Downtime", text: "Highly available serverless architecture." },
      { metric: "10x", label: "Faster Sync", text: "Optimized internal data pipelines." }
    ]
  },
  {
    tag: "Internal Fintech ERP",
    title: "Micro Credit Tracking System",
    description: "Architecting a robust, scalable ERP for tracking micro-credit loans and financial data. Built on a high-performance stack to ensure data integrity and seamless financial operations.",
    images: ["/placeholders/squish_veiled_figure_1786554718616.jpg"],
    slug: 'micro-credit-erp',
    features: [
      { title: "Financial Ledger", text: "Immutable transactional records and automated sync." },
      { title: "Data Integrity", text: "End-to-end type safety and strict schema validation." }
    ],
    stats: [
      { metric: "100%", label: "Accuracy", text: "Automated reconciliation pipelines." },
      { metric: "<50ms", label: "Query Time", text: "Highly optimized database indexes." }
    ]
  }
];

export default function CaseStudies() {
  return (
    <section id="cases" className="px-4 py-20 sm:py-32 sm:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <SectionLabel>Proven Case Studies</SectionLabel>
          <h2 className="mt-5 text-balance font-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
            Real Systems. <em className="text-primary not-italic">Measurable Impact.</em>
          </h2>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col gap-6 lg:gap-8">
              
              {/* Main Bento Block */}
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${i % 2 !== 0 ? 'lg:rtl' : ''}`}>
                {/* Image Side */}
                <div className={`relative aspect-square sm:aspect-[4/3] lg:aspect-[1.1/1] w-full overflow-hidden rounded-[2.5rem] bg-surface border border-border shadow-sm ${i % 2 !== 0 ? 'ltr:lg:order-last' : ''}`}>
                  <CaseStudyCarousel images={project.images} title={project.title} />
                </div>
                
                {/* Copy Side */}
                <div className="flex flex-col">
                  <div className="inline-flex">
                    <span className="rounded-full bg-surface border border-border px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground shadow-sm">
                      {project.tag}
                    </span>
                  </div>
                  
                  <h3 className="mt-8 font-display text-4xl sm:text-5xl lg:text-[4rem] leading-[1.05] text-foreground tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-border">
                    {project.features.map((feat, j) => (
                      <div key={j}>
                        <h4 className="font-display text-2xl mb-3 text-foreground">{feat.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{feat.text}</p>
                      </div>
                    ))}
                  </div>

                  {project.slug && (
                    <div className="mt-12">
                      <Link 
                        href={`/case-studies/${project.slug}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 font-medium transition-transform hover:scale-105"
                      >
                        Read full case study
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats Bento Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {project.stats.map((stat, j) => (
                  <div key={j} className="rounded-[2.5rem] bg-surface border border-border p-8 sm:p-12 shadow-sm flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="font-display text-6xl sm:text-[5.5rem] tracking-tighter text-foreground mb-6">
                      {stat.metric}
                    </div>
                    <div>
                      <h4 className="font-display text-3xl mb-2 text-foreground">{stat.label}</h4>
                      <p className="text-muted-foreground text-base leading-relaxed max-w-sm">{stat.text}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
