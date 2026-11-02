"use client";

import React, { useState } from "react";
import { researchData } from "@/data/research";
import { ResearchChart } from "./ResearchChart";
import { CitationModal } from "./CitationModal";
import {
  Award,
  BookOpen,
  FileCheck2,
  FileText,
  Quote,
  Scale,
  Sparkles,
  ExternalLink,
  AlertCircle
} from "lucide-react";

export const ResearchSection: React.FC = () => {
  const [isCitationOpen, setIsCitationOpen] = useState(false);
  const [showPendingNotice, setShowPendingNotice] = useState(false);

  return (
    <section id="research" className="my-16 scroll-mt-20">
      {/* Visual Prominence Frame */}
      <div className="relative border-2 border-academic-blue/80 dark:border-blue-500/80 bg-paper-surface dark:bg-paper-surfaceDark p-6 sm:p-8 md:p-10 rounded-sm shadow-md">
        {/* Spotlight Watermark / Primary Research Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-academic-border dark:border-academic-borderDark">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-academic-blue text-white font-mono text-[11px] font-bold uppercase tracking-wider rounded-sm flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              Primary Research Contribution
            </span>
            <span className="font-mono text-xs font-semibold text-ink-secondary dark:text-ink-secondaryDark">
              Venue: {researchData.venue}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCitationOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-academic-border dark:border-academic-borderDark bg-paper-bg dark:bg-paper-cardDark text-xs font-mono text-ink-secondary dark:text-ink-secondaryDark hover:border-academic-blue hover:text-academic-blue dark:hover:text-blue-400 rounded transition-colors"
            >
              <Quote className="w-3.5 h-3.5" />
              <span>BibTeX Citation</span>
            </button>
          </div>
        </div>

        {/* Section Title */}
        <div className="mt-6 mb-2">
          <div className="font-mono text-xs text-academic-blue dark:text-blue-400 font-bold uppercase tracking-wider">
            Section 02
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-ink dark:text-ink-dark mt-1 leading-snug">
            {researchData.title}
          </h2>
        </div>

        {/* Paper Metadata Strip */}
        <div className="py-4 border-y border-academic-border/70 dark:border-academic-borderDark/70 my-4 flex flex-wrap items-center justify-between gap-y-2 text-xs font-mono text-ink-secondary dark:text-ink-secondaryDark">
          <div>
            <span className="text-ink dark:text-ink-dark font-semibold">Author: </span>
            {researchData.authors.join(", ")} (SRMIST)
          </div>
          <div>
            <span className="text-ink dark:text-ink-dark font-semibold">Publication Venue: </span>
            {researchData.venueFull}
          </div>
          <div>
            <span className="text-ink dark:text-ink-dark font-semibold">Cohort: </span>
            {researchData.dataset.candidates.toLocaleString()} candidates • {researchData.dataset.companies} companies
          </div>
        </div>

        {/* Primary Research Paper Callout & Actions */}
        <div className="my-6 p-4 sm:p-5 bg-academic-tint dark:bg-academic-tintDark border border-academic-blue/30 dark:border-blue-400/30 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-serif font-bold text-ink dark:text-ink-dark text-base sm:text-lg flex items-center gap-2">
              <Scale className="w-5 h-5 text-academic-blue dark:text-blue-400 flex-shrink-0" />
              <span>Full Conference Manuscript (ICISC 2026)</span>
            </div>
            <p className="text-xs text-ink-secondary dark:text-ink-secondaryDark max-w-xl font-sans">
              Access the formal manuscript preprint describing rule-augmented Fairlearn constraints and algorithmic mitigation for institutional placement ecosystems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
            {/* Prominent Read Full Paper Link Placeholder */}
            <a
              href={researchData.paperPdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-academic-blue text-white rounded-sm font-mono text-xs font-bold uppercase tracking-wider hover:bg-academic-blueLight transition-all shadow-sm"
              title="Open Research Manuscript PDF"
            >
              <FileText className="w-4 h-4" />
              <span>[READ FULL PAPER]</span>
            </a>

            <button
              onClick={() => setShowPendingNotice(!showPendingNotice)}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono text-ink-muted dark:text-ink-mutedDark hover:text-ink dark:hover:text-ink-dark"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Status Notice</span>
            </button>
          </div>
        </div>

        {/* Publication Status Notice Dropdown */}
        {showPendingNotice && (
          <div className="mb-6 p-3.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 text-xs font-mono text-amber-900 dark:text-amber-200 rounded-sm space-y-1 animate-in fade-in duration-150">
            <div className="font-semibold flex items-center gap-1.5">
              <InfoIcon className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>Publication Verification Status:</span>
            </div>
            <p className="font-sans text-xs leading-relaxed">
              {researchData.paperPdf.notice} A valid preprint document is available in the public papers repository; final conference camera-ready DOI indexing will be appended upon publisher schedule.
            </p>
          </div>
        )}

        {/* Subsection 2.1: Research Motivation */}
        <div className="mt-8 space-y-3">
          <h3 className="font-serif text-xl font-bold text-ink dark:text-ink-dark border-b border-academic-border dark:border-academic-borderDark pb-1.5">
            {researchData.subsections.motivation.title}
          </h3>
          <div className="space-y-3 text-sm sm:text-base leading-relaxed text-ink dark:text-ink-dark font-sans text-justify">
            {researchData.subsections.motivation.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Subsection 2.2: Proposed Approach */}
        <div className="mt-8 space-y-3">
          <h3 className="font-serif text-xl font-bold text-ink dark:text-ink-dark border-b border-academic-border dark:border-academic-borderDark pb-1.5">
            {researchData.subsections.approach.title}
          </h3>
          <div className="space-y-3 text-sm sm:text-base leading-relaxed text-ink dark:text-ink-dark font-sans text-justify">
            {researchData.subsections.approach.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Mathematical Formulation Callout */}
          <div className="my-4 p-4 bg-paper-bg dark:bg-gray-900/60 border border-academic-border dark:border-academic-borderDark rounded-sm text-xs font-mono">
            <div className="font-serif text-xs font-bold text-academic-blue dark:text-blue-400 uppercase tracking-wider mb-2">
              Mathematical Fairness Formulation
            </div>
            <div className="space-y-2">
              <div className="bg-white dark:bg-paper-surfaceDark p-2.5 border border-academic-border dark:border-academic-borderDark rounded text-center">
                <span className="font-serif italic text-sm">
                  Demographic Parity Gap: &Delta;<sub>DP</sub> = |P(&#376; = 1 | A = 0) - P(&#376; = 1 | A = 1)| &le; &epsilon;
                </span>
              </div>
              <p className="text-ink-secondary dark:text-ink-secondaryDark font-sans text-xs">
                Where &#376; represents the binary candidate shortlist recommendation, A &isin; &#123;0, 1&#125; denotes demographic group identity, and &epsilon; is the bounded disparity threshold enforced via Fairlearn reduction algorithms.
              </p>
            </div>
          </div>
        </div>

        {/* Subsection 2.3: Experimental Results */}
        <div className="mt-8 space-y-4">
          <h3 className="font-serif text-xl font-bold text-ink dark:text-ink-dark border-b border-academic-border dark:border-academic-borderDark pb-1.5">
            {researchData.subsections.results.title}
          </h3>

          <div className="space-y-3 text-sm sm:text-base leading-relaxed text-ink dark:text-ink-dark font-sans text-justify">
            {researchData.subsections.results.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="my-6 bg-paper-surface dark:bg-paper-surfaceDark border border-academic-border dark:border-academic-borderDark rounded-sm overflow-hidden">
            <div className="px-4 py-3 bg-academic-tint dark:bg-academic-tintDark border-b border-academic-border dark:border-academic-borderDark flex items-center justify-between">
              <span className="font-serif text-xs font-bold uppercase tracking-wider text-ink dark:text-ink-dark">
                Table 2: Experimental Fairness &amp; Performance Metrics
              </span>
              <span className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark">
                N = 1,200 Candidates | 50 Companies
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-academic-border dark:border-academic-borderDark bg-paper-bg/50 dark:bg-gray-800/40 text-ink dark:text-ink-dark">
                    <th className="py-2.5 px-4 font-semibold">Evaluation Metric</th>
                    <th className="py-2.5 px-4 font-semibold text-center">Reported Result</th>
                    <th className="py-2.5 px-4 font-semibold">Evaluation Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-academic-border/60 dark:divide-academic-borderDark/60">
                  <tr className="hover:bg-paper-bg/40 dark:hover:bg-gray-800/30">
                    <td className="py-3 px-4 font-medium text-ink dark:text-ink-dark">
                      Initial demographic parity gap
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-red-700 dark:text-red-400 text-sm">
                      17.9%
                    </td>
                    <td className="py-3 px-4 text-ink-secondary dark:text-ink-secondaryDark">
                      Unmitigated baseline candidate selection
                    </td>
                  </tr>
                  <tr className="hover:bg-paper-bg/40 dark:hover:bg-gray-800/30">
                    <td className="py-3 px-4 font-medium text-ink dark:text-ink-dark">
                      Final demographic parity gap
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-emerald-700 dark:text-emerald-400 text-sm">
                      2.3%
                    </td>
                    <td className="py-3 px-4 text-ink-secondary dark:text-ink-secondaryDark">
                      Rule-augmented Fairlearn constrained optimization
                    </td>
                  </tr>
                  <tr className="hover:bg-paper-bg/40 dark:hover:bg-gray-800/30">
                    <td className="py-3 px-4 font-medium text-ink dark:text-ink-dark">
                      Reported hiring accuracy
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-academic-blue dark:text-blue-400 text-sm">
                      92.8%
                    </td>
                    <td className="py-3 px-4 text-ink-secondary dark:text-ink-secondaryDark">
                      Classification test accuracy preserved across company criteria
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="px-4 py-2 border-t border-academic-border dark:border-academic-borderDark bg-paper-bg/30 dark:bg-gray-800/20 text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark">
              Note: Reported results from placement experimental evaluation. Values represent empirical findings on the candidate cohort.
            </div>
          </div>

          {/* Clean Comparison Visualization (Actual Bar Chart & Metrics) */}
          <ResearchChart
            initialGap={researchData.metrics.initialParityGap}
            finalGap={researchData.metrics.finalParityGap}
            accuracy={researchData.metrics.accuracy}
          />
        </div>

        {/* Subsection 2.4: Research Impact */}
        <div className="mt-8 space-y-3">
          <h3 className="font-serif text-xl font-bold text-ink dark:text-ink-dark border-b border-academic-border dark:border-academic-borderDark pb-1.5">
            {researchData.subsections.impact.title}
          </h3>
          <div className="space-y-3 text-sm sm:text-base leading-relaxed text-ink dark:text-ink-dark font-sans text-justify">
            {researchData.subsections.impact.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Academic Double Bottom Border */}
        <div className="mt-10 pt-4 border-t-2 border-academic-blue/80 dark:border-blue-500/80 flex flex-wrap items-center justify-between text-xs font-mono text-ink-muted dark:text-ink-mutedDark">
          <span>ICISC 2026 Proceedings Reference: [1]</span>
          <span>SRM Institute of Science and Technology</span>
        </div>
      </div>

      <CitationModal isOpen={isCitationOpen} onClose={() => setIsCitationOpen(false)} />
    </section>
  );
};

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
