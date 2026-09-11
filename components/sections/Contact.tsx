"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import { useToast } from "@/components/ui/Toast";
import {
  Copy,
  Check,
  ArrowUpRight,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  MessageCircle,
  Briefcase,
  Clock,
  Laptop,
} from "lucide-react";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Software Engineering Internship",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    showToast(`Copied ${profile.email} to clipboard!`, "success");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    showToast(`Copied ${profile.phone} to clipboard!`, "success");
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast("Opening email client with your message...", "success");

      // Construct mailto
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
        `[${formData.subject}] Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.04]">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Eyebrow - Consistent with whole portfolio */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            INITIATE COLLABORATION
          </span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Let&apos;s build something <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
              exceptional together.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            I am currently seeking a Software Engineering Internship for 2026. Whether you have an engineering opening, technical opportunity, or inquiry, my inbox is always open.
          </p>
        </div>

        {/* Contact Container Bento (Balanced Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Action Box: Interactive Message Form & Email Hub */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c1118] to-[#080d14] border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPEN TO INTERNSHIPS · 2026</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Available for on-site (Colombo / Western Province) and remote positions. Eager to contribute to full-stack, distributed backend, or cloud engineering teams.
              </p>
            </div>

            {/* Quick Interactive Message Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe / Recruiter"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121824] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121824] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Inquiry Topic</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121824] border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                >
                  <option value="Software Engineering Internship">Software Engineering Internship</option>
                  <option value="Full-Stack Web Project">Full-Stack Web Project</option>
                  <option value="Technical Consultation">Technical Consultation</option>
                  <option value="General Engineering Inquiry">General Engineering Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Message *</label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Minothma, we'd like to discuss an engineering opportunity..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121824] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 resize-none transition-colors"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold font-mono transition-all shadow-md shadow-emerald-500/20 active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Dispatching..." : "Dispatch Message"}</span>
                </button>

                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Response within &lt; 24h</span>
                </div>
              </div>
            </form>

            {/* Direct Email Display Bar */}
            <div className="p-4 rounded-2xl bg-[#080d14] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-2.5 text-slate-200">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="select-all font-semibold break-all sm:break-normal">
                  {profile.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors active:scale-95 border border-white/10 shrink-0"
                aria-label="Copy email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 opacity-60" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Based in {profile.location} · Faculty of IT, University of Moratuwa</span>
            </div>
          </div>

          {/* Right Column: Preferences Spec Card + Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Internship Preferences & Availability Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#0c1118] to-[#080d14] border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-sans text-sm">
                      Internship Preferences
                    </h4>
                    <span className="text-[11px] text-slate-400">Availability & Work Scope</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  AVAILABLE 2026
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-[#121824] border border-white/[0.05] space-y-1">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                    Target Roles
                  </div>
                  <div className="text-emerald-300 font-semibold text-xs">
                    Software Engineering Intern · Full-Stack Developer · Backend Engineer
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#121824] border border-white/[0.05] space-y-1">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Laptop className="w-3 h-3 text-cyan-400" />
                    <span>Work Arrangement</span>
                  </div>
                  <div className="text-slate-200 font-semibold text-xs">
                    On-Site (Colombo / Western Province) & Hybrid / Remote
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Channels Cards (Stacked Glass Bento) */}
            <div className="space-y-3 font-mono text-xs flex-1 flex flex-col justify-between">
              
              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0c1118] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#101722] transition-all duration-200 flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#141e2b] text-emerald-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white group-hover:text-emerald-300 transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-[11px] text-slate-400">linkedin.com/in/minothma</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0c1118] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-[#101722] transition-all duration-200 flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#141e2b] text-cyan-400 group-hover:scale-110 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                      GitHub Repositories
                    </div>
                    <div className="text-[11px] text-slate-400">github.com/Minothma</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* WhatsApp Direct */}
              <a
                href={`https://wa.me/${profile.phoneFormatted.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0c1118] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#101722] transition-all duration-200 flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#141e2b] text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white group-hover:text-emerald-300 transition-colors">
                      WhatsApp Direct
                    </div>
                    <div className="text-[11px] text-slate-400">{profile.phone}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Phone Copy Card */}
              <div className="p-4 rounded-2xl bg-[#0c1118] border border-white/[0.08] flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#141e2b] text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Direct Phone</div>
                    <div className="text-[11px] text-slate-400">{profile.phone}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors text-xs active:scale-95"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 opacity-60" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Minimal Footer */}
        <div className="pt-16 mt-16 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            <span>© 2026 Minothma Sithumini · Engineered with Next.js &amp; TypeScript</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-emerald-400 transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

