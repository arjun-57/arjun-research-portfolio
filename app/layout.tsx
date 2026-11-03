import type { Metadata, Viewport } from "next";
import { STIX_Two_Text, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serifFont = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const monoFont = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1b1b1f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arjun-research-portfolio.vercel.app"),
  title: "Arjun R | Forward Deployed Engineer (AI & Enterprise Systems)",
  description:
    "I get embedded in messy real-world operations and ship AI systems people can trust. Every system I build has a layer that checks the AI. Field reports from legal, real-estate, and energy operations.",
  keywords: [
    "Arjun R",
    "Forward Deployed Engineer",
    "FDE",
    "AI Systems",
    "Enterprise AI",
    "SRM Institute of Science and Technology",
    "Fairlearn",
    "Multi-Agent Systems",
    "KNS Law Chambers",
    "Grand Magnum Housing"
  ],
  authors: [{ name: "Arjun R", url: "https://github.com/arjun-57" }],
  creator: "Arjun R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arjun-research-portfolio.vercel.app",
    title: "Arjun R | Forward Deployed Engineer (AI Systems)",
    description:
      "Field reports from legal, real estate, and energy operations. Trust layers, verification gates, and human-in-the-loop AI systems.",
    siteName: "Arjun R — Forward Deployed AI Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun R | Forward Deployed Engineer (AI Systems)",
    description:
      "Field reports from legal, real estate, and energy operations. Every system I build has a layer that checks the AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${serifFont.variable} ${monoFont.variable} font-serif min-h-screen bg-paper-bg text-ink dark:bg-paper-darkBg dark:text-ink-dark transition-colors duration-200 selection:bg-accent/15 selection:text-accent dark:selection:bg-accent-dark/20 dark:selection:text-accent-dark`}
      >
        {children}
      </body>
    </html>
  );
}
