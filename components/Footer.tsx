import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 text-[12px] text-[#6F737A] md:px-10">
        <div>© 2026 PRINCE BHAKTA</div>
        <div className="flex gap-6">
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
      </div>
    </footer>
  );
}
