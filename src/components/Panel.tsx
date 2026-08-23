import { type ReactNode } from "react";

/*
  The atomic content block. Hairline border, optional metadata header, near-square
  corners. Depth comes from border and surface luminance, never from shadow.
*/
export function Panel({
  label,
  meta,
  children,
  padded = true,
  className = "",
}: {
  label?: string;
  meta?: string;
  children: ReactNode;
  padded?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`panel border border-border bg-panel transition-colors duration-200 hover:border-border-strong ${className}`}
    >
      {(label || meta) && (
        <div className="panel-head flex items-baseline justify-between gap-4 border-b border-border px-6 py-3">
          {label && (
            <span className="font-mono text-2xs uppercase tracking-[0.14em] text-faint">
              {label}
            </span>
          )}
          {meta && (
            <span className="font-mono text-2xs uppercase tracking-[0.1em] text-faint">
              {meta}
            </span>
          )}
        </div>
      )}
      <div className={padded ? "px-6 py-6" : ""}>{children}</div>
    </div>
  );
}
