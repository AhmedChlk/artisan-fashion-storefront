"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/store/cartStore";
import { formatPrice } from "@/lib/utils/formatPrice";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/data/collections";
import { Button } from "@/components/ui/Button";

interface OrderSummaryProps {
  shippingCost?: number;
  showPromo?: boolean;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  isSubmitting?: boolean;
}

export function OrderSummary({
  shippingCost,
  showPromo = false,
  buttonText,
  buttonHref,
  onButtonClick,
  isSubmitting
}: OrderSummaryProps) {
  const items = useCartStore(s => s.items);
  const total = useCartStore(s => s.getTotalPrice());
  
  const finalShipping = shippingCost ?? (total >= FREE_SHIPPING_THRESHOLD ? 0 : 4.9);
  const grandTotal = total + (items.length > 0 ? finalShipping : 0);

  return (
    <div className="bg-surface-container-low border border-hairline p-8 flex flex-col gap-8 lg:sticky lg:top-32">
      <h2 className="font-display text-headline-md text-on-surface border-b border-hairline pb-4">
        Résumé de la commande
      </h2>
      
      <div className="flex flex-col gap-6 border-b border-hairline pb-8 max-h-[40vh] overflow-y-auto pr-2">
        {items.map(item => (
          <div key={`${item.product.id}-${item.size}`} className="flex gap-4 items-start">
            <div className="w-20 aspect-[3/4] bg-surface-dim relative overflow-hidden shrink-0">
              <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-tertiary-container text-on-tertiary rounded-full flex items-center justify-center text-[10px]">
                {item.quantity}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <span className="text-label-md uppercase text-on-surface-variant">
                {item.product.name}
              </span>
              <span className="text-body-sm text-on-surface">Taille {item.size}</span>
              <span className="text-body-sm text-on-surface mt-1">Qté: {item.quantity}</span>
            </div>
            <div className="text-body-md font-mono">
              {formatPrice(item.product.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 py-4 border-b border-hairline text-body-md">
        <div className="flex justify-between text-on-surface-variant">
          <span>Sous-total</span>
          <span className="font-mono">{formatPrice(total)}</span>
        </div>
        <div className="flex justify-between text-on-surface-variant">
          <span>Livraison</span>
          {shippingCost === undefined ? (
            <span className="text-sm italic">Calculée ensuite</span>
          ) : (
             <span className="font-mono">{finalShipping === 0 ? "Offerte" : formatPrice(finalShipping)}</span>
          )}
        </div>
      </div>

      <div className="flex justify-between items-end">
        <span className="font-display text-headline-md">Total</span>
        <div className="text-right">
          <span className="block font-display text-[28px] leading-none text-primary">
            {formatPrice(grandTotal)}
          </span>
          <span className="text-caption text-on-surface-variant uppercase tracking-wider mt-1 block">
            TVA incluse
          </span>
        </div>
      </div>

      {showPromo && (
        <div className="flex gap-4 mt-2">
          <input
            type="text"
            placeholder="Code promo"
            className="flex-1 bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-body-md placeholder:text-outline transition-colors"
          />
          <button className="px-6 py-2 border border-on-surface text-label-md text-on-surface hover:bg-on-surface hover:text-surface transition-colors uppercase tracking-wider">
            Appliquer
          </button>
        </div>
      )}

      {buttonText && (
        <div className="flex flex-col gap-4 mt-2">
          {buttonHref ? (
            <Link href={buttonHref}>
              <Button fullWidth size="lg">{buttonText}</Button>
            </Link>
          ) : (
            <Button fullWidth size="lg" onClick={onButtonClick} loading={isSubmitting}>
              {buttonText}
            </Button>
          )}
          <div className="flex items-center justify-center gap-2 text-caption text-on-surface-muted uppercase mt-2">
            <span>🔒 PAIEMENT 100% SÉCURISÉ</span>
          </div>
        </div>
      )}
    </div>
  );
}
