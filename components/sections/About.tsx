"use client";

import React from "react";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about-details" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:pl-16 lg:pr-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-mono tracking-widest text-amber-accent font-semibold uppercase">
            ABOUT
          </span>
          <span className="h-[1px] w-16 bg-amber-accent/40" />
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

          {/* Right Column: Custom Visual Portrait Frame with Watermark */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#e5a93c] via-[#ca8a27] to-[#8c5a14] p-[1.5px] shadow-2xl overflow-hidden group">
              
              {/* Inner portrait content */}
              <div className="relative w-full h-full rounded-[14px] bg-[#0c1017] flex flex-col items-center justify-between p-6 overflow-hidden">
                
                {/* Subtle top subtle grid */}
                <div 
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Top Badge */}
                <div className="relative z-10 w-full flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-amber-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-accent" />
                    UOM · ITM
                  </span>
                  <span className="text-slate-500">FACULTY OF IT</span>
                </div>

                {/* Center Monogram Graphic */}
                <div className="relative z-10 flex flex-col items-center my-auto">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-950 border border-amber-accent/30 flex items-center justify-center shadow-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-extrabold font-mono tracking-tight text-white">
                      MS
                    </span>
                  </div>
                  <span className="text-base font-bold text-white tracking-wide">
                    {profile.name}
                  </span>
                  <span className="text-xs font-mono text-slate-400 mt-0.5">
                    Software Engineering Intern
                  </span>
                </div>

                {/* Watermark at bottom right matching screenshot 5 */}
                <div className="relative z-10 w-full flex items-center justify-between text-[11px] font-mono text-slate-500 pt-3 border-t border-white/[0.06]">
                  <span className="text-slate-500 uppercase">MORATUWA · 2026</span>
                  <span className="text-amber-accent/80 text-[12px]">+</span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
