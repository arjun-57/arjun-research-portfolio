import React from "react";
import { Users2 } from "lucide-react";

export const Section7Leadership: React.FC = () => {
  return (
    <section id="leadership" className="mb-10 break-inside-avoid">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="font-mono text-xs font-bold text-accent dark:text-accent-dark">
          07.
        </span>
        <h2 className="font-serif text-lg font-bold tracking-tight text-ink dark:text-ink-dark uppercase">
          Operational Leadership &amp; Stakeholder Management
        </h2>
      </div>

      <div className="border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-paper-border dark:border-paper-borderDark">
          <div className="flex items-center gap-2">
            <Users2 className="w-4 h-4 text-accent dark:text-accent-dark" />
            <h3 className="font-serif text-sm font-bold text-ink dark:text-ink-dark">
              AIESEC in Chennai
            </h3>
          </div>
          <span className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark">
            Senior MB Member &amp; Team Leader • Feb 2024–Feb 2025
          </span>
        </div>

        <div className="pt-2 text-xs font-serif text-ink dark:text-ink-dark leading-relaxed">
          <p>
            Progressed from General Body to OC President, leading cross-functional student operations across logistics, budget planning, and exchange programs.
          </p>
        </div>
      </div>
    </section>
  );
};
