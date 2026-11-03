import React from "react";

export const Section1Intro: React.FC = () => {
  return (
    <section id="introduction" className="mb-8 break-inside-avoid">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="font-mono text-xs font-bold text-accent dark:text-accent-dark">
          01.
        </span>
        <h2 className="font-serif text-lg font-bold tracking-tight text-ink dark:text-ink-dark uppercase">
          Introduction: How I Work
        </h2>
      </div>

      <p className="font-serif text-sm text-ink dark:text-ink-dark leading-relaxed text-justify mb-4">
        AI models produce plausible recommendations, but enterprises cannot deploy probabilistic guesses where mistakes cause legal penalties, equipment damage, or unfair decisions. My engineering practice focuses on getting inside operational workflows, isolating where automated intelligence creates value, and locking every AI output behind deterministic checks.
      </p>

      {/* 4-Step Practical Engineering Loop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-3 bg-paper-surface dark:bg-paper-surfaceDark border border-paper-border dark:border-paper-borderDark">
          <div className="font-bold text-accent dark:text-accent-dark mb-1">
            1. Embed
          </div>
          <p className="font-serif text-ink-secondary dark:text-ink-secondaryDark text-xs leading-snug">
            Work directly inside business operations (legal, housing). Understand daily operator toil and data friction first-hand.
          </p>
        </div>

        <div className="p-3 bg-paper-surface dark:bg-paper-surfaceDark border border-paper-border dark:border-paper-borderDark">
          <div className="font-bold text-accent dark:text-accent-dark mb-1">
            2. Decompose
          </div>
          <p className="font-serif text-ink-secondary dark:text-ink-secondaryDark text-xs leading-snug">
            Split open-ended challenges into discrete sub-problems. Separate fuzzy generation from strict rule validation.
          </p>
        </div>

        <div className="p-3 bg-paper-surface dark:bg-paper-surfaceDark border border-paper-border dark:border-paper-borderDark">
          <div className="font-bold text-accent dark:text-accent-dark mb-1">
            3. Ship
          </div>
          <p className="font-serif text-ink-secondary dark:text-ink-secondaryDark text-xs leading-snug">
            Build clean, intuitive software (FastAPI, React) tailored for non-technical users who need reliable answers fast.
          </p>
        </div>

        <div className="p-3 bg-paper-surface dark:bg-paper-surfaceDark border border-paper-border dark:border-paper-borderDark">
          <div className="font-bold text-accent dark:text-accent-dark mb-1">
            4. Verify
          </div>
          <p className="font-serif text-ink-secondary dark:text-ink-secondaryDark text-xs leading-snug">
            Every system has a guardrail that checks the AI: mathematical solvers, anomaly filters, and human-in-the-loop review.
          </p>
        </div>
      </div>
    </section>
  );
};

