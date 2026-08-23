import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { NetworkDiagram } from "./NetworkDiagram";
import { homelab } from "@/lib/data";

export function Homelab() {
  return (
    <section id="homelab" className="border-b border-border py-20">
      <Container>
        <SectionHeading index="03" title="Homelab" id="homelab-heading" />
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h3 className="text-xl font-semibold text-text">{homelab.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{homelab.summary}</p>
            <ul className="mt-5 space-y-2.5">
              {homelab.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {homelab.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted"
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
