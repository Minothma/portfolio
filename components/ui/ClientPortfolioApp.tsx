"use client";

import React from "react";
import { PortfolioUIProvider, usePortfolioUI } from "@/components/ui/PortfolioUIContext";
import { ToastProvider } from "@/components/ui/Toast";
import { MouseSpotlight } from "@/components/ui/MouseSpotlight";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Toolkit } from "@/components/sections/Toolkit";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

function InnerPortfolioContent() {
  const { isCommandPaletteOpen, closeCommandPalette, openProjectModal } = usePortfolioUI();

  return (
    <main className="relative min-h-screen bg-background text-slate-200 bg-grid-overlay overflow-x-hidden">
      {/* Subtle mouse spotlight aura */}
      <MouseSpotlight />

      {/* Raycast Spotlight Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={closeCommandPalette}
        onSelectProject={(id) => {
          openProjectModal(id);
        }}
      />

      {/* Top Floating Glass Island Navbar */}
      <Navbar />

      {/* Main Section Content */}
      <div className="relative z-10 pt-8 sm:pt-12">
        <Hero />
        <About />
        <Projects />
        <Toolkit />
        <Journey />
        <Contact />
      </div>

      {/* Bottom Footer */}
      <Footer />
    </main>
  );
}

export function ClientPortfolioApp() {
  return (
    <ToastProvider>
      <PortfolioUIProvider>
        <InnerPortfolioContent />
      </PortfolioUIProvider>
    </ToastProvider>
  );
}
