import type { Metadata } from 'next'
import { baseUrl, breadcrumbSchema } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'OutQuest — Complete Technical SEO & Performance | Cylvox Case Study',
  description: 'How Cylvox built a full technical SEO, indexing, structured data, and performance infrastructure for OutQuest\'s Next.js platform on Vercel with Supabase.',
  alternates: {
    canonical: `${baseUrl}/case-studies/outquest-technical-seo`,
  },
  openGraph: {
    title: 'OutQuest — Complete Technical SEO & Performance | Cylvox Case Study',
    description: 'How Cylvox built a full technical SEO, indexing, structured data, and performance infrastructure for OutQuest\'s Next.js platform on Vercel with Supabase.',
    url: `${baseUrl}/case-studies/outquest-technical-seo`,
    siteName: 'Cylvox',
    images: [
      {
        url: '/og/case-study.png',
        width: 1200,
        height: 630,
        alt: 'OutQuest Case Study',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OutQuest — Complete Technical SEO & Performance | Cylvox Case Study',
    description: 'How Cylvox built a full technical SEO, indexing, structured data, and performance infrastructure for OutQuest\'s Next.js platform on Vercel with Supabase.',
    images: ['/og/case-study.png'],
  },
}

export default function OutQuestCaseStudyPage() {
  // Breadcrumb schema
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'OutQuest Technical SEO', path: '/case-studies/outquest-technical-seo' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />
      
      <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background font-display pb-20">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              OutQuest — Complete Technical SEO & Performance Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Full technical SEO, indexing, structured data, and performance infrastructure implementation.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6 border-t border-border mt-8">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Client</span>
                <span className="font-medium">OutQuest</span>
              </div>
              <div className="flex flex-col ml-8">
                <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Platform</span>
                <span className="font-medium">Next.js + Supabase</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {['Next.js', 'Supabase', 'Vercel', 'Schema.org', 'TypeScript'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-surface border border-border rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview & Problem */}
        <section className="py-16 bg-surface/30 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OutQuest is an outdoor activities platform built on Next.js with Supabase as the CMS. The client needed a complete technical SEO foundation — not a small fix, but a full infrastructure build covering metadata, indexing, structured data, performance, and crawlability.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">The Problem</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> No dynamic SEO metadata</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> No XML sitemap or robots.txt</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> No structured data / JSON-LD schemas</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> No image optimization pipeline</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> No Core Web Vitals optimization</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> No automatic URL redirect handling</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> No IndexNow / Bing integration</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> No Microsoft Clarity analytics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scope of Work */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Scope of Work</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Search Engine & Analytics Setup</h3>
              <p className="text-muted-foreground text-sm">Microsoft Clarity installation, Bing Webmaster Tools, IndexNow integration (auto-notify Bing on Quest/Deal/Blog publish/update/delete).</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Dynamic XML Sitemap</h3>
              <p className="text-muted-foreground text-sm">Auto-updating sitemap including homepage, CMS pages, blog posts, quest pages, deal pages, category pages. Auto-include new pages, update lastmod, canonical-only, exclude admin/redirect/404/noindex.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">robots.txt</h3>
              <p className="text-muted-foreground text-sm">Dynamic robots.txt allowing public pages, blocking admin/auth/internal routes, referencing sitemap.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">04</div>
              <h3 className="text-xl font-bold mb-3">Dynamic SEO Metadata</h3>
              <p className="text-muted-foreground text-sm">CMS-editable SEO fields for every page type (title, description, canonical, meta robots, OG fields, slug) with live search preview and character counters.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">05</div>
              <h3 className="text-xl font-bold mb-3">Canonical URLs</h3>
              <p className="text-muted-foreground text-sm">Auto-generated canonical URLs for every public page, with complete CMS override capability.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">06</div>
              <h3 className="text-xl font-bold mb-3">Structured Data (Schema.org)</h3>
              <p className="text-muted-foreground text-sm">Dynamic JSON-LD: Organization, WebSite, Article, FAQPage, BreadcrumbList, plus context-appropriate schemas for Quest pages (Course/Event/JobPosting) and Deal pages (Offer/Product).</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">07</div>
              <h3 className="text-xl font-bold mb-3">Image SEO</h3>
              <p className="text-muted-foreground text-sm">Automatic compression, AVIF/WebP, responsive sizes, width/height attributes, lazy loading, hero LCP preload, Next.js Image component, CMS-editable alt text.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">08</div>
              <h3 className="text-xl font-bold mb-3">Performance & Core Web Vitals</h3>
              <p className="text-muted-foreground text-sm">Targets: Mobile PSI 90+, Desktop PSI 95+, LCP &lt;2.5s. Optimizations include code splitting, tree shaking, CSS minification, font preloading, and Supabase query optimization.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">09</div>
              <h3 className="text-xl font-bold mb-3">URL Redirects</h3>
              <p className="text-muted-foreground text-sm">Automatic 301 redirects on slug changes, preventing chains or loops.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">10</div>
              <h3 className="text-xl font-bold mb-3">Custom 404 Page</h3>
              <p className="text-muted-foreground text-sm">Implemented search, suggested content, and homepage navigation for lost visitors.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors lg:col-start-2">
              <div className="text-primary text-2xl font-bold mb-4">11</div>
              <h3 className="text-xl font-bold mb-3">Crawlability Audit</h3>
              <p className="text-muted-foreground text-sm">Ensured all public pages are crawlable, eliminated orphan pages, removed accidental noindex directives, validated sitemap.</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-surface/30 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">The Results</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built a scalable technical SEO foundation for OutQuest.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="bg-card rounded-2xl overflow-hidden border border-border p-4 shadow-2xl relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-background">
                  <Image 
                    src="/case-studies/out-quest/joinoutquest desktop per.png" 
                    alt="OutQuest Desktop PageSpeed Insights Score of 99" 
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center mt-4 font-bold text-lg">Desktop Score: 99/100</p>
              </div>
              <div className="bg-card rounded-2xl overflow-hidden border border-border p-4 shadow-2xl relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-background">
                  <Image 
                    src="/case-studies/out-quest/joinoutquest mobile per.png" 
                    alt="OutQuest Mobile PageSpeed Insights Score" 
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center mt-4 font-bold text-lg">Mobile Performance Optimized</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Completed Deliverables</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  'Google PageSpeed Insights reports (before & after)',
                  'Google Lighthouse reports (before & after)',
                  'Rich Results Test passes',
                  'Schema Validator passes',
                  'robots.txt validation',
                  'sitemap.xml validation',
                  'Bing Webmaster Tools configured',
                  'Microsoft Clarity collecting data',
                  'IndexNow confirmed working'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-muted-foreground">
                    <span className="text-primary mr-3">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Next.js', 'TypeScript', 'Supabase', 'Vercel', 'Schema.org', 
              'Google Search Console', 'Bing Webmaster Tools', 'Microsoft Clarity', 'IndexNow'
            ].map(tech => (
              <span key={tech} className="px-4 py-2 bg-surface border border-border rounded-full text-foreground font-medium">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left z-0"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center border border-primary/20 bg-background/50 backdrop-blur-sm p-12 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a similar technical SEO infrastructure?</h2>
            <p className="text-xl text-muted-foreground mb-8">Let's discuss how we can build a scalable foundation for your platform.</p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-background bg-primary hover:bg-primary/90 rounded-full transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
