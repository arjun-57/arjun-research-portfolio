"use client";

import React, { useState } from "react";
import { ArrowDownRight, CheckCircle2, Info } from "lucide-react";

interface ResearchChartProps {
  initialGap?: number;
  finalGap?: number;
  accuracy?: number;
}

export const ResearchChart: React.FC<ResearchChartProps> = ({
  initialGap = 17.9,
  finalGap = 2.3,
  accuracy = 92.8,
}) => {
  const [activeMetric, setActiveMetric] = useState<"gap" | "accuracy">("gap");

  const gapDelta = (initialGap - finalGap).toFixed(1);
  const percentReduction = (((initialGap - finalGap) / initialGap) * 100).toFixed(1);

  return (
    <div className="my-6 border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-5 md:p-6 rounded-sm">
      {/* Figure Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-academic-border dark:border-academic-borderDark">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-academic-blue dark:text-blue-400 font-semibold">
            Figure 4: Empirical Evaluation
          </span>
          <h4 className="font-serif text-base font-semibold text-ink dark:text-ink-dark mt-0.5">
            Fairness Mitigation vs. Accuracy Retention (N = 1,200 Candidates)
          </h4>
        </div>

        {/* View switcher */}
        <div className="flex items-center text-xs font-mono border border-academic-border dark:border-academic-borderDark rounded overflow-hidden">
          <button
            onClick={() => setActiveMetric("gap")}
            className={`px-3 py-1 transition-colors ${
              activeMetric === "gap"
                ? "bg-academic-blue text-white font-medium"
                : "bg-paper-bg dark:bg-paper-cardDark text-ink-secondary dark:text-ink-secondaryDark hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            Demographic Parity Gap
          </button>
          <button
            onClick={() => setActiveMetric("accuracy")}
            className={`px-3 py-1 transition-colors ${
              activeMetric === "accuracy"
                ? "bg-academic-blue text-white font-medium"
                : "bg-paper-bg dark:bg-paper-cardDark text-ink-secondary dark:text-ink-secondaryDark hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            Reported Accuracy
          </button>
        </div>
      </div>

      {/* Chart Canvas Area */}
      <div className="py-6">
        {activeMetric === "gap" ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* SVG Comparison Bars */}
              <div className="space-y-5">
                {/* Baseline Bar */}
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                    <span className="text-ink dark:text-ink-dark font-medium">
                      Baseline Model (Unmitigated)
                    </span>
                    <span className="text-red-700 dark:text-red-400 font-bold">
                      {initialGap}% Gap
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-7 rounded-sm overflow-hidden flex items-center">
                    <div
                      className="bg-red-700 dark:bg-red-500 h-full flex items-center justify-end pr-2 text-white text-xs font-mono font-semibold transition-all duration-700"
                      style={{ width: `${(initialGap / 25) * 100}%` }}
                    >
                      {initialGap}%
                    </div>
                  </div>
                  <p className="text-[11px] text-ink-muted dark:text-ink-mutedDark mt-1">
                    Historical placement decision gap across demographic subgroups
                  </p>
                </div>

                {/* Mitigated Bar */}
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                    <span className="text-academic-blue dark:text-blue-300 font-medium">
                      Rule-Augmented Fairlearn Pipeline
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                      {finalGap}% Gap
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-7 rounded-sm overflow-hidden flex items-center">
                    <div
                      className="bg-academic-blue dark:bg-blue-600 h-full flex items-center justify-end pr-2 text-white text-xs font-mono font-semibold transition-all duration-700"
                      style={{ width: `${(finalGap / 25) * 100}%` }}
                    >
                      {finalGap}%
                    </div>
                  </div>
                  <p className="text-[11px] text-ink-muted dark:text-ink-mutedDark mt-1">
                    Enforced constraint threshold with bounded demographic variance
                  </p>
                </div>
              </div>

              {/* Statistical Delta Card */}
              <div className="bg-academic-tint dark:bg-academic-tintDark p-4 border border-academic-border dark:border-academic-borderDark rounded-sm space-y-3">
                <div className="flex items-start gap-2">
                  <ArrowDownRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-ink-secondary dark:text-ink-secondaryDark">
                      Reported Disparity Reduction
                    </div>
                    <div className="text-2xl font-serif font-bold text-ink dark:text-ink-dark mt-0.5">
                      -{gapDelta} percentage points
                    </div>
                    <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-medium">
                      {percentReduction}% relative disparity reduction
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-academic-border dark:border-academic-borderDark text-xs text-ink-secondary dark:text-ink-secondaryDark space-y-1 font-sans">
                  <p>
                    <strong>Formulation:</strong> Demographic Parity Difference
                  </p>
                  <code className="block bg-white dark:bg-paper-surfaceDark p-1.5 text-[11px] font-mono border border-academic-border dark:border-academic-borderDark rounded">
                    Δ_DP = |P(Ŷ=1 | A=0) - P(Ŷ=1 | A=1)|
                  </code>
                  <p className="text-[11px] text-ink-muted dark:text-ink-mutedDark">
                    Reduced disparity from 0.179 to 0.023 while evaluating 1,200 candidates across 50 recruiting firms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Reported Accuracy View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-ink dark:text-ink-dark font-medium">
                  Reported Hiring Classification Accuracy
                </span>
                <span className="text-academic-blue dark:text-blue-400 font-bold text-sm">
                  {accuracy}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-8 rounded-sm overflow-hidden flex items-center">
                <div
                  className="bg-emerald-700 dark:bg-emerald-600 h-full flex items-center justify-end pr-3 text-white text-xs font-mono font-bold transition-all duration-700"
                  style={{ width: `${accuracy}%` }}
                >
                  {accuracy}%
                </div>
              </div>
              <div className="flex justify-between text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark mt-1">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>

            <div className="bg-academic-tint dark:bg-academic-tintDark p-4 border border-academic-border dark:border-academic-borderDark rounded-sm space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-mono font-semibold text-ink dark:text-ink-dark uppercase">
                  Retention of Predictive Validity
                </span>
              </div>
              <p className="text-xs text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                Applying fairness constraints often incurs an accuracy penalty (the fairness-accuracy trade-off). The rule-augmented formulation maintained a high <strong>{accuracy}%</strong> hiring match accuracy on the empirical evaluation set.
              </p>
              <div className="text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark pt-1 border-t border-academic-border dark:border-academic-borderDark">
                Source: Placement cohort evaluation (SRM / ICISC 2026 dataset).
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Academic Figure Caption */}
      <div className="pt-3 border-t border-academic-border dark:border-academic-borderDark text-xs text-ink-secondary dark:text-ink-secondaryDark leading-normal">
        <span className="font-serif italic font-medium text-ink dark:text-ink-dark">
          Figure 4 Caption.
        </span>{" "}
        Comparison of empirical recruitment equity metrics before and after rule-augmented Fairlearn mitigation. The demographic parity disparity is curtailed from 17.9% to 2.3% while holding overall hiring classification accuracy at 92.8% on a test cohort of 1,200 candidates across 50 companies.
      </div>
    </div>
  );
};
