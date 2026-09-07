"use client";

import React from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { ArrowDown, FileText, ArrowUpRight, Sparkles, GraduationCap, Server, ShieldCheck, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-28 sm:pt-36 pb-12 relative overflow-hidden"
    >
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Availability & Location Pill */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OPEN TO SOFTWARE ENGINEERING INTERNSHIPS · 2026</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-400 bg-[#0c1118] border border-white/[0.06]">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sri Lanka</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mb-16">
          
          {/* Left Column: Big Typography, Value Pitch & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                Hi, my name is
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                {profile.name}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                Software Engineering Intern & Full-Stack Developer
              </h2>
            </div>

            {/* Pitch narrative */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              IT Undergraduate at the <strong className="text-white font-semibold">University of Moratuwa</strong> (CGPA: 3.47). I build resilient full-stack systems and backend architectures: <strong className="text-emerald-300 font-medium">automated QC validation engines</strong>, <strong className="text-emerald-300 font-medium">secure authentication pipelines</strong>, and <strong className="text-emerald-300 font-medium">scalable REST APIs</strong>.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold font-mono tracking-wide text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-mono text-slate-200 bg-[#0c1118] border border-white/10 hover:border-emerald-400/50 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>View CV (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="#contact"
                className="px-4 py-3 text-xs sm:text-sm font-mono text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Get in touch →
              </a>
            </div>
          </div>

          {/* Right Column: Signature Visual Bento Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl bg-gradient-to-b from-emerald-400/80 via-emerald-500/20 to-cyan-500/30 p-[1.5px] shadow-2xl shadow-emerald-950/40 group hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] transition-all duration-300">
              
              {/* Inner Card Frame */}
              <div className="relative w-full h-full rounded-[22px] bg-[#0c1118] overflow-hidden flex flex-col justify-between">
                
                {/* Real Profile Photo with cinematic lighting */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/profile.jpg"
                    alt={profile.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-top filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-500 ease-out"
                    priority
                  />
                  {/* Subtle multi-layer gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070a0e] via-[#070a0e]/20 to-[#070a0e]/50 pointer-events-none" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 w-full flex items-center justify-between p-4 text-[10px] font-mono text-slate-300 backdrop-blur-md bg-black/30 border-b border-white/5">
                  <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    UoM · ITM '26
                  </span>
                  <span className="text-slate-300 font-mono">FACULTY OF IT</span>
                </div>

                {/* Bottom Overlay Glass Card */}
                <div className="relative z-10 p-5 backdrop-blur-md bg-black/50 border-t border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-base font-bold text-white tracking-wide">
                        {profile.name}
                      </div>
                      <div className="text-xs font-mono text-emerald-400 mt-0.5">
                        Software Engineering Intern
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
                      GPA 3.47
                    </div>
                  </div>

                  {/* Highlights Pill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/10 backdrop-blur-sm border border-white/10">
                      <Server className="w-3 h-3 text-emerald-400" />
                      <span>Full-Stack</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/10 backdrop-blur-sm border border-white/10">
                      <ShieldCheck className="w-3 h-3 text-cyan-400" />
                      <span>10+ Certs</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/10 backdrop-blur-sm border border-white/10">
                      <GraduationCap className="w-3 h-3 text-emerald-400" />
                      <span>Moratuwa</span>
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Live Quick Metrics Counter Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 pb-8 border-t border-white/[0.06] font-mono">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0c1118]/80 border border-white/[0.06] hover:border-emerald-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {profile.metrics.gpa}
              <span className="text-xs text-emerald-400 font-normal ml-1">
                {profile.metrics.gpaScale}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">
              CGPA · University of Moratuwa
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#0c1118]/80 border border-white/[0.06] hover:border-emerald-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {profile.metrics.projectsCount}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">
              Production & End-to-End Systems
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#0c1118]/80 border border-white/[0.06] hover:border-emerald-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {profile.metrics.techCount}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">
              Technologies & Frameworks
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#0c1118]/80 border border-white/[0.06] hover:border-emerald-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              10+
            </div>
            <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">
              Verified Badges & Certifications
            </div>
          </div>
        </div>

      </div>

      {/* Infinite Tech Marquee Ticker */}
      <TechMarquee />
    </section>
  );
}
