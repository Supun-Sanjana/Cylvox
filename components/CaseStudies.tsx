import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import Link from "next/link";

const projects = [
  {
    tag: "SEO & Core Web Vitals",
    title: "Engineering a flawless 99/100 performance infrastructure",
    description: "From a vibe-coded prototype to an enterprise-ready architecture. We completely rebuilt the technical SEO, dynamic routing, and caching layers to achieve near-instant load times.",
    image: "/placeholders/squish_veiled_figure_1786554718616.jpg",
    slug: 'outquest-technical-seo',
    features: [
      { title: "Dynamic Metadata", text: "Automated schema.org generation for every unique page." },
      { title: "Edge Caching", text: "Global CDN distribution with sub-second ISR revalidation." }
    ],
    stats: [
      { metric: "99/100", label: "Desktop Score", text: "Verified by Google PageSpeed Insights." },
      { metric: "<1.8s", label: "LCP Time", text: "Lightning fast initial load speeds." }
    ]
  },
  {
    tag: "Vibe-Code Security Audit",
    title: "Hardening a Cursor-Built Fintech App Before $2.5M Seed Round",
    description: "Founders move fast with AI, but security often lags behind. We audited and secured the entire authentication and database layer to pass strict enterprise compliance checks.",
    image: "/placeholders/squish_crystals_1786554808524.jpg",
    slug: '',
    features: [
      { title: "RLS Policies", text: "Strict Row Level Security implementation in Supabase." },
      { title: "Type Safety", text: "End-to-end generic typing replacing brittle 'any' casts." }
    ],
    stats: [
      { metric: "$2.5M", label: "Seed Funding", text: "Successfully cleared technical due diligence." },
      { metric: "0", label: "Vulnerabilities", text: "Critical exploits patched before launch." }
    ]
  },
  {
    tag: "Headless CMS Migration",
    title: "WordPress to Headless Sanity CMS Migration with Sub-Second ISR",
    description: "A complete replatforming to decouple the frontend from the monolithic backend, ensuring a lightweight edge-rendered experience while retaining full editor control.",
    image: "/placeholders/squish_crystals_1786554808524.jpg",
    slug: '',
    features: [
      { title: "Content Modeling", text: "Structured, typed schemas replacing unstructured WYSIWYG blobs." },
      { title: "Visual Editing", text: "Live real-time preview side-by-side with the Next.js frontend." }
    ],
    stats: [
      { metric: "3x", label: "Conversion Rate", text: "Increase in lead capture post-migration." },
      { metric: "12ms", label: "TTFB", text: "Time to first byte on static routes globally." }
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
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
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
