"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [pointer, setPointer] = useState({ x: 74, y: 40 });
  const [isHovering, setIsHovering] = useState(false);

  // Track pointer position relative to hero bounds
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      setPointer({
        x: ((e.clientX - r.left) / r.width)  * 100,
        y: ((e.clientY - r.top)  / r.height) * 100,
      });
    };
    hero.addEventListener("pointermove", onMove);
    return () => hero.removeEventListener("pointermove", onMove);
  }, []);

  // CSS custom properties passed via style — Tailwind can't do runtime var chains
  const pointerVars = {
    "--x":      `${pointer.x}%`,
    "--y":      `${pointer.y}%`,
    "--dx":     `${(pointer.x - 50) * 1.4}px`,
    "--dy":     `${(pointer.y - 50) * 1.1}px`,
    "--tilt-x": `${(pointer.y - 50) * -0.08}deg`,
    "--tilt-y": `${(pointer.x - 50) *  0.08}deg`,
  } as React.CSSProperties;

  return (
    <section
      ref={heroRef}
      id="top"
      style={pointerVars}
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
      className={`hero-shell relative overflow-hidden isolate rounded-[18px]
                  m-3 min-h-[calc(100svh-24px)] bg-[#f2efe9]
                  max-sm:m-1.75 max-sm:rounded-[13px] max-sm:min-h-[calc(100svh-14px)]
                  ${isHovering ? "is-hovering" : ""}`}
    >

      {/* ── Background art ──────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 58% 64% at 57% 24%, #d6eff7a8 0%, #afdaf0a0 35%, transparent 72%),
            radial-gradient(ellipse 60% 65% at 8%  87%, #a6a7e38f 0%, transparent 73%),
            linear-gradient(180deg, #9acee8 0%, #79b7df 35%, #4f71ca 70%, #2344a2 100%)
          `,
        }}
      >
        {/* Static dot grid */}
        <div className="dot-grid-base absolute inset-0 opacity-50" />

        {/* Cursor-reactive dot grid — mask follows --x / --y */}
        <div
          className={`dot-grid-active absolute inset-0 transition-opacity duration-500
                      ${isHovering ? "opacity-[0.68]" : "opacity-0"}`}
        />

        {/* Film grain */}
        <div className="grain absolute inset-0" />

        {/* Cursor hint — desktop only */}
        <p
          className="absolute z-2 top-28 right-[clamp(24px,4.5vw,72px)]
                     flex items-center gap-2 m-0
                     text-[#5c5552] text-[10px] tracking-[0.11em] uppercase
                     max-sm:hidden"
        >
          <span className="relative shrink-0 w-7 h-7 border border-[#1c191750] rounded-full">
            <span className="absolute inset-2.25 rounded-full bg-[#7c3aed]" />
          </span>
          Move across the field
        </p>
      </div>

      {/* ── Navbar ──────────────────────────────────────────── */}
      <nav
        aria-label="Main navigation"
        className="absolute z-5 inset-x-0 top-0 flex justify-center px-5 pt-4.5"
      >
        <div
          className="flex items-center justify-between gap-8 w-[min(760px,100%)] min-h-14
                     px-5 py-1.75 pr-2
                     border border-white/60 rounded-full
                     bg-[#f8f5f0]/66 backdrop-blur-[18px] saturate-145
                     shadow-[0_12px_38px_#46306116,inset_0_1px_0_#fff]
                     max-sm:min-h-12.25 max-sm:px-3.75 max-sm:py-1.5 max-sm:pr-1.5"
        >
          <a
            href="#top"
            className="font-[family-name:var(--font-syne)] text-[18px] font-extrabold tracking-[-0.08em]
                       text-[#1c1917]"
          >
            CYLVOX<span className="text-[#7c3aed]">.</span>
          </a>

          {/* Nav links — hidden on mobile */}
          <div className="flex gap-[clamp(19px,2.5vw,40px)] text-[12px] font-semibold max-sm:hidden">
            {[
              { href: "#services", label: "Services" },
              { href: "#proof",    label: "Results"  },
              { href: "#process",  label: "Process"  },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-[#1c1917] opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#ffffff] text-gray-100 rounded-full
                       text-[13px] font-bold px-4.5 py-3 pr-3.75
                       hover:-translate-y-0.5 transition-all duration-200
                       max-sm:text-[11px] max-sm:px-3.5 max-sm:py-2.5"
          >
            Let&apos;s talk <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* ── Hero copy ────────────────────────────────────────── */}
      <div
        className="absolute z-3 text-white
                   bottom-[clamp(55px,11vh,120px)] left-[clamp(24px,8.5vw,140px)] max-w-140
                   [text-shadow:0_2px_18px_#183b8b33]
                   max-sm:bottom-9.5 max-sm:left-5.5 max-sm:right-5.5 max-sm:max-w-none"
      >
        <p className="flex items-center gap-2 m-0 mb-5.75
                      text-[10px] font-extrabold tracking-[0.15em] uppercase text-[#f5f7ff]
                      max-sm:mb-4.25 max-sm:text-[8px]">
          <span className="w-1.75 h-1.75 rounded-full bg-[#7c3aed] shadow-[0_0_0_5px_#7c3aed18]" />
          Independent digital agency
        </p>

        <h1
          className="font-(family-name:--font-syne) font-bold mb-0
                     leading-[0.91] tracking-[-0.075em]
                     text-[clamp(51px,6.3vw,102px)]
                     max-sm:text-[clamp(49px,15vw,70px)]"
        >
          Make your<br />
          <em className="font-[Georgia,serif] font-normal tracking-[-0.085em] text-[#f0dcff] not-italic">
            next move
          </em>
          <br />matter.
        </h1>

        <p className="max-w-92.5 mt-7 mb-6.75 text-[15px] leading-[1.55] text-[#eef3ff]
                      max-sm:mt-5 max-sm:mb-5 max-sm:max-w-77.5 max-sm:text-[13px]">
          We design, develop, and optimize digital systems for ambitious brands
          ready to be impossible to ignore.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-[#1c1917] text-white rounded-full
                     text-[13px] font-bold px-5.75 py-4 pr-4.75
                     hover:-translate-y-0.5 hover:bg-[#7c3aed] transition-all duration-200
                     max-sm:px-4.75 max-sm:py-3.5 max-sm:pr-4"
        >
          Start a project <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* ── Hero meta — desktop only ─────────────────────────── */}
      <div
        className="absolute z-3 bottom-10.5 right-[clamp(24px,4.5vw,72px)] w-[205px]
                   text-[11px] leading-normal text-[#eff4ff]
                   [text-shadow:0_2px_13px_#183b8b2e]
                   max-sm:hidden"
      >
        <div
          className="tilt-card px-4 py-3.5 text-[#1c1917] bg-[#fffffff0]
                     border border-white rounded-[13px]
                     shadow-[0_16px_35px_#16326b29,inset_0_1px_0_#fff]"
        >
          Sri Lanka · Working globally
          <p className=" border-b border-gray-300/80 mt-5"></p>
           <p className="m-0 mt-2 flex justify-between border-t border-[#edf4ff6b] pt-2.5">
          Scroll to explore{" "}
          <b className="text-white text-[17px] font-normal"><ArrowDown className="w-4 h-4 text-black"/></b>
        </p>
        </div>

       
      </div>

    </section>
  );
}