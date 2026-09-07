"use client";

import React from "react";
import Image from "next/image";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            ABOUT // BACKGROUND & PERSPECTIVE
          </span>
          <span className="h-[1px] w-16 bg-emerald-500/40" />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Engineering with discipline <br className="hidden sm:inline" />
            & architectural intent.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            From clinical specimen accessioning pipelines to cloud-native microservices and IoT telemetry, I focus on building systems that remain reliable under stress.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Narrative Story Left Column */}
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#0c1118] border border-white/[0.06] space-y-4 shadow-xl">
              <p>
                I am an Information Technology undergraduate at the <strong className="text-white font-semibold">University of Moratuwa</strong> (Faculty of Information Technology). Most of my technical growth has come from engineering end-to-end software systems and wrestling with real edge cases: concurrent state mutations, secure token lifecycles, and high-throughput data validation.
              </p>

              <p>
                In my enterprise project, <strong className="text-emerald-300 font-medium">Durdans Hospital LIMS</strong> (developed with IFS Sri Lanka, Durdans Hospital PLC, and UoM), I co-architected the pre-analytical accessioning and clinical decision support engines—enforcing ISO 15189 quality gates, mathematical delta-checks (|Δ%| ≥ 40%), and real-time Westgard QC multi-rules with dynamic Z-scores.
              </p>

              <p>
                In my individual projects, such as the <strong className="text-cyan-300 font-medium">Job Application Tracker</strong>, I designed the backend from scratch using NestJS, PostgreSQL, Prisma ORM, and AWS S3 presigned upload pipelines for secure, multi-version document storage.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#080d14] border border-emerald-500/20 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono text-base font-bold shrink-0">
                ⚡
              </div>
              <div>
                <span className="font-semibold text-white block mb-0.5">Internship Availability</span>
                Currently seeking a <strong className="text-emerald-300">Software Engineering Internship (2026)</strong> where I can contribute to production architectures, participate in rigorous code reviews, and ship high-impact features.
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Highlights & Leadership Bento Matrix */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Bento Card 1: University */}
            <div className="p-5 rounded-2xl bg-[#0c1118] border border-white/[0.07] hover:border-emerald-500/30 transition-all duration-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                  EDUCATION
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  UoM
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">
                B.Sc. (Hons) in IT & Management
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                University of Moratuwa · Faculty of IT
              </p>
              <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Cumulative GPA</span>
                <span className="text-emerald-400 font-bold">3.47 / 4.00</span>
              </div>
            </div>

            {/* Bento Card 2: Leadership */}
            <div className="p-5 rounded-2xl bg-[#0c1118] border border-white/[0.07] hover:border-cyan-500/30 transition-all duration-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                  LEADERSHIP
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  ROTARACT
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">
                Director of IT & Digital Media
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rotaract Club of Alumni of University of Moratuwa
              </p>
              <div className="pt-2 border-t border-white/[0.04] text-[11px] font-mono text-slate-400">
                Managing digital operations & community web portals.
              </div>
            </div>

            {/* Bento Card 3: Technical Focus */}
            <div className="p-5 rounded-2xl bg-[#0c1118] border border-white/[0.07] hover:border-emerald-500/30 transition-all duration-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                  CORE SPECIALIZATION
                </span>
                <span className="text-emerald-400 font-bold">⚙️</span>
              </div>
              <h4 className="text-sm font-bold text-white">
                Full-Stack & Backend Systems
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Spring Boot, NestJS, Next.js, PostgreSQL, RESTful API design, Docker & JWT Auth architecture.
              </p>
            </div>

            {/* Bento Card 4: Quality & Standards */}
            <div className="p-5 rounded-2xl bg-[#0c1118] border border-white/[0.07] hover:border-cyan-500/30 transition-all duration-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                  STANDARDS & CERTIFICATIONS
                </span>
                <span className="text-cyan-400 font-bold">🛡️</span>
              </div>
              <h4 className="text-sm font-bold text-white">
                10+ Verified Credentials
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                AWS Cloud, Postman API, Spring & Java, DeepLearning.AI, GitHub Foundations & UoM certificates.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
