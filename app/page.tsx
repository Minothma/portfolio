import { Navbar } from "@/components/layout/Navbar";
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
