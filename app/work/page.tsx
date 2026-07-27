import CaseStudies from "@/components/CaseStudies";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Case Studies | Web Development & Automation | Cylvox",
  description:
    "See how Cylvox hardens AI-assisted apps, migrates slow sites to modern stacks, and builds automation that runs without supervision. Real projects, not theory.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Case Studies | Web Development & Automation | Cylvox",
    description: "Real projects: audits, migrations, performance, and automation builds.",
    url: "/work",
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase bg-[#ccff00]/10 text-[#ccff00] rounded-full border border-[#ccff00]/20">
            Case Studies
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Recent <span className="text-[#ccff00]">engineering work.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            A look at the kind of problems we take on — hardening AI-assisted apps before they scale, migrating slow legacy sites to modern stacks, and building automation that runs without supervision. Each case study below breaks down the approach, not just the result.
          </p>
        </div>
      </section>
      <CaseStudies />
    </>
  );
}
