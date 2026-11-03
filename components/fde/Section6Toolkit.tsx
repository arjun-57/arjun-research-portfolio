import React from "react";
import { Terminal, Award, CheckCircle2 } from "lucide-react";

export const Section6Toolkit: React.FC = () => {
  return (
    <section id="toolkit" className="mb-10 break-inside-avoid">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="font-mono text-xs font-bold text-accent dark:text-accent-dark">
          06.
        </span>
        <h2 className="font-serif text-lg font-bold tracking-tight text-ink dark:text-ink-dark uppercase">
          Technical Toolkit &amp; Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Toolkit Table */}
        <div className="lg:col-span-7 border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-4">
          <div className="font-mono text-xs font-semibold pb-2 mb-2 border-b border-paper-border dark:border-paper-borderDark flex items-center justify-between text-ink dark:text-ink-dark">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-accent dark:text-accent-dark" />
              Engineering Competencies
            </span>
            <span className="text-[11px] text-ink-muted dark:text-ink-mutedDark">Verified Stack</span>
          </div>

          <table className="w-full text-left text-xs font-serif">
            <thead>
              <tr className="border-b border-paper-border dark:border-paper-borderDark font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark">
                <th className="py-2 px-2 w-1/3">Domain</th>
                <th className="py-2 px-2 w-2/3">Tooling &amp; Frameworks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-paper-border/70 dark:divide-paper-borderDark/70 font-mono text-xs">
              <tr>
                <td className="py-2.5 px-2 font-bold text-accent dark:text-accent-dark">
                  Languages
                </td>
                <td className="py-2.5 px-2 text-ink dark:text-ink-dark">
                  Python, Java, C, C++, SQL
                </td>
              </tr>
              <tr>
                <td className="py-2.5 px-2 font-bold text-accent dark:text-accent-dark">
                  Frameworks
                </td>
                <td className="py-2.5 px-2 text-ink dark:text-ink-dark">
                  FastAPI, React, Next.js, Scikit-Learn, PyTorch, Pandas, NumPy, SymPy, Pandapower
                </td>
              </tr>
              <tr>
                <td className="py-2.5 px-2 font-bold text-accent dark:text-accent-dark">
                  AI &amp; Systems
                </td>
                <td className="py-2.5 px-2 text-ink dark:text-ink-dark">
                  Multi-Agent Systems, RAG, LLMs, Reinforcement Learning, Transformers, Anomaly Detection
                </td>
              </tr>
              <tr>
                <td className="py-2.5 px-2 font-bold text-accent dark:text-accent-dark">
                  Core CS
                </td>
                <td className="py-2.5 px-2 text-ink dark:text-ink-dark">
                  Data Structures &amp; Algorithms, Object-Oriented Programming, DBMS, Operating Systems
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right: Certifications List */}
        <div className="lg:col-span-5 border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-4">
          <div className="font-mono text-xs font-semibold pb-2 mb-2 border-b border-paper-border dark:border-paper-borderDark flex items-center justify-between text-ink dark:text-ink-dark">
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-accent dark:text-accent-dark" />
              Verified Certifications
            </span>
            <span className="text-[11px] text-ink-muted dark:text-ink-mutedDark">Credentials</span>
          </div>

          <ul className="divide-y divide-paper-border/70 dark:divide-paper-borderDark/70 text-xs font-mono">
            <li className="py-2 flex items-start gap-2">
              <span className="text-accent dark:text-accent-dark font-bold">01.</span>
              <div>
                <div className="font-semibold text-ink dark:text-ink-dark">Azure AI Fundamentals</div>
                <div className="text-[10px] text-ink-muted dark:text-ink-mutedDark">Microsoft</div>
              </div>
            </li>
            <li className="py-2 flex items-start gap-2">
              <span className="text-accent dark:text-accent-dark font-bold">02.</span>
              <div>
                <div className="font-semibold text-ink dark:text-ink-dark">GitHub Copilot for Cloud and Development</div>
                <div className="text-[10px] text-ink-muted dark:text-ink-mutedDark">Microsoft Azure</div>
              </div>
            </li>
            <li className="py-2 flex items-start gap-2">
              <span className="text-accent dark:text-accent-dark font-bold">03.</span>
              <div>
                <div className="font-semibold text-ink dark:text-ink-dark">Foundations of Cybersecurity &amp; Risk Management</div>
                <div className="text-[10px] text-ink-muted dark:text-ink-mutedDark">Google</div>
              </div>
            </li>
            <li className="py-2 flex items-start gap-2">
              <span className="text-accent dark:text-accent-dark font-bold">04.</span>
              <div>
                <div className="font-semibold text-ink dark:text-ink-dark">Techno Byte Workshop (AI / ML / Deep Learning)</div>
                <div className="text-[10px] text-ink-muted dark:text-ink-mutedDark">IIT Madras</div>
              </div>
            </li>
            <li className="py-2 flex items-start gap-2">
              <span className="text-accent dark:text-accent-dark font-bold">05.</span>
              <div>
                <div className="font-semibold text-ink dark:text-ink-dark">Mastering C Programming for Beginners</div>
                <div className="text-[10px] text-ink-muted dark:text-ink-mutedDark">Udemy</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

