"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { profile } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { certificationsList } from "@/data/highlights";
import { useToast } from "@/components/ui/Toast";
import {
  Search,
  ArrowRight,
  Sparkles,
  FileCode2,
  Cpu,
  GraduationCap,
  Award,
  Download,
  Mail,
  Phone,
  Github,
  Linkedin,
  Layers,
  Activity,
  X,
  ExternalLink,
} from "lucide-react";

interface CommandItem {
  id: string;
  category: "Navigation" | "Projects" | "Skills & Tech" | "Education & Certs" | "Quick Actions";
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string[];
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export function CommandPalette({ isOpen, onClose, onSelectProject }: CommandPaletteProps) {
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { showToast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigateTo = useCallback(
    (sectionId: string) => {
      onClose();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [onClose]
  );

  const commandItems: CommandItem[] = useMemo(() => {
    const items: CommandItem[] = [
      // Quick Actions
      {
        id: "act-cv",
        category: "Quick Actions",
        title: "Download Résumé / CV (PDF)",
        subtitle: "Official Resume · Minothma Sithumini",
        icon: <Download className="w-4 h-4 text-emerald-400" />,
        action: () => {
          window.open(profile.resumeUrl, "_blank");
          showToast("Opening Resume PDF...", "info");
          onClose();
        },
        keywords: ["cv", "resume", "pdf", "download", "hire"],
      },
      {
        id: "act-email",
        category: "Quick Actions",
        title: "Copy Email Address",
        subtitle: profile.email,
        icon: <Mail className="w-4 h-4 text-emerald-400" />,
        action: () => {
          navigator.clipboard.writeText(profile.email);
          showToast(`Copied ${profile.email} to clipboard!`, "success");
          onClose();
        },
        keywords: ["email", "contact", "copy", "mail", "gmail"],
      },
      {
        id: "act-phone",
        category: "Quick Actions",
        title: "Copy Phone / WhatsApp Number",
        subtitle: profile.phone,
        icon: <Phone className="w-4 h-4 text-emerald-400" />,
        action: () => {
          navigator.clipboard.writeText(profile.phone);
          showToast(`Copied ${profile.phone} to clipboard!`, "success");
          onClose();
        },
        keywords: ["phone", "whatsapp", "call", "mobile", "number"],
      },
      {
        id: "act-github",
        category: "Quick Actions",
        title: "Open GitHub Profile",
        subtitle: "github.com/Minothma",
        icon: <Github className="w-4 h-4 text-cyan-400" />,
        action: () => {
          window.open(profile.github, "_blank");
          onClose();
        },
        keywords: ["github", "code", "repos", "git"],
      },
      {
        id: "act-linkedin",
        category: "Quick Actions",
        title: "Open LinkedIn Profile",
        subtitle: "linkedin.com/in/minothma",
        icon: <Linkedin className="w-4 h-4 text-cyan-400" />,
        action: () => {
          window.open(profile.linkedin, "_blank");
          onClose();
        },
        keywords: ["linkedin", "social", "network", "profile"],
      },

      // Navigation
      {
        id: "nav-hero",
        category: "Navigation",
        title: "Go to Overview / Hero",
        subtitle: "Top of portfolio & Live Quick Metrics",
        icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
        action: () => navigateTo("hero"),
        keywords: ["home", "top", "hero", "overview"],
      },
      {
        id: "nav-about",
        category: "Navigation",
        title: "Go to About & Narrative",
        subtitle: "Background, Moratuwa story, and engineering values",
        icon: <Layers className="w-4 h-4 text-emerald-400" />,
        action: () => navigateTo("about"),
        keywords: ["about", "story", "bio", "background", "moratuwa"],
      },
      {
        id: "nav-work",
        category: "Navigation",
        title: "Go to Featured Work & Projects",
        subtitle: "Enterprise systems & Full-stack applications",
        icon: <FileCode2 className="w-4 h-4 text-emerald-400" />,
        action: () => navigateTo("work"),
        keywords: ["projects", "work", "portfolio", "systems", "code"],
      },
      {
        id: "nav-toolkit",
        category: "Navigation",
        title: "Go to Technical Toolkit",
        subtitle: "Languages, Backend, Frontend, Cloud & Databases",
        icon: <Cpu className="w-4 h-4 text-cyan-400" />,
        action: () => navigateTo("toolkit"),
        keywords: ["skills", "toolkit", "stack", "technologies", "tools"],
      },
      {
        id: "nav-journey",
        category: "Navigation",
        title: "Go to Journey & Credentials",
        subtitle: "Academics (UoM, A/L, O/L), Leadership & Certifications",
        icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
        action: () => navigateTo("journey"),
        keywords: ["journey", "education", "degree", "gpa", "leadership", "certifications"],
      },
      {
        id: "nav-contact",
        category: "Navigation",
        title: "Go to Contact & Collaboration",
        subtitle: "Send a direct inquiry or get in touch",
        icon: <Mail className="w-4 h-4 text-emerald-400" />,
        action: () => navigateTo("contact"),
        keywords: ["contact", "message", "hire", "internship", "touch"],
      },

      // Projects
      ...projectsData.map((project) => ({
        id: `proj-${project.id}`,
        category: "Projects" as const,
        title: project.name,
        subtitle: `${project.badge} · ${project.stack.slice(0, 4).join(", ")}`,
        icon: <Activity className="w-4 h-4 text-emerald-400" />,
        action: () => {
          if (onSelectProject) {
            onSelectProject(project.id);
          } else {
            navigateTo("work");
          }
          onClose();
        },
        keywords: [
          project.name.toLowerCase(),
          project.category.toLowerCase(),
          ...project.stack.map((s) => s.toLowerCase()),
          "case study",
          "architecture",
        ],
      })),

      // Education & Certs
      {
        id: "edu-uom",
        category: "Education & Certs",
        title: "University of Moratuwa — CGPA 3.47 / 4.00",
        subtitle: "B.Sc. (Hons) in Information Technology and Management (Batch 23)",
        icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
        action: () => navigateTo("journey"),
        keywords: ["uom", "moratuwa", "gpa", "3.47", "degree", "university", "batch 23"],
      },
      {
        id: "edu-al",
        category: "Education & Certs",
        title: "G.C.E. Advanced Level 2022 — Physical Science",
        subtitle: "Sumana Balika Vidyalaya (Maths A, Chem B, Phy C · Z-Score 1.2516)",
        icon: <GraduationCap className="w-4 h-4 text-cyan-400" />,
        action: () => navigateTo("journey"),
        keywords: ["a/l", "al", "advanced level", "sumana balika", "maths", "physics", "chemistry"],
      },
      {
        id: "edu-ol",
        category: "Education & Certs",
        title: "G.C.E. Ordinary Level 2018 — 8 A's, 1 B",
        subtitle: "Sumana Balika Vidyalaya, Ratnapura (Distinction Profile)",
        icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
        action: () => navigateTo("journey"),
        keywords: ["o/l", "ol", "ordinary level", "sumana balika", "8a", "results"],
      },
      ...certificationsList.slice(0, 6).map((cert, i) => ({
        id: `cert-${i}`,
        category: "Education & Certs" as const,
        title: `${cert.title} — ${cert.issuer}`,
        subtitle: `Verified Credential (${cert.year}) · ${cert.skills?.join(", ") || ""}`,
        icon: <Award className="w-4 h-4 text-cyan-400" />,
        action: () => {
          if (cert.verifyUrl) {
            window.open(cert.verifyUrl, "_blank");
          } else {
            navigateTo("journey");
          }
          onClose();
        },
        keywords: [cert.title.toLowerCase(), cert.issuer.toLowerCase(), "cert", "badge"],
      })),
    ];

    return items;
  }, [navigateTo, onClose, onSelectProject, showToast]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return commandItems;
    const q = query.toLowerCase().trim();
    return commandItems.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSubtitle = item.subtitle?.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchKeywords = item.keywords?.some((k) => k.includes(q));
      return matchTitle || matchSubtitle || matchCategory || matchKeywords;
    });
  }, [commandItems, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle Keyboard Navigation inside Command Palette
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100000] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl rounded-3xl bg-[#0b0f16] border border-white/15 shadow-2xl shadow-emerald-950/40 overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-5 py-4 border-b border-white/10 bg-[#0e141f]">
          <Search className="w-5 h-5 text-emerald-400 shrink-0 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, technology, or search resume..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none font-mono"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-1 divide-y divide-white/[0.04]">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-400 font-mono text-xs">
              No matching commands or projects found for "{query}"
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-2xl cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? "bg-emerald-500/15 border border-emerald-500/30 text-white shadow-sm"
                      : "text-slate-300 hover:bg-white/[0.03] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-xl shrink-0 ${
                        isSelected
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-white/[0.04] text-slate-400"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="truncate">
                      <div className="text-xs sm:text-sm font-semibold truncate flex items-center gap-2">
                        <span>{item.title}</span>
                        <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/5 uppercase">
                          {item.category}
                        </span>
                      </div>
                      {item.subtitle && (
                        <div className="text-[11px] font-mono text-slate-400 truncate mt-0.5">
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 ml-3 flex items-center gap-1.5 text-xs font-mono text-emerald-400 opacity-80">
                    {isSelected && (
                      <>
                        <span className="hidden sm:inline text-[11px]">Select</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Command Palette Keyboard Hints Footer */}
        <div className="px-5 py-2.5 bg-[#080c12] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 text-[10px]">↓</kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 text-[10px]">↵</kbd>
              <span>Execute</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 text-[10px]">ESC</kbd>
            <span>Close</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
