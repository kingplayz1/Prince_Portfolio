import React, { useState, useEffect } from 'react';
import { VideoShowcase } from '../types';
import { VIDEOS_DATA } from '../data/portfolioData';

interface CreativePageProps {
  onOpenVideo: (video: VideoShowcase) => void;
  onOpenContact: () => void;
  onShowToast: (msg: string) => void;
}

export const CreativePage: React.FC<CreativePageProps> = ({
  onOpenVideo,
  onOpenContact,
  onShowToast,
}) => {
  // Showreel Player State
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSec, setCurrentSec] = useState(102); // 01:42
  const totalSec = 195; // 03:15
  const [activeLut, setActiveLut] = useState<'teal-orange' | 'matrix-mono' | 'neon-cyber' | 'neutral-raw'>('teal-orange');
  const [resolution, setResolution] = useState<'4k' | '1440' | '1080'>('4k');
  const [bitrate, setBitrate] = useState('85.4 MBPS');

  // Filter state for Project Showcases
  const [activeFilter, setActiveFilter] = useState<'all' | 'fivem' | 'valorant' | 'dev' | 'mograph'>('all');

  // Selected Spec Modal
  const [selectedSpecVideo, setSelectedSpecVideo] = useState<VideoShowcase | null>(null);

  // NLE Timeline Simulator state
  const [selectedClip, setSelectedClip] = useState({
    name: 'MAIN_DRIFT_B04_SLOWMO.mov',
    in: '00:00:55:18',
    out: '00:01:55:00',
    dur: '00:00:59:06',
    ramp: 'SPEED-RAMP: 1200% → 100% BEZIER'
  });

  // Transient trigger state
  const [transientStatus, setTransientStatus] = useState('AUDIO TRANSIENT DETECTOR // LIVE');

  // Simulated player ticker
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSec((prev) => (prev >= totalSec ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleLutChange = (lut: typeof activeLut, label: string) => {
    setActiveLut(lut);
    onShowToast(`Applied Grade: ${label}`);
  };

  const handleResolutionChange = (res: typeof resolution, bit: string) => {
    setResolution(res);
    setBitrate(bit);
    onShowToast(`Resolution switched to ${res.toUpperCase()} (${bit})`);
  };

  const getLutFilter = () => {
    switch (activeLut) {
      case 'matrix-mono':
        return 'contrast(1.45) saturate(0.15) brightness(0.85)';
      case 'neon-cyber':
        return 'contrast(1.3) saturate(1.85) hue-rotate(320deg) brightness(1.05)';
      case 'neutral-raw':
        return 'contrast(0.95) saturate(0.9) brightness(1.02)';
      case 'teal-orange':
      default:
        return 'contrast(1.18) saturate(1.25) hue-rotate(-5deg)';
    }
  };

  const filteredVideos = VIDEOS_DATA.filter((v) => {
    if (activeFilter === 'all') return true;
    return v.category === activeFilter;
  });

  return (
    <div className="w-full bg-[#0e0e0e] min-h-screen text-[#e5e2e1] pb-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#c4c0ff]/10 via-[#a2e7ff]/5 to-transparent blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col gap-12 relative z-10">
        {/* 1. HERO HEADER */}
        <section className="flex flex-col gap-4 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-1 border-b border-[#464555]/20">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-2 py-1 bg-[#201f1f] rounded text-[#c4c0ff] font-mono text-xs uppercase tracking-wider">
                NLE // MOTION PIPELINE 4.2
              </span>
              <span className="text-[#918fa1] font-mono text-xs">//</span>
              <span className="font-mono text-xs text-[#c7c4d8] uppercase tracking-wider">
                {resolution === '4k' ? '4K 60FPS' : resolution.toUpperCase()} ACEScg WORKFLOW
              </span>
            </div>
            <div className="flex items-center gap-4 font-mono text-xs text-[#918fa1]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5ee151] animate-pulse"></span>
                ENGINE LIVE
              </span>
              <span className="border border-[#464555]/40 px-2 py-0.5 rounded text-[#a2e7ff]">
                LUT: {activeLut.toUpperCase().replace('-', ' & ')}
              </span>
              <span>REC 709 / DCI-P3</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-4xl flex flex-col gap-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none">
                Creative &amp; Motion Studio
              </h1>
              <p className="text-base text-[#c7c4d8] max-w-3xl leading-relaxed mt-1">
                Crafting rhythmic video edits, kinetic typography, motion graphics, and high-energy gaming narratives at the intersection of technical pacing and digital storytelling.
              </p>
            </div>
            <div className="flex items-center gap-3 self-start lg:self-end">
              <button
                onClick={() => {
                  const el = document.getElementById('suite-preview');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-[#201f1f] hover:bg-[#2a2a2a] text-[#e5e2e1] font-mono text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 cursor-pointer border border-[#464555]/30"
              >
                <span className="material-symbols-outlined text-[#c4c0ff] text-base">tune</span>
                <span>NLE Suite</span>
              </button>
              <button
                onClick={onOpenContact}
                className="px-5 py-2 bg-[#c4c0ff] text-[#2000a4] font-mono text-xs uppercase font-bold tracking-wider rounded-lg transition-all shadow-[0_0_20px_rgba(196,192,255,0.25)] hover:bg-white flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">bolt</span>
                <span>Book Edit</span>
              </button>
            </div>
          </div>
        </section>

        {/* 2. SHOWREEL 2026 // MONOLITH MOTION INTERACTIVE PLAYER */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab] animate-ping"></span>
              <span className="uppercase text-white tracking-widest font-semibold">
                SHOWREEL 2026 // MONOLITH MOTION
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[#918fa1]">
              <span>BITRATE: {bitrate}</span>
              <span>COLOR: ACEScc</span>
              <span>AUDIO: {isMuted ? 'MUTED' : '32-BIT FLOAT 48kHz'}</span>
            </div>
          </div>

          <div className="relative group w-full aspect-video md:aspect-[21/9] bg-[#0e0e0e] rounded-xl overflow-hidden shadow-2xl flex flex-col justify-end select-none border border-[#464555]/30">
            {/* Screen Canvas */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 brightness-90 group-hover:brightness-100"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZxy9vYnvA-aWdmOQBzSMYKM60EoMNrfRPLJLXu529eUnK_TuhXMacCt8PRvhaW9ufjfJ_GjpZRIXLBwOojPBW1gALFfX6ed0E9ftvAAIX6YWB3vmWHpRgNWFPB7wwv6PcV3r9oNwLf4fZ51OzNUcv5SK8-fOL4p-bH0fqsJN9UjiCowR167P1fRiM7YwcGsD2xwbM8EKujqZigIj7AczHISS1oxCewhHb8WfpqxSAWIgTD05BUTGgCw')`,
                filter: getLutFilter(),
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/30 to-transparent"></div>
              {/* Scanline Overlay */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            {/* Watermark Overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-3 pointer-events-none z-20 font-mono text-xs">
              <span className="text-white bg-[#0e0e0e]/80 px-2 py-1 rounded backdrop-blur border border-[#464555]/30">
                PRINCE BHAKTA // DIR CUT
              </span>
              <span className="text-[#5ee151] bg-[#0e0e0e]/80 px-2 py-1 rounded backdrop-blur border border-[#5ee151]/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5ee151]"></span> SYNC LOCKED (60.00 FPS)
              </span>
              <span className="hidden md:inline-flex text-[#a2e7ff] bg-[#0e0e0e]/80 px-2 py-1 rounded backdrop-blur border border-[#a2e7ff]/30">
                GRADE: {activeLut.toUpperCase()}
              </span>
            </div>

            {/* Big Play/Pause Center Trigger */}
            <button
              onClick={() => {
                setIsPlaying(!isPlaying);
                onShowToast(isPlaying ? 'Playback Paused' : 'Playback Resumed');
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#0e0e0e]/85 backdrop-blur-xl border border-[#c4c0ff]/40 text-[#c4c0ff] flex items-center justify-center transition-all hover:scale-110 shadow-[0_0_40px_rgba(196,192,255,0.3)] z-20 cursor-pointer"
            >
              <span className="material-symbols-outlined text-4xl">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>

            {/* Audio Waveform Visualizer */}
            <div className={`relative z-10 w-full px-4 pb-2 flex items-end gap-1 h-10 transition-opacity ${isPlaying ? 'opacity-80' : 'opacity-20'}`}>
              {[12, 24, 32, 16, 28, 40, 20, 14, 30, 36, 18, 38, 26, 14, 32, 22, 34, 16, 28, 12].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#c4c0ff]/70 rounded-t eq-bar-anim"
                  style={{
                    height: `${height}px`,
                    animationDelay: `${(i % 5) * 0.15}s`,
                    animationPlayState: isPlaying ? 'running' : 'paused'
                  }}
                ></div>
              ))}
            </div>

            {/* Scrubber Progress Bar */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                const sec = Math.floor(pct * totalSec);
                setCurrentSec(sec);
                onShowToast(`Scrubbed to ${formatTime(sec)}`);
              }}
              className="relative z-10 w-full px-4 pb-1 cursor-pointer group/scrub"
            >
              <div className="w-full h-2 bg-[#353534]/80 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-[#c4c0ff] via-[#a2e7ff] to-[#8781ff] transition-all"
                  style={{ width: `${(currentSec / totalSec) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Acrylic Glass HUD Strip */}
            <div className="relative z-10 w-full bg-[#0e0e0e]/90 backdrop-blur-xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-t border-[#464555]/20 font-mono text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:text-[#c4c0ff] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <div className="flex items-center gap-1 text-white">
                  <span className="text-[#c4c0ff] font-bold">{formatTime(currentSec)}</span>
                  <span className="text-[#918fa1]">/</span>
                  <span className="text-[#c7c4d8]">{formatTime(totalSec)}</span>
                </div>
              </div>

              {/* Chapter title */}
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-white bg-[#201f1f] px-2 py-0.5 rounded border border-[#464555]/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c4c0ff] animate-pulse"></span>
                  <span>
                    {currentSec < 60
                      ? 'CH 01: PROLOGUE ATMOSPHERIC OVERVIEW'
                      : currentSec < 140
                      ? 'CH 02: KINETIC DRIFT SPEED-RAMP'
                      : 'CH 03: CLIMAX HIGH-SPEED OUTRO'}
                  </span>
                </span>
                <span className="text-[#918fa1]">RENDER: 60.00 FPS LOCKED</span>
              </div>

              {/* Resolution & Audio buttons */}
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-[#2a2a2a] rounded p-0.5 border border-[#464555]/40">
                  <button
                    onClick={() => handleResolutionChange('4k', '85.4 MBPS')}
                    className={`px-2 py-1 rounded transition-all cursor-pointer ${
                      resolution === '4k'
                        ? 'bg-[#c4c0ff] text-[#2000a4] font-bold'
                        : 'text-[#c7c4d8] hover:text-white'
                    }`}
                  >
                    4K 60
                  </button>
                  <button
                    onClick={() => handleResolutionChange('1440', '48.2 MBPS')}
                    className={`px-2 py-1 rounded transition-all cursor-pointer ${
                      resolution === '1440'
                        ? 'bg-[#c4c0ff] text-[#2000a4] font-bold'
                        : 'text-[#c7c4d8] hover:text-white'
                    }`}
                  >
                    1440P
                  </button>
                  <button
                    onClick={() => handleResolutionChange('1080', '24.8 MBPS')}
                    className={`px-2 py-1 rounded transition-all cursor-pointer ${
                      resolution === '1080'
                        ? 'bg-[#c4c0ff] text-[#2000a4] font-bold'
                        : 'text-[#c7c4d8] hover:text-white'
                    }`}
                  >
                    1080P
                  </button>
                </div>

                <button
                  onClick={() => {
                    setIsMuted(!isMuted);
                    onShowToast(isMuted ? 'Audio Unmuted' : 'Audio Muted');
                  }}
                  className="text-[#c7c4d8] hover:text-white transition-colors cursor-pointer flex items-center"
                >
                  <span className="material-symbols-outlined text-lg">
                    {isMuted ? 'volume_off' : 'volume_up'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROJECT SHOWCASES & BREAKDOWNS */}
        <section className="flex flex-col gap-6 pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#a2e7ff] uppercase tracking-widest">
                ARCHIVE // INDEXED PRODUCTIONS
              </span>
              <h2 className="font-display font-bold text-3xl text-white uppercase tracking-tight mt-1">
                Project Showcases &amp; Breakdowns
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-[#918fa1]">FILTER:</span>
              <span className="text-[#c4c0ff] font-bold uppercase">{activeFilter.toUpperCase()}</span>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#c4c0ff] text-[#2000a4] font-bold shadow-md'
                  : 'bg-[#201f1f] text-[#c7c4d8] hover:text-white border border-[#464555]/20'
              }`}
            >
              All Releases (18)
            </button>
            <button
              onClick={() => setActiveFilter('fivem')}
              className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                activeFilter === 'fivem'
                  ? 'bg-[#c4c0ff] text-[#2000a4] font-bold shadow-md'
                  : 'bg-[#201f1f] text-[#c7c4d8] hover:text-white border border-[#464555]/20'
              }`}
            >
              GTA V / FiveM Cinematics
            </button>
            <button
              onClick={() => setActiveFilter('valorant')}
              className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                activeFilter === 'valorant'
                  ? 'bg-[#c4c0ff] text-[#2000a4] font-bold shadow-md'
                  : 'bg-[#201f1f] text-[#c7c4d8] hover:text-white border border-[#464555]/20'
              }`}
            >
              Valorant Motion Edits
            </button>
            <button
              onClick={() => setActiveFilter('dev')}
              className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                activeFilter === 'dev'
                  ? 'bg-[#c4c0ff] text-[#2000a4] font-bold shadow-md'
                  : 'bg-[#201f1f] text-[#c7c4d8] hover:text-white border border-[#464555]/20'
              }`}
            >
              Dev Stream Breakdowns
            </button>
            <button
              onClick={() => setActiveFilter('mograph')}
              className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                activeFilter === 'mograph'
                  ? 'bg-[#c4c0ff] text-[#2000a4] font-bold shadow-md'
                  : 'bg-[#201f1f] text-[#c7c4d8] hover:text-white border border-[#464555]/20'
              }`}
            >
              Motion Graphics Experiments
            </button>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredVideos.map((video) => (
              <article
                key={video.id}
                className="group bg-[#201f1f] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-[#464555]/30 hover:border-[#c4c0ff]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div
                  onClick={() => onOpenVideo(video)}
                  className="relative w-full aspect-video overflow-hidden cursor-pointer"
                >
                  <img
                    src={video.imageUrl}
                    alt={video.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201f1f] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#0e0e0e]/80 backdrop-blur rounded text-[#c4c0ff] font-mono text-xs border border-[#c4c0ff]/30">
                      {video.tag1}
                    </span>
                    <span className="px-2 py-0.5 bg-[#0e0e0e]/80 backdrop-blur rounded text-[#5ee151] font-mono text-xs border border-[#5ee151]/30">
                      {video.tag2}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#0e0e0e]/90 text-[#c4c0ff] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 shadow-lg">
                    <span className="material-symbols-outlined text-xl">play_arrow</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#918fa1]">
                      <span>{video.categoryLabel}</span>
                      <span className="text-[#a2e7ff]">{video.software}</span>
                    </div>
                    <h3
                      onClick={() => onOpenVideo(video)}
                      className="font-display font-bold text-xl text-white group-hover:text-[#c4c0ff] transition-colors cursor-pointer"
                    >
                      {video.title}
                    </h3>
                    <p className="text-sm text-[#c7c4d8] leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-[#464555]/20 font-mono text-xs">
                    <div className="flex items-center gap-2 text-[#c7c4d8]">
                      <span className="w-2 h-2 rounded-full bg-[#a2e7ff] animate-pulse"></span>
                      <span>{video.impressions}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedSpecVideo(video)}
                      className="text-[#c4c0ff] hover:text-white flex items-center gap-1 uppercase tracking-wider font-semibold cursor-pointer"
                    >
                      <span>INSPECT SPEC</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. TIMELINE & COLOR GRADE RIG (NLE Interactive Simulator) */}
        <section className="flex flex-col gap-4 pt-6" id="suite-preview">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-[#c4c0ff] font-mono text-xs uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">auto_fix_high</span>
                DIGITAL WORKBENCH // NLE INTERACTIVE SIMULATOR
              </div>
              <h2 className="font-display font-bold text-3xl text-white uppercase tracking-tight mt-1">
                Timeline &amp; Color Grade Rig
              </h2>
            </div>

            {/* LUT Switcher */}
            <div className="flex flex-wrap items-center gap-1 bg-[#201f1f] p-1.5 rounded-lg border border-[#464555]/30 font-mono text-xs">
              <span className="text-[#918fa1] px-2">LUT:</span>
              <button
                onClick={() => handleLutChange('teal-orange', 'Teal & Orange')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeLut === 'teal-orange' ? 'bg-[#c4c0ff] text-[#2000a4] font-bold' : 'text-[#c7c4d8] hover:text-white'
                }`}
              >
                Teal &amp; Orange
              </button>
              <button
                onClick={() => handleLutChange('matrix-mono', 'Matrix Mono')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeLut === 'matrix-mono' ? 'bg-[#c4c0ff] text-[#2000a4] font-bold' : 'text-[#c7c4d8] hover:text-white'
                }`}
              >
                Matrix Mono
              </button>
              <button
                onClick={() => handleLutChange('neon-cyber', 'Neon Cyber')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeLut === 'neon-cyber' ? 'bg-[#c4c0ff] text-[#2000a4] font-bold' : 'text-[#c7c4d8] hover:text-white'
                }`}
              >
                Neon Cyber
              </button>
              <button
                onClick={() => handleLutChange('neutral-raw', 'Neutral RAW')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeLut === 'neutral-raw' ? 'bg-[#c4c0ff] text-[#2000a4] font-bold' : 'text-[#c7c4d8] hover:text-white'
                }`}
              >
                Neutral RAW
              </button>
            </div>
          </div>

          {/* Telemetry Strip */}
          <div className="bg-[#2a2a2a]/60 border border-[#464555]/30 rounded-lg px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-[#5ee151] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5ee151] animate-ping"></span>
                SELECTED CLIP:
              </span>
              <span className="text-[#c4c0ff] font-bold">{selectedClip.name}</span>
            </div>
            <div className="flex items-center gap-4 text-[#c7c4d8]">
              <span>IN: <strong className="text-white">{selectedClip.in}</strong></span>
              <span>OUT: <strong className="text-white">{selectedClip.out}</strong></span>
              <span>DUR: <strong className="text-white">{selectedClip.dur}</strong></span>
              <span className="text-[#a2e7ff] bg-[#201f1f] px-2 py-0.5 rounded border border-[#a2e7ff]/30">
                {selectedClip.ramp}
              </span>
            </div>
          </div>

          {/* NLE Multitrack Canvas */}
          <div className="w-full bg-[#1c1b1b] rounded-xl overflow-hidden shadow-2xl flex flex-col border border-[#464555]/30 font-mono text-xs">
            {/* Header bar */}
            <div className="bg-[#201f1f] px-4 py-2 flex items-center justify-between text-[#918fa1] border-b border-[#464555]/20">
              <div className="flex items-center gap-4">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#c4c0ff]">movie_filter</span>
                  SEQUENCE_MASTER_4K.prproj
                </span>
                <span className="hidden md:inline">23.976 FPS TIMEBASE</span>
                <span className="hidden lg:inline">COLOR SPACE: ACEScg</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#5ee151] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5ee151]"></span>
                  RENDER CACHE 100%
                </span>
                <span className="text-[#c4c0ff] font-bold">00:01:42:18</span>
              </div>
            </div>

            {/* Ruler */}
            <div className="p-4 flex flex-col gap-2 bg-[#0e0e0e]">
              <div className="w-full h-5 flex items-center justify-between text-[10px] text-[#918fa1] px-1 border-b border-[#464555]/20 pb-1">
                <span>00:00:00</span>
                <span>00:00:30</span>
                <span>00:01:00</span>
                <span className="text-[#c4c0ff] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c4c0ff] animate-ping"></span> 00:01:30 (PLAYHEAD)
                </span>
                <span>00:02:00</span>
                <span>00:02:30</span>
                <span>00:03:00</span>
              </div>

              {/* V3 Track */}
              <div className="flex items-center gap-2">
                <div className="w-14 h-9 bg-[#201f1f] flex items-center justify-center font-bold text-white rounded">
                  V3
                </div>
                <div className="flex-1 h-9 bg-[#1c1b1b] rounded flex items-center px-1 relative overflow-hidden">
                  <div
                    onClick={() =>
                      setSelectedClip({
                        name: 'SPEED_RAMP_TEXT.aep',
                        in: '00:01:03:12',
                        out: '00:01:48:00',
                        dur: '00:00:44:12',
                        ramp: 'TYPE_SCALE: 80% → 140% BOUNCE'
                      })
                    }
                    className={`absolute left-[35%] w-[25%] h-7 rounded flex items-center px-2 text-[#c4c0ff] truncate cursor-pointer transition-all border ${
                      selectedClip.name === 'SPEED_RAMP_TEXT.aep'
                        ? 'bg-[#c4c0ff]/40 border-[#c4c0ff] shadow-md'
                        : 'bg-[#c4c0ff]/20 border-[#c4c0ff]/40 hover:bg-[#c4c0ff]/30'
                    }`}
                  >
                    [TYPOGRAPHY] SPEED_RAMP_TEXT.aep
                  </div>
                  <div
                    onClick={() =>
                      setSelectedClip({
                        name: 'TELEMETRY_HUD.mogrt',
                        in: '00:02:02:00',
                        out: '00:02:34:10',
                        dur: '00:00:32:10',
                        ramp: 'OPACITY: PULSE 85FPS'
                      })
                    }
                    className="absolute left-[68%] w-[18%] h-7 bg-[#c4c0ff]/20 border border-[#c4c0ff]/30 hover:bg-[#c4c0ff]/30 rounded flex items-center px-2 text-[#c4c0ff] truncate cursor-pointer"
                  >
                    [CALLOUT] TELEMETRY_HUD
                  </div>
                </div>
              </div>

              {/* V2 Track */}
              <div className="flex items-center gap-2">
                <div className="w-14 h-10 bg-[#201f1f] flex items-center justify-center font-bold text-white rounded">
                  V2
                </div>
                <div className="flex-1 h-10 bg-[#1c1b1b] rounded flex items-center px-1 relative overflow-hidden">
                  <div
                    onClick={() =>
                      setSelectedClip({
                        name: 'DRONE_OVERHEAD_4K.mov',
                        in: '00:00:18:00',
                        out: '00:00:57:12',
                        dur: '00:00:39:12',
                        ramp: 'STABILIZER: 18% SMOOTH'
                      })
                    }
                    className="absolute left-[10%] w-[22%] h-8 bg-[#a2e7ff]/20 border border-[#a2e7ff]/40 hover:bg-[#a2e7ff]/30 rounded flex items-center px-2 text-[#a2e7ff] truncate cursor-pointer"
                  >
                    DRONE_OVERHEAD_4K.mov
                  </div>
                  <div
                    onClick={() =>
                      setSelectedClip({
                        name: 'FPV_CHASE_CAM_02.braw',
                        in: '00:01:08:14',
                        out: '00:02:02:18',
                        dur: '00:00:54:04',
                        ramp: 'WARP_STABILIZED 4K'
                      })
                    }
                    className="absolute left-[38%] w-[30%] h-8 bg-[#a2e7ff]/30 border border-[#a2e7ff]/50 hover:bg-[#a2e7ff]/40 rounded flex items-center px-2 text-[#a2e7ff] truncate cursor-pointer"
                  >
                    FPV_CHASE_CAM_02.braw
                  </div>
                  <div
                    onClick={() =>
                      setSelectedClip({
                        name: 'ACTION_REACTION_RELOAD.mov',
                        in: '00:02:09:20',
                        out: '00:02:49:12',
                        dur: '00:00:39:16',
                        ramp: 'OPTICAL RETIME 300%'
                      })
                    }
                    className="absolute left-[72%] w-[22%] h-8 bg-[#a2e7ff]/20 border border-[#a2e7ff]/40 hover:bg-[#a2e7ff]/30 rounded flex items-center px-2 text-[#a2e7ff] truncate cursor-pointer"
                  >
                    ACTION_REACTION_RELOAD.mov
                  </div>
                </div>
              </div>

              {/* V1 Track (Master cut) */}
              <div className="flex items-center gap-2">
                <div className="w-14 h-12 bg-[#201f1f] flex items-center justify-center font-bold text-[#c4c0ff] rounded">
                  V1
                </div>
                <div className="flex-1 h-12 bg-[#1c1b1b] rounded flex items-center px-1 relative overflow-hidden">
                  <div
                    onClick={() =>
                      setSelectedClip({
                        name: 'CINEMATIC_PROLOGUE_A01.mov',
                        in: '00:00:00:00',
                        out: '00:00:54:00',
                        dur: '00:00:54:00',
                        ramp: 'NORMAL 100% LINEAR'
                      })
                    }
                    className="absolute left-0 w-[30%] h-10 bg-[#3a3939] border border-white/20 hover:border-[#c4c0ff] rounded flex items-center px-2 text-white truncate cursor-pointer"
                  >
                    CINEMATIC_PROLOGUE_A01.mov
                  </div>
                  <div
                    onClick={() =>
                      setSelectedClip({
                        name: 'MAIN_DRIFT_B04_SLOWMO.mov',
                        in: '00:00:55:18',
                        out: '00:01:55:00',
                        dur: '00:00:59:06',
                        ramp: 'SPEED-RAMP: 1200% → 100% BEZIER'
                      })
                    }
                    className={`absolute left-[31%] w-[33%] h-10 rounded flex items-center px-2 text-[#c4c0ff] truncate cursor-pointer border ${
                      selectedClip.name === 'MAIN_DRIFT_B04_SLOWMO.mov'
                        ? 'bg-[#2a2a2a] border-[#c4c0ff] shadow-lg'
                        : 'bg-[#2a2a2a] border-white/20 hover:border-[#c4c0ff]'
                    }`}
                  >
                    MAIN_DRIFT_B04_SLOWMO.mov
                  </div>
                  <div
                    onClick={() =>
                      setSelectedClip({
                        name: 'CLIMAX_CHASE_FINAL_EXT.mov',
                        in: '00:01:57:00',
                        out: '00:03:00:00',
                        dur: '00:01:03:00',
                        ramp: 'SPEED-RAMP: 600% → 40% CUBIC'
                      })
                    }
                    className="absolute left-[65%] w-[35%] h-10 bg-[#3a3939] border border-white/20 hover:border-[#c4c0ff] rounded flex items-center px-2 text-white truncate cursor-pointer"
                  >
                    CLIMAX_CHASE_FINAL_EXT.mov
                  </div>
                  {/* Playhead line */}
                  <div className="absolute left-[52%] top-0 bottom-0 w-0.5 bg-[#c4c0ff] z-20 shadow-[0_0_10px_#c4c0ff] pointer-events-none"></div>
                </div>
              </div>

              {/* Audio Tracks A1 & A2 */}
              <div className="flex items-center gap-2 mt-1">
                <div className="w-14 h-8 bg-[#201f1f] flex items-center justify-center font-bold text-[#5ee151] rounded">
                  A1
                </div>
                <div className="flex-1 h-8 bg-[#1c1b1b] rounded flex items-center px-1 relative overflow-hidden">
                  <div
                    onClick={() =>
                      setSelectedClip({
                        name: 'V8_TURBO_FLUTTER.wav',
                        in: '00:00:39:10',
                        out: '00:01:24:12',
                        dur: '00:00:45:02',
                        ramp: 'TRANSIENT SHAPED: LOWS +4dB'
                      })
                    }
                    className="absolute left-[22%] w-[25%] h-6 bg-[#5ee151]/20 border border-[#5ee151]/40 rounded flex items-center px-2 text-[#5ee151] truncate cursor-pointer"
                  >
                    V8_TURBO_FLUTTER.wav
                  </div>
                  <div
                    onClick={() =>
                      setSelectedClip({
                        name: 'SUB_DROP_808.wav',
                        in: '00:01:30:00',
                        out: '00:02:06:00',
                        dur: '00:00:36:00',
                        ramp: 'SIDECHAIN DUCKED'
                      })
                    }
                    className="absolute left-[50%] w-[20%] h-6 bg-[#5ee151]/30 border border-[#5ee151]/50 rounded flex items-center px-2 text-[#5ee151] truncate cursor-pointer"
                  >
                    SUB_DROP_808.wav
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-14 h-8 bg-[#201f1f] flex items-center justify-center font-bold text-[#918fa1] rounded">
                  A2
                </div>
                <div className="flex-1 h-8 bg-[#1c1b1b] rounded flex items-center px-3 relative overflow-hidden justify-between text-[#c7c4d8]">
                  <span>CYBERPUNK_SYNTHWAVE_BREAKBEAT_MASTER_STEMS.wav [COMPRESSOR / EQ DUCKED]</span>
                  <span className="text-[#5ee151]">-14.2 LUFS INTEGRATED</span>
                </div>
              </div>
            </div>

            {/* Footer status */}
            <div className="bg-[#201f1f] px-4 py-2 flex items-center justify-between text-[#918fa1] border-t border-[#464555]/20 text-[11px]">
              <div>TOTAL CLIPS: 42 • RENDER QUEUE: IDLE • VRAM USAGE: 14.2 GB / 24 GB</div>
              <div className="text-[#c4c0ff] flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                ALL TIMELINE KEYFRAMES OPTICALLY LOCKED
              </div>
            </div>
          </div>
        </section>

        {/* 5. YOUTUBE CREATOR HUB (@KINGPLAYZ008) */}
        <section className="bg-[#201f1f] rounded-2xl p-6 md:p-10 relative overflow-hidden flex flex-col gap-6 border border-[#464555]/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-3xl pointer-events-none rounded-full"></div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 z-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#353534] flex items-center justify-center text-red-500 shrink-0 border border-red-500/30 shadow-inner">
                <span className="material-symbols-outlined text-3xl">smart_display</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-2xl text-white">KINGPLAYZ008</h3>
                  <span className="material-symbols-outlined text-[#c4c0ff] text-base">verified</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#c7c4d8] mt-0.5">
                  <span>@KINGPLAYZ008</span>
                  <span>•</span>
                  <span>GTA V / FIVEM / VALORANT / CREATIVE DEV</span>
                  <span>•</span>
                  <span className="text-[#5ee151] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#5ee151] animate-pulse"></span>
                    ACTIVE UPLOADER
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://youtube.com/@KINGPLAYZ008"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-mono text-xs uppercase font-bold tracking-wider rounded-lg transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)] flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-base">play_circle</span>
                <span>Subscribe on YouTube</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-10">
            <a
              href="https://youtube.com/@KINGPLAYZ008"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1c1b1b] rounded-lg p-3 flex flex-col gap-2 hover:bg-[#2a2a2a] transition-colors border border-[#464555]/20 group"
            >
              <div className="relative aspect-video rounded overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUdCvBq5Gh9Xiw2zdqfKTAQRMHeMDQPRXtz86M0x3PgfBm9Z14uyoYxEzJwiQN_0e4eFCEm9mouAqqXIwK81wTpETvXpWuCFoKMK5r9q9fGy1i-Mwz9EJWWmXwgR0V3TAFsqsue96STdn45bnRNItfUS7i4eOpvuHAKzHDQg6yBQTZsS4bJrMVeTXKsh_4CxT_tUa33K-d43wuQoDsDa2XL_0QIfUtaKddrOqJLIf-Amkvlb_vd9yY6w"
                  alt="FiveM Pursuit showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 right-1 bg-black/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">
                  08:44
                </span>
              </div>
              <span className="font-display font-semibold text-sm text-white line-clamp-1 group-hover:text-[#c4c0ff] transition-colors">
                FIVEM PURSUIT // UNSTOPPABLE ESCAPE
              </span>
              <span className="font-mono text-xs text-[#918fa1]">Latest Broadcast • 14.8K views</span>
            </a>

            <a
              href="https://youtube.com/@KINGPLAYZ008"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1c1b1b] rounded-lg p-3 flex flex-col gap-2 hover:bg-[#2a2a2a] transition-colors border border-[#464555]/20 group"
            >
              <div className="relative aspect-video rounded overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4eOUU--HtVNmuykATCBPYBhdvHdrVgz8MMjUDhMGLoxvaM4J_hHg8oZ1C69I_tuRxvSJdDqQ9nq_wM7ixpVVuuxkMJfRccQFKXuIPInb1fXOUEugwRjnyaEKn9A1V8ew9WwDJNBLFXLauHUb0Cq1J4BvVd4UHo-4ebLV7SYcL0WAn4RYIzWTAv3xqxpfZY-tKk5iq1psHerIvmhTec-exePgL2xEwr4G1A2YZTzDZA8mlq3nw-zGbGA"
                  alt="Valorant Aces edit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 right-1 bg-black/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">
                  03:12
                </span>
              </div>
              <span className="font-display font-semibold text-sm text-white line-clamp-1 group-hover:text-[#c4c0ff] transition-colors">
                VALORANT ACES // KINETIC SYNCHRONY
              </span>
              <span className="font-mono text-xs text-[#918fa1]">Showcase Edit • 28.1K views</span>
            </a>

            <a
              href="https://youtube.com/@KINGPLAYZ008"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1c1b1b] rounded-lg p-3 flex flex-col gap-2 hover:bg-[#2a2a2a] transition-colors border border-[#464555]/20 group"
            >
              <div className="relative aspect-video rounded overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2rwWpHRviOEo22MnIz4cM575VJPDW8-pjymZw6MkBSQJYBKE3zdLQ6oYf73yOROxYNWUYeRc1jwpk_mf1c2vZhE4-C09-XwRuMuPdMnqGl-CwJi9EkzRD-I9y3kIIqJUXa-_gtnQozdjHU38DD0hlTLt2I546qFai68B2_wZJjhJSvazAV5gJKDkgy-rGFDzLzp95Wf7O7ax0FW9PT-Uxbl8JK7Rm3INtG756UPw0_bshr8rmmWAh7A"
                  alt="Low latency networking tutorial"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-1 right-1 bg-black/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">
                  19:30
                </span>
              </div>
              <span className="font-display font-semibold text-sm text-white line-clamp-1 group-hover:text-[#c4c0ff] transition-colors">
                HOW I SCRIPT LOW-LATENCY NETWORKING
              </span>
              <span className="font-mono text-xs text-[#918fa1]">Technical Breakdown • 11.4K views</span>
            </a>
          </div>
        </section>

        {/* 6. EDITORIAL CAPABILITIES */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#c4c0ff] uppercase tracking-widest">
              {transientStatus}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              onMouseEnter={() => setTransientStatus('TRANSIENT TRIGGERED // 55Hz SUB BASS DROP')}
              onMouseLeave={() => setTransientStatus('AUDIO TRANSIENT DETECTOR // LIVE')}
              className="p-6 bg-[#201f1f] rounded-xl flex flex-col justify-between border border-[#464555]/30 hover:border-[#c4c0ff]/60 transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="material-symbols-outlined text-[#c4c0ff] text-3xl">movie_edit</span>
                  <div className="flex items-end gap-1 h-5 w-12 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 bg-[#c4c0ff] rounded-t eq-bar-anim h-4"></div>
                    <div className="w-2 bg-[#a2e7ff] rounded-t eq-bar-anim h-5" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 bg-[#5ee151] rounded-t eq-bar-anim h-3" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
                <h3 className="font-display font-semibold text-lg text-white group-hover:text-[#c4c0ff] transition-colors">
                  Rhythmic Pacing &amp; Speed-Ramping
                </h3>
                <p className="text-sm text-[#c7c4d8] mt-2">
                  Translating audio transients and sub-bass impacts directly into variable frame rate motion, time remapping, and micro-stutters that amplify momentum.
                </p>
              </div>
              <div className="pt-4 mt-4 font-mono text-xs text-[#918fa1] flex items-center justify-between border-t border-[#464555]/20">
                <span>TOOLS: PREMIERE PRO / TWERKTOR</span>
                <span className="text-[#5ee151]">IMPACT SFX</span>
              </div>
            </div>

            <div
              onMouseEnter={() => setTransientStatus('TRANSIENT TRIGGERED // ACES GAMUT TRANSFORM')}
              onMouseLeave={() => setTransientStatus('AUDIO TRANSIENT DETECTOR // LIVE')}
              className="p-6 bg-[#201f1f] rounded-xl flex flex-col justify-between border border-[#464555]/30 hover:border-[#a2e7ff]/60 transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="material-symbols-outlined text-[#a2e7ff] text-3xl">palette</span>
                  <div className="flex items-end gap-1 h-5 w-12 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 bg-[#a2e7ff] rounded-t eq-bar-anim h-2"></div>
                    <div className="w-2 bg-[#c4c0ff] rounded-t eq-bar-anim h-5" style={{ animationDelay: '0.15s' }}></div>
                    <div className="w-2 bg-[#5ee151] rounded-t eq-bar-anim h-4" style={{ animationDelay: '0.35s' }}></div>
                  </div>
                </div>
                <h3 className="font-display font-semibold text-lg text-white group-hover:text-[#a2e7ff] transition-colors">
                  Color Science &amp; ACES Grading
                </h3>
                <p className="text-sm text-[#c7c4d8] mt-2">
                  Comprehensive node-based color grading in DaVinci Resolve Studio. Custom gamut mapping, split-toning, film halation, and HDR delivery mastering.
                </p>
              </div>
              <div className="pt-4 mt-4 font-mono text-xs text-[#918fa1] flex items-center justify-between border-t border-[#464555]/20">
                <span>TOOLS: DAVINCI RESOLVE / ACEScg</span>
                <span className="text-[#a2e7ff]">32-BIT FLOAT</span>
              </div>
            </div>

            <div
              onMouseEnter={() => setTransientStatus('TRANSIENT TRIGGERED // 3D CAMERA TRACKING')}
              onMouseLeave={() => setTransientStatus('AUDIO TRANSIENT DETECTOR // LIVE')}
              className="p-6 bg-[#201f1f] rounded-xl flex flex-col justify-between border border-[#464555]/30 hover:border-[#5ee151]/60 transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="material-symbols-outlined text-[#5ee151] text-3xl">token</span>
                  <div className="flex items-end gap-1 h-5 w-12 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 bg-[#5ee151] rounded-t eq-bar-anim h-5"></div>
                    <div className="w-2 bg-[#c4c0ff] rounded-t eq-bar-anim h-3" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-2 bg-[#a2e7ff] rounded-t eq-bar-anim h-4" style={{ animationDelay: '0.1s' }}></div>
                  </div>
                </div>
                <h3 className="font-display font-semibold text-lg text-white group-hover:text-[#5ee151] transition-colors">
                  Kinetic Typography &amp; 3D Sweeps
                </h3>
                <p className="text-sm text-[#c7c4d8] mt-2">
                  Synthesizing 3D camera tracking with procedural typography layouts, spatial matchmoving, and programmatic glitch aesthetics in After Effects.
                </p>
              </div>
              <div className="pt-4 mt-4 font-mono text-xs text-[#918fa1] flex items-center justify-between border-t border-[#464555]/20">
                <span>TOOLS: AFTER EFFECTS / BLENDER</span>
                <span className="text-[#c4c0ff]">KEYFRAME MATRIX</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. BOTTOM CTA */}
        <section className="pt-6 pb-8" id="contact-cta">
          <div className="relative rounded-2xl bg-gradient-to-r from-[#201f1f] via-[#2a2a2a] to-[#201f1f] p-8 md:p-14 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-[#464555]/30">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#c4c0ff]/20 blur-3xl pointer-events-none rounded-full"></div>
            <div className="flex flex-col gap-2 max-w-2xl z-10">
              <span className="font-mono text-xs text-[#5ee151] uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5ee151] animate-pulse"></span>
                READY FOR NEW COMMISSIONS
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white uppercase tracking-tight">
                Need Cinematic Editing or Motion Design?
              </h2>
              <p className="text-sm md:text-base text-[#c7c4d8]">
                Let's create high-impact visual narratives for your next launch, tournament trailer, YouTube series, or product reveal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 z-10 shrink-0">
              <button
                onClick={onOpenContact}
                className="px-8 py-3.5 bg-[#c4c0ff] text-[#2000a4] font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-[0_0_25px_rgba(196,192,255,0.3)] hover:bg-white flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">send</span>
                <span>Initiate Collaboration</span>
              </button>
              <a
                href="https://youtube.com/@KINGPLAYZ008"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-[#353534] hover:bg-[#3a3939] text-white font-mono text-xs uppercase tracking-wider rounded-lg transition-colors border border-[#464555]/30"
              >
                View Channel
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Inspect Technical Spec Modal */}
      {selectedSpecVideo && (
        <div
          className="fixed inset-0 z-50 bg-[#0e0e0e]/90 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={() => setSelectedSpecVideo(null)}
        >
          <div
            className="bg-[#201f1f] rounded-2xl max-w-3xl w-full p-6 md:p-8 flex flex-col gap-4 shadow-2xl relative border border-[#464555]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#464555]/30 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c4c0ff] animate-ping"></span>
                <span className="font-mono text-xs text-[#c4c0ff] uppercase tracking-wider font-bold">
                  PROJECT SPECIFICATION // {selectedSpecVideo.categoryLabel}
                </span>
              </div>
              <button
                onClick={() => setSelectedSpecVideo(null)}
                className="w-8 h-8 rounded-full bg-[#1c1b1b] flex items-center justify-center text-[#e5e2e1] hover:text-[#c4c0ff] transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl text-white">
                {selectedSpecVideo.title}
              </h3>
              <p className="text-sm text-[#c7c4d8] mt-1">{selectedSpecVideo.description}</p>
            </div>

            {/* Spec Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0e0e0e] rounded-lg p-4 border border-[#464555]/20 font-mono text-xs">
              <div>
                <span className="text-[#918fa1] block text-[10px] uppercase">RESOLUTION</span>
                <span className="text-white font-bold">{selectedSpecVideo.specs.res}</span>
              </div>
              <div>
                <span className="text-[#918fa1] block text-[10px] uppercase">FRAMERATE</span>
                <span className="text-white font-bold">{selectedSpecVideo.specs.fps}</span>
              </div>
              <div>
                <span className="text-[#918fa1] block text-[10px] uppercase">RENDER FORMAT</span>
                <span className="text-white font-bold">{selectedSpecVideo.specs.render}</span>
              </div>
              <div>
                <span className="text-[#918fa1] block text-[10px] uppercase">COLOR SPACE</span>
                <span className="text-[#a2e7ff] font-bold">{selectedSpecVideo.specs.color}</span>
              </div>
            </div>

            {/* Bézier Velocity Curve Visualizer */}
            <div className="bg-[#0e0e0e] p-4 rounded-lg flex flex-col gap-2 border border-[#464555]/30">
              <div className="flex items-center justify-between text-xs font-mono text-[#918fa1]">
                <span className="text-white flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#c4c0ff]">show_chart</span>
                  BÉZIER VELOCITY CURVE &amp; TRANSIENTS
                </span>
                <span className="text-[#5ee151]">CUBIC-BEZIER(0.25, 0.1, 0.25, 1.0)</span>
              </div>
              <div className="w-full h-20 bg-[#1c1b1b] rounded relative overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 80">
                  <line x1="0" y1="40" x2="400" y2="40" stroke="#353534" strokeDasharray="4 4" strokeWidth="1" />
                  <path d="M 0 75 Q 80 75 140 30 T 260 15 T 400 5" fill="none" stroke="#c4c0ff" strokeWidth="2.5" />
                  <circle cx="140" cy="30" r="4" fill="#a2e7ff" />
                  <circle cx="260" cy="15" r="4" fill="#5ee151" />
                  <circle cx="400" cy="5" r="4" fill="#c4c0ff" />
                </svg>
                <div className="absolute bottom-1 left-2 font-mono text-[10px] text-[#918fa1]">IN: 0.0s</div>
                <div className="absolute top-1 right-2 font-mono text-[10px] text-[#5ee151]">PEAK: 1200% RAMPS</div>
              </div>
            </div>

            {/* Software Stack */}
            <div className="flex flex-col gap-1 font-mono text-xs">
              <span className="text-[#918fa1] uppercase">Integrated Production Suite</span>
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedSpecVideo.specs.stack.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 bg-[#0e0e0e] rounded text-[#c4c0ff] border border-[#c4c0ff]/30 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#464555]/30">
              <button
                type="button"
                onClick={() => setSelectedSpecVideo(null)}
                className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#353534] rounded font-mono text-xs uppercase text-white cursor-pointer"
              >
                Close Spec
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedSpecVideo(null);
                  onOpenVideo(selectedSpecVideo);
                }}
                className="px-5 py-2 bg-[#c4c0ff] text-[#2000a4] font-mono text-xs font-bold uppercase rounded hover:bg-white transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Watch Master Reel</span>
                <span className="material-symbols-outlined text-sm">play_arrow</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
