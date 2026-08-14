import type { Metadata } from 'next'
import { baseUrl, breadcrumbSchema } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SG Plantation ERP — Custom High-Concurrency System | Cylvox Case Study',
  description: 'How Cylvox developed a highly secure, custom Next.js Enterprise Resource Planning system for internal plantation management.',
  alternates: {
    canonical: `${baseUrl}/case-studies/sg-plantation-erp`,
  },
  openGraph: {
    title: 'SG Plantation ERP — Custom High-Concurrency System | Cylvox Case Study',
    description: 'How Cylvox developed a highly secure, custom Next.js Enterprise Resource Planning system for internal plantation management.',
    url: `${baseUrl}/case-studies/sg-plantation-erp`,
    siteName: 'Cylvox',
    images: [
      {
        url: '/og/case-study.png',
        width: 1200,
        height: 630,
        alt: 'SG Plantation ERP Case Study',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SG Plantation ERP — Custom High-Concurrency System | Cylvox Case Study',
    description: 'How Cylvox developed a highly secure, custom Next.js Enterprise Resource Planning system for internal plantation management.',
    images: ['/og/case-study.png'],
  },
}

export default function SgPlantationCaseStudyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'SG Plantation ERP', path: '/case-studies/sg-plantation-erp' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />
      
      <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background font-display pb-20">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              SG Plantation ERP — High-Concurrency Internal Operations
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Engineered a highly secure, custom Next.js Enterprise Resource Planning system for internal plantation management and real-time data tracking.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6 border-t border-border mt-8">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Client</span>
                <span className="font-medium">Internal</span>
              </div>
              <div className="flex flex-col ml-8">
                <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Platform</span>
                <span className="font-medium">Next.js + PostgreSQL</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {['Next.js', 'PostgreSQL', 'Tailwind', 'RBAC'].map(tech => (
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
                Managing a large-scale plantation requires precise tracking of labor, resources, and yields. Off-the-shelf software couldn't handle the specific data hierarchies and concurrency requirements. We built a custom Next.js ERP tailored strictly to their operational flow.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">The Problem</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> Manual operational tracking causing severe delays</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> Siloed internal data preventing top-down analytics</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> Lack of proper Role-Based Access Control (RBAC)</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> High concurrency bottlenecks during shift handovers</li>
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
              <h3 className="text-xl font-bold mb-3">Role-Based Access (RBAC)</h3>
              <p className="text-muted-foreground text-sm">Implemented strict data siloing for managers, field workers, and executives, ensuring data security and simplified interfaces based on user roles.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Real-Time Tracking</h3>
              <p className="text-muted-foreground text-sm">Engineered live operational data sync across the plantation, allowing management to see yields, resources, and active work in real time.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">High-Concurrency Pipelines</h3>
              <p className="text-muted-foreground text-sm">Architected serverless database connections and optimized queries to handle hundreds of concurrent data entries during shift changes without locking.</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-surface/30 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">The Results</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A highly available architecture with zero downtime and 10x faster internal data sync.
              </p>
            </div>
            
            <div className="flex justify-center mb-16">
              <div className="bg-card rounded-2xl overflow-hidden border border-border p-4 shadow-2xl relative w-full max-w-3xl">
                <div className="aspect-[16/9] relative rounded-xl overflow-hidden bg-background">
                  <Image 
                    src="/placeholders/squish_crystals_1786554808524.jpg" 
                    alt="SG Plantation ERP Dashboard" 
                    fill
                    className="object-cover blur-md"
                  />
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/50 backdrop-blur-sm p-4">
                    <div className="bg-background/90 border border-border px-6 py-4 rounded-xl text-center shadow-xl">
                      <p className="font-display font-bold text-lg text-foreground">Internal System</p>
                      <p className="text-sm text-muted-foreground mt-1">Images pending client approval.</p>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 font-bold text-lg">Custom Plantation Analytics Dashboard</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left z-0"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center border border-primary/20 bg-background/50 backdrop-blur-sm p-12 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a custom internal ERP?</h2>
            <p className="text-xl text-muted-foreground mb-8">Let's discuss how we can engineer a reliable system for your complex operations.</p>
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
