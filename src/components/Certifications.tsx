import { Section } from "./Section";
import { StateIndicator } from "./StateIndicator";
import { certifications, inProgress } from "@/lib/data";

function Row({
  state,
  stateLabel,
  title,
  detail,
  topics,
}: {
  state: "ok" | "progress";
  stateLabel: string;
  title: string;
  detail: string;
  topics?: string[];
}) {
  return (
    <div className="border-t border-border py-6 first:border-t-0 first:pt-0 lg:col-span-2 lg:grid lg:grid-cols-subgrid">
      <div className="flex items-center gap-2.5 lg:pt-1">
        <StateIndicator state={state} />
        <span className="font-mono text-2xs uppercase tracking-[0.1em] text-muted">
          {stateLabel}
        </span>
      </div>
      <div className="mt-3 lg:mt-0">
        <h3 className="text-base font-medium text-text">{title}</h3>
        <p className="mt-1 text-sm text-muted">{detail}</p>
        {topics && (
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
            {topics.map((topic) => (
              <span
                key={topic}
                className="font-mono text-2xs uppercase tracking-[0.1em] text-faint"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" label="Certifications" ledger>
      <div data-stagger className="lg:col-span-2 lg:grid lg:grid-cols-subgrid">
        {certifications.map((cert) => (
          <Row
            key={cert.name}
            state="ok"
            stateLabel="Completed"
            title={cert.name}
            detail={cert.issuer}
            topics={cert.topics}
          />
        ))}

        {/* In-progress work reads as direction, which matters for a junior candidate. */}
        {inProgress.map((item) => (
          <Row
            key={item.name}
            state="progress"
            stateLabel="In progress"
            title={item.name}
            detail={item.detail}
          />
        ))}
      </div>
    </Section>
  );
}
