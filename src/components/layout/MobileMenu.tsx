"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useUIStore } from "@/lib/store/uiStore";
import { useScrollLock } from "@/lib/hooks/useScrollLock";
import { cn } from "@/lib/utils/cn";

interface MobileMenuProps {
  links: { href: string; label: string }[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const open = useUIStore((s) => s.mobileMenuOpen);
  const close = useUIStore((s) => s.closeMobileMenu);
  const pathname = usePathname();
  useScrollLock(open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Fermer le menu"
            onClick={close}
            className="absolute inset-0 scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
            className="absolute inset-y-0 left-0 w-[85%] max-w-[360px] bg-surface flex flex-col"
          >
            <div className="flex items-center justify-between px-margin-mobile h-14 border-b border-hairline">
              <span className="font-display italic text-headline-md">
                L&apos;Artisan
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Fermer"
                className="p-2 -mr-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 px-margin-mobile py-8 flex flex-col gap-1">
              {links.map((l) => {
                const active =
                  l.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    className={cn(
                      "py-4 font-display text-headline-md border-b border-hairline transition-colors",
                      active ? "text-primary" : "text-on-surface",
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>
            <div className="px-margin-mobile pb-8 text-label-md uppercase text-on-surface-muted">
              Atelier · Paris
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
