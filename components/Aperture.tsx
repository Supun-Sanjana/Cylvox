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

const OUTER = 7;
const INNER = 5;

type Props = {
  /** Normalised pointer offset for parallax, -1 → 1 on each axis. */
  offset?: { x: number; y: number };
  className?: string;
};

export default function Aperture({ offset = { x: 0, y: 0 }, className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none relative aspect-square ${className}`}
      style={{
        transform: `translate3d(${offset.x * 26}px, ${offset.y * 20}px, 0)`,
        transition: "transform 700ms cubic-bezier(0.22, 1, 0.28, 1)",
      }}
      aria-hidden="true"
    >
      {/* Outer atmospheric halo */}
      <div
        className="absolute -inset-[10%] rounded-full opacity-60 animate-aperture-breathe"
        style={{
          background:
            "radial-gradient(circle at 50% 52%, rgba(20,130,118,0.26) 0%, rgba(11,49,46,0.16) 42%, transparent 68%)",
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
              opacity: 0.42,
              filter: "blur(26px)",
              background:
                "linear-gradient(178deg, rgba(204,255,0,0.20) 0%, rgba(96,196,178,0.20) 36%, rgba(20,130,118,0.18) 64%, transparent 88%)",
            }}
          />
        ))}
      </div>

      {/* Counter-rotating inner ring, tighter and hotter */}
      <div className="absolute inset-[19%] animate-aperture-spin-rev">
        {Array.from({ length: INNER }).map((_, i) => (
          <div
            key={`i-${i}`}
            className="aperture-blade"
            style={{
              transform: `rotate(${(360 / INNER) * i + 18}deg)`,
              opacity: 0.34,
              filter: "blur(20px)",
              background:
                "linear-gradient(176deg, rgba(233,255,196,0.34) 0%, rgba(204,255,0,0.20) 42%, rgba(20,130,118,0.12) 74%, transparent 92%)",
            }}
          />
        ))}
      </div>

      {/* Hairline mechanical leaves — the precision counterpoint */}
      <div className="absolute inset-[12%] animate-aperture-spin-rev">
        {Array.from({ length: OUTER }).map((_, i) => (
          <div
            key={`l-${i}`}
            className="absolute inset-0"
            style={{
              borderRadius: "46% 54% 50% 50% / 62% 58% 42% 38%",
              border: "1px solid rgba(233,239,236,0.085)",
              transformOrigin: "50% 78%",
              transform: `rotate(${(360 / OUTER) * i + 9}deg)`,
            }}
          />
        ))}
      </div>

      {/* Iris core. The conic mask lights it from the upper left and lets it
          fall away, so it reads as a diaphragm catching light — not an eye. */}
      <div
        className="aperture-core animate-core-pulse absolute inset-[24%] rounded-full"
        style={{
          maskImage:
            "conic-gradient(from 186deg, rgba(0,0,0,0.12) 0deg, rgba(0,0,0,0.55) 62deg, #000 150deg, #000 232deg, rgba(0,0,0,0.3) 310deg, rgba(0,0,0,0.12) 360deg)",
          WebkitMaskImage:
            "conic-gradient(from 186deg, rgba(0,0,0,0.12) 0deg, rgba(0,0,0,0.55) 62deg, #000 150deg, #000 232deg, rgba(0,0,0,0.3) 310deg, rgba(0,0,0,0.12) 360deg)",
        }}
      />

      {/* Pupil — a soft void rather than a hard black disc */}
      <div className="aperture-pupil absolute inset-[39%] rounded-full opacity-80" />

      {/* Concentric hairline rings */}
      <div className="aperture-ring absolute inset-[22%] rounded-full" />
      <div
        className="absolute inset-[38%] rounded-full"
        style={{ border: "1px solid rgba(204,255,0,0.14)" }}
      />
      <div
        className="absolute inset-[6%] rounded-full"
        style={{ border: "1px solid rgba(233,239,236,0.05)" }}
      />

      {/* Grain, so the diffusion reads as film rather than CSS blur */}
      <div className="grain absolute -inset-[18%] rounded-full" />
    </div>
  );
}
