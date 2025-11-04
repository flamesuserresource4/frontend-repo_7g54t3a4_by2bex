import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Python', 'Figma'
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b1020] text-[#e6eef8] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 shadow-[0_0_80px_rgba(0,212,255,0.08)]"
          aria-label="About Sanvi"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Hey, I’m Sanvi</h2>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            I build full‑stack apps and explore AI, data, and design. I love blending functionality with creativity — crafting
            experiences that feel futuristic yet focused.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
            <ul className="flex flex-wrap gap-3" aria-label="Skills">
              {skills.map((s) => (
                <li key={s}>
                  <button
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,212,255,0.25)] hover:border-cyan-400/50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-label={s}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-3">Journey</h3>
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-white/20 to-fuchsia-400/40" aria-hidden />
              <ul className="space-y-4 text-white/80">
                <li>
                  <span className="font-semibold text-white">Learning Foundations</span> → Frontend, Backend, Data
                </li>
                <li>
                  <span className="font-semibold text-white">Projects</span> → Real‑world apps & systems
                </li>
                <li>
                  <span className="font-semibold text-white">AI</span> → Assistants, analytics & automation
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Athletics Captain — BITS Hyderabad',
                '6x Best Athlete',
                'Best All Rounder & Sportsperson of the Year',
                'Design Team — Esports Club',
              ].map((t) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-center shadow-[0_0_40px_rgba(255,77,180,0.08)] hover:shadow-[0_0_50px_rgba(255,77,180,0.15)] hover:border-fuchsia-400/50 transition"
                >
                  <span className="inline-block animate-[spin_20s_linear_infinite] will-change-transform text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                    ✨
                  </span>
                  <p className="mt-1">{t}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
