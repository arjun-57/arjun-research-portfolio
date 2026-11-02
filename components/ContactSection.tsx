import React from "react";
import { profileData } from "@/data/profile";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Sparkles
} from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="my-16 scroll-mt-20 break-inside-avoid">
      {/* Section Heading */}
      <div className="flex items-center gap-3 border-b-2 border-academic-blue dark:border-blue-400 pb-2 mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-ink-dark">
          07. CONTACT &amp; CONCLUSION
        </h2>
      </div>

      <div className="border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-6 sm:p-8 md:p-10 rounded-sm shadow-sm">
        <div className="max-w-3xl">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink dark:text-ink-dark mb-4">
            Research Collaboration &amp; Engineering Opportunities
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-ink dark:text-ink-dark font-sans leading-relaxed text-justify">
            <p>
              I&apos;m interested in opportunities where I can work on meaningful technical problems, develop practical AI applications, and contribute to research-driven engineering teams.
            </p>
            <p className="font-serif italic text-ink-secondary dark:text-ink-secondaryDark">
              &ldquo;If you&apos;re working on something interesting, I&apos;d be happy to connect.&rdquo;
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="mt-8 pt-6 border-t border-academic-border dark:border-academic-borderDark grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs font-mono">
            {/* Email */}
            <div className="p-3 bg-paper-bg/60 dark:bg-gray-900/40 border border-academic-border/60 dark:border-academic-borderDark/60 rounded-sm">
              <span className="text-ink-muted dark:text-ink-mutedDark block mb-1 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-academic-blue dark:text-blue-400" />
                Email
              </span>
              <a
                href={`mailto:${profileData.email}`}
                className="font-bold text-ink dark:text-ink-dark hover:text-academic-blue dark:hover:text-blue-400 break-all"
              >
                {profileData.email}
              </a>
            </div>

            {/* Phone */}
            <div className="p-3 bg-paper-bg/60 dark:bg-gray-900/40 border border-academic-border/60 dark:border-academic-borderDark/60 rounded-sm">
              <span className="text-ink-muted dark:text-ink-mutedDark block mb-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-academic-blue dark:text-blue-400" />
                Direct Telephone
              </span>
              <a
                href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
                className="font-bold text-ink dark:text-ink-dark hover:text-academic-blue dark:hover:text-blue-400"
              >
                {profileData.phone}
              </a>
            </div>

            {/* Location */}
            <div className="p-3 bg-paper-bg/60 dark:bg-gray-900/40 border border-academic-border/60 dark:border-academic-borderDark/60 rounded-sm">
              <span className="text-ink-muted dark:text-ink-mutedDark block mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-academic-blue dark:text-blue-400" />
                Location
              </span>
              <span className="font-bold text-ink dark:text-ink-dark">
                {profileData.location}
              </span>
            </div>
          </div>

          {/* Links & Resume Action Strip */}
          <div className="mt-8 pt-6 border-t border-academic-border dark:border-academic-borderDark flex flex-wrap items-center gap-3 text-xs font-mono">
            {/* Download Resume Button */}
            <a
              href={profileData.resumePdfUrl}
              download="Arjun_R_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-academic-blue text-white rounded-sm font-semibold hover:bg-academic-blueLight transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            {/* LinkedIn Placeholder */}
            <a
              href={profileData.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-academic-border dark:border-academic-borderDark bg-paper-bg dark:bg-gray-800 text-ink dark:text-ink-dark rounded-sm hover:border-academic-blue dark:hover:border-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span>LinkedIn [Placeholder]</span>
            </a>

            {/* GitHub Placeholder */}
            <a
              href={profileData.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-academic-border dark:border-academic-borderDark bg-paper-bg dark:bg-gray-800 text-ink dark:text-ink-dark rounded-sm hover:border-academic-blue dark:hover:border-blue-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub [Placeholder]</span>
            </a>
          </div>

          {/* Editorial / Recruiter Disclaimer */}
          <div className="mt-6 pt-4 border-t border-academic-border/70 dark:border-academic-borderDark/70 text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark flex items-center justify-between">
            <span>Primary Focus: AI Developer | Research Engineer | Software Developer</span>
            <span>Graduation: 2027</span>
          </div>
        </div>
      </div>
    </section>
  );
};
