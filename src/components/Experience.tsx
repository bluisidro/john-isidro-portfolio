import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Where I've worked" />
          <ol className="space-y-10 border-l border-white/10">
            {experience.map((job, i) => (
              <li key={`${job.company}-${job.period}`} className="relative pl-8">
                <span className="absolute top-1.5 -left-[5px] size-[9px] rounded-full bg-[linear-gradient(135deg,var(--accent-gold-light),var(--accent-gold))] shadow-[0_0_0_3px_rgba(212,175,55,0.25),0_2px_4px_rgba(0,0,0,0.25)]" />
                <Reveal delayMs={(i % 3) * 90}>
                  <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                    {job.period} · {job.location}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-neutral-100">
                    {job.role} · {job.company}
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {job.description.map((line, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed text-neutral-400"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
