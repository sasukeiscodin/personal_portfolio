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
            <dd className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted lg:mt-0">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
