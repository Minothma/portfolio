"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import { Copy, Check, ArrowUpRight, Mail, Phone, Linkedin, Github, MapPin, MessageSquare } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:pl-16 lg:pr-8">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono tracking-widest text-amber-accent font-semibold uppercase">
            CONTACT
          </span>
          <span className="h-[1px] w-16 bg-amber-accent/40" />
        </div>

        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Get in touch.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg leading-relaxed">
            I'm currently seeking a Software Engineering Internship to contribute to real-world production systems. Feel free to reach out directly.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Action Box */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#0c1017] border border-white/[0.08] space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPEN TO INTERNSHIPS — 2026</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Let's discuss an engineering role or project.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you have an internship opening, team collaboration, or a technical inquiry, my inbox is open.
              </p>
            </div>

            {/* Email Action Field */}
            <div className="p-4 rounded-lg bg-[#121824] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-2.5 text-slate-200">
                <Mail className="w-4 h-4 text-amber-accent" />
                <span className="select-all">{profile.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors active:scale-95"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profile.email}?subject=Software%20Engineering%20Internship%20Inquiry`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-amber-accent hover:bg-amber-hover text-slate-950 font-bold transition-colors shadow-sm active:scale-95"
                >
                  <span>Email Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Based in {profile.location} · Open to Remote & On-site Opportunities</span>
            </div>
          </div>

          {/* Direct Channels Cards */}
          <div className="lg:col-span-5 space-y-3 font-mono text-xs">
            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0c1017] border border-white/[0.07] hover:border-amber-accent/40 transition-colors flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-amber-accent transition-colors" />
                <div>
                  <div className="font-semibold text-slate-200 group-hover:text-white">LinkedIn</div>
                  <div className="text-[11px] text-slate-500">linkedin.com/in/minothma</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0c1017] border border-white/[0.07] hover:border-amber-accent/40 transition-colors flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <Github className="w-4 h-4 text-slate-400 group-hover:text-amber-accent transition-colors" />
                <div>
                  <div className="font-semibold text-slate-200 group-hover:text-white">GitHub</div>
                  <div className="text-[11px] text-slate-500">github.com/Minothma</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>

            {/* WhatsApp / Phone */}
            <a
              href={`https://wa.me/${profile.phoneFormatted.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0c1017] border border-white/[0.07] hover:border-emerald-500/40 transition-colors flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-105 transition-transform" />
                <div>
                  <div className="font-semibold text-slate-200 group-hover:text-emerald-300">WhatsApp / Call</div>
                  <div className="text-[11px] text-slate-500">{profile.phone}</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
