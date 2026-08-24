"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ChevronUp, X } from "lucide-react";
import { sections, LAST_SECTION, type SectionState } from "@/lib/sections";
import { profile } from "@/lib/data";

/*
  Below the rail's breakpoint the page previously had no navigation at all,
  which left nine sections reachable only by scrolling. This replaces that with
  a thumb-reachable bar carrying the same service map the desktop rail uses.

  Collapsed, it reports where you are and how far through you have got. The row
  of squares is the rail compressed: one node per section, filling as you pass
  them. Tapping opens the full map, where every row is a real touch target.
*/
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [observed, setObserved] = useState("");
  const [atBottom, setAtBottom] = useState(false);
  const progress = useRef<HTMLSpanElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setObserved(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) activeObserver.observe(el);
    }

    // Written straight to a CSS variable so scrolling never re-renders React.
    const onScroll = () => {
      const doc = document.documentElement;
      setAtBottom(window.scrollY + window.innerHeight >= doc.scrollHeight - 4);
      const scrollable = doc.scrollHeight - window.innerHeight;
      progress.current?.style.setProperty(
        "--p",
        String(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0)
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      activeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close on Escape, and stop the page scrolling behind the open sheet.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Move focus into the sheet so keyboard and screen reader users land inside it.
    closeButton.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const active = atBottom ? LAST_SECTION : observed;
  const activeIndex = sections.findIndex((s) => s.id === active);
  const current = activeIndex > -1 ? sections[activeIndex] : null;

  const stateOf = (i: number): SectionState => {
    if (i === activeIndex) return "active";
    return activeIndex > -1 && i < activeIndex ? "ready" : "pending";
  };

  return (
    <div className="lg:hidden">
      {open && (
        <>
          {/*
            Plain div, not a button: Escape and the explicit close control
            already provide accessible ways out, and a full-screen button just
            adds a confusing element to the accessibility tree.
          */}
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm"
          />

          <div
            role="dialog"
            aria-label="Sections"
            className="sheet-in fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto border-t border-border bg-surface"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-mono text-2xs uppercase tracking-[0.16em] text-faint">
                Sections
              </span>
              {/* -m-3/p-3 keeps the tap target at 44px without changing layout. */}
              <button
                ref={closeButton}
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="-m-3 p-3 text-muted"
              >
                <X size={20} />
              </button>
            </div>

            <nav aria-label="Sections">
              {sections.map((section, i) => {
                const state = stateOf(i);
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    aria-current={state === "active" ? "true" : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 border-b border-border px-5 py-4"
                  >
                    <span className="rail-node" data-state={state} aria-hidden="true" />
                    <span
                      className={`font-mono text-xs uppercase tracking-[0.14em] ${
                        state === "active" ? "text-text" : "text-muted"
                      }`}
                    >
                      {section.label}
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-3 px-5 py-5">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-sweep flex-1 bg-text px-5 py-3.5 text-center font-mono text-xs font-medium uppercase tracking-[0.1em] text-bg"
              >
                Contact
              </a>
              <a
                href={profile.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 border border-border px-5 py-3.5 font-mono text-xs uppercase tracking-[0.1em] text-muted"
              >
                Resume
                <ArrowDown size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </>
      )}

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label={`Open sections menu. Currently at ${current?.label ?? "top"}.`}
        className="fixed inset-x-0 bottom-0 z-40 flex h-14 w-full items-center justify-between border-t border-border bg-bg/90 px-5 backdrop-blur-sm"
      >
        {/* The bar's top edge doubles as the scroll progress indicator. */}
        <span
          ref={progress}
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px origin-left bg-muted"
          style={{ transform: "scaleX(var(--p, 0))" }}
        />

        <span className="font-mono text-2xs uppercase tracking-[0.14em] text-text">
          {current?.label ?? profile.name}
        </span>

        <span className="flex items-center gap-3">
          {/* The desktop rail, compressed to one node per section. */}
          <span className="flex items-center gap-1.5" aria-hidden="true">
            {sections.map((section, i) => (
              <span
                key={section.id}
                className="rail-node rail-node-mini"
                data-state={stateOf(i)}
              />
            ))}
          </span>
          <ChevronUp size={16} className="text-muted" aria-hidden="true" />
        </span>
      </button>
    </div>
  );
}
