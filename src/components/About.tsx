import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { education } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-b border-border py-20">
      <Container>
        <SectionHeading index="01" title="About" id="about-heading" />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 leading-relaxed text-muted">
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

          <div className="space-y-4">
            <h3 className="font-mono text-sm text-muted-2 uppercase tracking-wide">Education</h3>
            {education.map((item) => (
              <div key={item.school} className="rounded-lg border border-border bg-card p-4">
                <p className="font-medium text-text">{item.credential}</p>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
                <p className="mt-1 font-mono text-xs text-muted-2">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
