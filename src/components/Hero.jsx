import { useMemo } from "react";
import { profile } from "../data/resume";

// Deterministic pseudo-random so the jagged silhouette is stable across builds.
function seededRand(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Angular, weathered limestone-tower silhouette (straight jagged edges, not a
// smooth cartoon blob) — closer to how Ha Long Bay karsts actually read.
function jaggedKarstPath({ cx, width, topY, baseY, seed }) {
  const halfW = width / 2;
  const height = baseY - topY;
  const steps = 7;

  const side = (sign, offset) => {
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const y = topY + t * height;
      const widen = 0.3 + 0.7 * Math.pow(t, 1.25);
      const noise = (seededRand(seed + offset + i * 3.7) - 0.5) * 0.3;
      const w = halfW * Math.max(0.12, widen + noise);
      pts.push([cx + sign * w, y]);
    }
    return pts;
  };

  const right = side(1, 0);
  const left = side(-1, 50);

  let d = `M${left[left.length - 1][0]},${baseY} `;
  for (let i = left.length - 2; i >= 0; i--) d += `L${left[i][0]},${left[i][1]} `;
  for (let i = 0; i < right.length; i++) d += `L${right[i][0]},${right[i][1]} `;
  d += `L${right[right.length - 1][0]},${baseY} Z`;
  return d;
}

const FAR_KARSTS = [
  { cx: 150, width: 90, topY: 210, seed: 1 },
  { cx: 480, width: 110, topY: 175, seed: 7 },
  { cx: 950, width: 100, topY: 190, seed: 13 },
  { cx: 1300, width: 85, topY: 220, seed: 19 },
].map((t) => ({ ...t, d: jaggedKarstPath({ ...t, baseY: 300 }) }));

const NEAR_KARSTS = [
  { cx: 300, width: 160, topY: 130, seed: 3 },
  { cx: 620, width: 190, topY: 85, seed: 9 },
  { cx: 1050, width: 150, topY: 150, seed: 15 },
].map((t) => ({ ...t, d: jaggedKarstPath({ ...t, baseY: 306 }) }));

const SUN_RAYS = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2;
  return {
    x1: 620 + Math.cos(angle) * 45,
    y1: 265 + Math.sin(angle) * 45,
    x2: 620 + Math.cos(angle) * (100 + (i % 3) * 40),
    y2: 265 + Math.sin(angle) * (100 + (i % 3) * 40),
  };
});

export default function Hero() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 70}%`,
        delay: `${Math.random() * 3}s`,
      })),
    []
  );

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-linear-to-b from-sky-top via-sky-mid to-sky-bottom px-[6vw] pt-[120px] text-center">
      <div className="pointer-events-none absolute inset-0 z-0">
        {stars.map((s, i) => (
          <span
            key={i}
            className="star"
            style={{ left: s.left, top: s.top, animationDelay: s.delay }}
          />
        ))}
      </div>

      <div className="relative z-2 mb-[18px] font-mono text-[0.8rem] tracking-[0.15em] text-accent-light uppercase">
        // golang backend developer / devops engineer
      </div>

      <h1 className="relative z-2 max-w-[17ch] font-display text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[1.08] text-balance text-white">
        Hi, I'm <span className="text-accent-light">{profile.firstName}</span> — I build
        reliable backend systems
      </h1>

      <p className="relative z-2 mt-5 max-w-[62ch] text-[clamp(1rem,2vw,1.25rem)] text-white">
        {profile.tagline}
      </p>

      <div className="relative z-2 mt-[38px] flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent to-accent-deep px-[30px] py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_8px_24px_rgba(61,90,255,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(61,90,255,0.5)]"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/50 px-[30px] py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/12"
        >
          Get in Touch
        </a>
      </div>

      <div className="relative z-1 mt-[60px] w-full">
        <svg
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-auto"
        >
          <defs>
            <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a9baff" />
              <stop offset="100%" stopColor="#3d5aff" />
            </linearGradient>
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffbe8" stopOpacity="1" />
              <stop offset="22%" stopColor="#ffe1a3" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#f0985a" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#f0985a" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="rimLight" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffd9a0" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ffd9a0" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* sun rays */}
          <g className="sun-rays" stroke="#ffe1a3" strokeLinecap="round">
            {SUN_RAYS.map((r, i) => (
              <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} strokeWidth={i % 2 ? 1.5 : 2.5} opacity={i % 2 ? 0.12 : 0.22} />
            ))}
          </g>

          {/* setting sun, low behind the tallest karst */}
          <circle cx="620" cy="265" r="230" fill="url(#sunGlow)" />
          <circle cx="620" cy="265" r="70" fill="url(#sunGlow)" />
          <circle className="sun-core" cx="620" cy="265" r="34" fill="#fffbe8" opacity="0.95" />
          <circle className="sun-core" cx="620" cy="265" r="16" fill="#ffffff" opacity="0.9" />

          {/* sea */}
          <rect x="0" y="300" width="1440" height="60" fill="#150f30" />
          <line x1="0" y1="300" x2="1440" y2="300" stroke="url(#glow)" strokeWidth="1.5" opacity="0.4" />

          {/* far karst islands */}
          <g fill="#3a2b63">
            {FAR_KARSTS.map((t) => (
              <path key={t.cx} d={t.d} />
            ))}
          </g>

          {/* atmospheric haze between the island layers */}
          <rect x="0" y="205" width="1440" height="34" fill="#c7d2ff" opacity="0.06" />

          {/* near karst islands, with a warm rim catching the sunset */}
          <g fill="#1c1638">
            {NEAR_KARSTS.map((t) => (
              <path key={t.cx} d={t.d} />
            ))}
          </g>
          <g fill="none" stroke="url(#rimLight)" strokeWidth="2">
            {NEAR_KARSTS.map((t) => (
              <path key={t.cx} d={t.d} />
            ))}
          </g>

          <rect x="0" y="266" width="1440" height="28" fill="#c7d2ff" opacity="0.08" />

          {/* water reflections */}
          <g fill="#1c1638" opacity="0.4">
            <ellipse cx="300" cy="318" rx="70" ry="16" />
            <ellipse cx="620" cy="324" rx="80" ry="20" />
            <ellipse cx="1050" cy="316" rx="65" ry="14" />
          </g>

          {/* sunset glimmer on the water */}
          <g className="shimmer-glow">
            <path
              d="M620,300 C610,314 633,323 624,336 C615,349 637,355 628,360"
              stroke="url(#glow)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M620,300 C610,314 633,323 624,336 C615,349 637,355 628,360"
              stroke="#ffffff"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />
          </g>

          {/* fishing junk boat, kept as a quiet silhouette */}
          <path d="M1140,309 C1156,318 1182,318 1198,309 C1182,313 1156,313 1140,309 Z" fill="#120d28" />
          <line x1="1169" y1="309" x2="1169" y2="292" stroke="#120d28" strokeWidth="1.5" />
          <path d="M1169,292 L1169,306 L1183,306 Z" fill="#120d28" opacity="0.9" />
        </svg>
      </div>

      <div className="absolute bottom-[22px] left-1/2 z-2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.75rem] text-white/90">
        <span>SCROLL</span>
        <span className="h-[5px] w-[5px] animate-bob rounded-full bg-white" />
      </div>
    </section>
  );
}
