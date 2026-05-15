import Link from "next/link";
import { Instagram } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-surface-container-low mt-section-mobile lg:mt-section">
      <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
          <span className="font-display italic text-headline-md text-on-surface">
            L&apos;Artisan
          </span>
          <p className="text-body-sm text-on-surface-variant max-w-xs">
            Vêtements faits à la main. Collections capsules mensuelles. Atelier
            à Paris.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-label-md uppercase text-on-surface-muted">
            Boutique
          </span>
          <Link
            href="/boutique"
            className="text-body-sm text-on-surface-variant hover:text-primary"
          >
            Toute la collection
          </Link>
          <Link
            href="/boutique"
            className="text-body-sm text-on-surface-variant hover:text-primary"
          >
            Robes
          </Link>
          <Link
            href="/boutique"
            className="text-body-sm text-on-surface-variant hover:text-primary"
          >
            Hauts
          </Link>
          <Link
            href="/boutique"
            className="text-body-sm text-on-surface-variant hover:text-primary"
          >
            Pantalons
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-label-md uppercase text-on-surface-muted">
            Maison
          </span>
          <Link
            href="/a-propos"
            className="text-body-sm text-on-surface-variant hover:text-primary"
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className="text-body-sm text-on-surface-variant hover:text-primary"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="text-body-sm text-on-surface-variant hover:text-primary"
          >
            FAQ
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-label-md uppercase text-on-surface-muted">
            Suivre
          </span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-body-sm text-on-surface-variant hover:text-primary"
          >
            <Instagram className="w-4 h-4" /> Instagram
          </a>
          <span className="text-body-sm text-on-surface-variant">
            contact@artisan.fr
          </span>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
          <span className="text-caption text-on-surface-muted">
            © {year} L&apos;Artisan — Fait à Paris.
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-caption text-on-surface-muted hover:text-primary"
            >
              Mentions légales
            </Link>
            <Link
              href="/contact"
              className="text-caption text-on-surface-muted hover:text-primary"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
