/*
  The section map, shared by the desktop rail and the mobile navigator so the
  two can never drift out of sync.
*/
export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "homelab", label: "Homelab" },
  { id: "networking", label: "Networking" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export const LAST_SECTION = sections[sections.length - 1].id;

export type SectionState = "pending" | "ready" | "active";
