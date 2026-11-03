import React from "react";
import Image from "next/image";
import { Mail, Github, FileText, MapPin } from "lucide-react";

export const TitleBlock: React.FC = () => {
  return (
    <section id="title-block" className="pt-6 pb-4 break-inside-avoid">
      {/* Document Classification Stamp */}
      <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted dark:text-ink-mutedDark mb-3 text-center sm:text-left">
        Preprint • Forward Deployed Engineering &amp; AI Systems • Chennai, India
      </div>

      {/* Main Journal Paper Title */}
      <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink dark:text-ink-dark leading-tight text-center sm:text-left">
        Building Practical AI Systems People Can Trust: Field Reports from Legal, Real-Estate and Energy Operations
      </h1>

      {/* Author and Affiliation Block */}
      <div className="mt-4 pt-3 border-t border-paper-border dark:border-paper-borderDark flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 text-xs font-mono">
        <div className="text-center sm:text-left space-y-0.5">
          <div className="font-serif font-bold text-base text-ink dark:text-ink-dark">
            Arjun R
          </div>
          <div className="text-ink-secondary dark:text-ink-secondaryDark">
            Department of Artificial Intelligence
          </div>
          <div className="text-ink-muted dark:text-ink-mutedDark">
            SRM Institute of Science and Technology, Chennai, India (Graduating 2027 • CGPA 8.13/10)
          </div>
          <div className="pt-1 text-ink dark:text-ink-dark">
            <span className="text-ink-muted dark:text-ink-mutedDark">Correspondence: </span>
            <a
              href="mailto:arjunr3773@gmail.com"
              className="text-accent dark:text-accent-dark hover:underline font-medium"
            >
              arjunr3773@gmail.com
            </a>
            <span className="mx-2 text-paper-border dark:text-paper-borderDark">•</span>
            <a
              href="https://github.com/arjun-57"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-secondary dark:text-ink-secondaryDark hover:text-accent dark:hover:text-accent-dark inline-flex items-center gap-1"
            >
              <Github className="w-3 h-3" />
              <span>@arjun-57</span>
            </a>
          </div>
        </div>

        {/* Square Author Portrait Placeholder / Monogram */}
        <div className="flex-shrink-0 w-16 h-16 border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-1 flex items-center justify-center text-center">
          <div className="w-full h-full bg-paper-bg dark:bg-paper-darkBg flex flex-col items-center justify-center text-[10px] font-mono text-ink-muted dark:text-ink-mutedDark">
            <span className="font-serif font-bold text-sm text-ink dark:text-ink-dark">AR</span>
            <span className="text-[8px] uppercase">FDE</span>
          </div>
        </div>
      </div>

      {/* Boxed Abstract (The Thesis) */}
      <div className="my-6 border border-ink dark:border-ink-dark p-4 sm:p-5 bg-paper-surface dark:bg-paper-surfaceDark">
        <div className="font-mono text-xs font-bold uppercase tracking-widest text-accent dark:text-accent-dark mb-2">
          Abstract
        </div>
        <p className="font-serif text-sm text-ink dark:text-ink-dark leading-relaxed text-justify">
          I get embedded in messy real-world operations and ship AI systems people can trust. Every system I build has a layer that checks the AI. Working remotely across legal and real-estate operations for 12 and 3 months, I developed software for non-technical operators where AI flags anomalies while human practitioners make the final decisions. Across multi-agent energy dispatch, dialectical research synthesis, and diagnostic tutoring, all architectures integrate deterministic verification—isolating false data, auditing citations, and enforcing mathematical correctness. At ICISC 2026, my placement research demonstrated that applying fairness constraints curtails demographic disparities from 17.9% to 2.3% while preserving 92.8% hiring accuracy.
        </p>

        {/* Metrics Strip */}
        <div className="mt-4 pt-3 border-t border-paper-border dark:border-paper-borderDark flex flex-wrap items-center justify-between gap-y-2 text-[11px] font-mono text-ink dark:text-ink-dark">
          <div>
            <span className="text-ink-muted dark:text-ink-mutedDark">Disparity: </span>
            <span className="font-bold text-accent dark:text-accent-dark">17.9% &rarr; 2.3%</span>
          </div>
          <span className="hidden sm:inline text-paper-border dark:text-paper-borderDark">|</span>
          <div>
            <span className="text-ink-muted dark:text-ink-mutedDark">Accuracy: </span>
            <span className="font-bold">92.8%</span>
          </div>
          <span className="hidden sm:inline text-paper-border dark:text-paper-borderDark">|</span>
          <div>
            <span className="text-ink-muted dark:text-ink-mutedDark">Cohort: </span>
            <span>1,200 candidates / 50 companies</span>
          </div>
          <span className="hidden sm:inline text-paper-border dark:text-paper-borderDark">|</span>
          <div>
            <span className="text-ink-muted dark:text-ink-mutedDark">Benchmark: </span>
            <span>IEEE 33-Bus</span>
          </div>
          <span className="hidden sm:inline text-paper-border dark:text-paper-borderDark">|</span>
          <div>
            <span className="text-ink-muted dark:text-ink-mutedDark">Ops: </span>
            <span>2 Remote Deployments</span>
          </div>
        </div>
      </div>

      {/* Academic Double Separator */}
      <div className="paper-rule-double my-6" />
    </section>
  );
};
