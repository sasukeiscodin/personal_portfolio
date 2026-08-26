import { Section } from "./Section";
import { Artifact } from "./Artifact";
import { networking, networkingArtifacts } from "@/lib/data";

function Group({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-mono text-2xs uppercase tracking-[0.16em] text-faint">
        {label}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed text-body">
            <span
              className="mt-2.5 h-px w-2.5 shrink-0 bg-border-strong"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Networking() {
  return (
    <Section
      id="networking"
      index="04"
      label="Networking"
      meta="CCNA in progress"
      major
      dense
    >
      <p className="max-w-[62ch] text-md leading-relaxed text-body">
        {networking.summary}
      </p>

      <div className="mt-10 grid gap-10 xl:grid-cols-2">
        <Group label="Applied" items={networking.applied} />
        <Group label="Lab practice" items={networking.lab} />
      </div>

      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
        {networking.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-2xs uppercase tracking-[0.1em] text-faint"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Evidence. Renders only once artifacts are added to the data file. */}
      {networkingArtifacts.length > 0 && (
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {networkingArtifacts.map((artifact) => (
            <Artifact key={artifact.src} {...artifact} />
          ))}
        </div>
      )}
    </Section>
  );
}
