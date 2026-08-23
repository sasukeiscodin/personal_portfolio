import { Section } from "./Section";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" label="Skills" ledger>
      <dl className="lg:col-span-2 lg:grid lg:grid-cols-subgrid">
        {skills.map((group) => (
          <div
            key={group.category}
            className="border-t border-border py-5 first:border-t-0 first:pt-0 lg:col-span-2 lg:grid lg:grid-cols-subgrid"
          >
            <dt className="font-mono text-2xs uppercase leading-relaxed tracking-[0.12em] text-faint lg:pt-0.5">
              {group.category}
            </dt>
            <dd className="mt-2 space-y-1.5 lg:mt-0">
              <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-text">
                {group.handsOn.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              {group.familiar && (
                <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-faint">
                  {group.familiar.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              )}
            </dd>
          </div>
        ))}
      </dl>

      {/* Legend: without it the two tones are just a styling quirk. */}
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-5 font-mono text-2xs uppercase tracking-[0.1em] lg:col-start-2">
        <span className="text-text">Hands-on</span>
        <span className="text-faint">Studied, not yet demonstrated</span>
      </div>
    </Section>
  );
}
