# Assets

How to add images to the site. Two steps every time: **drop the file in the right
folder**, then **add one entry to `src/lib/data.ts`**. Nothing else changes.

---

## Folders

```
public/images/
├── homelab/     server photo + terminal captures
├── desktop/     Arch + i3 screenshot
└── profile/     portrait (optional, later)
```

---

## 1. Arch + i3 desktop

**File:** `public/images/desktop/arch-i3.png`

| | |
|---|---|
| Size | 1920 × 1080 |
| Format | PNG |
| Max weight | 400 KB |

A clean desktop: a couple of terminals open, nothing personal visible in tabs,
filenames, or window titles.

**Paste into `src/lib/data.ts`**, replacing `export const archArtifacts: ArtifactSpec[] = [];`

```ts
export const archArtifacts: ArtifactSpec[] = [
  {
    src: "/images/desktop/arch-i3.png",
    alt: "Arch Linux running the i3 window manager, with tiled terminal windows",
    caption: "Arch Linux · i3",
    meta: "Daily driver",
    width: 1920,
    height: 1080,
  },
];
```

---

## 2. Homelab server photo

**File:** `public/images/homelab/server.jpg`

| | |
|---|---|
| Size | ~1600 × 1200 |
| Format | JPG |
| Max weight | 300 KB |

The actual machine. Plain and unglamorous is fine. It exists, and that is the point.
Just don't shoot it in the dark.

---

## 3. Terminal captures

**Folder:** `public/images/homelab/`

| | |
|---|---|
| Size | ~1600 × 1000 |
| Format | **PNG** (JPG smears small text) |
| Max weight | 300 KB each |

Dark terminal theme so they sit naturally against the page.

| File | Command | What it proves |
|---|---|---|
| `services.png` | `systemctl status` on Jellyfin / Navidrome / Samba | The services genuinely run |
| `storage.png` | `df -h` | You watch storage |
| `uptime.png` | `uptime` | The box stays up |
| `tailscale.png` | `tailscale status` | The VPN claim is real |

Any subset is worth having. `services.png` and `tailscale.png` carry the most weight.

**Redact before capturing:** public IPs, real hostnames, Tailscale node names, and
anything in the shell prompt you'd rather not publish.

**Paste into `src/lib/data.ts`**, replacing `export const homelabArtifacts: ArtifactSpec[] = [];`

```ts
export const homelabArtifacts: ArtifactSpec[] = [
  {
    src: "/images/homelab/server.jpg",
    alt: "The repurposed desktop PC running the home server",
    caption: "The server",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/homelab/services.png",
    alt: "systemctl output showing the Jellyfin, Navidrome, and Samba services active",
    caption: "systemctl status",
    meta: "Service health",
    width: 1600,
    height: 1000,
  },
  {
    src: "/images/homelab/tailscale.png",
    alt: "tailscale status output listing connected devices on the mesh network",
    caption: "tailscale status",
    meta: "Remote access",
    width: 1600,
    height: 1000,
  },
];
```

Delete any entry whose file you haven't added. A missing file breaks the build.

---

## Rules

**`width` and `height` must match the real pixel dimensions of the file.** They
prevent layout shift while the image loads; wrong numbers cause the image to render
distorted. Check with an image viewer, or just say the word and the values can be
read off the files directly.

**`alt` describes what the image *demonstrates*, not what it is.** Screenshot text is
invisible to screen readers and to search engines.

- Bad: `alt="terminal screenshot"`
- Good: `alt="systemctl output showing Jellyfin, Navidrome, and Samba active"`

**Never publish an image of something that isn't real.** Every artifact on this site
is evidence, and one fabricated screenshot undermines all of them.

---

## Checklist

```
□ public/images/desktop/arch-i3.png
□ public/images/homelab/server.jpg
□ public/images/homelab/services.png
□ public/images/homelab/storage.png
□ public/images/homelab/uptime.png
□ public/images/homelab/tailscale.png
□ Entries added to src/lib/data.ts
□ npm run build passes
```
