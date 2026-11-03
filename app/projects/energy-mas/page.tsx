import React from "react";
import { TopBar } from "@/components/fde/TopBar";
import { ArrowLeft, Github, ShieldAlert, Cpu, Layers, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Resilient Multi-Agent Energy Management System | Arjun R",
  description: "Autonomous microgrid dispatcher on IEEE 33-bus coordinating solar, battery, EV and market agents with real-time trust-aware anomaly filtering.",
};

export default function EnergyMasPage() {
  return (
    <div className="min-h-screen bg-paper-bg text-ink dark:bg-paper-darkBg dark:text-ink-dark transition-colors duration-200">
      <TopBar isProjectPage={true} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 font-mono text-xs text-ink-muted dark:text-ink-mutedDark">
          <Link href="/" className="hover:text-accent dark:hover:text-accent-dark">
            Field Reports
          </Link>{" "}
          / <span className="text-ink dark:text-ink-dark font-semibold">System 3.1: Energy MAS</span>
        </div>

        {/* Case Study Header */}
        <header className="pb-4 mb-6 border-b border-paper-border dark:border-paper-borderDark">
          <span className="font-mono text-xs font-bold text-accent dark:text-accent-dark uppercase tracking-wider">
            Case Study 3.1 • Microgrid Infrastructure
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink dark:text-ink-dark mt-1">
            Resilient Multi-Agent Energy Management System
          </h1>
          <p className="font-serif italic text-sm text-ink-secondary dark:text-ink-secondaryDark mt-2">
            Autonomous microgrid dispatch on an IEEE 33-bus feeder with real-time trust scoring and an explanatory LLM copilot.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href="https://github.com/arjun-57/MARL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark text-ink dark:text-ink-dark hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark rounded-sm transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repository: arjun-57/MARL</span>
            </a>
            <span className="text-ink-muted dark:text-ink-mutedDark">
              License: Apache 2.0 • Python 3.11
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
              <strong>In plain English:</strong> As solar panels, electric vehicle charging hubs, and industrial batteries spread across neighborhood power grids, balancing supply and demand becomes tricky. If electricity prices spike or a sudden cloud bank rolls over the solar farm, the grid can overload or suffer blackouts.
            </p>
            <p>
              In traditional centralized systems, one computer controls everything. But if a communication line lags or a malicious actor sends fake sensor readings (False Data Injection), the central controller gets fooled—dispatching wrong voltage setpoints that cause severe electrical damage.
            </p>
          </div>
        </section>

        {/* Section: Hard Constraints */}
        <section className="mb-8 p-4 bg-paper-surface dark:bg-paper-surfaceDark border border-paper-border dark:border-paper-borderDark">
          <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-accent dark:text-accent-dark mb-2">
            2. Operational Constraints
          </h2>
          <ul className="space-y-1.5 text-xs font-mono text-ink dark:text-ink-dark">
            <li>• <strong>ANSI C84.1 Voltage Regulation:</strong> All 33 buses must strictly maintain 0.90 to 1.10 p.u. voltage limits under all operating conditions.</li>
            <li>• <strong>Real-World Inputs:</strong> Tested against 50,400 hours of Open Power System Data (OPSD) German demand and solar generation, combined with Ember European day-ahead wholesale prices.</li>
            <li>• <strong>Network Degradation:</strong> Must maintain nominal power balance even under 50% packet dropouts and synthetic transmission delays.</li>
          </ul>
        </section>

        {/* Section: Architecture Diagram (SVG) */}
        <section className="mb-8">
          <h2 className="font-serif text-lg font-bold text-ink dark:text-ink-dark mb-2">
            3. System Architecture
          </h2>
          <p className="font-serif text-xs text-ink-secondary dark:text-ink-secondaryDark mb-3">
            The architecture couples decentralized resource agents with an automated safety filter. The LLM copilot is completely decoupled from the millisecond control loop, acting purely as an operations explainer.
          </p>

          <div className="p-4 bg-paper-surface dark:bg-paper-surfaceDark border border-paper-border dark:border-paper-borderDark overflow-x-auto">
            <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-3">
              Figure: Resilient Multi-Agent Information &amp; Verification Flow
            </div>
            <svg viewBox="0 0 760 180" className="w-full min-w-[680px] text-xs font-mono">
              {/* Layer 1: Ingestion */}
              <rect x="10" y="20" width="160" height="60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
              <text x="90" y="45" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark font-bold text-[11px]">Data Ingestion</text>
              <text x="90" y="62" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">OPSD Solar + German Load</text>

              <path d="M 170 50 L 210 50" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#flow-arrow)" className="text-ink dark:text-ink-dark" />

              {/* Layer 2: Mesh */}
              <rect x="215" y="10" width="165" height="80" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
              <text x="297" y="35" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark font-bold text-[11px]">Resource Agents</text>
              <text x="297" y="52" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Solar PV (Bus 18)</text>
              <text x="297" y="67" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">BESS Battery (Bus 22) + EV</text>

              <path d="M 380 50 L 420 50" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#flow-arrow)" className="text-ink dark:text-ink-dark" />

              {/* Layer 3: Safety filter */}
              <rect x="425" y="10" width="165" height="80" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent dark:text-accent-dark" />
              <text x="507" y="35" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark font-bold text-[11px]">Trust &amp; Safety Filter</text>
              <text x="507" y="52" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark text-[10px]">Dynamic Trust Scoring</text>
              <text x="507" y="67" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark text-[10px]">Quarantine: T &lt; 0.40</text>

              <path d="M 590 50 L 630 50" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#flow-arrow)" className="text-ink dark:text-ink-dark" />

              {/* Layer 4: Pandapower */}
              <rect x="635" y="20" width="115" height="60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
              <text x="692" y="45" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark font-bold text-[11px]">Pandapower</text>
              <text x="692" y="62" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">AC Load Flow</text>

              {/* Down to Layer 5: Decoupled Copilot */}
              <path d="M 692 80 L 692 120 L 420 120" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" markerEnd="url(#flow-arrow)" className="text-ink-muted dark:text-ink-mutedDark" />

              <rect x="180" y="105" width="235" height="55" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
              <text x="297" y="128" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark font-bold text-[11px]">LLM / RAG Copilot (Decoupled)</text>
              <text x="297" y="145" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px]">Plain-English Dispatches &amp; Anomaly Root-Cause</text>

              <defs>
                <marker id="flow-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
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
                Failure Mode 1: False Data Injection (FDI) Attack on Solar Inverter
              </span>
              <p className="text-ink dark:text-ink-dark leading-relaxed mb-2">
                <strong>Hazard:</strong> An attacker tampers with bus telemetry, claiming solar production is zero when it is actually peak noon. A naive controller over-discharges batteries or ramps expensive imports, triggering over-voltage and financial loss.
              </p>
              <p className="text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                <strong>Mitigation:</strong> The safety filter runs a physical plausibility check against weather irradiance and inverter nameplate limits. When discrepancies are detected, trust drops below 0.40, the node is quarantined, and the system falls back to safe local curves with <strong>0.00% performance degradation</strong>.
              </p>
            </div>

            <div className="p-4 border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark">
              <span className="font-mono font-bold text-accent dark:text-accent-dark block mb-1">
                Failure Mode 2: Communication Latency and Packet Loss
              </span>
              <p className="text-ink dark:text-ink-dark leading-relaxed mb-2">
                <strong>Hazard:</strong> Telemetry packets arrive late or drop out entirely during peak load shifts.
              </p>
              <p className="text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                <strong>Mitigation:</strong> Agents operate asynchronously with decentralized state estimates. If central consensus is delayed, individual nodes preserve voltage within safety limits autonomously without tripping line breakers.
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
            {["Python 3.11", "Pandapower", "FastAPI", "Uvicorn", "Gymnasium", "Docker", "RAG", "Google GenAI"].map((t) => (
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

