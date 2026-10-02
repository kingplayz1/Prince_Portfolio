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
  { text: '> shipping ideas', className: 'text-[#00D4FF]' }
];

export default function BehindTheBuild() {
  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-48 max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="max-w-[1000px] mx-auto">
        <div className="animate-fade-up mb-8 sm:mb-12">
          <div className="text-[11px] sm:text-[12px] tracking-[0.3em] text-[#A5A7AD] mb-4 sm:mb-6">BEHIND THE BUILD</div>
        </div>

        <div className="border border-white/[0.06] rounded-[16px] bg-[#0A0A0B] p-6 sm:p-8 md:p-12 font-mono">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="text-[11px] sm:text-[12px] text-[#6F737A] ml-4">terminal — prince@build</div>
          </div>

          <div className="space-y-1 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed">
            {codeLines.map((line, i) => (
              <div
                key={i}
                className={`${line.className} animate-fade-up`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {line.text || ' '}
              </div>
            ))}
            <div className="animate-pulse text-[#7CFF6B] w-[8px] h-[16px] inline-block ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
}