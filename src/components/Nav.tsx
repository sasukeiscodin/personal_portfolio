"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#homelab", label: "Homelab" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-sm">
      <Container className="flex h-14 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-2xs font-medium uppercase tracking-[0.16em] text-text"
          onClick={() => setOpen(false)}
        >
          Prathamesh Kasar
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-2xs uppercase tracking-[0.12em] text-faint transition-colors duration-100 hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="border border-border px-3 py-1.5 font-mono text-2xs uppercase tracking-[0.12em] text-muted transition-colors duration-100 hover:border-border-strong hover:text-text"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="text-muted md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <nav className="border-t border-border bg-bg md:hidden" aria-label="Primary">
          <Container className="flex flex-col py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-mono text-2xs uppercase tracking-[0.12em] text-muted hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="mt-2 border-t border-border pt-3 font-mono text-2xs uppercase tracking-[0.12em] text-muted"
            >
              Resume
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
