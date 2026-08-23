/*
  Section label. The numbering (01 / 02 / …) and trailing rule were removed —
  the full-bleed rule now comes from the section's own top border, and position
  is communicated structurally rather than by an index.
*/
export function SectionHeading({
  id,
  label,
  meta,
}: {
  id: string;
  label: string;
  meta?: string;
}) {
  return (
    <div className="mb-12 flex items-baseline justify-between gap-6">
      <h2
        id={id}
        className="font-mono text-2xs font-medium uppercase tracking-[0.18em] text-muted"
      >
        {label}
      </h2>
      {meta && (
        <span className="font-mono text-2xs uppercase tracking-[0.12em] text-faint">
          {meta}
        </span>
      )}
    </div>
  );
}
