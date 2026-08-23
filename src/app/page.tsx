import { Rail } from "@/components/Rail";
import { MobileNav } from "@/components/MobileNav";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Homelab } from "@/components/Homelab";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Rail />
      <MobileNav />
      <ScrollReveal />
      {/* Offset clears the fixed rail; below its breakpoint the page is full width. */}
      <div className="lg:pl-[168px]">
        <main>
          <Hero />
          <About />
          <Experience />
          <Homelab />
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
