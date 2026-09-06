import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#070a0e",
        surface: {
          DEFAULT: "#0b0f15",
          card: "#0c1118",
          cardHover: "#111823",
          border: "rgba(255, 255, 255, 0.07)",
          borderHover: "rgba(16, 185, 129, 0.35)",
        },
        emerald: {
          accent: "#10b981",
          hover: "#34d399",
          glow: "rgba(16, 185, 129, 0.15)",
        },
        cyan: {
          accent: "#06b6d4",
          hover: "#38bdf8",
          glow: "rgba(6, 182, 212, 0.15)",
        },
        // Keep amber alias mapped to vibrant emerald-mint for clean token transition
        amber: {
          accent: "#10b981",
          hover: "#34d399",
          glow: "rgba(16, 185, 129, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
