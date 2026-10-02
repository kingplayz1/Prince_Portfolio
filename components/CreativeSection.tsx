import Link from 'next/link';

const creativeItems = [
  { title: 'Gaming', desc: 'GTA V / FiveM content and gameplay' },
  { title: 'Live Streams', desc: 'Real-time development and gaming sessions' },
  { title: 'Creative Editing', desc: 'Motion graphics and visual storytelling' },
  { title: 'Technical Content', desc: 'Development tutorials and system breakdowns' }
];

export default function CreativeSection() {
  return (
    <section id="creative" className="py-16 sm:py-24 md:py-32 lg:py-48 max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="animate-fade-up mb-12 sm:mb-16 lg:mb-20">
        <div className="text-[11px] sm:text-[12px] tracking-[0.3em] text-[#A5A7AD] mb-4 sm:mb-6">FROM CODE TO CONTENT</div>
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[72px] font-[700] leading-[1.1] tracking-[-0.02em] max-w-[800px]">
          Developer by day.
          <br />
          <span className="text-[#A5A7AD]">Creator by passion.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-7">
          <div className="border border-white/[0.06] rounded-[16px] overflow-hidden group cursor-pointer">
            <div className="aspect-[16/9] bg-gradient-to-br from-[#111214] to-[#0A0A0B] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[48px] sm:text-[64px] lg:text-[80px]">▶</div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="text-[11px] sm:text-[12px] font-mono text-[#A5A7AD]">@KINGPLAYZ008</div>
                <div className="text-[11px] sm:text-[12px] font-mono text-[#6F737A]">YOUTUBE</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          {creativeItems.map((item, i) => (
            <div
              key={item.title}
              className="border-l-2 border-white/[0.06] pl-4 sm:pl-6 py-1.5 sm:py-2 hover:border-[#6C63FF]/50 transition-colors animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-[16px] sm:text-[18px] font-[500] mb-0.5 sm:mb-1">{item.title}</div>
              <div className="text-[12px] sm:text-[13px] text-[#A5A7AD]">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-up delay-500 mt-8 sm:mt-12">
        <Link
          href="https://youtube.com/@KINGPLAYZ008"
          target="_blank"
          className="inline-flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[14px] font-medium hover:text-[#FF0000] transition-colors"
        >
          WATCH ON YOUTUBE →
        </Link>
      </div>
    </section>
  );
}