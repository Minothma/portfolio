"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  X,
  Code2,
  Cpu,
  Activity,
  FileText,
  Linkedin,
  Github,
  Zap,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { usePortfolioUI } from "@/components/ui/PortfolioUIContext";

export function WelcomePortal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { openProjectModal } = usePortfolioUI();

  useEffect(() => {
    // Check if user has already seen welcome screen in this session
    const seen = sessionStorage.getItem("minothma_welcome_seen");
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for custom trigger to re-open
  useEffect(() => {
    const handleReopen = () => {
      setIsOpen(true);
    };
    window.addEventListener("open-welcome-portal", handleReopen);
    return () => window.removeEventListener("open-welcome-portal", handleReopen);
  }, []);

  // Lock body scroll when welcome portal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("minothma_welcome_seen", "true");
  };

  const handleEnterWorkspace = () => {
    handleClose();
    // Smooth scroll to top / hero
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExploreProjects = () => {
    handleClose();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenSpecificProject = (projectId: string) => {
    handleClose();
    setTimeout(() => {
      openProjectModal(projectId);
    }, 300);
  };

  return (
    <>
      {/* Floating Re-summon Dock Trigger (Bottom Left) */}
      {!isOpen && (
        <div className="fixed bottom-6 left-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-500">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-3.5 py-2.5 rounded-full bg-[#0c1420]/90 hover:bg-[#111c2e] border border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_0_25px_rgba(16,185,129,0.2)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
            title="Open Interactive Welcome Guide"
          >
            {/* Small Glowing Avatar Icon */}
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-400/60 shadow-md">
              <Image
                src="/avatar/minothma_welcome_avatar.jpg"
                alt="Minothma Digital Avatar"
                fill
                sizes="32px"
                className="object-cover"
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-black animate-pulse" />
            </div>

            <div className="text-left font-mono">
              <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                <span>Meet Minothma</span>
                <Sparkles className="w-3 h-3 text-emerald-400 animate-spin-slow" />
              </div>
              <div className="text-[9px] text-emerald-400/80">Interactive Guide</div>
            </div>
          </button>
        </div>
      )}

      {/* Cinematic Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
          
          {/* Card Container */}
          <div className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-[#0f172a] via-[#0a111e] to-[#060b13] border border-emerald-500/30 p-6 sm:p-8 shadow-[0_0_60px_rgba(16,185,129,0.2)] overflow-hidden animate-in zoom-in-95 duration-300">
            
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ONLINE · AI DIGITAL TWIN & WELCOME PORTAL</span>
              </div>

              <button
                onClick={handleClose}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Dismiss & Enter Workspace"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Avatar & Welcome Intro */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 relative z-10 text-center sm:text-left">
              
              {/* Glowing Avatar Portrait */}
              <div className="relative flex-shrink-0">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-emerald-400/70 shadow-[0_0_30px_rgba(16,185,129,0.35)] ring-4 ring-emerald-500/20 bg-slate-950">
                  <Image
                    src="/avatar/minothma_welcome_avatar.jpg"
                    alt="Minothma Sithumini 3D Developer Avatar"
                    fill
                    sizes="120px"
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Status Dot */}
                <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-400 text-[10px] font-mono font-bold text-emerald-300 flex items-center gap-1 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>v2.0</span>
                </div>
              </div>

              {/* Title & Introduction */}
              <div className="space-y-1.5 flex-1">
                <div className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase flex items-center justify-center sm:justify-start gap-1.5">
                  <span>Ayubowan & Welcome! 👋</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Minothma Sithumini
                </h3>
                <p className="text-xs font-mono text-cyan-300/90 font-medium">
                  Full-Stack & Systems Software Engineer
                </p>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  B.Sc. (Hons) in IT & Management @ <strong className="text-white">University of Moratuwa</strong> (CGPA: 3.47 / 4.00). Passionate about high-throughput distributed systems, secure APIs, and reactive web applications.
                </p>
              </div>
            </div>

            {/* Flagship Projects Quick Launch Matrix */}
            <div className="space-y-2 mb-6 relative z-10">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>FEATURED ENGINEERING HIGHLIGHTS</span>
                </span>
                <span className="text-[9px] text-slate-500">Click to explore</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                {/* 1. Durdans LIMS */}
                <button
                  onClick={() => handleOpenSpecificProject("durdans-lims")}
                  className="p-2.5 rounded-xl bg-black/40 hover:bg-emerald-950/40 border border-white/[0.06] hover:border-emerald-500/40 transition-all group flex items-start gap-2.5 text-xs font-mono"
                >
                  <Activity className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-bold text-slate-200 group-hover:text-emerald-300 flex items-center gap-1">
                      <span>Durdans Hospital LIMS</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-[10px] text-slate-400">100+ Branches Clinical ERP</div>
                  </div>
                </button>

                {/* 2. Job Application Tracker */}
                <button
                  onClick={() => handleOpenSpecificProject("job-tracker")}
                  className="p-2.5 rounded-xl bg-black/40 hover:bg-cyan-950/40 border border-white/[0.06] hover:border-cyan-500/40 transition-all group flex items-start gap-2.5 text-xs font-mono"
                >
                  <Layers className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-bold text-slate-200 group-hover:text-cyan-300 flex items-center gap-1">
                      <span>Job Application Tracker</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-[10px] text-slate-400">NestJS · AWS S3 · Kanban</div>
                  </div>
                </button>

                {/* 3. Inkora CMS */}
                <button
                  onClick={() => handleOpenSpecificProject("inkora")}
                  className="p-2.5 rounded-xl bg-black/40 hover:bg-emerald-950/40 border border-white/[0.06] hover:border-emerald-500/40 transition-all group flex items-start gap-2.5 text-xs font-mono"
                >
                  <Code2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-bold text-slate-200 group-hover:text-emerald-300 flex items-center gap-1">
                      <span>Inkora Content Platform</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-[10px] text-slate-400">PHP 8 · PDO · OWASP Hardening</div>
                  </div>
                </button>

                {/* 4. Battery Vitals */}
                <button
                  onClick={() => handleOpenSpecificProject("battery-vitals")}
                  className="p-2.5 rounded-xl bg-black/40 hover:bg-cyan-950/40 border border-white/[0.06] hover:border-cyan-500/40 transition-all group flex items-start gap-2.5 text-xs font-mono"
                >
                  <Cpu className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-bold text-slate-200 group-hover:text-cyan-300 flex items-center gap-1">
                      <span>Battery Vitals Testbed</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-[10px] text-slate-400">FITExpo 2025 Honoree (UOM)</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 relative z-10 pt-2 border-t border-white/[0.06]">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleEnterWorkspace}
                  className="w-full sm:flex-1 py-3 px-5 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-mono font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>🚀 Enter Engineering Workspace</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleExploreProjects}
                  className="w-full sm:w-auto py-3 px-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 text-xs font-mono font-semibold transition-all flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>View Projects</span>
                </button>
              </div>

              {/* Social / Direct Links Bar */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Minothma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <span>·</span>
                  <a
                    href="https://www.linkedin.com/in/minothma-chandrasekara-7080272b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <div className="text-[10px] text-emerald-400/80">
                  Faculty of IT · Moratuwa
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
