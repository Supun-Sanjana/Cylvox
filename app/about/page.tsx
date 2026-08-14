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
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About Cylvox Solo Studio" }],
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

      {/* The Engineer Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border mt-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-foreground bg-surface rounded-full border border-border shadow-sm mb-8">
            The Person Behind Cylvox
          </div>
          <h2 className="text-4xl md:text-5xl font-display mb-8 tracking-tight text-foreground">
            Supun Sanjana
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Cylvox isn&apos;t a brand name for an agency — it&apos;s me. I&apos;m a software engineer based in Sri Lanka, working full-time in software engineering and IT support by day, and running Cylvox in the hours after.
            </p>
            <p>
              I&apos;ve spent years building internal tools, automation pipelines, and production systems — the kind of work that has to hold up, not just demo well. Cylvox is where I bring that same standard to client projects: real performance numbers, real SEO results, and code I&apos;d be comfortable putting my name on.
            </p>
            <p>
              When I&apos;m not writing code, I&apos;m usually deep in an Arduino build, tearing into electronics, or documenting what I&apos;m learning as I work toward AWS/DevOps certifications — because the standard I hold my own work to keeps moving.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-border text-primary font-semibold text-lg flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Based in Sri Lanka. Working with clients worldwide.
          </div>
        </div>
      </section>

      <Process />
    </>
  );
}
