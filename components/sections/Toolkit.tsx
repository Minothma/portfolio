"use client";

import React from "react";
import { skills } from "@/data/skills";

export function Toolkit() {
  return (
    <section id="toolkit" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:pl-16 lg:pr-8">
        
        {/* Eyebrow Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            TOOLKIT
          </span>
          <span className="h-[1px] w-16 bg-emerald-500/40" />
        </div>

        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Technologies & Stack.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg leading-relaxed">
            The programming languages, web frameworks, relational databases, DevOps tools, and architectural paradigms I use to build scalable production applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-xl bg-[#0c1017] border border-white/[0.07] hover:border-emerald-500/40 transition-all duration-200 space-y-4 hover:shadow-lg hover:shadow-emerald-950/20"
            >
              <div className="space-y-1">
                <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  {category.category}
                </h3>
                <p className="text-xs text-slate-500">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded text-xs font-mono text-slate-300 bg-[#121824] border border-white/[0.06] hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
