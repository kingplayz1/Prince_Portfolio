const stacks = [
  'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'Lua', 'FiveM',
  'Git', 'GitHub', 'MySQL', 'Cloudflare', 'REST APIs', 'Discord APIs',
  'UI/UX', 'Video Editing', 'Motion Graphics'
];

export default function TechStack() {
  return (
    <section className="py-24 md:py-32 border-y border-white/[0.06] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-12">
        <div className="text-[12px] tracking-[0.3em] text-[#A5A7AD]">TOOLS I WORK WITH</div>
      </div>

      <div className="relative">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...stacks, ...stacks].map((stack, i) => (
            <div key={i} className="text-[14px] font-mono text-[#6F737A] hover:text-[#F4F4F0] transition-colors">
              {stack}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}