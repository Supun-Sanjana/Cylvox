import Process from "@/components/Process";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "About Cylvox | Independent Web Engineering Solo Studio",
  description:
    "Cylvox is an independent, engineer-led solo studio. The person who builds your product is who you talk to directly — no account managers, no black-box handoffs.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Cylvox | Independent Web Engineering Solo Studio",
    description:
      "An independent, engineer-led solo studio. No account managers, no black-box handoffs.",
    url: "/about",
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase bg-[#ccff00]/10 text-[#ccff00] rounded-full border border-[#ccff00]/20">
            Independent & Engineer-Led
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Small team. <span className="text-[#ccff00]">No black boxes.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-5">
            Cylvox operates as an independent solo studio to eliminate bloat. Every project is engineered directly without middlemen — no account managers relaying messages, no offshore subcontractors you&apos;ll never meet.
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            This studio was built around a specific gap: AI tools make it fast to ship something that looks finished. Making it actually hold up — under real traffic, a security review, or a proper SEO audit — is a different job. That&apos;s the work we specialize in: hardening, scaling, and optimizing systems that were built fast enough to have skipped a few steps.
          </p>
        </div>
      </section>
      <Process />
    </>
  );
}
