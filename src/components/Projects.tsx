import { Section } from "./Section";
import { Panel } from "./Panel";
import { archProject } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <Panel label="Arch Linux" meta="Daily driver">
        <h3 className="text-xl font-medium tracking-[-0.01em] text-text">
          {archProject.title}
        </h3>
        <p className="mt-4 max-w-[62ch] text-md leading-relaxed text-muted">
          {archProject.summary}
        </p>
        <ul className="mt-6 space-y-2.5">
          {archProject.points.map((point) => (
            <li key={point} className="flex gap-3 text-base leading-relaxed text-muted">
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
      </Panel>
    </Section>
  );
}
