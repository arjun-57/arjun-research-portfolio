"use client";

import React, { useState } from "react";
import { Check, Copy, Quote, X } from "lucide-react";
import { researchData } from "@/data/research";

interface CitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CitationModal: React.FC<CitationModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(researchData.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-paper-surface dark:bg-paper-surfaceDark border border-academic-border dark:border-academic-borderDark shadow-2xl p-6 rounded-sm">
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-3 border-b border-academic-border dark:border-academic-borderDark">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-academic-blue dark:text-blue-400" />
            <h3 className="font-serif text-lg font-bold text-ink dark:text-ink-dark">
              Bibliographic Citation (BibTeX)
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close citation modal"
            className="text-ink-secondary hover:text-ink dark:text-ink-secondaryDark dark:hover:text-ink-dark p-1 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Paper Details */}
        <div className="py-3 text-xs text-ink-secondary dark:text-ink-secondaryDark">
          <p className="font-serif text-sm font-semibold text-ink dark:text-ink-dark">
            {researchData.title}
          </p>
          <p className="mt-1 font-mono text-[11px]">
            {researchData.authors.join(", ")} • {researchData.venue} • {researchData.year}
          </p>
        </div>

        {/* Raw BibTeX Box */}
        <div className="relative my-2">
          <pre className="p-4 bg-gray-900 text-gray-100 font-mono text-xs rounded overflow-x-auto leading-relaxed selection:bg-academic-blue">
            <code>{researchData.bibtex}</code>
          </pre>
        </div>

        {/* Modal Actions */}
        <div className="mt-4 pt-3 border-t border-academic-border dark:border-academic-borderDark flex items-center justify-between">
          <span className="text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark">
            Format: Standard BibTeX entry for LaTeX documents
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-medium bg-academic-blue text-white rounded hover:bg-academic-blueLight transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy BibTeX
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-mono border border-academic-border dark:border-academic-borderDark rounded text-ink-secondary dark:text-ink-secondaryDark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
