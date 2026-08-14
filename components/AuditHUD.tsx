"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

type Props = {
  scrollYProgress: MotionValue<number>;
};

const CHIPS = [
  { label: "TLS check", x: "-90%", y: "-40%", delay: 0.1 },
  { label: "LCP 1.2s", x: "85%", y: "-60%", delay: 0.3 },
  { label: "no leaks", x: "100%", y: "30%", delay: 0.5 },
  { label: "RLS active", x: "-100%", y: "35%", delay: 0.7 },
];

export default function AuditHUD({ scrollYProgress }: Props) {
  // HUD starts fully visible and fades out later in the scroll
  const opacity = useTransform(scrollYProgress, [0, 0.6, 0.8, 1], [1, 1, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 pointer-events-none flex items-center justify-center"
      aria-hidden="true"
    >
      {CHIPS.map((chip, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/60 border border-[#e07a5f]/20 backdrop-blur-md shadow-sm"
          style={{
            x: chip.x,
            y: chip.y,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: chip.delay, ease: [0.22, 1, 0.28, 1] }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(204,255,0,0.8)]" />
          <span className="text-[0.65rem] font-medium tracking-widest uppercase text-foreground/80">
            {chip.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
