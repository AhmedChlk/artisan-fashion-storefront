"use client";

import { cn } from "@/lib/utils/cn";
import type { ProductSize } from "@/types";

interface SizeSelectorProps {
  sizes: ProductSize[];
  value: string | null;
  onChange: (size: string) => void;
}

export function SizeSelector({ sizes, value, onChange }: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Taille">
      {sizes.map((s) => {
        const selected = value === s.label;
        return (
          <button
            key={s.label}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-disabled={!s.available}
            disabled={!s.available}
            onClick={() => s.available && onChange(s.label)}
            className={cn(
              "relative w-12 h-12 flex items-center justify-center text-body-md rounded-xs border transition-colors",
              selected
                ? "bg-primary text-on-primary border-primary"
                : s.available
                  ? "border-outline-variant text-on-surface hover:border-primary"
                  : "border-outline-variant/30 text-on-surface-muted cursor-not-allowed",
            )}
          >
            {s.label}
            {!s.available && (
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="block w-[140%] h-px bg-on-surface-muted/40 rotate-[-30deg]" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
