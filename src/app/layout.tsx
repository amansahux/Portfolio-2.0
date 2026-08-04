import type { Metadata } from "next";
import {
  Space_Grotesk,
  Hanken_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://portfolio-amansahu.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aman Sahu | MERN Full Stack Developer - React, Next.js, Node.js",
    template: "%s | Aman Sahu",
  },
  description:
    "Aman Sahu is a MERN Stack Developer from Jharkhand, India, building fast, scalable full-stack web apps with React, Next.js, Node.js & MongoDB. Explore live projects and hire for freelance work.",
  keywords: [
    "Aman Sahu",
    "Aman Sahu Developer",
    "Aman Sahu Web Developer",
    "MERN Developer",
    "Full Stack Developer India",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "Frontend Developer Jharkhand",
    "Backend Developer",
    "Freelance MERN Developer",
  ],
  authors: [{ name: "Aman Sahu", url: SITE_URL }],
  creator: "Aman Sahu",
  publisher: "Aman Sahu",

  // Canonical URL — prevents duplicate-content issues
  alternates: {
    canonical: SITE_URL,
  },

  // Tells Google exactly how to crawl/index this page
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Controls how the link looks when shared on WhatsApp, LinkedIn, FB, etc.
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Aman Sahu Portfolio",
    title: "Aman Sahu | MERN Full Stack Developer",
    description:
      "MERN Stack Developer from Jharkhand building scalable full-stack web apps with React, Next.js, Node.js & MongoDB. View live projects & case studies.",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/og-image.png`, // create a 1200x630 image and place it in /public
        width: 1200,
        height: 630,
        alt: "Aman Sahu - MERN Full Stack Developer Portfolio",
      },
    ],
  },

  // Controls how the link looks when shared on Twitter/X
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/amansahux",
    creator: "https://x.com/amansahux",
    title: "Aman Sahu | MERN Full Stack Developer",
    description:
      "MERN Stack Developer from Jharkhand building scalable full-stack web apps with React, Next.js, Node.js & MongoDB.",
    images: [`${SITE_URL}/og-image.png`],
  },

  verification: {
    google: "Nwn4YmsL8cjPG_q23qGcY23I9nnnBHUx4zfmEjuHq2Q",
  },

  category: "technology",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body
        cz-shortcut-listen="true"
        className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} selection:bg-primary-container selection:text-on-primary`}
      >
        {children}
      </body>
    </html>
  );
}
