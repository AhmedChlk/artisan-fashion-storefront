import { cn } from "@/lib/utils/cn";

type Tone = "new" | "soldout" | "neutral";

export function Badge({
  tone = "new",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-label-sm uppercase tracking-[0.1em]",
        tone === "new" && "bg-primary text-on-primary",
        tone === "soldout" && "bg-inverse-surface text-inverse-on-surface",
        tone === "neutral" &&
          "border border-outline-variant text-on-surface-variant",
        className,
      )}
    >
      {children}
    </span>
  );
}
