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
  'zymgut-trust-signal-auditor': {
    title: 'Zymgut Trust Signal Auditor',
    client: 'Zymgut',
    problem: 'Low trust scores due to AI‑generated content',
    solution: 'Implemented AI‑driven audit and remediation pipeline.',
    result: 'Trust score increased from 45 to 92.',
    tech: ['Next.js', 'Vercel', 'OpenAI'],
    slug: 'zymgut-trust-signal-auditor',
  },
  'acme-web-revamp': {
    title: 'Acme Web Revamp',
    client: 'Acme Corp',
    problem: 'Outdated architecture and poor SEO performance',
    solution: 'Rebuilt site with modern stack and optimized core web vitals.',
    result: 'Core Web Vitals ↑ to 99/100, traffic +45%',
    tech: ['React', 'Tailwind', 'Vercel'],
    slug: 'acme-web-revamp',
  },
  'outquest-technical-seo': {
    title: 'OutQuest — Complete Technical SEO & Performance Infrastructure',
    client: 'OutQuest',
    problem: 'Scalable SEO for dynamic CMS‑driven site',
    solution: 'Implemented dynamic metadata, sitemap, schema, performance, and crawlability infrastructure.',
    result: 'Robust SEO foundation with automated indexing and fast page loads.',
    tech: ['Next.js', 'Supabase', 'Vercel', 'Schema.org'],
    slug: 'outquest-technical-seo',
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
          { name: 'Case Studies', path: '/case-studies' },
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
        <Link href="/case-studies" className="inline-block mt-6 bg-primary text-primary-foreground rounded-full px-4 py-2 hover:bg-primary/80 transition">
          Back to Case Studies
        </Link>
      </section>
    </>
  );
}
