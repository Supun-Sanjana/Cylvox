import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, baseUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Agency Partnerships — White-Label Engineering | Cylvox",
  description: "White-label web development, technical SEO, and AI automation for digital agencies. Direct-to-engineer execution, zero retainer bloat.",
  alternates: { canonical: `${baseUrl}/agency-partners` },
  openGraph: {
    title: "Agency Partnerships — White-Label Engineering | Cylvox",
    description: "White-label web development, technical SEO, and AI automation for digital agencies. Direct-to-engineer execution, zero retainer bloat.",
    url: `${baseUrl}/agency-partners`,
    siteName: "Cylvox",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Cylvox Agency Partnerships" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency Partnerships — White-Label Engineering | Cylvox",
    description: "White-label web development, technical SEO, and AI automation for digital agencies.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Agency Partners", path: "/agency-partners" },
]);

export default function AgencyPartnersPage() {
  return (
    <div className="bg-background">
      <JsonLd data={breadcrumbs} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-left">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-foreground tracking-tight leading-[1.05]">
            Scale your agency with <br/><em className="text-primary not-italic">elite engineering</em>.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            We provide white-label technical execution for creative agencies, PR firms, and growth consultants. You manage the client relationship; we build the bulletproof infrastructure. We are the silent technical partner behind your biggest wins.
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="relative aspect-video lg:aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden border border-border shadow-sm">
            <img 
              src="/placeholders/squish_dune_hero.jpg" 
              alt="Golden sand merging with geometric monoliths" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why a Solo Studio */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
        <h2 className="text-4xl font-display font-semibold mb-12 text-foreground text-center">The Silent Partner Advantage</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-surface border border-border rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-primary">No Telephone Game</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              You speak directly to the engineer building the system. No account managers diluting the requirements or slowing down communication.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-primary">True White-Labeling</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We operate completely behind the scenes. We can even join your Slack channels under your agency's email address to seamlessly support your team.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Zero Retainer Bloat</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              You only pay for the exact technical execution required for the project. High margins for your agency, elite results for your client.
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies Bento */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-display font-semibold mb-12 text-foreground text-center">Core Engineering Competencies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="md:col-span-1 bg-surface border border-border rounded-[2.5rem] overflow-hidden group">
            <div className="relative aspect-square w-full">
              <img src="/placeholders/squish_dune_compass.jpg" alt="Technical SEO Compass" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Technical SEO & Audits</h3>
              <p className="text-muted-foreground text-lg">We diagnose and fix complex indexing issues, schema errors, and performance bottlenecks that standard SEO plugins can't reach.</p>
            </div>
          </div>

          <div className="md:col-span-1 bg-surface border border-border rounded-[2.5rem] overflow-hidden group">
            <div className="relative aspect-square w-full">
              <img src="/placeholders/squish_dune_flow.jpg" alt="Performance Flow" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Performance Replatforming</h3>
              <p className="text-muted-foreground text-lg">Migrating slow, monolithic WordPress sites to lightning-fast Next.js edge architectures to crush Core Web Vitals.</p>
            </div>
          </div>

          <div className="md:col-span-1 bg-surface border border-border rounded-[2.5rem] overflow-hidden group">
            <div className="relative aspect-square w-full">
              <img src="/placeholders/squish_dune_monolith.jpg" alt="Secure Monolith" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Secure Architecture</h3>
              <p className="text-muted-foreground text-lg">Building custom, high-concurrency applications with strict Row Level Security (RLS) and bulletproof backends.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-border">
        <h2 className="text-4xl font-display font-semibold mb-16 text-foreground text-center">How The Partnership Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border z-0"></div>
          
          <div className="relative z-10 flex-1 text-center bg-background px-4">
            <div className="w-16 h-16 mx-auto bg-surface border border-border rounded-full flex items-center justify-center text-xl font-bold text-primary mb-6 shadow-sm">1</div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">You Close</h3>
            <p className="text-muted-foreground text-lg">You secure the client, manage the strategy, and lead the communication.</p>
          </div>

          <div className="relative z-10 flex-1 text-center bg-background px-4">
            <div className="w-16 h-16 mx-auto bg-surface border border-border rounded-full flex items-center justify-center text-xl font-bold text-primary mb-6 shadow-sm">2</div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">We Align</h3>
            <p className="text-muted-foreground text-lg">We define the technical scope and architecture together in the background.</p>
          </div>

          <div className="relative z-10 flex-1 text-center bg-background px-4">
            <div className="w-16 h-16 mx-auto bg-surface border border-border rounded-full flex items-center justify-center text-xl font-bold text-primary mb-6 shadow-sm">3</div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">You Deliver</h3>
            <p className="text-muted-foreground text-lg">We ship the flawless code; you present it to the client and take the credit.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-surface border-t border-border">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-foreground tracking-tight">
          Ready to scale your technical capacity?
        </h2>
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-10 py-5 text-lg transition-transform duration-300 hover:scale-[1.03]"
        >
          Book a Strategy Call
        </a>
      </section>
    </div>
  );
}
