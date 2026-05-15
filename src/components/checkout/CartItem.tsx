"use client";

import Image from "next/image";
import { useCartStore } from "@/lib/store/cartStore";
import { formatPrice } from "@/lib/utils/formatPrice";
import type { CartItem as CartItemType } from "@/types";

export function CartItem({ item }: { item: CartItemType }) {
  const updateQuantity = useCartStore(s => s.updateQuantity);
  const removeItem = useCartStore(s => s.removeItem);

  return (
    <div className="py-6 flex gap-6 border-b border-hairline">
      <div className="w-[80px] h-[106px] bg-surface-dim shrink-0 relative overflow-hidden">
        <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-display text-[24px] text-primary leading-none">
              {item.product.name}
            </h3>
            <span className="px-3 py-1 bg-tertiary text-on-tertiary font-label-md text-label-md rounded-xs uppercase scale-90 origin-left">
              {item.product.material}
            </span>
            <p className="text-body-sm text-on-surface-variant mt-1">Taille: {item.size}</p>
          </div>
          <span className="font-mono text-body-lg text-primary">
            {formatPrice(item.product.price * item.quantity)}
          </span>
        </div>
        <div className="flex justify-between items-end mt-4">
          <div className="flex items-center border border-outline-variant rounded-xs h-8">
            <button
              onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
              className="px-3 h-full text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
            >
              -
            </button>
            <span className="font-label-md px-2 min-w-[24px] text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
              className="px-3 h-full text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeItem(item.product.id, item.size)}
            className="text-label-md text-on-surface-variant hover:text-error transition-colors pb-1 border-b border-transparent hover:border-error"
          >
            Retirer
          </button>
        </div>
      </div>
    </div>
  );
}
