"use client";

import React from "react";

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top primary glow */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-indigo-600/15 via-indigo-900/10 to-transparent blur-[120px] rounded-full" />

      {/* Left cyan accent glow */}
      <div className="absolute top-[35%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 to-transparent blur-[140px] rounded-full" />

      {/* Right violet accent glow */}
      <div className="absolute top-[60%] -right-[10%] w-[550px] h-[550px] bg-gradient-to-l from-violet-600/10 via-purple-900/5 to-transparent blur-[140px] rounded-full" />

      {/* Bottom emerald subtle glow */}
      <div className="absolute bottom-[5%] left-[20%] w-[500px] h-[400px] bg-gradient-to-t from-emerald-500/5 to-transparent blur-[130px] rounded-full" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
