import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agency Partnerships | Cylvox",
  description: "White-label web development, technical SEO, and AI automation services for digital agencies.",
  alternates: { canonical: "/agency-partners" },
};

export default function AgencyPartnersPage() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
          Scale your agency with <span className="text-primary italic">expert engineering</span>.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          We provide elite white-label technical execution for creative agencies, PR firms, and growth consultants. You manage the client relationship; we build the bulletproof infrastructure.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-surface border border-border rounded-3xl shadow-sm p-8 hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-display font-semibold mb-6 text-foreground">Why Partner With Us?</h2>
          <ul className="space-y-4 text-muted-foreground text-lg">
            <li className="flex gap-3"><span className="font-bold text-foreground opacity-50">—</span> Experienced team delivering high-quality code and SEO results.</li>
            <li className="flex gap-3"><span className="font-bold text-foreground opacity-50">—</span> Scalable solutions for agencies of any size.</li>
            <li className="flex gap-3"><span className="font-bold text-foreground opacity-50">—</span> Transparent reporting and white-label options.</li>
            <li className="flex gap-3"><span className="font-bold text-foreground opacity-50">—</span> Dedicated account managers for smooth collaboration.</li>
          </ul>
        </section>
        <section className="bg-surface border border-border rounded-3xl shadow-sm p-8 hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-display font-semibold mb-6 text-foreground">Our Services for Agencies</h2>
          <ul className="space-y-4 text-muted-foreground text-lg">
            <li className="flex gap-3"><span className="font-bold text-foreground opacity-50">—</span> Custom web development & redesigns.</li>
            <li className="flex gap-3"><span className="font-bold text-foreground opacity-50">—</span> Technical SEO audits and implementation.</li>
            <li className="flex gap-3"><span className="font-bold text-foreground opacity-50">—</span> Performance optimization & Core Web Vitals.</li>
            <li className="flex gap-3"><span className="font-bold text-foreground opacity-50">—</span> AI-driven automation & integrations.</li>
          </ul>
        </section>
      </div>
      <div className="mt-16 text-center">
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-8 py-4 transition-transform duration-300 hover:scale-[1.03]"
        >
          Let's Talk Partnerships
        </a>
      </div>
    </section>
  );
}
