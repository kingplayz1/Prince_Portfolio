import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070707] text-[#F4F4F0] px-6">
      <div className="text-center max-w-md">
        <div className="text-[120px] sm:text-[200px] font-[800] text-white/[0.08] mb-8">404</div>
        <h1 className="text-[32px] sm:text-[48px] font-[700] mb-6">PAGE NOT FOUND</h1>
        <p className="text-[#A5A7AD] mb-10 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-[12px] font-medium hover:bg-[#A5A7AD] transition-colors"
        >
          BACK HOME
        </Link>
      </div>
    </div>
  );
}