"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";
import { useCartStore } from "@/lib/store/cartStore";
import { useUIStore } from "@/lib/store/uiStore";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Boutique" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const totalItems = useCartStore((s) => s.getTotalItems());
  const toggleCart = useCartStore((s) => s.toggleCart);
  const openMobileMenu = useUIStore((s) => s.openMobileMenu);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "bg-surface dark:bg-surface-dim font-body-lg text-body-lg sticky top-0 z-40 border-b border-outline-variant/20 transition-shadow",
          scrolled && "shadow-[0_1px_0_rgba(29,27,25,0.08)]",
        )}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 items-center w-full px-gutter py-6 max-w-content-max mx-auto">
          {/* Navigation Links (Web) */}
          <div className="hidden md:flex gap-8 items-center justify-start">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "transition-colors hover:opacity-70 duration-300 uppercase font-label-md text-label-md",
                    active
                      ? "text-primary dark:text-primary-fixed-dim border-b border-primary dark:border-primary-fixed-dim pb-1"
                      : "text-on-surface-variant dark:text-on-surface-variant hover:text-primary"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* Brand Logo */}
          <div className="flex md:justify-center justify-start items-center gap-4">
            <button
              type="button"
              onClick={openMobileMenu}
              aria-label="Menu"
              className="md:hidden text-primary hover:opacity-70 transition-opacity p-2 -ml-2"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
            </button>
            <Link href="/" className="leading-none">
              <span className="font-headline-lg text-headline-lg tracking-widest text-primary dark:text-primary-fixed-dim uppercase hover:opacity-70 transition-opacity duration-300 italic">
                THE ARTISAN
              </span>
            </Link>
          </div>

          {/* Trailing Icons */}
          <div className="flex gap-4 items-center justify-end text-primary dark:text-primary-fixed-dim">
            <button
              type="button"
              aria-label="Rechercher"
              className="hidden md:inline-flex hover:opacity-70 transition-opacity duration-300 scale-95 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">search</span>
            </button>
            <button
              type="button"
              aria-label="Personne"
              className="hidden md:inline-flex hover:opacity-70 transition-opacity duration-300 scale-95 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">person</span>
            </button>
            <button
              type="button"
              onClick={toggleCart}
              aria-label={`Panier (${totalItems})`}
              className="relative hover:opacity-70 transition-opacity duration-300 scale-95 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 rounded-full bg-primary text-on-primary text-[10px] flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu links={links} />
    </>
  );
}
