"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product } from "@/types";

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (product, size) => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.product.id === product.id && i.size === size,
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id && i.size === size
                  ? { ...i, quantity: i.quantity + 1 }
                  : i,
              ),
            };
          }
          return { items: [...state.items, { product, size, quantity: 1 }] };
        });
        get().openCart();
      },
      removeItem: (productId, size) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.product.id === productId && i.size === size),
          ),
        })),
      updateQuantity: (productId, size, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter(
                  (i) => !(i.product.id === productId && i.size === size),
                )
              : state.items.map((i) =>
                  i.product.id === productId && i.size === size
                    ? { ...i, quantity }
                    : i,
                ),
        })),
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      getTotalItems: () => get().items.reduce((acc, i) => acc + i.quantity, 0),
      getTotalPrice: () =>
        get().items.reduce(
          (acc, i) => acc + i.product.price * i.quantity,
          0,
        ),
    }),
    {
      name: "artisan-cart",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
