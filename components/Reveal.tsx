"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const getVariants = () => {
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -35 }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: 45 }, visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -45 }, visible: { opacity: 1, x: 0 } };
      case "none":
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
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