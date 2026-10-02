import Image from 'next/image';

export default function PersonalPhoto() {
  return (
    <section id="personal" className="relative overflow-hidden py-16 sm:py-24 md:py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="animate-fade-up relative lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] border border-white/[0.06]">
              <Image
                src="/assets/prince.png"
                alt="Prince Bhakta"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent" />
            </div>
          </div>

          <div className="animate-fade-up text-center delay-200 lg:order-2 lg:pr-12 lg:pl-0 lg:text-left">
            <div className="mb-6 text-[11px] tracking-[0.3em] text-[#A5A7AD] sm:mb-8 sm:text-[12px]">
              PERSONAL
            </div>
            <h2 className="mb-6 text-[36px] leading-[0.95] font-[700] tracking-[-0.02em] sm:mb-8 sm:text-[44px] md:text-[56px] lg:text-[80px]">
              BUILDING THINGS
              <br />
              <span className="text-[#A5A7AD]">I WANT TO EXIST.</span>
            </h2>
            <div className="font-mono text-[12px] text-[#6F737A] sm:text-[13px] md:text-[14px]">
              SYSTEM / 001 · CREATIVE / 002
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
