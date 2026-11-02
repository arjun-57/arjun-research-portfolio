import React from "react";
import { projectsData } from "@/data/projects";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import {
  Code2,
  ExternalLink,
  Github,
  CheckCircle,
  Clock,
  AlertTriangle,
  Cpu,
  Layers
} from "lucide-react";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="my-16 scroll-mt-20">
      {/* Section Heading */}
      <div className="flex items-center gap-3 border-b-2 border-academic-blue dark:border-blue-400 pb-2 mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-ink-dark">
          04. SELECTED ENGINEERING PROJECTS
        </h2>
      </div>

      <div className="space-y-16">
        {projectsData.map((project) => (
          <article
            key={project.id}
            className="border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-6 sm:p-8 rounded-sm shadow-sm"
          >
            {/* Project Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-academic-border dark:border-academic-borderDark">
              <div>
                <span className="font-mono text-xs font-bold text-academic-blue dark:text-blue-400">
                  Case Study {project.number}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink dark:text-ink-dark mt-1">
                  {project.title}
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Links */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={project.links.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-academic-border dark:border-academic-borderDark bg-paper-bg dark:bg-paper-cardDark text-xs font-mono text-ink-secondary dark:text-ink-secondaryDark hover:text-ink dark:hover:text-ink-dark rounded transition-colors"
                  title="Source code repository (Placeholder link)"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{project.links.github.label}</span>
                </a>
              </div>
            </div>

            {/* Abstract */}
            <div className="my-5 p-4 bg-academic-tint/70 dark:bg-academic-tintDark/50 border-l-2 border-academic-blue dark:border-blue-400 text-xs sm:text-sm font-sans">
              <strong className="font-serif uppercase tracking-wider text-xs block text-academic-blue dark:text-blue-400 mb-1">
                Abstract
              </strong>
              <p className="text-ink dark:text-ink-dark leading-relaxed italic">
                &ldquo;{project.abstract}&rdquo;
              </p>
            </div>

            {/* Technologies Used Strip */}
            <div className="mb-6 pb-4 border-b border-academic-border/70 dark:border-academic-borderDark/70">
              <span className="text-xs font-mono text-ink-muted dark:text-ink-mutedDark mr-2">
                Technologies:
              </span>
              <div className="inline-flex flex-wrap gap-1.5 mt-2 sm:mt-0">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-paper-bg dark:bg-gray-800 text-ink dark:text-ink-dark border border-academic-border dark:border-academic-borderDark text-xs font-mono rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Two-Column Technical Details: Problem vs Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              {/* Problem Statement */}
              <div className="space-y-2">
                <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-ink dark:text-ink-dark flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
                  Problem Statement
                </h4>
                <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark leading-relaxed font-sans text-justify">
                  {project.problemStatement}
                </p>
              </div>

              {/* Technical Approach */}
              <div className="space-y-2">
                <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-ink dark:text-ink-dark flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-academic-blue dark:bg-blue-400 inline-block" />
                  Technical Approach
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark font-sans">
                  {project.technicalApproach.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-academic-blue dark:text-blue-400 font-mono text-xs mt-0.5">
                        &bull;
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technical Architecture Diagram */}
            <ArchitectureDiagram
              figureNumber={project.architectureFigureNumber}
              title={project.architectureTitle}
              caption={project.architectureCaption}
              flow={project.architectureFlow}
            />

            {/* Key Contributions */}
            <div className="my-6">
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-ink dark:text-ink-dark mb-3">
                Key Contributions &amp; System Features
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-sans">
                {project.keyContributions.map((contrib, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 p-2.5 bg-paper-bg/50 dark:bg-gray-900/40 border border-academic-border/60 dark:border-academic-borderDark/60 rounded-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-ink dark:text-ink-dark">{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Implementation Status & Scientific Verification Boundaries */}
            <div className="mt-6 pt-4 border-t border-academic-border dark:border-academic-borderDark bg-paper-bg/40 dark:bg-gray-900/30 p-4 rounded-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-academic-border dark:border-academic-borderDark text-xs font-mono">
                <span className="font-bold text-ink dark:text-ink-dark flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-academic-blue dark:text-blue-400" />
                  Verification Status: {project.statusAndVerification.status}
                </span>
                <span className="text-ink-muted dark:text-ink-mutedDark">
                  Strict Technical Boundary
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-xs font-sans">
                <div>
                  <span className="font-mono font-semibold text-emerald-700 dark:text-emerald-400 block mb-1">
                    Implemented &amp; Verified Scope:
                  </span>
                  <ul className="space-y-1 text-ink-secondary dark:text-ink-secondaryDark list-disc list-inside">
                    {project.statusAndVerification.implementedScope.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-mono font-semibold text-amber-700 dark:text-amber-400 block mb-1">
                    Experimental / Proposed Future Extensions:
                  </span>
                  <ul className="space-y-1 text-ink-secondary dark:text-ink-secondaryDark list-disc list-inside">
                    {project.statusAndVerification.experimentalScope.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-3 pt-2 border-t border-academic-border/60 dark:border-academic-borderDark/60 text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark">
                <strong>Scientific Disclaimer:</strong>{" "}
                {project.statusAndVerification.accuracyOrValidationNote}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

