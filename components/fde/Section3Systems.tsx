import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export const Section3Systems: React.FC = () => {
  return (
    <section id="systems" className="mb-10 break-inside-avoid">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="font-mono text-xs font-bold text-accent dark:text-accent-dark">
          03.
        </span>
        <h2 className="font-serif text-lg font-bold tracking-tight text-ink dark:text-ink-dark uppercase">
          Systems: Production-Grade Architectures
        </h2>
      </div>

      <p className="font-serif text-sm text-ink-secondary dark:text-ink-secondaryDark leading-relaxed mb-6">
        Below are three systems engineered with explicit verification gates. Click any system to read its complete case study.
      </p>

      <div className="space-y-8">
        {/* Project 1: Energy MAS */}
        <div className="border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2 border-b border-paper-border dark:border-paper-borderDark">
            <div>
              <span className="font-mono text-xs text-accent dark:text-accent-dark font-semibold">
                System 3.1 • Microgrid Infrastructure
              </span>
              <h3 className="font-serif text-base font-bold text-ink dark:text-ink-dark">
                Resilient Multi-Agent Energy Management System
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <Link
                href="/projects/energy-mas"
                className="text-accent dark:text-accent-dark hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span>•</span>
              <a
                href="https://github.com/arjun-57/MARL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-secondary dark:text-ink-secondaryDark hover:text-ink dark:hover:text-ink-dark inline-flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>arjun-57/MARL</span>
              </a>
            </div>
          </div>

          <div className="my-3 text-xs">
            <p className="font-serif text-ink dark:text-ink-dark leading-relaxed mb-2">
              <strong>In layman terms:</strong> An automated coordinator for a neighborhood power grid. It balances solar panels, commercial batteries, and EV chargers on an IEEE 33-bus network against real German grid demand (50,400 hourly steps).
            </p>
            <p className="font-serif text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
              <strong>The Trust Layer:</strong> If a sensor gets hacked or delayed (False-Data Injection), an algorithmic safety filter catches it and isolates the node before power surges can cause outages. An LLM/RAG copilot explains dispatch decisions and anomalies in plain English for human operators.
            </p>
          </div>

          <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-1">
            Stack: Python, Pandapower, Gymnasium, FastAPI, RAG, LLM
          </div>

          {/* SVG Figure 2 */}
          <div className="mt-3 pt-3 border-t border-paper-border dark:border-paper-borderDark">
            <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-2">
              Figure 2: Energy MAS Multi-Layer Dispatch &amp; Safety Filter Pipeline
            </div>
            <div className="w-full overflow-x-auto py-1">
              <svg viewBox="0 0 740 90" className="w-full min-w-[620px] text-xs font-mono" style={{ maxHeight: "95px" }}>
                <rect x="5" y="20" width="125" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="67" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Grid Telemetry</text>
                <text x="67" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">(Solar, EV, Market)</text>

                <path d="M 130 45 L 155 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="160" y="20" width="125" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="222" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Resource Agents</text>
                <text x="222" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Dispatch Proposals</text>

                <path d="M 285 45 L 310 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="315" y="20" width="135" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent dark:text-accent-dark" />
                <text x="382" y="42" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark font-bold text-[11px]">Trust &amp; Safety Filter</text>
                <text x="382" y="56" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark text-[10px]">FDI &amp; Delay Isolation</text>

                <path d="M 450 45 L 475 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="480" y="20" width="120" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="540" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Pandapower</text>
                <text x="540" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">IEEE 33-Bus Sim</text>

                <path d="M 600 45 L 625 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="630" y="20" width="105" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="682" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">RAG Copilot</text>
                <text x="682" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Human Ops Expl.</text>

                <defs>
                  <marker id="sys-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 8 5 L 0 9 z" fill="currentColor" className="text-ink dark:text-ink-dark" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Project 2: Contra */}
        <div className="border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2 border-b border-paper-border dark:border-paper-borderDark">
            <div>
              <span className="font-mono text-xs text-accent dark:text-accent-dark font-semibold">
                System 3.2 • Multi-Agent Dialectical Synthesis
              </span>
              <h3 className="font-serif text-base font-bold text-ink dark:text-ink-dark">
                Contra: Adversarial Multi-Agent Research Engine
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <Link
                href="/projects/contra"
                className="text-accent dark:text-accent-dark hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span>•</span>
              <a
                href="https://github.com/arjun-57/Research-Contra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-secondary dark:text-ink-secondaryDark hover:text-ink dark:hover:text-ink-dark inline-flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>arjun-57/Research-Contra</span>
              </a>
            </div>
          </div>

          <div className="my-3 text-xs">
            <p className="font-serif text-ink dark:text-ink-dark leading-relaxed mb-2">
              <strong>In layman terms:</strong> A research engine that treats open-ended questions like a courtroom trial instead of a simple web summary.
            </p>
            <p className="font-serif text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
              <strong>The Trust Layer:</strong> It breaks complex questions into atomic claims, pits an Advocate agent against a Skeptic agent, and forces all claims into an immutable evidence ledger with citation scoring. If a claim lacks proof or source backing, it gets struck down to prevent hallucinations.
            </p>
          </div>

          <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-1">
            Stack: Python, FastAPI, Gemini, Next.js, Pydantic, Pandas, RAG
          </div>

          {/* SVG Figure 3 */}
          <div className="mt-3 pt-3 border-t border-paper-border dark:border-paper-borderDark">
            <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-2">
              Figure 3: Contra Courtroom Dialectical Pipeline &amp; Evidence Ledger
            </div>
            <div className="w-full overflow-x-auto py-1">
              <svg viewBox="0 0 740 90" className="w-full min-w-[620px] text-xs font-mono" style={{ maxHeight: "95px" }}>
                <rect x="5" y="20" width="115" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="62" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">User Query</text>
                <text x="62" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Open Research</text>

                <path d="M 120 45 L 145 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="150" y="20" width="125" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="212" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Question Framer</text>
                <text x="212" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Decompose Claims</text>

                <path d="M 275 45 L 300 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="305" y="20" width="135" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="372" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Advocate vs Skeptic</text>
                <text x="372" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Adversarial Debate</text>

                <path d="M 440 45 L 465 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="470" y="20" width="135" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent dark:text-accent-dark" />
                <text x="537" y="42" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark font-bold text-[11px]">Evidence Ledger</text>
                <text x="537" y="56" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark text-[10px]">Citation &amp; Truth Audit</text>

                <path d="M 605 45 L 630 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="635" y="20" width="100" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="685" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Final Verdict</text>
                <text x="685" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Calibrated Report</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Project 3: Sine2Times */}
        <div className="border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2 border-b border-paper-border dark:border-paper-borderDark">
            <div>
              <span className="font-mono text-xs text-accent dark:text-accent-dark font-semibold">
                System 3.3 • Adaptive Diagnostic Tutoring
              </span>
              <h3 className="font-serif text-base font-bold text-ink dark:text-ink-dark">
                Sine2Times: Diagnostic Mathematics Tutor
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <Link
                href="/projects/sine2times"
                className="text-accent dark:text-accent-dark hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span>•</span>
              <a
                href="https://github.com/arjun-57/Sin2Times"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-secondary dark:text-ink-secondaryDark hover:text-ink dark:hover:text-ink-dark inline-flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>arjun-57/Sin2Times</span>
              </a>
            </div>
          </div>

          <div className="my-3 text-xs">
            <p className="font-serif text-ink dark:text-ink-dark leading-relaxed mb-2">
              <strong>In layman terms:</strong> When a student doesn&apos;t understand trigonometry or calculus, standard software just re-explains it. Sine2Times searches backwards like a binary search to find the missing foundation (e.g. angle measurement on a unit circle) and tells them what to fix.
            </p>
            <p className="font-serif text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
              <strong>The Trust Layer:</strong> Language models write friendly explanations, but they are never trusted with the math. A 4-stage SymPy verification gate certifies 100% mathematical correctness of every problem, hint, and step solution before the student sees it.
            </p>
          </div>

          <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-1">
            Stack: FastAPI, React, SymPy, LLMs, Bayesian Knowledge Tracing
          </div>

          {/* SVG Figure 4 */}
          <div className="mt-3 pt-3 border-t border-paper-border dark:border-paper-borderDark">
            <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-2">
              Figure 4: Prerequisite DAG Diagnosis &amp; SymPy Mathematical Verification Gate
            </div>
            <div className="w-full overflow-x-auto py-1">
              <svg viewBox="0 0 740 90" className="w-full min-w-[620px] text-xs font-mono" style={{ maxHeight: "95px" }}>
                <rect x="5" y="20" width="115" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="62" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Student Response</text>
                <text x="62" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Algebra / Trig</text>

                <path d="M 120 45 L 145 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="150" y="20" width="130" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="215" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Prerequisite DAG</text>
                <text x="215" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Binary Search Probe</text>

                <path d="M 280 45 L 305 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="310" y="20" width="125" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="372" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Bayesian Mastery</text>
                <text x="372" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">BKT Probability</text>

                <path d="M 435 45 L 460 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="465" y="20" width="140" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent dark:text-accent-dark" />
                <text x="535" y="42" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark font-bold text-[11px]">SymPy Verify Gate</text>
                <text x="535" y="56" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark text-[10px]">100% Exact Math Check</text>

                <path d="M 605 45 L 630 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="635" y="20" width="100" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="685" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Student Feed</text>
                <text x="685" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Actionable Plan</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
