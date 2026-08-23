/*
  The only component permitted to emit colour. A 6px square rather than a
  circle: squares read as instrumentation, circles read as notification.

  `breathe` adds the slow pulse a status page uses to signal a live check.
*/
const tones = {
  ok: "bg-state-ok",
  progress: "bg-state-progress",
  down: "bg-state-down",
} as const;

export function StateIndicator({
  state,
  breathe = false,
}: {
  state: keyof typeof tones;
  breathe?: boolean;
}) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 shrink-0 ${tones[state]} ${
        breathe ? "state-breathe" : ""
      }`}
      aria-hidden="true"
    />
  );
}
