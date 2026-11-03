import React from "react";
import { TopBar } from "@/components/fde/TopBar";
import { ArrowLeft, Github, Scale, Layers, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contra: Adversarial Multi-Agent Research Engine | Arjun R",
  description: "Dialectical research engine breaking questions into verifiable claims, pitting Advocate against Skeptic agents, and scoring evidence into an immutable ledger.",
};

export default function ContraPage() {
  return (
    <div className="min-h-screen bg-paper-bg text-ink dark:bg-paper-darkBg dark:text-ink-dark transition-colors duration-200">
      <TopBar isProjectPage={true} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 font-mono text-xs text-ink-muted dark:text-ink-mutedDark">
          <Link href="/" className="hover:text-accent dark:hover:text-accent-dark">
            Field Reports
          </Link>{" "}
          / <span className="text-ink dark:text-ink-dark font-semibold">System 3.2: Contra</span>
        </div>

        {/* Case Study Header */}
        <header className="pb-4 mb-6 border-b border-paper-border dark:border-paper-borderDark">
          <span className="font-mono text-xs font-bold text-accent dark:text-accent-dark uppercase tracking-wider">
            Case Study 3.2 • Multi-Agent Dialectical Synthesis
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink dark:text-ink-dark mt-1">
            Contra: Adversarial Multi-Agent Research Engine
          </h1>
          <p className="font-serif italic text-sm text-ink-secondary dark:text-ink-secondaryDark mt-2">
            Treating research like a courtroom trial: Advocate vs. Skeptic agents, Bayesian evidence ledgers, and automated citation auditing.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="https://github.com/arjun-57/Research-Contra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark text-ink dark:text-ink-dark hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark rounded-sm transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repository: arjun-57/Research-Contra</span>
            </a>
            <span className="text-ink-muted dark:text-ink-mutedDark">
              Python • FastAPI • Gemini • Next.js
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
              <strong>In plain English:</strong> When you ask standard AI a complex question (like &ldquo;Does remote work hurt junior engineer velocity?&rdquo;), it typically tries to sound agreeable and writes a generic summary. If you ask with a biased tone, it often hallucinates fake evidence to support your viewpoint.
            </p>
            <p>
              Contra fixes this by running a virtual courtroom trial. Instead of one AI writing an essay, Contra convenes opposing agents: an Advocate building the strongest affirmative case, and a Skeptic actively looking for counter-studies, flaws in methodology, and opposing data.
            </p>
          </div>
        </section>

        {/* Section: Hard Constraints */}
        <section className="mb-8 p-4 bg-paper-surface dark:bg-paper-surfaceDark border border-paper-border dark:border-paper-borderDark">
          <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-accent dark:text-accent-dark mb-2">
            2. Operational Constraints
          </h2>
          <ul className="space-y-1.5 text-xs font-mono text-ink dark:text-ink-dark">
            <li>• <strong>No Unsubstantiated Claims:</strong> Every statement must be tied to a ledger entry with source URL and credibility score.</li>
            <li>• <strong>Falsification Criteria:</strong> Every report must include explicit conditions (&ldquo;What would change my mind&rdquo;) to prevent dogma.</li>
            <li>• <strong>Real-Time Auditing:</strong> Fast streaming UI using Server-Sent Events (SSE) so users see claims scored live as agents argue.</li>
          </ul>
        </section>

        {/* Section: Architecture Diagram (SVG) */}
        <section className="mb-8">
          <h2 className="font-serif text-lg font-bold text-ink dark:text-ink-dark mb-2">
            3. System Architecture
          </h2>
          <p className="font-serif text-xs text-ink-secondary dark:text-ink-secondaryDark mb-3">
            Dialectical multi-agent trial pipeline. Raw web research passes through specialized agents into an immutable ledger before final synthesis.
          </p>

          <div className="p-4 bg-paper-surface dark:bg-paper-surfaceDark border border-paper-border dark:border-paper-borderDark overflow-x-auto">
            <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-3">
              Figure: Contra Multi-Agent Trial &amp; Evidence Audit Pipeline
            </div>
            <svg viewBox="0 0 760 170" className="w-full min-w-[680px] text-xs font-mono">
              <rect x="10" y="20" width="130" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
              <text x="75" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark font-bold text-[11px]">User Query</text>
              <text x="75" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Open Research</text>

              <path d="M 140 45 L 175 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#flow-arrow-2)" className="text-ink dark:text-ink-dark" />

              <rect x="180" y="20" width="145" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
              <text x="252" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark font-bold text-[11px]">Question Framer</text>
              <text x="252" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Decompose Claims</text>

              <path d="M 325 45 L 360 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#flow-arrow-2)" className="text-ink dark:text-ink-dark" />

              <rect x="365" y="10" width="165" height="70" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
              <text x="447" y="32" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark font-bold text-[11px]">Courtroom Trial</text>
              <text x="447" y="48" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Advocate vs. Skeptic</text>
              <text x="447" y="62" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Cross-Examiner Interrogatories</text>

              <path d="M 530 45 L 565 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#flow-arrow-2)" className="text-ink dark:text-ink-dark" />

              <rect x="570" y="10" width="175" height="70" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent dark:text-accent-dark" />
              <text x="657" y="32" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark font-bold text-[11px]">Evidence Ledger</text>
              <text x="657" y="48" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark text-[10px]">Pydantic Schemas</text>
              <text x="657" y="62" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark text-[10px]">Citation Auditor Strike Gate</text>

              {/* Output path */}
              <path d="M 657 80 L 657 110 L 450 110" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" markerEnd="url(#flow-arrow-2)" className="text-ink-muted dark:text-ink-mutedDark" />

              <rect x="180" y="95" width="265" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
              <text x="312" y="118" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark font-bold text-[11px]">Calibrated Verdict Report</text>
              <text x="312" y="132" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Confidence Scores + Contradictory Evidence</text>

              <defs>
                <marker id="flow-arrow-2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
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
                Failure Mode 1: Sycophancy &amp; Confirmation Bias
              </span>
              <p className="text-ink dark:text-ink-dark leading-relaxed mb-2">
                <strong>Hazard:</strong> LLMs naturally align with the user&apos;s premise, confirming flawed assumptions rather than testing them rigorously.
              </p>
              <p className="text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                <strong>Mitigation:</strong> The Skeptic agent is pre-registered with an adversarial prosecutorial role. It is explicitly evaluated on its ability to surface counterexamples, methodological limitations, and contrary data.
              </p>
            </div>

            <div className="p-4 border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark">
              <span className="font-mono font-bold text-accent dark:text-accent-dark block mb-1">
                Failure Mode 2: Fabricated Citations &amp; Hallucinated Stats
              </span>
              <p className="text-ink dark:text-ink-dark leading-relaxed mb-2">
                <strong>Hazard:</strong> Generative models often invent plausible-sounding academic papers or misquote empirical figures.
              </p>
              <p className="text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                <strong>Mitigation:</strong> An automated Citation Auditor intercepts the final draft. Any statement that cannot be cross-referenced back to an exact chunk in the verified evidence ledger is automatically stricken from the verdict.
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
            {["Python", "FastAPI", "Google GenAI (Gemini)", "Next.js", "Pydantic", "Pandas", "RAG", "Server-Sent Events"].map((t) => (
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

