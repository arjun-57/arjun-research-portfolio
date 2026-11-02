import React from "react";

interface FigureProps {
  figureNumber?: string;
  caption: string;
  children: React.ReactNode;
  className?: string;
}

export const Figure: React.FC<FigureProps> = ({
  figureNumber,
  caption,
  children,
  className = "",
}) => {
  return (
    <figure
      className={`my-6 border border-academic-border dark:border-academic-borderDark bg-paper-surface dark:bg-paper-surfaceDark p-4 md:p-6 rounded-sm break-inside-avoid ${className}`}
    >
      <div className="overflow-x-auto">{children}</div>
      <figcaption className="mt-4 pt-3 border-t border-academic-border dark:border-academic-borderDark text-xs text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
        {figureNumber && (
          <span className="font-serif italic font-semibold text-ink dark:text-ink-dark mr-1.5">
            {figureNumber}:
          </span>
        )}
        {caption}
      </figcaption>
    </figure>
  );
};

