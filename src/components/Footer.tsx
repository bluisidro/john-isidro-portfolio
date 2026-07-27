import { Container } from "./Container";
import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-neutral-500">
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="ease-bounce transition-all duration-300 hover:-translate-y-0.5 hover:text-neutral-100"
              >
                <GitHubIcon className="size-[18px]" />
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
                <LinkedInIcon className="size-[18px]" />
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
                <TwitterIcon className="size-[18px]" />
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
