import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="border-b border-border py-20">
      <Container>
        <SectionHeading index="05" title="Skills" id="skills-heading" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-mono text-sm text-primary">{group.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border px-2.5 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
