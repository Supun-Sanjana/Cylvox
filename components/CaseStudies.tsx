import Image from "next/image";
import { ArrowUpRight, Users, Lock } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import Link from "next/link";
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";

const projects = [
  {
    tag: "Technical SEO Plugin",
    title: "Zymgut (Brine & Thrive)",
    padded: true,
    liveUrl: "https://zymgut.com",
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
      { metric: "Valid", label: "Rich Snippets", text: "Flawless JSON-LD schema injection." }
    ]
  },
  {
    tag: "Next.js SEO Overhaul",
    title: "Join OutQuest Global Opportunities",
    padded: true,
    liveUrl: "https://joinoutquest.com",
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
    internal: true,
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
    internal: true,
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
  },
  {
    tag: "Institutional Portal",
    title: "NVTI Baddegama",
    collab: true,
    padded: true,
    liveUrl: "https://nvtibaddegama.site",
    description: "A comprehensive vocational training platform for the Vocational Training Authority Baddegama Centre. Built collaboratively with pure PHP and MySQL, delivering lightning-fast performance without framework bloat.",
    images: ["/case-studies/nvti-baddegama/nvti-baddegama.png"],
    features: [
      { title: "Pure PHP Architecture", text: "Lightweight, highly optimized custom backend running on raw PHP & MySQL." },
      { title: "Dynamic Catalog", text: "Database-driven course listings, leader profiles, and real-time student testimonials." }
    ],
    stats: [
      { metric: "PHP", label: "Core Stack", text: "Zero heavy frameworks, pure performance." },
      { metric: "Live", label: "Status", text: "Actively serving students and staff." }
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                
                {/* Copy Side */}
                <div className={`max-lg:contents flex flex-col ${i % 2 === 0 ? 'lg:order-last' : ''}`}>
                  <div className="max-lg:order-1">
                    <div className="inline-flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
                      <div className="inline-flex items-center gap-2">
                        <span className="flex items-center justify-center size-5 rounded-full bg-primary/20">
                          <span className="size-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-muted-foreground">
                          {project.tag}
                        </span>
                      </div>
                      
                      {(project as any).collab && (
                        <span className="ml-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/50 border border-border text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                          <Users className="w-3.5 h-3.5" />
                          Collab
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-foreground tracking-tight leading-[1.1]">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="max-lg:order-3">
                    <p className="mt-4 lg:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
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

                    <div className="mt-12 flex flex-wrap items-center gap-4">
                      {project.slug && (
                        <Link 
                          href={`/case-studies/${project.slug}`}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 font-medium transition-transform hover:scale-105"
                        >
                          Read full case study
                          <ArrowUpRight className="size-4" />
                        </Link>
                      )}
                      {(project as any).liveUrl && (
                        <a 
                          href={(project as any).liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent text-foreground px-8 py-4 font-medium transition-colors hover:bg-surface"
                        >
                          Visit live site
                          <ArrowUpRight className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`max-lg:order-2 relative aspect-square sm:aspect-[4/3] lg:aspect-[1.1/1] w-full overflow-hidden rounded-[2.5rem] bg-surface border border-border shadow-sm ${i % 2 === 0 ? 'lg:order-first' : ''}`}>
                  <CaseStudyCarousel images={project.images} title={project.title} padded={(project as any).padded} />
                  
                  {(project as any).internal && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center bg-background/40 backdrop-blur-xl">
                      <div className="bg-background/90 border border-border/50 p-6 sm:p-8 rounded-2xl max-w-[280px] sm:max-w-xs shadow-2xl">
                        <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-4 opacity-50" />
                        <h4 className="font-display text-lg sm:text-xl font-bold mb-2 text-foreground">Internal System</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">This system is developed for internal use only. No preview/live URL available, but full details are in the case study.</p>
                      </div>
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
