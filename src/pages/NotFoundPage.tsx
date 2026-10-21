import React from 'react';
import { NavPage } from '../types';

interface NotFoundPageProps {
  onNavigate: (page: NavPage) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="w-full bg-[#0e0e0e] min-h-screen text-[#e5e2e1] pb-24 relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#c4c0ff]/10 blur-[130px] pointer-events-none rounded-full animate-glow" />
      <div className="absolute top-48 right-12 w-[380px] h-[240px] bg-[#00d2fd]/5 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col gap-14 relative z-10">
        <section className="pt-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#201f1f] text-[#c4c0ff] font-mono text-xs uppercase tracking-widest border border-[#c4c0ff]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c4c0ff] animate-pulse" />
                ERROR 404
              </div>
              <span className="font-mono text-xs text-[#918fa1] tracking-wider">
                PAGE NOT FOUND
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white leading-[0.92] max-w-5xl mt-2">
              This Page Does Not Exist
            </h1>

            <p className="text-[#c7c4d8] text-base md:text-lg max-w-3xl mt-1 leading-relaxed">
              The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>
        </section>

        <section className="bg-[#201f1f] p-8 md:p-10 rounded-2xl border border-[#464555]/30">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[#918fa1] text-sm">
              <span className="material-symbols-outlined">terminal</span>
              <span>~$</span>
              <span className="font-mono text-[#c4c0ff]">prince-bhakta-portfolio</span>
              <span>~</span>
            </div>

            <div>
              <p className="text-[#c7c4d8] font-mono text-sm uppercase tracking-wider mb-3">Available routes:</p>
              <ul className="list-disc list-inside space-y-2 text-[#e5e2e1]">
                <li><a href="/" className="text-[#a2e7ff] hover:text-[#c4c0ff] transition-colors">home</a> - Return to the index</li>
                <li><a href="/work" className="text-[#a2e7ff] hover:text-[#c4c0ff] transition-colors">work</a> - View selected work</li>
                <li><a href="/creative" className="text-[#a2e7ff] hover:text-[#c4c0ff] transition-colors">creative</a> - Explore creative studio</li>
                <li><a href="/about" className="text-[#a2e7ff] hover:text-[#c4c0ff] transition-colors">about</a> - Learn about Prince Bhakta</li>
                <li><a href="/privacy" className="text-[#a2e7ff] hover:text-[#c4c0ff] transition-colors">privacy</a> - Read Privacy Policy</li>
                <li><a href="/terms" className="text-[#a2e7ff] hover:text-[#c4c0ff] transition-colors">terms</a> - Read Terms & Conditions</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#464555]/30">
              <p className="text-xs text-[#918fa1] uppercase tracking-wider mb-2">
                Did you mean one of the above?
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => onNavigate('home')}
                  className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#353534] rounded-lg text-sm font-mono uppercase text-[#e5e2e1] border border-[#464555]/40 transition-colors cursor-pointer"
                >
                  Go Home
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#353534] rounded-lg text-sm font-mono uppercase text-[#e5e2e1] border border-[#464555]/40 transition-colors cursor-pointer"
                >
                  Contact Prince
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full pt-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-3 bg-[#2a2a2a] hover:bg-[#353534] text-white font-mono text-xs uppercase tracking-wider rounded-lg transition-colors border border-[#464555]/40 cursor-pointer flex items-center gap-2"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Home
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};