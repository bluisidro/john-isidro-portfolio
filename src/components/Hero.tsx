import { Container } from "./Container";
import { profile } from "@/data/portfolio";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon,
  ChevronDownIcon,
} from "./icons";
import { primaryButton, secondaryButton } from "./buttonStyles";

export function Hero() {
  const [primaryRole, secondaryRole] = profile.role.split(" & ");

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-20 sm:py-28"
    >
      <Container>
        <div className="min-w-0 lg:max-w-3xl">
          <p
            className="text-gradient animate-fade-in-up inline-block -rotate-2 text-sm font-semibold tracking-wide uppercase"
            style={{ animationDelay: "0ms" }}
          >
            Hi, I&apos;m {profile.name.split(" ")[0]} 👋
          </p>
          <h1
            className="animate-fade-in-up mt-4 text-4xl font-semibold tracking-tight text-neutral-100 sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            {primaryRole}
            {secondaryRole && (
              <span className="text-gradient mt-1 block text-2xl sm:text-3xl">
                &amp; {secondaryRole}
              </span>
            )}
          </h1>
          <span
            aria-hidden
            className="animate-fade-in-up mt-4 block h-1.5 w-16 rounded-full bg-[linear-gradient(90deg,var(--accent-gold-light),var(--accent-gold))]"
            style={{ animationDelay: "140ms" }}
          />
          <p
            className="animate-fade-in-up mt-5 max-w-xl text-lg leading-relaxed text-neutral-400"
            style={{ animationDelay: "200ms" }}
          >
            {profile.tagline}
          </p>
        </div>
        <div
          className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "260ms" }}
        >
          <a href="#projects" className={`${primaryButton} px-5 py-2.5`}>
            View my work
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${secondaryButton} px-5 py-2.5`}
          >
            Resume
          </a>
        </div>
        <div
          className="animate-fade-in-up mt-10 flex items-center gap-5 text-neutral-500"
          style={{ animationDelay: "320ms" }}
        >
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="ease-bounce transition-all duration-300 hover:-translate-y-0.5 hover:text-neutral-100"
            >
              <GitHubIcon className="size-5" />
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="ease-bounce transition-all duration-300 hover:-translate-y-0.5 hover:text-neutral-100"
            >
              <LinkedInIcon className="size-5" />
            </a>
          )}
          {profile.social.twitter && (
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="ease-bounce transition-all duration-300 hover:-translate-y-0.5 hover:text-neutral-100"
            >
              <TwitterIcon className="size-5" />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="ease-bounce transition-all duration-300 hover:-translate-y-0.5 hover:text-neutral-100"
          >
            <MailIcon className="size-5" />
          </a>
        </div>
      </Container>
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-neutral-400 transition-colors duration-300 hover:text-neutral-100"
      >
        <span className="text-xs font-medium tracking-wide uppercase">
          Scroll to explore
        </span>
        <span className="animate-bounce-hint ease-bounce inline-flex size-10 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-white/30">
          <ChevronDownIcon className="size-5" />
        </span>
      </a>
    </section>
  );
}
