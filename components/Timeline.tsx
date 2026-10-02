const milestones = [
  { phase: 'BUILDING', desc: 'Developing systems and tools' },
  { phase: 'LEARNING', desc: 'Mastering new technologies' },
  { phase: 'CREATING', desc: 'Producing visual content' },
  { phase: 'EXPERIMENTING', desc: 'Exploring new ideas' },
  { phase: 'SHIPPING', desc: 'Releasing projects' }
];

export default function Timeline() {
  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 lg:py-48 max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="animate-fade-up mb-12 sm:mb-16 lg:mb-20">
        <div className="text-[11px] sm:text-[12px] tracking-[0.3em] text-[#A5A7AD] mb-4 sm:mb-6">THE JOURNEY</div>
      </div>

      <div className="relative">
        <div className="absolute left-[20px] sm:left-[24px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.12] to-transparent" />

        <div className="space-y-12 sm:space-y-16">
          {milestones.map((item, i) => (
            <div
              key={item.phase}
              className="relative pl-14 sm:pl-16 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute left-0 top-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/[0.12] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#6C63FF]" />
              </div>
              <div className="text-[20px] sm:text-[24px] font-[600] mb-1.5 sm:mb-2">{item.phase}</div>
              <div className="text-[13px] sm:text-[14px] text-[#A5A7AD]">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}