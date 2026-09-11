"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { projectsData, ProjectItem } from "@/data/projects";
import { usePortfolioUI } from "@/components/ui/PortfolioUIContext";
import { useToast } from "@/components/ui/Toast";
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
  Filter,
  Copy,
  Check,
} from "lucide-react";

export function Projects() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [localSelectedProject, setLocalSelectedProject] = useState<ProjectItem | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const {
    selectedProjectId,
    openProjectModal,
    closeProjectModal,
    highlightedSkill,
    setHighlightedSkill,
  } = usePortfolioUI();
  const { showToast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedProjectId) {
      const p = projectsData.find((proj) => proj.id === selectedProjectId);
      if (p) {
        setLocalSelectedProject(p);
      }
    }
  }, [selectedProjectId]);

  const handleOpenModal = (project: ProjectItem) => {
    setLocalSelectedProject(project);
    openProjectModal(project.id);
  };

  const handleCloseModal = () => {
    setLocalSelectedProject(null);
    closeProjectModal();
  };

  const handleCopySummary = (project: ProjectItem) => {
    const summary = `${project.name} (${project.tagline || project.badge})\nRole: ${project.writeUp.role || project.role || "Lead Engineer"}\nStack: ${project.stack.join(", ")}\nHighlights:\n${project.highlights.map((h) => `- ${h}`).join("\n")}\nRepository: ${project.githubUrl || "Available upon request"}`;
    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    showToast(`Copied ${project.name} architectural brief!`, "success");
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const categories = ["All", "Enterprise & Healthcare", "Full-Stack", "Embedded & IoT"];

  const filteredProjects = projectsData.filter((p) => {
    const matchCategory =
      selectedCategory === "All" || p.category === selectedCategory;

    if (!highlightedSkill) return matchCategory;

    const skillLower = highlightedSkill.toLowerCase();
    const matchSkill =
      p.stack.some((s) => s.toLowerCase().includes(skillLower) || skillLower.includes(s.toLowerCase())) ||
      p.writeUp.stackBreakdown.some((sb) => sb.tools.toLowerCase().includes(skillLower)) ||
      p.highlights.some((h) => h.toLowerCase().includes(skillLower));

    return matchCategory && matchSkill;
  });

  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Eyebrow and Section Header */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            FEATURED PROJECTS & SYSTEMS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Featured <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">Projects.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
              Full-stack systems and engineering projects built with clean layer separation, secure APIs, and responsive UI design.
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

        {/* Active Skill Filter Banner (If triggered from Toolkit) */}
        {highlightedSkill && (
          <div className="mb-8 p-3 sm:p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between gap-3 text-xs font-mono animate-in fade-in">
            <div className="flex items-center gap-2 text-emerald-300">
              <Filter className="w-4 h-4 text-emerald-400" />
              <span>
                Showing projects filtered by: <strong>{highlightedSkill}</strong> ({filteredProjects.length} found)
              </span>
            </div>
            <button
              onClick={() => {
                setHighlightedSkill(null);
                showToast("Cleared skill filter", "info");
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear Filter</span>
            </button>
          </div>
        )}

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
                    Role: Full-Stack Developer (Accessioning & Quality Control Module)
                  </p>
                </div>

                {/* Compliance & Standards Bar */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                    ISO 15189 Quality Verification
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                    Reference Interval Auto-Flagging
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                    Westgard Quality Control
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Full-stack hospital laboratory information system digitizing specimen intake, automated delta-check validation, and diagnostic quality control.
                </p>

                {/* Architectural Pipeline Flow Diagram */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] mb-5 space-y-2">
                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SAMPLE WORKFLOW PIPELINE</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Sample Intake</span>
                    <span className="text-slate-500">→</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">Quality Gate</span>
                    <span className="text-slate-500">→</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Delta-Checks (Δ% ≥ 40%)</span>
                    <span className="text-slate-500">→</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Supervisor Verification</span>
                  </div>
                </div>

                {/* Individual Ownership Highlights */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="text-emerald-400 font-bold mt-0.5">✔</span>
                    <span><strong>Sample Accessioning & Quality Gate:</strong> 3-tier priority queue (STAT, Urgent, Normal), tube type validation, and barcode reprinting.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="text-emerald-400 font-bold mt-0.5">✔</span>
                    <span><strong>Result Verification Engine:</strong> Reference range auto-flagging, longitudinal delta-checks (|Δ%| ≥ 40%), and Save Draft / Submit for Verification workflow.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="text-emerald-400 font-bold mt-0.5">✔</span>
                    <span><strong>Quality Control (QC) & Telemetry:</strong> Westgard multi-rules evaluation with dynamic Z-scores and live PostgreSQL test count aggregations.</span>
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
                      handleOpenModal(projectsData.find((p) => p.id === "durdans-lims")!)
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

              {/* Footer: Tech Stack + GitHub + Case Study Trigger */}
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

                <div className="flex items-center gap-2">
                  {filteredProjects.find((p) => p.id === "job-tracker")?.githubUrl && (
                    <a
                      href={filteredProjects.find((p) => p.id === "job-tracker")!.githubUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-200 bg-[#121a24] hover:bg-slate-800 border border-white/10 transition-all active:scale-95"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  <button
                    onClick={() =>
                      handleOpenModal(projectsData.find((p) => p.id === "job-tracker")!)
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-md shadow-cyan-500/20 active:scale-95"
                  >
                    <span>Architecture Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
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

                <div className="flex items-center gap-2">
                  {filteredProjects.find((p) => p.id === "inkora")?.githubUrl && (
                    <a
                      href={filteredProjects.find((p) => p.id === "inkora")!.githubUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-200 bg-[#121824] hover:bg-slate-800 border border-white/10 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  <button
                    onClick={() =>
                      handleOpenModal(projectsData.find((p) => p.id === "inkora")!)
                    }
                    className="text-xs font-mono text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-semibold"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
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

                <div className="flex items-center gap-2">
                  {filteredProjects.find((p) => p.id === "battery-vitals")?.githubUrl && (
                    <a
                      href={filteredProjects.find((p) => p.id === "battery-vitals")!.githubUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-200 bg-[#121824] hover:bg-slate-800 border border-white/10 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  <button
                    onClick={() =>
                      handleOpenModal(projectsData.find((p) => p.id === "battery-vitals")!)
                    }
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-semibold"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-slate-400 font-mono text-xs">
            No projects found matching the selected filters.
          </div>
        )}

      </div>

      {/* Case Study Modal Dialog */}
      {mounted &&
        localSelectedProject &&
        createPortal(
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200">
            <div
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0d121c] border border-white/15 shadow-2xl p-6 sm:p-9 space-y-7 text-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                    <span>{localSelectedProject.badge}</span>
                    {localSelectedProject.writeUp.teamContext && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 font-normal">
                          {localSelectedProject.writeUp.teamContext}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {localSelectedProject.name}
                  </h3>
                  {localSelectedProject.writeUp.role && (
                    <p className="text-xs font-mono text-cyan-300 font-semibold">
                      Role: {localSelectedProject.writeUp.role}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopySummary(localSelectedProject)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141d2a] hover:bg-slate-800 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-colors"
                    title="Copy brief summary for recruiters"
                  >
                    {copiedSummary ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Brief</span>
                      </>
                    )}
                  </button>

                  {localSelectedProject.githubUrl && (
                    <a
                      href={localSelectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-mono text-emerald-300 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View GitHub</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  )}

                  <button
                    onClick={handleCloseModal}
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Compliance Standards Badge Bar (For Durdans LIMS) */}
              {localSelectedProject.writeUp.complianceStandards && (
                <div className="p-4 rounded-2xl bg-[#101826] border border-emerald-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-bold">
                    <Award className="w-4 h-4" />
                    <span>INTERNATIONAL LABORATORY COMPLIANCE STANDARDS ENFORCED</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {localSelectedProject.writeUp.complianceStandards.map((std, idx) => (
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
                  {localSelectedProject.writeUp.overview}
                </p>
              </div>

              {/* Structured Individual Contributions & Modules (If Available) */}
              {localSelectedProject.writeUp.contributions && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    // INDIVIDUAL ARCHITECTURAL OWNERSHIP & CONTRIBUTIONS
                  </h4>
                  <div className="space-y-3.5">
                    {localSelectedProject.writeUp.contributions.map((sec, idx) => (
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
                  {localSelectedProject.writeUp.architecture.map((item, idx) => (
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
                  {localSelectedProject.writeUp.hardParts.map((item, idx) => (
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
                  {localSelectedProject.writeUp.stackBreakdown.map((sb, idx) => (
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
                  {localSelectedProject.writeUp.repoNote ||
                    "Faculty of IT · University of Moratuwa"}
                </span>
                <button
                  onClick={handleCloseModal}
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

