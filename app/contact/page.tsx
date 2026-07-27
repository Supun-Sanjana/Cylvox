import Closing from "@/components/Closing";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Contact Cylvox | Start a Web Development Project",
  description:
    "Tell us what you're building. Cylvox replies within one business day with real next steps — no discovery-call runaround required to get a straight answer.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Cylvox | Start a Web Development Project",
    description: "Tell us what you're building. We reply within one business day.",
    url: "/contact",
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase bg-[#ccff00]/10 text-[#ccff00] rounded-full border border-[#ccff00]/20">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Tell us about <span className="text-[#ccff00]">your project.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            A few lines is enough to start: what you&apos;re building, where you&apos;re stuck, and roughly when you need it live. We reply within one business day with a straight answer, not a discovery-call funnel.
          </p>
        </div>
      </section>
      <Closing />
    </>
  );
}
