"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-dark disabled:bg-primary/40",
  secondary:
    "border border-outline text-on-surface bg-transparent hover:bg-surface-container disabled:border-outline-variant disabled:text-on-surface-muted",
  ghost:
    "text-on-surface-variant underline-offset-4 hover:underline bg-transparent",
  inverse:
    "border border-inverse-on-surface text-inverse-on-surface bg-transparent hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-label-md",
  md: "px-6 py-3 text-label-lg",
  lg: "px-8 py-4 text-label-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 uppercase tracking-[0.08em] font-body rounded-xs transition-colors duration-200 ease-standard focus-visible:outline-2",
          "disabled:cursor-not-allowed disabled:opacity-60",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </button>
    );
  },
);
