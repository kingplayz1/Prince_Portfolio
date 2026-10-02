const categories = [
  {
    number: '01',
    title: 'DEVELOPMENT',
    items: [
      'FiveM systems',
      'Web applications',
      'UI systems',
      'Automation',
      'APIs',
      'Developer tools',
    ],
  },
  {
    number: '02',
    title: 'CREATIVE',
    items: [
      'Video editing',
      'Motion graphics',
      'Visual storytelling',
      'Thumbnails',
      'Brand visuals',
    ],
  },
  {
    number: '03',
    title: 'GAME SYSTEMS',
    items: [
      'Racing systems',
      'Multiplayer systems',
      'Game UI',
      'Server architecture',
      'Gameplay systems',
    ],
  },
  {
    number: '04',
    title: 'CONTENT',
    items: ['Gaming', 'Live streams', 'YouTube', 'Technical content', 'Creative experiments'],
  },
];

export default function WhatIBuild() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16 sm:py-24 md:px-10 md:py-32 lg:py-48">
      <div className="animate-fade-up mb-12 sm:mb-16 lg:mb-20">
        <div className="mb-4 text-[11px] tracking-[0.3em] text-[#A5A7AD] sm:text-[12px]">
          WHAT I BUILD
        </div>
        <h2 className="text-[32px] leading-[1.1] font-[700] tracking-[-0.02em] sm:text-[40px] md:text-[48px] lg:text-[72px]">
          Systems, experiences, stories.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {categories.map((cat, i) => (
          <div
            key={cat.number}
            className="group animate-fade-up relative cursor-pointer rounded-[16px] border border-white/[0.06] p-6 transition-colors hover:border-white/[0.12] sm:p-8 md:p-10"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="mb-4 flex items-start justify-between sm:mb-6">
              <div className="font-mono text-[11px] text-[#6F737A] sm:text-[12px]">
                {cat.number}
              </div>
              <div
                className="animate-scale-x h-[1px] w-10 bg-gradient-to-r from-[#6C63FF] to-transparent sm:w-12"
                style={{ animationDelay: `${i * 100 + 300}ms` }}
              />
            </div>
            <h3 className="mb-4 text-[20px] font-[600] sm:mb-6 sm:text-[24px] md:text-[28px] lg:text-[32px]">
              {cat.title}
            </h3>
            <div className="space-y-2">
              {cat.items.map((item) => (
                <div
                  key={item}
                  className="text-[12px] text-[#A5A7AD] transition-colors group-hover:text-[#F4F4F0] sm:text-[13px] md:text-[14px]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
