"use client";

import React from "react";
import { profile } from "@/data/profile";
import { MSLogo } from "@/components/ui/MSLogo";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.05] bg-[#070a0e] py-12 relative z-10">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.04]">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <MSLogo className="w-7 h-7" />
            <div>
              <div className="flex items-center font-mono text-sm font-semibold text-white">
                <span>minothma</span>
                <span className="text-emerald-400 font-bold">.dev</span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Faculty of Information Technology · University of Moratuwa
              </p>
            </div>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-emerald-300 transition-colors"
            >
              Email ↗
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121824] hover:bg-[#182232] border border-white/10 hover:border-emerald-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all active:scale-95 shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Minothma Sithumini. All rights reserved.</p>
          <p className="text-slate-400">
            Engineered with <span className="text-emerald-400 font-medium">Next.js</span>, <span className="text-cyan-400 font-medium">TypeScript</span> &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
