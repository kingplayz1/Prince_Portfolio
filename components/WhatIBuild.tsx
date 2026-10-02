const categories = [
  {
    number: '01',
    title: 'DEVELOPMENT',
    items: ['FiveM systems', 'Web applications', 'UI systems', 'Automation', 'APIs', 'Developer tools']
  },
  {
    number: '02',
    title: 'CREATIVE',
    items: ['Video editing', 'Motion graphics', 'Visual storytelling', 'Thumbnails', 'Brand visuals']
  },
  {
    number: '03',
    title: 'GAME SYSTEMS',
    items: ['Racing systems', 'Multiplayer systems', 'Game UI', 'Server architecture', 'Gameplay systems']
  },
  {
    number: '04',
    title: 'CONTENT',
    items: ['Gaming', 'Live streams', 'YouTube', 'Technical content', 'Creative experiments']
  }
];

export default function WhatIBuild() {
  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-48 max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="animate-fade-up mb-12 sm:mb-16 lg:mb-20">
        <div className="text-[11px] sm:text-[12px] tracking-[0.3em] text-[#A5A7AD] mb-4">WHAT I BUILD</div>
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[72px] font-[700] leading-[1.1] tracking-[-0.02em]">Systems, experiences, stories.</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {categories.map((cat, i) => (
          <div
            key={cat.number}
            className="group relative border border-white/[0.06] rounded-[16px] p-6 sm:p-8 md:p-10 hover:border-white/[0.12] transition-colors cursor-pointer animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4 sm:mb-6">
              <div className="text-[11px] sm:text-[12px] font-mono text-[#6F737A]">{cat.number}</div>
              <div className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-[#6C63FF] to-transparent animate-scale-x" style={{ animationDelay: `${i * 100 + 300}ms` }} />
            </div>
            <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-[600] mb-4 sm:mb-6">{cat.title}</h3>
            <div className="space-y-2">
              {cat.items.map(item => (
                <div key={item} className="text-[12px] sm:text-[13px] md:text-[14px] text-[#A5A7AD] group-hover:text-[#F4F4F0] transition-colors">
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