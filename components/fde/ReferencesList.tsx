import React from "react";
import { BookOpen } from "lucide-react";

export const ReferencesList: React.FC = () => {
  return (
    <section id="references" className="mb-12 break-inside-avoid">
      <div className="flex items-baseline gap-2 mb-3">
        <h2 className="font-serif text-base font-bold tracking-tight text-ink dark:text-ink-dark uppercase">
          References
        </h2>
      </div>

      <div className="border border-paper-border dark:border-paper-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-4">
        <ol className="space-y-2.5 text-xs font-serif text-ink dark:text-ink-dark list-none pl-0">
          <li className="flex items-start gap-2">
            <span className="font-mono text-accent dark:text-accent-dark font-bold text-[11px] flex-shrink-0">
              [1]
            </span>
            <span>
              Bird, S., Dudík, M., Edgar, R., Horn, B., Lutz, R., Milan, V., Sameki, M., Wallach, H., &amp; Walker, K. (2020). <em>Fairlearn: A toolkit for assessing and improving fairness in AI</em>. Microsoft Technical Report MSR-TR-2020-32.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="font-mono text-accent dark:text-accent-dark font-bold text-[11px] flex-shrink-0">
              [2]
            </span>
            <span>
              Corbett, A. T., &amp; Anderson, J. R. (1994). Knowledge tracing: Modeling the acquisition of procedural knowledge. <em>User Modeling and User-Adapted Interaction</em>, 4(4), 253–278.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="font-mono text-accent dark:text-accent-dark font-bold text-[11px] flex-shrink-0">
              [3]
            </span>
            <span>
              Baran, M. E., &amp; Wu, F. F. (1989). Network reconfiguration in distribution systems for loss reduction and load balancing. <em>IEEE Transactions on Power Delivery</em>, 4(2), 1401–1407.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="font-mono text-accent dark:text-accent-dark font-bold text-[11px] flex-shrink-0">
              [4]
            </span>
            <span>
              Thurner, L., Scheidler, A., Schäfer, F., Menke, J. H., Dollichon, J., Meier, F., Meinecke, S., &amp; Braun, M. (2018). pandapower—an open-source python tool for convenient modeling, analysis, and optimization of electric power systems. <em>IEEE Transactions on Power Systems</em>, 33(6), 6510–6521.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="font-mono text-accent dark:text-accent-dark font-bold text-[11px] flex-shrink-0">
              [5]
            </span>
            <span>
              Arjun, R. (2026). Bias-Free AI-Driven Placement Automation Using Rule-Augmented Machine Learning. In <em>Proceedings of the International Conference on Intelligent Systems and Computing (ICISC 2026)</em>.
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
};
