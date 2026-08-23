import { type CSSProperties, type ReactNode } from "react";

/*
  Short text that rises from behind a clip edge as its section arrives, rather
  than fading in. Reserve for labels and headings: body copy wraps, and masking
  a wrapped block moves every line together, which reads wrong.
*/
export function MaskText({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span
      className={`mask-reveal ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      <span>{children}</span>
    </span>
  );
}
