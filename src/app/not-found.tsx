import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070707] px-6 text-[#F4F4F0]">
      <div className="max-w-md text-center">
        <div className="mb-8 text-[120px] font-[800] text-white/[0.08] sm:text-[200px]">404</div>
        <h1 className="mb-6 text-[32px] font-[700] sm:text-[48px]">PAGE NOT FOUND</h1>
        <p className="mx-auto mb-10 max-w-sm text-[#A5A7AD]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-[12px] bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-[#A5A7AD]"
        >
          BACK HOME
        </Link>
      </div>
    </div>
  );
}
