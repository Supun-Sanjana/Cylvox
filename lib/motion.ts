"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Publishes the pointer position onto an element as `--mx` / `--my`, and
 * grows `--scan-r` from 0 to `radius` while the pointer is inside it.
 *
 * CSS masks and radial gradients read those variables directly, so the
 * reveal costs no React re-renders.
 */
export function usePointerVars<T extends HTMLElement = HTMLDivElement>(
  radius = 0,
) {
  const ref = useRef<T | null>(null);
  const [active, setActive] = useState(false);
  const frame = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Coarse pointers have no hover state — leave the veil sealed.
    if (window.matchMedia("(hover: none)").matches) return;

    const move = (e: PointerEvent) => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };

    const enter = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
      if (radius) el.style.setProperty("--scan-r", `${radius}px`);
      setActive(true);
    };

    const leave = () => {
      if (radius) el.style.setProperty("--scan-r", "0px");
      setActive(false);
    };

    el.addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);

    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(frame.current);
    };
  }, [radius]);

  return { ref, active };
}

/**
 * Tracks the pointer across the whole viewport and returns a normalised
 * offset from centre (-1 → 1) for parallax. Throttled to one frame.
 */
export function useParallax(intensity = 1) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const frame = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const move = (e: PointerEvent) => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        setOffset({
          x: ((e.clientX / window.innerWidth) * 2 - 1) * intensity,
          y: ((e.clientY / window.innerHeight) * 2 - 1) * intensity,
        });
      });
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame.current);
    };
  }, [intensity]);

  return offset;
}

/**
 * The "squish": scroll velocity is written to `--sq-*` custom properties so
 * elements compress along the axis of travel and spring back when you stop.
 */
export function useScrollSquish<T extends HTMLElement = HTMLDivElement>(
  strength = 0.16,
  max = 0.085,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let last = window.scrollY;
    let frame = 0;
    let idle: ReturnType<typeof setTimeout>;

    const write = (v: number) => {
      el.style.setProperty("--sq-y", String(1 + v));
      el.style.setProperty("--sq-x", String(1 - v * 0.5));
      el.style.setProperty("--sq-skew", `${v * 6}deg`);
    };

    const tick = () => {
      frame = 0;
      const y = window.scrollY;
      const raw = ((y - last) * strength) / 100;
      last = y;
      write(Math.max(-max, Math.min(max, raw)));
    };

    const settle = () => write(0);

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(tick);
      clearTimeout(idle);
      idle = setTimeout(settle, 90);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      clearTimeout(idle);
    };
  }, [strength, max]);

  return ref;
}

/** Fires once when the element first scrolls into view. */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  margin = "-12% 0px",
) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0.15 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [margin, seen]);

  return { ref, seen };
}

/** Eased count-up used by the metric readouts. */
export function useCountUp(target: number, run: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(target * eased);
      if (t < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, run, duration]);

  return value;
}

/** Pulls an element gently toward the cursor while hovered. */
export function useMagnetic<T extends HTMLElement = HTMLAnchorElement>(
  pull = 0.28,
) {
  const ref = useRef<T | null>(null);

  const reset = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate3d(${dx * pull}px, ${dy * pull}px, 0)`;
    };

    el.addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
    };
  }, [pull, reset]);

  return ref;
}
