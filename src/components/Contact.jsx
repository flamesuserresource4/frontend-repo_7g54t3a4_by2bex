import { useState } from 'react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');

    const subject = encodeURIComponent(`Portfolio Contact — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:sanvi.udhan@example.com?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b1020] text-[#e6eef8] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Let’s Connect!</h2>
        <p className="mt-2 text-white/80">Have an opportunity or idea? I’d love to hear from you.</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-4">
              <label className="text-sm" htmlFor="name">Name</label>
              <input id="name" name="name" required className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400/60" />

              <label className="text-sm" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400/60" />

              <label className="text-sm" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400/60" />

              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400">
                <Mail className="size-5" /> Send
              </button>
              {status === 'sent' && (
                <p role="status" className="text-sm text-cyan-300">Thanks! I’ll get back soon ✨</p>
              )}
            </div>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-xl font-semibold">Elsewhere</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a className="inline-flex items-center gap-2 hover:text-cyan-300" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github className="size-5" /> GitHub
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:text-cyan-300" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin className="size-5" /> LinkedIn
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 hover:text-cyan-300" href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume download">
                  <FileText className="size-5" /> Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
        <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
    </section>
  );
}
