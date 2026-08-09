import Reveal from "./Reveal";

export default function SectionHead({ tag, title }) {
  return (
    <Reveal className="mb-14">
      <div className="font-mono text-[0.78rem] uppercase tracking-[0.12em] text-accent-light">
        {tag}
      </div>
      <h2 className="mt-2.5 font-display text-[clamp(2.1rem,4.5vw,3.1rem)] font-bold leading-[1.1] tracking-[-0.01em] text-sky-bottom">
        {title}
      </h2>
    </Reveal>
  );
}
