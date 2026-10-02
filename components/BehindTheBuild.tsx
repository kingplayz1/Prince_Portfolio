const codeLines = [
  { text: 'const build = {', className: 'text-[#6C63FF]' },
  { text: '  idea: true,', className: 'text-[#A5A7AD]' },
  { text: '  code: true,', className: 'text-[#A5A7AD]' },
  { text: '  design: true,', className: 'text-[#A5A7AD]' },
  { text: '  ship: true', className: 'text-[#A5A7AD]' },
  { text: '}', className: 'text-[#6C63FF]' },
  { text: '', className: 'text-[#F4F4F0]' },
  { text: '> building systems', className: 'text-[#00D4FF]' },
  { text: '> solving problems', className: 'text-[#00D4FF]' },
  { text: '> shipping ideas', className: 'text-[#00D4FF]' },
];

export default function BehindTheBuild() {
  return (
    <section
      id="build"
      className="mx-auto max-w-[1400px] px-6 py-16 sm:py-24 md:px-10 md:py-32 lg:py-48"
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="animate-fade-up mb-8 sm:mb-12">
          <div className="mb-4 text-[11px] tracking-[0.3em] text-[#A5A7AD] sm:mb-6 sm:text-[12px]">
            BEHIND THE BUILD
          </div>
        </div>

        <div className="rounded-[16px] border border-white/[0.06] bg-[#0A0A0B] p-6 font-mono sm:p-8 md:p-12">
          <div className="mb-6 flex items-center gap-2 sm:mb-8">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="ml-4 text-[11px] text-[#6F737A] sm:text-[12px]">
              terminal — prince@build
            </div>
          </div>

          <div className="space-y-1 text-[12px] leading-relaxed sm:text-[13px] md:text-[14px]">
            {codeLines.map((line, i) => (
              <div
                key={i}
                className={`${line.className} animate-fade-up`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {line.text || ' '}
              </div>
            ))}
            <div className="ml-1 inline-block h-[16px] w-[8px] animate-pulse text-[#7CFF6B]" />
          </div>
        </div>
      </div>
    </section>
  );
}
