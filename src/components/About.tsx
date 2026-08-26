import Image from "next/image";
import { Section } from "./Section";
import { education, profile } from "@/lib/data";

export function About() {
  return (
    <Section id="about" index="01" label="About">
      <div className="grid gap-12 xl:grid-cols-[1.5fr_1fr]">
        <div className="max-w-[66ch] space-y-4 text-md leading-relaxed text-body">
          <p>
            I studied Computer Engineering at Savitribai Phule Pune University. Most of what I
            know about Linux and networking came from practice rather than from a syllabus: a
            server built out of an old desktop, a workstation installed from the base system up,
            and a lot of time spent working out why something had stopped working.
          </p>
          <p>
            The server handles media, music, and file storage for everything in the house, with
            remote access over a Tailscale mesh so nothing has to be exposed to the internet. I
            own all of it, from the storage layout and user access to patching and the failures.
            The workstation runs Arch, configured by hand, because defaults tend to hide the parts
            worth understanding.
          </p>
          <p>
            The problems I like are diagnostic ones. A service that will not start, a machine that
            will not route, a disk filling up for no reason anyone can name. I have been the first
            person called for that since 2023. I am working toward a CCNA and looking for systems
            or network operations work where this is the job rather than what I do after hours.
          </p>
        </div>

        <div>
          {/*
            Desaturated so the one photograph on the page sits inside the
            achromatic palette instead of becoming the loudest element on it.
            Colour on this site means state, and a portrait is not a state.
          */}
          <div className="mb-8 max-w-[220px] border border-border bg-panel p-1.5">
            {/*
              Sized at its display width rather than the source's 800px, so
              Next generates a 1x and a 2x variant. Passing the full size with
              a `sizes` hint served only a 1x file, which is soft on retina.
            */}
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={220}
              height={220}
              className="h-auto w-full grayscale"
            />
          </div>

          <h3 className="mb-5 font-mono text-2xs uppercase tracking-[0.16em] text-faint">
            Education
          </h3>
          {education.map((item) => (
            <div
              key={item.school}
              className="border-t border-border py-4 first:border-t-0 first:pt-0"
            >
              <p className="text-base font-medium text-text">{item.credential}</p>
              <p className="mt-1.5 text-sm text-muted">{item.school}</p>
              <p className="mt-1.5 font-mono text-2xs tracking-[0.08em] text-faint">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
