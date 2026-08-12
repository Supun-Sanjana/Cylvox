import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agency Partners – Cylvox',
  description: 'Partner with Cylvox to deliver top‑tier technical services for your clients. We handle web development, SEO, performance optimization, and AI automation while you maintain the client relationship.',
  alternates: {
    canonical: '/agency-partners',
  },
  openGraph: {
    title: 'Agency Partners – Cylvox',
    description: 'Join forces with Cylvox to provide premium technical solutions to your agency clients.',
    url: 'https://cylvox.com/agency-partners',
    type: 'website',
    images: [
      {
        url: '/og/agency-partners.png',
        width: 1200,
        height: 630,
        alt: 'Cylvox Agency Partners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency Partners – Cylvox',
    description: 'Partner with Cylvox to deliver top‑tier technical services for your agency clients.',
    images: ['/og/agency-partners.png'],
  },
};

export default function AgencyPartnersPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">
        Agency Partnerships
      </h1>
      <p className="text-lg md:text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Extend your service offering with Cylvox as your trusted technical partner. We handle the heavy‑lifting – from custom web development to advanced SEO – so you can focus on strategy and client relationships.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Why Partner With Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Experienced team delivering high‑quality code and SEO results.</li>
            <li>Scalable solutions for agencies of any size.</li>
            <li>Transparent reporting and white‑label options.</li>
            <li>Dedicated account managers for smooth collaboration.</li>
          </ul>
        </section>
        <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Our Services for Agencies</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Custom web development & redesigns.</li>
            <li>Technical SEO audits and implementation.</li>
            <li>Performance optimization & Core Web Vitals.</li>
            <li>AI‑driven automation & integrations.</li>
          </ul>
        </section>
      </div>
      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity duration-200"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
