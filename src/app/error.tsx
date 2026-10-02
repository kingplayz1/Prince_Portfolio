'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070707] px-6 text-[#F4F4F0]">
      <div className="max-w-md text-center">
        <div className="mb-8 text-[64px] font-[800] text-white/[0.08] sm:text-[100px]">ERROR</div>
        <h1 className="mb-6 text-[32px] font-[700] sm:text-[48px]">SOMETHING WENT WRONG</h1>
        <p className="mx-auto mb-10 max-w-sm text-[#A5A7AD]">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-[12px] bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-[#A5A7AD]"
          >
            TRY AGAIN
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-[12px] border border-white/[0.12] px-6 py-3 font-medium transition-colors hover:border-white/[0.24]"
          >
            GO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
