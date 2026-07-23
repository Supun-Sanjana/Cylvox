"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Closing() {
  return (
    <section
      id="contact"
      className="px-[clamp(24px,8.5vw,140px)] py-[clamp(105px,13vw,190px)] relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #181126, #09080e 70%)",
        color: "#f7f2ec",
      }}
    >
      {/* Background glow circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full filter blur-[120px] pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)" }}
      />

      <div className="relative z-10 max-w-4xl">
        <Reveal direction="up">
          <p className="flex items-center gap-2 mb-5.75 text-[11px] font-extrabold
                        tracking-[0.18em] uppercase text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Have a project or vibe-coded app?
          </p>

          <h2
            className="font-[family-name:var(--font-syne)] font-black tracking-[-0.075em] leading-[0.96]
                       text-[clamp(42px,5.8vw,86px)] max-w-3xl mb-9 text-white"
          >
            Let&apos;s build the system
            <br />
            people{" "}
            <em className="font-[Georgia,serif] font-normal tracking-[-0.085em] text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-300 to-indigo-200 not-italic">
              remember.
            </em>
          </h2>

          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.96 }}
            href="mailto:hello@cylvox.com"
            className="inline-flex items-center gap-2.5 bg-white text-[#09080e] hover:bg-[#c084fc] hover:text-white rounded-full
                       text-[14px] font-extrabold px-7 py-4.5 shadow-[0_6px_30px_rgba(255,255,255,0.3)]
                       transition-all duration-300"
          >
            Start a conversation <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.5]" />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}