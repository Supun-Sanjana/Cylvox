import { Metadata } from 'next';
import Link from 'next/link';
import { baseUrl, breadcrumbSchema } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Case Studies – Cylvox Technical Services',
  description: 'Explore real-world success stories of Cylvox delivering technical SEO, web development, and trust signal auditing solutions.',
  alternates: { canonical: `${baseUrl}/case-studies` },
  openGraph: {
    title: 'Cylvox Case Studies',
    description: 'See how we helped clients improve performance, security, and trust.',
    url: `${baseUrl}/case-studies`,
    siteName: 'Cylvox',
    images: [{ url: '/og/case-studies.png', width: 1200, height: 630, alt: 'Cylvox case studies' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cylvox Case Studies',
    description: 'See our client success stories.',
    images: ['/og/case-studies.png'],
  },
};

// Mock case‑study data – replace with real data later
const caseStudies = [
  {
    name: 'Zymgut Trust Signal Auditor',
    slug: 'zymgut-trust-signal-auditor',
    client: 'Zymgut',
    problem: 'Low trust scores due to AI‑generated content',
    result: 'Score increased from 45 to 92',
    tech: ['Next.js', 'Vercel', 'OpenAI'],
  },
  {
    name: 'Acme Web Revamp',
    slug: 'acme-web-revamp',
    client: 'Acme Corp',
    problem: 'Outdated architecture and poor SEO performance',
    result: 'Core Web Vitals ↑ to 99/100, traffic +45%',
    tech: ['React', 'Tailwind', 'Vercel'],
  },
  {
    name: 'OutQuest — Complete Technical SEO & Performance Infrastructure',
    slug: 'outquest-technical-seo',
    client: 'OutQuest',
    problem: 'Scalable SEO for dynamic CMS-driven site',
    result: 'Dynamic metadata, sitemap, schema, performance, and crawlability infrastructure',
    tech: ['Next.js', 'Supabase', 'Vercel', 'Schema.org'],
    featured: true,
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Case Studies', path: '/case-studies' },
        ])}
      />
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="font-display text-4xl font-bold mb-8 text-center">Case Studies</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <article key={cs.slug} className="border border-white/10 rounded-lg p-6 bg-gray-900/50 backdrop-blur-md">
              <h2 className="font-semibold text-2xl mb-2 text-primary">{cs.name}</h2>
              <p className="text-muted-foreground mb-2"><strong>Client:</strong> {cs.client}</p>
              <p className="text-muted-foreground mb-2"><strong>Problem:</strong> {cs.problem}</p>
              <p className="text-muted-foreground mb-2"><strong>Result:</strong> {cs.result}</p>
              <p className="text-muted-foreground mb-4"><strong>Tech:</strong> {cs.tech.join(', ')}</p>
              <Link href={`/case-studies/${cs.slug}`} className="inline-block bg-primary text-primary-foreground rounded-full px-4 py-2 hover:bg-primary/80 transition">
                Read Full Study
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
