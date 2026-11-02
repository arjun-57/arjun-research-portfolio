"use client";

import React, { useState } from "react";
import { ProjectArchitectureNode } from "@/data/projects";
import { ArrowRight, ChevronDown, ChevronRight, Layers, Sparkles } from "lucide-react";

interface ArchitectureDiagramProps {
  figureNumber: string;
  title: string;
  caption: string;
  flow: ProjectArchitectureNode[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  figureNumber,
  title,
  caption,
  flow,
}) => {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  return (
    <figure className="my-6 border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-4 md:p-6 rounded-sm">
      {/* Figure Header */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-academic-border dark:border-academic-borderDark">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-academic-blue dark:text-blue-400" />
          <span className="font-mono text-xs font-semibold text-academic-blue dark:text-blue-400 uppercase tracking-wider">
            {figureNumber}: System Flow
          </span>
        </div>
        <span className="text-[11px] font-mono text-ink-muted dark:text-ink-mutedDark">
          Interactive Architecture Schematic
        </span>
      </div>

      {/* Schematic Container */}
      <div className="py-6 overflow-x-auto">
        <div className="min-w-[620px] flex flex-col gap-3">
          {/* Node Flow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-2 items-stretch">
            {flow.map((node, idx) => {
              const isSelected = selectedNode === node.step;
              const isExplanatory = node.isCopilotOrExplanatory;

              return (
                <div
                  key={node.step}
                  onClick={() => setSelectedNode(isSelected ? null : node.step)}
                  className={`cursor-pointer group relative flex flex-col justify-between p-3 rounded-sm border transition-all ${
                    isExplanatory
                      ? "border-amber-400 dark:border-amber-600 bg-amber-50/50 dark:bg-amber-950/20"
                      : isSelected
                      ? "border-academic-blue bg-academic-tint dark:bg-academic-tintDark shadow-sm"
                      : "border-academic-border dark:border-academic-borderDark bg-white dark:bg-paper-cardDark hover:border-academic-blue"
                  }`}
                >
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-5 h-5 rounded-full bg-paper-bg dark:bg-gray-800 border border-academic-border dark:border-academic-borderDark font-mono text-[10px] font-bold flex items-center justify-center text-ink-secondary dark:text-ink-secondaryDark">
                      0{node.step}
                    </span>
                    {isExplanatory && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded font-semibold uppercase">
                        Explanatory
                      </span>
                    )}
                  </div>

                  {/* Node Label */}
                  <div>
                    <h5 className="font-serif text-xs font-semibold text-ink dark:text-ink-dark leading-tight group-hover:text-academic-blue dark:group-hover:text-blue-400 transition-colors">
                      {node.label}
                    </h5>
                    <p className="font-mono text-[10px] text-ink-muted dark:text-ink-mutedDark mt-1">
                      {node.role}
                    </p>
                  </div>

                  {/* Flow arrow on non-last elements */}
                  {idx < flow.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-academic-blue dark:text-blue-400 opacity-60">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Node detail drawer */}
          <div className="mt-3 p-3 bg-paper-bg dark:bg-gray-900/60 border border-academic-border dark:border-academic-borderDark rounded-sm text-xs font-mono">
            {selectedNode ? (
              <div className="flex items-start gap-2 text-ink dark:text-ink-dark">
                <span className="text-academic-blue dark:text-blue-400 font-bold">
                  [Node 0{selectedNode} Detail]:
                </span>
                <span>{flow.find((n) => n.step === selectedNode)?.detail}</span>
              </div>
            ) : (
              <div className="text-ink-muted dark:text-ink-mutedDark flex items-center gap-1.5 text-[11px]">
                <span>Click on any node above to inspect pipeline implementation details.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Academic Caption */}
      <figcaption className="pt-3 border-t border-academic-border dark:border-academic-borderDark text-xs text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
        <span className="font-serif italic font-semibold text-ink dark:text-ink-dark">
          {caption.split(":")[0]}:
        </span>{" "}
        {caption.split(":").slice(1).join(":")}
      </figcaption>
    </figure>
  );
};
