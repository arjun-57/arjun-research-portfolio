import type { Metadata, Viewport } from "next";
import { Lora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serifFont = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#243B64",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arjun-research-portfolio.vercel.app"),
  title: "Arjun R | AI Developer & Research Engineer",
  description:
    "Academic and engineering portfolio of Arjun R, AI Developer, Research Engineer, and Software Developer at SRM Institute of Science and Technology. Research in fairness-aware machine learning (ICISC 2026), multi-agent systems, Generative AI, and backend software engineering.",
  keywords: [
    "Arjun R",
    "AI Developer",
    "Research Engineer",
    "Software Developer",
    "SRM Institute of Science and Technology",
    "Fairlearn",
    "Fairness-Aware Machine Learning",
    "ICISC 2026",
    "Multi-Agent Systems",
    "Generative AI",
    "RAG",
    "Chennai India"
  ],
  authors: [{ name: "Arjun R", url: "https://arjun-research-portfolio.vercel.app" }],
  creator: "Arjun R",
  publisher: "Arjun R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arjun-research-portfolio.vercel.app",
    title: "Arjun R | AI Developer & Research Engineer",
    description:
      "Academic and engineering portfolio of Arjun R. Primary research: 'Bias-Free AI-Driven Placement Automation Using Rule-Augmented Machine Learning' (ICISC 2026). Hands-on software engineering projects in multi-agent systems and diagnostic AI.",
    siteName: "Arjun R Research Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun R | AI Developer & Research Engineer",
    description:
      "Interactive academic paper-styled portfolio. Fairness-aware ML, multi-agent systems, and software engineering.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arjun R",
    jobTitle: ["AI Developer", "Research Engineer", "Software Developer"],
    url: "https://arjun-research-portfolio.vercel.app",
    email: "mailto:arjunr3773@gmail.com",
    telephone: "+91 63859 20987",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "SRM Institute of Science and Technology",
      department: "Department of Artificial Intelligence",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Fairness-Aware Machine Learning",
      "Multi-Agent Systems",
      "Generative AI",
      "Retrieval-Augmented Generation",
      "Backend Software Engineering",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} bg-paper-bg text-ink min-h-screen transition-colors duration-200 selection:bg-academic-blue/15 selection:text-academic-blue dark:selection:bg-blue-900/40 dark:selection:text-blue-300`}
      >
        {children}
      </body>
    </html>
  );
}
