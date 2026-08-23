import { Section } from "./Section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" label="Experience" ledger>
      {/* Rows join the section grid so dates align under the section label. */}
      <ol className="lg:col-span-2 lg:grid lg:grid-cols-subgrid">
        {experience.map((job) => (
          <li
            key={`${job.role}-${job.org}`}
            className="border-t border-border py-8 first:border-t-0 first:pt-0 lg:col-span-2 lg:grid lg:grid-cols-subgrid"
          >
            <p className="font-mono text-2xs uppercase tracking-[0.1em] text-faint lg:pt-1.5">
              {job.period}
            </p>
            <div className="mt-3 lg:mt-0">
              <h3 className="text-lg font-medium tracking-[-0.01em] text-text">{job.role}</h3>
              <p className="mt-1 text-sm text-muted">{job.org}</p>
              {job.note && (
                <p className="mt-1 text-sm text-faint">{job.note}</p>
              )}
              <ul className="mt-4 max-w-[76ch] space-y-2.5">
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
    </Section>
  );
}
