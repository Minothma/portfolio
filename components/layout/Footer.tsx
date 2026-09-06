"use client";

import React from "react";
import { profile } from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-[#070a0e] py-12 relative z-10">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:pl-16 lg:pr-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-500">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">
              {profile.firstName.toUpperCase()}
              <span className="text-amber-accent mx-0.5">·</span>
              {profile.lastName.toUpperCase()}
            </span>
            <span>—</span>
            <span>Faculty of IT, University of Moratuwa</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-slate-200 transition-colors"
            >
              Email
            </a>
          </div>

        </div>

        <div className="mt-6 pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-600">
          <p>© {new Date().getFullYear()} Minothma Sithumini. All rights reserved.</p>
          <p>Designed with Next.js, Tailwind CSS & App Router</p>
        </div>
      </div>
    </footer>
  );
}
