"use client";

import { useState } from "react";
import { getProductsByCategory } from "@/lib/data/products";
import { collections } from "@/lib/data/collections";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Accordion } from "@/components/ui/Accordion";
import { Chip } from "@/components/ui/Chip";
import { ProductCard } from "@/components/ui/ProductCard";

const FILTERS = ["Tous", "Hauts", "Robes", "Pantalons", "Accessoires"];

export default function BoutiquePage() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [inStockOnly, setInStockOnly] = useState(false);

  let filteredProducts = getProductsByCategory(activeFilter.toLowerCase() as any);
  
  if (inStockOnly) {
    filteredProducts = filteredProducts.filter((p) => !p.isSoldOut);
  }

  // Row 1 - Editorial: 3 items
  const row1 = filteredProducts.slice(0, 3);
  // Row 2,3 - Uniform: rest of items
  const rest = filteredProducts.slice(3);

  const pastCollections = collections.filter(c => !c.isActive);

  return (
    <main>
      <header className="text-center pt-section-mobile md:pt-section pb-16 flex flex-col items-center">
        <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-6">
          COLLECTION EN COURS
        </span>
        <h1 className="font-display text-display-mobile md:text-display-md text-primary mb-8">
          Collection — Mai 2026
        </h1>
        <div className="w-20 h-px bg-outline-variant/50"></div>
      </header>

      {/* Barre de filtres sticky */}
      <div className="sticky top-[56px] lg:top-[72px] z-30 bg-surface/85 backdrop-blur-sm border-b border-hairline py-4">
        <div className="mx-auto max-w-content px-margin-mobile lg:px-margin flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {FILTERS.map((f) => (
              <Chip
                key={f}
                active={activeFilter === f}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </Chip>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <label className="text-label-md text-on-surface-variant uppercase flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded-xs border-outline-variant text-primary focus:ring-primary bg-transparent w-4 h-4"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
              />
              En stock uniquement
            </label>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-16 lg:py-24">
        {row1.length > 0 && <ProductGrid products={row1} layout="editorial" />}
        {rest.length > 0 && (
          <div className="mt-16 lg:mt-24">
            <ProductGrid products={rest} layout="uniform" />
          </div>
        )}
      </div>

      {/* Archives */}
      <section className="bg-surface-container-low border-t border-hairline">
        <div className="mx-auto max-w-reading px-margin-mobile lg:px-margin py-section-mobile lg:py-section">
          <h2 className="text-label-md uppercase text-on-surface-variant text-center mb-8">
            ARCHIVES
          </h2>
          <div className="flex flex-col gap-0 border-t border-hairline">
            {pastCollections.map(c => (
              <Accordion key={c.id} title={c.name}>
                <div className="flex gap-4 overflow-x-auto pb-4 pt-2 no-scrollbar">
                  <div className="flex gap-4">
                    {/* Placeholder thumbnails for archives */}
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-32 lg:w-48 shrink-0">
                        <div className="aspect-[3/4] bg-surface-container overflow-hidden">
                           <div className="w-full h-full bg-surface-dim opacity-50"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
