import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';

interface WorkPageProps {
  onOpenCaseStudy: (project: ProjectItem) => void;
  onOpenContact: () => void;
  onShowToast: (msg: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onOpenCaseStudy,
  onOpenContact,
  onShowToast,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'game' | 'web' | 'backend'>('all');

  // Ping probe simulation state for 3SL Arena
  const [arenaPing, setArenaPing] = useState('14.2 ms');
  const [arenaProbing, setArenaProbing] = useState(false);

  // Diora 3D slider state
  const [dioraAngle, setDioraAngle] = useState(45);

  // DarkBeat Node switcher state
  const [activeNode, setActiveNode] = useState({
    code: 'SG-1',
    fullName: 'SG-1 (AP-SOUTHEAST)',
    ping: '8ms',
    bitrate: '128kbps OPUS',
    load: '28%',
  });

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const handleSimulatePing = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (arenaProbing) return;
    setArenaProbing(true);
    setArenaPing('PROBING...');

    let step = 0;
    const testVals = ['8.2 ms', '6.1 ms', '11.4 ms', '7.8 ms', '5.4 ms'];
    const interval = setInterval(() => {
      setArenaPing(testVals[step % testVals.length]);
      step++;
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      const finalPing = (5.5 + Math.random() * 4.2).toFixed(1) + ' ms';
      setArenaPing(finalPing);
      setArenaProbing(false);
      onShowToast(`Ping probe finished: ${finalPing} (0% loss)`);
    }, 1800);
  };

  const copyGitClone = (cmd: string, repoName: string) => {
    navigator.clipboard.writeText(cmd).then(() => {
      onShowToast(`Copied clone command for ${repoName}`);
    });
  };

