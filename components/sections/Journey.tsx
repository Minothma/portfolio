"use client";

import React, { useState } from "react";
import { educationHistory, leadershipHistory, certificationsList, referencesList } from "@/data/highlights";
import { useToast } from "@/components/ui/Toast";
import { Award, UserCheck, Mail, Phone, ExternalLink, Copy, Check, GraduationCap, Users } from "lucide-react";

export function Journey() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { showToast } = useToast();

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    showToast(`Copied certificate verification code: ${code}`, "success");
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const categories = [
    "All",
    "Cloud & DevOps",
    "AI / ML & Data Science",
    "Databases & Backend",
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
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            JOURNEY // MILESTONES & CREDENTIALS
          </span>
          <span className="h-[1px] w-16 bg-emerald-500/40" />
        </div>

        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Academic Foundation, <br className="hidden sm:inline" />
            Leadership & Verified Badges.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            A chronological timeline of university milestones, extracurricular leadership, industry certifications, and academic references.
          </p>
        </div>

        {/* Two Column Layout for Education & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c1118] to-[#080d14] border border-emerald-500/20 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono tracking-widest text-white uppercase font-bold">
                  EDUCATION & ACADEMICS
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                GPA 3.47
              </span>
            </div>

            <div className="space-y-8 pl-1">
              {educationHistory.map((edu, idx) => (
                <div key={idx} className="relative pl-6 space-y-1.5 group">
                  {/* Square timeline marker */}
                  <span className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full border border-emerald-400 bg-emerald-950 group-hover:bg-emerald-400 transition-colors" />

                  {/* Year Tag in emerald mono */}
                  <div className="text-xs font-mono text-emerald-400 tracking-wide font-semibold">
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
                  <p className="text-xs font-mono text-slate-400 pt-0.5">
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
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c1118] to-[#080d14] border border-cyan-500/20 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono tracking-widest text-white uppercase font-bold">
                  LEADERSHIP & RESPONSIBILITY
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                ROTARACT & IEEE
              </span>
            </div>

            <div className="space-y-7 pl-1">
              {leadershipHistory.map((lead, idx) => (
                <div key={idx} className="relative pl-6 space-y-1 group">
                  {/* Square timeline marker */}
                  <span className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full border border-cyan-400 bg-cyan-950 group-hover:bg-cyan-400 transition-colors" />

                  {/* Year Tag in cyan mono */}
                  <div className="text-xs font-mono text-cyan-400 tracking-wide font-semibold">
                    {lead.year}
                  </div>

                  {/* Role */}
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {lead.role}
                  </h3>

                  {/* Organization */}
                  <p className="text-xs sm:text-sm text-slate-300">
                    {lead.organization}
                  </p>

                  {lead.description && (
                    <p className="text-xs text-slate-400 pt-0.5 leading-relaxed">
                      {lead.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Certifications Sub-block */}
        <div className="pt-12 border-t border-white/[0.04] mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Licenses & Certifications
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
                  {cert.verificationCode ? (
                    <button
                      onClick={() => handleCopyCode(cert.verificationCode!)}
                      title="Click to copy verification code"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#141d2a] hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/40 text-[11px] text-slate-300 hover:text-emerald-300 transition-all active:scale-95"
                    >
                      <span>Code: {cert.verificationCode}</span>
                      {copiedCode === cert.verificationCode ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3 opacity-60" />
                      )}
                    </button>
                  ) : cert.status ? (
                    <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{cert.status}</span>
                    </span>
                  ) : (
                    <span className="text-slate-400">Verified Credential</span>
                  )}

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors group-hover:underline shrink-0"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic References Sub-block */}
        <div className="pt-10 border-t border-white/[0.04]">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
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
                className="p-5 rounded-2xl bg-[#0c1118] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-200 space-y-2.5"
              >
                <div className="text-sm font-bold text-white font-sans">{ref.name}</div>
                <div className="text-xs text-emerald-400">{ref.title}</div>
                <div className="text-xs text-slate-400">{ref.organization}</div>
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
