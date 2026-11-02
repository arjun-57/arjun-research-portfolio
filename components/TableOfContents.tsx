"use client";

import React, { useEffect, useState } from "react";
import { BookMarked, ChevronRight, FileText } from "lucide-react";

interface TocItem {
  id: string;
  number: string;
  label: string;
  isPrimary?: boolean;
}

const tocItems: TocItem[] = [
  { id: "hero", number: "—", label: "Title & Author" },
  { id: "abstract", number: "—", label: "Abstract & Keywords" },
  { id: "introduction", number: "01", label: "Introduction" },
  { id: "research", number: "02", label: "Research Contribution", isPrimary: true },
  { id: "experience", number: "03", label: "Engineering Experience" },
  { id: "projects", number: "04", label: "Selected Projects" },
  { id: "skills", number: "05", label: "Technical Skills" },
  { id: "education", number: "06", label: "Education & Certifications" },
  { id: "contact", number: "07", label: "Contact & Conclusion" },
  { id: "references", number: "08", label: "References & Appendix" },
];

export const TableOfContents: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden xl:block w-64 shrink-0 no-print">
      <div className="sticky top-20 border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-4 rounded-sm shadow-sm">
        {/* TOC Header */}
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-academic-border dark:border-academic-borderDark">
          <BookMarked className="w-4 h-4 text-academic-blue dark:text-blue-400" />
          <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-ink dark:text-ink-dark">
            Contents Outline
          </h3>
        </div>

        {/* Navigation List */}
        <nav className="space-y-1 text-xs font-mono">
          {tocItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`group flex items-center justify-between px-2.5 py-1.5 rounded-sm transition-all ${
                  isActive
                    ? "bg-academic-tint dark:bg-academic-tintDark text-academic-blue dark:text-blue-400 font-bold border-l-2 border-academic-blue dark:border-blue-400"
                    : "text-ink-secondary dark:text-ink-secondaryDark hover:bg-paper-bg dark:hover:bg-gray-800 hover:text-ink dark:hover:text-ink-dark"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className={`text-[10px] ${
                      isActive ? "text-academic-blue dark:text-blue-400" : "text-ink-muted dark:text-ink-mutedDark"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span className="truncate">{item.label}</span>
                </div>

                {item.isPrimary && (
                  <span className="text-[9px] px-1 py-0.2 bg-academic-blue text-white rounded font-sans uppercase font-semibold">
                    Primary
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Academic Meta Widget */}
        <div className="mt-4 pt-3 border-t border-academic-border dark:border-academic-borderDark text-[10px] font-mono text-ink-muted dark:text-ink-mutedDark space-y-1">
          <div className="flex justify-between">
            <span>Author:</span>
            <span className="text-ink dark:text-ink-dark font-semibold">Arjun R</span>
          </div>
          <div className="flex justify-between">
            <span>Affiliation:</span>
            <span>SRMIST, 2027</span>
          </div>
          <div className="flex justify-between">
            <span>Preprint Version:</span>
            <span>v1.0 (2026)</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
