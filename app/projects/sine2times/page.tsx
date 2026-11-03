import React from "react";
import { TopBar } from "@/components/fde/TopBar";
import { ArrowLeft, Github, Calculator, Layers, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sine2Times: Diagnostic Mathematics Tutor | Arjun R",
  description: "Adaptive mathematics tutor with prerequisite DAG binary-search diagnosis, Bayesian Knowledge Tracing, and a 4-stage SymPy verification gate certifying 100% mathematical correctness.",
};

export default function Sine2TimesPage() {
  return (
    <div className="min-h-screen bg-paper-bg text-ink dark:bg-paper-darkBg dark:text-ink-dark transition-colors duration-200">
      <TopBar isProjectPage={true} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 font-mono text-xs text-ink-muted dark:text-ink-mutedDark">
          <Link href="/" className="hover:text-accent dark:hover:text-accent-dark">
            Field Reports
          </Link>{" "}
          / <span className="text-ink dark:text-ink-dark font-semibold">System 3.3: Sine2Times</span>
        </div>

        {/* Case Study Header */}
        <header className="pb-4 mb-6 border-b border-paper-border dark:border-paper-borderDark">
          <span className="font-mono text-xs font-bold text-accent dark:text-accent-dark uppercase tracking-wider">
            Case Study 3.3 • Adaptive Diagnostic Tutoring
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink dark:text-ink-dark mt-1">
            Sine2Times: Diagnostic Mathematics Tutor
          </h1>
          <p className="font-serif italic text-sm text-ink-secondary dark:text-ink-secondaryDark mt-2">
            Prerequisite DAG bisection, Bayesian Knowledge Tracing, and a 4-stage SymPy gate ensuring 100% mathematical correctness.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="https://github.com/arjun-57/Sin2Times"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark text-ink dark:text-ink-dark hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark rounded-sm transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repository: arjun-57/Sin2Times</span>
            </a>
            <span className="text-ink-muted dark:text-ink-mutedDark">
              FastAPI • React • SymPy • 953 Hermetic Tests
            </span>
          </div>
        </header>

        {/* Section: Context & Layman Summary */}
        <section className="mb-8">
          <h2 className="font-serif text-lg font-bold text-ink dark:text-ink-dark mb-2">
            1. Context &amp; Problem
          </h2>
          <div className="space-y-3 font-serif text-sm leading-relaxed text-ink dark:text-ink-dark">
            <p>
              <strong>In plain English:</strong> When students struggle with trigonometry or calculus, most online tutors just explain the same formula over again. But usually, the student isn&apos;t confused about the new topic—they are missing a hidden prerequisite from years ago (like how angle measurement works on a unit circle).
            </p>
            <p>
              Sine2Times models subjects as a prerequisite family tree. It uses an algorithm similar to binary search to walk backwards through concepts and pinpoint the root misunderstanding in minimal steps.
            </p>
          </div>
        </section>

        {/* Section: Hard Constraints */}
        <section className="mb-8 p-4 bg-paper-surface dark:bg-paper-surfaceDark border border-paper-border dark:border-paper-borderDark">
          <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-accent dark:text-accent-dark mb-2">
            2. Operational Constraints
          </h2>
          <ul className="space-y-1.5 text-xs font-mono text-ink dark:text-ink-dark">
            <li>• <strong>100% Math Correctness:</strong> Language models write explanations, but zero math is trusted without formal symbolic proof.</li>
            <li>• <strong>Kernel/Agent Isolation:</strong> Strict architectural boundary—the diagnostic kernel is deterministic and has no network access (enforced by 953 hermetic tests).</li>
            <li>• <strong>Refusal as a First-Class Output:</strong> If a generated math proof fails SymPy certification after two repair attempts, the system shows an honest refusal state rather than an inaccurate answer.</li>
          </ul>
        </section>

        {/* Section: Architecture Diagram (SVG) */}
        <section className="mb-8">
          <h2 className="font-serif text-lg font-bold text-ink dark:text-ink-dark mb-2">
            3. System Architecture
          </h2>
          <p className="font-serif text-xs text-ink-secondary dark:text-ink-secondaryDark mb-3">
            Two distinct layers: a deterministic prerequisite search kernel and a 4-stage SymPy gate that screens all generated outputs.
          </p>

          <div className="p-4 bg-paper-surface dark:bg-paper-surfaceDark border border-paper-border dark:border-paper-borderDark overflow-x-auto">
            <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-3">
              Figure: Sine2Times Dual-Loop Diagnostic &amp; Symbolic Gate Architecture
            </div>
            <svg viewBox="0 0 760 170" className="w-full min-w-[680px] text-xs font-mono">
              <rect x="10" y="20" width="130" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
              <text x="75" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark font-bold text-[11px]">Student Answer</text>
              <text x="75" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Math Submission</text>

              <path d="M 140 45 L 175 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#flow-arrow-3)" className="text-ink dark:text-ink-dark" />

              <rect x="180" y="20" width="150" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
              <text x="255" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark font-bold text-[11px]">Diagnostic Kernel</text>
              <text x="255" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Prerequisite DAG Bisect</text>

              <path d="M 330 45 L 365 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#flow-arrow-3)" className="text-ink dark:text-ink-dark" />

              <rect x="370" y="20" width="145" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
              <text x="442" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark font-bold text-[11px]">Bayesian Tracing</text>
              <text x="442" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Mastery &amp; Struggle Est.</text>

              <path d="M 515 45 L 550 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#flow-arrow-3)" className="text-ink dark:text-ink-dark" />

              <rect x="555" y="10" width="190" height="70" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent dark:text-accent-dark" />
              <text x="650" y="32" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark font-bold text-[11px]">4-Stage SymPy Gate</text>
              <text x="650" y="48" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark text-[10px]">Schema &rarr; Safe Parse</text>
              <text x="650" y="62" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark text-[10px]">Policy &rarr; SymPy Solver</text>

              {/* Output path */}
              <path d="M 650 80 L 650 110 L 450 110" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" markerEnd="url(#flow-arrow-3)" className="text-ink-muted dark:text-ink-mutedDark" />

              <rect x="180" y="95" width="265" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
              <text x="312" y="118" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark font-bold text-[11px]">Certified Remediation Plan</text>
              <text x="312" y="132" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">100% Mathematically Verified Steps</text>

              <defs>
                <marker id="flow-arrow-3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="currentColor" className="text-ink dark:text-ink-dark" />
                </marker>
              </defs>
            </svg>
          </div>
        </section>

        {/* Section: Failure Modes & Mitigations */}
        <section className="mb-8">
          <h2 className="font-serif text-lg font-bold text-ink dark:text-ink-dark mb-3">
            4. Failure Modes &amp; Defensive Mitigations
          </h2>

          <div className="space-y-4 text-xs font-serif">
            <div className="p-4 border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark">
              <span className="font-mono font-bold text-accent dark:text-accent-dark block mb-1">
                Failure Mode 1: Incorrect AI Math Steps &amp; False Hints
              </span>
              <p className="text-ink dark:text-ink-dark leading-relaxed mb-2">
                <strong>Hazard:</strong> LLMs are notoriously bad at rigorous symbolic algebraic manipulations, frequently inventing plausible but mathematically false explanations.
              </p>
              <p className="text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                <strong>Mitigation:</strong> All generated hints and answers are piped through SymPy. SymPy evaluates algebraic equivalence deterministically. If an equation does not certify, it is blocked.
              </p>
            </div>

            <div className="p-4 border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark">
              <span className="font-mono font-bold text-accent dark:text-accent-dark block mb-1">
                Failure Mode 2: Asking Too Many Questions Without Finding the Gap
              </span>
              <p className="text-ink dark:text-ink-dark leading-relaxed mb-2">
                <strong>Hazard:</strong> Students get fatigued and drop off if a tutor asks 20 random diagnostic questions.
              </p>
              <p className="text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                <strong>Mitigation:</strong> Binary search over the prerequisite Directed Acyclic Graph (DAG) isolates the root misconception in O(log n) probes with stated tie-breakers.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Tech Stack */}
        <section className="mb-8 border-t border-paper-border dark:border-paper-borderDark pt-4 text-xs font-mono">
          <span className="font-bold text-ink dark:text-ink-dark block mb-2">
            Technology Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {["FastAPI", "React", "SymPy", "Bayesian Knowledge Tracing", "SQLite", "Pydantic", "Python 3.11", "LangGraph"].map((t) => (
              <span key={t} className="px-2 py-1 bg-paper-surface dark:bg-paper-surfaceDark border border-paper-border dark:border-paper-borderDark">
                {t}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

