import Link from 'next/link';

const creativeItems = [
  { title: 'Gaming', desc: 'GTA V / FiveM content and gameplay' },
  { title: 'Live Streams', desc: 'Real-time development and gaming sessions' },
  { title: 'Creative Editing', desc: 'Motion graphics and visual storytelling' },
  { title: 'Technical Content', desc: 'Development tutorials and system breakdowns' },
];

export default function CreativeSection() {
  return (
    <section
      id="creative"
      className="mx-auto max-w-[1400px] px-6 py-16 sm:py-24 md:px-10 md:py-32 lg:py-48"
    >
      <div className="animate-fade-up mb-12 sm:mb-16 lg:mb-20">
        <div className="mb-4 text-[11px] tracking-[0.3em] text-[#A5A7AD] sm:mb-6 sm:text-[12px]">
          FROM CODE TO CONTENT
        </div>
        <h2 className="max-w-[800px] text-[32px] leading-[1.1] font-[700] tracking-[-0.02em] sm:text-[40px] md:text-[48px] lg:text-[72px]">
          Developer by day.
          <br />
          <span className="text-[#A5A7AD]">Creator by passion.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <div className="group cursor-pointer overflow-hidden rounded-[16px] border border-white/[0.06]">
            <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#111214] to-[#0A0A0B]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[48px] sm:text-[64px] lg:text-[80px]">▶</div>
              </div>
              <div className="absolute right-3 bottom-3 left-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="font-mono text-[11px] text-[#A5A7AD] sm:text-[12px]">
                  @KINGPLAYZ008
                </div>
                <div className="font-mono text-[11px] text-[#6F737A] sm:text-[12px]">YOUTUBE</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 lg:col-span-5">
          {creativeItems.map((item, i) => (
            <div
              key={item.title}
              className="animate-fade-up border-l-2 border-white/[0.06] py-1.5 pl-4 transition-colors hover:border-[#6C63FF]/50 sm:py-2 sm:pl-6"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-0.5 text-[16px] font-[500] sm:mb-1 sm:text-[18px]">
                {item.title}
              </div>
              <div className="text-[12px] text-[#A5A7AD] sm:text-[13px]">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-up mt-8 delay-500 sm:mt-12">
        <Link
          href="https://youtube.com/@KINGPLAYZ008"
          target="_blank"
          className="inline-flex items-center gap-2 text-[13px] font-medium transition-colors hover:text-[#FF0000] sm:gap-3 sm:text-[14px]"
        >
          WATCH ON YOUTUBE →
        </Link>
      </div>
    </section>
  );
}
