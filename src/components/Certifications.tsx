import { Terminal } from "lucide-react";
import { Section } from "./Section";
import { StateIndicator } from "./StateIndicator";
import { Artifact } from "./Artifact";
import {
  certifications,
  inProgress,
  profile,
  tryhackmeArtifacts,
  tryhackmeStats,
} from "@/lib/data";

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
    <div className="ledger-row border-t border-border py-6 first:border-t-0 lg:col-span-2 lg:grid lg:grid-cols-subgrid">
      {/*
        self-start keeps this pinned to the row's top edge, matching the
        title. Without it, the grid stretches this column to the row's full
        height and items-center then centers the badge in that space, so a
        row with topics (taller) drifts the badge away from the title while
        a row without topics does not.
      */}
      <div className="flex items-center gap-2.5 self-start lg:pt-1">
        <StateIndicator state={state} />
        <span className="font-mono text-2xs uppercase tracking-[0.1em] text-muted">
          {stateLabel}
        </span>
      </div>
      <div className="mt-3 lg:mt-0">
        <h3 className="text-lg font-semibold text-text">{title}</h3>
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
    <Section
      id="certifications"
      index="07"
      label="Certifications"
      meta={`${certifications.length} completed · ${inProgress.length} in progress`}
      ledger
    >
      <div
        data-stagger="cascade"
        className="border-t border-border-strong border-b border-border lg:col-span-2 lg:grid lg:grid-cols-subgrid"
      >
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

      {/*
        TryHackMe. Renders only once real figures or a screenshot are supplied:
        an empty profile block is worse than no block at all.
      */}
      {(tryhackmeStats.length > 0 || tryhackmeArtifacts.length > 0) && (
        <div className="mt-10 border-t border-border pt-8 lg:col-start-2">
          <a
            href={profile.tryhackme}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.14em] text-muted transition-colors duration-150 hover:text-text"
          >
            <Terminal size={13} aria-hidden="true" />
            TryHackMe
          </a>

          {tryhackmeStats.length > 0 && (
            <dl className="mt-5 flex flex-wrap gap-x-12 gap-y-4">
              {tryhackmeStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-2xs uppercase tracking-[0.12em] text-faint">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 font-mono text-lg text-text">{stat.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {tryhackmeArtifacts.length > 0 && (
            <div className="mt-7 grid max-w-xl gap-6">
              {tryhackmeArtifacts.map((artifact) => (
                <Artifact key={artifact.src} {...artifact} />
              ))}
            </div>
          )}
        </div>
      )}
    </Section>
  );
}
