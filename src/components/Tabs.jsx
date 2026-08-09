import { useState } from "react";

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div role="tablist" className="mb-7 inline-flex flex-wrap gap-1 rounded-full border border-line bg-surface p-1.5">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2.5 text-[0.95rem] font-medium transition-colors ${
              active === i
                ? "bg-linear-to-r from-accent to-accent-deep text-white"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
}
