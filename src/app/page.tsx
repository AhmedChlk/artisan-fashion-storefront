import { HeroSection } from "@/components/sections/HeroSection";
import { AtelierNote } from "@/components/sections/AtelierNote";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { getNewProducts } from "@/lib/data/products";
import Link from "next/link";
import { Chip } from "@/components/ui/Chip";

export default function Home() {
  const newProducts = getNewProducts();

  return (
    <>
      <HeroSection />
      <AtelierNote />
      
      <section className="bg-surface">
        <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-section-mobile lg:py-section">
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-hairline">
            <h2 className="font-display text-headline-lg lg:text-display-md text-on-surface">
              Nouveautés
            </h2>
            <Link
              href="/boutique"
              className="text-label-md uppercase tracking-[0.08em] text-primary hover:text-primary-dark flex items-center gap-1"
            >
              Voir tout <span aria-hidden="true">→</span>
            </Link>
          </div>
          
          <ProductGrid products={newProducts} layout="editorial" />
          
          <div className="mt-12 text-center">
            <Chip variant="outline" asSpan>
              20 pièces · Disponible maintenant
            </Chip>
          </div>
        </div>
      </section>

      <ManifestoSection />
      <NewsletterSection />
    </>
  );
}
