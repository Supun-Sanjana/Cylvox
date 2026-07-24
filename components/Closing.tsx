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
        background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 25%, #1d4ed8 60%, #0f172a 100%)",
        color: "#ffffff",
      }}
    >
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.4, 0.9, 1.3, 1],
            x: ["-25vw", "30vw", "-10vw", "-30vw", "-25vw"],
            y: ["-20vh", "25vh", "30vh", "-25vh", "-20vh"],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["50%", "40% 60% 70% 30%", "60% 40% 30% 70%", "50%"],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] filter blur-[120px] opacity-80"
          style={{ background: "radial-gradient(circle, rgba(244, 114, 182, 0.7) 0%, rgba(251, 146, 60, 0.5) 40%, transparent 75%)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl">
        <Reveal direction="up">
          <p className="flex items-center gap-2 mb-5.75 text-[11px] font-extrabold
                        tracking-[0.18em] uppercase text-purple-300">
            Have a project or vibe-coded app?
          </p>

          <h2
            className="font-[family-name:var(--font-syne)] font-black tracking-[-0.075em] leading-[0.96]
                       text-[clamp(42px,5.8vw,86px)] max-w-3xl mb-9 text-white"
          >
            Let&apos;s build the system
            <br />
            people{" "}
            <em className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-300 to-indigo-200 not-italic">
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