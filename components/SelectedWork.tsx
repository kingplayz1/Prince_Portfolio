'use client';

import { useState, useEffect } from 'react';

const projects = [
  {
    number: '01',
    name: 'STREETRUSH ASIA',
    category: 'FiveM · Competitive Racing',
    description:
      'Competitive racing infrastructure for FiveM with ranked systems, leaderboards and matchmaking.',
    technologies: ['FiveM', 'Lua', 'JavaScript', 'ox_core', 'MySQL', 'UI'],
    status: 'BUILDING / ACTIVE',
  },
  {
    number: '02',
    name: '3SL ARENA',
    category: 'FiveM · PvP Arena',
    description:
      'Competitive PvP arena platform with tournament systems and real-time match management.',
    technologies: ['FiveM', 'Lua', 'JavaScript', 'ox_core', 'MySQL', 'UI'],
    status: 'BUILDING / ACTIVE',
  },
  {
    number: '03',
    name: 'DIORA LUXE',
    category: 'Web · Interactive Commerce',
    description: 'Premium interactive jewellery website with immersive product experiences.',
    technologies: ['Next.js', 'TypeScript', 'React', 'UI/UX', 'Animation'],
    status: 'PLANNING',
  },
  {
    number: '04',
    name: 'DARKBEAT',
    category: 'Discord · Music Bot',
    description: 'Discord music bot with streaming capabilities and queue management.',
    technologies: ['TypeScript', 'Discord API', 'Node.js', 'APIs'],
    status: 'ACTIVE',
  },
  {
    number: '05',
    name: 'MUSICGIRL',
    category: 'Discord · Music Bot',
    description: 'TypeScript Discord music bot with advanced playback features.',
    technologies: ['TypeScript', 'Discord API', 'Node.js'],
    status: 'ACTIVE',
  },
  {
    number: '06',
    name: 'DG STATUS',
    category: 'Web · Monitoring',
    description: 'Website monitoring and status dashboard for service health tracking.',
    technologies: ['Next.js', 'TypeScript', 'APIs', 'UI/UX'],
    status: 'ACTIVE',
  },
  {
    number: '07',
    name: 'ASSISTANTX',
    category: 'AI · Tools',
    description: 'AI assistant tool with automation capabilities.',
    technologies: ['TypeScript', 'Node.js', 'APIs', 'Automation'],
    status: 'ACTIVE',
  },
  {
    number: '08',
    name: 'SOFT UI DASHBOARD',
    category: 'UI · Design System',
    description: 'Modern dashboard UI system with soft design aesthetics.',
    technologies: ['React', 'TypeScript', 'UI/UX', 'Design System'],
    status: 'ACTIVE',
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0] | null;
  onClose: () => void;
}) {
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
    <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="animate-slide-up relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[20px] border border-white/[0.12] bg-[#111214] p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full text-[#6F737A] transition-colors hover:bg-white/[0.06] hover:text-white"
          aria-label="Close modal"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="space-y-6">
          <div>
            <div className="mb-2 text-[11px] tracking-wide text-[#A5A7AD]">
              PROJECT #{project.number}
            </div>
            <h3 className="mb-2 text-[28px] font-[700] tracking-[-0.01em] md:text-[36px]">
              {project.name}
            </h3>
            <div className="mb-4 text-[12px] tracking-wide text-[#6C63FF]">{project.category}</div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-[#A5A7AD]">
              {project.status}
            </div>
          </div>

          <p className="border-l-2 border-[#6C63FF]/50 pl-4 text-[16px] leading-relaxed text-[#A5A7AD]">
            {project.description}
          </p>

          <div className="border-t border-white/[0.06] pt-6">
            <div className="mb-4 text-[11px] tracking-wide text-[#A5A7AD]">TECHNOLOGIES</div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-[8px] border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 font-mono text-[12px] text-[#A5A7AD]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.number === '01' || project.number === '02' ? (
            <div className="flex gap-3 border-t border-white/[0.06] pt-4">
              <button className="flex-1 rounded-[12px] bg-white px-6 py-3 text-[14px] font-medium text-black transition-colors hover:bg-[#A5A7AD]">
                VIEW REPOSITORY
              </button>
              <button className="flex-1 rounded-[12px] border border-white/[0.12] px-6 py-3 text-[14px] font-medium transition-colors hover:border-white/[0.24]">
                LIVE DEMO
              </button>
            </div>
          ) : (
            <div className="flex gap-3 border-t border-white/[0.06] pt-4">
              <button className="flex-1 cursor-not-allowed rounded-[12px] bg-white px-6 py-3 text-[14px] font-medium text-black opacity-50 transition-colors hover:bg-[#A5A7AD]">
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
  const [modalProject, setModalProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <section
      id="work"
      className="mx-auto max-w-[1400px] px-6 py-16 sm:py-24 md:px-10 md:py-32 lg:py-48"
    >
      <div className="animate-fade-up mb-12 sm:mb-16 lg:mb-20">
        <div className="mb-4 text-[11px] tracking-[0.3em] text-[#A5A7AD] sm:text-[12px]">
          SELECTED WORK
        </div>
      </div>

      <div className="space-y-12 lg:space-y-16">
        {projects.map((project, i) => (
          <div
            key={project.number}
            className="group animate-fade-up cursor-pointer"
            style={{ animationDelay: `${i * 50}ms` }}
            onMouseEnter={() => setActiveIndex(i)}
            onClick={() => setModalProject(project)}
          >
            <div className="mb-3 flex items-baseline gap-3 sm:mb-4 sm:gap-4">
              <div className="font-mono text-[12px] text-[#6F737A] sm:text-[14px]">
                {project.number}
              </div>
              <div className="h-[1px] flex-1 bg-white/[0.06] transition-colors group-hover:bg-[#6C63FF]/50" />
            </div>
            <h3 className="mb-2 text-[24px] font-[700] tracking-[-0.01em] transition-colors group-hover:text-[#A5A7AD] sm:mb-3 sm:text-[28px] md:text-[36px] lg:text-[48px]">
              {project.name}
            </h3>
            <div className="mb-2 text-[11px] tracking-wide text-[#6C63FF] sm:mb-3 sm:text-[12px]">
              {project.category}
            </div>
            <p className="mb-4 text-[14px] leading-relaxed text-[#A5A7AD] sm:text-[15px]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-[#6F737A] sm:gap-2 sm:text-[11px]">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech} ·</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 lg:hidden">
        <div className="rounded-[16px] border border-white/[0.06] bg-[#111214]/50 p-6">
          {projects.map((project, i) => (
            <div
              key={project.number}
              className={`border-t border-white/[0.06] pt-4 ${i === 0 ? 'border-t-0 pt-0' : ''}`}
            >
              <div className="mb-2 text-[11px] tracking-wide text-[#A5A7AD]">
                PROJECT #{project.number}
              </div>
              <h4 className="mb-2 text-[18px] font-[600]">{project.name}</h4>
              <div className="mb-4 text-[12px] text-[#A5A7AD]">{project.status}</div>
              <div className="space-y-2 text-[12px] text-[#A5A7AD]">
                {project.technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#6C63FF]" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:sticky lg:top-24 lg:ml-8 lg:block">
        <div className="rounded-[16px] border border-white/[0.06] bg-[#111214]/50 p-6 sm:p-8">
          {projects[activeIndex] && (
            <>
              <div className="mb-3 text-[11px] tracking-wide text-[#A5A7AD] sm:mb-4 sm:text-[12px]">
                PROJECT #{projects[activeIndex].number}
              </div>
              <h4 className="mb-2 text-[20px] font-[600] sm:mb-3 sm:text-[24px]">
                {projects[activeIndex].name}
              </h4>
              <div className="mb-4 text-[12px] text-[#A5A7AD] sm:mb-6 sm:text-[13px]">
                {projects[activeIndex].status}
              </div>
              <div className="space-y-2 text-[12px] text-[#A5A7AD] sm:space-y-3 sm:text-[13px]">
                {projects[activeIndex].technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#6C63FF]" />
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
