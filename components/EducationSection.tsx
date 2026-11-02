import React from "react";
import { educationData, certificationsData } from "@/data/education";
import { Award, BookOpen, CheckCircle, GraduationCap, School } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="my-16 scroll-mt-20">
      {/* Section Heading */}
      <div className="flex items-center gap-3 border-b-2 border-academic-blue dark:border-blue-400 pb-2 mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-ink-dark">
          06. EDUCATION AND CERTIFICATIONS
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Formal Degree & Academic Records */}
        <div className="lg:col-span-6 border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-6 rounded-sm shadow-sm break-inside-avoid">
          <div className="flex items-center gap-2 pb-4 border-b border-academic-border dark:border-academic-borderDark">
            <GraduationCap className="w-5 h-5 text-academic-blue dark:text-blue-400" />
            <h3 className="font-serif text-base font-bold uppercase tracking-wider text-ink dark:text-ink-dark">
              Academic Degree
            </h3>
          </div>

          <div className="py-4 space-y-3">
            <div>
              <div className="text-xs font-mono uppercase text-academic-blue dark:text-blue-400 font-semibold">
                Degree Program
              </div>
              <div className="font-serif text-xl font-bold text-ink dark:text-ink-dark mt-0.5">
                {educationData.degree}
              </div>
              <div className="text-sm font-sans font-medium text-ink-secondary dark:text-ink-secondaryDark">
                Major: {educationData.major}
              </div>
            </div>

            <div className="pt-2 border-t border-academic-border/70 dark:border-academic-borderDark/70 grid grid-cols-2 gap-3 text-xs font-mono">
              <div>
                <span className="text-ink-muted dark:text-ink-mutedDark block">Institution</span>
                <span className="font-semibold text-ink dark:text-ink-dark">
                  {educationData.institution}
                </span>
              </div>
              <div>
                <span className="text-ink-muted dark:text-ink-mutedDark block">Duration</span>
                <span className="text-ink dark:text-ink-dark">{educationData.duration}</span>
              </div>
              <div>
                <span className="text-ink-muted dark:text-ink-mutedDark block">Cumulative GPA</span>
                <span className="font-bold text-academic-blue dark:text-blue-400 text-sm">
                  {educationData.cgpa}
                </span>
              </div>
              <div>
                <span className="text-ink-muted dark:text-ink-mutedDark block">Location</span>
                <span className="text-ink dark:text-ink-dark">{educationData.location}</span>
              </div>
            </div>

            {educationData.courseworkHighlights && (
              <div className="pt-3 border-t border-academic-border/70 dark:border-academic-borderDark/70">
                <span className="text-xs font-mono text-ink-muted dark:text-ink-mutedDark block mb-1.5">
                  Core AI &amp; Systems Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {educationData.courseworkHighlights.map((course) => (
                    <span
                      key={course}
                      className="text-[11px] font-mono px-2 py-0.5 bg-paper-bg dark:bg-gray-800 border border-academic-border dark:border-academic-borderDark text-ink dark:text-ink-dark rounded-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Professional Certifications & Workshops */}
        <div className="lg:col-span-6 border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-6 rounded-sm shadow-sm break-inside-avoid">
          <div className="flex items-center gap-2 pb-4 border-b border-academic-border dark:border-academic-borderDark">
            <Award className="w-5 h-5 text-academic-blue dark:text-blue-400" />
            <h3 className="font-serif text-base font-bold uppercase tracking-wider text-ink dark:text-ink-dark">
              Certifications &amp; Workshops
            </h3>
          </div>

          <div className="divide-y divide-academic-border/60 dark:divide-academic-borderDark/60 py-2">
            {certificationsData.map((cert, idx) => (
              <div key={cert.id} className="py-3 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-academic-tint dark:bg-academic-tintDark border border-academic-border dark:border-academic-borderDark font-mono text-[10px] font-bold flex items-center justify-center text-academic-blue dark:text-blue-400 flex-shrink-0 mt-0.5">
                  0{idx + 1}
                </span>

                <div className="flex-1">
                  <h4 className="font-serif text-sm font-semibold text-ink dark:text-ink-dark leading-snug">
                    {cert.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-ink-mutedDark mt-0.5">
                    <span>Issued by {cert.issuer}</span>
                    <span>•</span>
                    <span className="text-[10px] px-1.5 py-0.2 bg-paper-bg dark:bg-gray-800 rounded border border-academic-border dark:border-academic-borderDark">
                      {cert.badgeType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-academic-border dark:border-academic-borderDark text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark">
            Verification: Industry &amp; academic credential records verified against issuing bodies.
          </div>
        </div>
      </div>
    </section>
  );
};

