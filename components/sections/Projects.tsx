"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  ZoomIn,
  Maximize2,
  Globe,
} from "lucide-react";

export function Projects() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [activeLightboxImage, setActiveLightboxImage] = useState<{ url: string; title: string; caption: string } | null>(null);

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

  // Sync with global UI context (e.g. from Command Palette or direct triggers)
  useEffect(() => {
    if (selectedProjectId) {
      const p = projectsData.find((proj) => proj.id === selectedProjectId);
      if (p) {
        setSelectedProject(p);
      }
    } else {
      setSelectedProject(null);
    }
  }, [selectedProjectId]);

  // Lock body scroll when modal or lightbox is active
  useEffect(() => {
    if (selectedProject || activeLightboxImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, activeLightboxImage]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeLightboxImage) {
          setActiveLightboxImage(null);
        } else if (selectedProject) {
          handleCloseModal();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, activeLightboxImage]);

  const handleOpenModal = (project: ProjectItem) => {
    setSelectedProject(project);
    openProjectModal(project.id);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
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
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    Durdans Hospital LIMS
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/90 mt-1 font-semibold">
                    Role: Full-Stack Developer & Lead Technical Documenter
                  </p>
                </div>

                {/* Official Showcase Banner Preview */}
                <div 
                  onClick={() => handleOpenModal(projectsData.find((p) => p.id === "durdans-lims")!)}
                  className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 mb-5 group/img cursor-pointer shadow-xl hover:border-emerald-500/50 transition-all duration-300"
                >
                  <Image
                    src="/durdans-lims-banner.jpg"
                    alt="Durdans Hospital LIMS System Architecture & Showcase"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e15]/60 via-transparent to-transparent opacity-40 group-hover/img:opacity-10 transition-opacity" />
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Full-stack healthcare enterprise ERP developed to digitize and automate clinical laboratory diagnostic workflows across 100+ hospital branches in Sri Lanka.
                </p>

                {/* Architecture Highlights Pill Box */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] mb-5 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Specimen Lifecycle</span>
                    <span className="text-emerald-400 font-semibold">STAT Triage & 5-Point Quality Gate</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Specimen Integrity</span>
                    <span className="text-cyan-400 font-semibold">Zero-Duplication Barcode Engine</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Clinical Verification</span>
                    <span className="text-emerald-300 font-semibold">MLT Result Entry & Auto-Flags</span>
                  </div>
                </div>

                {/* Concise Highlights */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="text-emerald-400 font-bold mt-0.5">✔</span>
                    <span>Built sample reception worklists with 3-tier priority triage and pre-analytical validation.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="text-emerald-400 font-bold mt-0.5">✔</span>
                    <span>Engineered zero-duplication barcode reprint engine and MLT diagnostic result-entry state machine.</span>
                  </li>
                </ul>
              </div>

              {/* Footer: Tech Stack + GitHub + Case Study Trigger */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js 15", "Java 21 / Spring Boot 3", "Apache Kafka", "PostgreSQL", "Keycloak OIDC", "Liquibase"].map((tech) => (
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

                {/* Project Title & Role Subtitle */}
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    Job Application Tracker
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mt-1 font-semibold">
                    Role: Full-Stack Engineer (End-to-End Ownership)
                  </p>
                </div>

                {/* Official Showcase Banner Preview */}
                <div 
                  onClick={() => handleOpenModal(projectsData.find((p) => p.id === "job-tracker")!)}
                  className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-cyan-500/20 mb-5 group/img cursor-pointer shadow-xl hover:border-cyan-400/60 transition-all duration-300"
                >
                  <Image
                    src="/projects/jobtracker-banner.jpg"
                    alt="JobTracker Kanban Pipeline & AWS S3 Presigned Upload Architecture"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e15]/60 via-transparent to-transparent opacity-40 group-hover/img:opacity-10 transition-opacity" />
                </div>

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

                <div className="flex items-center gap-2.5">
                  {filteredProjects.find((p) => p.id === "job-tracker")?.githubUrl && (
                    <a
                      href={filteredProjects.find((p) => p.id === "job-tracker")!.githubUrl!}
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

                {/* Project Title & Role Subtitle */}
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    Inkora Content Platform
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/90 mt-1 font-semibold">
                    Role: Full-Stack Developer (Sole Ownership & Cloud Deployment)
                  </p>
                </div>

                {/* Official Showcase Banner Preview */}
                <div 
                  onClick={() => handleOpenModal(projectsData.find((p) => p.id === "inkora")!)}
                  className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-emerald-500/20 mb-4 group/img cursor-pointer shadow-xl hover:border-emerald-400/60 transition-all duration-300"
                >
                  <Image
                    src="/projects/inkora-banner.jpg"
                    alt="Inkora Content Management & Publishing Platform"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e15]/60 via-transparent to-transparent opacity-40 group-hover/img:opacity-10 transition-opacity" />
                </div>

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

                <div className="flex flex-wrap items-center gap-2">
                  {filteredProjects.find((p) => p.id === "inkora")?.demoUrl && (
                    <a
                      href={filteredProjects.find((p) => p.id === "inkora")!.demoUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400/60 transition-all active:scale-95"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>
                  )}

                  {filteredProjects.find((p) => p.id === "inkora")?.githubUrl && (
                    <a
                      href={filteredProjects.find((p) => p.id === "inkora")!.githubUrl!}
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
                      handleOpenModal(projectsData.find((p) => p.id === "inkora")!)
                    }
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 transition-all active:scale-95"
                  >
                    <span>System & Security</span>
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

                {/* Project Title & Role Subtitle */}
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    Battery Vitals Testbed
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mt-1 font-semibold">
                    Role: Embedded Software & Telemetry Developer (Presenter at FITExpo 2025)
                  </p>
                </div>

                {/* Official Showcase Banner Preview */}
                <div 
                  onClick={() => handleOpenModal(projectsData.find((p) => p.id === "battery-vitals")!)}
                  className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-cyan-500/20 mb-4 group/img cursor-pointer shadow-xl hover:border-cyan-400/60 transition-all duration-300"
                >
                  <Image
                    src="/projects/battery-vitals/battery_vitals_expo_presentation.jpg"
                    alt="Battery Vitals Hardware Testbed Showcase at FITExpo 2025"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e15]/60 via-transparent to-transparent opacity-40 group-hover/img:opacity-10 transition-opacity" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Microcontroller-based hardware testing apparatus and IoT telemetry platform for Li-ion, Li-Po, and Lead-Acid batteries with automated Charge-Rest-Discharge cycles.
                </p>

                <ul className="space-y-1.5 mb-4">
                  <li className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Multi-chemistry support with ADS1115 16-bit ADC, INA219 current sensing, and buck regulation.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>State of Health (SOH) calculation engine with 16×4 LCD & web dashboard; showcased at FITExpo 2025.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {["ESP32", "C++", "ADS1115", "INA219", "DS18B20", "Relays", "FITExpo 2025"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-[#121824] border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5">
                  {filteredProjects.find((p) => p.id === "battery-vitals")?.githubUrl && (
                    <a
                      href={filteredProjects.find((p) => p.id === "battery-vitals")!.githubUrl!}
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
                      handleOpenModal(projectsData.find((p) => p.id === "battery-vitals")!)
                    }
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/50 transition-all active:scale-95"
                  >
                    <span>Firmware & Telemetry</span>
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
        selectedProject &&
        createPortal(
          <div 
            className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
            onClick={handleCloseModal}
          >
            <div
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0d121c] border border-white/15 shadow-2xl p-6 sm:p-9 space-y-7 text-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
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
                  <button
                    onClick={() => handleCopySummary(selectedProject)}
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

                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-mono text-cyan-300 transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  )}

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
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

              {/* Compliance / Architectural Standards Badge Bar */}
              {selectedProject.writeUp.complianceStandards && (
                <div className="p-4 rounded-2xl bg-[#101826] border border-emerald-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-bold">
                    <Award className="w-4 h-4" />
                    <span>
                      {selectedProject.id === "durdans-lims"
                        ? "INTERNATIONAL LABORATORY COMPLIANCE STANDARDS ENFORCED"
                        : "CORE ARCHITECTURAL PATTERNS & ENGINEERING STANDARDS"}
                    </span>
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

              {/* Showcase Banner inside Modal */}
              {selectedProject.id === "durdans-lims" && (
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/durdans-lims-banner.jpg"
                    alt="Durdans Hospital LIMS System Architecture & Showcase"
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover"
                  />
                </div>
              )}

              {selectedProject.id === "job-tracker" && (
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl">
                  <Image
                    src="/projects/jobtracker-banner.jpg"
                    alt="JobTracker System Architecture & Showcase"
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover"
                  />
                </div>
              )}

              {selectedProject.id === "inkora" && (
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl">
                  <Image
                    src="/projects/inkora-banner.jpg"
                    alt="Inkora Content Management & Publishing Platform"
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover"
                  />
                </div>
              )}

              {selectedProject.id === "battery-vitals" && (
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl">
                  <Image
                    src="/projects/battery-vitals/battery_vitals_expo_presentation.jpg"
                    alt="Battery Vitals Hardware Testbed Showcase at FITExpo 2025"
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Overview */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  SYSTEM OVERVIEW & SCOPE
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedProject.writeUp.overview}
                </p>

                {/* Architectural Pipeline Flow Diagram (For Durdans LIMS) */}
                {selectedProject.id === "durdans-lims" && (
                  <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-2 mt-2">
                    <div className="text-[11px] font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-2 font-semibold">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      <span>CLINICAL DIAGNOSTIC WORKFLOW PIPELINE (8-PHASE LIFECYCLE)</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300 pt-1">
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Patient Registration</span>
                      <span className="text-slate-500">→</span>
                      <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">Order & Billing</span>
                      <span className="text-slate-500">→</span>
                      <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">Phlebotomy</span>
                      <span className="text-slate-500">→</span>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Sample Reception</span>
                      <span className="text-slate-500">→</span>
                      <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">MLT Result Entry</span>
                      <span className="text-slate-500">→</span>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Supervisor Verification</span>
                      <span className="text-slate-500">→</span>
                      <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">Pathologist Auth</span>
                      <span className="text-slate-500">→</span>
                      <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">Dispatch Portals</span>
                    </div>
                  </div>
                )}

                {/* Architectural Pipeline Flow Diagram (For Job Application Tracker) */}
                {selectedProject.id === "job-tracker" && (
                  <div className="p-4 rounded-2xl bg-black/40 border border-cyan-500/20 space-y-2 mt-2">
                    <div className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider flex items-center gap-2 font-semibold">
                      <Kanban className="w-4 h-4 text-cyan-400" />
                      <span>CAREER PIPELINE & STORAGE WORKFLOW (5-STAGE LIFECYCLE)</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300 pt-1">
                      <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">APPLIED</span>
                      <span className="text-slate-500">➔</span>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">INTERVIEW</span>
                      <span className="text-slate-500">➔</span>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">OFFER</span>
                      <span className="text-slate-500">➔</span>
                      <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">REJECTED / WITHDRAWN</span>
                      <span className="text-slate-500">│</span>
                      <span className="px-2.5 py-1 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/40">Direct AWS S3 Presigned Uploads</span>
                    </div>
                  </div>
                )}

                {/* Architectural Pipeline Flow Diagram (For Inkora Content Platform) */}
                {selectedProject.id === "inkora" && (
                  <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-2 mt-2">
                    <div className="text-[11px] font-mono uppercase text-emerald-400 tracking-wider flex items-center gap-2 font-semibold">
                      <FileCode2 className="w-4 h-4 text-emerald-400" />
                      <span>PUBLISHING & DEFENSIVE SECURITY PIPELINE</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300 pt-1">
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">TinyMCE Authoring</span>
                      <span className="text-slate-500">➔</span>
                      <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">Draft / SEO Auto-Slug</span>
                      <span className="text-slate-500">➔</span>
                      <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">CSRF & PDO Parameterization</span>
                      <span className="text-slate-500">➔</span>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">5-Type Reaction UX</span>
                      <span className="text-slate-500">➔</span>
                      <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">Admin RBAC Moderation</span>
                    </div>
                  </div>
                )}

                {/* Architectural Pipeline Flow Diagram (For Battery Vitals Testbed) */}
                {selectedProject.id === "battery-vitals" && (
                  <div className="p-4 rounded-2xl bg-black/40 border border-cyan-500/20 space-y-2 mt-2">
                    <div className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider flex items-center gap-2 font-semibold">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <span>HARDWARE CYCLIC & IOT TELEMETRY PIPELINE</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300 pt-1">
                      <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Multi-Chemistry Input (3.7V / 12V)</span>
                      <span className="text-slate-500">➔</span>
                      <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10">Buck Regulation & Relays</span>
                      <span className="text-slate-500">➔</span>
                      <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">ADS1115 & INA219 Sensing</span>
                      <span className="text-slate-500">➔</span>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">SOH & IR Computation</span>
                      <span className="text-slate-500">➔</span>
                      <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">16×4 LCD & Web Dashboard</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Structured Individual Contributions & Modules (If Available) */}
              {selectedProject.writeUp.contributions && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    INDIVIDUAL ARCHITECTURAL OWNERSHIP & CONTRIBUTIONS
                  </h4>
                  <div className="space-y-4">
                    {selectedProject.writeUp.contributions.map((sec, idx) => (
                      <div
                        key={idx}
                        className="p-5 sm:p-6 rounded-2xl bg-[#090e15] border border-white/[0.08] space-y-3 shadow-lg"
                      >
                        <h5 className="text-sm sm:text-base font-bold text-white font-mono flex items-center gap-2 text-emerald-300">
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

                        {/* Module Screenshots Gallery */}
                        {sec.screenshots && sec.screenshots.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-white/[0.06] space-y-2.5">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                              <span>VERIFIED SYSTEM UI ARTIFACTS & SCREENSHOTS</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {sec.screenshots.map((img, sIdx) => (
                                <div
                                  key={sIdx}
                                  onClick={() => setActiveLightboxImage(img)}
                                  className="group/img relative rounded-xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer hover:border-emerald-500/60 transition-all duration-300 shadow-md flex flex-col"
                                >
                                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
                                    <Image
                                      src={img.url}
                                      alt={img.title}
                                      fill
                                      sizes="(max-width: 768px) 100vw, 400px"
                                      className="object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs backdrop-blur-[2px]">
                                      <ZoomIn className="w-4 h-4 text-emerald-400" />
                                      <span>Click to Zoom</span>
                                    </div>
                                  </div>
                                  <div className="p-3 bg-[#0e141e] border-t border-white/5 flex-1 flex flex-col justify-between">
                                    <div className="text-xs font-mono font-bold text-slate-200 group-hover/img:text-emerald-300 transition-colors">
                                      {img.title}
                                    </div>
                                    <p className="text-[11px] text-slate-400 leading-relaxed mt-1 line-clamp-2">
                                      {img.caption}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  SYSTEM ARCHITECTURE & DESIGN DECISIONS
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
                  COMPREHENSIVE TECHNOLOGY STACK MATRIX
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

      {/* Image Lightbox Portal for High-Resolution Artifact Inspection */}
      {mounted &&
        activeLightboxImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
            onClick={() => setActiveLightboxImage(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[94vh] flex flex-col rounded-3xl bg-[#0d121c] border border-white/20 shadow-2xl overflow-hidden text-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#090e15]">
                <div className="space-y-0.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>
                      {selectedProject
                        ? `${selectedProject.name.toUpperCase()} · VERIFIED ARTIFACT & TELEMETRY`
                        : "PROJECT ARTIFACT PREVIEW"}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-mono">
                    {activeLightboxImage.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveLightboxImage(null)}
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label="Close image preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Image Preview Frame */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] bg-black/80 overflow-hidden flex items-center justify-center p-2">
                <Image
                  src={activeLightboxImage.url}
                  alt={activeLightboxImage.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Lightbox Footer & Caption */}
              <div className="p-4 sm:p-5 bg-[#0e141f] border-t border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed font-mono flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold text-base mt-[-2px]">ℹ</span>
                <span>{activeLightboxImage.caption}</span>
              </div>
            </div>
          </div>,
          document.body
        )}

    </section>
  );
}

