"use client";

import { useEffect, useState } from "react";

const sections = [
  {
    id: "kaesha",
    shortLabel: "KAESHA",
    fullLabel: "KAESHA INOCENCIO",
  },
  {
    id: "about",
    shortLabel: "ABOUT ME",
    fullLabel: "ABOUT ME",
  },
  {
    id: "websites",
    shortLabel: "WEBSITES",
    fullLabel: "WEBSITES I CODED",
  },
  {
    id: "projects",
    shortLabel: "CLUBS",
    fullLabel: "CLUBS / PROJECTS",
  },
  {
    id: "links",
    shortLabel: "LINKS",
    fullLabel: "LINKS",
  },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState("kaesha");

  useEffect(() => {
  function updateActiveSection() {
    // position below fixed navbar
    const detectionPoint = window.scrollY + 150;

    const pageBottomReached =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 5;

    // to always activate links tab at the bottom
    if (pageBottomReached) {
      setActiveSection("links");
      return;
    }

    let currentSection = sections[0].id;

    for (const section of sections) {
      const element = document.getElementById(section.id);

      if (!element) {
        continue;
      }

      const sectionTop =
        element.getBoundingClientRect().top + window.scrollY;

      if (sectionTop <= detectionPoint) {
        currentSection = section.id;
      }
    }

    setActiveSection(currentSection);
  }

  updateActiveSection();

  window.addEventListener("scroll", updateActiveSection, {
    passive: true,
  });

  window.addEventListener("resize", updateActiveSection);

  return () => {
    window.removeEventListener("scroll", updateActiveSection);
    window.removeEventListener("resize", updateActiveSection);
  };
}, []);

return (
    <nav
      aria-label="Portfolio sections"
      className="fixed left-0 right-0 top-0 z-50 px-2 py-4 sm:px-6"
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl gap-2 overflow-hidden rounded-full bg-white p-2 shadow-md">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setActiveSection(section.id)}
              aria-current={isActive ? "location" : undefined}
              className={`
                flex min-w-0 items-center justify-center overflow-hidden
                whitespace-nowrap rounded-full px-2 text-center font-bold
                transition-[flex,background-color,color]
                duration-500 ease-in-out sm:px-4
                ${
                  isActive
                    ? "flex-[3_1_0%] bg-black text-white"
                    : "flex-[1_1_0%] bg-[#ffcddd] text-white"
                }
              `}
            >
              <span className="truncate text-[10px] sm:text-base lg:text-xl">
                {isActive ? section.fullLabel : section.shortLabel}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}