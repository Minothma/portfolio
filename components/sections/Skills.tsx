import React from "react";
import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { Reveal } from "@/components/motion/Reveal";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Palette,
  CheckCircle2
} from "lucide-react";

export function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-amber-400" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-violet-400" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-pink-400" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getAccent = (index: number): "indigo" | "cyan" | "emerald" | "amber" | "violet" => {
    const accents: ("indigo" | "cyan" | "emerald" | "amber" | "violet")[] = [
      "indigo",
      "cyan",
      "emerald",
      "amber",
      "violet",
      "indigo",
    ];
    return accents[index % accents.length];
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="// TECHNICAL PROFICIENCY"
          title="Skills & Technical Stack"
          subtitle="Grouped by specialization — from backend RESTful architecture and relational database design to modern client-side frontend engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, idx) => (
            <Reveal key={cat.category} direction="up" delay={0.08 * idx}>
              <div className="h-full p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/10 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Badges Container */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.items.map((skill) => (
                      <SkillBadge
                        key={skill}
                        name={skill}
                        categoryAccent={getAccent(idx)}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom line indicator */}
                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{cat.items.length} proficiencies</span>
                  <span className="text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
