'use client';

import { useState, useEffect } from 'react';

const projects = [
  {"number": "01", "name": "STREETRUSH ASIA", "category": "FiveM · Competitive Racing", "description": "Competitive racing infrastructure for FiveM with ranked systems, leaderboards and matchmaking.", "technologies": ["FiveM", "Lua", "JavaScript", "ox_core", "MySQL", "UI"], "status": "BUILDING / ACTIVE"},
  {"number": "02", "name": "3SL ARENA", "category": "FiveM · PvP Arena", "description": "Competitive PvP arena platform with tournament systems and real-time match management.", "technologies": ["FiveM", "Lua", "JavaScript", "ox_core", "MySQL", "UI"], "status": "BUILDING / ACTIVE"},
  {"number": "03", "name": "DIORA LUXE", "category": "Web · Interactive Commerce", "description": "Premium interactive jewellery website with immersive product experiences.", "technologies": ["Next.js", "TypeScript", "React", "UI/UX", "Animation"], "status": "PLANNING"},
  {"number": "04", "name": "DARKBEAT", "category": "Discord · Music Bot", "description": "Discord music bot with streaming capabilities and queue management.", "technologies": ["TypeScript", "Discord API", "Node.js", "APIs"], "status": "ACTIVE"},
  {"number": "05", "name": "MUSICGIRL", "category": "Discord · Music Bot", "description": "TypeScript Discord music bot with advanced playback features.", "technologies": ["TypeScript", "Discord API", "Node.js"], "status": "ACTIVE"},
  {"number": "06", "name": "DG STATUS", "category": "Web · Monitoring", "description": "Website monitoring and status dashboard for service health tracking.", "technologies": ["Next.js", "TypeScript", "APIs", "UI/UX"], "status": "ACTIVE"},
  {"number": "07", "name": "ASSISTANTX", "category": "AI · Tools", "description": "AI assistant tool with automation capabilities.", "technologies": ["TypeScript", "Node.js", "APIs", "Automation"], "status": "ACTIVE"},
  {"number": "08", "name": "SOFT UI DASHBOARD", "category": "UI · Design System", "description": "Modern dashboard UI system with soft design aesthetics.", "technologies": ["React", "TypeScript", "UI/UX", "Design System"], "status": "ACTIVE"}
];

function ProjectModal({ project, onClose }: { project: typeof projects[0] | null; onClose: () => void }) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#111214] border border-white/[0.12] rounded-[20px] p-6 md:p-8 animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[#6F737A] hover:text-white transition-colors rounded-full hover:bg-white/[0.06]"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="space-y-6">
          <div>
            <div className="text-[11px] tracking-wide text-[#A5A7AD] mb-2">PROJECT #{project.number}</div>
            <h3 className="text-[28px] md:text-[36px] font-[700] tracking-[-0.01em] mb-2">{project.name}</h3>
            <div className="text-[12px] tracking-wide text-[#6C63FF] mb-4">{project.category}</div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.06] rounded-full text-[11px] font-mono text-[#A5A7AD]">
              {project.status}
            </div>
          </div>

          <p className="text-[16px] leading-relaxed text-[#A5A7AD] border-l-2 border-[#6C63FF]/50 pl-4">
            {project.description}
          </p>

          <div className="border-t border-white/[0.06] pt-6">
            <div className="text-[11px] tracking-wide text-[#A5A7AD] mb-4">TECHNOLOGIES</div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-[8px] text-[12px] font-mono text-[#A5A7AD]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.number === '01' || project.number === '02' ? (
            <div className="flex gap-3 pt-4 border-t border-white/[0.06]">
              <button className="flex-1 py-3 px-6 bg-white text-black rounded-[12px] font-medium text-[14px] hover:bg-[#A5A7AD] transition-colors">
                VIEW REPOSITORY
              </button>
              <button className="flex-1 py-3 px-6 border border-white/[0.12] rounded-[12px] font-medium text-[14px] hover:border-white/[0.24] transition-colors">
                LIVE DEMO
              </button>
            </div>
          ) : (
            <div className="flex gap-3 pt-4 border-t border-white/[0.06]">
              <button className="flex-1 py-3 px-6 bg-white text-black rounded-[12px] font-medium text-[14px] hover:bg-[#A5A7AD] transition-colors opacity-50 cursor-not-allowed">
                COMING SOON
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalProject, setModalProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="work" className="py-16 sm:py-24 md:py-32 lg:py-48 max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="animate-fade-up mb-12 sm:mb-16 lg:mb-20">
        <div className="text-[11px] sm:text-[12px] tracking-[0.3em] text-[#A5A7AD] mb-4">SELECTED WORK</div>
      </div>

      <div className="space-y-12 lg:space-y-16">
        {projects.map((project, i) => (
          <div
            key={project.number}
            className="group cursor-pointer animate-fade-up"
            style={{ animationDelay: `${i * 50}ms` }}
            onMouseEnter={() => setActiveIndex(i)}
            onClick={() => setModalProject(project)}
          >
            <div className="flex items-baseline gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="text-[12px] sm:text-[14px] font-mono text-[#6F737A]">{project.number}</div>
              <div className="h-[1px] flex-1 bg-white/[0.06] group-hover:bg-[#6C63FF]/50 transition-colors" />
            </div>
            <h3 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-[700] tracking-[-0.01em] mb-2 sm:mb-3 group-hover:text-[#A5A7AD] transition-colors">
              {project.name}
            </h3>
            <div className="text-[11px] sm:text-[12px] tracking-wide text-[#6C63FF] mb-2 sm:mb-3">{project.category}</div>
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#A5A7AD] mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono text-[#6F737A]">
              {project.technologies.map(tech => (
                <span key={tech}>{tech} ·</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:hidden mt-8">
        <div className="border border-white/[0.06] rounded-[16px] p-6 bg-[#111214]/50">
          {projects.map((project, i) => (
            <div
              key={project.number}
              className={`border-t border-white/[0.06] pt-4 ${i === 0 ? 'border-t-0 pt-0' : ''}`}
            >
              <div className="text-[11px] tracking-wide text-[#A5A7AD] mb-2">PROJECT #{project.number}</div>
              <h4 className="text-[18px] font-[600] mb-2">{project.name}</h4>
              <div className="text-[12px] text-[#A5A7AD] mb-4">{project.status}</div>
              <div className="space-y-2 text-[12px] text-[#A5A7AD]">
                {project.technologies.map(tech => (
                  <div key={tech} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#6C63FF]" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:sticky lg:top-24 lg:ml-8">
        <div className="border border-white/[0.06] rounded-[16px] p-6 sm:p-8 bg-[#111214]/50">
          {projects[activeIndex] && (
            <>
              <div className="text-[11px] sm:text-[12px] tracking-wide text-[#A5A7AD] mb-3 sm:mb-4">PROJECT #{projects[activeIndex].number}</div>
              <h4 className="text-[20px] sm:text-[24px] font-[600] mb-2 sm:mb-3">{projects[activeIndex].name}</h4>
              <div className="text-[12px] sm:text-[13px] text-[#A5A7AD] mb-4 sm:mb-6">{projects[activeIndex].status}</div>
              <div className="space-y-2 sm:space-y-3 text-[12px] sm:text-[13px] text-[#A5A7AD]">
                {projects[activeIndex].technologies.map(tech => (
                  <div key={tech} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#6C63FF]" />
                    {tech}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </section>
  );
}