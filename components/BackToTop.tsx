"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top of academic paper"
      title="Back to Top"
      className="fixed bottom-6 right-6 z-30 p-2.5 rounded-sm border border-academic-border dark:border-academic-borderDark bg-paper-surface/90 dark:bg-paper-surfaceDark/90 backdrop-blur text-ink dark:text-ink-dark shadow-md hover:border-academic-blue hover:text-academic-blue dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all font-mono text-xs flex items-center gap-1.5 no-print"
    >
      <ArrowUp className="w-4 h-4" />
      <span className="hidden sm:inline text-[11px]">Top</span>
    </button>
  );
};
