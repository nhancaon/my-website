import { profile } from "../data/resume";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-linear-to-b from-sky-bottom via-sky-mid to-sky-top px-[6vw] pb-[60px] pt-[100px] text-center text-white"
    >
      <div className="font-mono text-[0.78rem] uppercase tracking-[0.12em] text-accent-light">
        05 — Contact
      </div>
      <h2 className="mx-auto mt-3 max-w-[20ch] font-display text-[clamp(2.1rem,4.5vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.01em]">
        Let's build something <span className="text-sunset">great together</span>
      </h2>
      <p className="mx-auto mt-4 max-w-[42ch] text-[1.1rem] text-white">
        Open to Golang backend & DevOps roles. Always up for a chat about
        infrastructure or a good CI/CD pipeline.
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent to-accent-deep px-[30px] py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_8px_24px_rgba(61,90,255,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(61,90,255,0.5)]"
        >
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/40 px-[30px] py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/12"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/40 px-[30px] py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/12"
        >
          LinkedIn
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/40 px-[30px] py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/12"
        >
          {profile.phone}
        </a>
      </div>

      <div className="relative z-2 mt-24 font-mono text-[0.8rem] text-white/70">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
