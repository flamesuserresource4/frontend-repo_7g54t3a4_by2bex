import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Rocket, User, Beaker, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-[#e6eef8]">
      {/* Top Nav */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40">
        <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl shadow-[0_0_30px_rgba(0,212,255,0.15)]" aria-label="Primary">
          <a href="#hero" className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="Home">
            <Rocket className="size-4" /> Home
          </a>
          <a href="#about" className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="About">
            <User className="size-4" /> About
          </a>
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="Projects">
            <Beaker className="size-4" /> Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="Contact">
            <Mail className="size-4" /> Contact
          </a>
        </nav>
      </header>

      {/* Scenes */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-white/60 bg-[#0b1020]">
        <p>Let’s build something together.</p>
      </footer>
    </div>
  );
}
