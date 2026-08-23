import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { NetworkDiagram } from "./NetworkDiagram";
import { homelab } from "@/lib/data";

export function Homelab() {
  return (
    // Major section — deliberately given more room than the standard rhythm.
    <section
      id="homelab"
      aria-labelledby="homelab-heading"
      className="border-t border-border py-24 sm:py-32"
    >
      <Container>
        <SectionHeading id="homelab-heading" label="Homelab" meta="Self-hosted" />
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="text-xl font-medium tracking-[-0.01em] text-text">
              {homelab.title}
            </h3>
            <p className="mt-4 max-w-[60ch] text-md leading-relaxed text-muted">
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
      </Container>
    </section>
  );
}
