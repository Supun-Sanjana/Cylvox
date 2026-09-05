import type { Metadata } from 'next'
import { baseUrl, breadcrumbSchema } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Zymgut (Brine & Thrive) — Technical SEO Plugin | Cylvox',
  description: 'How Cylvox developed a custom WordPress plugin architecture to dramatically improve organic search visibility and structured data for Zymgut.',
  alternates: {
    canonical: `${baseUrl}/case-studies/zymgut`,
  },
  openGraph: {
    title: 'Zymgut (Brine & Thrive) — Technical SEO Plugin | Cylvox',
    description: 'How Cylvox developed a custom WordPress plugin architecture to dramatically improve organic search visibility and structured data for Zymgut.',
    url: `${baseUrl}/case-studies/zymgut`,
    siteName: 'Cylvox',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Zymgut Case Study',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zymgut (Brine & Thrive) — Technical SEO Plugin | Cylvox',
    description: 'How Cylvox developed a custom WordPress plugin architecture to dramatically improve organic search visibility and structured data for Zymgut.',
    images: [`${baseUrl}/og-image.jpg`],
  },
}

export default function ZymgutCaseStudyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Zymgut (Brine & Thrive)', path: '/case-studies/zymgut' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Zymgut (Brine & Thrive) — Technical SEO Plugin | Cylvox",
        description: "How Cylvox developed a custom WordPress plugin architecture to dramatically improve organic search visibility and structured data for Zymgut.",
        author: { "@type": "Person", name: "Supun Sanjana", url: `${baseUrl}/about` },
        publisher: { "@type": "Organization", name: "Cylvox Solo Studio", logo: { "@type": "ImageObject", url: `${baseUrl}/logo.png` } },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/case-studies/zymgut` },
        datePublished: "2026-08-26",
        inLanguage: "en"
      }} />
      
      <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background font-display pb-20">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Zymgut (Brine & Thrive) — Custom SEO Plugin Architecture
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Dramatically improving organic search visibility for gut health recipes through bespoke technical SEO controls and structured data.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6 border-t border-border mt-8">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Client</span>
                <span className="font-medium">Zymgut</span>
              </div>
              <div className="flex flex-col ml-8">
                <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Platform</span>
                <span className="font-medium">WordPress + Custom Plugin</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {['WordPress', 'PHP', 'Technical SEO', 'Schema.org'].map(tech => (
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
                Zymgut (Brine & Thrive) is a highly specialized health and fermentation blog. Despite having high-quality, expert-driven recipe content, their organic visibility was suffering due to an inability to properly signal to search engines. We built a bespoke WordPress plugin to hijack their SEO architecture.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">The Problem</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> Low search visibility for core recipes</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> No rich snippets on Google Search</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> Inefficient indexing of new posts</li>
                <li className="flex items-start"><span className="text-primary mr-2 mt-1">✕</span> Generic plugins failed to address niche schema needs</li>
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
              <h3 className="text-xl font-bold mb-3">Custom Plugin Architecture</h3>
              <p className="text-muted-foreground text-sm">Engineered a bespoke WordPress plugin from scratch to handle deep technical SEO controls without the bloat of off-the-shelf solutions.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Recipe Schema Injection</h3>
              <p className="text-muted-foreground text-sm">Implemented strict Recipe and Article JSON-LD structured data to capture rich snippets (images, ratings, prep times) in Google Search.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
              <div className="text-primary text-2xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Automated Indexing Pings</h3>
              <p className="text-muted-foreground text-sm">Built a system to automatically ping search engine indexing APIs the moment a new recipe is published, ensuring rapid discovery.</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-surface/30 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">The Results</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Established a flawless technical foundation and achieved 100% indexing rates.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="bg-card rounded-2xl overflow-hidden border border-border p-4 shadow-2xl relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-background">
                  <Image 
                    src="/case-studies/zymgut/plugin-score-1.png" 
                    alt="Zymgut Technical SEO Results" 
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <p className="text-center mt-4 font-bold text-lg">Valid Rich Snippet Generation</p>
              </div>
              <div className="bg-card rounded-2xl overflow-hidden border border-border p-4 shadow-2xl relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-background">
                  <Image 
                    src="/case-studies/zymgut/plugin-score-2.png" 
                    alt="Zymgut Indexing Results" 
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <p className="text-center mt-4 font-bold text-lg">Rapid Indexing Infrastructure</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left z-0"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center border border-primary/20 bg-background/50 backdrop-blur-sm p-12 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need custom SEO architecture?</h2>
            <p className="text-xl text-muted-foreground mb-8">Let's discuss how we can build a technical advantage for your platform.</p>
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
