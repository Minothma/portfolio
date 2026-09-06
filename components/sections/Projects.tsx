"use client";

import React, { useState } from "react";
import { projectsData, ProjectItem } from "@/data/projects";
import { X, CheckCircle2, AlertCircle, ArrowUpRight, Sparkles } from "lucide-react";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Enterprise & Healthcare", "Full-Stack", "Embedded & IoT"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:pl-16 lg:pr-8">
        
        {/* Eyebrow and Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            SELECTED WORK
          </span>
          <span className="h-[1px] w-16 bg-emerald-500/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
              Things I've built <br className="hidden sm:inline" />
              end to end.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
            Open a project for the full write-up — architecture, the hard parts, and what I'd do differently.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-emerald-400 text-slate-950 font-bold shadow-sm"
                  : "bg-[#0c1017] text-slate-400 border border-white/[0.06] hover:border-white/20 hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl bg-[#0c1017] border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-200 p-6 sm:p-8 space-y-5 shadow-lg shadow-black/20"
            >
              {/* Card Header: Metadata + READ MORE button */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-wider uppercase text-slate-400">
                  <span>{project.badge}</span>
                  <span className="text-slate-600">•</span>
                  <span
                    className={`font-semibold ${
                      project.statusTag === "ONGOING"
                        ? "text-cyan-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {project.statusTag}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider text-slate-300 border border-white/20 hover:border-emerald-400 hover:text-emerald-400 transition-colors active:scale-95"
                >
                  READ MORE
                </button>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-slate-100 transition-colors">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {/* Highlights from CV */}
              <ul className="space-y-2 pt-1 border-t border-white/[0.04]">
                {project.highlights.slice(0, 3).map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-normal"
                  >
                    <span className="text-emerald-400 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills in mono */}
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
          ))}
        </div>

      </div>

      {/* Case Study Modal Dialog */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d121c] border border-white/10 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  {selectedProject.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                // OVERVIEW
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedProject.writeUp.overview}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                // SYSTEM ARCHITECTURE & CORE WORKFLOWS
              </h4>
              <div className="space-y-2">
                {selectedProject.writeUp.architecture.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Hard Parts / Tradeoffs */}
            {selectedProject.writeUp.hardParts && selectedProject.writeUp.hardParts.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  // THE HARD PARTS & CONCURRENCY TRADEOFFS
                </h4>
                <div className="space-y-2">
                  {selectedProject.writeUp.hardParts.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/15">
                      <AlertCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Breakdown */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                // TECH STACK BREAKDOWN
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {selectedProject.writeUp.stackBreakdown.map((row, i) => (
                  <div key={i} className="p-2.5 rounded bg-[#121824] border border-white/5 space-y-0.5">
                    <div className="text-slate-500 uppercase text-[10px]">{row.category}</div>
                    <div className="text-slate-200 font-medium">{row.tools}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer Note */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
              <span>{selectedProject.writeUp.repoNote || "Repository available on request."}</span>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded bg-emerald-400 text-slate-950 font-bold hover:bg-emerald-300 transition-colors"
              >
                Close Write-up
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
