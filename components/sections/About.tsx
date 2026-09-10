"use client";

import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            BACKGROUND & PROFILE
          </span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            About <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">Me.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            Information Technology & Management undergraduate at the University of Moratuwa passionate about full-stack engineering, clean architecture, and reliable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Who I Am, Experience, Extra-Curriculars & Internship Goal */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5 text-sm text-slate-300 leading-relaxed">
            
            {/* Story & Background Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0c1118] border border-white/[0.07] space-y-4 shadow-xl hover:border-emerald-500/30 transition-all duration-300 flex-1">
              <p>
                I am an Information Technology & Management undergraduate at the{" "}
                <strong className="text-white font-semibold">University of Moratuwa, Faculty of Information Technology</strong>. 
                I focus on full-stack development - building web applications, designing databases, and creating backend APIs.
              </p>

              <p>
                I have worked on a variety of projects, including a hospital laboratory system (
                <strong className="text-emerald-300 font-medium">Durdans Hospital LIMS</strong>) built with Spring Boot and Next.js, 
                a job application tracking platform (
                <strong className="text-cyan-300 font-medium">Job Application Tracker</strong>) using NestJS, PostgreSQL, and AWS S3, 
                a blogging platform (
                <strong className="text-slate-200 font-medium">Inkora</strong>), and an IoT-based battery monitoring system (
                <strong className="text-slate-200 font-medium">Battery Vitals</strong>).
              </p>

              <p className="text-xs sm:text-sm text-slate-400">
                Beyond academics, I am actively involved in university societies, currently serving as{" "}
                <strong className="text-slate-200 font-medium">Director of IT</strong> at the Rotaract Club of Alumni of University of Moratuwa, 
                along with committee roles in IEEE student chapters. I have also completed several IBM and HackerRank certifications in cloud computing, Python, and SQL to strengthen my technical foundation.
              </p>
            </div>

            {/* Internship Availability Callout Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#0c161d] to-[#080d14] border border-emerald-500/30 text-xs sm:text-sm text-slate-300 flex items-start gap-3.5 shadow-lg">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="text-white font-bold text-xs uppercase font-mono tracking-wide flex items-center gap-2">
                  <span>INTERNSHIP AVAILABILITY · 2026</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  I am currently looking for a <strong className="text-emerald-300 font-semibold">Software Engineering Internship in 2026</strong> to gain industry experience, work with experienced engineers, and contribute to real projects.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Unified Academic Background Timeline Card */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-[#0c1118] border border-white/[0.07] hover:border-emerald-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6">
            
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Academic Background
                  </h3>
                  <p className="text-xs text-slate-400">
                    Degree, physical science & school milestones
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 uppercase">
                ACADEMICS
              </span>
            </div>

            {/* Continuous Vertical Timeline */}
            <div className="relative pl-6 ml-2 border-l border-white/[0.08] space-y-6 flex-1 flex flex-col justify-around">
              
              {/* Milestone 1: University */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full border-2 border-emerald-400 bg-[#0c1118] ring-4 ring-emerald-500/10 group-hover:scale-125 transition-transform" />
                
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-mono font-semibold text-emerald-400 tracking-wide">
                    2024 — Present
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    CGPA 3.47 / 4.00
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  B.Sc. (Hons) in Information Technology & Management
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Faculty of Information Technology, University of Moratuwa
                </p>
              </div>

              {/* Milestone 2: G.C.E. Advanced Level */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full border-2 border-cyan-400 bg-[#0c1118] ring-4 ring-cyan-500/10 group-hover:scale-125 transition-transform" />
                
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-mono font-semibold text-cyan-400 tracking-wide">
                    2022
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    Z-score: 1.2516
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  G.C.E. Advanced Level - Physical Science Stream
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Sumana Balika Vidyalaya, Ratnapura
                </p>
                <p className="text-xs text-emerald-300/90 font-mono mt-0.5">
                  Combined Maths (A), Chemistry (B), Physics (C)
                </p>
              </div>

              {/* Milestone 3: G.C.E. Ordinary Level */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full border-2 border-slate-400 bg-[#0c1118] ring-4 ring-white/5 group-hover:scale-125 transition-transform" />
                
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-mono font-semibold text-slate-400 tracking-wide">
                    2018
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                    8 A&apos;s · 1 B
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-slate-200 transition-colors leading-snug">
                  G.C.E. Ordinary Level
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Sumana Balika Vidyalaya, Ratnapura
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
