import Link from 'next/link';

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-[80vh] items-center py-16 sm:py-24 md:py-32 lg:py-48"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="animate-fade-up max-w-[800px]">
          <h2 className="mb-6 text-[40px] leading-[0.9] font-[800] tracking-[-0.02em] sm:mb-8 sm:text-[52px] md:text-[64px] lg:text-[96px]">
            LET&apos;S BUILD
            <br />
            SOMETHING.
          </h2>
          <p className="mb-8 text-[16px] text-[#A5A7AD] sm:mb-12 sm:text-[18px]">
            Have an idea, project, game system, website, video or creative concept?
          </p>

          <Link
            href="mailto:contact@princebhakta.com"
            className="mb-12 inline-flex items-center gap-2 rounded-[12px] bg-white px-6 py-3 text-[13px] font-medium text-black transition-colors hover:bg-[#A5A7AD] sm:mb-16 sm:gap-3 sm:px-8 sm:py-4 sm:text-[14px]"
          >
            START A CONVERSATION →
          </Link>

          <div className="flex flex-wrap gap-6 text-[13px] text-[#6F737A] sm:gap-8 sm:text-[14px]">
            <Link
              href="https://github.com/kingplayz1"
              target="_blank"
              className="transition-colors hover:text-white"
            >
              GITHUB
            </Link>
            <Link
              href="https://youtube.com/@KINGPLAYZ008"
              target="_blank"
              className="transition-colors hover:text-white"
            >
              YOUTUBE
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              LINKEDIN
            </Link>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.06] pt-8 text-[11px] text-[#6F737A] sm:mt-24 sm:flex-row sm:items-center sm:justify-between sm:pt-12 sm:text-[12px]">
            <div>PRINCE BHAKTA</div>
            <div>DEVELOPER · EDITOR · CREATOR</div>
          </div>
        </div>
      </div>
    </section>
  );
}
