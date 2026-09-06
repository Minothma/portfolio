"use client";

import React from "react";
import { marqueeTechList } from "@/data/skills";

export function TechMarquee() {
  const repeatedList = [...marqueeTechList, ...marqueeTechList, ...marqueeTechList];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-white/[0.05] bg-[#0c1017]/60 backdrop-blur-md">
      {/* Left/Right Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {repeatedList.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex items-center gap-2 px-4 py-1.5 mx-2 rounded-lg bg-[#121824] border border-white/[0.06] text-xs font-mono text-slate-300 whitespace-nowrap shrink-0 hover:border-emerald-400/50 hover:text-white transition-colors select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
