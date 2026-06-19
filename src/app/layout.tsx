import type { Metadata } from "next";
import { Poppins, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space_grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aman Sahu | MERN Stack Developer",
  description:
    " This is Portfolio of Aman Sahu, a MERN Stack Developer specializing in React.js, Next.js, Node.js, Express.js, Redux Toolkit , Redis , MongoDB, and modern web applications. Explore my projects, skills, and development journey.",
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
    "Redux Toolkit",
    "Redis",
    "Next.js",
    "Express.js",
    "MongoDB",
  ],
  authors: [{ name: "Aman Sahu" }],
  creator: "Aman Sahu",
  openGraph: {
    title: "Aman Sahu | MERN Stack Developer Portfolio",
    description:
      "Explore the portfolio of Aman Sahu featuring MERN stack projects, modern web applications, and development expertise.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Sahu | MERN Stack Developer Portfolio",
    description: "MERN Stack Developer building responsive web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children} hola</body>
    </html>
  );
}
