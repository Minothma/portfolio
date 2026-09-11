"use client";

import React from "react";
import { skills } from "@/data/skills";
import { usePortfolioUI } from "@/components/ui/PortfolioUIContext";
import { useToast } from "@/components/ui/Toast";
import {
  Server,
  Layout,
  Database,
  Terminal,
  Code2,
  Cpu,
  Layers,
  ArrowUpRight,
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
      case "Languages":
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case "Frontend":
        return <Layout className="w-4 h-4 text-cyan-400" />;
      case "Backend & APIs":
      case "Backend":
        return <Server className="w-4 h-4 text-emerald-400" />;
      case "Databases & ORM":
      case "Databases":
        return <Database className="w-4 h-4 text-emerald-400" />;
      case "DevOps & Cloud":
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case "Architecture & Principles":
      case "Architecture":
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      default:
        return <Layers className="w-4 h-4 text-emerald-400" />;
    }
  };

  // Render buttons with smart column spans so text NEVER truncates and every row is 100% balanced
  const renderCategorySkills = (categoryName: string, items: string[]) => {
    if (categoryName === "Languages") {
      return (
        <div className="space-y-2 pt-3 border-t border-white/[0.05]">
          <div className="grid grid-cols-2 gap-2">
            {["Java", "TypeScript", "JavaScript", "Python"].map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["C", "PHP", "SQL"].map((skill) => (
              <SkillButton key={skill} skill={skill} isShort />
            ))}
          </div>
        </div>
      );
    }

    if (categoryName === "Frontend") {
      return (
        <div className="space-y-2 pt-3 border-t border-white/[0.05]">
          <div className="grid grid-cols-2 gap-2">
            {["Next.js", "React", "TypeScript", "Axios"].map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
          <div className="w-full">
            <SkillButton skill="Tailwind CSS" isFullWidth />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["HTML", "CSS"].map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
        </div>
      );
    }

    if (categoryName === "Backend & APIs") {
      return (
        <div className="space-y-2 pt-3 border-t border-white/[0.05]">
          <div className="grid grid-cols-2 gap-2">
            {["Spring Boot", "NestJS"].map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
          <div className="w-full">
            <SkillButton skill="Apache Kafka" isFullWidth />
          </div>
          <div className="w-full">
            <SkillButton skill="Keycloak OIDC" isFullWidth />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["RESTful APIs", "JWT Auth"].map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
        </div>
      );
    }

    if (categoryName === "Databases & ORM") {
      return (
        <div className="space-y-2 pt-3 border-t border-white/[0.05]">
          <div className="grid grid-cols-2 gap-2">
            {["PostgreSQL", "MySQL", "Prisma ORM", "Liquibase"].map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
          <div className="w-full">
            <SkillButton skill="Hibernate / JPA" isFullWidth />
          </div>
        </div>
      );
    }

    if (categoryName === "DevOps & Cloud") {
      return (
        <div className="space-y-2 pt-3 border-t border-white/[0.05]">
          <div className="grid grid-cols-2 gap-2">
            {["AWS", "Docker", "Git", "Postman"].map((skill) => (
              <SkillButton key={skill} skill={skill} />
            ))}
          </div>
          <div className="w-full">
            <SkillButton skill="GitHub Actions CI/CD" isFullWidth />
          </div>
        </div>
      );
    }

    // Architecture & Principles (All 4 items as full-width clean rows to prevent any text overflow)
    return (
      <div className="space-y-2 pt-3 border-t border-white/[0.05]">
        <div className="w-full">
          <SkillButton skill="OOP & SOLID" isFullWidth />
        </div>
        <div className="w-full">
          <SkillButton skill="RESTful Architecture" isFullWidth />
        </div>
        <div className="w-full">
          <SkillButton skill="Data Structures & Algorithms" isFullWidth />
        </div>
        <div className="w-full">
          <SkillButton skill="Transactional Outbox Pattern" isFullWidth />
        </div>
      </div>
    );
  };

  const SkillButton = ({
    skill,
    isFullWidth = false,
    isShort = false,
  }: {
    skill: string;
    isFullWidth?: boolean;
    isShort?: boolean;
  }) => {
    const isHighlighted = highlightedSkill === skill;

    return (
      <button
        onClick={() => handleSkillClick(skill)}
        title={`Click to filter projects using ${skill}`}
        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono transition-all duration-200 active:scale-[0.98] group/btn ${
          isHighlighted
            ? "bg-emerald-400 text-slate-950 font-bold border border-emerald-300 shadow-md shadow-emerald-500/30"
            : "text-slate-300 bg-[#121824] border border-white/[0.07] hover:border-emerald-400/40 hover:text-white hover:bg-emerald-950/40"
        }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
              isHighlighted ? "bg-slate-950" : "bg-emerald-400/70"
            }`}
          />
          <span className="whitespace-nowrap">{skill}</span>
        </div>
        {!isShort && (
          <ArrowUpRight className="w-2.5 h-2.5 opacity-20 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all text-emerald-400 shrink-0 ml-1" />
        )}
      </button>
    );
  };

  return (
    <section id="toolkit" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Eyebrow Header: Option 1 - Clean & Meaningful */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            ENGINEERING STACK & CAPABILITIES
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Technical <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">Toolkit.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              Modern languages, frameworks, databases, and architectural patterns I use to build reliable software. <span className="text-emerald-300 font-medium">Click any skill to filter matching projects.</span>
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#0c1118] border border-white/[0.08] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">10+ Core Technologies Active</span>
          </div>
        </div>

        {/* 6-Category Bento Matrix Grid (100% Balanced, Zero Truncation, Zero Holes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skills.map((category, idx) => (
            <div
              key={category.category}
              className={`p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0c1118] to-[#080d14] border transition-all duration-300 flex flex-col justify-start space-y-4 group hover:shadow-xl hover:border-emerald-500/40 ${
                idx % 2 === 0
                  ? "border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]"
                  : "border-cyan-500/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
              }`}
            >
              {/* Header with Icon and Title */}
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:scale-110 transition-transform">
                    {getCategoryIcon(category.category)}
                  </div>
                  <h3 className="text-sm font-bold font-mono tracking-wider text-white uppercase">
                    {category.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Render Structured Category Skills */}
              {renderCategorySkills(category.category, category.items)}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
