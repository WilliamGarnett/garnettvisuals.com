import type { Metadata } from "next";
import { jetbrainsMono } from "./fonts";
import { NoiseOverlay } from "./components/NoiseOverlay";
import { GridOverlay } from "./components/GridOverlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "William Garnett | Frontend Developer",
  description:
    "Freelance frontend developer based in Stockholm. Data meets clean design.",
  keywords: [
    "frontend developer",
    "freelance",
    "web development",
    "React",
    "Next.js",
    "TypeScript",
    "Stockholm",
  ],
  authors: [{ name: "William Garnett" }],
  openGraph: {
    title: "William Garnett | Frontend Developer",
    description:
      "Freelance frontend developer based in Stockholm. Data meets clean design.",
    url: "https://garnettvisuals.com",
    siteName: "Garnett Visuals",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Garnett | Frontend Developer",
    description:
      "Freelance frontend developer based in Stockholm. Data meets clean design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        <NoiseOverlay />
        <GridOverlay />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
