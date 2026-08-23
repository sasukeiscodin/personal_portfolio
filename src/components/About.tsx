import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { education } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading id="about-heading" label="About" />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-[68ch] space-y-4 text-md leading-relaxed text-muted">
            <p>
              I&apos;m a Computer Engineering graduate from Savitribai Phule Pune University with a
              practical, hands-on relationship to Linux. Since 2023, I&apos;ve provided IT support —
              diagnosing OS, driver, network, and connectivity issues, managing backups and system
              images, and applying patches to keep machines stable and secure.
            </p>
            <p>
              Outside of that, I run a self-hosted Linux server that I built and maintain end to
              end: storage, networking, user access, and service configuration. I also installed
              and configured Arch Linux from scratch, down to partitioning and the window manager,
              because I wanted to actually understand the system rather than accept the defaults.
            </p>
            <p>
              I hold the Google Cybersecurity Professional Certificate and I&apos;m looking to move
              into a monitoring desk or incident resolution role where that combination of Linux
              administration, networking, and security fundamentals is put to use daily.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-2xs uppercase tracking-[0.18em] text-faint">
              Education
            </h3>
            <div className="space-y-px">
              {education.map((item) => (
                <div
                  key={item.school}
                  className="border-t border-border py-4 first:border-t-0 first:pt-0"
                >
                  <p className="text-base font-medium text-text">{item.credential}</p>
                  <p className="mt-1.5 text-sm text-muted">{item.school}</p>
                  <p className="mt-1.5 font-mono text-2xs tracking-[0.08em] text-faint">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
