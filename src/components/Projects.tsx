import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { archProject } from "@/lib/data";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading id="projects-heading" label="Projects" />
        <div className="border border-border bg-panel">
          <div className="border-b border-border px-7 py-3.5">
            <p className="font-mono text-2xs uppercase tracking-[0.14em] text-faint">
              Arch Linux
            </p>
          </div>
          <div className="px-7 py-7">
            <h3 className="text-xl font-medium tracking-[-0.01em] text-text">
              {archProject.title}
            </h3>
            <p className="mt-4 max-w-[64ch] text-md leading-relaxed text-muted">
              {archProject.summary}
            </p>
            <ul className="mt-6 space-y-2.5">
              {archProject.points.map((point) => (
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
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {archProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-2xs uppercase tracking-[0.1em] text-faint"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
