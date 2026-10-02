import React, { useState } from 'react';
import { ProjectItem } from '../types';

interface CaseStudyDrawerProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({
  project,
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [simMode, setSimMode] = useState<'idle' | 'flood' | 'jitter'>('idle');

  if (!isOpen || !project) return null;

  const handleSimFlood = () => {
    setSimMode('flood');
    onShowToast('Simulating 10,000 pkts/s telemetry flood...');
  };

  const handleSimJitter = () => {
    setSimMode('jitter');
    onShowToast('Injected 50ms network jitter spike. Rollback active.');
  };

  const handleSimReset = () => {
    setSimMode('idle');
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.codeSnippet).then(() => {
      onShowToast('Source code copied to clipboard');
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0e0e0e]/80 backdrop-blur-md flex justify-end transition-opacity duration-300">
      <div className="flex-1 cursor-pointer" onClick={onClose}></div>
      <div
        className="w-full max-w-2xl bg-[#1c1b1b] border-l border-[#464555]/30 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#c4c0ff] uppercase tracking-wider font-semibold">
                {project.categoryLabel}
              </span>
              <span className="text-[#918fa1]">/</span>
              <span className="font-mono text-xs text-[#918fa1]">SYS-{project.num}</span>
              <span className="px-2 py-0.5 rounded bg-[#5ee151]/10 text-[#5ee151] border border-[#5ee151]/30 font-mono text-[10px] uppercase ml-1">
                LIVE PRODUCTION
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#201f1f] hover:bg-[#2a2a2a] text-[#e5e2e1] flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          {/* Title & Overview */}
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white uppercase tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-[#c7c4d8] mt-2 leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#201f1f] p-3 rounded-lg border border-[#464555]/20">
              <span className="font-mono text-[10px] text-[#918fa1] uppercase block">
                {project.stats.label1}
              </span>
              <span className="font-mono text-sm md:text-base font-bold text-[#a2e7ff] mt-0.5 block">
                {simMode === 'flood'
                  ? '128.4 TICK'
                  : simMode === 'jitter'
                  ? '58.2ms'
                  : project.stats.val1}
              </span>
            </div>
            <div className="bg-[#201f1f] p-3 rounded-lg border border-[#464555]/20">
              <span className="font-mono text-[10px] text-[#918fa1] uppercase block">
                {project.stats.label2}
              </span>
              <span className="font-mono text-sm md:text-base font-bold text-[#5ee151] mt-0.5 block">
                {simMode === 'jitter' ? '0.04% Loss' : project.stats.val2}
              </span>
            </div>
            <div className="bg-[#201f1f] p-3 rounded-lg border border-[#464555]/20">
              <span className="font-mono text-[10px] text-[#918fa1] uppercase block">
                {project.stats.label3}
              </span>
              <span className="font-mono text-sm md:text-base font-bold text-[#c4c0ff] mt-0.5 block">
                {project.stats.val3}
              </span>
            </div>
          </div>

          {/* 4-Layer Architecture Diagram */}
          <div className="bg-[#201f1f] rounded-xl p-4 border border-[#464555]/30 flex flex-col gap-2">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-[#c4c0ff] uppercase flex items-center gap-1.5 font-bold">
                <span className="material-symbols-outlined text-[16px]">account_tree</span>
                RUNTIME TOPOLOGY ARCHITECTURE
              </span>
              <span className="text-[#5ee151]">ACTIVE MESH</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {(project.nodes || ['Client NUI', 'IPC Gateway', 'Tick Engine', 'Redis State Cache']).map(
                (node, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0e0e0e] p-2.5 rounded-lg border border-[#464555]/30 text-center flex flex-col"
                  >
                    <span className="font-mono text-[9px] text-[#918fa1] uppercase">
                      LAYER 0{idx + 1}
                    </span>
                    <span className="font-display font-semibold text-xs text-white mt-1">
                      {node}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Interactive Stress & Packet Simulator */}
          <div className="bg-[#0e0e0e] p-4 rounded-xl border border-[#464555]/30 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#918fa1] uppercase flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#a2e7ff] text-[16px]">tune</span>
                STRESS & PACKET SIMULATOR
              </span>
              <span className="font-mono text-[11px] text-[#a2e7ff]">
                {simMode === 'flood'
                  ? '10,000 PKTS/S FLOOD'
                  : simMode === 'jitter'
                  ? '50ms JITTER COMPENSATED'
                  : 'IDLE RUNTIME (NORMAL)'}
              </span>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={handleSimFlood}
                className={`flex-1 py-1.5 px-2 rounded text-xs font-mono transition-colors border ${
                  simMode === 'flood'
                    ? 'bg-[#a2e7ff] text-[#003642] font-bold border-[#a2e7ff]'
                    : 'bg-[#2a2a2a] text-[#e5e2e1] border-[#464555]/30 hover:border-[#a2e7ff]'
                }`}
              >
                Flood 10k pkts/s
              </button>
              <button
                type="button"
                onClick={handleSimJitter}
                className={`flex-1 py-1.5 px-2 rounded text-xs font-mono transition-colors border ${
                  simMode === 'jitter'
                    ? 'bg-[#ffb4ab] text-[#690005] font-bold border-[#ffb4ab]'
                    : 'bg-[#2a2a2a] text-[#e5e2e1] border-[#464555]/30 hover:border-[#ffb4ab]'
                }`}
              >
                Inject 50ms Jitter
              </button>
              <button
                type="button"
                onClick={handleSimReset}
                title="Reset simulation"
                className="py-1.5 px-2 bg-[#2a2a2a] hover:bg-[#353534] rounded text-xs font-mono text-[#918fa1] hover:text-white border border-[#464555]/30"
              >
                <span className="material-symbols-outlined text-[14px]">restart_alt</span>
              </button>
            </div>
            <div className="w-full bg-[#201f1f] h-1.5 rounded-full overflow-hidden mt-1">
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  simMode === 'flood'
                    ? 'bg-[#a2e7ff] w-[88%]'
                    : simMode === 'jitter'
                    ? 'bg-[#ffb4ab] w-[95%]'
                    : 'bg-[#5ee151] w-[25%]'
                }`}
              ></div>
            </div>
          </div>

          {/* Code Inspector */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#918fa1]">
              <span>{project.codeTitle}</span>
              <div className="flex items-center gap-2">
                <span className="text-[#a2e7ff]">{project.codeLang}</span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="text-[#c4c0ff] hover:underline flex items-center gap-1 text-[11px]"
                >
                  <span className="material-symbols-outlined text-[13px]">content_copy</span>
                  <span>COPY</span>
                </button>
              </div>
            </div>
            <pre className="bg-[#0e0e0e] p-4 rounded-lg font-mono text-xs text-[#c4c0ff] overflow-x-auto border border-[#464555]/30 leading-relaxed whitespace-pre">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-[#2a2a2a] mt-6 flex items-center justify-between">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              onClick={() => onShowToast('Opening repository...')}
              className="px-4 py-2 bg-[#201f1f] hover:bg-[#2a2a2a] rounded-lg text-xs font-mono uppercase text-[#e5e2e1] flex items-center gap-2 border border-[#464555]/30"
            >
              <span className="material-symbols-outlined text-sm">code</span>
              <span>GitHub Repo</span>
            </a>
          ) : (
            <span className="text-xs font-mono text-[#918fa1]">PROPRIETARY RUNTIME</span>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#c4c0ff] text-[#2000a4] font-mono text-xs font-bold uppercase rounded-lg hover:bg-white transition-colors"
          >
            Close Spec [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
