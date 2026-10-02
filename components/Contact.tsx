import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="min-h-[80vh] flex items-center py-16 sm:py-24 md:py-32 lg:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <div className="max-w-[800px] animate-fade-up">
          <h2 className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[96px] font-[800] leading-[0.9] tracking-[-0.02em] mb-6 sm:mb-8">
            LET'S BUILD
            <br />
            SOMETHING.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#A5A7AD] mb-8 sm:mb-12">
            Have an idea, project, game system, website, video or creative concept?
          </p>

          <Link
            href="mailto:contact@princebhakta.com"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-[12px] font-medium text-[13px] sm:text-[14px] hover:bg-[#A5A7AD] transition-colors mb-12 sm:mb-16"
          >
            START A CONVERSATION →
          </Link>

          <div className="flex flex-wrap gap-6 sm:gap-8 text-[13px] sm:text-[14px] text-[#6F737A]">
            <Link href="https://github.com/kingplayz1" target="_blank" className="hover:text-white transition-colors">GITHUB</Link>
            <Link href="https://youtube.com/@KINGPLAYZ008" target="_blank" className="hover:text-white transition-colors">YOUTUBE</Link>
            <Link href="#" className="hover:text-white transition-colors">LINKEDIN</Link>
          </div>

          <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[11px] sm:text-[12px] text-[#6F737A]">
            <div>PRINCE BHAKTA</div>
            <div>DEVELOPER · EDITOR · CREATOR</div>
          </div>
        </div>
      </div>
    </section>
  );
}