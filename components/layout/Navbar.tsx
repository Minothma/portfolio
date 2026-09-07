"use client";

import React, { useState, useEffect } from "react";
import { profile } from "@/data/profile";
import { Menu, X, ArrowDownToLine, Sparkles } from "lucide-react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about-details", "work", "toolkit", "journey", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", id: "about-details" },
    { label: "Work", id: "work" },
    { label: "Toolkit", id: "toolkit" },
    { label: "Journey", id: "journey" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 h-[2.5px] w-full z-[70] pointer-events-none bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-400 transition-all duration-100 shadow-[0_0_10px_rgba(16,185,129,0.9)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Island Header */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="w-full max-w-5xl rounded-2xl sm:rounded-full bg-[#0c1118]/85 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/60 px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between pointer-events-auto transition-all duration-300">
          
          {/* Brand Monogram & Name */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-wider text-slate-100 hover:text-white transition-colors"
          >
            <span className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold group-hover:scale-105 group-hover:bg-emerald-500/20 transition-transform">
              M
            </span>
            <div className="flex items-center gap-1 font-bold">
              <span>MINOTHMA</span>
              <span className="text-emerald-400 font-normal opacity-80">.DEV</span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121824]/80 p-1 rounded-full border border-white/[0.05]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={`#${link.id}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-400/15 text-emerald-300 font-semibold border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-200 shadow-sm"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>Résumé</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg bg-[#121824] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-4 right-4 rounded-2xl bg-[#0c1118]/95 border border-white/10 p-5 space-y-3 backdrop-blur-2xl shadow-2xl md:hidden animate-in slide-in-from-top-2 pointer-events-auto">
            <div className="flex flex-col space-y-2 font-mono text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? "bg-emerald-500/15 text-emerald-300 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-mono text-slate-950 font-bold bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                <ArrowDownToLine className="w-3.5 h-3.5" />
                <span>Download Résumé (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
