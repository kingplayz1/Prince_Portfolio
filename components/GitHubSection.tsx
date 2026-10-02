import Link from 'next/link';

const repos = [
  { name: 'DarkBeat1', language: 'TypeScript', desc: 'Discord music bot' },
  { name: 'MUSICGIRL-', language: 'TypeScript', desc: 'Discord music bot' },
  { name: 'DG-status-page', language: 'Next.js', desc: 'Website monitoring dashboard' },
  { name: 'AssistantX', language: 'TypeScript', desc: 'AI assistant tool' },
  { name: 'soft-ui-dashboard', language: 'React', desc: 'Modern UI dashboard' }
];

export default function GitHubSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-48 max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="animate-fade-up mb-12 sm:mb-16 lg:mb-20">
        <div className="text-[11px] sm:text-[12px] tracking-[0.3em] text-[#A5A7AD] mb-4 sm:mb-6">OPEN SOURCE / CODE</div>
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[72px] font-[700] leading-[1.1] tracking-[-0.02em]">github.com/kingplayz1</h2>
      </div>

      <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
        {repos.map((repo, i) => (
          <div
            key={repo.name}
            className="group flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-4 border-b border-white/[0.06] hover:border-white/[0.12] transition-colors cursor-pointer animate-fade-up"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-center gap-4 sm:gap-6 mb-2 sm:mb-0">
              <div className="text-[12px] sm:text-[14px] font-mono text-[#6F737A]">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="text-[14px] sm:text-[16px] font-[500] group-hover:text-[#A5A7AD] transition-colors">{repo.name}</div>
                <div className="text-[12px] sm:text-[13px] text-[#6F737A]">{repo.desc}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="text-[11px] sm:text-[12px] text-[#A5A7AD]">{repo.language}</div>
              <div className="text-[13px] sm:text-[14px] text-[#6F737A] group-hover:text-white transition-colors">→</div>
            </div>
          </div>
        ))}
      </div>

      <Link href="https://github.com/kingplayz1" target="_blank" className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] hover:text-[#6C63FF] transition-colors">
        VIEW ALL PROJECTS ON GITHUB →
      </Link>
    </section>
  );
}