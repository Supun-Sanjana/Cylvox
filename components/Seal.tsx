"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

type Props = {
  scrollYProgress: MotionValue<number>;
  className?: string;
};

export default function Seal({ scrollYProgress, className = "" }: Props) {
  // Rotate and scale down to "lock" into place on scroll
  const rotation = useTransform(scrollYProgress, [0, 1], [-45, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.6, 1]);

  return (
    <motion.div
      style={{ rotate: rotation, scale, opacity }}
      className={`pointer-events-none relative aspect-square flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      {/* Outer Hex Lattice */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full opacity-80 text-[#3d1b11] drop-shadow-[0_0_15px_rgba(244,162,97,0.3)]"
      >
        <polygon
          points="50 5, 90 27.5, 90 72.5, 50 95, 10 72.5, 10 27.5"
          stroke="currentColor"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
          strokeDasharray="2 4"
        />
        <polygon
          points="50 15, 80 32.5, 80 67.5, 50 85, 20 67.5, 20 32.5"
          stroke="currentColor"
          strokeWidth="0.3"
          vectorEffect="non-scaling-stroke"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="rgba(244, 162, 97, 0.4)"
          strokeWidth="0.2"
          vectorEffect="non-scaling-stroke"
        />
        <line x1="50" y1="5" x2="50" y2="15" stroke="currentColor" strokeWidth="0.5" />
        <line x1="50" y1="85" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" />
        <line x1="10" y1="27.5" x2="20" y2="32.5" stroke="currentColor" strokeWidth="0.5" />
        <line x1="90" y1="72.5" x2="80" y2="67.5" stroke="currentColor" strokeWidth="0.5" />
        <line x1="10" y1="72.5" x2="20" y2="67.5" stroke="currentColor" strokeWidth="0.5" />
        <line x1="90" y1="27.5" x2="80" y2="32.5" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Inner Rotating Ring */}
      <motion.div
        className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-[#e07a5f]/50"
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 180]) }}
      />
      
      {/* Core Lock Hub */}
      <div className="absolute w-[30%] h-[30%] rounded-full bg-gradient-to-br from-[#f4a261]/10 to-transparent border border-[#e07a5f]/30 backdrop-blur-md flex items-center justify-center shadow-[inset_0_0_20px_rgba(231,111,81,0.15)]">
        <div className="w-2 h-2 bg-[#f4a261] rounded-full animate-pulse shadow-[0_0_10px_rgba(244,162,97,0.8)]" />
      </div>
    </motion.div>
  );
}
