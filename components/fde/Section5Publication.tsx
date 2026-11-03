import React from "react";
import { ArrowDownRight, Award } from "lucide-react";

export const Section5Publication: React.FC = () => {
  return (
    <section id="publication" className="mb-10 break-inside-avoid">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="font-mono text-xs font-bold text-accent dark:text-accent-dark">
          05.
        </span>
        <h2 className="font-serif text-lg font-bold tracking-tight text-ink dark:text-ink-dark uppercase">
          Research Publication: Fairness-Constrained Placement Engine
        </h2>
      </div>

      <div className="border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-5">
        <div className="pb-3 border-b border-paper-border dark:border-paper-borderDark flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div>
            <span className="font-mono text-xs text-accent dark:text-accent-dark font-semibold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              Conference Publication • ICISC 2026
            </span>
            <h3 className="font-serif text-base font-bold text-ink dark:text-ink-dark mt-1">
              &ldquo;Bias-Free AI-Driven Placement Automation Using Rule-Augmented Machine Learning&rdquo;
            </h3>
          </div>
          <span className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark">
            Arjun R • In Press
          </span>
        </div>

        <div className="my-3 text-xs font-serif leading-relaxed text-ink dark:text-ink-dark">
          <p className="mb-2">
            <strong>In layman terms:</strong> Automated hiring tools often copy historical human biases, unfairly filtering out qualified applicants from underrepresented groups. In this study, we built a hiring system that pairs machine learning with Fairlearn fairness algorithms to ensure equal selection rates across student demographics.
          </p>
        </div>

        {/* Equation (1) with Plain English Explanation */}
        <div className="my-4 p-3 bg-paper-bg dark:bg-paper-darkBg border border-paper-border dark:border-paper-borderDark text-xs font-mono">
          <div className="flex justify-between items-center mb-1 text-ink-muted dark:text-ink-mutedDark text-[11px]">
            <span>Mathematical Fairness Constraint</span>
            <span>Equation (1)</span>
          </div>
          <div className="text-center py-2 text-sm font-serif">
            &Delta;<sub>DP</sub> = | P(&#376; = 1 | A = 0) &minus; P(&#376; = 1 | A = 1) | &le; &epsilon;
          </div>
          <p className="text-[11px] font-serif text-ink-muted dark:text-ink-mutedDark text-center mt-1">
            <strong>Layman translation:</strong> The difference in interview selection probability between demographic groups (A=0 vs A=1) cannot exceed threshold &epsilon;.
          </p>
        </div>

        {/* Figure 5: Inline SVG Bar Chart */}
        <div className="mt-4 pt-3 border-t border-paper-border dark:border-paper-borderDark">
          <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-3 flex items-center justify-between">
            <span>Figure 5: Demographic Parity Gap Reduction (1,200 Candidates • 50 Companies)</span>
            <span>Reported Results</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* SVG Bars */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span>Initial Baseline (Unmitigated)</span>
                  <span className="font-bold text-accent dark:text-accent-dark">17.9% Gap</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-6">
                  <div className="bg-accent dark:bg-accent-dark h-full flex items-center justify-end pr-2 text-white text-[11px] font-mono font-bold" style={{ width: "71.6%" }}>
                    17.9%
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span>Fairlearn Mitigated Model</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">2.3% Gap</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-6">
                  <div className="bg-emerald-700 dark:bg-emerald-500 h-full flex items-center justify-end pr-2 text-white text-[11px] font-mono font-bold" style={{ width: "9.2%" }}>
                    2.3%
                  </div>
                </div>
              </div>
            </div>

            {/* Metric Callout */}
            <div className="p-3 bg-paper-bg dark:bg-paper-darkBg border border-paper-border dark:border-paper-borderDark text-xs font-mono space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
                <ArrowDownRight className="w-4 h-4" />
                <span>Disparity Drop: -15.6 percentage points (87.2% relative improvement)</span>
              </div>
              <div className="text-ink dark:text-ink-dark font-serif">
                <strong>Hiring accuracy: 92.8%</strong> retained across 50 corporate hiring profiles, proving that ethical fairness does not destroy practical predictive utility.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

