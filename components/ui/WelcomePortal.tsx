"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, GraduationCap, Code2, ShieldCheck } from "lucide-react";

export function WelcomePortal() {
  const [isOpen, setIsOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if visitor has already passed the welcome screen in this session
    const seen = sessionStorage.getItem("minothma_welcome_seen");
    if (seen === "true") {
      setIsOpen(false);
    }
  }, []);

  // Listen for custom event to re-open from floating dock badge
  useEffect(() => {
    const handleReopen = () => {
      setIsExiting(false);
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

  // Handle keyboard 'Enter' to enter
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsExiting(false);
      sessionStorage.setItem("minothma_welcome_seen", "true");
    }, 400);
  };

  // If already seen and not open, just render the floating dock trigger
  if (mounted && !isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-500">
        <button
          onClick={() => {
            setIsExiting(false);
            setIsOpen(true);
          }}
          className="group relative flex items-center gap-3 px-3.5 py-2 rounded-full bg-[#080d15]/95 hover:bg-[#0e1724] border border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_0_25px_rgba(16,185,129,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
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
    );
  }

  // If not mounted yet (SSR) or open, render full-screen non-scrolling viewport
  if (!mounted || isOpen) {
    return (
      <div
        className={`fixed inset-0 z-[100] h-screen max-h-screen w-screen overflow-hidden flex flex-col justify-between items-center px-4 py-6 sm:py-8 bg-[#05080e] select-none transition-all duration-500 ${
          isExiting ? "opacity-0 -translate-y-6 scale-95 pointer-events-none" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Ambient Animated Mesh Background Gradients */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-overlay opacity-25 pointer-events-none" />

        {/* Top Centered Header Bar */}
        <div className="relative z-10 w-full flex justify-center pt-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono tracking-widest text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>FACULTY OF INFORMATION TECHNOLOGY · UNIVERSITY OF MORATUWA</span>
          </div>
        </div>

        {/* Center Main Stage / Content (Fits 100vh with Zero Scroll) */}
        <div className="relative z-10 w-full max-w-xl text-center my-auto py-2 space-y-4 sm:space-y-5">
          
          {/* Animated 3D Avatar Portrait */}
          <div
            className="relative mx-auto w-28 h-28 sm:w-36 sm:h-36 group cursor-pointer"
            onClick={handleEnter}
          >
            {/* Pulsing Emerald/Cyan Aura Ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-500/40 via-teal-400/30 to-cyan-500/40 blur-md animate-pulse" />
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-emerald-400/90 shadow-[0_0_40px_rgba(16,185,129,0.35)] ring-4 ring-emerald-500/20 bg-slate-900 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/avatar/minothma_welcome_avatar.jpg"
                alt="Minothma Sithumini 3D Avatar"
                fill
                sizes="144px"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Active Status Badge */}
            <div className="absolute bottom-1 right-1.5 px-2.5 py-0.5 rounded-full bg-[#05080e] border border-emerald-400 text-[10px] font-mono font-bold text-emerald-300 flex items-center gap-1 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available</span>
            </div>
          </div>

          {/* Clean Professional Title & Greeting (No Emojis) */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ayubowan & Welcome</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Welcome to My <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">Portfolio.</span>
            </h1>

            <p className="text-xs sm:text-sm font-mono text-cyan-300 font-semibold tracking-wide">
              Minothma Sithumini · Software Engineering Intern
            </p>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed pt-1">
              Information Technology & Management undergraduate at the <strong className="text-white font-medium">University of Moratuwa</strong>, passionate about full-stack web engineering, building reliable backend systems, and solving real-world software problems.
            </p>
          </div>

          {/* Clean Capability Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-slate-300 pt-1">
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
              <span>CGPA: 3.47 / 4.00</span>
            </span>
          </div>

          {/* Primary High-Contrast Explore Button with Glowing Accent */}
          <div className="pt-2">
            <button
              onClick={handleEnter}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-mono font-bold text-xs sm:text-sm tracking-wider shadow-[0_0_35px_rgba(16,185,129,0.35)] hover:shadow-[0_0_50px_rgba(16,185,129,0.55)] transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>Explore Engineering Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Minimal Hint Bar */}
        <div className="relative z-10 w-full text-center pb-1">
          <p className="text-[10px] sm:text-[11px] font-mono text-slate-400">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 text-[10px] font-semibold">Enter</kbd> or click button to explore
          </p>
        </div>

      </div>
    );
  }

  return null;
}
