import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="border-b border-border py-20">
      <Container>
        <SectionHeading index="06" title="Certifications" id="certifications-heading" />
        <div className="space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6 sm:flex-row sm:items-start"
            >
              <BadgeCheck className="mt-1 shrink-0 text-signal" size={24} aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-text">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cert.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
