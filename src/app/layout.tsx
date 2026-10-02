import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://princebhakta.com";

export const metadata: Metadata = {
  title: {
    default: "Prince Bhakta — Developer · Editor · Creator",
    template: "%s | Prince Bhakta",
  },
  description: "Developer, Creative Editor and Creator building digital experiences, tools, game systems and visual stories.",
  keywords: ["developer", "creative editor", "creator", "FiveM", "web development", "video editing", "motion graphics", "game systems"],
  authors: [{ name: "Prince Bhakta" }],
  creator: "Prince Bhakta",
  publisher: "Prince Bhakta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Prince Bhakta — Developer · Editor · Creator",
    description: "Developer, Creative Editor and Creator building digital experiences, tools, game systems and visual stories.",
    siteName: "Prince Bhakta Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Prince Bhakta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Bhakta — Developer · Editor · Creator",
    description: "Developer, Creative Editor and Creator building digital experiences, tools, game systems and visual stories.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@KINGPLAYZ008",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prince Bhakta",
  url: siteUrl,
  image: `${siteUrl}/assets/prince.png`,
  sameAs: [
    "https://github.com/kingplayz1",
    "https://youtube.com/@KINGPLAYZ008",
    "https://linkedin.com/in/princebhakta",
  ],
  jobTitle: "Developer · Creative Editor · Creator",
  worksFor: {
    "@type": "Organization",
    name: "Prince Bhakta Portfolio",
  },
  knowsAbout: [
    "Web Development",
    "FiveM Systems",
    "Video Editing",
    "Motion Graphics",
    "Game Systems",
    "TypeScript",
    "React",
    "Node.js",
    "Lua",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakarta.variable} ${jetbrains.variable} min-h-full bg-[#070707] text-[#F4F4F0] antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
