import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('fivem');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      onShowToast('Transmission dispatched to Prince Bhakta!');
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsSent(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0e0e0e]/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#201f1f] border border-[#464555]/40 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c4c0ff] animate-pulse"></span>
            <span className="font-display font-semibold text-base text-[#e5e2e1]">
              DIRECT TRANSMISSION
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#918fa1] hover:text-[#e5e2e1] transition-colors p-1"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {!isSent ? (
          <>
            <p className="text-xs text-[#c7c4d8] mb-5 leading-relaxed">
              Inquiries regarding FiveM game systems, high-concurrency architectures, video engineering, or project commissions route directly to Prince.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[11px] text-[#918fa1] uppercase mb-1">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Vance • Lead Producer"
                  className="w-full bg-[#1c1b1b] rounded-lg p-2.5 text-sm text-[#e5e2e1] border border-[#464555]/30 focus:border-[#c4c0ff] focus:outline-none placeholder:text-[#918fa1]/60"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] text-[#918fa1] uppercase mb-1">
                  Return Transmission Address (Email)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@domain.com"
                  className="w-full bg-[#1c1b1b] rounded-lg p-2.5 text-sm text-[#e5e2e1] border border-[#464555]/30 focus:border-[#c4c0ff] focus:outline-none placeholder:text-[#918fa1]/60"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] text-[#918fa1] uppercase mb-1">
                  Project Scope / Discipline
                </label>
                <select
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="w-full bg-[#1c1b1b] rounded-lg p-2.5 text-sm text-[#e5e2e1] border border-[#464555]/30 focus:border-[#c4c0ff] focus:outline-none font-mono text-xs"
                >
                  <option value="fivem">FiveM Systems & Low-Latency Multiplayer</option>
                  <option value="motion">Motion Design & Video Direction</option>
                  <option value="fullstack">Full-Stack Platform Architecture (TS/Lua/Node)</option>
                  <option value="creative">Creative Direction & Audio Pacing</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[11px] text-[#918fa1] uppercase mb-1">
                  Transmission Content / Message
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline concurrency requirements, timeline deadline, or brief..."
                  className="w-full bg-[#1c1b1b] rounded-lg p-2.5 text-sm text-[#e5e2e1] border border-[#464555]/30 focus:border-[#c4c0ff] focus:outline-none placeholder:text-[#918fa1]/60"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="font-mono text-xs text-[#c7c4d8] hover:text-[#e5e2e1] uppercase tracking-wider px-3 py-2"
                >
                  Abort
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-[#c4c0ff] hover:bg-[#b4ebff] text-[#2000a4] font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 shadow-lg disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-[16px]">send</span>
                  <span>{isSubmitting ? 'DISPATCHING...' : 'DISPATCH PACKET'}</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-6 text-center space-y-3">
            <span className="material-symbols-outlined text-[#5ee151] text-[48px]">
              check_circle
            </span>
            <h4 className="font-display font-bold text-lg text-[#e5e2e1]">
              Packet Dispatched Successfully
            </h4>
            <p className="text-xs text-[#c7c4d8] max-w-sm mx-auto leading-relaxed">
              Telemetry payload acknowledged. Prince will route a direct reply to{' '}
              <strong className="text-[#a2e7ff]">{email || 'your email'}</strong> within 24 hours.
            </p>
            <div className="pt-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2 bg-[#2a2a2a] hover:bg-[#353534] rounded-lg text-xs font-mono uppercase text-[#e5e2e1] border border-[#464555]/40"
              >
                Close Channel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
