import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { baseUrl, breadcrumbSchema } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

type CaseStudy = {
  title: string;
  client: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  slug: string;
};

const caseStudyData: Record<string, CaseStudy> = {
  'zymgut': {
    title: 'Zymgut (Brine & Thrive)',
    client: 'Zymgut',
    problem: 'Low search visibility for gut health recipes',
    solution: 'Optimized a WordPress health and fermentation blog using custom plugin architecture.',
    result: 'Dramatically improved organic rankings and indexing via structured data.',
    tech: ['WordPress', 'PHP', 'Technical SEO', 'Schema.org'],
    slug: 'zymgut',
  },
  'join-outquest': {
    title: 'Join OutQuest SEO Overhaul',
    client: 'OutQuest',
    problem: 'Scalable SEO for dynamic CMS-driven global opportunity platform',
    solution: 'Engineered a complete technical SEO overhaul with dynamic sitemaps, server-side metadata, and schema markup.',
    result: 'Captured high-intent search traffic and secured a flawless technical SEO foundation.',
    tech: ['Next.js', 'Vercel', 'Schema.org'],
    slug: 'join-outquest',
  },
  'sg-plantation-erp': {
    title: 'SG Plantation ERP',
    client: 'Internal',
    problem: 'Manual operational tracking and siloed internal data',
    solution: 'Developed a highly secure, custom Next.js Enterprise Resource Planning system with strict RBAC.',
    result: 'Enabled high-concurrency data entry and real-time operational tracking.',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
    slug: 'sg-plantation-erp',
  },
  'micro-credit-erp': {
    title: 'Micro Credit ERP / Tracking System',
    client: 'Internal',
    problem: 'Inefficient manual loan tracking and reconciliation',
    solution: 'Architecting a robust, scalable ERP for tracking micro-credit loans and financial data.',
    result: 'Ensures data integrity, real-time analytics, and seamless financial operations.',
    tech: ['Next.js', 'Supabase', 'Edge Functions'],
    slug: 'micro-credit-erp',
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudyData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = caseStudyData[slug];
  if (!data) return {} as Metadata;
  return {
    title: `${data.title} – Case Study`,
    description: `${data.client} case study: ${data.problem}`,
    alternates: { canonical: `${baseUrl}/case-studies/${data.slug}` },
    openGraph: {
      title: `${data.title} – Case Study`,
      description: data.result,
      url: `${baseUrl}/case-studies/${data.slug}`,
      siteName: 'Cylvox',
      images: [{ url: '/og/case-study.png', width: 1200, height: 630, alt: `${data.title} case study` }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.title} – Case Study`,
      description: data.result,
      images: ['/og/case-study.png'],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = caseStudyData[slug];
  if (!data) notFound();
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
          { name: data.title, path: `/case-studies/${data.slug}` },
        ])}
      />
      <section className="max-w-4xl mx-auto pt-32 pb-12 px-4">
        <h1 className="font-display text-4xl font-bold mb-6 text-center">{data.title}</h1>
        <p className="mb-4"><strong>Client:</strong> {data.client}</p>
        <p className="mb-4"><strong>Problem:</strong> {data.problem}</p>
        <p className="mb-4"><strong>Solution:</strong> {data.solution}</p>
        <p className="mb-4"><strong>Result:</strong> {data.result}</p>
        <p className="mb-4"><strong>Technologies:</strong> {data.tech.join(', ')}</p>
        <Link href="/work" className="inline-block mt-6 bg-primary text-primary-foreground rounded-full px-4 py-2 hover:bg-primary/80 transition">
          Back to Work
        </Link>
      </section>
    </>
  );
}
