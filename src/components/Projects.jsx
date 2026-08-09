import { Link } from "react-router-dom";
import SectionHead from "./Section";
import Reveal from "./Reveal";
import ProjectMedia from "./ProjectMedia";
import { GithubIcon } from "./icons";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1120px] px-[6vw] py-[110px]">
      <SectionHead tag="04 — Projects" title="Selected work" />

      <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group relative flex flex-col overflow-hidden rounded-[20px] bg-linear-to-br from-[#221a46] to-[#3d2f6e] text-white transition-transform duration-250 hover:-translate-y-1.5"
          >
            <Link
              to={`/projects/${p.slug}`}
              className="absolute inset-0 z-10"
              aria-label={`View ${p.title} case study`}
            />

            <ProjectMedia image={p.image} title={p.title} className="rounded-t-[20px]" />

            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="View source on GitHub"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
            >
              <GithubIcon className="h-4.5 w-4.5" />
            </a>

            <div className="relative flex flex-1 flex-col p-7">
              <div className="pointer-events-none absolute -right-10 -top-24 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(123,147,255,0.5),transparent_70%)]" />
              <div className="relative z-1 mb-2 font-mono text-[0.72rem] text-white/80">
                {p.when} · {p.kind}
              </div>
              <h3 className="relative z-1 mb-2 font-display text-[1.4rem] font-semibold">
                {p.title}
              </h3>
              <p className="relative z-1 mb-3.5 text-[1rem] leading-[1.55] text-white">
                {p.description}
              </p>
              <div className="relative z-1 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/12 px-2.5 py-1 font-mono text-[0.72rem]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="relative z-1 mt-4 flex items-center gap-1.5 font-mono text-[0.85rem] text-accent-light">
                View case study
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
