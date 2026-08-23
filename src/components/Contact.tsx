import { Mail, Terminal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/lib/data";

const links = [
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: profile.tryhackme, label: "TryHackMe", Icon: Terminal },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading id="contact-heading" label="Contact" />
        <div className="max-w-xl">
          <p className="text-md leading-relaxed text-muted">
            I&apos;m looking for Linux system administration, monitoring desk, or incident
            resolution roles. If you&apos;re hiring or want to talk shop, reach out directly.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2.5 bg-text px-5 py-2.5 font-mono text-xs font-medium tracking-[0.06em] text-bg transition-opacity duration-100 hover:opacity-85"
          >
            <Mail size={14} aria-hidden="true" />
            {profile.email}
          </a>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            {links.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2.5 font-mono text-2xs uppercase tracking-[0.12em] text-muted transition-colors duration-100 hover:text-text"
              >
                <Icon size={14} aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
