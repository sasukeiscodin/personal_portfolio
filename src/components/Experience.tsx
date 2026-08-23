import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading id="experience-heading" label="Experience" />

        {/* Ledger layout: dates align in the left gutter, detail in the content track. */}
        <ol>
          {experience.map((job) => (
            <li
              key={`${job.role}-${job.org}`}
              className="grid gap-x-10 gap-y-3 border-t border-border py-8 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr]"
            >
              <p className="font-mono text-2xs uppercase tracking-[0.1em] text-faint sm:pt-1">
                {job.period}
              </p>
              <div>
                <h3 className="text-lg font-medium text-text">{job.role}</h3>
                <p className="mt-1 text-sm text-muted">{job.org}</p>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-base leading-relaxed text-muted"
                    >
                      <span
                        className="mt-2.5 h-px w-2.5 shrink-0 bg-border-strong"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
