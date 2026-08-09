export default function ProjectMedia({ image, title, aspect = "aspect-video", fit = "cover", className = "" }) {
  if (image) {
    return (
      <div className={`flex ${aspect} w-full items-center justify-center bg-surface ${className}`}>
        <img
          src={image}
          alt={title}
          className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 bg-[repeating-linear-gradient(135deg,rgba(123,147,255,0.08)_0px,rgba(123,147,255,0.08)_2px,transparent_2px,transparent_14px)] ${className}`}
    >
      <span className="font-mono text-2xl text-accent-light/70">{"</>"}</span>
      <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-soft/60">
        Screenshot coming soon
      </span>
    </div>
  );
}
