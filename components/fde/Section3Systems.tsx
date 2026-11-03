import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

export const Section3Systems: React.FC = () => {
  return (
    <section id="systems" className="mb-10 break-inside-avoid">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="font-mono text-xs font-bold text-accent dark:text-accent-dark">
          03.
        </span>
        <h2 className="font-serif text-lg font-bold tracking-tight text-ink dark:text-ink-dark uppercase">
          Selected Engineering Projects
        </h2>
      </div>

      <div className="space-y-6">
        {/* Project 1: Energy MAS */}
        <div className="border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-paper-border dark:border-paper-borderDark">
            <h3 className="font-serif text-base font-bold text-ink dark:text-ink-dark">
              3.1 Resilient Multi-Agent Energy Management System
            </h3>
            <div className="flex items-center gap-3 text-xs font-mono">
              <Link
                href="/projects/energy-mas"
                className="text-accent dark:text-accent-dark hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>Case Study</span>
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

          <p className="font-serif italic text-xs text-ink-secondary dark:text-ink-secondaryDark my-2">
            &ldquo;An AI-based system designed to coordinate energy resources in a simulated microgrid.&rdquo;
          </p>

          <ul className="space-y-1 text-xs font-serif text-ink dark:text-ink-dark list-disc list-inside my-2">
            <li>Built a microgrid dispatcher on an IEEE 33-bus system.</li>
            <li>Coordinated solar, battery, EV, and electricity market agents against German grid demand.</li>
            <li>Worked on a trust-aware safety filter to identify compromised nodes, false-data injection, and network delays.</li>
            <li>Integrated an LLM/RAG copilot to explain dispatch decisions and grid anomalies.</li>
          </ul>

          <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark pt-2 border-t border-paper-border dark:border-paper-borderDark">
            Technologies: Python, Pandapower, Gymnasium, FastAPI, RAG, LLMs
          </div>

          {/* SVG Figure 2 */}
          <div className="mt-3 pt-3 border-t border-paper-border dark:border-paper-borderDark">
            <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-1.5">
              Figure 2: Energy MAS Multi-Agent Dispatch &amp; Safety Filter Pipeline
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
                <text x="682" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Explanatory Layer</text>

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
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-paper-border dark:border-paper-borderDark">
            <h3 className="font-serif text-base font-bold text-ink dark:text-ink-dark">
              3.2 Contra – Adversarial Multi-Agent Research Engine
            </h3>
            <div className="flex items-center gap-3 text-xs font-mono">
              <Link
                href="/projects/contra"
                className="text-accent dark:text-accent-dark hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>Case Study</span>
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

          <p className="font-serif italic text-xs text-ink-secondary dark:text-ink-secondaryDark my-2">
            &ldquo;A research platform that breaks open-ended questions into smaller claims and examines them using opposing viewpoints.&rdquo;
          </p>

          <ul className="space-y-1 text-xs font-serif text-ink dark:text-ink-dark list-disc list-inside my-2">
            <li>Developed a system that decomposes questions into verifiable claims.</li>
            <li>Used Advocate and Skeptic agents to examine supporting and opposing evidence.</li>
            <li>Implemented an evidence ledger and citation tracking.</li>
            <li>Created a real-time interface to display claims, confidence scores, and contradictory evidence.</li>
          </ul>

          <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark pt-2 border-t border-paper-border dark:border-paper-borderDark">
            Technologies: Python, FastAPI, Gemini, Next.js, Pydantic, Pandas, RAG
          </div>

          {/* SVG Figure 3 */}
          <div className="mt-3 pt-3 border-t border-paper-border dark:border-paper-borderDark">
            <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-1.5">
              Figure 3: Contra Claim Decomposition &amp; Evidence Ledger Pipeline
            </div>
            <div className="w-full overflow-x-auto py-1">
              <svg viewBox="0 0 740 90" className="w-full min-w-[620px] text-xs font-mono" style={{ maxHeight: "95px" }}>
                <rect x="5" y="20" width="115" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="62" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">User Question</text>
                <text x="62" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Open-Ended</text>

                <path d="M 120 45 L 145 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="150" y="20" width="130" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="215" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Decomposition</text>
                <text x="215" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Verifiable Claims</text>

                <path d="M 280 45 L 305 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="310" y="20" width="135" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="377" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Advocate / Skeptic</text>
                <text x="377" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Opposing Analysis</text>

                <path d="M 445 45 L 470 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="475" y="20" width="135" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent dark:text-accent-dark" />
                <text x="542" y="42" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark font-bold text-[11px]">Evidence Ledger</text>
                <text x="542" y="56" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark text-[10px]">Citation Tracking</text>

                <path d="M 610 45 L 635 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="640" y="20" width="95" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="687" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Final Report</text>
                <text x="687" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Calibrated UI</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Project 3: Sine2Times */}
        <div className="border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-paper-border dark:border-paper-borderDark">
            <h3 className="font-serif text-base font-bold text-ink dark:text-ink-dark">
              3.3 Sine2Times – Diagnostic Mathematics Tutor
            </h3>
            <div className="flex items-center gap-3 text-xs font-mono">
              <Link
                href="/projects/sine2times"
                className="text-accent dark:text-accent-dark hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>Case Study</span>
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

          <p className="font-serif italic text-xs text-ink-secondary dark:text-ink-secondaryDark my-2">
            &ldquo;An adaptive mathematics learning platform that identifies knowledge gaps and adjusts learning based on student progress.&rdquo;
          </p>

          <ul className="space-y-1 text-xs font-serif text-ink dark:text-ink-dark list-disc list-inside my-2">
            <li>Designed a prerequisite graph representing relationships between mathematical concepts.</li>
            <li>Used binary-search-style diagnosis to narrow down learning gaps.</li>
            <li>Implemented Bayesian Knowledge Tracing to estimate student mastery.</li>
            <li>Integrated SymPy to verify mathematical expressions and solutions.</li>
          </ul>

          <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark pt-2 border-t border-paper-border dark:border-paper-borderDark">
            Technologies: FastAPI, React, SymPy, LLMs
          </div>

          {/* SVG Figure 4 */}
          <div className="mt-3 pt-3 border-t border-paper-border dark:border-paper-borderDark">
            <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-1.5">
              Figure 4: Diagnostic Traversal &amp; SymPy Verification Pipeline
            </div>
            <div className="w-full overflow-x-auto py-1">
              <svg viewBox="0 0 740 90" className="w-full min-w-[620px] text-xs font-mono" style={{ maxHeight: "95px" }}>
                <rect x="5" y="20" width="115" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="62" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Student Input</text>
                <text x="62" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Response</text>

                <path d="M 120 45 L 145 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="150" y="20" width="130" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="215" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Diagnostic Engine</text>
                <text x="215" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Prerequisite DAG</text>

                <path d="M 280 45 L 305 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="310" y="20" width="125" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="372" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Bayesian Tracing</text>
                <text x="372" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Mastery Prob.</text>

                <path d="M 435 45 L 460 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="465" y="20" width="135" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent dark:text-accent-dark" />
                <text x="532" y="42" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark font-bold text-[11px]">SymPy Verification</text>
                <text x="532" y="56" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark text-[10px]">Exact Math Check</text>

                <path d="M 600 45 L 625 45" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sys-arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="630" y="20" width="105" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="682" y="42" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px]">Feedback</text>
                <text x="682" y="56" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Remediation</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
