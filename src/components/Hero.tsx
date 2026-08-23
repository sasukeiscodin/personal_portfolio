import { Mail, Terminal, ArrowDown } from "lucide-react";
import { Container } from "./Container";
import { GithubIcon, LinkedinIcon } from "./icons";
import { StateIndicator } from "./StateIndicator";
import { profile, status } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Schematic grid — zonal, behind the hero only. */}
      <div
        className="schematic-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <Container className="relative pt-24 pb-20 sm:pt-32 sm:pb-28">
        <h1 className="font-mono text-2xl font-medium uppercase tracking-[-0.02em] text-text sm:text-3xl">
          {profile.name}
        </h1>

        <p className="mt-5 font-mono text-2xs uppercase tracking-[0.18em] text-muted sm:text-xs">
          {profile.tagline}
        </p>

        {/* Status strip — real values only. */}
        <dl className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 border-y border-border py-4">
          {status.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              {item.state && <StateIndicator state={item.state} />}
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 max-w-xl text-md leading-relaxed text-muted">
          {profile.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
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

        <div className="mt-12 flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="text-faint transition-colors duration-100 hover:text-text"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="text-faint transition-colors duration-100 hover:text-text"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={profile.tryhackme}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="TryHackMe profile"
            className="text-faint transition-colors duration-100 hover:text-text"
          >
            <Terminal size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="text-faint transition-colors duration-100 hover:text-text"
          >
            <Mail size={18} />
          </a>
        </div>
      </Container>
    </section>
  );
}
