import { type CSSProperties, type ReactNode } from "react";
import { Container } from "./Container";
import { MaskText } from "./MaskText";

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
  index,
  label,
  meta,
  major = false,
  ledger = false,
  dense = false,
  children,
}: {
  id: string;
  /* Two-digit position in the document, e.g. "01". Omit for unnumbered sections. */
  index?: string;
  label: string;
  meta?: string;
  major?: boolean;
  ledger?: boolean;
  /* Technical sections carry a tighter grid than prose sections. */
  dense?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      data-reveal
      // Heavier sections come up more deliberately: pacing carries weight.
      style={
        {
          "--pace": major ? 1.35 : 1,
          "--grid-size": dense ? "48px" : "72px",
        } as CSSProperties
      }
      className={`relative border-t border-border ${
        major ? "py-20 sm:py-28" : "py-16 sm:py-20"
      }`}
    >
      <div className="section-grid" aria-hidden="true" />
      <Container className="relative">
        <div
          data-reveal-content
          className="grid gap-x-10 gap-y-8 lg:grid-cols-[7rem_1fr]"
        >
          <div>
            {/*
              Stacked above the label rather than inline: CERTIFICATIONS
              already uses nearly all of the 7rem gutter on its own, and a
              prefix sharing that line pushes the label into wrapping.
            */}
            {index && (
              <p className="font-mono text-2xs tracking-[0.18em] text-faint" aria-hidden="true">
                {index}
              </p>
            )}
            <h2
              id={`${id}-heading`}
              className={`font-mono text-2xs font-medium uppercase tracking-[0.18em] text-muted ${
                index ? "mt-1" : ""
              }`}
            >
              <MaskText delay={120}>{label}</MaskText>
            </h2>
            {meta && (
              <p className="mt-2 font-mono text-2xs uppercase tracking-[0.12em] text-faint">
                <MaskText delay={200}>{meta}</MaskText>
              </p>
            )}
          </div>
          {ledger ? children : <div>{children}</div>}
        </div>
      </Container>
    </section>
  );
}
