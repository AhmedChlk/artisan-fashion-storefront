"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag } from "lucide-react";
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
      <header
        className={cn(
          "sticky top-0 z-40 bg-surface/85 backdrop-blur-sm transition-shadow border-b border-hairline",
          scrolled && "shadow-[0_1px_0_rgba(29,27,25,0.08)]",
        )}
      >
        <div className="mx-auto max-w-content px-margin-mobile lg:px-margin h-14 lg:h-[72px] grid grid-cols-3 items-center">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={openMobileMenu}
              aria-label="Ouvrir le menu"
              className="lg:hidden p-2 -ml-2"
            >
              <Menu className="w-5 h-5 text-on-surface" />
            </button>
            <nav className="hidden lg:flex items-center gap-8">
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
                      "relative text-label-md uppercase tracking-[0.1em] text-on-surface-variant hover:text-on-surface transition-colors",
                      active &&
                        "text-on-surface after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-primary",
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex justify-center">
            <Link href="/" className="leading-none">
              <span className="font-display italic text-headline-md text-on-surface tracking-tight">
                L&apos;Artisan
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-end gap-2 lg:gap-4">
            <button
              type="button"
              aria-label="Rechercher"
              className="hidden lg:inline-flex p-2 hover:text-primary"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              aria-label={`Panier (${totalItems})`}
              className="relative p-2"
            >
              <ShoppingBag className="w-5 h-5 text-on-surface" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-on-primary text-[10px] flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      <MobileMenu links={links} />
    </>
  );
}
