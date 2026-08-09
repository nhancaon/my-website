import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projects, caseStudies } from "../data/resume";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import Tabs from "../components/Tabs";
import ProjectMedia from "../components/ProjectMedia";
import ImageLightbox from "../components/ImageLightbox";
import { PlayIcon } from "../components/icons";

function CardList({ items }) {
  return (
    <div className="space-y-5">
      {items.map((c) => (
        <div
          key={c.title}
          className="rounded-2xl border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent-light/50"
        >
          <h3 className="font-display text-[1.15rem] font-semibold text-accent-light">{c.title}</h3>
          <p className="mt-2 text-[1.05rem] leading-[1.65] text-ink-soft">{c.body}</p>
        </div>
      ))}
    </div>
  );
}

function ParaList({ items }) {
  return (
    <div className="space-y-5">
      {items.map((p, i) => (
        <p key={i} className="text-[1.05rem] leading-[1.65] text-ink-soft">
          {p}
        </p>
      ))}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const study = caseStudies[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project || !study) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-[6vw] text-center">
        <h1 className="font-display text-3xl font-bold">Project not found</h1>
        <Link to="/" className="font-mono text-accent-light underline">
          ← Back to home
        </Link>
      </div>
    );
  }

  const meta = [
    { label: "Role", value: study.role },
    { label: "Timeline", value: study.timeline },
    { label: "Team Size", value: study.teamSize },
    { label: "Client", value: study.client },
  ];

  return (
    <>
      <header className="flex items-center justify-between px-[6vw] py-6">
        <Link to="/" className="font-display font-bold text-ink">
          NCN.
        </Link>
        <Link
          to="/#projects"
          className="font-mono text-[0.85rem] text-ink-soft transition-colors hover:text-accent-light"
        >
          ← All projects
        </Link>
      </header>

      <section className="relative overflow-hidden bg-linear-to-b from-sky-top via-sky-mid to-sky-bottom px-[6vw] pb-20 pt-10 text-white">
        <div className="mx-auto max-w-260">
          <div className="font-mono text-[0.8rem] uppercase tracking-[0.15em] text-accent-light">
            Case Study · {project.kind}
          </div>
          <h1 className="text-sunset mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] font-bold leading-[1.08]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-[64ch] text-[1.25rem] leading-normal text-white">
            {study.subtitle}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <div className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-white/70">
                  {m.label}
                </div>
                <div className="mt-1.5 text-[1.05rem] font-semibold">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-260 px-[6vw] py-20">
        <Reveal
          className={`mb-16 grid grid-cols-1 gap-6 ${study.video === "none" ? "" : "md:grid-cols-2"}`}
        >
          <div className="overflow-hidden rounded-2xl border border-line">
            <ImageLightbox src={project.image} alt={project.title}>
              <ProjectMedia
                image={project.image}
                title={project.title}
                aspect={study.video === "none" ? "aspect-[4/3]" : "aspect-video"}
                fit={study.video === "none" ? "contain" : "cover"}
              />
            </ImageLightbox>
          </div>
          {study.video !== "none" && (
            <div className="overflow-hidden rounded-2xl border border-line">
              {study.video ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={study.video}
                    title={`${project.title} demo`}
                    className="h-full w-full"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-surface">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent-light">
                    <PlayIcon className="h-5 w-5 translate-x-0.5" />
                  </span>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-soft/60">
                    Demo video coming soon
                  </span>
                </div>
              )}
            </div>
          )}
        </Reveal>

        <Reveal>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-sky-bottom">
            About the project
          </h2>
          <div className="mt-5 space-y-5">
            {study.about.map((p, i) => (
              <p key={i} className="text-[1.15rem] leading-[1.65] text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="mb-6 font-display text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-sky-bottom">
            Challenges &amp; objectives
          </h2>
          <Tabs
            tabs={[
              { label: "Challenges", content: <CardList items={study.challenges} /> },
              { label: "Objectives", content: <CardList items={study.objectives} /> },
            ]}
          />
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="mb-6 font-display text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-sky-bottom">
            How I built it
          </h2>
          <Tabs
            tabs={[
              { label: "Approach", content: <ParaList items={study.approach} /> },
              { label: "Key decisions", content: <CardList items={study.decisions} /> },
            ]}
          />
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-sky-bottom">Results</h2>
          <p className="mt-5 text-[1.15rem] leading-[1.65] text-ink-soft">{study.results}</p>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="mb-5 font-display text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-sky-bottom">
            Tech stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg bg-accent/15 px-3.5 py-2 font-mono text-[0.9rem] text-accent-light"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <Contact />
    </>
  );
}
