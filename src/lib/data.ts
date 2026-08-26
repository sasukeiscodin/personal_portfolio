export const profile = {
  name: "Prathamesh Kasar",
  tagline: "Linux Systems · Networking · Server Monitoring",
  location: "Hinjewadi, Pune, India",
  email: "prathameshsk1@gmail.com",
  github: "https://github.com/sasukeiscodin",
  linkedin: "https://www.linkedin.com/in/prathameshkasar/",
  tryhackme: "https://tryhackme.com/p/sasukeusingthm",
  resumeUrl: "/resume/Prathamesh_Kasar_Resume.pdf",
  /*
    The filename carries a version suffix. Browsers and the CDN cache this
    aggressively, so replacing the image in place leaves people looking at the
    old one. Bump the number whenever the photo changes.
  */
  photo: {
    src: "/images/profile/portrait-v5.jpg",
    alt: "Prathamesh Kasar",
    width: 800,
    height: 800,
  },
  /*
    Two sentences: what I do, and where it came from. Availability and the CCNA
    live in the status strip, so this does not repeat them.
  */
  intro:
    "I administer Linux systems and troubleshoot networks. Most of that came from running my own server rather than from coursework, and from three years of fixing whatever people brought me.",
};

/*
  Hero status strip. Every value here must be factually true, because this component
  borrows the language of a status page, so it must never carry invented data.
*/
export type StatusItem = {
  label: string;
  value: string;
  state?: "ok" | "progress";
};

export const status: StatusItem[] = [
  { label: "Availability", value: "Open to roles", state: "ok" },
  { label: "Based in", value: "Pune, IN" },
  { label: "Certification", value: "CCNA in progress", state: "progress" },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  /* Shown under the org line, used for context the period alone can't carry. */
  note?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "IT Support",
    org: "Volunteer / Personal",
    period: "2023 - Present",
    points: [
      "First contact for Windows failures: boot problems, drivers, and software that stopped working.",
      "Reimaged workstations and handled backups and restores when a repair was not the answer.",
      "Kept machines patched and updated instead of waiting for something to break.",
      "Traced connectivity faults across TCP/IP settings, DNS resolution, printer sharing, and Wi-Fi.",
      "Wrote down the problems that kept recurring, which is how most of them stopped recurring.",
    ],
  },
  {
    role: "Data Analyst & Python Developer",
    org: "Future Market Insights, Pune",
    period: "Mar 2026 - Present",
    note: "Joined as Data Analyst Intern; converted to full-time in August 2026.",
    points: [
      "Write Python to replace data work that was being done by hand.",
      "Debug pipelines, automation, and reporting systems when they break.",
      "Keep documentation current: methods, code changes, and how a process changed.",
      "Build dashboards and reports in Power BI and Excel.",
    ],
  },
];

export type LabProject = {
  title: string;
  summary: string;
  stack: string[];
  points: string[];
};

export const homelab: LabProject = {
  title: "Self-Hosted Linux Server",
  summary:
    "An old desktop rebuilt into a server. It handles media, music, and file storage for every device in the house, and I run all of it.",
  stack: ["Linux", "Jellyfin", "Navidrome", "Samba/SMB", "NAS", "Tailscale"],
  points: [
    "Jellyfin for media, Navidrome for music, and network-attached storage for everything else.",
    "Samba shares so every device on the network reaches the same files.",
    "Remote access over a Tailscale mesh, with nothing exposed to the internet.",
    "Service health, uptime, and disk usage checked from the command line: systemctl, journalctl, df, htop.",
    "Everything else running it involves: storage layout, user access, patching, and whatever breaks.",
  ],
};

export const archProject: LabProject = {
  title: "Arch Linux, installed from the base system up",
  summary:
    "Nothing about this install was preconfigured, which was the point. It is the machine I use every day.",
  stack: ["Arch Linux", "i3wm", "pacman"],
  points: [
    "Partitioned the disk, installed the bootloader and base system, and set up networking and users by hand.",
    "Configured i3, system services, audio, fonts, and the rest of the desktop until it was usable full time.",
    "Manage packages with pacman, including dependency conflicts and the occasional system I have had to repair.",
  ],
};

