"use client";

import React, { useState, useEffect } from "react";
import { BookOpen, Moon, Printer, Quote, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { CitationModal } from "./CitationModal";

const navSections = [
  { id: "hero", label: "Title" },
  { id: "abstract", label: "Abstract" },
  { id: "introduction", label: "01. Intro" },
  { id: "research", label: "02. Research" },
  { id: "experience", label: "03. Experience" },
  { id: "projects", label: "04. Projects" },
  { id: "skills", label: "05. Skills" },
  { id: "education", label: "06. Education" },
  { id: "contact", label: "07. Contact" },
  { id: "references", label: "08. References" },
];

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [isCiteOpen, setIsCiteOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initial theme check
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-paper-surface/95 dark:bg-paper-surfaceDark/95 backdrop-blur-md border-b border-academic-border dark:border-academic-borderDark no-print transition-colors">
        {/* Top Reading Progress Bar */}
        <div
          className="h-1 bg-academic-blue dark:bg-blue-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
          {/* Masthead Title / Publication Stamp */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              className="flex items-center gap-2 text-ink dark:text-ink-dark hover:text-academic-blue dark:hover:text-blue-400 transition-colors"
            >
              <div className="w-7 h-7 bg-academic-blue text-white flex items-center justify-center font-serif text-sm font-bold rounded-sm">
                AR
              </div>
              <div>
                <span className="font-serif font-bold text-sm tracking-tight block leading-tight">
                  ARJUN R
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-ink-muted dark:text-ink-mutedDark block">
                  Research &amp; Engineering Portfolio
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 text-xs font-mono">
            {navSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-2.5 py-1 text-ink-secondary dark:text-ink-secondaryDark hover:text-academic-blue dark:hover:text-blue-400 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Utility Tools */}
          <div className="flex items-center gap-2 text-xs font-mono">
            {/* Cite Button */}
            <button
              onClick={() => setIsCiteOpen(true)}
              title="View BibTeX Citation for Research Paper"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 border border-academic-border dark:border-academic-borderDark rounded text-ink-secondary dark:text-ink-secondaryDark hover:border-academic-blue hover:text-academic-blue dark:hover:text-blue-400 transition-colors"
            >
              <Quote className="w-3.5 h-3.5" />
              <span>Cite</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              title="Print academic paper layout or Save as PDF"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 border border-academic-border dark:border-academic-borderDark rounded text-ink-secondary dark:text-ink-secondaryDark hover:border-academic-blue hover:text-academic-blue dark:hover:text-blue-400 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            {/* Light/Dark Toggle */}
            <button
              onClick={toggleDarkMode}
              title={isDark ? "Switch to Light Reading Paper" : "Switch to Dark Night Reader"}
              className="p-1.5 border border-academic-border dark:border-academic-borderDark rounded text-ink-secondary dark:text-ink-secondaryDark hover:text-ink dark:hover:text-ink-dark transition-colors"
              aria-label="Toggle Reading Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 border border-academic-border dark:border-academic-borderDark rounded text-ink dark:text-ink-dark"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navSections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded bg-paper-bg dark:bg-paper-cardDark text-ink dark:text-ink-dark hover:text-academic-blue dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-academic-border dark:border-academic-borderDark flex items-center justify-between">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCiteOpen(true);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-academic-blue dark:text-blue-400"
              >
                <Quote className="w-3.5 h-3.5" />
                <span>Cite Paper (BibTeX)</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handlePrint();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-secondary dark:text-ink-secondaryDark"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Document</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Citation BibTeX Modal */}
      <CitationModal isOpen={isCiteOpen} onClose={() => setIsCiteOpen(false)} />
    </>
  );
};
