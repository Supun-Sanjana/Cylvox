import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Premium UI/UX Design Services | Cylvox",
  description: "User-centric interface and experience design that converts. We craft digital experiences that are intuitive, beautiful, and aligned with your business goals.",
};

export default function UIUXDesignPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Premium <span className="text-[#ccff00]">UI/UX Design</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
          Design isn't just about making things look good—it's about making them work flawlessly. Our UI/UX design process focuses on user research, wireframing, prototyping, and creating stunning visual interfaces that drive engagement and conversions.
        </p>

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
  );
}
