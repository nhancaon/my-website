import SectionHead from "./Section";
import Reveal from "./Reveal";
import { about, stats, education } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1120px] px-[6vw] py-[110px]">
      <SectionHead tag="01 — About" title="A little about me" />

      <Reveal className="grid grid-cols-1 items-start gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          {about.map((p, i) => (
            <p
              key={i}
              className="mb-5 text-[1.2rem] leading-[1.65] text-ink-soft last:mb-0"
            >
              {p}
            </p>
          ))}

          <div className="mt-6 rounded-2xl border border-line bg-surface p-5 transition-colors duration-200 hover:border-accent-light/50">
            <div className="font-display text-[1rem] font-semibold text-ink">
              {education.school}
            </div>
            <div className="mt-1 text-[0.92rem] text-ink-soft">
              {education.degree} · {education.when} · {education.location}
            </div>
            <ul className="mt-2 list-disc pl-5 text-[0.92rem] leading-[1.6] text-ink-soft">
              {education.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-surface px-5 py-[22px] transition-all duration-200 hover:-translate-y-1 hover:border-accent-light/50"
            >
              <div className="font-display text-[2.4rem] font-bold text-accent-light">{s.num}</div>
              <div className="mt-1 text-[0.9rem] text-ink-soft">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
