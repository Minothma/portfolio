"use client";

import React from "react";
import Image from "next/image";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about-details" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:pl-16 lg:pr-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            ABOUT
          </span>
          <span className="h-[1px] w-16 bg-emerald-500/40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Narrative Story Left Column */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              I'm an IT undergraduate at the University of Moratuwa, two years in, and most of what I know came from shipping things rather than sitting exams. My work tends to land on the <strong className="text-white font-semibold">server side & full-stack systems</strong> — designing schemas, writing the auth layer, and working out what happens when concurrent users trigger state changes at the exact same millisecond.
            </p>

            <p>
              On <strong className="text-white font-semibold">Durdans Hospital LIMS</strong> I co-developed an automated clinical accessioning engine that validates specimens, classifies tube caps, and enforces real-time Westgard QC rules. On <strong className="text-white font-semibold">Job Application Tracker</strong> I engineered the backend from scratch: JWT auth with refresh token rotation, direct AWS S3 presigned uploads for multi-version resumes, and a containerized PostgreSQL environment.
            </p>

            <p>
              Away from the editor I serve as <strong className="text-white font-semibold">Director of IT</strong> for the Rotaract Club of Alumni of University of Moratuwa and contribute to IEEE student chapters — the kind of things that teach you about real deadlines and team communication. I'm looking for an internship where I can work on production systems with engineers who'll review my code properly.
            </p>
          </div>

          {/* Right Column: High-Fidelity Photograph Frame with Emerald Glow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl bg-gradient-to-b from-emerald-400 via-emerald-500/30 to-cyan-500/20 p-[1.5px] shadow-2xl shadow-emerald-950/40 overflow-hidden group hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all duration-300">
              
              {/* Inner portrait container */}
              <div className="relative w-full h-full rounded-[14px] bg-[#0c1017] flex flex-col justify-between overflow-hidden">
                
                {/* Real Profile Image with subtle zoom on hover */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/profile.jpg"
                    alt={profile.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover object-top filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-500 ease-out"
                    priority
                  />
                  {/* Subtle dark gradient overlay at top and bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070a0e] via-[#070a0e]/30 to-[#070a0e]/60 pointer-events-none" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 w-full flex items-center justify-between p-4 text-[10px] font-mono text-slate-300 backdrop-blur-sm bg-black/20">
                  <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    UOM · ITM
                  </span>
                  <span className="text-slate-300/90 font-mono">FACULTY OF IT</span>
                </div>

                {/* Bottom Overlay Info & Watermark */}
                <div className="relative z-10 p-5 backdrop-blur-md bg-black/40 border-t border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white tracking-wide">
                        {profile.name}
                      </h3>
                      <p className="text-xs font-mono text-emerald-400 mt-0.5">
                        Software Engineering Intern
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                    <span className="uppercase text-[10px] text-slate-400">MORATUWA · 2026</span>
                    <span className="text-emerald-400 font-bold text-[12px]">+</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
