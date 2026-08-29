"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  blur?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  blur = false,
}: RevealProps) {
  const getVariants = () => {
    const hiddenFilter = blur ? "blur(8px)" : "blur(0px)";
    const visibleFilter = "blur(0px)";
    
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: 50, scale: 0.97, filter: hiddenFilter }, visible: { opacity: 1, y: 0, scale: 1, filter: visibleFilter } };
      case "down":
        return { hidden: { opacity: 0, y: -50, scale: 0.97, filter: hiddenFilter }, visible: { opacity: 1, y: 0, scale: 1, filter: visibleFilter } };
      case "left":
        return { hidden: { opacity: 0, x: 50, filter: hiddenFilter }, visible: { opacity: 1, x: 0, filter: visibleFilter } };
      case "right":
        return { hidden: { opacity: 0, x: -50, filter: hiddenFilter }, visible: { opacity: 1, x: 0, filter: visibleFilter } };
      case "none":
        return { hidden: { opacity: 0, filter: hiddenFilter }, visible: { opacity: 1, filter: visibleFilter } };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
