"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import {
  Copy,
  Check,
  ArrowUpRight,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            CONTACT // INITIATE COLLABORATION
          </span>
          <span className="h-[1px] w-16 bg-emerald-500/40" />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Let's build something <br className="hidden sm:inline" />
            exceptional together.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            I'm currently seeking a Software Engineering Internship for 2026. Whether you have an engineering role, technical opportunity, or inquiry, my inbox is always open.
          </p>
        </div>

        {/* Contact Container Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Action Box */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#0e1622] to-[#080d14] border border-emerald-500/30 space-y-6 shadow-2xl">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPEN TO INTERNSHIPS · 2026</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Software Engineering Opportunities
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Available for on-site (Colombo / Western Province) and remote positions. Eager to contribute to full-stack, distributed backend, or cloud engineering teams.
              </p>
            </div>

            {/* Email Action Field */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0c1118] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-2.5 text-slate-200">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="select-all font-semibold">{profile.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors active:scale-95 border border-white/10"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 opacity-60" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profile.email}?subject=Software%20Engineering%20Internship%20Inquiry`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold transition-all shadow-md shadow-emerald-500/20 active:scale-95"
                >
                  <span>Send Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Based in {profile.location} · University of Moratuwa</span>
            </div>
          </div>

          {/* Direct Channels Cards */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0c1118] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#101722] transition-all duration-200 flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#141e2b] text-emerald-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-emerald-300 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-[11px] text-slate-400">minothma-sithumini</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0c1118] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-[#101722] transition-all duration-200 flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#141e2b] text-cyan-400 group-hover:scale-110 transition-transform">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                    GitHub
                  </div>
                  <div className="text-[11px] text-slate-400">@Minothma</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Phone / WhatsApp */}
            <a
              href={`tel:${profile.phone}`}
              className="p-5 rounded-2xl bg-[#0c1118] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#101722] transition-all duration-200 flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#141e2b] text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Phone / WhatsApp
                  </div>
                  <div className="text-[11px] text-slate-400">{profile.phone}</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

        </div>

        {/* Minimal Footer */}
        <div className="pt-16 mt-16 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            <span>© 2026 Minothma Sithumini · Engineered with Next.js & TypeScript</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-emerald-400 transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
