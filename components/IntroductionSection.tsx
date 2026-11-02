import React from "react";
import { profileData } from "@/data/profile";
import { UserCheck } from "lucide-react";

export const IntroductionSection: React.FC = () => {
  return (
    <section id="introduction" className="my-12 scroll-mt-20">
      {/* Numbered Academic Section Heading */}
      <div className="flex items-center gap-3 border-b-2 border-academic-blue dark:border-blue-400 pb-2 mb-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-ink-dark">
          01. INTRODUCTION
        </h2>
      </div>

      {/* Two-Column Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Academic Introduction Prose */}
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed text-ink dark:text-ink-dark font-sans">
          {profileData.introduction.map((paragraph, idx) => (
            <p key={idx} className="text-justify leading-relaxed">
              {idx === 0 && (
                <span className="font-serif font-bold text-lg mr-1 text-academic-blue dark:text-blue-400">
                  W
                </span>
              )}
              {idx === 0 ? paragraph.slice(1) : paragraph}
            </p>
          ))}

          <div className="pt-2 text-xs font-mono text-ink-muted dark:text-ink-mutedDark italic">
            * Scope note: Research methodologies and applied software implementations are verified against institutional records and academic project repositories.
          </div>
        </div>

        {/* Right Column: Compact Academic Profile Table */}
        <div className="lg:col-span-5 bg-paper-surface dark:bg-paper-surfaceDark border border-academic-border dark:border-academic-borderDark p-4 sm:p-5 rounded-sm shadow-sm break-inside-avoid">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-academic-border dark:border-academic-borderDark">
            <UserCheck className="w-4 h-4 text-academic-blue dark:text-blue-400" />
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-ink dark:text-ink-dark">
              Table 1: Candidate Profile &amp; Affiliations
            </h3>
          </div>

          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-academic-border dark:border-academic-borderDark text-ink-muted dark:text-ink-mutedDark">
                <th className="py-2 font-medium w-1/3">Attribute</th>
                <th className="py-2 font-medium w-2/3">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-academic-border/60 dark:divide-academic-borderDark/60">
              {profileData.profileAttributes.map((item) => (
                <tr
                  key={item.attribute}
                  className="hover:bg-paper-bg/60 dark:hover:bg-gray-800/40 transition-colors"
                >
                  <td className="py-2.5 font-semibold text-ink dark:text-ink-dark">
                    {item.attribute}
                  </td>
                  <td className="py-2.5 text-ink-secondary dark:text-ink-secondaryDark">
                    {item.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 pt-3 border-t border-academic-border dark:border-academic-borderDark text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark flex items-center justify-between">
            <span>Status: Active Undergraduate</span>
            <span>Reg. Dept. AI, SRMIST</span>
          </div>
        </div>
      </div>
    </section>
  );
};
