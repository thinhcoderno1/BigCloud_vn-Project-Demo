import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "dark" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isFullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  leftIcon,
  rightIcon,
  isFullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-md select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5 font-medium",
    md: "text-sm px-5 py-2.5 gap-2 font-medium",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-glow-primary border border-transparent",
    secondary:
      "bg-surface-subtle text-text-primary hover:bg-border border border-border hover:border-slate-300",
    outline:
      "bg-transparent text-text-primary border border-border hover:border-primary hover:text-primary hover:bg-primary-light/40",
    dark: "bg-navy-deep text-white hover:bg-navy-surface border border-navy-border hover:border-slate-700 shadow-sm",
    ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-slate-100",
    white: "bg-white text-text-primary hover:bg-slate-50 border border-border shadow-sm hover:shadow",
  };

  const combinedClasses = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    isFullWidth && "w-full",
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
};
