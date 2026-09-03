import React from "react";
import { clsx } from "clsx";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "success" | "warning" | "dark" | "outline" | "electric" | "neutral";
  size?: "sm" | "md";
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  size = "md",
  dot = false,
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-full border transition-colors";

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
  };

  const variantStyles = {
    primary: "bg-blue-50 text-primary border-blue-200/80",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    warning: "bg-amber-50 text-amber-800 border-amber-200/80",
    dark: "bg-navy-surface text-slate-200 border-navy-border",
    outline: "bg-transparent text-text-secondary border-border",
    electric: "bg-sky-50 text-sky-700 border-sky-200/80",
    neutral: "bg-slate-100 text-text-secondary border-slate-200",
  };

  const dotColors = {
    primary: "bg-primary",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    dark: "bg-sky-400",
    outline: "bg-slate-400",
    electric: "bg-sky-500",
    neutral: "bg-slate-500",
  };

  return (
    <span className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)} {...props}>
      {dot && <span className={clsx("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])} />}
      {children}
    </span>
  );
};
