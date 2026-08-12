import Services from "@/components/Services";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: 'Services – Cylvox Technical Services',
  description: 'Cylvox offers technical services: web development, technical SEO, performance optimization, AI automation, and audits.',
  alternates: { canonical: 'https://cylvox.com/services' },
  openGraph: {
    title: 'Cylvox Services',
    description: 'Technical services for modern web products.',
    url: 'https://cylvox.com/services',
    siteName: 'Cylvox',
    images: [{ url: '/og/services.png', width: 1200, height: 630, alt: 'Cylvox Services' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cylvox Services',
    description: 'Technical services for modern web products.',
    images: ['/og/services.png'],
  },
};


export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-foreground">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-foreground bg-surface rounded-full border border-border shadow-sm mb-8">
            Full Capability Range
          </div>
          <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight leading-[1.05]">
            The full <em className="text-primary not-italic">service stack.</em>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            From first pixel to production traffic: design, engineering, technical SEO, and the automation that keeps things running after launch. Each service below is a specialty in its own right, not a bolt-on.
          </p>
        </div>
      </section>
      <Services />
    </>
  );
}
