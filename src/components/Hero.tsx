import { Mail } from "lucide-react";
import { Container } from "./Container";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/lib/data";

const statusLines = [
  { key: "os", value: "Arch Linux" },
  { key: "wm", value: "i3" },
  { key: "role", value: "IT Support (Volunteer) — since 2023" },
  { key: "focus", value: "Linux · Networking · Server Monitoring" },
  { key: "status", value: "Open to opportunities" },
];

export function Hero() {
  return (
    <section id="top" className="border-b border-border pt-20 pb-16 sm:pt-28 sm:pb-24">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 font-mono text-sm text-primary">
            <span aria-hidden="true">$ </span>whoami
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">{profile.title}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-border-hover hover:text-primary"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="text-muted transition-colors hover:text-text"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-muted transition-colors hover:text-text"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="text-muted transition-colors hover:text-text"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div
          className="rounded-lg border border-border bg-card font-mono text-sm shadow-[0_0_0_1px_rgba(0,0,0,0.2)]"
          aria-hidden="true"
        >
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
            <span className="ml-2 text-xs text-muted-2">status.sh</span>
          </div>
          <div className="space-y-2 px-5 py-5">
            {statusLines.map((line) => (
              <div key={line.key} className="flex gap-3">
                <span className="text-primary">{line.key}:</span>
                <span className="text-muted">{line.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
