'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const sections = ['work', 'about', 'experience', 'creative', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scrollspy logic
      const scrollPosition = window.scrollY + 150; // offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLink = (href: string, label: string) => {
    const sectionId = href.replace('#', '');
    const isActive = activeSection === sectionId || (sectionId === '' && activeSection === '');

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (href && href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    return (
      <a
        href={href}
        onClick={handleClick}
        className={`transition-all duration-300 ${
          isActive
            ? 'text-[#6C63FF] relative'
            : 'text-[#A5A7AD] hover:text-white'
        }`}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#6C63FF]" />
        )}
      </a>
    );
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#070707]/80 backdrop-blur-xl border-b border-white/[0.06]' : ''
      }`}
      style={{ transform: 'translateY(0)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link href="#" className="text-[14px] font-medium tracking-[0.2em] text-white">
          PRINCE BHAKTA
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[12px] tracking-wide">
          {navLink('#work', 'WORK')}
          {navLink('#about', 'ABOUT')}
          {navLink('#experience', 'EXPERIENCE')}
          {navLink('#creative', 'CREATIVE')}
          {navLink('#contact', 'CONTACT')}
        </div>

        <Link
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] hover:border-white/[0.16] transition-colors text-[12px] tracking-wide"
        >
          LET'S TALK
        </Link>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden py-6 border-t border-white/[0.06] bg-[#070707]/95 backdrop-blur-xl">
          <div className="flex flex-col gap-4 px-2">
            <a href="#work" className="py-2 text-[14px] tracking-wide text-[#A5A7AD] hover:text-white transition-colors">WORK</a>
            <a href="#about" className="py-2 text-[14px] tracking-wide text-[#A5A7AD] hover:text-white transition-colors">ABOUT</a>
            <a href="#experience" className="py-2 text-[14px] tracking-wide text-[#A5A7AD] hover:text-white transition-colors">EXPERIENCE</a>
            <a href="#creative" className="py-2 text-[14px] tracking-wide text-[#A5A7AD] hover:text-white transition-colors">CREATIVE</a>
            <a href="#contact" className="py-2 text-[14px] tracking-wide text-[#A5A7AD] hover:text-white transition-colors">CONTACT</a>
            <Link
              href="#contact"
              className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] hover:border-white/[0.16] transition-colors text-[12px] tracking-wide"
            >
              LET'S TALK
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}