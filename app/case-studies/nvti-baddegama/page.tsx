import type { Metadata } from 'next'
import { baseUrl, breadcrumbSchema } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NVTI Baddegama — Institutional Training Portal | Cylvox Case Study',
  description: 'Built collaboratively with pure PHP and MySQL, delivering lightning-fast performance for the Vocational Training Authority.',
  alternates: {
    canonical: `${baseUrl}/case-studies/nvti-baddegama`,
  },
  openGraph: {
    title: 'NVTI Baddegama — Institutional Training Portal | Cylvox Case Study',
    description: 'Built collaboratively with pure PHP and MySQL, delivering lightning-fast performance for the Vocational Training Authority.',
    url: `${baseUrl}/case-studies/nvti-baddegama`,
    siteName: 'Cylvox',
    images: [
      {
        url: '/case-studies/nvti-baddegama/nvti-baddegama.png',
        width: 1200,
        height: 630,
        alt: 'NVTI Baddegama Case Study',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVTI Baddegama — Institutional Training Portal | Cylvox Case Study',
    description: 'Built collaboratively with pure PHP and MySQL, delivering lightning-fast performance for the Vocational Training Authority.',
    images: ['/case-studies/nvti-baddegama/nvti-baddegama.png'],
  },
}

export default function NvtiCaseStudyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'NVTI Baddegama', path: '/case-studies/nvti-baddegama' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />
      
      <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background font-display pb-20">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              NVTI Baddegama — Institutional Training Portal
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              A collaborative project delivering a lightning-fast, custom pure PHP and MySQL platform for the Vocational Training Authority without heavy framework bloat.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6 border-t border-border mt-8">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Client</span>
                <span className="font-medium">VTA Baddegama Centre</span>
              </div>
              <div className="flex flex-col ml-8">
                <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Platform</span>
                <span className="font-medium">Pure PHP & MySQL</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {['PHP', 'MySQL', 'Tailwind', 'Collaboration'].map(tech => (
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
                As an institution providing vital vocational training, NVTI Baddegama required a reliable digital footprint. In a collaborative team effort with friends, we engineered a custom, database-driven portal from the ground up using pure PHP and MySQL, proving that powerful systems don't always require massive JavaScript frameworks.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">The Goal</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✓</span> Establish a fast, bloat-free digital presence</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✓</span> Build a dynamic course catalog</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✓</span> Highlight real student success stories</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✓</span> Showcase institutional leaders and staff</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scope of Work */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Scope of Work</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Pure PHP Architecture</h3>
              <p className="text-muted-foreground text-sm">Architected a highly optimized custom backend running on raw PHP and MySQL, favoring fundamentals and direct database control over complex orchestration.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Dynamic Catalog & Testimonials</h3>
              <p className="text-muted-foreground text-sm">Implemented fully database-driven views for course listings, institutional leader profiles, and real-time student success stories.</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-surface/30 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">The Results</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A live, high-performance platform actively serving students and staff, demonstrating the power of pure, framework-free engineering.
              </p>
            </div>
            
            <div className="flex justify-center mb-16">
              <div className="bg-card rounded-2xl overflow-hidden border border-border p-4 shadow-2xl relative w-full max-w-4xl">
                <div className="aspect-[16/9] relative rounded-xl overflow-hidden bg-background">
                  <Image 
                    src="/case-studies/nvti-baddegama/nvti-baddegama.png" 
                    alt="NVTI Baddegama Live Website" 
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <p className="text-center mt-4 font-bold text-lg">Live Institutional Portal</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left z-0"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center border border-primary/20 bg-background/50 backdrop-blur-sm p-12 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Want a platform built on solid fundamentals?</h2>
            <p className="text-xl text-muted-foreground mb-8">From pure PHP to modern Next.js, we build whatever fits the problem best.</p>
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
