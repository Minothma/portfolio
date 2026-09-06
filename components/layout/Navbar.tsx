"use client";

import React, { useState, useEffect } from "react";
import { profile } from "@/data/profile";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Journey", href: "#journey" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-[2.5px] w-full z-[60] pointer-events-none bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-400 transition-all duration-100 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#070a0e]/90 backdrop-blur-md border-b border-white/[0.06] py-4 shadow-lg shadow-black/30"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          
          {/* Left Monogram / Name with emerald dot */}
          <a
            href="#about"
            className="group flex items-center gap-1.5 text-sm sm:text-base font-bold font-mono tracking-widest text-slate-100 hover:text-white transition-colors"
          >
            <span>{profile.firstName.toUpperCase()}</span>
            <span className="text-emerald-400 mx-0.5">·</span>
            <span>{profile.lastName.toUpperCase()}</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-7 text-xs font-mono tracking-wider text-slate-400">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Résumé Button */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-mono text-slate-300 border border-white/20 hover:border-emerald-400 hover:text-emerald-400 transition-all duration-200"
            >
              <span>Résumé</span>
              <span className="text-[10px]">↓</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#070a0e]/95 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 font-mono text-sm">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-emerald-400 py-1"
              >
                About
              </a>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-emerald-400 py-1"
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
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded text-xs font-mono text-slate-200 border border-emerald-500/50 hover:bg-emerald-500/10"
              >
                <span>Download Résumé</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
