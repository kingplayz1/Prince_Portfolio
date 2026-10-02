import React from 'react';

interface FooterProps {
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast }) => {
  return (
    <footer className="w-full bg-[#0e0e0e] border-t border-[#464555]/30 pt-10 pb-16 lg:pb-12 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-8 relative z-10">
        {/* Monolithic Watermark Brand Name */}
        <div className="w-full select-none pointer-events-none overflow-hidden">
          <div className="font-display text-5xl md:text-7xl lg:text-8xl uppercase text-[#1c1b1b]/50 tracking-tighter whitespace-nowrap leading-none">
            Prince Bhakta
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-[#464555]/20 pt-6">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#e5e2e1] font-bold">
              Prince Bhakta
            </span>
            <span className="text-xs text-[#c7c4d8]">
              Developer • Creative Editor • Creator • Builder
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-wider text-[#c7c4d8]">
            <a
              href="https://github.com/kingplayz1"
              target="_blank"
              rel="noreferrer"
              onClick={() => onShowToast('Navigating to GitHub repository...')}
              className="hover:text-[#c4c0ff] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://youtube.com/@KINGPLAYZ008"
              target="_blank"
              rel="noreferrer"
              onClick={() => onShowToast('Opening YouTube @KINGPLAYZ008...')}
              className="hover:text-[#c4c0ff] transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => onShowToast('Opening LinkedIn profile...')}
              className="hover:text-[#c4c0ff] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => onShowToast('Discord tag: kingplayz')}
              className="hover:text-[#c4c0ff] transition-colors"
            >
              Discord
            </a>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1 text-[11px] font-mono text-[#918fa1]">
            <span>SYS REF // 2026.04.18</span>
            <span>© 2026 Prince Bhakta. Built with code, precision & motion.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
