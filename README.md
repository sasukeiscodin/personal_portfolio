# Prathamesh Kasar

Source for my personal portfolio: a single page covering my Linux and networking
work, the infrastructure I run at home, and what I am currently studying.

**Live site:** https://prathameshkasar.vercel.app
**Contact:** prathameshsk1@gmail.com

---

## About me

I am a Computer Engineering graduate from Savitribai Phule Pune University,
based in Pune. I work as a Data Analyst and Python Developer at Future Market
Insights, where I automate data workflows and troubleshoot pipelines and
reporting systems. I joined as an intern in March 2026 and moved into the
full-time role in August.

Since 2023 I have also been the person friends, family and people nearby bring
broken machines to: boot failures, driver problems, network and connectivity
faults, reimaging, patching, backups. That turned into running my own Linux
server, built from a repurposed PC, which hosts media, music and
network-attached storage for the house and which I administer end to end. I
installed and configured Arch Linux from scratch, down to partitioning and the
window manager, because I wanted to understand the system rather than accept
its defaults.

I hold the Google Cybersecurity Professional Certificate and I am working toward
a CCNA. I am looking for a Linux system administration, monitoring desk or
incident resolution role.

---

## What the site covers

| Section | Content |
|---|---|
| **About** | Background and education |
| **Experience** | IT support since 2023, and the analyst and Python role |
| **Homelab** | The self-hosted Linux server, its services and its topology |
| **Networking** | Applied troubleshooting, plus lab practice in Packet Tracer, GNS3 and Wireshark |
| **Projects** | Arch Linux built and configured from scratch |
| **Skills** | Split into hands-on and studied, rather than one undifferentiated list |
| **Certifications** | Completed and in progress |
| **Contact** | Direct email, and links out |

Everything on the site is drawn from work I have actually done. Skills are
deliberately tiered so that "hands-on" means there is something behind it, and
nothing claims more than I can talk through in an interview.

---

## Design notes

The site is built around one idea: an interface should look like the systems it
describes.

**Instruments, not decoration.** Panels, hairline rules, state indicators and
structured metadata, borrowed from status pages and observability tooling rather
than from portfolio templates.

**Colour means state.** The interface is achromatic by default. Colour appears
only where it carries meaning: green for available and completed, amber for in
progress. There is no decorative accent.

**The page comes online rather than fading in.** Motion is organised into four
tiers (system, component, response, ambient) and each animation expresses a
state transition. The hero runs a bring-up sequence, section dividers rule
themselves in, and the left rail is a service map whose nodes move from pending
to ready as you scroll.

**Reduced motion is a real mode.** Every animation is gated so that a visitor
with reduced motion enabled, or with JavaScript disabled, gets the full content
immediately and never a blank screen.

---

## Built with

Next.js, TypeScript and Tailwind CSS. Static output, no client-side data
fetching, self-hosted fonts, and a single small client component per interactive
behaviour.

All site content lives in `src/lib/data.ts`, so copy and structure are edited in
one place rather than scattered through components.

---

## Repository layout

```
src/
├── app/          routes, metadata, global styles, generated icon and OG image
├── components/   section and primitive components
└── lib/data.ts   all site content

public/
├── images/       evidence artifacts (see ASSETS.md)
└── resume/       downloadable CV
```

`ASSETS.md` documents the images the site expects, where each one appears, and
how to add them.

---

## Links

- GitHub: https://github.com/sasukeiscodin
- LinkedIn: https://www.linkedin.com/in/prathameshkasar
- TryHackMe: https://tryhackme.com/p/sasukeusingthm
- Email: prathameshsk1@gmail.com
