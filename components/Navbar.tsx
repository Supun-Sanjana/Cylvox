"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Main navigation"
      className="fixed top-0 inset-x-0 z-[99999] flex justify-center px-3 pt-3 sm:px-6 sm:pt-4 pointer-events-none"
    >
      <div
        className="pointer-events-auto flex items-center justify-between gap-4 w-[min(1200px,100%)] min-h-14
                   px-4 py-2 sm:px-6 sm:py-2.5
                   border border-white/25 rounded-full
                   bg-[#0b0914]/92 backdrop-blur-3xl saturate-200
                   shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.3)]"
        style={{
          WebkitBackdropFilter: "blur(24px)",
          backdropFilter: "blur(24px)",
        }}
      >
        {/* Brand Logo */}
        <a
          href="#top"
          className="font-[family-name:var(--font-syne)] text-[18px] sm:text-[20px] font-black tracking-[-0.07em]
                     text-white flex items-center gap-0.5 shrink-0"
        >
          CYLVOX<span className="text-[#8b5cf6] font-black text-xl leading-none ml-0.5">•</span>
        </a>

        {/* Navigation Links */}
        <div className="flex gap-[clamp(16px,2.2vw,40px)] text-[13px] font-semibold max-md:hidden">
          {[
            { href: "#services", label: "Services" },
            { href: "#deck", label: "Capabilities Deck" },
            { href: "#proof", label: "Results" },
            { href: "#process", label: "Process" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-white/90 hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA BUTTON: WHITE BACKGROUND WITH VIOLET TEXT */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          href="#contact"
          className="inline-flex items-center gap-1.5 bg-white font-black rounded-full
                     text-[12px] sm:text-[13px] px-4.5 py-2 sm:px-5.5 sm:py-2.5
                     shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                     hover:bg-purple-50 transition-all duration-200 shrink-0"
          style={{ color: "#7c3aed" }}
        >
          <span style={{ color: "#7c3aed" }} className="text-[#7c3aed] font-black">
            Book Audit
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3] text-[#7c3aed]" style={{ color: "#7c3aed" }} />
        </motion.a>
      </div>
    </motion.nav>
  );
}
