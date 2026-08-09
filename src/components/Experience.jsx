import SectionHead from "./Section";
import Reveal from "./Reveal";
import { experience, certificates } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1120px] px-[6vw] py-[110px]">
      <SectionHead tag="03 — Experience" title="Professional journey" />

      <Reveal className="relative border-l-2 border-line pl-8">
        {experience.map((item) => (
          <div key={item.company} className="relative pb-11 last:pb-0">
            <span className="absolute -left-[38px] top-1 h-3.5 w-3.5 rounded-full border-[3px] border-paper bg-accent shadow-[0_0_0_2px_var(--color-line)]" />
            <div className="font-mono text-[0.78rem] text-accent-light">{item.when}</div>
            <h3 className="mt-1.5 text-[1.3rem] font-display font-semibold">{item.title}</h3>
            <div className="mt-0.5 text-[1rem] text-ink-soft">{item.company}</div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[1.05rem] leading-[1.7] text-ink-soft">
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-14">
        <h3 className="mb-5 font-display text-[1.1rem] font-semibold">Certificates</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {certificates.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent-light/50"
            >
              <div className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-accent-light">
                {c.org}
              </div>
              <div className="mt-2 text-[0.92rem] leading-[1.5] text-ink">{c.title}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
