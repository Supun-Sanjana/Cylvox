"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export function InteractiveSkewText() {
  const ref = useRef<HTMLDivElement>(null);

  // Track mouse position relative to center of the text
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the motion values for the squishy/fluid feel
  const springConfig = { damping: 25, stiffness: 200, mass: 1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Map mouse position to 3D rotation/skew values.
  // When hovering on edges, we skew towards mouse point.
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate relative mouse position mapped from -0.5 to 0.5
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(relX);
    y.set(relY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full flex justify-center py-4 cursor-pointer"
      style={{ perspective: "1500px" }}
    >
      <motion.a 
        href="#top" 
        className="block text-center w-full px-4"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
      >
        <span 
          className="font-display font-black text-[clamp(60px,18vw,280px)] leading-none tracking-tight text-foreground select-none whitespace-nowrap block w-full drop-shadow-sm hover:drop-shadow-md transition-all duration-300"
          style={{ transform: "translateZ(40px)" }}
        >
          CYLVOX<span className="text-primary">.</span>
        </span>
      </motion.a>
    </div>
  );
}
