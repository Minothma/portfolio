"use client";

import React, { useState } from "react";
import { skills } from "@/data/skills";
import { usePortfolioUI } from "@/components/ui/PortfolioUIContext";
import { useToast } from "@/components/ui/Toast";
import {
  Server,
  Layout,
  Database,
  Terminal,
  Code2,
  ShieldCheck,
  Palette,
  Layers,
  CheckCircle2,
  Cpu,
  ArrowUpRight,
  Filter,
} from "lucide-react";

export function Toolkit() {
  const { filterBySkill, highlightedSkill } = usePortfolioUI();
  const { showToast } = useToast();

  const handleSkillClick = (skillName: string) => {
    filterBySkill(skillName);
    showToast(`Filtering projects built with ${skillName}...`, "info");
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Backend & Microservices":
      case "Backend":
        return <Server className="w-4 h-4 text-emerald-400" />;
      case "Frontend":
        return <Layout className="w-4 h-4 text-cyan-400" />;
      case "Databases & Migrations":
      case "Databases & ORM":
        return <Database className="w-4 h-4 text-emerald-400" />;
      case "DevOps, Cloud & IaC":
      case "DevOps & Cloud":
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case "Languages":
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case "Architecture & Standards":
      case "Core Concepts":
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case "Testing & Observability":
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      default:
        return <Layers className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="toolkit" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Eyebrow Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            TOOLKIT // ARCHITECTURE MATRIX
          </span>
          <span className="h-[1px] w-16 bg-emerald-500/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Technologies & <br className="hidden sm:inline" />
              Technical Stack.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              Curated stack of frameworks, relational databases, DevOps tools, and architectural paradigms. <span className="text-emerald-300 font-medium">Click any skill to filter matching projects.</span>
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#0c1118] border border-white/[0.08] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">10+ Core Technologies Active</span>
          </div>
        </div>

        {/* Layered Architecture Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <div
              key={category.category}
              className={`p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0c1118] to-[#080d14] border transition-all duration-300 flex flex-col justify-between space-y-5 group hover:shadow-xl ${
                idx === 0 || idx === 2 || idx === 6
                  ? "border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]"
                  : "border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
              }`}
            >
              <div>
                {/* Header with Icon and Title */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:scale-110 transition-transform">
                      {getCategoryIcon(category.category)}
                    </div>
                    <h3 className="text-sm font-bold font-mono tracking-wider text-white uppercase">
                      {category.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    {category.items.length} items
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {category.description}
                </p>
              </div>

              {/* Technology Badges (Clickable Cross-Reference Filter) */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.04]">
                {category.items.map((skill) => {
                  const isHighlighted = highlightedSkill === skill;
                  return (
                    <button
                      key={skill}
                      onClick={() => handleSkillClick(skill)}
                      title={`Click to filter projects using ${skill}`}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 active:scale-95 group/btn ${
                        isHighlighted
                          ? "bg-emerald-400 text-slate-950 font-bold border border-emerald-300 shadow-md shadow-emerald-500/30"
                          : "text-slate-300 bg-[#121824] border border-white/[0.07] hover:border-emerald-400/40 hover:text-white hover:bg-emerald-950/40"
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full ${
                          isHighlighted ? "bg-slate-950" : "bg-emerald-400/70"
                        }`}
                      />
                      <span>{skill}</span>
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

