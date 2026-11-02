import React from "react";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, CheckSquare, ChevronRight, FileSpreadsheet, MapPin } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="my-16 scroll-mt-20">
      {/* Section Heading */}
      <div className="flex items-center gap-3 border-b-2 border-academic-blue dark:border-blue-400 pb-2 mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-ink-dark">
          03. ENGINEERING EXPERIENCE
        </h2>
      </div>

      <div className="space-y-10">
        {experienceData.map((item) => {
          const isInternship = item.isEngineeringInternship;

          return (
            <div
              key={item.id}
              className={`border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-5 sm:p-7 rounded-sm break-inside-avoid ${
                isInternship ? "shadow-sm" : "opacity-95"
              }`}
            >
              {/* Header Strip */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-academic-border dark:border-academic-borderDark">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-academic-blue dark:text-blue-400">
                      {item.sectionNumber}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-ink dark:text-ink-dark">
                      {item.organization}
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-ink-secondary dark:text-ink-secondaryDark mt-0.5">
                    {item.role}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-muted dark:text-ink-mutedDark">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.duration}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Summary Statement */}
              <div className="my-4">
                <p className="font-serif italic text-sm text-ink-secondary dark:text-ink-secondaryDark">
                  &ldquo;{item.summary}&rdquo;
                </p>
              </div>

              {/* Contributions */}
              <div className={`space-y-4 ${isInternship ? "" : "text-xs"}`}>
                {item.contributions.map((contrib, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 bg-paper-bg/60 dark:bg-gray-900/40 border border-academic-border/60 dark:border-academic-borderDark/60 rounded-sm"
                  >
                    {contrib.title && (
                      <h4 className="font-serif text-sm font-semibold text-ink dark:text-ink-dark mb-2 flex items-center gap-1.5">
                        <ChevronRight className="w-4 h-4 text-academic-blue dark:text-blue-400 flex-shrink-0" />
                        <span>{contrib.title}</span>
                      </h4>
                    )}
                    <ul className="space-y-1.5 text-xs sm:text-sm font-sans text-ink dark:text-ink-dark">
                      {contrib.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-academic-blue dark:text-blue-400 font-mono text-xs mt-0.5">
                            —
                          </span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Verification note */}
              {isInternship && (
                <div className="mt-4 pt-3 border-t border-academic-border dark:border-academic-borderDark flex justify-between text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark">
                  <span>Scope: Software Engineering Internship</span>
                  <span>Verified Professional Experience</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

