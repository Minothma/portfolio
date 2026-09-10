import React from "react";

interface MSLogoProps {
  className?: string;
  size?: number;
}

export function MSLogo({ className = "w-6 h-6", size }: MSLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="12 14 74 76"
      width={size}
      height={size}
      className={className}
      aria-label="Minothma Sithumini MS Logo"
    >
      <defs>
        <linearGradient id="msSeamlessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="35%" stopColor="#34d399" />
          <stop offset="75%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <filter id="msSeamlessGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#10b981" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Pure Seamless MS Monogram Vector (No background box) */}
      <g
        filter="url(#msSeamlessGlow)"
        stroke="url(#msSeamlessGrad)"
        strokeWidth="6.5"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        fill="none"
      >
        {/* Left Hollow Stem of M */}
        <path d="M 17 20 L 17 86 L 33 86 L 33 39" strokeLinecap="square" />

        {/* M Center V and Right Triangle (Right vertical ends at 58) */}
        <path d="M 17 20 L 50 60 L 80 20 L 80 58" strokeLinecap="square" />

        {/* S Ribbon flowing through the center */}
        <path
          d="M 64 20 C 46 17, 36 26, 38 38 C 40 50, 75 48, 77 64 C 79 79, 58 87, 38 74"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
