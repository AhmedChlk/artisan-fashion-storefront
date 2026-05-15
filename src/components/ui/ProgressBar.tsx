import { Check } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type Step = { id: string; label: string };

interface ProgressBarProps {
  steps: Step[];
  current: string;
}

export function ProgressBar({ steps, current }: ProgressBarProps) {
  const currentIdx = steps.findIndex((s) => s.id === current);
  return (
    <ol className="flex items-center justify-center gap-2 sm:gap-6">
      {steps.map((s, i) => {
        const done = i < currentIdx;
        const active = i === currentIdx;
        return (
          <li key={s.id} className="flex items-center gap-2 sm:gap-3">
            <span
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-label-sm border",
                done && "bg-primary text-on-primary border-primary",
                active && "border-primary text-primary",
                !done && !active && "border-outline-variant text-on-surface-muted",
              )}
            >
              {done ? <Check className="w-3 h-3" /> : i + 1}
            </span>
            <span
              className={cn(
                "text-label-md uppercase hidden sm:inline",
                active ? "text-on-surface" : "text-on-surface-muted",
              )}
            >
              {s.label}
            </span>
            {i < steps.length - 1 && (
              <span className="w-6 sm:w-12 h-px bg-outline-variant" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
