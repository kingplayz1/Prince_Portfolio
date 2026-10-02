import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between text-[12px] text-[#6F737A]">
        <div>© 2026 PRINCE BHAKTA</div>
        <div className="flex gap-6">
          <Link href="https://github.com/kingplayz1" target="_blank" className="hover:text-white transition-colors">GITHUB</Link>
          <Link href="https://youtube.com/@KINGPLAYZ008" target="_blank" className="hover:text-white transition-colors">YOUTUBE</Link>
          <Link href="#" className="hover:text-white transition-colors">LINKEDIN</Link>
        </div>
      </div>
    </footer>
  );
}