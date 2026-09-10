import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minothma Sithumini",
  description:
    "Portfolio of Minothma Sithumini — Information Technology & Management Undergraduate at University of Moratuwa with hands-on experience in full-stack web engineering, Next.js, React, Spring Boot, and NestJS.",
  keywords: [
    "Minothma Sithumini",
    "Software Engineering Intern",
    "Full-Stack Developer",
    "University of Moratuwa",
    "React",
    "Next.js",
    "Spring Boot",
    "NestJS",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: "Minothma Sithumini" }],
  creator: "Minothma Sithumini",
  openGraph: {
    title: "Minothma Sithumini",
    description:
      "Information Technology & Management Undergraduate at University of Moratuwa specializing in full-stack engineering, resilient distributed APIs, and modern web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minothma Sithumini",
    description:
      "Information Technology & Management Undergraduate at University of Moratuwa with hands-on experience in Next.js, Spring Boot, and NestJS.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#080b11",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-slate-100 min-h-screen relative overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
