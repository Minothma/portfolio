"use client";

import React, { useState, useEffect, useRef } from "react";
import { profile } from "@/data/profile";
import { usePortfolioUI } from "@/components/ui/PortfolioUIContext";
import { MSLogo } from "@/components/ui/MSLogo";
import {
  Menu,
  X,
  ArrowDownToLine,
  Search,
  Sparkles,
  ChevronDown,
  Eye,
  Download,
  FileText,
} from "lucide-react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { openCommandPalette } = usePortfolioUI();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "toolkit", "journey", "contact"];
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

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openCommandPalette();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setCvDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleGlobalKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleGlobalKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCommandPalette]);

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
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
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
        <div className="w-full max-w-5xl rounded-2xl sm:rounded-full bg-[#0c1118]/85 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/60 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between pointer-events-auto transition-all duration-300">
          
          {/* Brand Monogram & Name */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-wider text-slate-100 hover:text-white transition-colors"
          >
            <MSLogo className="w-6 h-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)] transition-all duration-300" />
            <div className="flex items-center tracking-normal font-semibold">
              <span className="text-slate-100 group-hover:text-white transition-colors">
                minothma
              </span>
              <span className="text-emerald-400 font-bold font-mono">.dev</span>
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
          <div className="flex items-center gap-2.5">
            {/* Command Palette Trigger Button */}
            <button
              onClick={openCommandPalette}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-300 bg-[#121824] hover:bg-[#182232] border border-white/10 hover:border-emerald-500/30 transition-all duration-200 shadow-sm group"
              title="Open Spotlight Search (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline text-[11px] text-slate-400">Search</span>
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[9px] font-mono text-slate-400 bg-black/40 rounded border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Interactive CV Action Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-200 shadow-sm active:scale-95"
                aria-expanded={cvDropdownOpen}
              >
                <ArrowDownToLine className="w-3.5 h-3.5 text-emerald-400" />
                <span>CV</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${cvDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {cvDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#0c1118]/95 border border-white/10 p-1.5 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setCvDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-200 hover:text-white hover:bg-emerald-500/15 transition-colors group"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>View CV (PDF)</span>
                  </a>
                  <a
                    href={profile.resumeUrl}
                    download="Minothma_Sithumini_CV.pdf"
                    onClick={() => setCvDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-200 hover:text-white hover:bg-emerald-500/15 transition-colors group"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>Download CV</span>
                  </a>
                </div>
              )}
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

            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono text-slate-200 bg-[#121824] border border-white/10 hover:border-emerald-400/40 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                <span>View CV</span>
              </a>
              <a
                href={profile.resumeUrl}
                download="Minothma_Sithumini_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono text-slate-950 font-bold bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

