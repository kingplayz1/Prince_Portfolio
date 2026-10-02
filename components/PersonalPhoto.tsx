import Image from 'next/image';

export default function PersonalPhoto() {
  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-48 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative animate-fade-up lg:order-1">
            <div className="aspect-[4/5] relative overflow-hidden rounded-[16px] border border-white/[0.06]">
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

          <div className="lg:pl-0 lg:pr-12 animate-fade-up delay-200 lg:order-2 text-center lg:text-left">
            <div className="text-[11px] sm:text-[12px] tracking-[0.3em] text-[#A5A7AD] mb-6 sm:mb-8">PERSONAL</div>
            <h2 className="text-[36px] sm:text-[44px] md:text-[56px] lg:text-[80px] font-[700] leading-[0.95] tracking-[-0.02em] mb-6 sm:mb-8">
              BUILDING THINGS
              <br />
              <span className="text-[#A5A7AD]">I WANT TO EXIST.</span>
            </h2>
            <div className="text-[12px] sm:text-[13px] md:text-[14px] text-[#6F737A] font-mono">
              SYSTEM / 001 · CREATIVE / 002
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}