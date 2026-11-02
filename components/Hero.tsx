import React from "react";
import { profileData } from "@/data/profile";
import {
  FileText,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Download,
  BookOpen,
  MapPin,
  Building,
  GraduationCap
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-8 pb-12 text-center break-inside-avoid">
      {/* Academic Header Metadata / Document Classification */}
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark rounded-full text-xs font-mono text-ink-secondary dark:text-ink-secondaryDark">
        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
        <span>Portfolio Document • Technical Preprint Format • Chennai, IN</span>
      </div>

      {/* Main Author / Paper Title */}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink dark:text-ink-dark max-w-4xl mx-auto leading-tight">
        {profileData.name}
      </h1>

      {/* Professional Positioning */}
      <div className="mt-3 font-mono text-xs sm:text-sm uppercase tracking-widest text-academic-blue dark:text-blue-400 font-semibold">
        {profileData.titles.join(" | ")}
      </div>

      {/* Tagline / Monograph Quote */}
      <p className="mt-4 font-serif italic text-base sm:text-lg text-ink-secondary dark:text-ink-secondaryDark max-w-2xl mx-auto leading-relaxed">
        &ldquo;{profileData.tagline}&rdquo;
      </p>

      {/* Academic Affiliation Block */}
      <div className="mt-6 pt-5 border-t border-academic-border dark:border-academic-borderDark max-w-xl mx-auto text-xs font-mono text-ink-secondary dark:text-ink-secondaryDark space-y-1">
        <div className="font-semibold text-ink dark:text-ink-dark flex items-center justify-center gap-1.5">
          <GraduationCap className="w-4 h-4 text-academic-blue dark:text-blue-400" />
          <span>{profileData.department}</span>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <Building className="w-3.5 h-3.5 text-ink-muted dark:text-ink-mutedDark" />
          <span>{profileData.institution}</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-ink-muted dark:text-ink-mutedDark">
          <MapPin className="w-3.5 h-3.5" />
          <span>{profileData.location}</span>
        </div>
        <div className="pt-1">
          <span className="text-ink-muted dark:text-ink-mutedDark">Correspondence: </span>
          <a
            href={`mailto:${profileData.email}`}
            className="text-academic-blue dark:text-blue-400 hover:underline font-medium"
          >
            {profileData.email}
          </a>
          <span className="mx-2 text-academic-border dark:text-academic-borderDark">•</span>
          <span className="text-ink-muted dark:text-ink-mutedDark">{profileData.phone}</span>
        </div>
      </div>

      {/* Primary Action Buttons & Academic Links */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono">
        {/* View Research */}
        <a
          href="#research"
          className="inline-flex items-center gap-2 px-4 py-2 bg-academic-blue text-white rounded-sm font-medium hover:bg-academic-blueLight transition-all shadow-sm"
        >
          <BookOpen className="w-4 h-4" />
          <span>View Research</span>
        </a>

        {/* Explore Projects */}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-4 py-2 border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark text-ink dark:text-ink-dark rounded-sm hover:border-academic-blue dark:hover:border-blue-400 transition-all"
        >
          <span>Explore Projects</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>

        {/* Download Resume */}
        <a
          href={profileData.resumePdfUrl}
          download="Arjun_R_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark text-ink dark:text-ink-dark rounded-sm hover:border-academic-blue dark:hover:border-blue-400 transition-all"
          title="Download Arjun R's Curriculum Vitae (PDF)"
        >
          <Download className="w-3.5 h-3.5 text-academic-blue dark:text-blue-400" />
          <span>Download Resume</span>
        </a>

        {/* GitHub Placeholder */}
        <a
          href={profileData.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark text-ink-secondary dark:text-ink-secondaryDark rounded-sm hover:text-ink dark:hover:text-ink-dark transition-all"
          title="GitHub Profile (Placeholder - to be linked by Arjun R)"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
          <span className="text-[9px] px-1 bg-gray-100 dark:bg-gray-800 text-ink-muted dark:text-ink-mutedDark rounded border border-academic-border dark:border-academic-borderDark">
            Placeholder
          </span>
        </a>

        {/* LinkedIn Placeholder */}
        <a
          href={profileData.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark text-ink-secondary dark:text-ink-secondaryDark rounded-sm hover:text-ink dark:hover:text-ink-dark transition-all"
          title="LinkedIn Profile (Placeholder - to be linked by Arjun R)"
        >
          <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
          <span>LinkedIn</span>
          <span className="text-[9px] px-1 bg-gray-100 dark:bg-gray-800 text-ink-muted dark:text-ink-mutedDark rounded border border-academic-border dark:border-academic-borderDark">
            Placeholder
          </span>
        </a>

        {/* Direct Email */}
        <a
          href={`mailto:${profileData.email}`}
          className="inline-flex items-center gap-1.5 px-3 py-2 border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark text-ink-secondary dark:text-ink-secondaryDark rounded-sm hover:text-ink dark:hover:text-ink-dark transition-all"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Email</span>
        </a>
      </div>

      {/* Subtle Horizontal Separator / Academic Double Rule */}
      <div className="mt-10 academic-double-divider max-w-4xl mx-auto" />
    </section>
  );
};
