import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { StateIndicator } from "./StateIndicator";
import { certifications, inProgress } from "@/lib/data";

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading id="certifications-heading" label="Certifications" />
        <div>
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="grid gap-x-10 gap-y-3 border-t border-border py-6 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr]"
            >
              <div className="flex items-center gap-2.5 sm:pt-1">
                <StateIndicator state="ok" />
                <span className="font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                  Completed
                </span>
              </div>
              <div>
                <h3 className="text-base font-medium text-text">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                  {cert.topics.map((topic) => (
                    <span
                      key={topic}
                      className="font-mono text-2xs uppercase tracking-[0.1em] text-faint"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Trajectory — in-progress work reads as direction, which matters for a junior candidate. */}
          {inProgress.map((item) => (
            <div
              key={item.name}
              className="grid gap-x-10 gap-y-3 border-t border-border py-6 sm:grid-cols-[10rem_1fr]"
            >
              <div className="flex items-center gap-2.5 sm:pt-1">
                <StateIndicator state="progress" />
                <span className="font-mono text-2xs uppercase tracking-[0.12em] text-muted">
                  In progress
                </span>
              </div>
              <div>
                <h3 className="text-base font-medium text-text">{item.name}</h3>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
