"use client";

import { useEffect, useRef } from "react";

/*
  The hero's schematic grid, plus a torch layer that follows the pointer so the
  drawing appears lit locally rather than glowing by itself.

  Pointer position is written straight to CSS custom properties inside a rAF, so
  the effect never triggers a React render. Skipped entirely for coarse pointers
  (touch, where there is no hover) and under reduced motion.
*/
export function HeroGrid() {
  const torch = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = torch.current;
    const section = el?.parentElement;
    if (!el || !section) return;

    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    const onMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
      el.classList.add("is-lit");
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => el.classList.remove("is-lit");

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);

    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        className="schematic-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        ref={torch}
        className="grid-torch pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
    </>
  );
}
