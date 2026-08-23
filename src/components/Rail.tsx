"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

/*
  The rail is the page's structural spine: navigation, position, and identity in
  one persistent element. It replaces the top navigation bar entirely.
*/
const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "homelab", label: "Homelab" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Rail() {
  const [active, setActive] = useState("");

  useEffect(() => {
    // A thin detection band near the top of the viewport: whichever section
    // crosses it becomes the active one.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-12% 0px -80% 0px" }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

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

      <ul className="-my-1.5">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a href={`#${section.id}`} className="group flex items-center gap-3 py-1.5">
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-150 ${
                    isActive
                      ? "w-6 bg-text"
                      : "w-3 bg-border-strong group-hover:w-5 group-hover:bg-muted"
                  }`}
                />
                <span
                  className={`font-mono text-2xs uppercase tracking-[0.14em] transition-colors duration-150 ${
                    isActive ? "text-text" : "text-faint group-hover:text-muted"
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
