import { type CSSProperties } from "react";

/*
  The only component permitted to emit colour. A 6px square rather than a
  circle: squares read as instrumentation, circles read as notification.

  `boot` runs the resolve sequence (dim, then checking, then settled) and is
  used during the hero bring-up. `breathe` is the ambient health-check pulse.
*/
const tones = {
  ok: "var(--state-ok)",
  progress: "var(--state-progress)",
  down: "var(--state-down)",
} as const;

export function StateIndicator({
  state,
  breathe = false,
  boot = false,
  delay = 0,
}: {
  state: keyof typeof tones;
  breathe?: boolean;
  boot?: boolean;
  delay?: number;
}) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 shrink-0 ${boot ? "state-boot" : ""} ${
        breathe ? "state-breathe" : ""
      }`}
      style={
        {
          background: tones[state],
          "--state-color": tones[state],
          "--d": `${delay}ms`,
        } as CSSProperties
      }
      aria-hidden="true"
    />
  );
}
