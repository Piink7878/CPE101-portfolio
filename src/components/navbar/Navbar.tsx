"use client";

import { navLinks } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";

export default function Navbar() {
  const isScrolled = useNavbarScroll();
  const { activeSection, setActiveSection } = useActiveSection();

  const shellClasses = isScrolled
    ? "border-white/50 bg-white/70 text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
    : "border-transparent bg-transparent text-white";

  const brandClasses = isScrolled ? "text-slate-900" : "text-white";
  const accentClasses = isScrolled ? "text-slate-500" : "text-sky-200";
  const linkClasses = isScrolled
    ? "text-slate-500 hover:text-slate-900"
    : "text-white/80 hover:text-white";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow,color,backdrop-filter] duration-500 ease-out ${shellClasses}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-16">
        <a
          href="#home"
          className={`text-2xl font-extrabold tracking-tight transition-colors duration-500 ease-out sm:text-[2rem] ${brandClasses}`}
        >
          Benyapha<span className={accentClasses}>.dev</span>
        </a>

        <nav aria-label="Primary" className="flex flex-1 justify-end">
          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setActiveSection(item.id)}
                  className={`rounded-2xl px-4 py-3 text-base font-medium transition-all duration-500 ease-out sm:px-6 sm:text-[1.05rem] ${
                    isActive
                      ? isScrolled
                        ? "bg-slate-900/10 text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                        : "bg-white/14 text-white shadow-[0_10px_24px_rgba(255,255,255,0.12)] ring-1 ring-white/10"
                      : linkClasses
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
