import { Container } from "./Container";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-3 font-mono text-xs text-muted-2 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </Container>
    </footer>
  );
}
