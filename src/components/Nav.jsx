import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-100 flex items-center justify-between px-[6vw] py-[22px] backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-paper/90 shadow-[0_1px_0_var(--color-line)]" : "bg-sky-top/15"
      }`}
    >
      <a
        href="#"
        className={`font-display font-bold text-[1.1rem] tracking-[0.02em] ${
          scrolled ? "text-ink" : "text-white"
        }`}
      >
        NCN.
      </a>
      <div className="hidden gap-8 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`text-[0.92rem] font-medium opacity-90 transition-opacity hover:opacity-100 ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
