import { useEffect, useState } from "react";
import { navLinks } from "@/data/navigation";
import type { SectionId } from "@/types/portfolio";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const sectionIds = navLinks.map((item) => item.id);
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sectionElements.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let currentSection = sectionIds[0];

      for (const section of sectionElements) {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id as SectionId;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return { activeSection, setActiveSection };
}
