import React from "react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  onReadMore?: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onReadMore }: ProjectCardProps) {
  return (
    <div className="group relative rounded-xl bg-[#0c1017] border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-200 p-6 sm:p-8 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-wider uppercase text-slate-400">
          <span>{project.badge}</span>
          <span className="text-slate-600">•</span>
          <span
            className={`font-semibold ${
              project.statusTag === "ONGOING" ? "text-cyan-400" : "text-emerald-400"
            }`}
          >
            {project.statusTag}
          </span>
        </div>

        {onReadMore && (
          <button
            onClick={() => onReadMore(project)}
            className="px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider text-slate-300 border border-white/20 hover:border-emerald-400 hover:text-emerald-400 transition-colors"
          >
            READ MORE
          </button>
        )}
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        {project.name}
      </h3>

      <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded text-xs font-mono text-slate-300 bg-[#121824] border border-white/[0.08]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
