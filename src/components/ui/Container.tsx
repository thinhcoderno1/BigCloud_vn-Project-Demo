import React from "react";
import { clsx } from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = "default",
  ...props
}) => {
  return (
    <div
      className={clsx(
        "mx-auto px-4 sm:px-6 lg:px-8 w-full",
        {
          "max-w-content": size === "default",
          "max-w-4xl": size === "narrow",
          "max-w-container": size === "wide",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
