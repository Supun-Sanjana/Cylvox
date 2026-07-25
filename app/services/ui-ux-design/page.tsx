import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Premium UI/UX Design Services | Cylvox",
  description: "User-centric interface and experience design that converts. We craft digital experiences that are intuitive, beautiful, and aligned with your business goals.",
};

export default function UIUXDesignPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      <div className="max-w-4xl">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase bg-[#ccff00]/10 text-[#ccff00] rounded-full border border-[#ccff00]/20">
          Conversion-Engineered Design
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Premium <span className="text-[#ccff00]">UI/UX Design</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-16 leading-relaxed max-w-3xl">
          Design isn't just about making things look good—it's about making them work flawlessly. Our UI/UX design process focuses on user research, wireframing, prototyping, and creating stunning visual interfaces that drive engagement and conversions.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20 border-t border-white/10 pt-12">
          {/* Why You Need This */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-[#ccff00]">/</span> Why You Need This
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Stand Out From Slop:</strong> The web is flooded with generic templates. We build bespoke, high-end visual identities that instantly communicate trust and authority to your visitors.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Increase Conversion Rates:</strong> Confused users don't buy. We map out intuitive user journeys and remove friction points so your customers naturally flow toward your desired action.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Developer-Ready Assets:</strong> We don't just hand over messy Figma files. We provide structured design systems, tokens, and precise documentation that your engineering team can seamlessly integrate.</p>
              </li>
            </ul>
          </div>

          {/* What We Deliver */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-[#ccff00]">/</span> What We Deliver
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Interactive Prototypes:</strong> High-fidelity Figma prototypes that look and feel like the final product before a single line of code is written.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Comprehensive Design Systems:</strong> Reusable component libraries, typography scales, and color palettes that ensure consistency as your product grows.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">UX Audits & Wireframing:</strong> Data-driven analysis of your existing interface to identify drop-offs, followed by strategic wireframes to solve them.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#ccff00]/5 border border-[#ccff00]/20 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-black mb-4">Ready to elevate your digital presence?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Let's craft an interface that your users will love and your competitors will envy.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#ccff00] text-[#09080e] font-black rounded-full
                       px-8 py-4 shadow-[0_4px_20px_rgba(204,255,0,0.3)]
                       hover:bg-[#a3cc00] transition-all duration-200"
          >
            <span>Discuss Your Design Needs</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
