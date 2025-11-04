import { useRef, useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Volume2, VolumeX, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    // Prepare Web Audio context for a subtle ambient pad when enabled
    if (!soundOn) return;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    const master = ctx.createGain();
    master.gain.value = 0.03; // very soft
    master.connect(ctx.destination);

    const createPad = (freq) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(1, ctx.currentTime + 2);
      gain.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 6);
      osc.connect(gain).connect(master);
      osc.start();
      return { osc, gain };
    };

    const voices = [createPad(220), createPad(277), createPad(329)];

    return () => {
      voices.forEach(v => {
        try { v.osc.stop(); } catch {}
      });
      try { ctx.close(); } catch {}
    };
  }, [soundOn]);

  const handleEnter = () => {
    // Gentle click blip using Web Audio without assets
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) {
      const ctx = new Ctx();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'triangle';
      o.frequency.setValueAtTime(660, ctx.currentTime);
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.15);
      setTimeout(() => ctx.close(), 250);
    }

    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#0b1020] text-[#e6eef8]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ambient gradient overlay (non-blocking) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-20 h-96 w-96 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -left-20 h-[28rem] w-[28rem] bg-fuchsia-500/20 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center select-none">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_0_40px_rgba(0,212,255,0.25)]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300">Sanvi Udhan</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#e6eef8]/90">
          Full Stack Developer • AI & Data • Design
        </p>
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={handleEnter}
            aria-label="Enter Sanvi's world"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:brightness-110 transition"
          >
            Enter <ChevronRight className="size-5 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => setSoundOn((s) => !s)}
            aria-pressed={soundOn}
            aria-label={soundOn ? 'Turn sound off' : 'Turn sound on'}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm backdrop-blur-md hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
          >
            {soundOn ? <Volume2 className="size-5 text-cyan-300" /> : <VolumeX className="size-5 text-fuchsia-300" />}
            <span className="hidden sm:inline">{soundOn ? 'Sound: ON' : 'Sound: OFF'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
