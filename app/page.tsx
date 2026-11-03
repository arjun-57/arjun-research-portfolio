import React from "react";
import { TopBar } from "@/components/fde/TopBar";
import { TitleBlock } from "@/components/fde/TitleBlock";
import { Section1Intro } from "@/components/fde/Section1Intro";
import { Section2FieldReports } from "@/components/fde/Section2FieldReports";
import { Section3Systems } from "@/components/fde/Section3Systems";
import { Section4Table1TrustLayers } from "@/components/fde/Section4Table1TrustLayers";
import { Section5Publication } from "@/components/fde/Section5Publication";
import { Section6Toolkit } from "@/components/fde/Section6Toolkit";
import { Section7Leadership } from "@/components/fde/Section7Leadership";
import { Section8Contact } from "@/components/fde/Section8Contact";
import { ReferencesList } from "@/components/fde/ReferencesList";

export default function FdePortfolioPage() {
  return (
    <div className="min-h-screen bg-paper-bg text-ink dark:bg-paper-darkBg dark:text-ink-dark transition-colors duration-200">
      {/* Sticky Academic Bar */}
      <TopBar isProjectPage={false} />

      {/* Main Journal Paper Sheet */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Full-Width Masthead & Abstract */}
        <TitleBlock />

        {/* Centrepiece: Table 1 (Trust Layers) Placed Prominently Across the Page */}
        <Section4Table1TrustLayers />

        {/* Two-Column Academic Grid for Field Reports & Systems */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Column A: How I Work & Enterprise Field Reports */}
          <div className="space-y-8">
            <Section1Intro />
            <Section2FieldReports />
            <Section5Publication />
          </div>

          {/* Column B: Deployed Systems & Technical Case Studies */}
          <div className="space-y-8">
            <Section3Systems />
            <Section6Toolkit />
            <Section7Leadership />
          </div>
        </div>

        {/* Academic Double Rule */}
        <div className="paper-rule-double my-10" />

        {/* Closing Contact & BibTeX Citation */}
        <Section8Contact />

        {/* Academic References */}
        <ReferencesList />

        {/* Colophon Footer */}
        <footer className="mt-8 pt-4 border-t border-paper-border dark:border-paper-borderDark text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Typeset in STIX Two Text &amp; IBM Plex Mono • Next.js Static Export
          </div>
          <div>
            Arjun R • Forward Deployed AI Engineer • Chennai, India
          </div>
        </footer>
      </main>
    </div>
  );
}
