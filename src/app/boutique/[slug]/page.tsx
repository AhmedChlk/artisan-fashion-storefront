"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { useCartStore } from "@/lib/store/cartStore";
import { Button } from "@/components/ui/Button";
import { SizeSelector } from "@/components/ui/SizeSelector";
import { Accordion } from "@/components/ui/Accordion";
import { Chip } from "@/components/ui/Chip";
import { ProductCard } from "@/components/ui/ProductCard";
import { formatPrice } from "@/lib/utils/formatPrice";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/data/collections";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const addItem = useCartStore(s => s.addItem);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.slug, 4);

  const handleAddToCart = () => {
    if (selectedSize) {
      addItem(product, selectedSize);
    }
  };

  return (
    <main>
      <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column (Photos) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="aspect-[3/4] relative bg-surface-container rounded-xs overflow-hidden">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(i)}
                    className={`aspect-square relative bg-surface-container rounded-xs overflow-hidden border-2 transition-colors ${
                      activeImage === i ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} vue ${i + 1}`}
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
            <div className="aspect-[16/9] relative bg-surface-container rounded-xs overflow-hidden mt-8">
              <Image
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80&auto=format&fit=crop"
                alt="Détail tissu"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="mt-12">
              <span className="text-label-md uppercase text-on-surface-variant block mb-6">
                Coulisses
              </span>
              <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-square relative bg-surface-container">
                    <Image src="https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00?w=600&q=80&auto=format&fit=crop" fill alt="Outils" className="object-cover" />
                 </div>
                 <div className="aspect-square relative bg-surface-container">
                    <Image src="https://images.unsplash.com/photo-1542838686-37da4a7eba63?w=600&q=80&auto=format&fit=crop" fill alt="Outils" className="object-cover" />
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column (Sticky info) */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 flex flex-col gap-8">
              <div>
                <span className="text-label-md uppercase tracking-[0.1em] text-on-surface-variant block mb-4">
                  COLLECTION {product.collection.toUpperCase()}
                </span>
                <h1 className="font-display text-display-mobile lg:text-display-md text-on-surface leading-[1.1] mb-6">
                  {product.name}
                </h1>
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="font-mono text-price-lg text-on-surface">
                    {formatPrice(product.price)}
                  </span>
                  {product.price >= FREE_SHIPPING_THRESHOLD && (
                    <span className="text-caption text-on-surface-variant">
                      Livraison offerte
                    </span>
                  )}
                </div>
              </div>

              <hr className="border-hairline" />

              <div className="flex flex-wrap gap-2">
                <Chip variant="tag" asSpan>{product.material}</Chip>
                <Chip variant="tag" asSpan>Teinture naturelle</Chip>
                <Chip variant="tag" asSpan>Fait main</Chip>
              </div>

              <hr className="border-hairline" />

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-label-md uppercase text-on-surface">
                    Guide des Tailles
                  </span>
                </div>
                <SizeSelector
                  sizes={product.sizes}
                  value={selectedSize}
                  onChange={setSelectedSize}
                />
              </div>

              <hr className="border-hairline" />

              <div>
                <p className="text-body-md text-on-surface-variant mb-4">
                  {product.description}
                </p>
                <button className="text-caption uppercase tracking-[0.05em] text-primary hover:text-primary-dark underline underline-offset-4">
                  Lire la description complète ↓
                </button>
              </div>

              <hr className="border-hairline" />

              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  fullWidth
                  onClick={handleAddToCart}
                  disabled={!selectedSize || product.isSoldOut}
                >
                  {product.isSoldOut ? "Épuisé" : "Ajouter au Panier"}
                </Button>
                <Button variant="secondary" size="lg" fullWidth>
                  Sauvegarder
                </Button>
              </div>

              <hr className="border-hairline" />

              <div className="flex flex-col">
                <Accordion title="Matières & Entretien">
                  <p className="mb-2">{product.details.fabric}</p>
                  <ul className="list-disc pl-5">
                    {product.details.care.map(c => <li key={c}>{c}</li>)}
                  </ul>
                </Accordion>
                <Accordion title="Livraison & Retours">
                  <p>Livraison estimée sous 3 à 5 jours. Retours gratuits sous 14 jours.</p>
                </Accordion>
                <Accordion title="Histoire de la Pièce">
                  <p>{product.details.origin}</p>
                </Accordion>
              </div>

              <hr className="border-hairline" />

              <div className="flex items-center gap-6 justify-between text-caption text-on-surface-variant">
                <span>✦ Fait Main</span>
                <span>✦ Pièce Unique</span>
                <span>✦ Atelier Français</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-sell */}
      {related.length > 0 && (
        <section className="bg-surface-container-low border-t border-hairline">
          <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-section-mobile lg:py-section text-center">
            <h2 className="font-display text-headline-lg lg:text-display-sm text-on-surface mb-12">
              Vous aimerez aussi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} variant="standard" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-hairline p-4 flex justify-between items-center z-40 shadow-lg">
        <span className="font-mono text-price-lg">{formatPrice(product.price)}</span>
        <Button onClick={handleAddToCart} disabled={!selectedSize || product.isSoldOut}>
          Ajouter au Panier
        </Button>
      </div>
    </main>
  );
}
