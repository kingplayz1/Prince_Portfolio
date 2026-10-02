const milestones = [
  { phase: 'BUILDING', desc: 'Developing systems and tools' },
  { phase: 'LEARNING', desc: 'Mastering new technologies' },
  { phase: 'CREATING', desc: 'Producing visual content' },
  { phase: 'EXPERIMENTING', desc: 'Exploring new ideas' },
  { phase: 'SHIPPING', desc: 'Releasing projects' },
];

export default function Timeline() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1400px] px-6 py-16 sm:py-24 md:px-10 md:py-32 lg:py-48"
    >
      <div className="animate-fade-up mb-12 sm:mb-16 lg:mb-20">
        <div className="mb-4 text-[11px] tracking-[0.3em] text-[#A5A7AD] sm:mb-6 sm:text-[12px]">
          THE JOURNEY
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-[20px] w-[1px] bg-gradient-to-b from-transparent via-white/[0.12] to-transparent sm:left-[24px]" />

        <div className="space-y-12 sm:space-y-16">
          {milestones.map((item, i) => (
            <div
              key={item.phase}
              className="animate-fade-up relative pl-14 sm:pl-16"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute top-2 left-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] sm:h-12 sm:w-12">
                <div className="h-2 w-2 rounded-full bg-[#6C63FF]" />
              </div>
              <div className="mb-1.5 text-[20px] font-[600] sm:mb-2 sm:text-[24px]">
                {item.phase}
              </div>
              <div className="text-[13px] text-[#A5A7AD] sm:text-[14px]">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
