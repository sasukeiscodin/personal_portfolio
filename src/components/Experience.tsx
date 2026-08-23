import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border py-20">
      <Container>
        <SectionHeading index="02" title="Experience" id="experience-heading" />
        <ol className="space-y-10 border-l border-border pl-8">
          {experience.map((job) => (
            <li key={`${job.role}-${job.org}`} className="relative">
              <span
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              <p className="font-mono text-xs text-muted-2">{job.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-text">{job.role}</h3>
              <p className="text-sm text-muted">{job.org}</p>
              <ul className="mt-3 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-2" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
