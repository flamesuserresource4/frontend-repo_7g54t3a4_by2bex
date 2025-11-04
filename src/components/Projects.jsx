import { useMemo, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Slash Experiences',
    description: 'Booking + admin platform with seamless payments and dashboards.',
    tech: ['React', 'Supabase', 'Razorpay'],
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    title: 'JARVIS Assistant',
    description: 'Personal AI assistant with Gemini API and voice automation.',
    tech: ['Python', 'Gemini API', 'Speech'],
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    title: 'Cinepedia',
    description: 'Movie blogging platform with Google OAuth and user reviews.',
    tech: ['React', 'Node.js', 'OAuth'],
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
];

function ProjectCard({ item, onOpen }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (x - 0.5) * 10, y: (0.5 - y) * 10 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <button
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      onClick={() => onOpen(item)}
      className="group relative w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_0_60px_rgba(0,212,255,0.08)] backdrop-blur-xl transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      style={{ transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
      aria-label={`Open project ${item.title}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" aria-hidden />
      <h4 className="text-xl font-semibold text-white">{item.title}</h4>
      <p className="mt-2 text-white/80 text-sm">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tech.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80">{t}</span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3 text-sm text-cyan-300/90">
        <span className="inline-flex items-center gap-1">Learn more <ExternalLink className="size-4" /></span>
      </div>
    </button>
  );
}

function Modal({ item, onClose }) {
  if (!item) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-label="Close" />
      <div className="relative w-full sm:max-w-lg rounded-2xl border border-white/10 bg-[#0b1020] text-[#e6eef8] p-6 shadow-2xl">
        <button onClick={onClose} aria-label="Close modal" className="absolute right-3 top-3 p-2 rounded-full hover:bg-white/10">
          <X className="size-5" />
        </button>
        <h4 className="text-2xl font-bold">{item.title}</h4>
        <p className="mt-2 text-white/80">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80">{t}</span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a href={item.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.25)]">
            <Github className="size-4" /> GitHub
          </a>
          <a href={item.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-white">
            <ExternalLink className="size-4" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  const cards = useMemo(() => PROJECTS, []);

  return (
    <section id="projects" className="relative w-full bg-[#0b1020] text-[#e6eef8] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Projects Lab</h2>
            <p className="mt-2 text-white/80">A collection of experiments and production builds.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item) => (
            <ProjectCard key={item.title} item={item} onOpen={setActive} />
          ))}
        </div>
      </div>

      <Modal item={active} onClose={() => setActive(null)} />

      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
        <div className="absolute left-20 bottom-10 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
    </section>
  );
}
