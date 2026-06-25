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

export const metadata: Metadata = {
  title: "AMAN SAHU | MERN Developer Portfolio",
  description: "Aman Sahu Premium Portfolio",
  keywords: [
    "Aman Sahu",
    "MERN Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <head>
       <meta name="google-site-verification" content="Nwn4YmsL8cjPG_q23qGcY23I9nnnBHUx4zfmEjuHq2Q" />
      </head>
      <body
        cz-shortcut-listen="true"
        className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} selection:bg-primary-container selection:text-on-primary`}
      >
        {children}
      </body>
    </html>
  );
}
