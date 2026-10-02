import React, { useState } from 'react';
import { ProjectItem, VideoShowcase, NavPage } from '../types';
import { PROJECTS_DATA, VIDEOS_DATA, TECH_STACK_ITEMS } from '../data/portfolioData';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onOpenCaseStudy: (project: ProjectItem) => void;
  onOpenVideo: (video: VideoShowcase) => void;
  onOpenContact: () => void;
  onShowToast: (msg: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenCaseStudy,
  onOpenVideo,
  onOpenContact,
  onShowToast,
}) => {
  // Category filter state for "What I Build"
  const [activePillar, setActivePillar] = useState<'all' | 'code' | 'creative' | 'games' | 'content'>('all');

  // Interactive Terminal State
  const [termInput, setTermInput] = useState('');
  const [termLogs, setTermLogs] = useState<string[]>([
    '> [SYS_INIT] Microservices connected across Singapore & Frankfurt edge.',
    '> [ENGINE] FiveM Lua runtime hook loaded @ 128 FPS locked.',
    '> [AUDIO] Lavalink Opus stream active across 12 clusters.',
    "> [READY] Type 'help' or click command buttons above to inspect live telemetry."
  ]);
  const [termMem, setTermMem] = useState('118MB');
  const [termPing, setTermPing] = useState('11ms');

  // Tech stack hover state
  const [activeTech, setActiveTech] = useState({
    title: 'TypeScript',
    meta: 'Strict Types · Zero-Any policy · Interfaces'
  });

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setTermLogs([]);
      return;
    }

    const newLogs = [...termLogs, `> ${rawCmd}`];

    if (cmd === 'help') {
      newLogs.push('Available commands:');
      newLogs.push('• sys-status — Query active edge server nodes and memory');
      newLogs.push('• benchmark  — Run real-time 128Hz FiveM packet simulation');
      newLogs.push('• deploy     — Trigger synthetic Cloudflare edge deployment');
      newLogs.push('• clear      — Flush terminal output buffer');
    } else if (cmd === 'sys-status') {
      const m = Math.floor(110 + Math.random() * 20);
      const p = Math.floor(9 + Math.random() * 6);
      setTermMem(`${m}MB`);
      setTermPing(`${p}ms`);
      newLogs.push(`[NODE STATUS] Edge Cluster 01: ONLINE | Uptime: 99.98%`);
      newLogs.push(`[SERVICES] FiveM Lua: ACTIVE | Lavalink Nodes: 12 CONNECTED`);
      newLogs.push(`[TELEMETRY] Memory: ${m}MB | Ping: ${p}ms (Cloudflare Edge SIN)`);
    } else if (cmd === 'benchmark') {
      newLogs.push('Executing 10,000 synthetic packet dispatches...');
      newLogs.push('> [OK] 10,000 / 10,000 packets resolved in 14.2ms (0 drop)');
      newLogs.push('> [BENCHMARK] Average Tick Delta: 7.81ms (128.02 Hz Stable)');
      onShowToast('Benchmark passed: 128.02Hz stable');
    } else if (cmd === 'deploy') {
      newLogs.push('> Initiating edge deployment to Cloudflare Global CDN...');
      newLogs.push('> Build succeeded in 0.42s! Assets live across 310+ cities.');
      onShowToast('Edge deployment simulated successfully');
    } else {
      newLogs.push(`Command not recognized: '${rawCmd}'. Type 'help' for options.`);
    }

    setTermLogs(newLogs);
    setTermInput('');
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      onShowToast(`Copied ${label}`);
    });
  };

  const streetrushProject = PROJECTS_DATA[0];
  const arenaProject = PROJECTS_DATA[1];
  const dioraProject = PROJECTS_DATA[2];

  return (
    <div className="w-full bg-[#070707] text-[#f4f4f0] relative">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden py-14 md:py-24 border-b border-white/10">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-[#6c63ff]/10 blur-[140px]"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141518] border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#7cff6b] animate-pulse"></span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#f4f4f0]">
                AVAILABLE FOR CREATIVE &amp; DEVELOPMENT PROJECTS
              </span>
              <span className="font-mono text-[10px] text-[#6f737a] hidden sm:inline">
                / 23°N 72°E
              </span>
            </div>

            <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.9] m-0">
              PRINCE<br />
              <span className="text-[#6c63ff]">BHAKTA</span>
            </h1>

            <div className="relative pb-2">
              <p className="font-display text-lg md:text-xl text-[#a5a7ad]">
                Developer <span className="text-[#6c63ff] font-mono">·</span> Editor <span className="text-[#6c63ff] font-mono">·</span> Creator <span className="text-[#6c63ff] font-mono">·</span> Builder
              </p>
              <div className="w-32 h-[1px] bg-gradient-to-r from-[#6c63ff] to-transparent mt-2"></div>
            </div>

            <p className="text-[#a5a7ad] text-base md:text-lg max-w-xl leading-relaxed">
              I build digital experiences, scalable infrastructure, game systems, and cinematic visual stories that sit at the intersection of engineering and visual art.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('work')}
                className="px-6 py-3 rounded-lg bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#6c63ff] hover:text-white transition-all shadow-[0_0_24px_rgba(255,255,255,0.15)] flex items-center gap-2 group cursor-pointer"
              >
                <span>View My Work</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('terminal-sandbox');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-lg bg-[#141518] border border-white/10 hover:border-[#6c63ff] text-[#f4f4f0] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Interactive Terminal
              </button>
            </div>

            <div className="flex items-center gap-4 pt-2 font-mono text-xs text-[#6f737a]">
              <a
                href="https://github.com/kingplayz1"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6c63ff] transition-colors"
              >
                GitHub
              </a>
              <span>/</span>
              <a
                href="https://youtube.com/@KINGPLAYZ008"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6c63ff] transition-colors"
              >
                YouTube
              </a>
              <span>/</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6c63ff] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Hero Portrait Frame */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden bg-[#141518] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.9)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent z-10"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCk7GJzrWTN7yY3ZbrjBTcIIXaOWYKDb_wlohRa-1JhH5gkC8Npnmx47xMXRvwag8JtOr5T_ME6MfFmdB1X9DBPxZKfQ52xACqTqUwZIWGBs86FKUoDkDhUWkVEjWjPbG-Kz1Q4gyMSamxMKVZ59UY0JgBa93BsAFtNIhRgNxa66mOsIktZSHWj44dBnDhAC6Rt1i7VZkFobIgd-sHJUDxv3w6LIJQVwFD136WL3IzwLCX9ZzZ08iaHR3b6fYqXfhVX9Q"
                alt="Portrait of Prince Bhakta"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 z-20 font-mono text-[10px] uppercase tracking-widest text-[#6c63ff] bg-[#070707]/80 px-2.5 py-1 rounded border border-white/10 backdrop-blur-sm">
                PRINCE // DEV.SYS
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[#a5a7ad] bg-[#070707]/80 px-3 py-2 rounded border border-white/10 backdrop-blur-sm">
                <span>2026 ARCHIVE</span>
                <span className="text-[#7cff6b] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7cff6b]"></span> ONLINE // READY
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MANIFESTO STATEMENT */}
      <section className="w-full py-16 bg-[#141518]/40 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          <div className="flex items-center justify-between font-mono text-xs text-[#6f737a] uppercase tracking-widest">
            <span>/01 · MANIFESTO</span>
            <span>CREATIVE TECHNOLOGIST</span>
            <span>SYSTEM.VER 2.6.4</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            <div className="lg:col-span-8">
              <h2 className="font-display font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-white leading-tight">
                "I DON'T JUST BUILD PROJECTS.<br />
                <span className="text-[#6c63ff]">I BUILD EXPERIENCES."</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 text-[#a5a7ad] text-sm leading-relaxed">
              <p>
                Prince Bhakta is a developer, editor, and creator focused on building interactive digital experiences, game systems, tools, and visual content.
              </p>
              <p className="text-[#6f737a] text-xs font-mono">
                Bridging raw system engineering (Lua, TypeScript, Cloudflare, WebSockets) with cinematic pacing and spatial motion graphics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT I BUILD (Interactive Categories) */}
      <section className="w-full py-20 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-xs text-[#6c63ff] uppercase tracking-widest">
                /02 · CORE SPECIALIZATIONS
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mt-1">
                What I Build
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#0e0e10] border border-white/10">
              <button
                onClick={() => setActivePillar('all')}
                className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activePillar === 'all'
                    ? 'bg-[#141518] text-[#6c63ff] font-bold'
                    : 'text-[#a5a7ad] hover:text-white'
                }`}
              >
                All (4)
              </button>
              <button
                onClick={() => setActivePillar('code')}
                className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activePillar === 'code'
                    ? 'bg-[#141518] text-[#6c63ff] font-bold'
                    : 'text-[#a5a7ad] hover:text-white'
                }`}
              >
                Development
              </button>
              <button
                onClick={() => setActivePillar('creative')}
                className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activePillar === 'creative'
                    ? 'bg-[#141518] text-[#6c63ff] font-bold'
                    : 'text-[#a5a7ad] hover:text-white'
                }`}
              >
                Creative &amp; Motion
              </button>
              <button
                onClick={() => setActivePillar('games')}
                className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activePillar === 'games'
                    ? 'bg-[#141518] text-[#6c63ff] font-bold'
                    : 'text-[#a5a7ad] hover:text-white'
                }`}
              >
                Game Systems
              </button>
              <button
                onClick={() => setActivePillar('content')}
                className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activePillar === 'content'
                    ? 'bg-[#141518] text-[#6c63ff] font-bold'
                    : 'text-[#a5a7ad] hover:text-white'
                }`}
              >
                Content
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activePillar === 'all' || activePillar === 'code') && (
              <div
                onClick={() => onOpenCaseStudy(streetrushProject)}
                className="p-6 rounded-xl bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[#6f737a] group-hover:text-[#6c63ff] transition-colors">
                    <span className="font-mono text-xs uppercase tracking-widest">01 // CODE</span>
                    <span className="material-symbols-outlined text-xl">terminal</span>
                  </div>
                  <h4 className="font-display font-bold text-xl uppercase text-white">Development</h4>
                  <p className="text-[#a5a7ad] text-sm">
                    High-concurrency systems, web applications, and developer productivity automation.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap gap-1.5 font-mono text-[10px] text-[#6f737a]">
                  <span className="px-2 py-0.5 rounded bg-[#141518]">FiveM Systems</span>
                  <span className="px-2 py-0.5 rounded bg-[#141518]">Web Apps</span>
                  <span className="px-2 py-0.5 rounded bg-[#141518]">APIs</span>
                </div>
              </div>
            )}

            {(activePillar === 'all' || activePillar === 'creative') && (
              <div
                onClick={() => onNavigate('creative')}
                className="p-6 rounded-xl bg-[#0e0e10] border border-white/10 hover:border-[#00d4ff]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[#6f737a] group-hover:text-[#00d4ff] transition-colors">
                    <span className="font-mono text-xs uppercase tracking-widest">02 // POST</span>
                    <span className="material-symbols-outlined text-xl">movie_edit</span>
                  </div>
                  <h4 className="font-display font-bold text-xl uppercase text-white">Creative &amp; Motion</h4>
                  <p className="text-[#a5a7ad] text-sm">
                    Rhythmic video editing, motion graphics, audio sync, and arresting visual narratives.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap gap-1.5 font-mono text-[10px] text-[#6f737a]">
                  <span className="px-2 py-0.5 rounded bg-[#141518]">Video Editing</span>
                  <span className="px-2 py-0.5 rounded bg-[#141518]">Motion FX</span>
                  <span className="px-2 py-0.5 rounded bg-[#141518]">Keyframes</span>
                </div>
              </div>
            )}

            {(activePillar === 'all' || activePillar === 'games') && (
              <div
                onClick={() => onOpenCaseStudy(arenaProject)}
                className="p-6 rounded-xl bg-[#0e0e10] border border-white/10 hover:border-[#7cff6b]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[#6f737a] group-hover:text-[#7cff6b] transition-colors">
                    <span className="font-mono text-xs uppercase tracking-widest">03 // ENGINE</span>
                    <span className="material-symbols-outlined text-xl">sports_esports</span>
                  </div>
                  <h4 className="font-display font-bold text-xl uppercase text-white">Game Systems</h4>
                  <p className="text-[#a5a7ad] text-sm">
                    Multiplayer game loops, low-latency racing architectures, and synchronized gameplay physics.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap gap-1.5 font-mono text-[10px] text-[#6f737a]">
                  <span className="px-2 py-0.5 rounded bg-[#141518]">Racing Logic</span>
                  <span className="px-2 py-0.5 rounded bg-[#141518]">PvP Arena</span>
                  <span className="px-2 py-0.5 rounded bg-[#141518]">Server Sync</span>
                </div>
              </div>
            )}

            {(activePillar === 'all' || activePillar === 'content') && (
              <div
                onClick={() => onNavigate('creative')}
                className="p-6 rounded-xl bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[#6f737a] group-hover:text-[#6c63ff] transition-colors">
                    <span className="font-mono text-xs uppercase tracking-widest">04 // BROADCAST</span>
                    <span className="material-symbols-outlined text-xl">podcasts</span>
                  </div>
                  <h4 className="font-display font-bold text-xl uppercase text-white">Content</h4>
                  <p className="text-[#a5a7ad] text-sm">
                    High-intensity gaming streams, dev logs, creative tutorials, and YouTube releases.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap gap-1.5 font-mono text-[10px] text-[#6f737a]">
                  <span className="px-2 py-0.5 rounded bg-[#141518]">Showcases</span>
                  <span className="px-2 py-0.5 rounded bg-[#141518]">Live Streams</span>
                  <span className="px-2 py-0.5 rounded bg-[#141518]">YouTube</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. SELECTED WORK HIGHLIGHTS */}
      <section className="w-full py-20 border-b border-white/10 bg-[#141518]/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-xs text-[#6c63ff] uppercase tracking-widest">
                /03 · SELECTED INDEX (01 - 06)
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mt-1">
                Engineered Work
              </h3>
            </div>
            <div className="flex items-center gap-4 font-mono text-xs">
              <span className="text-[#7cff6b] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7cff6b] animate-pulse"></span> 6 ACTIVE SYSTEMS
              </span>
              <button
                onClick={() => onNavigate('work')}
                className="text-[#a5a7ad] hover:text-[#6c63ff] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>View All Works</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Project 1 */}
            <div className="group grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff]/50 transition-all duration-300">
              <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-[#6c63ff]">01 //</span>
                    <span className="px-2 py-0.5 rounded bg-[#7cff6b]/10 text-[#7cff6b] font-mono text-[10px] uppercase border border-[#7cff6b]/20">
                      BUILDING / ACTIVE
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-2xl md:text-3xl text-white uppercase tracking-tight">
                    StreetRush Asia
                  </h4>
                  <p className="text-[#a5a7ad] text-sm md:text-base mt-2 leading-relaxed">
                    Competitive racing infrastructure for FiveM. Built from scratch with precision checkpoint collision detection, real-time multiplayer telemetry, and custom telemetry dashboards.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {streetrushProject.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-[#141518] border border-white/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-1 font-mono text-xs">
                    <button
                      onClick={() => onOpenCaseStudy(streetrushProject)}
                      className="font-bold text-white hover:text-[#6c63ff] flex items-center gap-1 group/btn transition-colors cursor-pointer"
                    >
                      <span>VIEW ARCHITECTURE</span>
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                    <span className="text-[#6f737a]">|</span>
                    <span className="text-[#6f737a]">Telemetry: 128Hz Tickrate</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#181a1f] p-6 flex flex-col justify-between font-mono text-xs border-t lg:border-t-0 lg:border-l border-white/10">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[#6c63ff] font-bold">streetrush_telemetry.lua</span>
                  <span className="text-[#7cff6b]">LIVE 128HZ</span>
                </div>
                <div className="space-y-1.5 py-4 text-[#a5a7ad]">
                  <div>&gt; RegisterNetEvent('streetrush:syncCheckpoint')</div>
                  <div className="text-[#6c63ff]">&gt; Track: Neo Tokyo Drift Circuit #04</div>
                  <div>&gt; Delta Time: -00.142s [SECTOR 1 FASTEST]</div>
                  <div className="text-[#7cff6b]">&gt; MySQL state synchronized (3.8ms)</div>
                </div>
                <div className="h-1.5 w-full bg-[#141518] rounded-full overflow-hidden">
                  <div className="h-full bg-[#6c63ff] w-4/5 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff]/50 transition-all duration-300">
              <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-[#6c63ff]">02 //</span>
                    <span className="px-2 py-0.5 rounded bg-[#141518] text-white font-mono text-[10px] uppercase border border-white/10">
                      PRODUCTION
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-2xl md:text-3xl text-white uppercase tracking-tight">
                    3SL Arena
                  </h4>
                  <p className="text-[#a5a7ad] text-sm md:text-base mt-2 leading-relaxed">
                    Competitive FiveM PvP Arena &amp; dedicated matchmaking server architecture. Custom low-latency weapon synchronization, round management, and instant spectator replays.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {arenaProject.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-[#141518] border border-white/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-1 font-mono text-xs">
                    <button
                      onClick={() => onOpenCaseStudy(arenaProject)}
                      className="font-bold text-white hover:text-[#6c63ff] flex items-center gap-1 group/btn transition-colors cursor-pointer"
                    >
                      <span>VIEW ARCHITECTURE</span>
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                    <span className="text-[#6f737a]">|</span>
                    <span className="text-[#6f737a]">Match Rate: 1,200+ duels/wk</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#181a1f] p-6 flex flex-col justify-between font-mono text-xs border-t lg:border-t-0 lg:border-l border-white/10">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[#00d4ff]">ARENA_CLUSTER_STATUS</span>
                  <span className="text-[#7cff6b]">LOBBY #08 READY</span>
                </div>
                <div className="grid grid-cols-2 gap-3 py-3">
                  <div className="p-3 rounded bg-[#0e0e10]">
                    <div className="text-[10px] text-[#6f737a] uppercase">PING</div>
                    <div className="text-lg font-bold text-[#7cff6b]">14ms</div>
                  </div>
                  <div className="p-3 rounded bg-[#0e0e10]">
                    <div className="text-[10px] text-[#6f737a] uppercase">ACTIVE DUELS</div>
                    <div className="text-lg font-bold text-[#6c63ff]">32/32</div>
                  </div>
                </div>
                <div className="text-[11px] text-[#6f737a]">
                  Engine: Multi-threaded State Machine v3.2
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff]/50 transition-all duration-300">
              <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-[#6c63ff]">03 //</span>
                    <span className="px-2 py-0.5 rounded bg-[#00d4ff]/10 text-[#00d4ff] font-mono text-[10px] uppercase border border-[#00d4ff]/20">
                      LIVE DEMO
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-2xl md:text-3xl text-white uppercase tracking-tight">
                    Diora Luxe
                  </h4>
                  <p className="text-[#a5a7ad] text-sm md:text-base mt-2 leading-relaxed">
                    Premium interactive jewelry digital e-commerce and 3D product showcase. Features real-time Three.js raytraced reflections, procedural lighting, and zero-layout-shift transitions.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {dioraProject.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-[#141518] border border-white/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-1 font-mono text-xs">
                    <button
                      onClick={() => onOpenCaseStudy(dioraProject)}
                      className="font-bold text-white hover:text-[#6c63ff] flex items-center gap-1 group/btn transition-colors cursor-pointer"
                    >
                      <span>LAUNCH CASE STUDY</span>
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                    <span className="text-[#6f737a]">|</span>
                    <span className="text-[#6f737a]">Lighthouse: 99 Perf</span>
                  </div>
                </div>
              </div>

              <div
                onClick={() => onOpenCaseStudy(dioraProject)}
                className="lg:col-span-5 bg-[#181a1f] p-6 flex flex-col items-center justify-center font-mono text-xs border-t lg:border-t-0 lg:border-l border-white/10 relative cursor-pointer group/orb"
              >
                <div
                  className="w-24 h-24 rounded-full border border-[#6c63ff]/40 flex items-center justify-center animate-spin group-hover/orb:border-[#7cff6b] transition-colors"
                  style={{ animationDuration: '10s' }}
                >
                  <div className="w-14 h-14 rounded-full border border-[#00d4ff]/50"></div>
                </div>
                <span className="text-xs uppercase tracking-widest text-[#a5a7ad] mt-3">
                  Interactive 3D Viewport
                </span>
                <span className="text-[10px] text-[#6f737a] mt-1">WebGL 2.0 · 60 FPS Locked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE TERMINAL CONSOLE */}
      <section className="w-full py-20 border-b border-white/10" id="terminal-sandbox">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-4 gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#6c63ff] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#7cff6b] animate-pulse"></span>
              <span>/04 · RUNTIME CONSOLE &amp; TERMINAL</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="text-[#6f737a] hidden md:inline">Quick commands:</span>
              <button
                onClick={() => handleCommand('sys-status')}
                className="px-2.5 py-1 rounded bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff] text-[#6c63ff] transition-colors cursor-pointer"
              >
                sys-status
              </button>
              <button
                onClick={() => handleCommand('benchmark')}
                className="px-2.5 py-1 rounded bg-[#0e0e10] border border-white/10 hover:border-[#7cff6b] text-[#7cff6b] transition-colors cursor-pointer"
              >
                benchmark
              </button>
              <button
                onClick={() => handleCommand('deploy')}
                className="px-2.5 py-1 rounded bg-[#0e0e10] border border-white/10 hover:border-[#00d4ff] text-[#00d4ff] transition-colors cursor-pointer"
              >
                deploy
              </button>
              <button
                onClick={() => handleCommand('clear')}
                className="px-2.5 py-1 rounded bg-[#0e0e10] border border-white/10 hover:border-red-400 text-red-400 transition-colors cursor-pointer"
              >
                clear
              </button>
              <button
                onClick={() => handleCommand('help')}
                className="px-2.5 py-1 rounded bg-[#0e0e10] border border-white/10 hover:border-white text-white transition-colors cursor-pointer"
              >
                help
              </button>
            </div>
          </div>

          <div className="w-full rounded-2xl bg-[#0e0e10] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
            <div className="h-10 bg-[#181a1f] px-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                <span className="ml-2 text-[#6f737a] text-[11px]">
                  prince@workspace: ~/engine (zsh)
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#6f737a]">
                <span>UTF-8 · TSX · 128Hz</span>
                <button
                  onClick={() =>
                    copyToClipboard(termLogs.join('\n'), 'terminal output')
                  }
                  className="hover:text-[#6c63ff] transition-colors cursor-pointer"
                  title="Copy terminal output"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-2 min-h-[280px] max-h-[420px] overflow-y-auto">
              <div className="text-[#6f737a]">
                // Prince Bhakta System Core v2.6.4 — Live Interactive Sandbox
              </div>
              <div className="text-[#a5a7ad]">
                <span className="text-[#6c63ff] font-bold">const</span>{' '}
                <span className="text-[#00d4ff]">craftsman</span> = {'{'}
                <br />
                &nbsp;&nbsp;<span className="text-[#7cff6b]">"name"</span>: "Prince Bhakta",
                <br />
                &nbsp;&nbsp;<span className="text-[#7cff6b]">"disciplines"</span>: ["Fullstack", "FiveM Systems", "Motion FX", "Creator"],
                <br />
                &nbsp;&nbsp;<span className="text-[#7cff6b]">"status"</span>: "Online &amp; Shipping"
                <br />
                {'}'};
              </div>

              <div className="space-y-1 pt-2">
                {termLogs.map((log, index) => {
                  let colorClass = 'text-[#a5a7ad]';
                  if (log.includes('[SYS_INIT]')) colorClass = 'text-[#7cff6b]';
                  else if (log.includes('[ENGINE]')) colorClass = 'text-[#6c63ff]';
                  else if (log.includes('[AUDIO]')) colorClass = 'text-[#00d4ff]';
                  else if (log.includes('> ')) colorClass = 'text-white font-bold';
                  else if (log.includes('OK')) colorClass = 'text-[#7cff6b]';
                  return (
                    <div key={index} className={colorClass}>
                      {log}
                    </div>
                  );
                })}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommand(termInput);
                }}
                className="flex items-center gap-2 pt-2 text-[#6c63ff] font-bold"
              >
                <span className="shrink-0">prince@studio:~$</span>
                <input
                  type="text"
                  value={termInput}
                  onChange={(e) => setTermInput(e.target.value)}
                  placeholder="Type a command (e.g. sys-status, benchmark, deploy)..."
                  className="w-full bg-transparent text-white focus:outline-none font-mono text-xs border-none p-0 focus:ring-0 placeholder-[#6f737a]"
                />
              </form>
            </div>

            <div className="bg-[#181a1f] px-4 py-2 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-[#6f737a] font-mono">
              <div className="flex items-center gap-4">
                <span>NODE: v20.12.0</span>
                <span>
                  MEMORY: <span className="text-white">{termMem}</span>
                </span>
                <span>
                  LATENCY: <span className="text-[#7cff6b]">{termPing}</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[#7cff6b]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7cff6b] animate-pulse"></span>
                <span>CLUSTER HEALTH: 100% STABLE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TOOLS I WORK WITH */}
      <section className="w-full py-20 border-b border-white/10 bg-[#141518]/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-xs text-[#6c63ff] uppercase tracking-widest">
                /05 · STACK &amp; CAPABILITIES
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mt-1">
                Tools I Work With
              </h3>
            </div>
            <p className="font-mono text-xs text-[#6f737a] uppercase">
              Hover any stack badge to reveal architectural telemetry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {TECH_STACK_ITEMS.map((item) => (
              <div
                key={item.title}
                onMouseEnter={() =>
                  setActiveTech({ title: item.title, meta: item.meta })
                }
                className="p-3.5 rounded-xl bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff] transition-all duration-200 flex flex-col items-center justify-center gap-1 cursor-pointer"
              >
                <span className="font-mono font-semibold text-sm text-white">
                  {item.title}
                </span>
                <span className="font-mono text-[10px] text-[#6f737a]">
                  {item.cat.toUpperCase()}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-[#0e0e10] border border-white/10 flex items-center justify-between font-mono text-xs text-[#a5a7ad]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7cff6b] animate-pulse"></span>
              <span className="text-white font-bold">{activeTech.title}:</span>{' '}
              <span>{activeTech.meta}</span>
            </span>
            <span className="text-[#7cff6b] hidden sm:inline">14 TECHNOLOGIES LOADED</span>
          </div>
        </div>
      </section>

      {/* 7. FROM CODE TO CONTENT (Video Showcases) */}
      <section className="w-full py-20 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-xs text-[#6c63ff] uppercase tracking-widest">
                /06 · STUDIO BROADCAST
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mt-1">
                From Code to Content
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenVideo(VIDEOS_DATA[0])}
                className="px-4 py-2 rounded-lg bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff] text-white font-mono text-xs uppercase flex items-center gap-2 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#6c63ff] text-base">
                  play_circle
                </span>
                <span>Open Player</span>
              </button>
              <a
                href="https://youtube.com/@KINGPLAYZ008"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[#0e0e10] border border-white/10 hover:border-red-500/80 text-white font-mono text-xs uppercase flex items-center gap-2 transition-all"
              >
                <span className="material-symbols-outlined text-red-500 text-base">
                  smart_display
                </span>
                <span>@KINGPLAYZ008</span>
                <span className="material-symbols-outlined text-xs">arrow_outward</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEOS_DATA.slice(0, 3).map((video) => (
              <div
                key={video.id}
                onClick={() => onOpenVideo(video)}
                className="group rounded-2xl overflow-hidden bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff]/50 transition-all duration-300 cursor-pointer shadow-lg flex flex-col justify-between"
              >
                <div className="relative w-full aspect-video bg-[#181a1f] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent z-10"></div>
                  <img
                    src={video.imageUrl}
                    alt={video.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-14 h-14 rounded-full bg-[#6c63ff]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#6c63ff] transition-all">
                      <span className="material-symbols-outlined text-3xl text-[#6c63ff] group-hover:text-black transition-colors">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 z-20 font-mono text-[10px] px-2 py-0.5 rounded bg-[#070707]/80 backdrop-blur-sm border border-white/10">
                    {video.tag1}
                  </div>
                  <div className="absolute bottom-3 right-3 z-20 font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#070707]/90 text-white">
                    {video.duration}
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between gap-3 flex-1">
                  <h4 className="font-display font-bold text-base uppercase text-white group-hover:text-[#6c63ff] transition-colors line-clamp-1">
                    {video.title}
                  </h4>
                  <p className="text-[#a5a7ad] text-xs line-clamp-2">
                    {video.description}
                  </p>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-[#6f737a]">
                    <span>REEL // 60FPS</span>
                    <span className="text-[#6c63ff] group-hover:translate-x-1 transition-transform">
                      Play Reel →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CODEBASE & OPEN SOURCE */}
      <section className="w-full py-20 border-b border-white/10 bg-[#141518]/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-xs text-[#6c63ff] uppercase tracking-widest">
                /07 · REPOSITORIES
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mt-1">
                Codebase &amp; Open Source
              </h3>
            </div>
            <a
              href="https://github.com/kingplayz1"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff] text-white font-mono text-xs uppercase flex items-center gap-2 transition-all"
            >
              <span className="material-symbols-outlined text-base">terminal</span>
              <span>github.com/kingplayz1</span>
              <span className="material-symbols-outlined text-xs">arrow_outward</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Repo 1 */}
            <div className="p-6 rounded-2xl bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff] transition-all flex flex-col justify-between gap-4 group">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-lg text-white group-hover:text-[#6c63ff] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">folder_code</span>
                    DarkBeat1
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        'git clone https://github.com/kingplayz1/DarkBeat1.git',
                        'DarkBeat1 clone command'
                      )
                    }
                    className="p-1.5 rounded hover:bg-[#141518] text-[#6f737a] hover:text-white transition-colors cursor-pointer"
                    title="Copy git clone command"
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                  </button>
                </div>
                <p className="text-[#a5a7ad] text-xs mt-2 leading-relaxed">
                  Next-generation modular Discord music bot architecture with low-latency streaming audio nodes.
                </p>
              </div>
              <div className="flex items-center justify-between font-mono text-xs text-[#6f737a] pt-3 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#6c63ff]"></span> JavaScript
                </span>
                <span className="text-[#a5a7ad]">MIT License</span>
              </div>
            </div>

            {/* Repo 2 */}
            <div className="p-6 rounded-2xl bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff] transition-all flex flex-col justify-between gap-4 group">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-lg text-white group-hover:text-[#6c63ff] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">folder_code</span>
                    MUSICGIRL-
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        'git clone https://github.com/kingplayz1/MUSICGIRL-.git',
                        'MUSICGIRL- clone command'
                      )
                    }
                    className="p-1.5 rounded hover:bg-[#141518] text-[#6f737a] hover:text-white transition-colors cursor-pointer"
                    title="Copy git clone command"
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                  </button>
                </div>
                <p className="text-[#a5a7ad] text-xs mt-2 leading-relaxed">
                  Clean multi-guild voice audio manager with slash command interface and localized lyrics fetching.
                </p>
              </div>
              <div className="flex items-center justify-between font-mono text-xs text-[#6f737a] pt-3 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00d4ff]"></span> TypeScript
                </span>
                <span className="text-[#a5a7ad]">Apache 2.0</span>
              </div>
            </div>

            {/* Repo 3 */}
            <div className="p-6 rounded-2xl bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff] transition-all flex flex-col justify-between gap-4 group">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-lg text-white group-hover:text-[#6c63ff] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">folder_code</span>
                    DG-status-page
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        'git clone https://github.com/kingplayz1/DG-status-page.git',
                        'DG-status-page clone command'
                      )
                    }
                    className="p-1.5 rounded hover:bg-[#141518] text-[#6f737a] hover:text-white transition-colors cursor-pointer"
                    title="Copy git clone command"
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                  </button>
                </div>
                <p className="text-[#a5a7ad] text-xs mt-2 leading-relaxed">
                  Automated status probe and incident reporter for game servers, APIs, and edge microservices.
                </p>
              </div>
              <div className="flex items-center justify-between font-mono text-xs text-[#6f737a] pt-3 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#7cff6b]"></span> TypeScript
                </span>
                <span className="text-[#a5a7ad]">MIT License</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. THE JOURNEY TIMELINE */}
      <section className="w-full py-20 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-xs text-[#6c63ff] uppercase tracking-widest">
                /08 · MILESTONE TIMELINE
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mt-1">
                The Journey
              </h3>
            </div>
            <p className="font-mono text-xs text-[#6f737a] uppercase">
              Evolution from creative video editing to low-level game engineering.
            </p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-6 md:pl-10 flex flex-col gap-10">
            <div className="relative group">
              <div className="absolute -left-[calc(1.5rem+5px)] md:-left-[calc(2.5rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-[#6c63ff] border-2 border-[#070707] group-hover:scale-125 transition-transform"></div>
              <span className="font-mono text-xs text-[#6c63ff] uppercase tracking-widest">
                2026 // PRESENT
              </span>
              <h4 className="font-display font-bold text-lg text-white uppercase mt-1">
                SHIPPING &amp; EXPANDING FULL SYSTEMS
              </h4>
              <p className="text-[#a5a7ad] text-sm max-w-2xl mt-1 leading-relaxed">
                Building StreetRush Asia competitive racing infrastructure, launching high-performance Discord audio platforms, and uniting engineering with broadcast content.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -left-[calc(1.5rem+5px)] md:-left-[calc(2.5rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-[#00d4ff] border-2 border-[#070707] group-hover:scale-125 transition-transform"></div>
              <span className="font-mono text-xs text-[#00d4ff] uppercase tracking-widest">
                2024 — 2025
              </span>
              <h4 className="font-display font-bold text-lg text-white uppercase mt-1">
                GAME SYSTEMS &amp; FIVEM INFRASTRUCTURE
              </h4>
              <p className="text-[#a5a7ad] text-sm max-w-2xl mt-1 leading-relaxed">
                Engineered customized FiveM PvP Arenas, real-time multiplayer Lua scripts, and high-concurrency Node.js microservice architectures.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -left-[calc(1.5rem+5px)] md:-left-[calc(2.5rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-[#7cff6b] border-2 border-[#070707] group-hover:scale-125 transition-transform"></div>
              <span className="font-mono text-xs text-[#7cff6b] uppercase tracking-widest">
                2022 — 2024
              </span>
              <h4 className="font-display font-bold text-lg text-white uppercase mt-1">
                MOTION EDITING &amp; CREATIVE BROADCAST
              </h4>
              <p className="text-[#a5a7ad] text-sm max-w-2xl mt-1 leading-relaxed">
                Scaled YouTube audience via @KINGPLAYZ008. Mastered non-linear video editing, cinematic sound design, keyframe animation, and digital community building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. EDITORIAL QUOTE & SECOND AUTHENTIC PORTRAIT */}
      <section className="w-full py-20 border-b border-white/10 bg-[#141518]/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#0e0e10] border border-white/10 shadow-2xl relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC91JEPT0LADv8WBwiszubZdN9nGkvrfeT5kCzSI0U0bkDjtMBlfoX1tNME2uRImvf0foEZHowwSBfS2PS6KkKL3pPe21GbM3vF_CzPl6RZkwMcAmrbyJfZyFpIhEG-GvWsepTNsbfqLPjJs5WTrw4wl5j29EfL7wSz_fn4BOlXlGyBaGDK8dEXCV27DP5mWc3Fce_YS3piGu8g0vDITnCvaZKmiJM_hvpFr7VZHoPDtmoNdNi6_xwpjF-vjACHIJtLlnQ"
                alt="Prince Bhakta Workspace and Champion portrait"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 z-10 font-mono text-[10px] text-[#7cff6b] uppercase">
                SYS // CORE CRAFT ARCHIVE
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-mono text-xs text-[#6c63ff] uppercase tracking-widest">
              /09 · CREATIVE MANIFESTO
            </span>
            <h3 className="font-display font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-white leading-tight">
              "BUILDING THINGS<br />
              <span className="text-[#6c63ff]">I WANT TO EXIST."</span>
            </h3>
            <p className="text-[#a5a7ad] text-base leading-relaxed max-w-xl">
              No friction, no compromises. Bridging the gap between raw functional code logic and evocative cinematic motion graphics. Every system engineered to endure.
            </p>
            <div className="flex items-center gap-6 pt-2 font-mono text-xs text-[#6f737a]">
              <span>ZERO BLOAT</span>
              <span>·</span>
              <span>FRAME-PERFECT TIMING</span>
              <span>·</span>
              <span>ASYNC-FIRST</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CONTACT CTA */}
      <section className="w-full py-24 text-center relative overflow-hidden" id="contact">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e0e10] border border-white/10 font-mono text-xs text-[#7cff6b]">
            <span className="w-2 h-2 rounded-full bg-[#7cff6b] animate-pulse"></span>
            <span>OPEN FOR CONTRACTS &amp; COLLABORATIONS</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tighter text-white">
            LET'S BUILD<br />
            <span className="text-[#6c63ff]">SOMETHING.</span>
          </h2>

          <p className="text-[#a5a7ad] text-sm md:text-base leading-relaxed">
            Have an idea, project, game system, website, video, or creative concept? Let's bring engineering precision and cinematic visual art to life.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => copyToClipboard('contact@princebhakta.dev', 'contact email')}
              className="px-6 py-3 rounded-lg bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#6c63ff] hover:text-white transition-all shadow-[0_0_24px_rgba(255,255,255,0.2)] flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              <span>Copy Contact Email</span>
            </button>
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-lg bg-[#0e0e10] border border-white/10 hover:border-[#6c63ff] text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm text-[#00d4ff]">forum</span>
              <span>Send Direct Message</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
