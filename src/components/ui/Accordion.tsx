"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function Accordion({
  title,
  children,
  defaultOpen = false,
  className,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={cn("border-b border-hairline", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="text-label-lg uppercase text-on-surface">{title}</span>
        <Plus
          className={cn(
            "w-4 h-4 text-on-surface-variant transition-transform duration-300 ease-standard",
            open && "rotate-45",
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-body-md text-on-surface-variant">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
