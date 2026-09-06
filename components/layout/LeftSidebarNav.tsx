"use client";

import React, { useEffect, useState } from "react";

export function LeftSidebarNav() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "work", "journey", "toolkit", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "work", label: "WORK" },
    { id: "journey", label: "JOURNEY" },
    { id: "toolkit", label: "TOOLKIT" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <aside className="hidden lg:flex fixed left-6 xl:left-12 top-1/2 -translate-y-1/2 z-40 flex-col space-y-6 select-none">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-center gap-3 text-[11px] font-mono tracking-widest transition-all duration-200"
          >
            {/* Horizontal Line indicator */}
            <span
              className={`h-[1.5px] transition-all duration-300 ${
                isActive
                  ? "w-8 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                  : "w-4 bg-slate-700 group-hover:w-6 group-hover:bg-slate-400"
              }`}
            />
            {/* Label */}
            <span
              className={`transition-colors duration-200 ${
                isActive
                  ? "text-emerald-400 font-semibold"
                  : "text-slate-500 group-hover:text-slate-300"
              }`}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </aside>
  );
}
