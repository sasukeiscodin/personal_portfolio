# Assets and remaining content

Everything the site is still waiting on, what each item proves, exactly where it
goes, and the exact code to paste.

The pattern is always the same:

1. Put the file in the right folder under `public/images/`
2. Paste the matching entry into `src/lib/data.ts`
3. Run `npm run build` to confirm nothing broke

Nothing else needs editing. Every section already has its slot and renders
nothing at all while its list is empty, so you can add these one at a time.

---

## Status

| # | Item | Type | Priority | Done |
|---|---|---|---|---|
| 1 | Arch + i3 desktop | Screenshot | High | ☐ |
| 2 | Homelab server photo | Photo | High | ☐ |
| 3 | `systemctl status` | Screenshot | High | ☐ |
| 4 | `tailscale status` | Screenshot | High | ☐ |
| 5 | `df -h` | Screenshot | Medium | ☐ |
| 6 | `uptime` | Screenshot | Medium | ☐ |
| 7 | TryHackMe figures | Text | High | ☐ |
| 8 | TryHackMe profile screenshot | Screenshot | Medium | ☐ |
| 9 | Packet Tracer or GNS3 topology | Screenshot | Medium | ☐ |
| 10 | Wireshark capture | Screenshot | Medium | ☐ |
| 11 | Profile photo | Photo | Medium | ☑ done |
| 12 | Google certificate link | Text | Medium | ☐ |
| 13 | Networking lab detail | Text | High | ☐ |
| 14 | Homelab specifics | Text | Medium | ☐ |
| 15 | IT support scale | Text | Medium | ☐ |

---

## Folders

```
public/images/
├── desktop/      Arch + i3 screenshot
├── homelab/      server photo and terminal captures
├── networking/   Packet Tracer, GNS3, Wireshark
├── tryhackme/    profile screenshot or badge
└── profile/      portrait
```

All five already exist in the repo.

---

# 1. Arch + i3 desktop

**Proves:** the Arch-from-scratch claim, instantly. Highest visual return of
anything on this list, and it takes about ten seconds.

**Appears in:** Projects, directly under the Arch Linux panel.

**File:** `public/images/desktop/arch-i3.png`

| Setting | Value |
|---|---|
| Size | 1920 x 1080 |
| Format | PNG |
| Max weight | 400 KB |

**How to capture:** open two or three terminals in your usual i3 layout, run
something ordinary in them (`htop`, a `pacman` query, `neofetch` if you use it),
then take a full-screen capture.

**Check before saving:** no personal browser tabs, no filenames or window titles
you would not publish, no messages or notifications on screen.

**Paste this**, replacing the line `export const archArtifacts: ArtifactSpec[] = [];`

```ts
export const archArtifacts: ArtifactSpec[] = [
  {
    src: "/images/desktop/arch-i3.png",
    alt: "Arch Linux running the i3 window manager with tiled terminal windows",
    caption: "Arch Linux · i3",
    meta: "Daily driver",
    width: 1920,
    height: 1080,
  },
];
```

---

# 2 to 6. Homelab: the server and its terminal output

These four terminal captures plus the hardware photo all render together in a
two-column grid inside the **Homelab** section, below the topology diagram.

**Folder:** `public/images/homelab/`

### The photo

**Proves:** the machine physically exists. An ordinary photo of a tower with
drives in it is more convincing than any diagram, because a diagram can be drawn
by anyone.

**File:** `public/images/homelab/server.jpg`

| Setting | Value |
|---|---|
| Size | around 1600 x 1200 |
| Format | JPG |
| Max weight | 300 KB |

Daylight or a lamp is enough. It does not need to look tidy. It needs to look
real.

### The terminal captures

| File | Command | What it proves |
|---|---|---|
| `services.png` | `systemctl status jellyfin navidrome smbd` | The services genuinely run |
| `tailscale.png` | `tailscale status` | The VPN claim is real |
| `storage.png` | `df -h` | You watch storage |
| `uptime.png` | `uptime` | The box stays up |

| Setting | Value |
|---|---|
| Size | around 1600 x 1000 |
| Format | **PNG**, not JPG |
| Max weight | 300 KB each |

