"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface PortfolioUIContextType {
  isCommandPaletteOpen: boolean;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  selectedProjectId: string | null;
  openProjectModal: (id: string) => void;
  closeProjectModal: () => void;
  highlightedSkill: string | null;
  setHighlightedSkill: (skill: string | null) => void;
  filterBySkill: (skill: string) => void;
}

const PortfolioUIContext = createContext<PortfolioUIContextType | undefined>(undefined);

export function PortfolioUIProvider({ children }: { children: React.ReactNode }) {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);

  const openCommandPalette = useCallback(() => setIsCommandPaletteOpen(true), []);
  const closeCommandPalette = useCallback(() => setIsCommandPaletteOpen(false), []);

  const openProjectModal = useCallback((id: string) => {
    setSelectedProjectId(id);
  }, []);

  const closeProjectModal = useCallback(() => {
    setSelectedProjectId(null);
  }, []);

  const filterBySkill = useCallback((skill: string) => {
    setHighlightedSkill(skill);
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <PortfolioUIContext.Provider
      value={{
        isCommandPaletteOpen,
        openCommandPalette,
        closeCommandPalette,
        selectedProjectId,
        openProjectModal,
        closeProjectModal,
        highlightedSkill,
        setHighlightedSkill,
        filterBySkill,
      }}
    >
      {children}
    </PortfolioUIContext.Provider>
  );
}

export function usePortfolioUI() {
  const context = useContext(PortfolioUIContext);
  if (!context) {
    throw new Error("usePortfolioUI must be used within a PortfolioUIProvider");
  }
  return context;
}
