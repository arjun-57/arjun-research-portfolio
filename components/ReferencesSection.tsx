"use client";

import React, { useState } from "react";
import { referencesData, appendixItems } from "@/data/references";
import { CitationModal } from "./CitationModal";
import {
  BookMarked,
  Download,
  FileCode,
  FileText,
  FolderGit2,
  Quote,
  ExternalLink,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export const ReferencesSection: React.FC = () => {
  const [isCitationOpen, setIsCitationOpen] = useState(false);

  return (
    <section id="references" className="my-16 scroll-mt-20">
      {/* Section Heading */}
      <div className="flex items-center gap-3 border-b-2 border-academic-blue dark:border-blue-400 pb-2 mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-ink-dark">
          08. REFERENCES AND APPENDIX
        </h2>
      </div>

      <div className="space-y-12">
        {/* Part A: Academic References (Strictly Authentic) */}
        <div className="border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-6 sm:p-8 rounded-sm shadow-sm break-inside-avoid">
          <div className="flex items-center justify-between pb-4 border-b border-academic-border dark:border-academic-borderDark">
            <div className="flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-academic-blue dark:text-blue-400" />
              <h3 className="font-serif text-lg font-bold text-ink dark:text-ink-dark">
                References &amp; Documented Sources
              </h3>
            </div>
            <button
              onClick={() => setIsCitationOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-academic-blue dark:text-blue-400 hover:underline"
            >
              <Quote className="w-3.5 h-3.5" />
              <span>Copy BibTeX</span>
            </button>
          </div>

          <div className="py-4 space-y-4">
            {referencesData.map((ref) => (
              <div
                key={ref.id}
                className="p-3.5 bg-paper-bg/50 dark:bg-gray-900/40 border border-academic-border/60 dark:border-academic-borderDark/60 rounded-sm text-xs font-mono"
              >
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-academic-blue dark:text-blue-400 flex-shrink-0">
                    {ref.citationKey}
                  </span>
                  <div className="space-y-1 flex-1 font-sans">
                    <p className="font-serif font-bold text-ink dark:text-ink-dark text-sm leading-snug">
                      {ref.title}
                    </p>
                    <p className="text-xs text-ink-secondary dark:text-ink-secondaryDark font-mono">
                      {ref.authors.join(", ")} ({ref.year}). <em>{ref.venueOrPlatform}</em>.
                    </p>
                    <p className="text-xs text-ink-muted dark:text-ink-mutedDark">
                      {ref.details}
                    </p>
                    {ref.isPending && (
                      <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded border border-amber-300 dark:border-amber-700">
                        Proceedings Publication Pending (ICISC 2026)
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-academic-border dark:border-academic-borderDark text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark">
            Strict Source Policy: Only author&apos;s own publication and verified system documentation are cited. No fabricated external citations or DOI links.
          </div>
        </div>

        {/* Part B: Appendix Documentation & Deliverables */}
        <div className="border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-6 sm:p-8 rounded-sm shadow-sm break-inside-avoid">
          <div className="flex items-center gap-2 pb-4 border-b border-academic-border dark:border-academic-borderDark">
            <FileCode className="w-5 h-5 text-academic-blue dark:text-blue-400" />
            <h3 className="font-serif text-lg font-bold text-ink dark:text-ink-dark">
              Appendix: Primary Assets &amp; Repositories
            </h3>
          </div>

          <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {appendixItems.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-paper-bg/60 dark:bg-gray-900/40 border border-academic-border/60 dark:border-academic-borderDark/60 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="font-bold text-academic-blue dark:text-blue-400">
                      {item.label}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-academic-border dark:border-academic-borderDark text-ink-secondary dark:text-ink-secondaryDark">
                      {item.format}
                    </span>
                  </div>

                  <p className="text-xs font-sans text-ink-secondary dark:text-ink-secondaryDark leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-academic-border/60 dark:border-academic-borderDark/60">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 text-xs font-mono font-medium bg-paper-surface dark:bg-paper-cardDark border border-academic-border dark:border-academic-borderDark text-ink dark:text-ink-dark hover:border-academic-blue dark:hover:border-blue-400 transition-colors rounded-sm text-center"
                  >
                    <Download className="w-3.5 h-3.5 text-academic-blue dark:text-blue-400" />
                    <span>{item.actionLabel}</span>
                  </a>

                  <div className="mt-2 text-center text-[10px] font-mono text-ink-muted dark:text-ink-mutedDark">
                    Status: {item.statusTag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CitationModal isOpen={isCitationOpen} onClose={() => setIsCitationOpen(false)} />
    </section>
  );
};
