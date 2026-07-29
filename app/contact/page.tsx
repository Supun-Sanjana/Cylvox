import ContactForm from "@/components/ContactForm";
import { SectionLabel } from "@/components/SectionLabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Cylvox",
  description: "Start a conversation with Cylvox to engineer your next digital system.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Side: Copy */}
        <div className="pt-4">
          <SectionLabel>Get In Touch</SectionLabel>
          <h1 className="mt-5 font-display font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-foreground mb-6">
            Let's engineer your next <em className="text-primary not-italic">unfair advantage.</em>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Whether you need a vibe-coded app hardened for production, an autonomous n8n pipeline, or a sub-second headless CMS—we're ready to build. Fill out the form and a senior engineer will be in touch within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">Email Us Directly</span>
              <a href="mailto:hello@cylvox.com" className="text-primary text-xl font-medium hover:underline">
                hello@cylvox.com
              </a>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">Office Hours</span>
              <span className="text-muted-foreground">Monday – Friday, 9am – 6pm EST</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