PNG matters here. JPG compression smears small text and terminal output becomes
unreadable at exactly the size a recruiter views it.

Use your normal dark terminal theme so the captures sit naturally against the
page.

**Redact before capturing:** public IP addresses, real hostnames, Tailscale node
names belonging to other people, any username in the shell prompt you would
rather not publish, and anything visible in scrollback.

**`services.png` and `tailscale.png` carry the most weight.** If you only take
two, take those.

**Paste this**, replacing `export const homelabArtifacts: ArtifactSpec[] = [];`
and deleting any entry whose file you did not add:

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
    alt: "systemctl output showing the Jellyfin, Navidrome and Samba services active",
    caption: "systemctl status",
    meta: "Service health",
    width: 1600,
    height: 1000,
  },
  {
    src: "/images/homelab/tailscale.png",
    alt: "tailscale status listing the devices connected to the mesh network",
    caption: "tailscale status",
    meta: "Remote access",
    width: 1600,
    height: 1000,
  },
  {
    src: "/images/homelab/storage.png",
    alt: "df -h output showing disk usage across the server's mounted volumes",
    caption: "df -h",
    meta: "Storage",
    width: 1600,
    height: 1000,
  },
  {
    src: "/images/homelab/uptime.png",
    alt: "uptime output showing how long the server has been running",
    caption: "uptime",
    meta: "Availability",
    width: 1600,
    height: 1000,
  },
];
```

**A missing file breaks the build.** Delete the entries you have not supplied.

---

# 7 and 8. TryHackMe

You said the profile is substantial and worth featuring. I have built the slot,
but I will not put a number on the site that I have not seen, so the block stays
hidden until you fill it in.

### The figures

**Appears in:** Certifications, in its own block below the certificates.

Open your profile and read off whatever it shows. Fill in only the fields you
actually have and delete the rest.

**Paste this**, replacing the commented-out `tryhackmeStats` block:

```ts
export const tryhackmeStats: Stat[] = [
  { label: "Rank", value: "" },
  { label: "Rooms completed", value: "" },
  { label: "Streak", value: "" },
  { label: "Badges", value: "" },
];
```

Example of what filled-in looks like: `{ label: "Rooms completed", value: "84" }`

### The profile screenshot

**File:** `public/images/tryhackme/profile.png`

| Setting | Value |
|---|---|
| Size | around 1400 x 800 |
| Format | PNG |
| Max weight | 300 KB |

Capture the section of your profile showing rank, badges and completed rooms.
Crop out browser chrome, bookmarks and any other tabs.

**Paste this**, replacing `export const tryhackmeArtifacts: ArtifactSpec[] = [];`

```ts
export const tryhackmeArtifacts: ArtifactSpec[] = [
  {
    src: "/images/tryhackme/profile.png",
    alt: "TryHackMe profile showing completed rooms, rank and earned badges",
    caption: "TryHackMe profile",
    width: 1400,
    height: 800,
  },
];
```

**If the profile turns out to be thin,** tell me and I will remove the link
rather than feature it. A sparse profile linked prominently costs more than no
link.

---

# 9 and 10. Networking labs

**Proves:** that the networking claim is practice, not vocabulary. This matters
because networking is half your role target.

**Appears in:** the Networking section, below the Applied and Lab practice
columns.

**Folder:** `public/images/networking/`

| File | Content |
|---|---|
| `topology.png` | A Packet Tracer or GNS3 topology you built, with devices and links visible |
| `wireshark.png` | A capture you analysed, with the filter bar and packet list visible |

| Setting | Value |
|---|---|
| Size | around 1600 x 1000 |
| Format | PNG |
| Max weight | 300 KB each |

**Redact:** any real public IPs in the Wireshark capture. Lab and private range
addresses (10.x, 172.16.x, 192.168.x) are fine to show.

**Paste this**, replacing `export const networkingArtifacts: ArtifactSpec[] = [];`

```ts
export const networkingArtifacts: ArtifactSpec[] = [
  {
    src: "/images/networking/topology.png",
    alt: "A routed network topology built in Cisco Packet Tracer",
    caption: "Packet Tracer",
    meta: "Lab topology",
    width: 1600,
    height: 1000,
  },
  {
    src: "/images/networking/wireshark.png",
    alt: "Wireshark capture filtered to trace a connectivity fault",
    caption: "Wireshark",
    meta: "Packet analysis",
    width: 1600,
    height: 1000,
  },
];
```

---

# 11. Profile photo

**Proves:** nothing technical, but it builds trust, which matters more for a
candidate early in their career.

**Appears in:** About, beside the education column. Not the hero, where it would
compete with the status strip.

**File:** `public/images/profile/portrait.jpg`

| Setting | Value |
|---|---|
| Size | 800 x 800, square |
| Format | JPG |
| Max weight | 120 KB |
| Background | Plain wall, no clutter |
| Framing | Head and shoulders |
| Lighting | Natural light facing you, not behind you |
| Dress | Whatever you would wear to the interview |

It will be rendered desaturated to sit inside the achromatic palette. A
full-colour photo would become the loudest thing on the page, which is the wrong
hierarchy.

Send it over and I will wire it in, since it needs a layout change rather than
just a data entry.

---

# 12. Google certificate verification

**Proves:** the certificate is real and checkable. An unverifiable credential is
worth noticeably less than a linked one.

Find the Coursera or Credly link for your Google Cybersecurity Professional
Certificate and send me the URL. I will attach it to the existing entry.

---

# 13 to 15. Text I still need

These are not files. They are details only you know, and each one measurably
strengthens a section that is currently vaguer than it should be.

### 13. Networking lab detail (highest value)

The two Lab practice lines currently read generically because I do not know the
specifics. One sentence each would fix it:

- **Packet Tracer / GNS3:** what have you actually built? Number of routers or
  switches, VLANs, static or dynamic routing, subnetting practice?
- **Wireshark:** what were you tracing? A DNS failure, a DHCP problem, a slow
  transfer, general protocol study?

### 14. Homelab specifics

Concrete numbers turn a claim into a fact:

- Which distro is on the server?
- Rough hardware, and how much storage?
- Roughly how long has it been running?
- How many services and how many devices use it?

### 15. IT support scale

"Friends, family and local users" undersells three years of work. Roughly how
many machines or people over that period, and roughly how often? Even
approximate figures are far stronger than none.

---

# Rules that apply to every asset

**Dimensions must match the real file.** The `width` and `height` values prevent
the page jumping around while an image loads. Wrong numbers render the image
distorted. Check in any image viewer, or drop the files in and I will read the
real values off them.

**Alt text describes what the image proves, not what it is.** Screenshot text is
invisible to screen readers and to search engines, so the alt text is the only
description that exists.

- Weak: `alt="terminal screenshot"`
- Strong: `alt="systemctl output showing Jellyfin, Navidrome and Samba active"`

**Nothing fabricated, ever.** Every artifact on this site is evidence. One
invented screenshot would undermine all of them, and it is the single fastest way
to lose an offer if it comes up in an interview.

**Keep the weights down.** The whole page should stay under about 1 MB. Use
[Squoosh](https://squoosh.app) if anything comes out oversized.

---

# Final checklist

```
Images
  □ public/images/desktop/arch-i3.png
  □ public/images/homelab/server.jpg
  □ public/images/homelab/services.png
  □ public/images/homelab/tailscale.png
  □ public/images/homelab/storage.png
  □ public/images/homelab/uptime.png
  □ public/images/tryhackme/profile.png
  □ public/images/networking/topology.png
  □ public/images/networking/wireshark.png
  ☑ public/images/profile/portrait.jpg

Data entries in src/lib/data.ts
  □ archArtifacts
  □ homelabArtifacts
  □ tryhackmeArtifacts
  □ tryhackmeStats
  □ networkingArtifacts

Text to send over
  □ TryHackMe figures
  □ Networking lab detail
  □ Homelab specifics
  □ IT support scale
  □ Google certificate verification link

Then
  □ npm run build passes
  □ Check the site on your phone
```
