const identities = [
  { title: 'DEVELOPER', desc: 'BUILDING SYSTEMS' },
  { title: 'EDITOR', desc: 'CRAFTING STORIES' },
  { title: 'CREATOR', desc: 'SHARING THE PROCESS' },
];

export default function CreatorIdentity() {
  return (
    <section
      id="identity"
      className="mx-auto max-w-[1400px] px-6 py-16 sm:py-24 md:px-10 md:py-32 lg:py-48"
    >
      <div className="animate-fade-up mb-10 text-center text-[11px] tracking-[0.3em] text-[#A5A7AD] sm:mb-16 sm:text-[12px]">
        BUILD. PLAY. CREATE.
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {identities.map((id, i) => (
          <div
            key={id.title}
            className="animate-fade-up text-center"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="mb-2 text-[28px] font-[700] sm:mb-3 sm:text-[32px] md:text-[36px] lg:text-[48px]">
              {id.title}
            </div>
            <div className="text-[13px] text-[#A5A7AD] sm:text-[14px]">{id.desc}</div>
            <div
              className="animate-scale-x mx-auto mt-4 h-[1px] max-w-xs bg-gradient-to-r from-transparent via-white/[0.12] to-transparent sm:mt-6"
              style={{ animationDelay: `${i * 100 + 300}ms` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
