import { type CSSProperties } from "react";
import { Mail, Terminal, ArrowDown } from "lucide-react";
import { Container } from "./Container";
import { GithubIcon, LinkedinIcon } from "./icons";
import { StateIndicator } from "./StateIndicator";
import { HeroGrid } from "./HeroGrid";
import { profile, status } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Schematic grid, zonal to the hero, with a pointer-tracked torch layer. */}
      <HeroGrid />

      <Container className="relative pt-24 pb-20 sm:pt-32 sm:pb-28">
        <h1
          className="enter-wipe font-mono text-2xl font-medium uppercase tracking-[-0.02em] text-text sm:text-3xl"
          style={{ "--d": "60ms" } as CSSProperties}
        >
          {profile.name}
        </h1>

        <p
          className="enter-wipe mt-5 font-mono text-2xs uppercase tracking-[0.18em] text-muted sm:text-xs"
          style={{ "--d": "200ms" } as CSSProperties}
        >
          {profile.tagline}
        </p>

        {/* Status strip: real values only. */}
        <dl
          className="enter-rise mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 border-y border-border py-4"
          style={{ "--d": "340ms" } as CSSProperties}
        >
          {status.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              {item.state && (
                <StateIndicator state={item.state} breathe={item.state === "ok"} />
              )}
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <p
          className="enter-rise mt-10 max-w-xl text-md leading-relaxed text-muted"
          style={{ "--d": "440ms" } as CSSProperties}
        >
          {profile.intro}
        </p>

        <div
          className="enter-rise mt-10 flex flex-wrap items-center gap-6"
          style={{ "--d": "540ms" } as CSSProperties}
        >
          <a
            href="#contact"
            className="bg-text px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.1em] text-bg transition-opacity duration-100 hover:opacity-85"
          >
            Contact
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-muted transition-colors duration-100 hover:text-text"
          >
            Resume
            <ArrowDown size={13} aria-hidden="true" />
          </a>
        </div>

        {/* Labelled rather than icon-only: an unlabelled terminal glyph reads as
            nothing, and a recruiter shouldn't have to guess where a link goes. */}
        <div
          className="enter-rise mt-12 flex flex-wrap items-center gap-x-7 gap-y-3"
          style={{ "--d": "640ms" } as CSSProperties}
        >
          {[
            { href: profile.github, label: "GitHub", Icon: GithubIcon },
            { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
            { href: profile.tryhackme, label: "TryHackMe", Icon: Terminal },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.12em] text-faint transition-colors duration-100 hover:text-text"
            >
              <Icon size={15} aria-hidden="true" />
              {label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.12em] text-faint transition-colors duration-100 hover:text-text"
          >
            <Mail size={15} aria-hidden="true" />
            Email
          </a>
        </div>
      </Container>
    </section>
  );
}
