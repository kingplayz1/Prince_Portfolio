import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#6C63FF]/[0.08] via-transparent to-transparent" />
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-40 md:opacity-40 lg:opacity-60 hidden lg:block">
          <Image
            src="/assets/prince.png"
            alt="Prince Bhakta"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 700px"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#070707] via-[#070707]/90 to-transparent lg:via-[#070707]/80" />
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <div className="max-w-[800px]">
          <div className="mb-8">
            <div className="text-[12px] tracking-[0.3em] text-[#A5A7AD] mb-6">DEVELOPER · EDITOR · CREATOR</div>
            <h1 className="text-[48px] sm:text-[64px] md:text-[88px] lg:text-[120px] font-[800] leading-[0.9] tracking-[-0.02em]">
              PRINCE
              <br />
              BHAKTA
            </h1>
          </div>

          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#A5A7AD] max-w-[600px] mb-8">
            I build digital experiences, tools, game systems and visual stories.
          </p>

          <div className="flex items-center gap-3 mb-12">
            <span className="w-2 h-2 rounded-full bg-[#7CFF6B]" />
            <span className="text-[11px] sm:text-[12px] tracking-wide text-[#A5A7AD]">AVAILABLE FOR CREATIVE & DEVELOPMENT PROJECTS</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="#work" className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-[12px] font-medium text-[13px] sm:text-[14px] hover:bg-[#A5A7AD] transition-colors text-center">
              VIEW MY WORK
            </Link>
            <Link href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 border border-white/[0.12] rounded-[12px] font-medium text-[13px] sm:text-[14px] hover:border-white/[0.24] transition-colors text-center">
              LET'S CONNECT
            </Link>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8 text-[11px] sm:text-[12px] text-[#6F737A]">
            <a href="https://github.com/kingplayz1" target="_blank" className="hover:text-white transition-colors">GITHUB</a>
            <a href="https://youtube.com/@KINGPLAYZ008" target="_blank" className="hover:text-white transition-colors">YOUTUBE</a>
            <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center hidden md:block">
        <div className="text-[10px] tracking-[0.3em] text-[#6F737A] mb-2">SCROLL TO EXPLORE</div>
        <div className="text-2xl">↓</div>
      </div>
    </section>
  );
}