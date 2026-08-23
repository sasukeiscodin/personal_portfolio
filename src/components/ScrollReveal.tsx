"use client";

import { useEffect } from "react";

/*
  Reveals each section once as it enters the viewport. Sections animate as whole
  units rather than staggering their children, because motion should clarify that new
  content has arrived, not perform.

  The hidden state is applied by an inline script in the document head (see
  layout.tsx) so there is no flash of visible-then-hidden content. If that script
  never runs (no JS, or reduced motion), nothing is ever hidden.
*/
export function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // fires once, never re-triggers
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    for (const target of targets) observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return null;
}
