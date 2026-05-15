"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, label, error, hint, id, ...props }, ref) {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-label-md uppercase text-on-surface-variant"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          className={cn(
            "w-full bg-transparent border-0 border-b border-outline-variant",
            "px-0 py-2 text-body-md text-on-surface placeholder:text-on-surface-muted",
            "transition-colors duration-200 outline-none",
            "focus:border-primary focus:ring-0",
            error && "border-error",
            className,
          )}
          {...props}
        />
        {error ? (
          <span className="text-caption text-error">{error}</span>
        ) : hint ? (
          <span className="text-caption text-on-surface-muted">{hint}</span>
        ) : null}
      </div>
    );
  },
);

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ className, label, error, id, ...props }, ref) {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-label-md uppercase text-on-surface-variant"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={5}
          className={cn(
            "w-full bg-transparent border-b border-outline-variant",
            "px-0 py-2 text-body-md text-on-surface placeholder:text-on-surface-muted",
            "transition-colors duration-200 outline-none resize-none",
            "focus:border-primary",
            error && "border-error",
            className,
          )}
          {...props}
        />
        {error && <span className="text-caption text-error">{error}</span>}
      </div>
    );
  },
);
