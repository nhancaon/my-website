import SectionHead from "./Section";
import Reveal from "./Reveal";
import { skillGroups, languages } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1120px] px-[6vw] py-[110px]">
      <SectionHead tag="02 — Skills" title="Technologies I work with" />

      <Reveal className="grid grid-cols-1 gap-7 md:grid-cols-3">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="rounded-[18px] border border-line bg-surface p-[26px] transition-all duration-200 hover:-translate-y-1 hover:border-accent-light/50"
          >
            <h3 className="mb-4 text-[1rem] text-ink">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.chips.map((c) => (
                <span
                  key={c}
                  className="rounded-lg bg-accent/15 px-3 py-1.5 font-mono text-[0.78rem] text-accent-light"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-7 rounded-[18px] border border-line bg-surface p-[26px] transition-colors duration-200 hover:border-accent-light/50">
        <h3 className="mb-4 text-[1rem] text-ink">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((l) => (
            <span
              key={l.name}
              className="rounded-lg bg-accent/15 px-3 py-1.5 font-mono text-[0.78rem] text-accent-light"
            >
              {l.name} · {l.level}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
