import Link from "next/link";
import { Container } from "./Container";
import { profile } from "@/data/portfolio";
import { secondaryButton } from "./buttonStyles";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Highlights" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="animate-fade-in-up sticky top-0 z-50 border-b border-white/10 bg-[#101319]/70 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="#top"
            className="shrink-0 text-sm font-semibold tracking-tight whitespace-nowrap text-neutral-100"
          >
            {profile.name.split(" ")[0]}
            <span className="hidden sm:inline">
              {" "}
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </Link>
          <ul className="flex min-w-0 items-center pl-4 sm:hidden">
            <li className="shrink-0">
              <a
                href="#contact"
                className="ease-bounce text-sm text-neutral-400 transition-colors duration-200 hover:text-neutral-100"
              >
                Let&apos;s talk
              </a>
            </li>
          </ul>
          <ul className="hidden min-w-0 items-center gap-8 overflow-x-auto pl-4 sm:flex">
            {links.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className="ease-bounce text-sm text-neutral-400 transition-colors duration-200 hover:text-neutral-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className={`hidden shrink-0 sm:inline-block ${secondaryButton} px-4 py-1.5`}
          >
            Say hello
          </a>
        </nav>
      </Container>
    </header>
  );
}
