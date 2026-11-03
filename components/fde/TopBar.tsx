"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun, Download, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface TopBarProps {
  isProjectPage?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ isProjectPage = false }) => {
  const [isDark, setIsDark] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-paper-bg/95 dark:bg-paper-darkBg/95 backdrop-blur-sm border-b border-paper-border dark:border-paper-borderDark no-print transition-colors">
      {/* Reading Progress Line */}
      <div
        className="h-0.5 bg-accent dark:bg-accent-dark transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between text-xs font-mono">
        {/* Left: Branding / Back button */}
        <div className="flex items-center gap-3">
          {isProjectPage ? (
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-accent dark:text-accent-dark hover:underline font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Field Reports</span>
            </Link>
          ) : (
            <a href="#title-block" className="font-semibold tracking-wider text-ink dark:text-ink-dark hover:text-accent dark:hover:text-accent-dark transition-colors">
              ARJUN R // FDE FIELD REPORTS
            </a>
          )}
        </div>

        {/* Middle: Jump Navigation (desktop only) */}
        {!isProjectPage && (
          <nav className="hidden md:flex items-center space-x-4 text-[11px] text-ink-secondary dark:text-ink-secondaryDark">
            <a href="#field-reports" className="hover:text-accent dark:hover:text-accent-dark">
              02. Field Reports
            </a>
            <a href="#systems" className="hover:text-accent dark:hover:text-accent-dark">
              03. Systems
            </a>
            <a href="#table-1" className="hover:text-accent dark:hover:text-accent-dark font-semibold text-ink dark:text-ink-dark">
              Table 1 (Trust Layers)
            </a>
            <a href="#publication" className="hover:text-accent dark:hover:text-accent-dark">
              05. Publication
            </a>
            <a href="#toolkit" className="hover:text-accent dark:hover:text-accent-dark">
              06. Toolkit
            </a>
            <a href="#contact" className="hover:text-accent dark:hover:text-accent-dark">
              08. Contact
            </a>
          </nav>
        )}

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download="Arjun_R_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 border border-paper-border dark:border-paper-borderDark text-ink dark:text-ink-dark hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark rounded-sm transition-colors text-[11px]"
          >
            <Download className="w-3 h-3" />
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            className="p-1 border border-paper-border dark:border-paper-borderDark text-ink dark:text-ink-dark rounded-sm hover:border-accent dark:hover:border-accent-dark transition-colors"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
