import React from "react";
import { skillsData } from "@/data/skills";
import { Cpu, Terminal } from "lucide-react";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="my-16 scroll-mt-20">
      {/* Section Heading */}
      <div className="flex items-center gap-3 border-b-2 border-academic-blue dark:border-blue-400 pb-2 mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-ink-dark">
          05. TECHNICAL SKILLS
        </h2>
      </div>

      {/* Academic Table Format */}
      <div className="border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark rounded-sm shadow-sm overflow-hidden break-inside-avoid">
        <div className="px-5 py-3.5 bg-academic-tint dark:bg-academic-tintDark border-b border-academic-border dark:border-academic-borderDark flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-academic-blue dark:text-blue-400" />
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-ink dark:text-ink-dark">
              Table 3: Technical Competencies &amp; Methodologies
            </h3>
          </div>
          <span className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark">
            Academic &amp; Systems Taxonomy
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm font-sans">
            <thead>
              <tr className="border-b border-academic-border dark:border-academic-borderDark bg-paper-bg/60 dark:bg-gray-800/40 font-mono text-xs text-ink dark:text-ink-dark">
                <th className="py-3 px-5 font-semibold w-1/4">Skill Domain</th>
                <th className="py-3 px-5 font-semibold w-1/2">Technologies &amp; Tooling</th>
                <th className="py-3 px-5 font-semibold w-1/4 hidden md:table-cell">
                  Domain Classification
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-academic-border/60 dark:divide-academic-borderDark/60 font-mono text-xs">
              {skillsData.map((category) => (
                <tr
                  key={category.category}
                  className="hover:bg-paper-bg/40 dark:hover:bg-gray-800/30 transition-colors"
                >
                  <td className="py-4 px-5 font-bold text-academic-blue dark:text-blue-400 align-top">
                    {category.category}
                  </td>
                  <td className="py-4 px-5 text-ink dark:text-ink-dark align-top leading-relaxed">
                    <div className="flex flex-wrap gap-1.5 font-mono">
                      {category.items.map((item, idx) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 bg-paper-bg dark:bg-gray-800 text-ink dark:text-ink-dark border border-academic-border dark:border-academic-borderDark rounded-sm text-xs font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-ink-secondary dark:text-ink-secondaryDark font-sans text-xs align-top hidden md:table-cell leading-relaxed">
                    {category.classificationNote}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-5 py-3 border-t border-academic-border dark:border-academic-borderDark bg-paper-bg/40 dark:bg-gray-900/30 text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark">
          Table 3 Note: Restricted to frameworks, languages, and theoretical domains with verifiable project codebase or research usage.
        </div>
      </div>
    </section>
  );
};
