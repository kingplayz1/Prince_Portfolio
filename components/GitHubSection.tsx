import Link from 'next/link';

const repos = [
  { name: 'DarkBeat1', language: 'TypeScript', desc: 'Discord music bot' },
  { name: 'MUSICGIRL-', language: 'TypeScript', desc: 'Discord music bot' },
  { name: 'DG-status-page', language: 'Next.js', desc: 'Website monitoring dashboard' },
  { name: 'AssistantX', language: 'TypeScript', desc: 'AI assistant tool' },
  { name: 'soft-ui-dashboard', language: 'React', desc: 'Modern UI dashboard' },
];

export default function GitHubSection() {
  return (
    <section
      id="github"
      className="mx-auto max-w-[1400px] px-6 py-16 sm:py-24 md:px-10 md:py-32 lg:py-48"
    >
      <div className="animate-fade-up mb-12 sm:mb-16 lg:mb-20">
        <div className="mb-4 text-[11px] tracking-[0.3em] text-[#A5A7AD] sm:mb-6 sm:text-[12px]">
          OPEN SOURCE / CODE
        </div>
        <h2 className="text-[32px] leading-[1.1] font-[700] tracking-[-0.02em] sm:text-[40px] md:text-[48px] lg:text-[72px]">
          github.com/kingplayz1
        </h2>
      </div>

      <div className="mb-8 space-y-3 sm:mb-12 sm:space-y-4">
        {repos.map((repo, i) => (
          <div
            key={repo.name}
            className="group animate-fade-up flex cursor-pointer flex-col border-b border-white/[0.06] py-3 transition-colors hover:border-white/[0.12] sm:flex-row sm:items-center sm:justify-between sm:py-4"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="mb-2 flex items-center gap-4 sm:mb-0 sm:gap-6">
              <div className="font-mono text-[12px] text-[#6F737A] sm:text-[14px]">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div className="text-[14px] font-[500] transition-colors group-hover:text-[#A5A7AD] sm:text-[16px]">
                  {repo.name}
                </div>
                <div className="text-[12px] text-[#6F737A] sm:text-[13px]">{repo.desc}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="text-[11px] text-[#A5A7AD] sm:text-[12px]">{repo.language}</div>
              <div className="text-[13px] text-[#6F737A] transition-colors group-hover:text-white sm:text-[14px]">
                →
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="https://github.com/kingplayz1"
        target="_blank"
        className="inline-flex items-center gap-2 text-[13px] transition-colors hover:text-[#6C63FF] sm:text-[14px]"
      >
        VIEW ALL PROJECTS ON GITHUB →
      </Link>
    </section>
  );
}
