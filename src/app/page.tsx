import { Rail } from "@/components/Rail";
import { MobileNav } from "@/components/MobileNav";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Homelab } from "@/components/Homelab";
import { Networking } from "@/components/Networking";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { profile, education } from "@/lib/data";

/*
  Structured data. Deliberately omits `jobTitle`: the current held title is Data
  Analyst, and asserting an infrastructure title here would be a false claim in
  machine-readable form. `description` and `knowsAbout` convey focus honestly.
*/
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  description: profile.tagline,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: education[0].school,
  },
  knowsAbout: [
    "Linux system administration",
    "Server monitoring",
    "Computer networking",
    "Self-hosting",
    "Python scripting",
  ],
  sameAs: [profile.github, profile.linkedin, profile.tryhackme],
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-text focus:px-4 focus:py-2.5 focus:font-mono focus:text-2xs focus:uppercase focus:tracking-[0.12em] focus:text-bg"
      >
        Skip to content
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Rail />
      <MobileNav />
      <ScrollReveal />

      {/* Offset clears the fixed rail; below its breakpoint the page is full width. */}
      <div className="lg:pl-[168px]">
        <main id="main">
          <Hero />
          <About />
          <Experience />
          <Homelab />
          <Networking />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
