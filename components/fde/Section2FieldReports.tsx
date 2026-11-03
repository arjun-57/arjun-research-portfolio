import React from "react";
import { ArrowRight, UserCheck } from "lucide-react";

export const Section2FieldReports: React.FC = () => {
  return (
    <section id="field-reports" className="mb-10 break-inside-avoid">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="font-mono text-xs font-bold text-accent dark:text-accent-dark">
          02.
        </span>
        <h2 className="font-serif text-lg font-bold tracking-tight text-ink dark:text-ink-dark uppercase">
          Field Reports: Remote Enterprise Operations
        </h2>
      </div>

      <div className="space-y-6">
        {/* Report 2.1: KNS Law Chambers */}
        <div className="border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-paper-border dark:border-paper-borderDark">
            <h3 className="font-serif text-base font-bold text-ink dark:text-ink-dark">
              2.1 KNS Law Chambers
            </h3>
            <span className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark">
              Software Developer Intern • Jan–Dec 2025 • Remote
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div>
              <span className="font-mono font-semibold text-accent dark:text-accent-dark block mb-0.5">
                Context:
              </span>
              <p className="font-serif text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                Legal operations handling banking collateral, distressed asset recovery, and compliance tracking across ongoing legal matters.
              </p>
            </div>
            <div>
              <span className="font-mono font-semibold text-accent dark:text-accent-dark block mb-0.5">
                Problem:
              </span>
              <p className="font-serif text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                Bank auction records are fragmented across multiple portals with spelling variations and duplicate schedules, making manual identification of title encumbrances slow and error-prone.
              </p>
            </div>
          </div>

          <div className="my-3 text-xs">
            <span className="font-mono font-semibold text-ink dark:text-ink-dark block mb-1">
              What I Shipped:
            </span>
            <ul className="space-y-1.5 font-serif text-ink dark:text-ink-dark list-disc list-inside">
              <li>
                <strong>Agentic Property Intelligence System:</strong> Indexes multi-bank auction listings, resolves duplicate property titles, and runs automated investigation loops to flag ownership conflicts.
              </li>
              <li>
                <strong>Internal Compliance Auditing Platform:</strong> Automates workflow tracking and evidence verification across daily legal operations.
              </li>
            </ul>
          </div>

          <div className="mt-3 pt-2 border-t border-paper-border dark:border-paper-borderDark text-xs font-mono flex items-center justify-between text-ink-muted dark:text-ink-mutedDark">
            <span>
              <strong>Who reviews the output:</strong> Senior legal advocates and compliance officers. AI flags conflicts; lawyers make legal determinations.
            </span>
          </div>

          {/* Figure 1: KNS Pipeline (Inline SVG) */}
          <div className="mt-4 pt-3 border-t border-paper-border dark:border-paper-borderDark">
            <div className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark mb-2 flex items-center justify-between">
              <span>Figure 1: KNS Property Investigation &amp; Human Review Loop</span>
              <span>Architecture Schematic</span>
            </div>
            
            <div className="w-full overflow-x-auto py-2">
              <svg
                viewBox="0 0 740 100"
                className="w-full min-w-[640px] text-xs font-mono"
                style={{ maxHeight: "110px" }}
              >
                {/* Flow boxes */}
                <rect x="5" y="25" width="125" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="67" y="47" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px] font-mono">Bank Auction</text>
                <text x="67" y="62" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px] font-mono">Listings (Raw)</text>

                <path d="M 130 50 L 155 50" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="160" y="25" width="115" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="217" y="47" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px] font-mono">Multi-Bank</text>
                <text x="217" y="62" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px] font-mono">Indexer</text>

                <path d="M 275 50 L 300 50" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="305" y="25" width="125" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-paper-border dark:text-paper-borderDark" />
                <text x="367" y="47" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark text-[11px] font-mono">Duplicate Title</text>
                <text x="367" y="62" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px] font-mono">Resolution</text>

                <path d="M 430 50 L 455 50" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="460" y="25" width="125" height="50" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-accent dark:text-accent-dark" />
                <text x="522" y="47" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark font-bold text-[11px] font-mono">Investigation</text>
                <text x="522" y="62" textAnchor="middle" className="fill-current text-accent dark:text-accent-dark text-[10px] font-mono">Loop (Agentic)</text>

                <path d="M 585 50 L 610 50" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#arrow)" className="text-ink dark:text-ink-dark" />

                <rect x="615" y="25" width="120" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink dark:text-ink-dark" />
                <text x="675" y="47" textAnchor="middle" className="fill-current text-ink dark:text-ink-dark font-bold text-[11px] font-mono">Legal Review</text>
                <text x="675" y="62" textAnchor="middle" className="fill-current text-ink-muted dark:text-ink-mutedDark text-[10px] font-mono">(Human Decision)</text>

                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 8 5 L 0 9 z" fill="currentColor" className="text-ink dark:text-ink-dark" />
                  </marker>
                </defs>
              </svg>
            </div>
            <p className="text-[11px] font-serif text-ink-muted dark:text-ink-mutedDark mt-1">
              <em>Caption:</em> The pipeline normalizes heterogeneous bank auction notices, clusters duplicate asset records, and runs automated queries to detect encumbrance risks. The terminal state always routes to senior legal counsel.
            </p>
          </div>
        </div>

        {/* Report 2.2: Grand Magnum Housing Pvt. Ltd. */}
        <div className="border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-paper-border dark:border-paper-borderDark">
            <h3 className="font-serif text-base font-bold text-ink dark:text-ink-dark">
              2.2 Grand Magnum Housing Pvt. Ltd.
            </h3>
            <span className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark">
              Software Developer Intern • Jun–Aug 2025 • Remote
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div>
              <span className="font-mono font-semibold text-accent dark:text-accent-dark block mb-0.5">
                Context:
              </span>
              <p className="font-serif text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                Corporate real-estate business operations coordinating sales, compliance, construction schedules, and administrative management.
              </p>
            </div>
            <div>
              <span className="font-mono font-semibold text-accent dark:text-accent-dark block mb-0.5">
                Problem:
              </span>
              <p className="font-serif text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                Operational updates were scattered across spreadsheets and messaging threads, obscuring task bottlenecks and delaying critical escalations.
              </p>
            </div>
          </div>

          <div className="my-3 text-xs">
            <span className="font-mono font-semibold text-ink dark:text-ink-dark block mb-1">
              What I Shipped:
            </span>
            <p className="font-serif text-ink dark:text-ink-dark leading-relaxed">
              Built an executive operations dashboard providing real-time department activity tracking, task progress monitoring, automated escalation pathways, and centralized cross-team communication channels.
            </p>
          </div>

          <div className="mt-3 pt-2 border-t border-paper-border dark:border-paper-borderDark text-xs font-mono text-ink-muted dark:text-ink-mutedDark">
            <strong>Who reviews the output:</strong> Executive management and departmental team leads to guide daily operational resource allocation.
          </div>
        </div>
      </div>
    </section>
  );
};
