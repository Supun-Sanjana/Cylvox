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
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase bg-[#ccff00]/10 text-[#ccff00] rounded-full border border-[#ccff00]/20">
            Full Capability Range
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            The full <span className="text-[#ccff00]">service stack.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            From first pixel to production traffic: design, engineering, technical SEO, and the automation that keeps things running after launch. Each service below is a specialty in its own right, not a bolt-on.
          </p>
        </div>
      </section>
      <Services />
    </>
  );
}
