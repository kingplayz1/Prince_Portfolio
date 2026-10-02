"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.className = 'h-full';
              document.body.className = 'min-h-full bg-[#070707] text-[#F4F4F0] antialiased';
            `,
          }}
        />
      </head>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-[#070707] text-[#F4F4F0] px-6">
          <div className="text-center max-w-md">
            <div className="text-[64px] sm:text-[100px] font-[800] text-white/[0.08] mb-8">ERROR</div>
            <h1 className="text-[32px] sm:text-[48px] font-[700] mb-6">SOMETHING WENT WRONG</h1>
            <p className="text-[#A5A7AD] mb-10 max-w-sm mx-auto">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-[12px] font-medium hover:bg-[#A5A7AD] transition-colors"
              >
                TRY AGAIN
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.12] rounded-[12px] font-medium hover:border-white/[0.24] transition-colors"
              >
                GO HOME
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}