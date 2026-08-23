import { Container } from "./Container";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-start justify-between gap-2 font-mono text-2xs uppercase tracking-[0.12em] text-faint sm:flex-row sm:items-center">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </Container>
    </footer>
  );
}
