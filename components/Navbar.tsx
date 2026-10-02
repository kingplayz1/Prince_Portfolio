'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const sections = [
  'work',
  'about',
  'build',
  'tools',
  'identity',
  'github',
  'experience',
  'personal',
  'creative',
  'contact',
];

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
          isActive ? 'relative text-[#6C63FF]' : 'text-[#A5A7AD] hover:text-white'
        }`}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-[-6px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#6C63FF]" />
        )}
      </a>
    );
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? 'border-b border-white/[0.06] bg-[#070707]/80 backdrop-blur-xl' : ''
      }`}
      style={{ transform: 'translateY(0)' }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link href="#" className="text-[14px] font-medium tracking-[0.2em] text-white">
          PRINCE BHAKTA
        </Link>

        <div className="hidden items-center gap-8 text-[11px] tracking-wide md:flex">
          {navLink('#work', 'WORK')}
          {navLink('#about', 'ABOUT')}
          {navLink('#build', 'BUILD')}
          {navLink('#tools', 'TOOLS')}
          {navLink('#identity', 'IDENTITY')}
          {navLink('#github', 'CODE')}
          {navLink('#contact', 'CONTACT')}
        </div>

        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-[12px] tracking-wide transition-colors hover:border-white/[0.16] md:inline-flex"
        >
          LET&apos;S TALK
        </Link>

        <button
          className="p-2 text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#070707]/95 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-2">
            <a
              href="#work"
              className="py-2 text-[14px] tracking-wide text-[#A5A7AD] transition-colors hover:text-white"
            >
              WORK
            </a>
            <a
              href="#about"
              className="py-2 text-[14px] tracking-wide text-[#A5A7AD] transition-colors hover:text-white"
            >
              ABOUT
            </a>
            <a
              href="#build"
              className="py-2 text-[14px] tracking-wide text-[#A5A7AD] transition-colors hover:text-white"
            >
              BUILD
            </a>
            <a
              href="#tools"
              className="py-2 text-[14px] tracking-wide text-[#A5A7AD] transition-colors hover:text-white"
            >
              TOOLS
            </a>
            <a
              href="#identity"
              className="py-2 text-[14px] tracking-wide text-[#A5A7AD] transition-colors hover:text-white"
            >
              IDENTITY
            </a>
            <a
              href="#github"
              className="py-2 text-[14px] tracking-wide text-[#A5A7AD] transition-colors hover:text-white"
            >
              CODE
            </a>
            <a
              href="#contact"
              className="py-2 text-[14px] tracking-wide text-[#A5A7AD] transition-colors hover:text-white"
            >
              CONTACT
            </a>
            <Link
              href="#contact"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-[12px] tracking-wide transition-colors hover:border-white/[0.16]"
            >
              LET&apos;S TALK
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
