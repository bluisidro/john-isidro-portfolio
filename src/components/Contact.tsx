import { Container } from "./Container";
import { profile } from "@/data/portfolio";
import { primaryButton } from "./buttonStyles";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-14 text-center shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_24px_48px_-24px_rgba(0,0,0,0.7)]">
            <p className="text-gradient inline-block rotate-1 text-sm font-semibold tracking-wide uppercase">
              Contact
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">
              Let&apos;s work together
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-neutral-400">
              I&apos;m currently open to new opportunities. Feel free to
              reach out if you&apos;d like to collaborate or just say hi.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className={`mt-8 inline-block ${primaryButton} px-6 py-3`}
            >
              {profile.email}
            </a>
            <p className="mt-4 text-sm text-neutral-500">
              {profile.phone} · {profile.location}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
