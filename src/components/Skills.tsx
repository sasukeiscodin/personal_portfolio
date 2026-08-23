import { SectionHeading } from "./SectionHeading";
import { Container } from "./Container";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading id="skills-heading" label="Skills" />
        <dl>
          {skills.map((group) => (
            <div
              key={group.category}
              className="grid gap-x-10 gap-y-2 border-t border-border py-5 first:border-t-0 first:pt-0 sm:grid-cols-[14rem_1fr]"
            >
              <dt className="font-mono text-2xs uppercase tracking-[0.14em] text-faint sm:pt-0.5">
                {group.category}
              </dt>
              <dd className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
