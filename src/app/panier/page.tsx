"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/store/cartStore";
import { CartItem } from "@/components/checkout/CartItem";
import { OrderSummary } from "@/components/checkout/OrderSummary";

export default function PanierPage() {
  const items = useCartStore(s => s.items);

  return (
    <main>
      <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h1 className="font-display text-headline-lg lg:text-display-md text-primary">
              Mon Panier
            </h1>
            
            <div className="flex flex-col border-t border-hairline">
              {items.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-body-lg text-on-surface-variant mb-6">Votre panier est vide.</p>
                </div>
              ) : (
                items.map(item => (
                  <CartItem key={`${item.product.id}-${item.size}`} item={item} />
                ))
              )}
            </div>

            <Link
              href="/boutique"
              className="inline-flex items-center gap-2 text-label-md uppercase text-on-surface-variant hover:text-primary transition-colors self-start mt-4"
            >
              ← Continuer mes achats
            </Link>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <OrderSummary
              showPromo
              buttonText="Passer la Commande →"
              buttonHref="/checkout/livraison"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
