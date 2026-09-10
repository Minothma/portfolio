"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { usePortfolioUI } from "@/components/ui/PortfolioUIContext";
import { useToast } from "@/components/ui/Toast";
import {
  ArrowDown,
  FileText,
  ArrowUpRight,
  Sparkles,
  GraduationCap,
  Server,
  ShieldCheck,
  MapPin,
  Terminal,
  Activity,
  Cpu,
  Database,
  CheckCircle2,
  Search,
  Code2,
  Copy,
} from "lucide-react";

export function Hero() {
  const [heroMode, setHeroMode] = useState<"visual" | "telemetry">("visual");
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);
  const { openCommandPalette } = usePortfolioUI();
  const { showToast } = useToast();

  const handleRunCommand = (cmd: string) => {
    if (cmd === "status") {
      setTerminalOutput(
        `[STATUS]: Information Technology & Management Undergraduate, University of Moratuwa (Batch 23)\n[CGPA]: 3.47 / 4.00 · Faculty of Information Technology\n[SEEKING]: Software Engineering Internship (2026)\n[LOCATION]: Ratnapura, Sri Lanka`
      );
      showToast("Profile details loaded", "info");
    } else if (cmd === "projects") {
      setTerminalOutput(
        `[PROJECT 1]: Durdans Hospital LIMS (Next.js, Spring Boot 3, Kafka, Keycloak)\n[PROJECT 2]: Job Application Tracker (NestJS, Next.js, Prisma, AWS S3, Docker)\n[PROJECT 3]: Inkora Content Platform (PHP, MySQL, JavaScript, Bootstrap)\n[PROJECT 4]: Battery Vitals Testbed (ESP32, C++, Python, NumPy)`
      );
      showToast("Loaded project summaries", "success");
    } else if (cmd === "contact") {
      navigator.clipboard.writeText(profile.email);
      setTerminalOutput(profile.email);
      showToast(`Copied ${profile.email} to clipboard!`, "success");
    }
  };

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-2rem)] flex flex-col justify-start pt-20 sm:pt-24 pb-8 relative overflow-hidden"
    >
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Availability & Location Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>OPEN TO SOFTWARE ENGINEERING INTERNSHIPS · 2026</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-400 bg-[#0c1118] border border-white/[0.06]">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ratnapura, Sri Lanka</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mb-8">
          
          {/* Left Column: Big Typography, Value Pitch & CTAs */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-mono tracking-widest text-emerald-400 uppercase font-semibold flex items-center gap-2">
                <span>IT & MANAGEMENT UNDERGRADUATE</span>
                <span className="w-8 h-[1px] bg-emerald-500/40" />
                <span className="text-slate-400 font-normal">UNIVERSITY OF MORATUWA</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                {profile.name}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                Software Engineering Intern
              </h2>
            </div>

            {/* Pitch narrative */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              {profile.heroPitch}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold font-mono tracking-wide text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-mono text-slate-200 bg-[#0c1118] border border-white/10 hover:border-emerald-400/50 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Interactive Engineering Command Bar */}
            <div className="pt-2">
              <div className="p-3.5 rounded-2xl bg-[#080d14] border border-white/[0.08] font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-white/[0.05]">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Quick Interactive Console</span>
                  </span>
                  <span className="text-[10px]">Click to run query</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleRunCommand("status")}
                    className="px-2.5 py-1 rounded-lg bg-[#121a24] hover:bg-emerald-950/60 text-slate-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 transition-colors text-[11px]"
                  >
                    $ minothma --status
                  </button>
                  <button
                    onClick={() => handleRunCommand("projects")}
                    className="px-2.5 py-1 rounded-lg bg-[#121a24] hover:bg-emerald-950/60 text-slate-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 transition-colors text-[11px]"
                  >
                    $ list projects
                  </button>
                  <button
                    onClick={() => handleRunCommand("contact")}
                    className="px-2.5 py-1 rounded-lg bg-[#121a24] hover:bg-emerald-950/60 text-slate-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 transition-colors text-[11px]"
                  >
                    $ copy email
                  </button>
                </div>

                {terminalOutput && (
                  <div className="mt-2 p-2.5 rounded-xl bg-black/60 border border-emerald-500/20 text-[11px] text-emerald-300/90 whitespace-pre-wrap leading-relaxed animate-in fade-in duration-200">
                    {terminalOutput}
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Dual-Mode Bento Console (Visual ⇄ Tech Specs) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-3">
            
            {/* Mode Switcher Pills */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-[#0c1118] border border-white/10 shadow-lg">
              <button
                onClick={() => setHeroMode("visual")}
                className={`px-3.5 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                  heroMode === "visual"
                    ? "bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                👤 Visual Profile
              </button>
              <button
                onClick={() => setHeroMode("telemetry")}
                className={`px-3.5 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                  heroMode === "telemetry"
                    ? "bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                ⚡ Tech Specs
              </button>
            </div>

            {/* Mode 1: Visual Photo Profile Card */}
            {heroMode === "visual" ? (
              <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl bg-gradient-to-b from-emerald-400/80 via-emerald-500/20 to-cyan-500/30 p-[1.5px] shadow-2xl shadow-emerald-950/40 group hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-300 animate-in fade-in">
                <div className="relative w-full h-full rounded-[22px] bg-[#0c1118] overflow-hidden flex flex-col justify-between">
                  
                  {/* Real Profile Photo with full headroom & clear lighting */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/profile.jpg"
                      alt={profile.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-[center_8%] filter brightness-[1.05] contrast-[1.02] saturate-[1.05] group-hover:scale-105 transition-transform duration-500 ease-out"
                      priority
                    />
                    {/* Dark gradient for text legibility at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070a0e] via-[#070a0e]/70 via-30% to-transparent pointer-events-none" />
                  </div>

                  {/* Top Floating Badge */}
                  <div className="relative z-10 w-full flex items-center justify-between p-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold text-emerald-300 bg-black/50 backdrop-blur-md border border-white/10 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      UoM · ITM Batch 23
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-300 bg-black/50 backdrop-blur-md border border-white/10">
                      FACULTY OF IT
                    </span>
                  </div>

                  {/* Bottom Overlay Glass Card */}
                  <div className="relative z-10 p-5 backdrop-blur-md bg-black/60 border-t border-white/10 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-base font-bold text-white tracking-wide">
                          {profile.name}
                        </div>
                        <div className="text-xs font-mono text-emerald-400 mt-0.5">
                          Full-Stack Developer
                        </div>
                      </div>
                      <div className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
                        GPA 3.47
                      </div>
                    </div>

                    {/* Highlights Pill Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/10 backdrop-blur-sm border border-white/10">
                        <Server className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Full-Stack</span>
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/10 backdrop-blur-sm border border-white/10">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                        <span>10+ Badges</span>
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/10 backdrop-blur-sm border border-white/10">
                        <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Moratuwa</span>
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              /* Mode 2: Tech Specs Console Card */
              <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl bg-gradient-to-b from-cyan-400/80 via-cyan-500/20 to-emerald-500/30 p-[1.5px] shadow-2xl shadow-cyan-950/40 group hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all duration-300 animate-in fade-in">
                <div className="relative w-full h-full rounded-[22px] bg-[#0c1118] p-5 flex flex-col justify-between overflow-hidden font-mono text-xs">
                  
                  {/* Top Header */}
                  <div className="space-y-1.5 pb-3 border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-bold tracking-wider text-[11px] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5" />
                        TECHNICAL PROFILE
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                        UOM ITM · AVAILABLE
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Core Technologies & Engineering Focus
                    </div>
                  </div>

                  {/* Telemetry Metric Grid */}
                  <div className="space-y-3 py-2">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <div className="text-[10px] text-slate-400 uppercase">Primary Focus</div>
                      <div className="text-emerald-300 font-bold flex items-center justify-between">
                        <span>Full-Stack Web & Backend Engineering</span>
                        <span className="text-[10px] text-emerald-400">CORE</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <div className="text-[10px] text-slate-400 uppercase">Core Frameworks</div>
                      <div className="text-cyan-300 font-bold flex items-center justify-between">
                        <span>Next.js · React · Spring Boot · NestJS</span>
                        <span className="text-[10px] text-cyan-400">ACTIVE</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <div className="text-[10px] text-slate-400 uppercase">Databases & Tools</div>
                      <div className="text-emerald-300 font-bold flex items-center justify-between">
                        <span>PostgreSQL · MySQL · Prisma · Docker</span>
                        <span className="text-[10px] text-emerald-400">DEV</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <div className="text-[10px] text-slate-400 uppercase">Academic Degree</div>
                      <div className="text-slate-200 font-bold flex items-center justify-between">
                        <span>B.Sc. (Hons) IT & Management (UoM)</span>
                        <span className="text-[10px] text-emerald-400">3.47 GPA</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Status */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Internship Search</span>
                    <span className="text-cyan-300 font-bold">2026 Opportunities</span>
                  </div>

                </div>
              </div>
            )}

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

