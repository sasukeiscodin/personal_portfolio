import { type CSSProperties, type ReactNode } from "react";
import { Container } from "./Container";

/*
  The asymmetric grid behind every section: a narrow gutter and a wide content
  track.

  In `ledger` mode the gutter becomes a shared metadata channel: the section
  label sits at the top of it and each row's metadata (dates, categories, state)
  aligns beneath, in the same column, via subgrid. Nesting a second gutter inside
  the content track pushes text too far right, so rows join the parent grid
  instead of building their own.

  `major` gives a section more vertical room than the standard rhythm.
*/
export function Section({
  id,
  label,
  meta,
  major = false,
  ledger = false,
  children,
}: {
  id: string;
  label: string;
  meta?: string;
  major?: boolean;
  ledger?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      data-reveal
      // Heavier sections come up more deliberately: pacing carries weight.
      style={{ "--pace": major ? 1.35 : 1 } as CSSProperties}
      className={`relative border-t border-border ${
        major ? "py-24 sm:py-32" : "py-20 sm:py-24"
      }`}
    >
      <Container>
        <div
          data-reveal-content
          className="grid gap-x-10 gap-y-8 lg:grid-cols-[7rem_1fr]"
        >
          <div>
            <h2
              id={`${id}-heading`}
              className="font-mono text-2xs font-medium uppercase tracking-[0.18em] text-muted"
            >
              {label}
            </h2>
            {meta && (
              <p className="mt-2 font-mono text-2xs uppercase tracking-[0.12em] text-faint">
                {meta}
              </p>
            )}
          </div>
          {ledger ? children : <div>{children}</div>}
        </div>
      </Container>
    </section>
  );
}
