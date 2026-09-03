import React from "react";
import { clsx } from "clsx";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "center",
  theme = "light",
  className,
}) => {
  return (
    <div
      className={clsx(
        "mb-12 md:mb-16",
        {
          "text-center max-w-3xl mx-auto": align === "center",
          "text-left max-w-2xl": align === "left",
        },
        className
      )}
    >
      {eyebrow && (
        <div
          className={clsx(
            "text-xs font-semibold tracking-wider uppercase mb-3 inline-block",
            theme === "dark" ? "text-electric" : "text-primary"
          )}
        >
          {eyebrow}
        </div>
      )}

      <h2
        className={clsx(
          "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight",
          theme === "dark" ? "text-white" : "text-text-primary"
        )}
      >
        {title}{" "}
        {titleHighlight && (
          <span
            className={
              theme === "dark"
                ? "text-electric"
                : "text-primary font-bold"
            }
          >
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={clsx(
            "mt-4 text-base sm:text-lg leading-relaxed",
            theme === "dark" ? "text-slate-300" : "text-text-secondary"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