  return (
    <div className="w-full bg-[#0e0e0e] min-h-screen text-[#e5e2e1] pb-24 bg-grid-cyber">
      {/* Header & Metric Strip */}
      <section className="relative w-full overflow-hidden pb-12 pt-8">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-[#c4c0ff]/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-72 right-12 w-[420px] h-[220px] bg-[#a2e7ff]/10 rounded-full blur-[90px]"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10 flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-4">
            <div className="flex flex-col gap-2 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#c4c0ff]">
                  PORTFOLIO INDEX // ARCHITECTURE &amp; RUNTIMES
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#5ee151] animate-pulse"></span>
                <span className="font-mono text-xs text-[#918fa1]">STABLE (128-TICK)</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase font-extrabold leading-none">
                Engineered Work <span className="text-[#c4c0ff]/70">/ 2023 — 2026</span>
              </h1>
              <p className="text-base text-[#c7c4d8] leading-relaxed mt-1">
                Scalable backends, multiplayer game systems, real-time audio bots, and bespoke interfaces built for sub-millisecond precision, distributed stability, and cinematic visual impact.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#201f1f] p-2 rounded-xl shadow-lg self-start lg:self-end border border-[#464555]/30">
              <div className="px-3 py-1 flex flex-col">
                <span className="font-mono text-[10px] text-[#918fa1] uppercase">ACTIVE SYSTEMS</span>
                <span className="font-display font-bold text-base text-white">06 Modules</span>
              </div>
              <div className="w-px h-8 bg-[#2a2a2a]"></div>
              <div className="px-3 py-1 flex flex-col">
                <span className="font-mono text-[10px] text-[#918fa1] uppercase">MEDIAN LATENCY</span>
                <span className="font-display font-bold text-base text-[#a2e7ff]">7.8ms</span>
              </div>
              <div className="w-px h-8 bg-[#2a2a2a]"></div>
              <div className="px-3 py-1 flex flex-col">
                <span className="font-mono text-[10px] text-[#918fa1] uppercase">UPTIME PEAK</span>
                <span className="font-display font-bold text-base text-[#5ee151]">99.98%</span>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-1.5 bg-[#1c1b1b] p-1.5 rounded-xl border border-[#464555]/30">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#c4c0ff] text-[#2000a4] font-bold shadow-sm'
                    : 'text-[#c7c4d8] hover:text-white hover:bg-[#201f1f]'
                }`}
              >
                <span>All</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/20">6</span>
              </button>
              <button
                onClick={() => setActiveFilter('game')}
                className={`px-4 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeFilter === 'game'
                    ? 'bg-[#c4c0ff] text-[#2000a4] font-bold shadow-sm'
                    : 'text-[#c7c4d8] hover:text-white hover:bg-[#201f1f]'
                }`}
              >
                <span>Game Systems</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#353534]">2</span>
              </button>
              <button
                onClick={() => setActiveFilter('web')}
                className={`px-4 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeFilter === 'web'
                    ? 'bg-[#c4c0ff] text-[#2000a4] font-bold shadow-sm'
                    : 'text-[#c7c4d8] hover:text-white hover:bg-[#201f1f]'
                }`}
              >
                <span>Web &amp; UI</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#353534]">2</span>
              </button>
              <button
                onClick={() => setActiveFilter('backend')}
                className={`px-4 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeFilter === 'backend'
                    ? 'bg-[#c4c0ff] text-[#2000a4] font-bold shadow-sm'
                    : 'text-[#c7c4d8] hover:text-white hover:bg-[#201f1f]'
                }`}
              >
                <span>Backend &amp; Bots</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#353534]">2</span>
              </button>
            </div>

            <div className="flex items-center gap-4 text-[#c7c4d8] font-mono text-xs">
              <div className="flex items-center gap-2 bg-[#1c1b1b] px-3 py-1.5 rounded-lg border border-[#464555]/20">
                <span className="w-2 h-2 rounded-full bg-[#a2e7ff] animate-ping"></span>
                <span>SYNC REPL: ONLINE</span>
              </div>
              <a
                href="https://github.com/kingplayz1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#c4c0ff] hover:underline"
              >
                <span>github.com/kingplayz1</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-[1440px] mx-auto px-6 w-full pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onOpenCaseStudy(project)}
              className="flex flex-col bg-[#201f1f] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl border border-[#464555]/30 hover:border-[#c4c0ff]/50 transition-all duration-300 group cursor-pointer"
            >
              {/* Image Preview Banner */}
              <div className="relative w-full h-72 overflow-hidden bg-[#0e0e0e]">
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201f1f] via-[#201f1f]/30 to-transparent"></div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="font-mono text-xs px-2 py-1 rounded bg-[#0e0e0e]/80 backdrop-blur-md text-[#c4c0ff] border border-[#464555]/30">
                    {project.num} // {project.categoryLabel}
                  </span>
                  <span
                    className={`font-mono text-xs px-2 py-1 rounded bg-[#0e0e0e]/80 backdrop-blur-md flex items-center gap-1 border border-[#464555]/30 ${
                      project.badgeType === 'tertiary'
                        ? 'text-[#5ee151]'
                        : project.badgeType === 'secondary'
                        ? 'text-[#a2e7ff]'
                        : 'text-[#c4c0ff]'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                    {project.badge}
                  </span>
                </div>

                {/* Bottom telemetry line on image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                  <div className="bg-[#0e0e0e]/90 px-3 py-1 rounded backdrop-blur border border-[#464555]/30">
                    {project.metrics.left}
                  </div>
                  <div className="bg-[#0e0e0e]/90 px-3 py-1 rounded backdrop-blur text-[#918fa1] border border-[#464555]/30">
                    {project.metrics.right}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display font-bold text-2xl text-white group-hover:text-[#c4c0ff] transition-colors">
                      {project.title}
                    </h2>
                    <span className="font-mono text-[11px] text-[#a2e7ff] bg-[#2a2a2a] px-2 py-0.5 rounded border border-[#464555]/20">
                      {project.version || 'PRODUCTION'}
                    </span>
                  </div>
                  <p className="text-sm text-[#c7c4d8] leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Unique Interactive Subsystems per Project Card */}
                {project.id === 'streetrush' && (
                  <div className="bg-[#0e0e0e] rounded-lg p-3 flex flex-col gap-2 border border-[#464555]/20">
                    <div className="flex items-center justify-between text-xs font-mono text-[#918fa1]">
                      <span>TELEMETRY SUBSYSTEM PIPELINE</span>
                      <span className="text-[#5ee151]">0 PACKET DROPS</span>
                    </div>
                    <div className="w-full bg-[#2a2a2a] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#c4c0ff] h-full rounded-full w-[92%] animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between font-mono text-[11px] text-[#c7c4d8]">
                      <span>Lua 5.4 Native Loop</span>
                      <span>C++ Server Interop</span>
                      <span>Vue 3 Micro-HUD</span>
                    </div>
                  </div>
                )}

                {project.id === 'arena' && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#0e0e0e] rounded-lg p-3 flex items-center justify-between border border-[#464555]/20"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs text-[#918fa1]">INTERACTIVE LATENCY TEST</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5ee151]"></span>
                      </div>
                      <span className="font-mono text-base font-bold text-[#5ee151]">
                        {arenaPing}
                      </span>
                      <span className="font-mono text-[10px] text-[#918fa1]">
                        {arenaProbing ? 'TRANSMITTING PACKETS' : 'STABLE (0% LOSS // 128 TICK)'}
                      </span>
                    </div>
                    <button
                      onClick={handleSimulatePing}
                      className="px-3 py-1.5 bg-[#2a2a2a] hover:bg-[#353534] rounded text-white font-mono text-xs transition-colors flex items-center gap-1.5 border border-[#464555]/30 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">sensors</span>
                      <span>SIMULATE PING</span>
                    </button>
                  </div>
                )}

                {project.id === 'diora' && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#0e0e0e] rounded-lg p-3 flex flex-col gap-2 border border-[#464555]/20"
                  >
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-white flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-[#c4c0ff]">view_in_ar</span>
                        3D YAW / PITCH ANGLE
                      </span>
                      <span className="text-[#a2e7ff]">{dioraAngle}° / 15°</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={dioraAngle}
                      onChange={(e) => setDioraAngle(parseInt(e.target.value, 10))}
                      className="w-full accent-[#c4c0ff] h-1.5 bg-[#2a2a2a] rounded cursor-pointer"
                    />
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#918fa1]">
                      <span>Drag slider to simulate PBR rotation</span>
                      <span className="text-[#5ee151]">100% LIGHTHOUSE</span>
                    </div>
                  </div>
                )}

                {project.id === 'darkbeat' && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#0e0e0e] rounded-lg p-3 flex flex-col gap-2 border border-[#464555]/20"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[#918fa1]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5ee151] animate-pulse"></span>
                        LAVALINK MESH NODES
                      </span>
                      <div className="flex items-end gap-1 h-3.5">
                        <div className="w-1 bg-[#a2e7ff] rounded-full eq-bar-anim h-3"></div>
                        <div className="w-1 bg-[#c4c0ff] rounded-full eq-bar-anim h-4"></div>
                        <div className="w-1 bg-[#5ee151] rounded-full eq-bar-anim h-2"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-1 text-center font-mono text-xs">
                      {[
                        { code: 'SG-1', name: 'SG-1 (AP-SOUTHEAST)', ping: '8ms', load: '28%', bitrate: '128kbps OPUS' },
                        { code: 'IN-1', name: 'IN-1 (AP-SOUTH)', ping: '14ms', load: '34%', bitrate: '128kbps OPUS' },
                        { code: 'DE-1', name: 'DE-1 (EU-CENTRAL)', ping: '82ms', load: '61%', bitrate: '96kbps OPUS' },
                        { code: 'US-E', name: 'US-E (US-EAST)', ping: '110ms', load: '74%', bitrate: '96kbps OPUS' }
                      ].map((node) => (
                        <button
                          key={node.code}
                          onClick={() => {
                            setActiveNode({
                              code: node.code,
                              fullName: node.name,
                              ping: node.ping,
                              bitrate: node.bitrate,
                              load: node.load,
                            });
                            onShowToast(`Active node shifted to ${node.code}`);
                          }}
                          className={`py-1 rounded font-mono text-xs transition-colors cursor-pointer border ${
                            activeNode.code === node.code
                              ? 'bg-[#3a3939] text-[#c4c0ff] border-[#c4c0ff]'
                              : 'bg-[#2a2a2a] text-[#c7c4d8] border-transparent hover:bg-[#353534]'
                          }`}
                        >
                          {node.code}
                          <span className="text-[#5ee151] block text-[10px]">{node.ping}</span>
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#918fa1]">
                      <span>
                        ACTIVE: <strong className="text-[#c4c0ff]">{activeNode.fullName}</strong>
                      </span>
                      <span className="text-[#a2e7ff]">{activeNode.bitrate}</span>
                    </div>
                  </div>
                )}

                {project.id === 'dgstatus' && (
                  <div className="bg-[#0e0e0e] rounded-lg p-3 flex items-center justify-between border border-[#464555]/20">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#5ee151] text-[20px] animate-pulse">
                        check_circle
                      </span>
                      <span className="font-mono text-xs text-white">
                        Operational Health: <strong className="text-[#5ee151]">100%</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
                        <span key={bar} className="w-1.5 h-5 bg-[#5ee151] rounded-sm"></span>
                      ))}
                    </div>
                  </div>
                )}

                {project.id === 'assistantx' && (
                  <div className="bg-[#0e0e0e] rounded-lg p-3 flex items-center justify-between border border-[#464555]/20 font-mono text-xs">
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-[#c4c0ff]">$</span>
                      <span>asx scaffold --stack=fivem-lua</span>
                    </div>
                    <span className="text-[#a2e7ff]">0.04s EXEC</span>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-[#2a2a2a] text-[#e5e2e1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Link */}
                <div className="flex items-center justify-between pt-2 border-t border-[#464555]/20">
                  <span className="flex items-center gap-1 font-mono text-xs text-[#c4c0ff] group-hover:text-white font-bold transition-colors">
                    <span>EXPLORE CASE STUDY</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                  <span className="font-mono text-xs text-[#918fa1]">{project.version}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Direct Codebase Access (Git Clones) */}
      <section className="w-full bg-[#1c1b1b] py-16 border-t border-[#464555]/30">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#c4c0ff]">
                REPOSITORIES &amp; OPEN SOURCE PACKAGES
              </span>
              <h2 className="font-display font-bold text-3xl text-white uppercase mt-1">
                Direct Codebase Access
              </h2>
              <p className="text-sm text-[#c7c4d8] max-w-2xl mt-1">
                Clean code, modular architecture patterns, and open-source contributions. Pull, test, and integrate directly into your workflows.
              </p>
            </div>
            <a
              href="https://github.com/kingplayz1"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#353534] text-white font-mono text-xs uppercase rounded-lg transition-colors flex items-center gap-2 border border-[#464555]/40"
            >
              <span className="material-symbols-outlined text-sm">code</span>
              <span>VIEW GITHUB PROFILE</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Repo 1 */}
            <div className="bg-[#201f1f] p-6 rounded-xl border border-[#464555]/30 hover:border-[#c4c0ff]/40 transition-colors flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between font-mono text-xs text-[#c4c0ff]">
                  <span>kingplayz1 / streetrush-telemetry</span>
                  <span className="material-symbols-outlined text-sm text-[#918fa1]">lock_open</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-white">
                  StreetRush Telemetry Core
                </h3>
                <p className="text-xs text-[#c7c4d8]">
                  Lightweight FiveM racing tick-sync engine with sub-millisecond serialization and NUI bridge bindings.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between bg-[#0e0e0e] px-3 py-2 rounded font-mono text-xs text-[#918fa1] border border-[#464555]/30">
                  <span className="truncate pr-2">git clone https://github.com/kingplayz1/streetrush-telemetry</span>
                  <button
                    onClick={() =>
                      copyGitClone(
                        'git clone https://github.com/kingplayz1/streetrush-telemetry.git',
                        'StreetRush'
                      )
                    }
                    className="text-[#c4c0ff] hover:text-white transition-colors cursor-pointer"
                    title="Copy command"
                  >
                    <span className="material-symbols-outlined text-base">content_copy</span>
                  </button>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-[#918fa1]">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#a2e7ff]"></span>Lua 91%
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#c4c0ff]"></span>C# 9%
                  </span>
                </div>
              </div>
            </div>

            {/* Repo 2 */}
            <div className="bg-[#201f1f] p-6 rounded-xl border border-[#464555]/30 hover:border-[#c4c0ff]/40 transition-colors flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between font-mono text-xs text-[#c4c0ff]">
                  <span>kingplayz1 / lavalink-audio-streamer</span>
                  <span className="material-symbols-outlined text-sm text-[#918fa1]">lock_open</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-white">
                  Lavalink Node Orchestrator
                </h3>
                <p className="text-xs text-[#c7c4d8]">
                  Automated multi-node load balancer and fallback manager for Discord bots handling heavy Opus audio traffic.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between bg-[#0e0e0e] px-3 py-2 rounded font-mono text-xs text-[#918fa1] border border-[#464555]/30">
                  <span className="truncate pr-2">git clone https://github.com/kingplayz1/lavalink-audio-streamer</span>
                  <button
                    onClick={() =>
                      copyGitClone(
                        'git clone https://github.com/kingplayz1/lavalink-audio-streamer.git',
                        'Lavalink Orchestrator'
                      )
                    }
                    className="text-[#c4c0ff] hover:text-white transition-colors cursor-pointer"
                    title="Copy command"
                  >
                    <span className="material-symbols-outlined text-base">content_copy</span>
                  </button>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-[#918fa1]">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#5ee151]"></span>TypeScript 84%
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#8781ff]"></span>Shell 16%
                  </span>
                </div>
              </div>
            </div>

            {/* Repo 3 */}
            <div className="bg-[#201f1f] p-6 rounded-xl border border-[#464555]/30 hover:border-[#c4c0ff]/40 transition-colors flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between font-mono text-xs text-[#c4c0ff]">
                  <span>kingplayz1 / edge-status-probe</span>
                  <span className="material-symbols-outlined text-sm text-[#918fa1]">lock_open</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-white">
                  DG Edge Latency Probe
                </h3>
                <p className="text-xs text-[#c7c4d8]">
                  Synthetic edge health probe running serverless micro-checks with discord webhook alerts and uptime logging.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between bg-[#0e0e0e] px-3 py-2 rounded font-mono text-xs text-[#918fa1] border border-[#464555]/30">
                  <span className="truncate pr-2">git clone https://github.com/kingplayz1/edge-status-probe</span>
                  <button
                    onClick={() =>
                      copyGitClone(
                        'git clone https://github.com/kingplayz1/edge-status-probe.git',
                        'DG Edge Probe'
                      )
                    }
                    className="text-[#c4c0ff] hover:text-white transition-colors cursor-pointer"
                    title="Copy command"
                  >
                    <span className="material-symbols-outlined text-base">content_copy</span>
                  </button>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-[#918fa1]">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#a2e7ff]"></span>React 62%
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#c4c0ff]"></span>Node.js 38%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Callout Banner */}
      <section className="max-w-[1440px] mx-auto px-6 w-full py-16">
        <div className="relative rounded-2xl bg-[#201f1f] p-8 md:p-12 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-[#464555]/30">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#c4c0ff]/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-[#a2e7ff]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col gap-2 max-w-2xl relative z-10">
            <div className="flex items-center gap-2 font-mono text-xs text-[#5ee151]">
              <span className="w-2 h-2 rounded-full bg-[#5ee151] animate-pulse"></span>
              <span className="uppercase tracking-widest">
                CURRENT AVAILABILITY: IMMEDIATE SPRINT SLOTS
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white uppercase tracking-tight">
              Have a Complex System to Architect?
            </h2>
            <p className="text-sm md:text-base text-[#c7c4d8]">
              Whether you need low-latency game systems, resilient audio bots, or high-performance WebGL user interfaces, let's build something extraordinary together.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 relative z-10">
            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 bg-white text-black font-mono text-xs uppercase font-bold tracking-wider rounded-lg shadow-xl hover:bg-[#c4c0ff] hover:text-black transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>START A PROJECT</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-[#2a2a2a] hover:bg-[#353534] text-white font-mono text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 border border-[#464555]/30"
            >
              <span className="material-symbols-outlined text-sm text-[#a2e7ff]">chat</span>
              <span>DISCORD DIRECT</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
