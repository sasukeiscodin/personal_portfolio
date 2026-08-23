import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { archProject } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-20">
      <Container>
        <SectionHeading index="04" title="Projects" id="projects-heading" />
        <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-text">{archProject.title}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">{archProject.summary}</p>
          <ul className="mt-5 space-y-2.5">
            {archProject.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {archProject.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
