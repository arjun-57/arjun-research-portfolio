import React from "react";
import { ShieldCheck } from "lucide-react";

export const Section4Table1TrustLayers: React.FC = () => {
  return (
    <section id="table-1" className="my-12 break-inside-avoid">
      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-mono text-xs font-bold text-accent dark:text-accent-dark">
          04.
        </span>
        <h2 className="font-serif text-lg font-bold tracking-tight text-ink dark:text-ink-dark uppercase">
          Table 1: Operational Trust Layers Across All Systems
        </h2>
      </div>

      <p className="font-serif text-sm text-ink-secondary dark:text-ink-secondaryDark leading-relaxed mb-4">
        Every system I have designed or deployed features a dedicated verification layer that bounds failure modes before predictions affect real people or physical hardware.
      </p>

      {/* Prominent Academic Table Container */}
      <div className="border-2 border-accent dark:border-accent-dark bg-paper-surface dark:bg-paper-surfaceDark p-4 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-paper-border dark:border-paper-borderDark text-xs font-mono">
          <div className="flex items-center gap-2 text-ink dark:text-ink-dark font-semibold">
            <ShieldCheck className="w-4 h-4 text-accent dark:text-accent-dark" />
            <span>Table 1: Comparative Failure Modes &amp; Verification Mechanisms</span>
          </div>
          <span className="text-[11px] text-accent dark:text-accent-dark font-bold uppercase tracking-wider">
            Core Thesis
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-serif">
            <thead>
              <tr className="border-b-2 border-ink dark:border-ink-dark font-mono text-xs text-ink dark:text-ink-dark">
                <th className="py-2.5 px-3 font-bold w-1/4">System</th>
                <th className="py-2.5 px-3 font-bold w-1/3">Target Failure Mode</th>
                <th className="py-2.5 px-3 font-bold w-5/12">Verification Mechanism</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-paper-border/80 dark:divide-paper-borderDark/80">
              <tr className="hover:bg-paper-bg/60 dark:hover:bg-gray-800/40 transition-colors">
                <td className="py-3 px-3 font-mono font-semibold text-accent dark:text-accent-dark">
                  Energy MAS
                </td>
                <td className="py-3 px-3 text-ink-secondary dark:text-ink-secondaryDark">
                  False-data injection, telemetry packet loss, network delay
                </td>
                <td className="py-3 px-3 text-ink dark:text-ink-dark font-medium">
                  Trust-aware anomaly filter isolating compromised nodes before physical power flow simulation.
                </td>
              </tr>

              <tr className="hover:bg-paper-bg/60 dark:hover:bg-gray-800/40 transition-colors">
                <td className="py-3 px-3 font-mono font-semibold text-accent dark:text-accent-dark">
                  Contra
                </td>
                <td className="py-3 px-3 text-ink-secondary dark:text-ink-secondaryDark">
                  Hallucinated claims, confirmation bias, sycophantic consensus
                </td>
                <td className="py-3 px-3 text-ink dark:text-ink-dark font-medium">
                  Structured evidence ledger + citation scoring striking statements lacking empirical backing.
                </td>
              </tr>

              <tr className="hover:bg-paper-bg/60 dark:hover:bg-gray-800/40 transition-colors">
                <td className="py-3 px-3 font-mono font-semibold text-accent dark:text-accent-dark">
                  Sine2Times
                </td>
                <td className="py-3 px-3 text-ink-secondary dark:text-ink-secondaryDark">
                  Wrong LLM mathematics, subtle algebraic or calculus errors
                </td>
                <td className="py-3 px-3 text-ink dark:text-ink-dark font-medium">
                  Deterministic SymPy verification pipeline ensuring 100% mathematical correctness of every question and hint.
                </td>
              </tr>

              <tr className="hover:bg-paper-bg/60 dark:hover:bg-gray-800/40 transition-colors">
                <td className="py-3 px-3 font-mono font-semibold text-accent dark:text-accent-dark">
                  Placement Engine
                </td>
                <td className="py-3 px-3 text-ink-secondary dark:text-ink-secondaryDark">
                  Demographic selection disparity across student candidate groups
                </td>
                <td className="py-3 px-3 text-ink dark:text-ink-dark font-medium">
                  Fairlearn fairness constraints reducing demographic disparity gap from 17.9% to 2.3% while holding 92.8% accuracy.
                </td>
              </tr>

              <tr className="hover:bg-paper-bg/60 dark:hover:bg-gray-800/40 transition-colors">
                <td className="py-3 px-3 font-mono font-semibold text-accent dark:text-accent-dark">
                  KNS Property Intel
                </td>
                <td className="py-3 px-3 text-ink-secondary dark:text-ink-secondaryDark">
                  Ownership conflicts missed across disparate bank auction notices
                </td>
                <td className="py-3 px-3 text-ink dark:text-ink-dark font-medium">
                  Automated investigation loops flagging duplicate titles and title risks for final human legal review.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-3 pt-2 border-t border-paper-border dark:border-paper-borderDark text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark flex flex-col sm:flex-row justify-between gap-1">
          <span>Table 1 Note: AI proposes; deterministic filters, symbolic gates, and human practitioners verify.</span>
          <span>SRM IST • 2026</span>
        </div>
      </div>
    </section>
  );
};
