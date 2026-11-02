import React from "react";
import { profileData } from "@/data/profile";
import { FileText, Download, Github, Linkedin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t-2 border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark py-12 text-xs font-mono text-ink-secondary dark:text-ink-secondaryDark break-inside-avoid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Masthead Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-academic-border dark:border-academic-borderDark">
          <div>
            <div className="font-serif font-bold text-base text-ink dark:text-ink-dark">
              ARJUN R — ACADEMIC &amp; ENGINEERING PORTFOLIO
            </div>
            <div className="text-[11px] text-ink-muted dark:text-ink-mutedDark mt-0.5">
              Department of Artificial Intelligence • SRM Institute of Science and Technology • Chennai, India
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profileData.resumePdfUrl}
              download="Arjun_R_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-academic-border dark:border-academic-borderDark rounded text-ink dark:text-ink-dark hover:border-academic-blue dark:hover:border-blue-400 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Middle Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div>
            <span className="font-serif font-bold text-ink dark:text-ink-dark block mb-2 uppercase tracking-wider text-[11px]">
              Direct Contact
            </span>
            <ul className="space-y-1 text-ink-secondary dark:text-ink-secondaryDark">
              <li>
                Email:{" "}
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-academic-blue dark:text-blue-400 hover:underline"
                >
                  {profileData.email}
                </a>
              </li>
              <li>Phone: {profileData.phone}</li>
              <li>Location: {profileData.location}</li>
            </ul>
          </div>

          <div>
            <span className="font-serif font-bold text-ink dark:text-ink-dark block mb-2 uppercase tracking-wider text-[11px]">
              Primary Profiles
            </span>
            <ul className="space-y-1 text-ink-secondary dark:text-ink-secondaryDark">
              <li>
                <a
                  href={profileData.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-academic-blue dark:hover:text-blue-400 flex items-center gap-1"
                >
                  <span>GitHub Profile [Placeholder]</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-academic-blue dark:hover:text-blue-400 flex items-center gap-1"
                >
                  <span>LinkedIn Profile [Placeholder]</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.paperPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-academic-blue dark:hover:text-blue-400 flex items-center gap-1"
                >
                  <span>ICISC 2026 Manuscript Notice</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-serif font-bold text-ink dark:text-ink-dark block mb-2 uppercase tracking-wider text-[11px]">
              Publication Standards
            </span>
            <p className="text-[11px] leading-relaxed text-ink-muted dark:text-ink-mutedDark font-sans">
              Typeset in academic preprint format. All reported metrics, project parameters, and experimental findings are anchored to verified institutional records.
            </p>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-6 border-t border-academic-border dark:border-academic-borderDark flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-ink-muted dark:text-ink-mutedDark">
          <div>
            &copy; {new Date().getFullYear()} Arjun R. Typeset in Next.js &amp; Tailwind CSS.
          </div>
          <div>
            Designed in academic editorial style (NeurIPS / IEEE / arXiv inspired layout).
          </div>
        </div>
      </div>
    </footer>
  );
};
