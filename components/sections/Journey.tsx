"use client";

import React, { useState } from "react";
import { leadershipHistory, certificationsList, referencesList } from "@/data/highlights";
import { Award, UserCheck, Mail, Phone, ExternalLink, Users, Calendar } from "lucide-react";

export function Journey() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Databases & Backend",
    "Cloud & DevOps",
    "AI / ML & Data Science",
    "Programming & Web",
  ];

  const filteredCertifications = certificationsList.filter((cert) => {
    if (selectedCategory === "All") return true;
    return cert.category === selectedCategory;
  });

  return (
    <section id="journey" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Eyebrow and Section Header */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            LEADERSHIP & CREDENTIALS
          </span>
        </div>

        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Leadership & <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">Credentials.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            Extracurricular tech leadership at Rotaract & IEEE student chapters, verified industry credentials, and academic references.
          </p>
        </div>

        {/* Section Pillar 1: Extracurricular Leadership & University Impact */}
        <div className="mb-20 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c1118] to-[#080d14] border border-cyan-500/20 shadow-xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.06] gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Extracurricular Leadership & Responsibilities
                </h3>
                <p className="text-xs text-slate-400">
                  Spearheading tech workflows, editorial content, and hackathon organization
                </p>
              </div>
            </div>

            <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shrink-0 self-start sm:self-auto">
              ROTARACT & IEEE CHAPTERS
            </span>
          </div>

          {/* 2-Column Responsive Grid of Leadership Roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
            {leadershipHistory.map((lead, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0e141e] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-200 space-y-2 group hover:shadow-lg"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 opacity-70" />
                    {lead.year}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    {idx === 0 ? "LEAD ROLE" : "COMMITTEE"}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {lead.role}
                </h4>

                <p className="text-xs text-slate-300 font-medium">
                  {lead.organization}
                </p>

                {lead.description && (
                  <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-white/[0.04]">
                    {lead.description}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Section Pillar 2: Licenses & Verified Certifications */}
        <div className="pt-8 border-t border-white/[0.04] mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Licenses & Verified Certifications
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {certificationsList.length} Verified Industry & University Credentials
                </span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-150 ${
                    selectedCategory === cat
                      ? "bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                      : "bg-[#0c1118] text-slate-400 border border-white/[0.06] hover:border-emerald-500/40 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
            {filteredCertifications.map((cert, idx) => (
              <div
                key={idx}
                className="group relative p-5 rounded-2xl bg-[#0c1118] border border-white/[0.06] hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-emerald-950/20"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-emerald-400 font-semibold">{cert.issuer}</span>
                    <span className="text-slate-400">{cert.year}</span>
                  </div>

                  <div className="font-bold text-slate-100 text-sm leading-snug group-hover:text-white">
                    {cert.title}
                  </div>

                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[10px] text-slate-400 bg-[#121824] border border-white/[0.04]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] gap-2">
                  <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{cert.status || "Verified Credential"}</span>
                  </span>

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-400/40 font-semibold transition-all active:scale-95 shrink-0"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[10px] text-slate-500 font-mono">Completed</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Pillar 3: Academic & Professional References */}
        <div className="pt-10 border-t border-white/[0.04]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Academic & Professional References
              </h3>
              <span className="text-xs font-mono text-slate-400">
                Department of Interdisciplinary Studies · Faculty of IT
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-mono text-xs">
            {referencesList.map((ref, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#0c1118] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-200 space-y-3"
              >
                <div>
                  <div className="text-sm sm:text-base font-bold text-white font-sans">{ref.name}</div>
                  <div className="text-xs text-emerald-400 mt-0.5">{ref.title}</div>
                  <div className="text-xs text-slate-400">{ref.organization}</div>
                </div>

                <div className="pt-3 border-t border-white/[0.04] text-xs text-slate-400 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-emerald-400" />
                    <a href={`mailto:${ref.email}`} className="hover:text-white transition-colors">
                      {ref.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
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
