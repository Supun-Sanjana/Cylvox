"use client";

/**
 * The Aperture — the hero's focal object.
 *
 * A volumetric iris built purely from blurred gradient "blades" in screen
 * blend mode, with a dark pupil punched through the middle. It carries the
 * brand's two ideas at once: an aperture opens to *see* (the audit) and
 * closes to *seal* (the hardening). Soft and atmospheric, but ringed with
 * hairline mechanical outlines so it never reads as a decorative blob.
 */

import { motion, MotionValue, useTransform } from "framer-motion";

const OUTER = 7;
const INNER = 5;

type Props = {
  /** Normalised pointer offset for parallax, -1 → 1 on each axis. */
  offset?: { x: number; y: number };
  scrollYProgress: MotionValue<number>;
  className?: string;
};

export default function Aperture({ offset = { x: 0, y: 0 }, scrollYProgress, className = "" }: Props) {
  // Map scroll progress to rotation speed and iris widening
  const baseRotation = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const innerRotation = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const irisScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const pupilScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <motion.div
      className={`pointer-events-none relative aspect-square ${className}`}
      style={{
        x: offset.x * 26,
        y: offset.y * 20,
        rotate: baseRotation,
      }}
      aria-hidden="true"
    >
      {/* Outer atmospheric halo */}
      <div
        className="absolute -inset-[10%] rounded-full opacity-60 animate-aperture-breathe"
        style={{
          background:
            "radial-gradient(circle at 50% 52%, rgba(204,255,0,0.08) 0%, rgba(204,255,0,0.05) 42%, transparent 68%)",
          filter: "blur(70px)",
        }}
      />

      {/* Outer blade ring */}
      <div className="absolute inset-0 animate-aperture-spin">
        {Array.from({ length: OUTER }).map((_, i) => (
          <div
            key={`o-${i}`}
            className="aperture-blade"
            style={{
              transform: `rotate(${(360 / OUTER) * i}deg)`,
              opacity: 0.7,
              filter: "blur(20px)",
              background:
                "linear-gradient(178deg, rgba(204,255,0,0.15) 0%, rgba(204,255,0,0.1) 36%, rgba(11,49,46,0.15) 64%, transparent 88%)",
            }}
          />
        ))}
      </div>

      {/* Counter-rotating inner ring, tighter and hotter */}
      <motion.div className="absolute inset-[19%] animate-aperture-spin-rev" style={{ rotate: innerRotation, scale: irisScale }}>
        {Array.from({ length: INNER }).map((_, i) => (
          <div
            key={`i-${i}`}
            className="aperture-blade"
            style={{
              transform: `rotate(${(360 / INNER) * i + 18}deg)`,
              opacity: 0.65,
              filter: "blur(16px)",
              background:
                "linear-gradient(176deg, rgba(204,255,0,0.25) 0%, rgba(204,255,0,0.15) 42%, rgba(11,49,46,0.2) 74%, transparent 92%)",
            }}
          />
        ))}
      </motion.div>

      {/* Hairline mechanical leaves — the precision counterpoint */}
      <div className="absolute inset-[12%] animate-aperture-spin-rev">
        {Array.from({ length: OUTER }).map((_, i) => (
          <div
            key={`l-${i}`}
            className="absolute inset-0"
            style={{
              borderRadius: "46% 54% 50% 50% / 62% 58% 42% 38%",
              border: "1px solid rgba(204,255,0,0.15)",
              transformOrigin: "50% 78%",
              transform: `rotate(${(360 / OUTER) * i + 9}deg)`,
            }}
          />
        ))}
      </div>

      {/* Iris core. The conic mask lights it from the upper left and lets it
          fall away, so it reads as a diaphragm catching light — not an eye. */}
      <motion.div
        className="aperture-core animate-core-pulse absolute inset-[24%] rounded-full"
        style={{
          scale: irisScale,
          maskImage:
            "conic-gradient(from 186deg, rgba(0,0,0,0.12) 0deg, rgba(0,0,0,0.55) 62deg, #000 150deg, #000 232deg, rgba(0,0,0,0.3) 310deg, rgba(0,0,0,0.12) 360deg)",
          WebkitMaskImage:
            "conic-gradient(from 186deg, rgba(0,0,0,0.12) 0deg, rgba(0,0,0,0.55) 62deg, #000 150deg, #000 232deg, rgba(0,0,0,0.3) 310deg, rgba(0,0,0,0.12) 360deg)",
        }}
      />

      {/* Pupil — a soft void rather than a hard black disc */}
      <motion.div className="aperture-pupil absolute inset-[39%] rounded-full bg-[#0a0f14]/10 opacity-40 mix-blend-multiply" style={{ scale: pupilScale }} />

      {/* Concentric hairline rings */}
      <div className="aperture-ring absolute inset-[22%] rounded-full border border-[#ccff00]/10" />
      <div
        className="absolute inset-[38%] rounded-full"
        style={{ border: "1px solid rgba(204,255,0,0.2)" }}
      />
      <div
        className="absolute inset-[6%] rounded-full"
        style={{ border: "1px solid rgba(204,255,0,0.05)" }}
      />

      {/* , so the diffusion reads as film rather than CSS blur */}
      <div className=" absolute -inset-[18%] rounded-full" />
    </motion.div>
  );
}
