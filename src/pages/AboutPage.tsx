import React, { useState, useEffect } from 'react';
import { Milestone, RigTool } from '../types';
import { MILESTONES_DATA, RIG_TOOLS } from '../data/portfolioData';

interface AboutPageProps {
  onOpenContact: () => void;
  onShowToast: (msg: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenContact,
  onShowToast,
}) => {
  // Dual discipline state
  const [activeDiscipline, setActiveDiscipline] = useState<'dev' | 'edit'>('dev');

  // AST packet burst feedback state
  const [astStatus, setAstStatus] = useState(
    'State Store: In-Memory RingBuffer [Alloc: 142KB • Packet Drop: 0.00%]'
  );

  // Selected Milestone state
  const [selectedMilestoneId, setSelectedMilestoneId] = useState('streetrush');
  const selectedMilestone =
    MILESTONES_DATA.find((m) => m.id === selectedMilestoneId) || MILESTONES_DATA[3];

  // Inspected Rig Tool state
  const [inspectedTool, setInspectedTool] = useState<RigTool>(RIG_TOOLS[0]);

  // Terminal stats & console state
  const [totalUptimeSeconds, setTotalUptimeSeconds] = useState(
    1248 * 3600 + 42 * 60 + 14
  );
  const [pingJitter, setPingJitter] = useState(14);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLines, setTerminalLines] = useState<string[]>([
    '// Interactive Dossier Diagnostics Shell v2.4',
    '<span class="text-[#5ee151]">guest@princebhakta:~$</span> sys-query --mode=deep-inspection',
    '[OK] Systems nominal. Low-latency state replication active. Motion physics calibrated. Type \'help\' for runnable diagnostics.'
  ]);

  // Live uptime counter
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Ping jitter
  useEffect(() => {
    const pingTimer = setInterval(() => {
      setPingJitter(Math.floor(Math.random() * 5) + 12);
    }, 2400);
    return () => clearInterval(pingTimer);
  }, []);

  const formatUptime = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs.toLocaleString()}h ${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  };

  const handleSimulateBurst = () => {
    setAstStatus('Burst dispatched: 64 packets serialized in 0.18ms • 0 drops');
    onShowToast('Emitted 64 state packets across virtual WebSocket mesh');
    setTimeout(() => {
      setAstStatus('State Store: In-Memory RingBuffer [Alloc: 142KB • Packet Drop: 0.00%]');
    }, 3500);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = terminalInput.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    const newLines = [
      ...terminalLines,
      `<span class="text-[#5ee151]">guest@princebhakta:~$</span> <span class="text-white">${raw}</span>`
    ];

    if (cmd === 'clear') {
      setTerminalLines(['// Terminal buffer cleared. Type \'help\' for commands.']);
      setTerminalInput('');
      return;
    }

    if (cmd === 'help') {
      newLines.push(`<span class="text-[#918fa1]">Available commands:</span>
  <span class="text-[#a2e7ff]">sys-query</span> - Run full architecture inspection
  <span class="text-[#a2e7ff]">ping</span>      - Measure live latency to edge nodes
  <span class="text-[#a2e7ff]">stack</span>     - List core languages and engines
  <span class="text-[#a2e7ff]">mode</span>      - Toggle Developer / Creative mindset
  <span class="text-[#a2e7ff]">contact</span>   - Trigger direct connection modal
  <span class="text-[#a2e7ff]">clear</span>     - Clear terminal buffer`);
    } else if (cmd === 'sys-query') {
      newLines.push(
        `<span class="text-[#c4c0ff]">[SYS_REPORT]</span> Status: NORMAL | Memory: 142KB alloc | Sockets: Active | Concurrency: 200+ | Audio Ducking: Enabled`
      );
    } else if (cmd === 'ping') {
      const p = Math.floor(Math.random() * 4) + 12;
      newLines.push(
        `<span class="text-[#5ee151]">[PONG]</span> 64 bytes from 1.1.1.1 (Cloudflare Edge): icmp_seq=1 time=${p}.4ms (Jitter: 0.2ms)`
      );
    } else if (cmd === 'stack') {
      newLines.push(
        `<span class="text-[#a2e7ff]">LANGUAGES:</span> LuaJIT, TypeScript, JavaScript, SQL, GLSL<br/><span class="text-[#a2e7ff]">ENGINES/MEDIA:</span> Node.js, Redis, FiveM, Premiere Pro, After Effects, DaVinci Resolve Studio`
      );
    } else if (cmd === 'mode') {
      setActiveDiscipline((prev) => (prev === 'dev' ? 'edit' : 'dev'));
      newLines.push(
        `<span class="text-[#5ee151]">[OK]</span> Toggled active mindset view to: <span class="text-[#c4c0ff] font-bold">${
          activeDiscipline === 'dev' ? 'CREATIVE' : 'DEVELOPER'
        }</span>`
      );
    } else if (cmd === 'contact') {
      onOpenContact();
      newLines.push(`<span class="text-[#5ee151]">[OK]</span> Direct transmission modal opened.`);
    } else {
      newLines.push(`<span class="text-red-400">Command not recognized: '${raw}'. Type 'help' for options.</span>`);
    }

    setTerminalLines(newLines);
    setTerminalInput('');
  };

  const copySnippet = (text: string, msg: string) => {
    navigator.clipboard.writeText(text).then(() => {
      onShowToast(msg);
    });
  };

  return (
    <div className="w-full bg-[#0e0e0e] min-h-screen text-[#e5e2e1] pb-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#c4c0ff]/10 blur-[130px] pointer-events-none rounded-full animate-glow"></div>
      <div className="absolute top-48 right-12 w-[380px] h-[240px] bg-[#00d2fd]/5 blur-[110px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col gap-14 relative z-10">
        {/* 1. HERO IDENTITY STATEMENT */}
        <section className="pt-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#201f1f] text-[#c4c0ff] font-mono text-xs uppercase tracking-widest border border-[#c4c0ff]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c4c0ff] animate-pulse"></span>
                DOSSIER // 01-PHILOSOPHY
              </div>
              <span className="font-mono text-xs text-[#918fa1] tracking-wider">
                LAT: 23.0225° N • LON: 72.5714° E
              </span>
              <span className="font-mono text-xs text-[#5ee151] hidden sm:inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5ee151]"></span>
                STATUS: ONLINE / ENGAGED
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white leading-[0.92] max-w-5xl mt-2">
              Builder. Creative.{' '}
              <span className="text-[#c4c0ff]">
                {activeDiscipline === 'dev' ? 'Craftsman.' : 'Director.'}
              </span>
            </h1>

            <p className="text-[#c7c4d8] text-base md:text-lg max-w-3xl mt-1 leading-relaxed">
              Bridging low-level systems engineering with cinematic visual storytelling. Obsessed with microsecond responsiveness in runtime systems and micro-frame precision in motion design.
            </p>
          </div>

          {/* Hero Visual Composition with Portrait Frame & Telemetry */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Portrait Frame */}
            <div className="lg:col-span-8 relative rounded-xl overflow-hidden bg-[#1c1b1b] shadow-2xl group min-h-[380px] lg:min-h-[460px] flex flex-col justify-end border border-[#464555]/30">
              <img
                src="/prince.png"
                alt="Prince Bhakta portrait workspace visualization"
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 group-hover:scale-[1.02] group-hover:filter group-hover:grayscale-[30%] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e]/80 via-transparent to-[#0e0e0e]/40"></div>

              {/* Technical HUD Overlays */}
              <div className="relative z-10 p-6 flex flex-col justify-between h-full pointer-events-none">
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-xs text-[#a2e7ff] bg-[#0e0e0e]/80 backdrop-blur-md px-3 py-1 rounded border border-[#464555]/40">
                    SYS://PRINCE_BHAKTA_CANVAS
                  </span>
                  <span className="font-mono text-xs text-[#918fa1] tracking-widest uppercase">
                    ID: 884-PBX-SYS • 23°N 72°E
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-16">
                  <div>
                    <p className="font-mono text-xs text-[#a2e7ff] uppercase tracking-widest mb-1">
                      CRAFT MANIFESTO
                    </p>
                    <p className="font-display font-semibold text-lg text-white max-w-lg leading-snug">
                      "Code is architecture. Motion is choreography. True craft lives in their convergence."
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#c7c4d8] font-mono text-xs bg-[#0e0e0e]/85 backdrop-blur-md px-3 py-1.5 rounded self-start sm:self-auto border border-[#464555]/30">
                    <span className="material-symbols-outlined text-[#a2e7ff] text-[16px]">terminal</span>
                    <span>
                      {activeDiscipline === 'dev'
                        ? 'ARCH: RUNTIME_LUA_TS_NET'
                        : 'ARCH: TIMELINE_NON_LINEAR_VFX'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric Telemetry Cards */}
            <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
              {/* Card 1: Equilibrium Telemetry */}
              <div className="bg-[#201f1f] p-6 rounded-xl flex flex-col justify-between shadow-lg border border-[#464555]/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#918fa1] uppercase tracking-wider flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#c4c0ff] text-base">tune</span>
                    EQUILIBRIUM TELEMETRY
                  </span>
                  <span className="font-mono text-xs text-[#c4c0ff]">
                    {activeDiscipline === 'dev' ? '75 / 25 [DEV]' : '25 / 75 [CREATIVE]'}
                  </span>
                </div>

                <div className="space-y-4 my-auto">
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1.5">
                      <span className="text-[#e5e2e1]">Systems &amp; Lua Networking</span>
                      <span className="text-[#a2e7ff] font-bold">
                        {activeDiscipline === 'dev' ? '75%' : '25%'}
                      </span>
                    </div>
                    <div className="w-full bg-[#353534] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#a2e7ff] h-full rounded-full transition-all duration-700 ease-out"
                        style={{ width: activeDiscipline === 'dev' ? '75%' : '25%' }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1.5">
                      <span className="text-[#e5e2e1]">Editorial Motion &amp; Audio Pacing</span>
                      <span className="text-[#c4c0ff] font-bold">
                        {activeDiscipline === 'dev' ? '25%' : '75%'}
                      </span>
                    </div>
                    <div className="w-full bg-[#353534] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#c4c0ff] h-full rounded-full transition-all duration-700 ease-out"
                        style={{ width: activeDiscipline === 'dev' ? '25%' : '75%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 text-xs text-[#c7c4d8] font-mono border-t border-[#464555]/20 mt-4">
                  <span>Dynamic balance synced to active view</span>
                  <button
                    onClick={() =>
                      setActiveDiscipline((prev) => (prev === 'dev' ? 'edit' : 'dev'))
                    }
                    className="text-[#a2e7ff] hover:underline cursor-pointer uppercase text-[11px]"
                  >
                    Cycle [TAB]
                  </button>
                </div>
              </div>

              {/* Card 2: Micro-Stat Strip */}
              <div className="bg-[#201f1f] p-6 rounded-xl flex flex-col justify-between shadow-lg border border-[#464555]/30">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#918fa1] uppercase tracking-wider">
                    SYSTEM TELEMETRY
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#5ee151] animate-pulse"></span>
                </div>
                <div className="grid grid-cols-2 gap-3 my-4">
                  <div className="p-3 rounded bg-[#1c1b1b] border border-[#464555]/20">
                    <span className="font-mono text-[10px] text-[#918fa1] block">TOTAL COMMITS</span>
                    <span className="font-mono text-2xl font-bold text-white tracking-tight">
                      4,820+
                    </span>
                  </div>
                  <div className="p-3 rounded bg-[#1c1b1b] border border-[#464555]/20">
                    <span className="font-mono text-[10px] text-[#918fa1] block">FRAMES RENDERED</span>
                    <span className="font-mono text-2xl font-bold text-[#c4c0ff] tracking-tight">
                      2.4M
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between font-mono text-xs text-[#c7c4d8]">
                  <span>LATENCY TOLERANCE</span>
                  <span className="text-[#a2e7ff]">&lt; 16.6ms (60 FPS)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE DUAL DISCIPLINE */}
        <section className="flex flex-col gap-6" id="discipline-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`w-2 h-2 rounded-full ${
                    activeDiscipline === 'dev' ? 'bg-[#a2e7ff]' : 'bg-[#c4c0ff]'
                  }`}
                ></span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#c4c0ff]">
                  {activeDiscipline === 'dev'
                    ? 'PARALLEL ARCHITECTURES // DEVELOPER FOCUS ACTIVE'
                    : 'PARALLEL ARCHITECTURES // MOTION & CREATIVE FOCUS ACTIVE'}
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
                The Dual Discipline
              </h2>
            </div>

            {/* Pill Tab Switcher */}
            <div className="flex items-center p-1 bg-[#2a2a2a] rounded-lg border border-[#464555]/30">
              <button
                type="button"
                onClick={() => setActiveDiscipline('dev')}
                className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeDiscipline === 'dev'
                    ? 'bg-[#c4c0ff] text-[#2000a4] font-bold shadow-sm'
                    : 'text-[#c7c4d8] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-sm">terminal</span>
                <span>Developer Mindset</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveDiscipline('edit')}
                className={`px-4 py-2 rounded font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeDiscipline === 'edit'
                    ? 'bg-[#c4c0ff] text-[#2000a4] font-bold shadow-sm'
                    : 'text-[#c7c4d8] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-sm">movie_filter</span>
                <span>Editor &amp; Creator Eye</span>
              </button>
            </div>
          </div>

          {/* Tab Content 1: Developer Mindset */}
          {activeDiscipline === 'dev' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-[#201f1f] p-6 rounded-xl shadow-lg flex flex-col justify-between border border-[#464555]/20 hover:border-[#a2e7ff]/40 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded bg-[#a2e7ff]/10 flex items-center justify-center text-[#a2e7ff] mb-4 border border-[#a2e7ff]/20">
                      <span className="material-symbols-outlined">speed</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">
                      Low-Latency Runtime
                    </h3>
                    <p className="text-sm text-[#c7c4d8] leading-relaxed">
                      Every millisecond of serialization delay disrupts immersion. I architect multiplayer packet flows, custom delta compression, and LuaJIT state stores optimized for heavy concurrency.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#a2e7ff] rounded border border-[#464555]/20">
                      WebSocket
                    </span>
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#a2e7ff] rounded border border-[#464555]/20">
                      Lua State Engine
                    </span>
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#a2e7ff] rounded border border-[#464555]/20">
                      Redis In-Memory
                    </span>
                  </div>
                </div>

                <div className="bg-[#201f1f] p-6 rounded-xl shadow-lg flex flex-col justify-between border border-[#464555]/20 hover:border-[#a2e7ff]/40 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded bg-[#a2e7ff]/10 flex items-center justify-center text-[#a2e7ff] mb-4 border border-[#a2e7ff]/20">
                      <span className="material-symbols-outlined">account_tree</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">
                      Resilient Topology
                    </h3>
                    <p className="text-sm text-[#c7c4d8] leading-relaxed">
                      Clean event boundaries and defensive state synchronization. From Discord real-time audio routing to distributed game nodes, systems must heal automatically on network jitter.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#a2e7ff] rounded border border-[#464555]/20">
                      Node.js Workers
                    </span>
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#a2e7ff] rounded border border-[#464555]/20">
                      Event-Driven
                    </span>
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#a2e7ff] rounded border border-[#464555]/20">
                      Docker Clusters
                    </span>
                  </div>
                </div>

                <div className="bg-[#201f1f] p-6 rounded-xl shadow-lg flex flex-col justify-between border border-[#464555]/20 hover:border-[#a2e7ff]/40 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded bg-[#a2e7ff]/10 flex items-center justify-center text-[#a2e7ff] mb-4 border border-[#a2e7ff]/20">
                      <span className="material-symbols-outlined">data_object</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">
                      TypeScript &amp; Lua Ergonomics
                    </h3>
                    <p className="text-sm text-[#c7c4d8] leading-relaxed">
                      Type-safe boundaries on the web layer paired with blazing micro-executions in Lua. No redundant abstraction layers; just readable, testable, and deeply maintainable codebases.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#a2e7ff] rounded border border-[#464555]/20">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#a2e7ff] rounded border border-[#464555]/20">
                      Clean Modular
                    </span>
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#a2e7ff] rounded border border-[#464555]/20">
                      Strict Schema
                    </span>
                  </div>
                </div>
              </div>

              {/* AST Simulator Box */}
              <div className="bg-[#1c1b1b] rounded-xl p-6 border border-[#464555]/30">
                <div className="flex items-center justify-between pb-3 border-b border-[#464555]/30 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a2e7ff] text-lg">terminal</span>
                    <span className="font-mono text-xs text-white">
                      LIVE_RUNTIME_AST // deltaSyncEngine.lua
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#5ee151]/10 text-[#5ee151] font-mono text-[10px] border border-[#5ee151]/30">
                      0.42ms Tick
                    </span>
                  </div>
                  <button
                    onClick={handleSimulateBurst}
                    className="px-3 py-1 rounded bg-[#201f1f] text-[#a2e7ff] text-xs font-mono hover:bg-[#2a2a2a] transition-colors flex items-center gap-1.5 border border-[#464555]/30 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">refresh</span>
                    <span>Simulate Packet Burst</span>
                  </button>
                </div>

                <pre className="font-mono text-xs text-[#c7c4d8] overflow-x-auto p-4 bg-[#0e0e0e] rounded border border-[#464555]/20 leading-relaxed whitespace-pre">
                  <code className="text-[#a2e7ff]">-- Synchronize high-velocity FiveM player transforms with zero memory alloc</code>
                  <br />
                  <span className="text-[#918fa1]">function</span>{' '}
                  <span className="text-[#c4c0ff]">SyncManager:BroadcastDelta</span>(entityId, currentTransform, tickRate)
                  <br />
                  &nbsp;&nbsp;<span className="text-[#918fa1]">local</span> delta ={' '}
                  <span className="text-[#5ee151]">CompressDelta</span>(self.lastFrames[entityId], currentTransform)
                  <br />
                  &nbsp;&nbsp;<span className="text-[#918fa1]">if</span> delta.hasShift <span className="text-[#918fa1]">then</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;SocketNode:emitFast(<span className="text-[#b4ebff]">"STATE_SYNC"</span>, {'{'} id = entityId, d = delta.bytes {'}'})
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.metrics.packetsDispatched = self.metrics.packetsDispatched + <span className="text-[#5ee151]">1</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-[#918fa1]">end</span>
                  <br />
                  <span className="text-[#918fa1]">end</span>
                </pre>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[#918fa1] font-mono text-xs">
                  <span>{astStatus}</span>
                  <span className="text-[#a2e7ff]">Compiler Target: LuaJIT 2.1-rolling x86_64</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Editor & Creator Eye */}
          {activeDiscipline === 'edit' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-[#201f1f] p-6 rounded-xl shadow-lg flex flex-col justify-between border border-[#464555]/20 hover:border-[#c4c0ff]/40 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded bg-[#c4c0ff]/10 flex items-center justify-center text-[#c4c0ff] mb-4 border border-[#c4c0ff]/20">
                      <span className="material-symbols-outlined">pace</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">
                      Frame Pacing &amp; Tension
                    </h3>
                    <p className="text-sm text-[#c7c4d8] leading-relaxed">
                      Every cut is an intentional compression or expansion of time. Cutting on beat isn't enough; editing is psychological rhythm—guiding viewer tension with precision micro-pauses.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#c4c0ff] rounded border border-[#464555]/20">
                      J-Cuts / L-Cuts
                    </span>
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#c4c0ff] rounded border border-[#464555]/20">
                      24fps vs 60fps
                    </span>
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#c4c0ff] rounded border border-[#464555]/20">
                      Retention Physics
                    </span>
                  </div>
                </div>

                <div className="bg-[#201f1f] p-6 rounded-xl shadow-lg flex flex-col justify-between border border-[#464555]/20 hover:border-[#c4c0ff]/40 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded bg-[#c4c0ff]/10 flex items-center justify-center text-[#c4c0ff] mb-4 border border-[#c4c0ff]/20">
                      <span className="material-symbols-outlined">timeline</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">
                      Keyframe Curves &amp; Weight
                    </h3>
                    <p className="text-sm text-[#c7c4d8] leading-relaxed">
                      Avoiding linear easing like a plague. Using cubic bezier math to simulate natural mass, bounce, inertia, and visceral kinetic energy across custom graphic transitions.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#c4c0ff] rounded border border-[#464555]/20">
                      Bezier Easing
                    </span>
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#c4c0ff] rounded border border-[#464555]/20">
                      Optical Flow
                    </span>
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#c4c0ff] rounded border border-[#464555]/20">
                      Motion Physics
                    </span>
                  </div>
                </div>

                <div className="bg-[#201f1f] p-6 rounded-xl shadow-lg flex flex-col justify-between border border-[#464555]/20 hover:border-[#c4c0ff]/40 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded bg-[#c4c0ff]/10 flex items-center justify-center text-[#c4c0ff] mb-4 border border-[#c4c0ff]/20">
                      <span className="material-symbols-outlined">graphic_eq</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-2">
                      Audio Hierarchy &amp; Bass
                    </h3>
                    <p className="text-sm text-[#c7c4d8] leading-relaxed">
                      Sound delivers 70% of impact. Layered sub-bass drops, riser automation, sidechain ducking, and surgical audio design that amplifies every pixel on screen.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#c4c0ff] rounded border border-[#464555]/20">
                      Parametric EQ
                    </span>
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#c4c0ff] rounded border border-[#464555]/20">
                      Sidechain Mix
                    </span>
                    <span className="px-2 py-1 bg-[#0e0e0e] font-mono text-xs text-[#c4c0ff] rounded border border-[#464555]/20">
                      Foley Design
                    </span>
                  </div>
                </div>
              </div>

              {/* Cadence Experience Box */}
              <div className="bg-[#1c1b1b] rounded-xl p-6 border border-[#464555]/30">
                <div className="flex items-center justify-between pb-3 border-b border-[#464555]/30 mb-4 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#c4c0ff] text-lg">equalizer</span>
                    <span className="text-white">
                      CADENCE_EXPERIENCE // Timeline Waveform &amp; Bezier Curve
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#c4c0ff]/10 text-[#c4c0ff] text-[10px] border border-[#c4c0ff]/30">
                      23.976 Cinema fps
                    </span>
                  </div>
                  <span className="text-[#c4c0ff]">Cubic-Bezier(0.16, 1, 0.3, 1)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#0e0e0e] rounded border border-[#464555]/20 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[#918fa1] font-mono text-xs">
                      <span>PHYSICS BEZIER VELOCITY</span>
                      <span className="text-[#5ee151]">IMPULSE PEAK: 92%</span>
                    </div>
                    <div className="h-16 w-full flex items-end gap-1 pt-2">
                      <div className="flex-1 bg-[#c4c0ff]/20 h-[10%] rounded-t"></div>
                      <div className="flex-1 bg-[#c4c0ff]/30 h-[25%] rounded-t"></div>
                      <div className="flex-1 bg-[#c4c0ff]/50 h-[55%] rounded-t"></div>
                      <div className="flex-1 bg-[#c4c0ff]/80 h-[85%] rounded-t"></div>
                      <div className="flex-1 bg-[#c4c0ff] h-[100%] rounded-t shadow-[0_0_8px_rgba(196,192,255,0.6)]"></div>
                      <div className="flex-1 bg-[#c4c0ff]/90 h-[75%] rounded-t"></div>
                      <div className="flex-1 bg-[#c4c0ff]/70 h-[45%] rounded-t"></div>
                      <div className="flex-1 bg-[#c4c0ff]/50 h-[30%] rounded-t"></div>
                      <div className="flex-1 bg-[#c4c0ff]/30 h-[20%] rounded-t"></div>
                      <div className="flex-1 bg-[#c4c0ff]/10 h-[8%] rounded-t"></div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#0e0e0e] rounded border border-[#464555]/20 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[#918fa1] font-mono text-xs">
                      <span>AUDIO FREQUENCY TRANSIENTS</span>
                      <span className="text-[#a2e7ff]">SUB-BASS: 42Hz</span>
                    </div>
                    <div className="flex items-center gap-1 h-16 px-1">
                      <div className="flex-1 bg-[#a2e7ff]/80 h-[90%] rounded-sm animate-pulse"></div>
                      <div className="flex-1 bg-[#a2e7ff]/60 h-[70%] rounded-sm"></div>
                      <div className="flex-1 bg-[#a2e7ff]/50 h-[50%] rounded-sm"></div>
                      <div className="flex-1 bg-[#a2e7ff]/40 h-[30%] rounded-sm"></div>
                      <div className="flex-1 bg-[#a2e7ff]/90 h-[95%] rounded-sm animate-pulse"></div>
                      <div className="flex-1 bg-[#a2e7ff]/70 h-[75%] rounded-sm"></div>
                      <div className="flex-1 bg-[#a2e7ff]/40 h-[40%] rounded-sm"></div>
                      <div className="flex-1 bg-[#a2e7ff]/20 h-[15%] rounded-sm"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex justify-between items-center text-[#918fa1] font-mono text-xs">
                  <span>Pacing Philosophy: Every cut carries momentum; no dead frames allowed.</span>
                  <span className="text-[#c4c0ff]">Mastering Suite: Premiere + Resolve + AE</span>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 3. THE JOURNEY (CHRONICLE // CONTINUOUS EVOLUTION) */}
        <section className="flex flex-col gap-6" id="journey-section">
          <div>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="font-mono text-xs text-[#a2e7ff] uppercase tracking-widest block mb-1">
                  CHRONICLE // CONTINUOUS EVOLUTION
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
                  The Journey
                </h2>
              </div>
              <span className="text-[#918fa1] font-mono text-xs hidden sm:block">
                CLICK ANY ERA TO EXPAND ENGINEERING DOSSIER
              </span>
            </div>
            <p className="text-sm text-[#c7c4d8] max-w-2xl mt-1">
              From dismantling early game files to orchestrating high-concurrency multiplayer stacks and cinematic productions. Select a milestone for technical logs.
            </p>
          </div>

          {/* Milestone Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {MILESTONES_DATA.map((milestone) => {
              const isSelected = selectedMilestoneId === milestone.id;
              return (
                <div
                  key={milestone.id}
                  onClick={() => {
                    setSelectedMilestoneId(milestone.id);
                    onShowToast(`Inspecting Dossier: ${milestone.title}`);
                  }}
                  className={`p-6 rounded-xl shadow-lg flex flex-col justify-between cursor-pointer transition-all duration-300 relative group border ${
                    isSelected
                      ? 'bg-[#2a2a2a] border-[#c4c0ff] border-2 shadow-xl'
                      : 'bg-[#201f1f] border-[#464555]/30 hover:border-[#c4c0ff]/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 font-mono text-xs">
                      <span className="text-[#a2e7ff] font-semibold tracking-wider">
                        {milestone.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#353534] text-[#918fa1]">
                        {milestone.era}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-[#c4c0ff] transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-[#c7c4d8] leading-relaxed">
                      {milestone.shortDesc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 flex items-center justify-between border-t border-[#464555]/20 font-mono text-xs">
                    <span className="text-[#5ee151] uppercase">Explore</span>
                    <span className="material-symbols-outlined text-sm text-[#918fa1] group-hover:text-[#c4c0ff] transition-colors">
                      read_more
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expanded Milestone Dossier Box */}
          <div className="bg-[#1c1b1b] rounded-xl p-6 md:p-8 border border-[#464555]/40 shadow-xl transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#464555]/20 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-[#201f1f] text-[#a2e7ff] border border-[#a2e7ff]/30">
                  ERA_LOG // {selectedMilestone.era}
                </span>
                <h4 className="font-display font-bold text-lg md:text-xl text-white">
                  {selectedMilestone.title}
                </h4>
              </div>
              <div className="flex items-center gap-2 text-[#918fa1]">
                <span>STATUS:</span>
                <span className="text-[#5ee151] font-semibold">{selectedMilestone.status}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-4 rounded bg-[#201f1f] border border-[#464555]/20">
                <span className="font-mono text-xs text-[#918fa1] block mb-1">KEY BREAKTHROUGH</span>
                <p className="text-xs text-[#e5e2e1] leading-relaxed">
                  {selectedMilestone.breakthrough}
                </p>
              </div>

              <div className="p-4 rounded bg-[#201f1f] border border-[#464555]/20">
                <span className="font-mono text-xs text-[#918fa1] block mb-1">
                  TECHNOLOGY UNLOCKED
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedMilestone.techTags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-[#0e0e0e] text-[#c4c0ff] text-xs font-mono rounded border border-[#464555]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded bg-[#201f1f] border border-[#464555]/20">
                <span className="font-mono text-xs text-[#918fa1] block mb-1">
                  ARCHITECTURAL LESSON
                </span>
                <p className="text-xs text-[#c7c4d8] leading-relaxed italic">
                  "{selectedMilestone.lesson}"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PHILOSOPHY MANIFESTO */}
        <section className="w-full">
          <div className="bg-[#1c1b1b] rounded-2xl p-8 lg:p-14 relative overflow-hidden shadow-2xl border border-[#464555]/30">
            <div className="absolute inset-0 bg-gradient-to-r from-[#c4c0ff]/5 via-transparent to-[#a2e7ff]/5 pointer-events-none"></div>
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
              <span className="font-mono text-xs text-[#c4c0ff] uppercase tracking-widest mb-3">
                PHILOSOPHY MANIFESTO
              </span>
              <blockquote className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tighter uppercase leading-tight">
                "Building things I want to exist. No bloat, zero friction, relentless attention to craft and frame timing."
              </blockquote>
              <p className="text-base text-[#c7c4d8] mt-6 max-w-2xl leading-relaxed">
                Software is disposable when it lacks soul; videos are forgotten when they prioritize quantity over resonance. Every project I touch is treated as a lasting digital artifact engineered to withstand scrutiny.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-[#918fa1]">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#5ee151]">✓</span> ZERO BLOAT PRINCIPLE
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#5ee151]">✓</span> FRAME-PERFECT PACING
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#5ee151]">✓</span> ASYNC-FIRST ARCHITECTURE
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#a2e7ff]">✓</span> 100% OWNED STACK
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. THE RIG & WORKSPACE */}
        <section className="flex flex-col gap-6" id="rig-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#c4c0ff] uppercase tracking-widest block mb-1">
                ARSENAL &amp; HARDWARE // CLICK ANY TOOL FOR TELEMETRY
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
                The Rig &amp; Workspace
              </h2>
            </div>
            <p className="text-xs text-[#c7c4d8] max-w-md">
              Calibrated toolchain designed for rapid compilation and stutter-free timeline playback under heavy load.
            </p>
          </div>

          {/* Live Tool Telemetry Inspector HUD */}
          <div className="bg-[#2a2a2a] rounded-xl p-5 border border-[#c4c0ff]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-[#c4c0ff]/20 flex items-center justify-center text-[#c4c0ff] shrink-0">
                <span className="material-symbols-outlined text-2xl">{inspectedTool.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg text-white">
                    {inspectedTool.name}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#0e0e0e] font-mono text-[11px] text-[#a2e7ff] border border-[#464555]/30">
                    {inspectedTool.tier}
                  </span>
                </div>
                <p className="text-xs text-[#c7c4d8] mt-1">{inspectedTool.desc}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 self-end md:self-auto font-mono text-right shrink-0">
              <div>
                <span className="text-[#918fa1] text-[10px] block uppercase">CALIBRATION SPEC</span>
                <span className="text-[#5ee151] text-xs font-semibold">{inspectedTool.spec}</span>
              </div>
              <div className="h-8 w-px bg-[#464555]/30"></div>
              <div>
                <span className="text-[#918fa1] text-[10px] block uppercase">STATUS</span>
                <span className="text-[#c4c0ff] text-xs font-semibold">{inspectedTool.status}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Development Column */}
            <div className="bg-[#201f1f] p-6 rounded-xl shadow-lg flex flex-col justify-between border border-[#464555]/20">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-semibold text-lg text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#c4c0ff] text-xl">code</span>
                    Development
                  </span>
                  <span className="font-mono text-xs text-[#918fa1]">TIER-01</span>
                </div>
                <ul className="space-y-2 font-mono text-xs text-[#c7c4d8]">
                  {RIG_TOOLS.filter((t) => t.category === 'dev').map((tool) => (
                    <li
                      key={tool.name}
                      onClick={() => {
                        setInspectedTool(tool);
                        onShowToast(`Loaded Specs: ${tool.name}`);
                      }}
                      className="flex items-center justify-between p-2.5 rounded bg-[#1c1b1b] hover:bg-[#2a2a2a] cursor-pointer transition-colors border border-[#464555]/20 hover:border-[#c4c0ff]/40"
                    >
                      <span className="font-semibold text-white">{tool.name}</span>
                      <span className="text-[10px] text-[#918fa1] uppercase">SPEC</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-3 flex justify-between items-center text-[#918fa1] font-mono text-xs border-t border-[#464555]/20">
                <span>UPTIME AVERAGE</span>
                <span className="text-[#5ee151]">99.98%</span>
              </div>
            </div>

            {/* Creative Column */}
            <div className="bg-[#201f1f] p-6 rounded-xl shadow-lg flex flex-col justify-between border border-[#464555]/20">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-semibold text-lg text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#a2e7ff] text-xl">movie_edit</span>
                    Creative &amp; Motion
                  </span>
                  <span className="font-mono text-xs text-[#918fa1]">TIER-02</span>
                </div>
                <ul className="space-y-2 font-mono text-xs text-[#c7c4d8]">
                  {RIG_TOOLS.filter((t) => t.category === 'creative').map((tool) => (
                    <li
                      key={tool.name}
                      onClick={() => {
                        setInspectedTool(tool);
                        onShowToast(`Loaded Specs: ${tool.name}`);
                      }}
                      className="flex items-center justify-between p-2.5 rounded bg-[#1c1b1b] hover:bg-[#2a2a2a] cursor-pointer transition-colors border border-[#464555]/20 hover:border-[#a2e7ff]/40"
                    >
                      <span className="font-semibold text-white">{tool.name}</span>
                      <span className="text-[10px] text-[#918fa1] uppercase">SPEC</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-3 flex justify-between items-center text-[#918fa1] font-mono text-xs border-t border-[#464555]/20">
                <span>COLOR ACCURACY</span>
                <span className="text-[#a2e7ff]">DCI-P3 99%</span>
              </div>
            </div>

            {/* Hardware Column */}
            <div className="bg-[#201f1f] p-6 rounded-xl shadow-lg flex flex-col justify-between border border-[#464555]/20">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-semibold text-lg text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#c4c0ff] text-xl">developer_board</span>
                    Battle Station
                  </span>
                  <span className="font-mono text-xs text-[#918fa1]">HARDWARE</span>
                </div>
                <ul className="space-y-2 font-mono text-xs text-[#c7c4d8]">
                  {RIG_TOOLS.filter((t) => t.category === 'hardware').map((tool) => (
                    <li
                      key={tool.name}
                      onClick={() => {
                        setInspectedTool(tool);
                        onShowToast(`Loaded Specs: ${tool.name}`);
                      }}
                      className="flex items-center justify-between p-2.5 rounded bg-[#1c1b1b] hover:bg-[#2a2a2a] cursor-pointer transition-colors border border-[#464555]/20 hover:border-[#c4c0ff]/40"
                    >
                      <span className="font-semibold text-white">{tool.name}</span>
                      <span className="text-[10px] text-[#918fa1] uppercase">SPEC</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-3 flex justify-between items-center text-[#918fa1] font-mono text-xs border-t border-[#464555]/20">
                <span>PERFORMANCE INDEX</span>
                <span className="text-[#5ee151]">MAX LOAD READY</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. INTERACTIVE TERMINAL & SYSTEM STATS LIVE */}
        <section className="w-full" id="terminal-section">
          <div className="bg-[#1c1b1b] rounded-xl shadow-2xl p-6 border border-[#464555]/30">
            {/* Header bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#464555]/20 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                <span className="text-[#918fa1] ml-2">prince@station-01: ~/metrics</span>
              </div>
              <div className="flex items-center gap-3 text-[#918fa1]">
                <button
                  type="button"
                  onClick={() => setTerminalInput('help')}
                  className="px-2 py-0.5 rounded bg-[#201f1f] hover:bg-[#2a2a2a] text-[#a2e7ff] text-[11px] cursor-pointer"
                >
                  RUN: help
                </button>
                <span className="inline-flex items-center gap-1.5 text-[#5ee151]">
                  <span className="w-2 h-2 rounded-full bg-[#5ee151] animate-pulse"></span>
                  TELEMETRY: LIVE
                </span>
              </div>
            </div>

            {/* Telemetry Dashboard Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2">
              <div className="p-4 rounded bg-[#201f1f] flex flex-col justify-between border border-[#464555]/20">
                <span className="font-mono text-xs text-[#918fa1] uppercase">RUNTIME UPTIME</span>
                <span className="font-mono text-xl font-bold text-white mt-1">
                  {formatUptime(totalUptimeSeconds)}
                </span>
                <span className="font-mono text-[10px] text-[#5ee151] mt-1">
                  99.98% SLA Guaranteed
                </span>
              </div>
              <div className="p-4 rounded bg-[#201f1f] flex flex-col justify-between border border-[#464555]/20">
                <span className="font-mono text-xs text-[#918fa1] uppercase">LINES SYNCED</span>
                <span className="font-mono text-xl font-bold text-[#a2e7ff] mt-1">
                  342,810
                </span>
                <span className="font-mono text-[10px] text-[#918fa1] mt-1">
                  TypeScript • Lua • GLSL
                </span>
              </div>
              <div className="p-4 rounded bg-[#201f1f] flex flex-col justify-between border border-[#464555]/20">
                <span className="font-mono text-xs text-[#918fa1] uppercase">ACTIVE ENTERPRISES</span>
                <span className="font-mono text-xl font-bold text-[#c4c0ff] mt-1">
                  4 Active
                </span>
                <span className="font-mono text-[10px] text-[#c4c0ff] mt-1">
                  StreetRush + Audio Bot
                </span>
              </div>
              <div className="p-4 rounded bg-[#201f1f] flex flex-col justify-between border border-[#464555]/20">
                <span className="font-mono text-xs text-[#918fa1] uppercase">LIVE NETWORK PING</span>
                <div className="flex items-baseline gap-1 mt-1 font-mono">
                  <span className="text-xl font-bold text-[#5ee151]">{pingJitter}</span>
                  <span className="text-xs text-[#918fa1]">ms</span>
                </div>
                <span className="font-mono text-[10px] text-[#918fa1] mt-1">
                  Cloudflare Edge Route
                </span>
              </div>
            </div>

            {/* Console Output Screen */}
            <div className="mt-4 bg-[#0e0e0e] rounded-lg p-4 font-mono text-xs flex flex-col gap-2 min-h-[160px] max-h-[260px] overflow-y-auto border border-[#464555]/30">
              {terminalLines.map((line, idx) => (
                <div key={idx} dangerouslySetInnerHTML={{ __html: line }}></div>
              ))}
            </div>

            {/* Input form */}
            <form
              onSubmit={handleTerminalSubmit}
              className="mt-3 pt-2 flex items-center gap-2 font-mono text-xs border-t border-[#464555]/20"
            >
              <label htmlFor="term-in" className="text-[#5ee151] shrink-0 font-semibold">
                guest@princebhakta:~$
              </label>
              <input
                id="term-in"
                type="text"
                autoComplete="off"
                spellCheck={false}
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'sys-query', 'ping', 'stack', 'contact', 'clear', or 'help'..."
                className="w-full bg-transparent text-white focus:outline-none placeholder-[#918fa1]/60 text-xs font-mono border-none p-0"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-[#201f1f] hover:bg-[#2a2a2a] text-[#a2e7ff] text-xs uppercase shrink-0 rounded transition-colors cursor-pointer"
              >
                Run
              </button>
            </form>
          </div>
        </section>

        {/* 7. INITIATE DIRECT CONNECTION */}
        <section className="w-full">
          <div className="bg-[#201f1f] p-8 md:p-12 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#464555]/30">
            <div className="max-w-xl text-center lg:text-left">
              <span className="font-mono text-xs text-[#c4c0ff] uppercase tracking-widest block mb-2">
                NETWORK &amp; COLLABORATION
              </span>
              <h2 className="font-display font-bold text-3xl text-white uppercase tracking-tight">
                Initiate Direct Connection
              </h2>
              <p className="text-sm text-[#c7c4d8] mt-2 leading-relaxed">
                Whether for high-concurrency multiplayer backend architecture, non-linear video direction, or custom creative tooling—let's build something remarkable.
              </p>

              {/* Social Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => copySnippet('@kingplayz1', 'GitHub handle copied!')}
                  className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#353534] text-white rounded font-mono text-xs flex items-center gap-2 transition-colors border border-[#464555]/30 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm text-[#c4c0ff]">terminal</span>
                  <span>@kingplayz1</span>
                  <span className="material-symbols-outlined text-xs text-[#918fa1]">content_copy</span>
                </button>

                <a
                  href="https://youtube.com/@KINGPLAYZ008"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#353534] text-white rounded font-mono text-xs flex items-center gap-2 transition-colors border border-[#464555]/30"
                >
                  <span className="material-symbols-outlined text-sm text-red-500">play_circle</span>
                  <span>@KINGPLAYZ008</span>
                </a>

                <button
                  type="button"
                  onClick={() => copySnippet('kingplayz', 'Discord tag copied!')}
                  className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#353534] text-white rounded font-mono text-xs flex items-center gap-2 transition-colors border border-[#464555]/30 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm text-[#5ee151]">chat</span>
                  <span>Discord: kingplayz</span>
                  <span className="material-symbols-outlined text-xs text-[#918fa1]">content_copy</span>
                </button>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#353534] text-white rounded font-mono text-xs flex items-center gap-2 transition-colors border border-[#464555]/30"
                >
                  <span className="material-symbols-outlined text-sm text-[#a2e7ff]">badge</span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenContact}
              className="px-8 py-4 bg-white hover:bg-[#c4c0ff] text-black font-mono text-xs uppercase font-bold tracking-wider rounded-lg transition-all shadow-xl hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              <span>Send Direct Message</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
