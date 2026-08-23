"use client";

import { useEffect, useRef } from "react";

/*
  A targeting bracket that appears over technical zones (anything marked
  `data-probe`) and tracks the pointer.

  It augments the system cursor rather than replacing it. Replacing the native
  cursor is the usual version of this effect and it costs real usability: people
  lose the shape that tells them whether something is clickable, and custom
  cursors lag behind the real pointer position. Here the actual cursor stays
  exactly where it is and the bracket sits around it.

  Position is written straight to a transform inside a rAF, so pointer movement
  never triggers a React render.
*/
export function Reticle() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;

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
      node.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const inZone = target?.closest?.("[data-probe]");

      if (inZone) {
        x = event.clientX;
        y = event.clientY;
        node.classList.add("is-on");
        if (!frame) frame = requestAnimationFrame(paint);
      } else if (node.classList.contains("is-on")) {
        node.classList.remove("is-on");
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={el} className="reticle" aria-hidden="true">
      <svg viewBox="0 0 26 26" width="26" height="26">
        <path
          d="M1 8.5V1h7.5M17.5 1H25v7.5M25 17.5V25h-7.5M8.5 25H1v-7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
