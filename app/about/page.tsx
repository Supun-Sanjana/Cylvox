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
  twitter: {
    card: "summary_large_image" as const,
    title: "About Cylvox | Independent Web Engineering Solo Studio",
    description: "Cylvox is an independent, engineer-led solo studio. The person who builds your product is who you talk to directly.",
    images: ["/og-image.jpg"],
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
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-foreground bg-surface rounded-full border border-border shadow-sm mb-8">
              Independent & Engineer-Led
            </div>
            <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight leading-[1.05]">
              One engineer. <em className="text-primary not-italic">No black boxes.</em>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-5">
              Cylvox operates as an independent solo studio to eliminate bloat. Every project is engineered directly without middlemen — no account managers relaying messages, no offshore subcontractors you&apos;ll never meet.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              This studio was built around a specific gap: AI tools make it fast to ship something that looks finished. Making it actually hold up — under real traffic, a security review, or a proper SEO audit — is a different job. That&apos;s the work we specialize in: hardening, scaling, and optimizing systems that were built fast enough to have skipped a few steps.
            </p>
          </div>
          <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden border border-border shadow-sm">
            <img
              src="/placeholders/squish_dune_solo_figure.jpg"
              alt="Ethereal representation of a lone, highly skilled engineer"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <Process />
    </>
  );
}