/*
  Networking gets its own section because it is half the role target, and a row
  of protocol acronyms in the skills list reads as coursework rather than
  practice. Everything here is drawn from the support work, the homelab, or
  confirmed lab practice. No claims beyond that.
*/
export const networking = {
  summary:
    "Most of my networking is diagnostic: working out why one machine cannot reach another. The rest is lab work, building topologies and reading captures to see what is actually happening on the wire.",
  applied: [
    "TCP/IP configuration, DNS resolution, and DHCP faults, as first contact since 2023.",
    "Wi-Fi, connectivity, printer sharing, and file sharing across mixed Windows and Linux machines.",
    "A Tailscale mesh for remote access to the home server, with no inbound ports open.",
    "Samba shares reachable from every device on the local network.",
  ],
  lab: [
    "Topologies built and tested in Cisco Packet Tracer and GNS3.",
    "Traffic captures read in Wireshark to trace faults and follow protocol behaviour.",
  ],
  stack: ["TCP/IP", "DNS", "DHCP", "Tailscale", "Wireshark", "Packet Tracer", "GNS3"],
};

export type SkillGroup = {
  category: string;
  /* Backed by something concrete elsewhere on this page or by paid work. */
  handsOn: string[];
  /* Studied or used incidentally, with no artifact behind it. Honest tiering is
     more persuasive than a longer flat list, and it survives an interview. */
  familiar?: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Linux Administration",
    handsOn: ["Arch Linux", "Debian-based", "System installation", "Configuration & troubleshooting"],
    familiar: ["Performance tuning"],
  },
  {
    category: "Networking",
    handsOn: [
      "TCP/IP",
      "DNS",
      "DHCP",
      "IP addressing",
      "VPN (Tailscale)",
      "Network troubleshooting",
      "Wireshark",
      "Packet Tracer / GNS3",
    ],
    familiar: ["LAN/WAN"],
  },
  {
    category: "Server Operations",
    handsOn: [
      "Service deployment",
      "Health checks (systemctl, journalctl, df, htop)",
      "Patch management",
      "Backup & image handling",
      "User access management",
    ],
  },
  {
    category: "Programming & Scripting",
    handsOn: ["Python (automation, scripting)"],
    familiar: ["SQL"],
  },
  {
    category: "Self-Hosting & Services",
    handsOn: ["Jellyfin", "Navidrome", "Samba/SMB", "NAS"],
    familiar: ["Virtualization (VMware)"],
  },
  {
    category: "Security",
    handsOn: ["Secure remote access (no exposed ports)"],
    familiar: ["Network security", "Security operations", "Threat detection", "Risk management"],
  },
  {
    category: "Tools",
    handsOn: ["Git", "GitHub", "VS Code", "Power BI", "Excel"],
    familiar: ["VMware"],
  },
];

/*
  Evidence artifacts. To publish one: drop the file into the matching folder
  under public/images/, then add its entry to the relevant array below. Nothing
  else needs to change; the sections render whatever is present.

  `alt` describes what the image DEMONSTRATES, not what it is.
*/
export type ArtifactSpec = {
  src: string;
  alt: string;
  caption: string;
  meta?: string;
  width: number;
  height: number;
};

/* Hardware photo and terminal captures, rendered in the Homelab section. */
export const homelabArtifacts: ArtifactSpec[] = [];

/* Arch + i3 desktop capture, rendered in the Projects section. */
export const archArtifacts: ArtifactSpec[] = [];

/* Topology and packet-capture screenshots, rendered in the Networking section. */
export const networkingArtifacts: ArtifactSpec[] = [];

/* Profile screenshot or badge, rendered in the Certifications section. */
export const tryhackmeArtifacts: ArtifactSpec[] = [];

/*
  TryHackMe figures. Every field is optional and the block only renders once at
  least one is filled, so an empty profile shows nothing rather than a row of
  blanks. Only enter numbers you can see on your own profile page.
*/
export type Stat = { label: string; value: string };

export const tryhackmeStats: Stat[] = [
  { label: "Rank", value: "Top 6%" },
  { label: "Rooms completed", value: "110" },
  { label: "Badges", value: "17" },
];

export type Certification = {
  name: string;
  issuer: string;
  topics: string[];
  /* Optional: makes the certificate checkable rather than an assertion. */
  issued?: string;
  credentialId?: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    topics: ["Linux", "SQL", "Network Security", "Incident Response", "Security Operations", "Risk Management", "SIEM", "Cyber Threats"],
    issued: "June 2025",
    credentialId: "C5ZRSNGU9BP0",
    verifyUrl: "https://coursera.org/share/b07ef1b23a753b64993e57ce741088b7",
  },
];

/* Certifications actively being worked toward. Direction matters for a junior candidate. */
export const inProgress = [
  { name: "CCNA / Network+", detail: "Currently studying" },
];

export type EducationItem = {
  school: string;
  credential: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    school: "Savitribai Phule Pune University, Pune",
    credential: "Bachelor of Computer Engineering",
    period: "2026",
  },
  {
    school: "LVH Panchavati, Nashik",
    credential: "Higher Secondary Certificate (HSC)",
    period: "2022",
  },
];
