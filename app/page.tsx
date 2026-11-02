import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AbstractSection } from "@/components/AbstractSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { TableOfContents } from "@/components/TableOfContents";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-paper-bg dark:bg-paper-darkBg text-ink dark:text-ink-dark transition-colors duration-200">
      {/* Navigation Masthead */}
      <Navbar />

      {/* Main Reading Stage */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="flex gap-8 justify-center items-start">
          {/* Main Paper Document Container */}
          <main className="w-full max-w-4xl academic-paper bg-paper-surface dark:bg-paper-surfaceDark border border-academic-border dark:border-academic-borderDark px-6 sm:px-10 md:px-14 py-8 sm:py-12 rounded-sm transition-colors duration-200">
            {/* Title Page / Hero */}
            <Hero />

            {/* Abstract */}
            <AbstractSection />

            {/* Academic Content Sections in Exact Order */}
            <IntroductionSection />
            <ResearchSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <EducationSection />
            <ContactSection />
            <ReferencesSection />
          </main>

          {/* Sticky Table of Contents (Desktop Sidebar) */}
          <TableOfContents />
        </div>
      </div>

      {/* Back to top floating trigger */}
      <BackToTop />

      {/* Academic Colophon / Footer */}
      <Footer />
    </div>
  );
}

