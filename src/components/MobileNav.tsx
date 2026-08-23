"use client";

import { useEffect, useState } from "react";

/*
  Below the rail's breakpoint there is no menu. On a single-page site a
  hamburger is unnecessary chrome, because people scroll. What's useful is knowing how
  far through you are, and being able to reach the one action that matters.
*/
export function MobileNav() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-50 h-0.5 w-full lg:hidden"
      >
        <div
          className="h-full origin-left bg-text"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <a
        href="#contact"
        className="fixed bottom-5 right-5 z-50 bg-text px-4 py-2.5 font-mono text-2xs font-medium uppercase tracking-[0.12em] text-bg lg:hidden"
      >
        Contact
      </a>
    </>
  );
}
