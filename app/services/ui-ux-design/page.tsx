import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata = {
  title: "Premium UI/UX Design Services | Cylvox",
  description: "User-centric interface and experience design that converts. We craft digital experiences that are intuitive, beautiful, and aligned with your business goals.",
  alternates: { canonical: "/services/ui-ux-design" },
  openGraph: {
    title: "Premium UI/UX Design Services | Cylvox",
    description: "User-centric interface and experience design that converts. We craft digital experiences that are intuitive, beautiful, and aligned with your business goals.",
    url: "/services/ui-ux-design",
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Cylvox UI/UX Design Services" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Premium UI/UX Design Services | Cylvox",
    description: "User-centric interface and experience design that converts. We craft digital experiences that are intuitive, beautiful, and aligned with your business goals.",
    images: ["/og-image.jpg"],
  },
};

export default function UIUXDesignPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-foreground">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "UI/UX Design", path: "/services/ui-ux-design" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "UI/UX Design",
          description:
            "User-centric interface and experience design that converts. We craft digital experiences that are intuitive, beautiful, and aligned with your business goals.",
          path: "/services/ui-ux-design",
          serviceType: "UI/UX Design",
        })}
      />
      <div className="max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "UI/UX Design" },
          ]}
        />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-foreground bg-surface rounded-full border border-border shadow-sm mb-8">
          Conversion-Engineered Design
        </div>
        <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight leading-[1.05]">
          Premium <em className="text-primary not-italic">UI/UX Design</em>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl">
          Design isn't just about making things look good—it's about making them work flawlessly. Our UI/UX design process focuses on user research, wireframing, prototyping, and creating stunning visual interfaces that drive engagement and conversions.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20 border-t border-border pt-12">
          {/* Why You Need This */}
          <div>
            <h2 className="text-3xl font-display font-semibold mb-6 text-foreground flex items-center gap-2">Why You Need This
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Stand Out From Slop:</strong> The web is flooded with generic templates. We build bespoke, high-end visual identities that instantly communicate trust and authority to your visitors.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Increase Conversion Rates:</strong> Confused users don't buy. We map out intuitive user journeys and remove friction points so your customers naturally flow toward your desired action.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Developer-Ready Assets:</strong> We don't just hand over messy Figma files. We provide structured design systems, tokens, and precise documentation that your engineering team can seamlessly integrate.</p>
              </li>
            </ul>
          </div>

          {/* What We Deliver */}
          <div>
            <h2 className="text-3xl font-display font-semibold mb-6 text-foreground flex items-center gap-2">What We Deliver
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Interactive Prototypes:</strong> High-fidelity Figma prototypes that look and feel like the final product before a single line of code is written.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Comprehensive Design Systems:</strong> Reusable component libraries, typography scales, and color palettes that ensure consistency as your product grows.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">UX Audits & Wireframing:</strong> Data-driven analysis of your existing interface to identify drop-offs, followed by strategic wireframes to solve them.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-[2.5rem] p-10 md:p-16 text-center shadow-sm">
          <h3 className="text-4xl font-display tracking-tight mb-4 text-foreground">Ready to elevate your digital presence?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Let's craft an interface that your users will love and your competitors will envy.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full
                       px-8 py-4 transition-transform duration-300 hover:scale-[1.03]"
          >
            <span>Discuss Your Design Needs</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
