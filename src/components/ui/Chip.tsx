"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "filter" | "tag" | "outline";

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  variant?: Variant;
  asSpan?: boolean;
}

const base =
  "inline-flex items-center px-3 py-1.5 text-label-md uppercase rounded-xs transition-colors duration-200";

export function Chip({
  className,
  active,
  variant = "filter",
  asSpan = false,
  children,
  ...props
}: ChipProps) {
  const styles = cn(
    base,
    variant === "filter" &&
      (active
        ? "bg-primary text-on-primary"
        : "border border-outline-variant text-on-surface-variant hover:bg-surface-container"),
    variant === "tag" &&
      "border border-outline-variant text-on-surface-variant",
    variant === "outline" &&
      "border border-outline-variant text-on-surface-variant",
    className,
  );

  if (asSpan) {
    return <span className={styles}>{children}</span>;
  }

  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  );
}
