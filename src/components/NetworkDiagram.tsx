const devices = ["Phone", "Laptop", "Smart TV"];
const services = ["Jellyfin", "Navidrome", "Samba / NAS"];

export function NetworkDiagram() {
  return (
    <div
      className="rounded-lg border border-border bg-card p-6 font-mono text-xs sm:text-sm"
      aria-hidden="true"
    >
      <div className="flex flex-wrap justify-center gap-3">
        {devices.map((device) => (
          <span
            key={device}
            className="rounded-md border border-border px-3 py-1.5 text-muted"
          >
            {device}
          </span>
        ))}
      </div>

      <div className="mx-auto my-2 h-6 w-px bg-border" />
      <p className="text-center text-[11px] text-muted-2">LAN</p>
      <div className="mx-auto mb-2 h-6 w-px bg-border" />

      <div className="mx-auto max-w-sm rounded-md border border-primary/40 bg-bg p-4 text-center">
        <p className="font-semibold text-text">Self-Hosted Linux Server</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {services.map((service) => (
            <span
              key={service}
              className="rounded-md border border-border px-2.5 py-1 text-[11px] text-muted"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto my-2 h-6 w-px bg-border" />
      <p className="text-center text-[11px] text-muted-2">Tailscale VPN · no inbound ports exposed</p>
      <div className="mx-auto mt-2 h-6 w-px bg-border" />

      <div className="mx-auto w-fit rounded-md border border-signal/40 px-3 py-1.5 text-signal">
        Remote access
      </div>
    </div>
  );
}
