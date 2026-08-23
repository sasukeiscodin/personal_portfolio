/*
  Placeholder topology. This is a schematic of the real setup, not an artifact —
  it is replaced in Wave 3 by a hand-authored SVG matched to the design tokens.
*/
const devices = ["Phone", "Laptop", "TV"];
const services = ["Jellyfin", "Navidrome", "Samba / NAS"];

function Rung() {
  return <div className="mx-auto h-5 w-px bg-border" aria-hidden="true" />;
}

export function NetworkDiagram() {
  return (
    <div
      className="border border-border bg-panel p-8 font-mono"
      aria-hidden="true"
    >
      <div className="flex flex-wrap justify-center gap-2">
        {devices.map((device) => (
          <span
            key={device}
            className="border border-border px-3 py-1.5 text-2xs uppercase tracking-[0.1em] text-muted"
          >
            {device}
          </span>
        ))}
      </div>

      <Rung />
      <p className="text-center text-2xs uppercase tracking-[0.16em] text-faint">LAN</p>
      <Rung />

      <div className="mx-auto max-w-xs border border-border-strong bg-bg p-5 text-center">
        <p className="text-2xs font-medium uppercase tracking-[0.14em] text-text">
          Linux Server
        </p>
        <div className="mt-3 flex flex-col gap-1.5">
          {services.map((service) => (
            <span
              key={service}
              className="text-2xs uppercase tracking-[0.1em] text-muted"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <Rung />
      <p className="text-center text-2xs uppercase tracking-[0.14em] text-faint">
        Tailscale · no inbound ports
      </p>
      <Rung />

      <div className="mx-auto w-fit border border-border px-3 py-1.5 text-2xs uppercase tracking-[0.1em] text-muted">
        Remote access
      </div>
    </div>
  );
}
