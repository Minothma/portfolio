"use client";

import React from "react";
import { educationHistory, leadershipHistory, certificationsList, referencesList } from "@/data/highlights";
import { Award, UserCheck, Mail, Phone } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:pl-16 lg:pr-8">
        
        {/* Big Heading matching the reference */}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-14">
          Where I've been.
        </h2>

        {/* Two Column Layout matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-8">
            <div className="text-xs font-mono tracking-widest text-slate-500 uppercase pb-2 border-b border-white/[0.04]">
              EDUCATION
            </div>

            <div className="space-y-8 pl-1">
              {educationHistory.map((edu, idx) => (
                <div key={idx} className="relative pl-6 space-y-1.5 group">
                  {/* Square timeline marker */}
                  <span className="absolute left-0 top-1 w-2 h-2 rounded-[2px] border border-emerald-400/80 bg-background group-hover:bg-emerald-400 transition-colors" />

                  {/* Year Tag in emerald mono */}
                  <div className="text-xs font-mono text-emerald-400 tracking-wide font-medium">
                    {edu.year}
                  </div>

                  {/* Degree */}
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-xs sm:text-sm text-slate-300">
                    {edu.institution}
                  </p>

                  {/* Meta / GPA in mono */}
                  <p className="text-xs font-mono text-slate-500 pt-0.5">
                    {edu.meta}
                  </p>

                  {edu.details && (
                    <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Leadership & Activities */}
          <div className="lg:col-span-6 space-y-8">
            <div className="text-xs font-mono tracking-widest text-slate-500 uppercase pb-2 border-b border-white/[0.04]">
              LEADERSHIP & ACTIVITIES
            </div>

            <div className="space-y-6 pl-1">
              {leadershipHistory.map((lead, idx) => (
                <div key={idx} className="relative pl-6 space-y-1 group">
                  {/* Square timeline marker */}
                  <span className="absolute left-0 top-1 w-2 h-2 rounded-[2px] border border-emerald-400/80 bg-background group-hover:bg-emerald-400 transition-colors" />

                  {/* Year Tag in emerald mono */}
                  <div className="text-xs font-mono text-emerald-400 tracking-wide font-medium">
                    {lead.year}
                  </div>

                  {/* Role */}
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {lead.role}
                  </h3>

                  {/* Organization */}
                  <p className="text-xs sm:text-sm text-slate-400">
                    {lead.organization}
                  </p>

                  {lead.description && (
                    <p className="text-xs text-slate-500 pt-0.5 leading-relaxed">
                      {lead.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Certifications Sub-block */}
        <div className="pt-10 border-t border-white/[0.04] mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase mb-6">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>LICENSES & CERTIFICATIONS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
            {certificationsList.map((cert, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#0c1017] border border-white/[0.06] hover:border-emerald-500/40 transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between text-[10px] text-emerald-400">
                  <span>{cert.issuer}</span>
                  <span className="text-slate-500">{cert.year}</span>
                </div>
                <div className="font-semibold text-slate-200 line-clamp-1 text-xs">
                  {cert.title}
                </div>
                {cert.status && (
                  <div className="text-[10px] text-slate-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{cert.status}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* References Sub-block */}
        <div className="pt-8 border-t border-white/[0.04]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase mb-6">
            <UserCheck className="w-4 h-4 text-cyan-400" />
            <span>ACADEMIC & PROFESSIONAL REFERENCES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            {referencesList.map((ref, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0c1017] border border-white/[0.06] space-y-1.5"
              >
                <div className="text-sm font-bold text-white font-sans">{ref.name}</div>
                <div className="text-xs text-emerald-400">{ref.title}</div>
                <div className="text-xs text-slate-400">{ref.organization}</div>
                <div className="pt-2 border-t border-white/[0.04] text-[11px] text-slate-500 space-y-1">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3 text-slate-400" />
                    <a href={`mailto:${ref.email}`} className="hover:text-slate-300 transition-colors">
                      {ref.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-slate-400" />
                    <span>{ref.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
