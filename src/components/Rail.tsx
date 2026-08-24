"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";
import { sections, LAST_SECTION } from "@/lib/sections";

/*
  The rail is the page's structural spine, and it reads as a service map: each
  section is a node carrying real state.

    pending  not yet reached
    ready    provisioned, behind you
    active   currently in view

  A node flips pending to ready on the same frame its section's divider begins
  to draw, because both are driven by observers with identical thresholds. That
  shared moment is what stops the page feeling like stacked, unrelated blocks.
*/


export function Rail() {
  const [observed, setObserved] = useState("");
  const [revealed, setRevealed] = useState<ReadonlySet<string>>(new Set());
  const [atBottom, setAtBottom] = useState(false);
  const fill = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Which section owns the viewport right now.
    const activeObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setObserved(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-12% 0px -80% 0px" }
    );

    // Deliberately the same threshold ScrollReveal uses, so node and divider
    // change together rather than drifting apart.
    const readyObserver = new IntersectionObserver(
      (entries) => {
        const arrived: string[] = [];
        for (const entry of entries) {
          if (entry.isIntersecting) {
            arrived.push(entry.target.id);
            readyObserver.unobserve(entry.target);
          }
        }
        if (arrived.length) {
          setRevealed((prev) => new Set([...prev, ...arrived]));
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        activeObserver.observe(el);
        readyObserver.observe(el);
      }
    }

    // Progress is written straight to a CSS variable so scrolling never
    // triggers a React render.
    const onScroll = () => {
      const doc = document.documentElement;
      setAtBottom(window.scrollY + window.innerHeight >= doc.scrollHeight - 4);

      const first = document.getElementById(sections[0].id);
      const last = document.getElementById(LAST_SECTION);
      if (first && last && fill.current) {
        const start = first.offsetTop;
        const end = last.offsetTop + last.offsetHeight;
        const raw =
          (window.scrollY + window.innerHeight * 0.55 - start) /
          Math.max(end - start, 1);
        fill.current.style.setProperty(
          "--p",
          String(Math.min(1, Math.max(0, raw)))
        );
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      activeObserver.disconnect();
      readyObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const active = atBottom ? LAST_SECTION : observed;
  const activeIndex = sections.findIndex((s) => s.id === active);

  return (
    <nav
      aria-label="Sections"
      className="fixed left-0 top-0 z-40 hidden h-screen w-[168px] flex-col justify-between py-9 pl-8 lg:flex"
    >
      <a
        href="#top"
        className="font-mono text-2xs font-medium uppercase leading-relaxed tracking-[0.14em] text-text"
      >
        Prathamesh
        <br />
        Kasar
      </a>

      <ul className="rail-track relative -my-1.5">
        <span className="rail-line" aria-hidden="true" />
        <span ref={fill} className="rail-fill" aria-hidden="true" />

        {sections.map((section, i) => {
          /*
            Anything above the active node is behind you, whether or not its
            reveal ever fired: jumping past a section must not leave its node
            reading as unreached.
          */
          const state =
            active === section.id
              ? "active"
              : (activeIndex > -1 && i < activeIndex) || revealed.has(section.id)
                ? "ready"
                : "pending";

          return (
            <li
              key={section.id}
              className="enter-rise"
              // Cascades down the rail on load rather than appearing at once.
              style={{ "--d": `${360 + i * 60}ms` } as CSSProperties}
            >
              <a
                href={`#${section.id}`}
                aria-current={state === "active" ? "true" : undefined}
                className="group relative flex items-center gap-3.5 py-1.5"
              >
                <span className="rail-node" data-state={state} aria-hidden="true" />
                <span
                  className={`font-mono text-2xs uppercase tracking-[0.14em] transition-colors duration-150 ${
                    state === "active"
                      ? "text-text"
                      : "text-faint group-hover:text-muted"
                  }`}
                >
                  {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <a
        href={profile.resumeUrl}
        download
        className="font-mono text-2xs uppercase tracking-[0.14em] text-faint transition-colors duration-100 hover:text-text"
      >
        Resume ↓
      </a>
    </nav>
  );
}
