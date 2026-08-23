import { Section } from "./Section";
import { NetworkDiagram } from "./NetworkDiagram";
import { homelab } from "@/lib/data";

export function Homelab() {
  return (
    <Section id="homelab" label="Homelab" meta="Self-hosted" major>
      <div className="grid gap-12 xl:grid-cols-[1.15fr_1fr] xl:items-start">
        <div>
          <h3 className="text-xl font-medium tracking-[-0.01em] text-text">
            {homelab.title}
          </h3>
          <p className="mt-4 max-w-[58ch] text-md leading-relaxed text-muted">
            {homelab.summary}
          </p>
          <ul className="mt-6 space-y-2.5">
            {homelab.points.map((point) => (
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
            {homelab.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-2xs uppercase tracking-[0.1em] text-faint"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <NetworkDiagram />
      </div>
    </Section>
  );
}
