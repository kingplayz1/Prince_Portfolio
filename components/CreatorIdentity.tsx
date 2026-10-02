const identities = [
  { title: 'DEVELOPER', desc: 'BUILDING SYSTEMS' },
  { title: 'EDITOR', desc: 'CRAFTING STORIES' },
  { title: 'CREATOR', desc: 'SHARING THE PROCESS' }
];

export default function CreatorIdentity() {
  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-48 max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="text-[11px] sm:text-[12px] tracking-[0.3em] text-[#A5A7AD] mb-10 sm:mb-16 text-center animate-fade-up">BUILD. PLAY. CREATE.</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {identities.map((id, i) => (
          <div
            key={id.title}
            className="text-center animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] font-[700] mb-2 sm:mb-3">{id.title}</div>
            <div className="text-[13px] sm:text-[14px] text-[#A5A7AD]">{id.desc}</div>
            <div className="mt-4 sm:mt-6 h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent animate-scale-x mx-auto max-w-xs" style={{ animationDelay: `${i * 100 + 300}ms` }} />
          </div>
        ))}
      </div>
    </section>
  );
}