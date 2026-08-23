import { Container } from "./Container";
import { profile } from "@/lib/data";

// Resolved at build time — reflects when the site was last deployed.
const built = new Date();
const lastUpdated = built.toLocaleDateString("en-GB", {
  month: "long",
  year: "numeric",
});

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-start justify-between gap-2 font-mono text-2xs uppercase tracking-[0.12em] text-faint sm:flex-row sm:items-center">
        <p>
          &copy; {built.getFullYear()} {profile.name}
        </p>
        <p>Last updated {lastUpdated}</p>
      </Container>
    </footer>
  );
}
