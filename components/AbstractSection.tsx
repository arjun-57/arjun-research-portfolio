import React from "react";
import { profileData } from "@/data/profile";

export const AbstractSection: React.FC = () => {
  return (
    <section
      id="abstract"
      className="my-10 max-w-3xl mx-auto px-4 sm:px-8 py-6 bg-paper-surface dark:bg-paper-surfaceDark border-y sm:border border-academic-border dark:border-academic-borderDark rounded-sm text-center break-inside-avoid"
    >
      {/* Abstract Heading */}
      <h2 className="font-serif text-sm font-bold tracking-widest uppercase text-ink dark:text-ink-dark mb-4">
        Abstract
      </h2>

      {/* Abstract Body */}
      <p className="font-serif text-sm sm:text-base text-ink dark:text-ink-dark leading-relaxed text-justify sm:text-justify max-w-2xl mx-auto">
        {profileData.abstract}
      </p>

      {/* Keywords */}
      <div className="mt-6 pt-4 border-t border-academic-border dark:border-academic-borderDark text-left">
        <p className="text-xs font-mono text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
          <strong className="text-ink dark:text-ink-dark font-serif italic text-sm">
            Keywords—
          </strong>{" "}
          {profileData.keywords.map((kw, idx) => (
            <span key={kw}>
              <span className="font-medium text-ink dark:text-ink-dark">{kw}</span>
              {idx < profileData.keywords.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

