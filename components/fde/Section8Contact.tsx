"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, Download, Github, Linkedin, Quote, MapPin } from "lucide-react";

export const Section8Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  const email = "arjunr3773@gmail.com";

  const bibtex = `@misc{arjun2026fieldreports,
  author       = {Arjun R},
  title        = {Building Practical AI Systems People Can Trust: Field Reports from Legal, Real-Estate and Energy Operations},
  howpublished = {\\url{https://arjun-research-portfolio.vercel.app}},
  year         = {2026},
  note         = {Forward Deployed Engineering Portfolio, SRM Institute of Science and Technology}
}`;

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyBibtex = () => {
    navigator.clipboard.writeText(bibtex);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  return (
    <section id="contact" className="mb-12 break-inside-avoid">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="font-mono text-xs font-bold text-accent dark:text-accent-dark">
          08.
        </span>
        <h2 className="font-serif text-lg font-bold tracking-tight text-ink dark:text-ink-dark uppercase">
          Contact, Credentials &amp; Citation
        </h2>
      </div>

      <div className="border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-5 sm:p-6">
        <div className="max-w-2xl">
          <p className="font-serif text-sm text-ink dark:text-ink-dark leading-relaxed mb-4">
            Available for Forward Deployed Engineer (FDE) and AI Systems Engineering opportunities where technical depth, pragmatic prototyping, and rigorous verification matter.
          </p>

          {/* Contact Details & Copy Buttons */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-6">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-paper-border dark:border-paper-borderDark bg-paper-bg dark:bg-paper-darkBg text-ink dark:text-ink-dark hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark transition-colors rounded-sm"
              title="Click to copy email address"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Mail className="w-3.5 h-3.5" />}
              <span>{email}</span>
              <span className="text-[10px] text-ink-muted dark:text-ink-mutedDark">
                {copiedEmail ? "(Copied!)" : "(Copy)"}
              </span>
            </button>

            <a
              href="https://github.com/arjun-57"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-paper-border dark:border-paper-borderDark bg-paper-bg dark:bg-paper-darkBg text-ink dark:text-ink-dark hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark transition-colors rounded-sm"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub (@arjun-57)</span>
            </a>

            <a
              href="/resume.pdf"
              download="Arjun_R_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent dark:bg-accent-dark text-white dark:text-paper-darkBg font-semibold hover:bg-accent-hover dark:hover:bg-accent-darkHover transition-colors rounded-sm shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </a>

            <div className="inline-flex items-center gap-1 text-ink-muted dark:text-ink-mutedDark px-2 py-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Chennai, India</span>
            </div>
          </div>
        </div>

        {/* BibTeX Citation Block */}
        <div className="mt-6 pt-4 border-t border-paper-border dark:border-paper-borderDark">
          <div className="flex items-center justify-between mb-2 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-ink dark:text-ink-dark font-semibold">
              <Quote className="w-3.5 h-3.5 text-accent dark:text-accent-dark" />
              Cite this Portfolio (BibTeX)
            </span>
            <button
              onClick={copyBibtex}
              className="text-[11px] text-accent dark:text-accent-dark hover:underline flex items-center gap-1"
            >
              {copiedBibtex ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              <span>{copiedBibtex ? "Copied" : "Copy BibTeX"}</span>
            </button>
          </div>

          <pre className="p-3 bg-paper-bg dark:bg-paper-darkBg border border-paper-border dark:border-paper-borderDark text-[11px] font-mono text-ink-secondary dark:text-ink-secondaryDark overflow-x-auto rounded-sm leading-relaxed">
            <code>{bibtex}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

