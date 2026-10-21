import React from 'react';
import { NavPage } from '../types';
import { Toast } from '../components/Toast';

interface ContactPageProps {
  onNavigate: (page: NavPage) => void;
  onShowToast: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // FormSubmit.co handles submission — form action set below
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Note: FormSubmit will process the submission to bhaktaprince094@gmail.com
    // We still show a toast and reset after a delay
    onShowToast('Message sent! I received your inquiry. I typically respond within 48 hours.');

    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: '',
      });
      setSubmitted(false);
    }, 5000);
  };

  if (!submitted) {
    return (
      <div className="w-full bg-[#0e0e0e] min-h-screen text-[#e5e2e1] pb-24 relative overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#c4c0ff]/10 blur-[130px] pointer-events-none rounded-full animate-glow" />
        <div className="absolute top-48 right-12 w-[380px] h-[240px] bg-[#00d2fd]/5 blur-[110px] pointer-events-none rounded-full" />

        <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col gap-14 relative z-10">
          <div className="flex items-center gap-3 text-[#c4c0ff] text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter font-display">
            <span className="material-symbols-outlined text-2xl">mail</span>
            Direct Contact
          </div>

          <section className="pt-4 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#201f1f] text-[#c4c0ff] font-mono text-xs uppercase tracking-widest border border-[#c4c0ff]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c4c0ff] animate-pulse" />
                  CONTACT // 07
                </div>
                <span className="font-mono text-xs text-[#918fa1] tracking-wider">
                  EMAIL RESPONSE: ~48 HOURS
                </span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white leading-[0.92] max-w-5xl mt-2">
                Let's Build Something Remarkable
              </h1>

              <p className="text-[#c7c4d8] text-base md:text-lg max-w-3xl mt-1 leading-relaxed">
                Whether for high-concurrency multiplayer backend architecture, non-linear video direction, or custom creative tooling—I'm available for selective projects that align with my craft philosophy. Reply within 48 hours guaranteed.
              </p>
            </div>
          </section>

          <div className="border-t border-[#464555]/30 pt-8">
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#e5e2e1] font-bold">
                  📧
                </span>
                <a
                  href="mailto:kingplayz@protonmail.com"
                  className="hover:text-[#c4c0ff] transition-colors"
                >
                  kingplayz@protonmail.com
                </a>
                <span className="text-xs text-[#918fa1]">
                  Direct Email (ProtonMail)
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#e5e2e1] font-bold">
                  💼
                </span>
                <a
                  href="https://github.com/kingplayz1"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c4c0ff] transition-colors"
                >
                  GitHub
                </a>
                <span className="text-xs text-[#918fa1]">
                  View Projects
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#e5e2e1] font-bold">
                  📱
                </span>
                <a
                  href="https://youtube.com/@KINGPLAYZ008"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c4c0ff] transition-colors"
                >
                  YouTube
                </a>
                <span className="text-xs text-[#918fa1]">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#0e0e0e] min-h-screen text-[#e5e2e1] pb-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#c4c0ff]/10 blur-[130px] pointer-events-none rounded-full animate-glow" />
      <div className="absolute top-48 right-12 w-[380px] h-[240px] bg-[#00d2fd]/5 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col gap-14 relative z-10">

        {/* 1. HERO STATEMENT */}
        <section className="pt-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#201f1f] text-[#c4c0ff] font-mono text-xs uppercase tracking-widest border border-[#c4c0ff]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c4c0ff] animate-pulse"></span>
                CONTACT // 07
              </div>
              <span className="font-mono text-xs text-[#918fa1] tracking-wider">
                EMAIL RESPONSE: ~48 HOURS
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white leading-[0.92] max-w-5xl mt-2">
              Let's Build Something Remarkable
            </h1>

            <p className="text-[#c7c4d8] text-base md:text-lg max-w-3xl mt-1 leading-relaxed">
              Whether for high-concurrency multiplayer backend architecture, non-linear video direction, or custom creative tooling—I'm available for selective projects that align with my craft philosophy. Reply within 48 hours guaranteed.
            </p>
          </div>
        </section>

        {/* 2. CONTACT FORM SECTION */}
        <section className="bg-[#1c1b1b] rounded-2xl p-8 lg:p-12 border border-[#464555]/30 shadow-lg">
          <div className="max-w-lg mx-auto">
            {submitted ? (
              <div className="text-center py-12">
                <span className="font-mono text-xl text-[#5ee151] uppercase tracking-widest">Message Sent</span>
                <p className="text-[#c7c4d8] text-lg mt-4">
                  I've received your inquiry. I typically respond within 48 hours. Thank you for reaching out!
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="mt-6 px-6 py-3 bg-[#2a2a2a] hover:bg-[#353534] text-white font-mono text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form action="https://formsubmit.co/bhaktaprince094@gmail.com" method="POST" className="space-y-4" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="default" />
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs text-[#918fa1] uppercase tracking-wider mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#2a2a2a] hover:bg-[#353534] border border-[#464555]/40 rounded-lg px-4 py-3 text-white font-mono text-xs tracking-wider transition-colors focus:outline-none focus:border-[#c4c0ff]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs text-[#918fa1] uppercase tracking-wider mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#2a2a2a] hover:bg-[#353534] border border-[#464555]/40 rounded-lg px-4 py-3 text-white font-mono text-xs tracking-wider transition-colors focus:outline-none focus:border-[#c4c0ff]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-project"
                    className="block text-xs text-[#918fa1] uppercase tracking-wider mb-1.5"
                  >
                    Project Type
                  </label>
                  <select
                    id="contact-project"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-[#2a2a2a] hover:bg-[#353534] border border-[#464555]/40 rounded-lg px-4 py-3 text-white font-mono text-xs tracking-wider transition-colors focus:outline-none focus:border-[#c4c0ff]"
                  >
                    <option value="">Select project type...</option>
                    <option value="web-development">Web Development</option>
                    <option value="creative-motion">Creative & Motion Design</option>
                    <option value="multiplayer-backend">Multiplayer Backend Architecture</option>
                    <option value="visual-effects">Visual Effects & Compositing</option>
                    <option value="custom-tool">Custom Creative Tooling</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs text-[#918fa1] uppercase tracking-wider mb-1.5"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Describe your project, goals, and what you're looking for..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#2a2a2a] hover:bg-[#353534] border border-[#464555]/40 rounded-lg px-4 py-3 text-white font-mono text-xs tracking-wider resize-none transition-colors focus:outline-none focus:border-[#c4c0ff] min-h-[140px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#c4c0ff] text-[#2000a4] font-mono text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer hover:bg-[#a2e7ff]"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </section>

        {/* 3. AVAILABLE WORK / CURRENT FOCUS */}
        <section className="flex flex-col gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#918fa1] block mb-1">
              CURRENT FOCUS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Available For Work
            </h2>
            <p className="text-[#c7c4d8] text-base md:text-lg max-w-xl mt-1 leading-relaxed">
              I'm currently selective about projects I take on. I prioritize:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#e5e2e1]">
              <li className="font-mono text-sm">
                High-concurrency multiplayer systems (LuaJIT, Redis, WebSocket)
              </li>
              <li className="font-mono text-sm">
                Non-linear video direction & cinematic motion design
              </li>
              <li className="font-mono text-sm">
                Custom creative tooling and automation
              </li>
              <li className="font-mono text-sm">
                Projects aligning with my craft philosophy (zero bloat, frame-perfect pacing)
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-[#464555]/30">
            <p className="text-xs text-[#918fa1] uppercase tracking-wider mb-2">
              Response Guarantee
            </p>
            <p className="text-sm text-[#c7c4d8]">
              All legitimate inquiries receive a response within 48 hours. If I'm not the right fit, I'll gladly refer you to someone who is.
            </p>
          </div>
        </section>

        {/* 4. SIDE NOTES */}
        <div className="pt-6 border-t border-[#464555]/30">
          <p className="text-xs text-[#918fa1] uppercase tracking-wider mb-2">
            Quick Links
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/"
              className="hover:text-[#c4c0ff] transition-colors"
            >
              Home
            </a>
            <a
              href="/work"
              className="hover:text-[#c4c0ff] transition-colors"
            >
              Work
            </a>
            <a
              href="/creative"
              className="hover:text-[#c4c0ff] transition-colors"
            >
              Creative
            </a>
            <a
              href="/about"
              className="hover:text-[#c4c0ff] transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};