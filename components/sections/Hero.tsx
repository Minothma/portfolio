"use client";

import React from "react";
import { profile } from "@/data/profile";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { FileText, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-28 pb-12 lg:pt-32 lg:pb-16 relative"
    >
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:pl-16 lg:pr-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 mb-8 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{profile.statusBadge}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Left Column: Big Typography & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-400 leading-none">
                {profile.firstName}
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                {profile.lastName}
              </h1>
            </div>

            {/* Pitch narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              {profile.heroPitch.prefix}
              <strong className="text-white font-semibold">
                {profile.heroPitch.highlights[0]}
              </strong>
              ,{" "}
              <strong className="text-white font-semibold">
                {profile.heroPitch.highlights[1]}
              </strong>
              , and{" "}
              <strong className="text-white font-semibold">
                {profile.heroPitch.highlights[2]}
              </strong>
              {profile.heroPitch.suffix}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="px-6 py-3 rounded-md text-xs sm:text-sm font-semibold font-mono tracking-wide text-slate-950 bg-amber-accent hover:bg-amber-hover transition-all duration-200 shadow-md shadow-amber-500/10 active:scale-95"
              >
                See what I've built
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-md text-xs sm:text-sm font-mono tracking-wide text-slate-300 bg-surface-card hover:bg-surface-cardHover border border-white/10 hover:border-white/20 transition-all duration-200 active:scale-95"
              >
                Get in touch
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-md text-xs sm:text-sm font-mono text-slate-400 hover:text-white border border-transparent hover:border-white/10 transition-all flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-amber-accent" />
                <span>CV</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Terminal Spec Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#0c1017] border border-white/[0.08] p-6 shadow-2xl space-y-5 font-mono text-xs select-none hover:border-amber-accent/30 transition-colors">
              
              {/* Terminal Card Header */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pb-3 border-b border-white/[0.06] tracking-wider">
                <span className="text-slate-400">ENG · PROFILE</span>
                <span className="text-slate-500">{profile.specCard.batch}</span>
              </div>

              {/* Specification Key-Value Pairs */}
              <div className="space-y-3.5">
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 text-slate-500 uppercase tracking-wider text-[11px]">
                    FOCUS
                  </span>
                  <span className="col-span-8 text-slate-200 font-medium">
                    {profile.specCard.focus}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 text-slate-500 uppercase tracking-wider text-[11px]">
                    CORE
                  </span>
                  <span className="col-span-8 text-slate-200">
                    {profile.specCard.core}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 text-slate-500 uppercase tracking-wider text-[11px]">
                    READING
                  </span>
                  <span className="col-span-8 text-slate-200">
                    {profile.specCard.reading}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 text-slate-500 uppercase tracking-wider text-[11px]">
                    GPA
                  </span>
                  <span className="col-span-8 text-slate-100 font-semibold">
                    {profile.specCard.gpa}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 text-slate-500 uppercase tracking-wider text-[11px]">
                    BASED
                  </span>
                  <span className="col-span-8 text-slate-200">
                    {profile.specCard.based}
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 pt-1 border-t border-white/[0.04]">
                  <span className="col-span-4 text-slate-500 uppercase tracking-wider text-[11px]">
                    STATUS
                  </span>
                  <span className="col-span-8 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {profile.specCard.status}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Live Quick Metrics Counter Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 pb-8 border-t border-white/[0.06] font-mono">
          <div className="p-4 rounded-xl bg-[#0c1017]/80 border border-white/[0.05]">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {profile.metrics.gpa}
              <span className="text-xs text-amber-accent font-normal ml-1">
                {profile.metrics.gpaScale}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">
              CGPA · UoM
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0c1017]/80 border border-white/[0.05]">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {profile.metrics.projectsCount}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">
              End-to-End Systems
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0c1017]/80 border border-white/[0.05]">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {profile.metrics.techCount}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">
              Technologies & Tools
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0c1017]/80 border border-white/[0.05]">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {profile.metrics.certCount}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">
              Certifications & Badges
            </div>
          </div>
        </div>

      </div>

      {/* Infinite Tech Marquee Ticker */}
      <TechMarquee />
    </section>
  );
}
