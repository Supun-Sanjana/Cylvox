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
        
        {/* Left Side: Visual & Copy */}
        <div className="relative w-full h-full min-h-[500px] lg:min-h-[700px] rounded-[2.5rem] overflow-hidden p-8 sm:p-12 flex flex-col justify-between shadow-md">
          {/* Background Image */}
          <img
            src="/placeholders/squish_crystals_1786554808524.jpg"
            alt="Abstract crystal aesthetic"
            className="absolute inset-0 w-full h-full object-cover saturate-150 contrast-125"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-primary-foreground bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-sm mb-8">
              Start a Conversation
            </div>
            <h1 className="font-display font-semibold text-5xl sm:text-6xl tracking-tight leading-[1.05] text-white mb-6">
              Let's engineer your next <em className="text-primary not-italic">unfair advantage.</em>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-md">
              Whether you need a vibe-coded app hardened for production, an autonomous pipeline, or a high-performance headless CMS—we're ready to build. Let's make something incredible.
            </p>
          </div>

          <div className="relative z-10 space-y-6 mt-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl w-fit">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">Email Us Directly</span>
              <a href="mailto:hello@cylvox.com" className="text-white text-xl font-medium hover:text-primary transition-colors">
                hello@cylvox.com
              </a>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">Office Hours</span>
              <span className="text-white/90 font-medium">Monday – Friday, 9am – 6pm EST</span>
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
