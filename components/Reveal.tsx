"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** When true, direct children are staggered individually */
  stagger?: boolean;
};

export default function Reveal({ children, className = "", stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // fire once only
          }
        });
      },
      { threshold: 0.14 }
    );

    observer.observe(el);

    // Also observe direct children for stagger effect
    if (stagger) {
      el.querySelectorAll(":scope > *").forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div
      ref={ref}
      className={`reveal ${stagger ? "stagger" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}