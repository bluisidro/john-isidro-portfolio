import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 bg-white/[0.02] py-20 sm:py-24"
    >
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Skills" title="Tools I work with" />
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((group, i) => (
              <Reveal
                key={group.category}
                direction={i % 2 === 0 ? "left" : "right"}
                delayMs={(i % 2) * 80}
              >
                <h3 className="text-sm font-semibold text-neutral-100">
                  {group.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="ease-bounce rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-sm text-neutral-400 shadow-[0_1px_0_rgba(255,255,255,0.05)_inset] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-accent-gold/40 hover:text-neutral-100 hover:shadow-[0_10px_20px_-8px_rgba(212,175,55,0.35)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
