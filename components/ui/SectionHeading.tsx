import React from "react";
import { Reveal } from "@/components/motion/Reveal";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`}>
      <Reveal direction="up" delay={0.1}>
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4 ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          {badge}
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal direction="up" delay={0.3}>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
