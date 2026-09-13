"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, X, GraduationCap, Code2, ShieldCheck } from "lucide-react";

export function WelcomePortal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if visitor has already seen the welcome portal in this session
    const seen = sessionStorage.getItem("minothma_welcome_seen");
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for custom event to re-open from floating badge or navbar
  useEffect(() => {
    const handleReopen = () => {
      setIsOpen(true);
    };
    window.addEventListener("open-welcome-portal", handleReopen);
    return () => window.removeEventListener("open-welcome-portal", handleReopen);
  }, []);

  // Lock body scroll when welcome portal is active
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

  const handleEnter = () => {
    setIsOpen(false);
    sessionStorage.setItem("minothma_welcome_seen", "true");
  };

  return (
    <>
      {/* Subtle Floating Dock Re-summon Trigger (Bottom Left) */}
      {!isOpen && (
        <div className="fixed bottom-6 left-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-500">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-3.5 py-2 rounded-full bg-[#090f17]/90 hover:bg-[#0f1a28] border border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_0_25px_rgba(16,185,129,0.2)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
            title="Re-open Welcome Screen"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-400/60 shadow-md">
              <Image
                src="/avatar/minothma_welcome_avatar.jpg"
                alt="Minothma Avatar"
                fill
                sizes="32px"
                className="object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-black animate-pulse" />
            </div>

            <div className="text-left font-mono">
              <div className="text-[11px] font-bold text-white flex items-center gap-1">
                <span>Welcome</span>
                <Sparkles className="w-3 h-3 text-emerald-400" />
              </div>
              <div className="text-[9px] text-emerald-400/80">Minothma.dev</div>
            </div>
          </button>
        </div>
      )}

      {/* Cinematic Full-Screen Welcome Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-2xl animate-in fade-in duration-300">
          
          {/* Main Glassmorphic Welcome Card */}
          <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#0e1624] via-[#09101b] to-[#05080f] border border-emerald-500/30 p-7 sm:p-9 shadow-[0_0_80px_rgba(16,185,129,0.2)] text-center overflow-hidden animate-in zoom-in-95 duration-300">
            
            {/* Ambient Background Aura Lights */}
            <div className="absolute -top-20 -left-20 w-52 h-52 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Top Close Button */}
            <button
              onClick={handleEnter}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="Skip & Enter"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>FACULTY OF IT · UNIVERSITY OF MORATUWA</span>
            </div>

            {/* Glowing 3D Avatar Portrait (No Glasses · Matches Real Photo) */}
            <div className="relative mx-auto mb-6 w-32 h-32 sm:w-36 sm:h-36">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-emerald-400/80 shadow-[0_0_35px_rgba(16,185,129,0.4)] ring-4 ring-emerald-500/20 bg-slate-900">
                <Image
                  src="/avatar/minothma_welcome_avatar.jpg"
                  alt="Minothma Sithumini 3D Digital Avatar"
                  fill
                  sizes="144px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Verified Online Badge */}
              <div className="absolute bottom-1 right-2 px-2.5 py-0.5 rounded-full bg-slate-950 border border-emerald-400/80 text-[10px] font-mono font-bold text-emerald-300 flex items-center gap-1 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Active</span>
              </div>
            </div>

            {/* Greeting & Introduction */}
            <div className="space-y-2.5 mb-7">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                <span>Ayubowan & Hello! 👋</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Welcome to My Portfolio
              </h2>

              <p className="text-sm font-mono text-cyan-300 font-medium">
                Minothma Sithumini · Software Engineering Intern
              </p>

              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed pt-2">
                I’m an Information Technology & Management undergraduate at the <strong className="text-white">University of Moratuwa</strong>, passionate about full-stack engineering, scalable backend systems, and solving complex real-world problems.
              </p>
            </div>

            {/* Core Capability Highlights (Subtle & Clean) */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-7 text-[11px] font-mono text-slate-300">
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Full-Stack & Systems</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Secure API Architectures</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-300" />
                <span>GPA: 3.47 / 4.00</span>
              </span>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={handleEnter}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-mono font-bold text-xs sm:text-sm tracking-wider shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 group"
            >
              <span>Explore Engineering Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Footer Tagline */}
            <p className="text-[10px] font-mono text-slate-400 mt-4">
              Click anywhere or press Enter to begin
            </p>

          </div>
        </div>
      )}
    </>
  );
}
