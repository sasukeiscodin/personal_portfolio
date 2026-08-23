import { Mail, Terminal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading index="07" title="Contact" id="contact-heading" />
        <div className="max-w-xl">
          <p className="leading-relaxed text-muted">
            I&apos;m currently looking for Linux system administration, monitoring desk, or
            incident resolution roles. If you&apos;re hiring or just want to talk shop, reach out
            directly — I read every message myself.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            <Mail size={16} aria-hidden="true" />
            {profile.email}
          </a>

          <div className="mt-8 flex items-center gap-6 font-mono text-sm text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 transition-colors hover:text-text"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 transition-colors hover:text-text"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={profile.tryhackme}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 transition-colors hover:text-text"
            >
              <Terminal size={16} aria-hidden="true" />
              TryHackMe
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
