"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { projectsData, ProjectItem } from "@/data/projects";
import {
  X,
  ArrowUpRight,
  Sparkles,
  Layers,
  Activity,
  Kanban,
  FileCode2,
  Cpu,
  CheckCircle2,
  ShieldAlert,
  Server,
  Database,
  ExternalLink,
  Github,
  Award,
  Radio,
} from "lucide-react";

export function Projects() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = ["All", "Enterprise & Healthcare", "Full-Stack", "Embedded & IoT"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Eyebrow and Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            SELECTED WORK // PRODUCTION ARCHITECTURE
          </span>
          <span className="h-[1px] w-16 bg-emerald-500/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Featured Systems & <br className="hidden sm:inline" />
              Full-Stack Architectures.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              Mission-critical enterprise platforms and full-stack systems engineered with clean layer separation, ISO compliance, and production security standards.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-500/20 scale-105"
                    : "bg-[#0c1118] text-slate-400 border border-white/[0.06] hover:border-emerald-500/40 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Durdans Hospital LIMS (Span 7 Spotlight Bento) */}
          {filteredProjects.find((p) => p.id === "durdans-lims") && (
            <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#0e1622] to-[#0a0f16] border border-emerald-500/30 hover:border-emerald-400/60 p-7 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-xl hover:shadow-[0_0_35px_rgba(16,185,129,0.18)] transition-all duration-300">
              
              {/* Background ambient lighting */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

              <div>
                {/* Header Tag Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>DURDANS HOSPITAL PLC · IFS SRI LANKA · UOM</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    🟢 COMPLETED
                  </span>
                </div>

                {/* Project Title & Tagline */}
                <div className="mb-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    Durdans Hospital LIMS
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/90 mt-1 font-semibold">
                    Role: Full-Stack Software Engineer (Pre-Analytics, MLT & IQC Lead)
                  </p>
                </div>

                {/* Compliance & Standards Bar */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                    ISO 15189 Quality Gate
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                    CLSI C28-A3 Auto-Flagging
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                    Westgard Multi-Rules QC
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Production-grade enterprise clinical diagnostic platform digitizing the end-to-end specimen lifecycle from accessioning and delta-check validation to dynamic Westgard QC evaluation.
                </p>

                {/* Architectural Pipeline Flow Diagram */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] mb-5 space-y-2">
                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>CLINICAL SPECIMEN PIPELINE ARCHITECTURE</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">STAT Triage</span>
                    <span className="text-slate-500">→</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">ISO 15189 Gate</span>
                    <span className="text-slate-500">→</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Delta-Checks (Δ% ≥ 40%)</span>
                    <span className="text-slate-500">→</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Westgard Z-Score</span>
                  </div>
                </div>

                {/* Individual Ownership Highlights */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="text-emerald-400 font-bold mt-0.5">✔</span>
                    <span><strong>Pre-Analytical Quality Gate:</strong> ISO 15189 5-point automated verification, vacutainer container validation, CAP rejection engine, and 3-tier STAT priority queue.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="text-emerald-400 font-bold mt-0.5">✔</span>
                    <span><strong>CDS & Analytical MLT Engine:</strong> CLSI C28-A3 reference interval auto-flagging, longitudinal Delta-Check algorithm (|Δ%| ≥ 40%), and Save Draft / Legal Record Locking.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="text-emerald-400 font-bold mt-0.5">✔</span>
                    <span><strong>IQC & Live Telemetry:</strong> Westgard Multi-Rules (1-2s, 1-3s, 2-2s with dynamic Z-scores), live PostgreSQL analyzer throughput aggregations, and idempotent barcode reprinting.</span>
                  </li>
                </ul>
              </div>

              {/* Footer: Tech Stack + GitHub + Case Study Trigger */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js 15", "Java 21 / Spring Boot 3", "Apache Kafka", "PostgreSQL", "Keycloak OIDC", "Liquibase", "AWS / Terraform"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-[11px] font-mono text-slate-300 bg-[#141d2a] border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5">
                  {filteredProjects.find((p) => p.id === "durdans-lims")?.githubUrl && (
                    <a
                      href={filteredProjects.find((p) => p.id === "durdans-lims")!.githubUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono text-slate-200 bg-[#141d2a] hover:bg-slate-800 border border-white/10 hover:border-white/20 transition-all active:scale-95"
                    >
                      <Github className="w-3.5 h-3.5 text-white" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>
                  )}

                  <button
                    onClick={() =>
                      setSelectedProject(projectsData.find((p) => p.id === "durdans-lims") || null)
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-200 shadow-md shadow-emerald-500/20 active:scale-95"
                  >
                    <span>Architecture Deep-Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* Card 2: Job Application Tracker (Span 5 Bento) */}
          {filteredProjects.find((p) => p.id === "job-tracker") && (
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#0d141e] to-[#080d14] border border-cyan-500/30 hover:border-cyan-400/60 p-7 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.18)] transition-all duration-300">
              
              {/* Background ambient lighting */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

              <div>
                {/* Header Tag Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                    <Kanban className="w-3.5 h-3.5" />
                    <span>FULL-STACK · INDIVIDUAL</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    🟢 COMPLETED
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-3">
                  Job Application Tracker
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  End-to-end career lifecycle platform with drag-and-drop Kanban workflow, AWS S3 presigned resume uploads, and containerized NestJS REST APIs.
                </p>

                {/* Architecture Highlights Pill Box */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] mb-5 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">AWS S3 Presigned URL</span>
                    <span className="text-cyan-400 font-semibold">Direct Cloud Upload</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">JWT Token Security</span>
                    <span className="text-emerald-400 font-semibold">Rotating Refresh Tokens</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Database Layer</span>
                    <span className="text-cyan-300 font-semibold">PostgreSQL · Prisma · Flyway</span>
                  </div>
                </div>

                {/* CV Highlights */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="text-cyan-400 font-bold mt-0.5">✔</span>
                    <span>Interactive drag-and-drop Kanban board managing status pipelines.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="text-cyan-400 font-bold mt-0.5">✔</span>
                    <span>Multi-container Docker Compose setup encompassing frontend, NestJS backend, and PostgreSQL.</span>
                  </li>
                </ul>
              </div>

              {/* Footer: Tech Stack + Case Study Trigger */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {["NestJS", "Next.js", "Prisma", "PostgreSQL", "AWS S3", "Docker"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-[11px] font-mono text-slate-300 bg-[#121a24] border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setSelectedProject(projectsData.find((p) => p.id === "job-tracker") || null)
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-md shadow-cyan-500/20 active:scale-95"
                >
                  <span>Architecture Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* Card 3: Inkora Content Platform (Span 6 Bento) */}
          {filteredProjects.find((p) => p.id === "inkora") && (
            <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-[#0c1118] to-[#080d14] border border-white/[0.08] hover:border-emerald-500/40 p-6 sm:p-7 flex flex-col justify-between space-y-5 relative overflow-hidden group shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-emerald-300 bg-emerald-950/40 border border-emerald-500/20">
                    <FileCode2 className="w-3.5 h-3.5" />
                    <span>FULL-STACK WEB · PERSONAL</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    🟢 COMPLETED
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors mb-2">
                  Inkora Content Platform
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Full-stack publishing engine with user authentication, rich-text editor, draft auto-saving, real-time AJAX live search, and CSRF/SQLi defense.
                </p>

                <ul className="space-y-1.5 mb-4">
                  <li className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Debounced AJAX live search querying full-text MySQL indexes.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Security hardening with CSRF tokens, session hardening, and PDO prepared statements.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {["PHP", "MySQL", "JavaScript", "AJAX", "Bootstrap"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-[#121824] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setSelectedProject(projectsData.find((p) => p.id === "inkora") || null)
                  }
                  className="text-xs font-mono text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-semibold"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Card 4: Battery Vitals Testbed (Span 6 Bento) */}
          {filteredProjects.find((p) => p.id === "battery-vitals") && (
            <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-[#0c1118] to-[#080d14] border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between space-y-5 relative overflow-hidden group shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-cyan-300 bg-cyan-950/40 border border-cyan-500/20">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>EMBEDDED & IOT · 1ST YEAR PROJECT</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    🟢 COMPLETED
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-2">
                  Battery Vitals Testbed
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Automated testbed for Li-Po batteries using ESP32 microcontroller, relay switching, DS18B20 thermal monitoring, and a Python State of Health (SOH) evaluation pipeline.
                </p>

                <ul className="space-y-1.5 mb-4">
                  <li className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Automated charge-rest-discharge cycles with emergency thermal cutoffs.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Python telemetry pipeline generating voltage decay and internal resistance curves.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {["ESP32", "C++", "Python", "IoT", "Relays"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-[#121824] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setSelectedProject(projectsData.find((p) => p.id === "battery-vitals") || null)
                  }
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-semibold"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Case Study Modal Dialog */}
      {mounted &&
        selectedProject &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0d121c] border border-white/15 shadow-2xl p-6 sm:p-9 space-y-7 text-slate-200">
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                    <span>{selectedProject.badge}</span>
                    {selectedProject.writeUp.teamContext && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 font-normal">
                          {selectedProject.writeUp.teamContext}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {selectedProject.name}
                  </h3>
                  {selectedProject.writeUp.role && (
                    <p className="text-xs font-mono text-cyan-300 font-semibold">
                      Role: {selectedProject.writeUp.role}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141d2a] hover:bg-slate-800 border border-white/10 text-xs font-mono text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View GitHub</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Compliance Standards Badge Bar (For Durdans LIMS) */}
              {selectedProject.writeUp.complianceStandards && (
                <div className="p-4 rounded-2xl bg-[#101826] border border-emerald-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-bold">
                    <Award className="w-4 h-4" />
                    <span>INTERNATIONAL LABORATORY COMPLIANCE STANDARDS ENFORCED</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedProject.writeUp.complianceStandards.map((std, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono text-emerald-200 bg-emerald-950/60 border border-emerald-500/30"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  // SYSTEM OVERVIEW & SCOPE
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedProject.writeUp.overview}
                </p>
              </div>

              {/* Structured Individual Contributions & Modules (If Available) */}
              {selectedProject.writeUp.contributions && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    // INDIVIDUAL ARCHITECTURAL OWNERSHIP & CONTRIBUTIONS
                  </h4>
                  <div className="space-y-3.5">
                    {selectedProject.writeUp.contributions.map((sec, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-[#090e15] border border-white/[0.08] space-y-2.5"
                      >
                        <h5 className="text-sm font-bold text-white font-mono flex items-center gap-2 text-emerald-300">
                          {sec.title}
                        </h5>
                        <ul className="space-y-2 pl-1">
                          {sec.points.map((pt, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                            >
                              <span className="text-emerald-400 font-bold mt-0.5">▸</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  // SYSTEM ARCHITECTURE & DESIGN DECISIONS
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.writeUp.architecture.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <span className="text-emerald-400 font-bold mt-0.5">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Challenges & Resolutions */}
              <div className="space-y-3 p-5 rounded-2xl bg-black/50 border border-cyan-500/20">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>TECHNICAL CHALLENGES & ARCHITECTURAL RESOLUTIONS</span>
                </h4>
                <ul className="space-y-2">
                  {selectedProject.writeUp.hardParts.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <span className="text-cyan-400 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 8-Tier Technology Stack Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  // COMPREHENSIVE TECHNOLOGY STACK MATRIX
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.writeUp.stackBreakdown.map((sb, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#141a24] border border-white/[0.06] text-xs"
                    >
                      <div className="font-mono text-emerald-400 uppercase text-[10px] font-bold mb-1">
                        {sb.category}
                      </div>
                      <div className="text-white font-medium">{sb.tools}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <span>
                  {selectedProject.writeUp.repoNote ||
                    "Faculty of IT · University of Moratuwa"}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

    </section>
  );
}
