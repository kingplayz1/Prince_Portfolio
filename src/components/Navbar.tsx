import React, { useState } from 'react';
import { NavPage } from '../types';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: NavPage) => {
    if (page === 'contact') {
      onOpenContact();
    } else {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e]/85 backdrop-blur-xl border-b border-[#464555]/30">
        <div className="h-16 max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 group text-left cursor-pointer"
            >
              <span className="font-display text-[18px] font-bold uppercase tracking-wider text-[#e5e2e1] group-hover:text-[#c4c0ff] transition-colors">
                Prince Bhakta
              </span>
              <span className="font-mono text-xs text-[#918fa1] hidden sm:inline-block">
                /01 SYS
              </span>
            </button>

            <div className="hidden md:flex items-center gap-2 pl-3 border-l border-[#464555]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5ee151] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5ee151]"></span>
              </span>
              <span className="font-mono text-[11px] text-[#5ee151] tracking-widest uppercase font-medium">
                AVAILABLE FOR WORK
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#c4c0ff] font-semibold'
                  : 'text-[#c7c4d8] hover:text-[#e5e2e1]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('work')}
              className={`font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer ${
                currentPage === 'work'
                  ? 'text-[#c4c0ff] font-semibold'
                  : 'text-[#c7c4d8] hover:text-[#e5e2e1]'
              }`}
            >
              Selected Work
            </button>
            <button
              onClick={() => handleNavClick('creative')}
              className={`font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer ${
                currentPage === 'creative'
                  ? 'text-[#c4c0ff] font-semibold'
                  : 'text-[#c7c4d8] hover:text-[#e5e2e1]'
              }`}
            >
              Creative Studio
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'text-[#c4c0ff] font-semibold'
                  : 'text-[#c7c4d8] hover:text-[#e5e2e1]'
              }`}
            >
              About & Journey
            </button>
            <button
              onClick={onOpenContact}
              className="font-mono text-xs uppercase tracking-widest text-[#c7c4d8] hover:text-[#e5e2e1] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:block font-mono text-xs text-[#918fa1] tracking-wider">
              23°N 72°E
            </div>

            <button
              type="button"
              onClick={onOpenContact}
              className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#353534] border border-[#464555]/50 hover:border-[#c4c0ff]/60 text-[#e5e2e1] font-mono text-xs uppercase tracking-wider rounded-lg transition-all shadow-[0_1px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_0_12px_rgba(196,192,255,0.15)] flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-xs text-[#c4c0ff]">mail</span>
              <span>Let's Talk</span>
            </button>

            <div
              onClick={onOpenContact}
              className="w-8 h-8 rounded-full bg-[#c4c0ff] flex items-center justify-center shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
              title="Direct Handshake"
            >
              <span className="material-symbols-outlined text-[#2000a4] text-[18px]">person</span>
            </div>

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 lg:hidden flex items-center justify-center rounded-lg bg-[#201f1f] text-[#c7c4d8] hover:text-white border border-[#464555]/40"
              aria-label="Toggle navigation drawer"
            >
              <span className="material-symbols-outlined text-[20px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-6 py-4 bg-[#1c1b1b]/98 backdrop-blur-xl border-b border-[#464555]/40 flex flex-col gap-3">
            <nav className="flex flex-col gap-2 font-mono text-xs uppercase tracking-wider">
              <button
                onClick={() => handleNavClick('home')}
                className={`py-2 px-3 rounded text-left transition-colors flex items-center justify-between ${
                  currentPage === 'home' ? 'bg-[#2a2a2a] text-[#c4c0ff] font-bold' : 'text-[#c7c4d8] hover:bg-[#2a2a2a]'
                }`}
              >
                <span>01 // Home</span>
                {currentPage === 'home' && <span className="w-1.5 h-1.5 rounded-full bg-[#c4c0ff]"></span>}
              </button>
              <button
                onClick={() => handleNavClick('work')}
                className={`py-2 px-3 rounded text-left transition-colors flex items-center justify-between ${
                  currentPage === 'work' ? 'bg-[#2a2a2a] text-[#c4c0ff] font-bold' : 'text-[#c7c4d8] hover:bg-[#2a2a2a]'
                }`}
              >
                <span>02 // Selected Work</span>
                {currentPage === 'work' && <span className="w-1.5 h-1.5 rounded-full bg-[#c4c0ff]"></span>}
              </button>
              <button
                onClick={() => handleNavClick('creative')}
                className={`py-2 px-3 rounded text-left transition-colors flex items-center justify-between ${
                  currentPage === 'creative' ? 'bg-[#2a2a2a] text-[#c4c0ff] font-bold' : 'text-[#c7c4d8] hover:bg-[#2a2a2a]'
                }`}
              >
                <span>03 // Creative Studio</span>
                {currentPage === 'creative' && <span className="w-1.5 h-1.5 rounded-full bg-[#c4c0ff]"></span>}
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`py-2 px-3 rounded text-left transition-colors flex items-center justify-between ${
                  currentPage === 'about' ? 'bg-[#2a2a2a] text-[#c4c0ff] font-bold' : 'text-[#c7c4d8] hover:bg-[#2a2a2a]'
                }`}
              >
                <span>04 // About & Journey</span>
                {currentPage === 'about' && <span className="w-1.5 h-1.5 rounded-full bg-[#c4c0ff]"></span>}
              </button>
            </nav>
            <div className="pt-2 border-t border-[#464555]/30">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 px-4 rounded bg-[#e5e2e1] hover:bg-white text-[#131313] font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">send</span>
                <span>INITIATE COMMS / LET'S TALK</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Dock (always easily thumb accessible) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden pb-safe bg-[#0e0e0e]/95 backdrop-blur-xl border-t border-[#464555]/30 shadow-[0_-4px_20px_rgba(0,0,0,0.6)]">
        <div className="flex justify-around items-center h-16 px-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`flex flex-col items-center justify-center min-w-[50px] min-h-[44px] transition-colors cursor-pointer ${
              currentPage === 'home' ? 'text-[#c4c0ff] font-semibold' : 'text-[#c7c4d8]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
            <span className="font-mono text-[10px] uppercase mt-0.5">INDEX</span>
          </button>
          <button
            onClick={() => handleNavClick('work')}
            className={`flex flex-col items-center justify-center min-w-[50px] min-h-[44px] transition-colors cursor-pointer ${
              currentPage === 'work' ? 'text-[#c4c0ff] font-semibold' : 'text-[#c7c4d8]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">folder_special</span>
            <span className="font-mono text-[10px] uppercase mt-0.5">WORK</span>
          </button>
          <button
            onClick={() => handleNavClick('creative')}
            className={`flex flex-col items-center justify-center min-w-[50px] min-h-[44px] transition-colors cursor-pointer ${
              currentPage === 'creative' ? 'text-[#c4c0ff] font-semibold' : 'text-[#c7c4d8]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">token</span>
            <span className="font-mono text-[10px] uppercase mt-0.5">LAB</span>
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`flex flex-col items-center justify-center min-w-[50px] min-h-[44px] transition-colors cursor-pointer ${
              currentPage === 'about' ? 'text-[#c4c0ff] font-semibold' : 'text-[#c7c4d8]'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
            <span className="font-mono text-[10px] uppercase mt-0.5">ABOUT</span>
          </button>
          <button
            onClick={onOpenContact}
            className="flex flex-col items-center justify-center min-w-[50px] min-h-[44px] text-[#c7c4d8] hover:text-[#c4c0ff] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">terminal</span>
            <span className="font-mono text-[10px] uppercase mt-0.5">TALK</span>
          </button>
        </div>
      </nav>
    </>
  );
};
