import Image from "next/image";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { about, profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row-reverse sm:items-start">
            <div className="relative size-80 shrink-0 self-center opacity-95 sm:size-96 sm:self-start">
              <div className="avatar-blob relative size-full overflow-hidden border border-white/15">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  width={384}
                  height={384}
                  className="size-full object-cover grayscale-[35%] contrast-110 brightness-90"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--background) 5%, transparent 75%)",
                  }}
                />
              </div>
            </div>
            <div className="min-w-0">
              <SectionHeading eyebrow="About" title="A bit about me" />
              <div className="space-y-4 text-base leading-relaxed text-neutral-400">
                {about.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
