export const profile = {
  name: "Prathamesh Kasar",
  title: "Linux System Administration · Server Monitoring · Incident Resolution",
  location: "Hinjewadi, Pune, India",
  email: "prathameshsk1@gmail.com",
  github: "https://github.com/sasukeiscodin",
  linkedin: "https://www.linkedin.com/in/prathameshkasar/",
  tryhackme: "https://tryhackme.com/p/sasukeusingthm",
  resumeUrl: "/resume/Prathamesh_Kasar_Resume.pdf",
  summary:
    "Computer Engineering graduate with hands-on Linux system administration experience, including building and maintaining a self-hosted multi-service Linux server from scratch. Diagnoses and resolves system-level, network, and application issues through ongoing IT support since 2023. Experienced in server health monitoring, patch management, backup and image handling, and service availability maintenance. Google Cybersecurity Professional Certificate holder, seeking a monitoring desk or incident resolution role.",
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "IT Support",
    org: "Volunteer / Personal",
    period: "2023 — Present",
    points: [
      "Diagnosed and resolved Windows OS, boot, driver, network, and software issues for friends, family, and local users, serving as first point of contact for incident triage and resolution.",
      "Performed system backup and image management, including OS reimaging and restore operations on workstations.",
      "Managed operating system patch deployment and software updates to maintain system security and stability.",
      "Troubleshot network connectivity issues including TCP/IP configuration, DNS resolution, printer sharing, and Wi-Fi problems.",
      "Documented recurring issues and applied preventive maintenance to reduce repeat incidents and improve system uptime.",
    ],
  },
  {
    role: "Data Analyst & Python Developer",
    org: "Future Market Insights, Pune",
    period: "Aug 2026 — Present",
    points: [
      "Automated repetitive data workflows using Python scripts, reducing manual effort and improving turnaround time.",
      "Performed troubleshooting and issue resolution on data pipelines, automation processes, and reporting systems.",
      "Maintained documentation of methodologies, code changes, and process improvements for team traceability.",
      "Built interactive dashboards and analytical reports using Power BI and Excel for stakeholder reporting.",
    ],
  },
  {
    role: "Data Analyst Intern",
    org: "Future Market Insights, Pune",
    period: "Mar 2026 — Aug 2026",
    points: [
      "Preceded the full-time Data Analyst & Python Developer role at the same organization.",
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
    "Built and administer a multi-service Linux server on a repurposed PC for continuous media, file, and storage availability on the local network.",
  stack: ["Linux", "Jellyfin", "Navidrome", "Samba/SMB", "NAS", "Tailscale"],
  points: [
    "Hosts media (Jellyfin), music (Navidrome), and network-attached storage for continuous service availability.",
    "Configured Samba (SMB) file-sharing for centralized cross-device access across the local network.",
    "Implemented secure remote access via Tailscale mesh VPN without exposing inbound ports.",
    "Monitors server health, service uptime, and storage utilization; performs ongoing patch management and troubleshooting.",
    "Manages end-to-end server operations: networking, user access, storage, and application-level service configuration.",
  ],
};

export const archProject: LabProject = {
  title: "Linux System Customization & Administration (Arch Linux)",
  summary:
    "Installed and configured Arch Linux from scratch into a fully functional daily-driver environment.",
  stack: ["Arch Linux", "i3wm", "pacman"],
  points: [
    "Installed and configured Arch Linux from scratch: disk partitioning, bootloader, base system, networking, and user environment.",
    "Configured the i3 window manager, system services, audio, fonts, and desktop utilities into a daily-driver setup.",
    "Managed packages and system-level dependencies using pacman; resolved dependency conflicts and system breakages.",
  ],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Linux Administration",
    items: ["Arch Linux", "Debian-based", "System installation", "Configuration & troubleshooting", "Performance tuning"],
  },
  {
    category: "Server Operations",
    items: ["Service deployment", "Uptime monitoring", "Patch management", "Backup & image handling", "User access management"],
  },
  {
    category: "Networking",
    items: ["TCP/IP", "LAN/WAN", "DNS", "DHCP", "IP addressing", "VPN (Tailscale)", "Network troubleshooting"],
  },
  {
    category: "Programming & Scripting",
    items: ["Python (automation, scripting)", "SQL"],
  },
  {
    category: "Self-Hosting & Services",
    items: ["Jellyfin", "Navidrome", "Samba/SMB", "NAS", "Virtualization (VMware)"],
  },
  {
    category: "Security",
    items: ["Network security", "Security operations", "Threat detection", "Risk management"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Power BI", "MS Office", "VMware"],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  topics: string[];
};

export const certifications: Certification[] = [
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    topics: ["Linux", "SQL", "Network Security", "Incident Response", "Security Operations", "Risk Management", "SIEM", "Cyber Threats"],
  },
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
