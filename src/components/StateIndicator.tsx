/*
  The only component permitted to emit colour. A 6px square rather than a
  circle — squares read as instrumentation, circles read as notification.
*/
const tones = {
  ok: "bg-state-ok",
  progress: "bg-state-progress",
  down: "bg-state-down",
} as const;

export function StateIndicator({ state }: { state: keyof typeof tones }) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 shrink-0 ${tones[state]}`}
      aria-hidden="true"
    />
  );
}
