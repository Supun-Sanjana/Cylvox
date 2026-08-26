import type { Metadata } from 'next'
import { baseUrl, breadcrumbSchema } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Micro Credit ERP — Robust Tracking System | Cylvox Case Study',
  description: 'Architecting a robust, scalable ERP for tracking micro-credit loans and financial data.',
  alternates: {
    canonical: `${baseUrl}/case-studies/micro-credit-erp`,
  },
  openGraph: {
    title: 'Micro Credit ERP — Robust Tracking System | Cylvox Case Study',
    description: 'Architecting a robust, scalable ERP for tracking micro-credit loans and financial data.',
    url: `${baseUrl}/case-studies/micro-credit-erp`,
    siteName: 'Cylvox',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Micro Credit ERP Case Study',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micro Credit ERP — Robust Tracking System | Cylvox Case Study',
    description: 'Architecting a robust, scalable ERP for tracking micro-credit loans and financial data.',
    images: ['/og-image.jpg'],
  },
}

export default function MicroCreditCaseStudyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Micro Credit ERP', path: '/case-studies/micro-credit-erp' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />
      
      <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background font-display pb-20">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Micro Credit ERP — Immutable Financial Tracking
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Architecting a robust, scalable ERP for tracking micro-credit loans, payments, and financial reconciliation data.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6 border-t border-border mt-8">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Client</span>
                <span className="font-medium">Internal Fintech</span>
              </div>
              <div className="flex flex-col ml-8">
                <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Platform</span>
                <span className="font-medium">Next.js + Supabase</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {['Next.js', 'Supabase', 'Edge Functions', 'TypeScript'].map(tech => (
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
                Managing micro-credit loans requires extreme precision. Financial discrepancies can severely impact trust and operational viability. We were tasked with replacing inefficient manual tracking with a robust, type-safe Next.js ERP backed by Supabase.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">The Problem</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> Inefficient manual loan tracking</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> Extremely painful financial reconciliation</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> Slow query times blocking real-time reporting</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> Vulnerability to human data-entry errors</li>
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
              <h3 className="text-xl font-bold mb-3">Immutable Ledger</h3>
              <p className="text-muted-foreground text-sm">Built a financial ledger using Supabase with strict row-level security and triggers to ensure immutable transactional records and automated sync.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Data Integrity</h3>
              <p className="text-muted-foreground text-sm">Implemented end-to-end type safety with TypeScript and strict Zod schema validation to eliminate human data-entry errors.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Optimized Edge Analytics</h3>
              <p className="text-muted-foreground text-sm">Deployed Edge Functions for rapid financial aggregations, bringing complex query times down to under 50ms.</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-surface/30 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">The Results</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                100% accuracy through automated reconciliation pipelines and lightning-fast &lt;50ms query times.
              </p>
            </div>
            
            <div className="flex justify-center mb-16">
              <div className="bg-card rounded-2xl overflow-hidden border border-border p-4 shadow-2xl relative w-full max-w-3xl">
                <div className="aspect-[16/9] relative rounded-xl overflow-hidden bg-background">
                  <Image 
                    src="/placeholders/squish_veiled_figure_1786554718616.jpg" 
                    alt="Micro Credit ERP Interface" 
                    fill
                    className="object-cover blur-md"
                  />
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/50 backdrop-blur-sm p-4">
                    <div className="bg-background/90 border border-border px-6 py-4 rounded-xl text-center shadow-xl">
                      <p className="font-display font-bold text-lg text-foreground">Currently In Development</p>
                      <p className="text-sm text-muted-foreground mt-1">Interface previews will be available soon.</p>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 font-bold text-lg">Fintech Operations Interface</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left z-0"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center border border-primary/20 bg-background/50 backdrop-blur-sm p-12 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Building a fintech platform?</h2>
            <p className="text-xl text-muted-foreground mb-8">Let's architect a system where data integrity is guaranteed from day one.</p>
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
