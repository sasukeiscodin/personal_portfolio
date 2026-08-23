"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-semibold text-text"
          onClick={() => setOpen(false)}
        >
          <span className="text-primary">~/</span>prathamesh-kasar
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-sm text-text transition-colors hover:border-border-hover hover:text-primary"
          >
            <Download size={14} aria-hidden="true" />
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="text-text md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <nav className="border-t border-border bg-bg md:hidden" aria-label="Primary">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 font-mono text-sm text-muted hover:bg-surface hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center gap-1.5 rounded-md border border-border px-2 py-2 font-mono text-sm text-text"
            >
              <Download size={14} aria-hidden="true" />
              Resume
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
