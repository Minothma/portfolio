import { Navbar } from "@/components/layout/Navbar";
import { LeftSidebarNav } from "@/components/layout/LeftSidebarNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Journey } from "@/components/sections/Journey";
import { Toolkit } from "@/components/sections/Toolkit";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-slate-200 bg-grid-overlay overflow-x-hidden">
      {/* Top Fixed Navbar */}
      <Navbar />

      {/* Left Sidebar Fixed Navigation (Scroll Spy) */}
      <LeftSidebarNav />

      {/* Main Section Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Toolkit />
        <Contact />
      </div>

      {/* Bottom Footer */}
      <Footer />
    </main>
  );
}
