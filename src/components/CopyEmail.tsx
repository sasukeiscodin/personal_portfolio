"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";

/*
  Sits alongside the mailto link rather than replacing it: a recruiter clicking
  an email address expects their mail client, and plenty of people would rather
  copy the address than launch one.

  The button is a state transition like everything else here: idle, copied,
  failed. Failure is surfaced rather than swallowed, because clipboard access
  can be blocked and silently doing nothing is worse than saying so.
*/
type State = "idle" | "copied" | "failed";

const labels: Record<State, string> = {
  idle: "Copy",
  copied: "Copied",
  failed: "Press Ctrl+C",
};

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<State>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    clearTimeout(timer.current);

    // Clipboard access can reject, or hang when the document lacks focus.
    // Racing a deadline guarantees the button always reports something back
    // rather than sitting silently on "Copy".
    const wrote = navigator.clipboard
      ? navigator.clipboard
          .writeText(email)
          .then(() => true)
          .catch(() => false)
      : Promise.resolve(false);

    const ok = await Promise.race([
      wrote,
      new Promise<boolean>((resolve) => setTimeout(() => resolve(false), 1200)),
    ]);

    setState(ok ? "copied" : "failed");
    timer.current = setTimeout(() => setState("idle"), 2200);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-muted transition-colors duration-150 hover:border-border-strong hover:text-text"
    >
      {state === "copied" ? (
        <Check size={13} className="text-state-ok" aria-hidden="true" />
      ) : (
        <Copy size={13} aria-hidden="true" />
      )}
      {/* Announced to screen readers when it changes, not on every render. */}
      <span aria-live="polite">{labels[state]}</span>
    </button>
  );
}
