"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

import ContactForm from "./ContactForm";

export default function Closing() {
  return (
    <section
      id="contact"
      className="px-4 py-20 sm:px-8 sm:py-32 relative overflow-hidden bg-background"
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
          className="w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] filter blur-[90px] opacity-100 mix-blend-screen"
          style={{ background: "radial-gradient(circle, rgba(204, 255, 0, 0.45) 0%, rgba(204, 255, 0, 0.2) 40%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="flex flex-col text-left">
            <Reveal direction="up">
              <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4 block">
                Start a project
              </span>
              <h2 className="font-display tracking-tight leading-[1.1] text-5xl sm:text-6xl lg:text-7xl mb-6 text-foreground">
                Let&apos;s build something
                <br />
                <em className="text-primary not-italic">
                  unforgettable.
                </em>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                Whether you need a technical SEO overhaul, a custom Next.js web application, or automated API workflows—we're ready to engineer your growth. Reach out and we'll get back to you within 24 hours.
              </p>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.2}>
            <ContactForm />
          </Reveal>

        </div>
      </div>
    </section>
  );
}
