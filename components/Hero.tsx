import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-radial absolute inset-0 from-[#6C63FF]/[0.08] via-transparent to-transparent" />
        <div className="absolute top-1/2 right-[5%] hidden h-[700px] w-[700px] -translate-y-1/2 opacity-40 md:opacity-40 lg:block lg:opacity-60">
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

      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="max-w-[800px]">
          <div className="mb-8">
            <div className="mb-6 text-[12px] tracking-[0.3em] text-[#A5A7AD]">
              DEVELOPER · EDITOR · CREATOR
            </div>
            <h1 className="text-[48px] leading-[0.9] font-[800] tracking-[-0.02em] sm:text-[64px] md:text-[88px] lg:text-[120px]">
              PRINCE
              <br />
              BHAKTA
            </h1>
          </div>

          <p className="mb-8 max-w-[600px] text-[16px] leading-relaxed text-[#A5A7AD] md:text-[18px] lg:text-[20px]">
            I build digital experiences, tools, game systems and visual stories.
          </p>

          <div className="mb-12 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#7CFF6B]" />
            <span className="text-[11px] tracking-wide text-[#A5A7AD] sm:text-[12px]">
              AVAILABLE FOR CREATIVE & DEVELOPMENT PROJECTS
            </span>
          </div>

          <div className="mb-16 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#work"
              className="rounded-[12px] bg-white px-6 py-3 text-center text-[13px] font-medium text-black transition-colors hover:bg-[#A5A7AD] sm:px-8 sm:py-4 sm:text-[14px]"
            >
              VIEW MY WORK
            </Link>
            <Link
              href="#contact"
              className="rounded-[12px] border border-white/[0.12] px-6 py-3 text-center text-[13px] font-medium transition-colors hover:border-white/[0.24] sm:px-8 sm:py-4 sm:text-[14px]"
            >
              LET&apos;S CONNECT
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[11px] text-[#6F737A] sm:justify-start sm:gap-8 sm:text-[12px]">
            <a
              href="https://github.com/kingplayz1"
              target="_blank"
              className="transition-colors hover:text-white"
            >
              GITHUB
            </a>
            <a
              href="https://youtube.com/@KINGPLAYZ008"
              target="_blank"
              className="transition-colors hover:text-white"
            >
              YOUTUBE
            </a>
            <a href="#" className="transition-colors hover:text-white">
              LINKEDIN
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-center md:block">
        <div className="mb-2 text-[10px] tracking-[0.3em] text-[#6F737A]">SCROLL TO EXPLORE</div>
        <div className="text-2xl">↓</div>
      </div>
    </section>
  );
}
