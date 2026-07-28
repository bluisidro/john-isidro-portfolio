import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { projects } from "@/data/portfolio";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
import { TiltCard } from "./TiltCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 bg-white/[0.02] py-20 sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Highlights"
            title="Key engineering achievements"
          />
          <div className="space-y-6" style={{ perspective: "1200px" }}>
            {projects.map((project, i) => (
              <Reveal
                key={project.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delayMs={(i % 3) * 80}
              >
                <TiltCard className="ease-bounce rounded-2xl border border-white/10 bg-neutral-900/40 p-6 shadow-none transition-all duration-300 hover:border-accent-gold/30 hover:shadow-[0_24px_48px_-18px_rgba(212,175,55,0.35)]">
                  <div
                    className="flex items-start justify-between gap-4"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <h3 className="text-lg font-semibold text-neutral-100">
                      {project.title}
                    </h3>
                    <div className="flex shrink-0 items-center gap-3 text-neutral-500">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} repository`}
                          className="ease-bounce transition-all duration-300 hover:-translate-y-0.5 hover:text-neutral-100"
                        >
                          <GitHubIcon className="size-[18px]" />
                        </a>
                      )}
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live site`}
                          className="ease-bounce transition-all duration-300 hover:-translate-y-0.5 hover:text-neutral-100"
                        >
                          <ArrowUpRightIcon className="size-[18px]" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p
                    className="mt-2 text-sm leading-relaxed text-neutral-400"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {project.description}
                  </p>
                  <div
                    className="mt-4 flex flex-wrap gap-2"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[.06] px-2.5 py-1 text-xs text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
