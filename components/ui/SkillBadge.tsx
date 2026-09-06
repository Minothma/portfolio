import React from "react";

interface SkillBadgeProps {
  name: string;
  categoryAccent?: "indigo" | "cyan" | "emerald" | "violet" | "amber";
}

export function SkillBadge({ name, categoryAccent = "indigo" }: SkillBadgeProps) {
  const accentClasses = {
    indigo: "hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-200",
    cyan: "hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-200",
    emerald: "hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-200",
    violet: "hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-200",
    amber: "hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-200",
  };

  return (
    <div
      className={`inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-900/60 border border-slate-800 text-slate-300 transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 cursor-default ${
        accentClasses[categoryAccent]
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-2 group-hover:bg-indigo-400 transition-colors" />
      {name}
    </div>
  );
}
