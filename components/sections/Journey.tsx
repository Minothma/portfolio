"use client";

import React, { useState } from "react";
import { educationHistory, leadershipHistory, certificationsList, referencesList } from "@/data/highlights";
import { Award, UserCheck, Mail, Phone, ExternalLink, Copy, Check } from "lucide-react";

export function Journey() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>LICENSES & CERTIFICATIONS ({certificationsList.length})</span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    selectedCategory === cat
                      ? "bg-emerald-400 text-slate-950 font-bold"
                      : "bg-[#0c1017] text-slate-400 border border-white/[0.06] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 font-mono text-xs">
            {filteredCertifications.map((cert, idx) => (
              <div
                key={idx}
                className="group relative p-4 rounded-xl bg-[#0c1017] border border-white/[0.06] hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between space-y-3 hover:shadow-lg hover:shadow-emerald-950/20"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-emerald-400 font-semibold">{cert.issuer}</span>
                    <span className="text-slate-500">{cert.year}</span>
                  </div>

                  <div className="font-bold text-slate-100 text-xs leading-snug group-hover:text-white">
                    {cert.title}
                  </div>

                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-1.5 py-0.5 rounded text-[10px] text-slate-400 bg-[#121824] border border-white/[0.04]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] gap-2">
                  {cert.verificationCode ? (
                    <button
                      onClick={() => handleCopyCode(cert.verificationCode!)}
                      title="Click to copy verification code"
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#121824] hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/40 text-[10px] text-slate-300 hover:text-emerald-300 transition-all active:scale-95"
                    >
                      <span>Code: {cert.verificationCode}</span>
                      {copiedCode === cert.verificationCode ? (
                        <Check className="w-2.5 h-2.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-2.5 h-2.5 opacity-50" />
                      )}
                    </button>
                  ) : cert.status ? (
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{cert.status}</span>
                    </span>
                  ) : (
                    <span className="text-slate-600">Verified</span>
                  )}

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors group-hover:underline shrink-0"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
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
