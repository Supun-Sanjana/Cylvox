import Services from "@/components/Services";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import Image from "next/image";

export const metadata = {
  title: 'Technical SEO Services, Core Web Vitals & Automation | Cylvox',
  description: 'Technical SEO is Cylvox’s core service: crawlability, schema, Core Web Vitals, search automation, and web engineering for complex sites.',
  alternates: { canonical: '/services' },
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
      <section className="relative pt-32 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-foreground bg-surface rounded-full border border-border shadow-sm mb-8">
            Technical SEO is the foundation
          </div>
          <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight leading-[1.05] text-foreground">
            Technical SEO first. <em className="text-primary not-italic">The rest compounds it.</em>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            We begin with crawlability, performance, and structured search signals. AI automation and engineering then make those gains repeatable.
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="relative aspect-video lg:aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden border border-border shadow-sm">
            <Image 
              src="/placeholders/squish_dune_flow.jpg" 
              alt="Ethereal representation of the service stack" 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <Services />
    </>
  );
}
