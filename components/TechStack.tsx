const stacks = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Node.js',
  'Lua',
  'FiveM',
  'Git',
  'GitHub',
  'MySQL',
  'Cloudflare',
  'REST APIs',
  'Discord APIs',
  'UI/UX',
  'Video Editing',
  'Motion Graphics',
];

export default function TechStack() {
  return (
    <section id="tools" className="overflow-hidden border-y border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto mb-12 max-w-[1400px] px-6 md:px-10">
        <div className="text-[12px] tracking-[0.3em] text-[#A5A7AD]">TOOLS I WORK WITH</div>
      </div>

      <div className="relative">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {[...stacks, ...stacks].map((stack, i) => (
            <div
              key={i}
              className="font-mono text-[14px] text-[#6F737A] transition-colors hover:text-[#F4F4F0]"
            >
              {stack}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
