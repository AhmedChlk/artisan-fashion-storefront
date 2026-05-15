"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";
import { useScrollLock } from "@/lib/hooks/useScrollLock";
import { formatPrice } from "@/lib/utils/formatPrice";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/data/collections";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const isOpen = useCartStore((s) => s.isOpen);
  const close = useCartStore((s) => s.closeCart);
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.getTotalPrice());
  const totalItems = useCartStore((s) => s.getTotalItems());
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  useScrollLock(isOpen);

  const shipping = total >= FREE_SHIPPING_THRESHOLD ? 0 : 4.9;
  const grandTotal = total + (items.length > 0 ? shipping : 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Fermer le panier"
            onClick={close}
            className="absolute inset-0 scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
            className="absolute inset-y-0 right-0 w-full sm:w-[420px] bg-surface flex flex-col shadow-[-12px_0_40px_rgba(29,27,25,0.08)]"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
              <h2 className="font-display text-headline-sm">
                Mon Panier ({totalItems})
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label="Fermer"
                className="p-2 -mr-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
                <p className="text-body-md text-on-surface-variant">
                  Votre panier est vide.
                </p>
                <Link
                  href="/boutique"
                  onClick={close}
                  className="text-label-md uppercase text-primary underline underline-offset-4"
                >
                  Découvrir la boutique →
                </Link>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto px-6">
                <ul className="divide-y divide-hairline">
                  {items.map((item) => (
                    <li
                      key={`${item.product.id}-${item.size}`}
                      className="py-5 flex gap-4"
                    >
                      <div className="relative w-20 aspect-[3/4] bg-surface-container shrink-0 overflow-hidden">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <p className="font-display text-headline-sm truncate">
                            {item.product.name}
                          </p>
                          <p className="text-caption text-on-surface-muted">
                            Taille {item.size}
                          </p>
                        </div>
                        <div className="flex items-end justify-between">
                          <div className="inline-flex items-center border border-outline-variant">
                            <button
                              type="button"
                              aria-label="Diminuer"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.quantity - 1,
                                )
                              }
                              className="w-7 h-7 flex items-center justify-center hover:bg-surface-container"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-body-sm">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label="Augmenter"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.quantity + 1,
                                )
                              }
                              className="w-7 h-7 flex items-center justify-center hover:bg-surface-container"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-mono text-price-md">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            removeItem(item.product.id, item.size)
                          }
                          className="self-start mt-2 text-caption text-on-surface-muted underline underline-offset-4 hover:text-primary"
                        >
                          Retirer
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {items.length > 0 && (
              <div className="border-t border-hairline px-6 py-6 flex flex-col gap-4 bg-surface-container-low">
                <div className="flex justify-between text-body-md">
                  <span className="text-on-surface-variant">Sous-total</span>
                  <span className="font-mono">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-body-md">
                  <span className="text-on-surface-variant">Livraison</span>
                  <span className="font-mono">
                    {shipping === 0 ? "Offerte" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="border-t border-hairline pt-4 flex justify-between items-baseline">
                  <span className="text-label-md uppercase">Total</span>
                  <span className="font-display text-headline-sm">
                    {formatPrice(grandTotal)}
                  </span>
                </div>
                <Link href="/panier" onClick={close}>
                  <Button fullWidth>Passer la commande</Button>
                </Link>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
