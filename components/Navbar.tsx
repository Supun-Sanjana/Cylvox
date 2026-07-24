"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Main navigation"
      className="fixed top-0 inset-x-0 z-[999999] flex justify-center px-3 pt-3 sm:px-6 sm:pt-4 pointer-events-none"
    >
      <div
        className="pointer-events-auto flex items-center justify-between gap-4 w-[min(1200px,100%)] min-h-14
                   px-4 py-2 sm:px-6 sm:py-2.5
                   border border-white/20 rounded-full
                   bg-[#0b0914]/40 backdrop-blur-3xl saturate-150
                   shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]"
        style={{
          WebkitBackdropFilter: "blur(24px)",
          backdropFilter: "blur(24px)",
        }}
      >
        {/* Brand Logo */}
        <a
          href="#top"
          className="text-[18px] sm:text-[20px] font-black tracking-[-0.07em]
                     text-white flex items-center gap-0.5 shrink-0"
        >
          <span className="text-[#ccff00] font-black">C</span> YLVOX
        </a>

        {/* Navigation Links */}
        <div className="flex gap-[clamp(14px,1.8vw,36px)] text-[13px] font-semibold max-md:hidden">
          {[
            { href: "#services", label: "Services" },
            { href: "#cases", label: "Case Studies" },
            { href: "#proof", label: "Results" },
            { href: "#process", label: "Process" },
          ].map(({ href, label }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <a
                key={href}
                href={href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-[#ccff00] drop-shadow-[0_0_8px_rgba(204,255,0,0.5)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* CTA BUTTON: LIME BACKGROUND WITH DARK TEXT */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          href="#contact"
          className="inline-flex items-center gap-1.5 bg-[#ccff00] text-[#09080e] font-black rounded-full
                     text-[12px] sm:text-[13px] px-5 py-2 sm:py-2.5
                     shadow-[0_4px_20px_rgba(204,255,0,0.3)]
                     hover:bg-[#a3cc00] transition-all duration-200 shrink-0"
        >
          <span>Let's Talk</span>
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
        </motion.a>
      </div>
    </motion.nav>
  );
}
