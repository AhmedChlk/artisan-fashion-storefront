"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { Input } from "@/components/ui/Input";
import { useCartStore } from "@/lib/store/cartStore";

const STEPS = [
  { id: "panier", label: "Panier" },
  { id: "livraison", label: "Livraison" },
  { id: "paiement", label: "Paiement" },
];

export default function PaiementPage() {
  const router = useRouter();
  const clearCart = useCartStore(s => s.clearCart);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePayment = async () => {
    setIsSubmitting(true);
    // Simulate payment
    await new Promise(r => setTimeout(r, 1500));
    clearCart();
    router.push("/confirmation");
  };

  return (
    <main>
      <div className="mx-auto max-w-narrow px-margin-mobile lg:px-margin py-8 border-b border-hairline">
        <ProgressBar steps={STEPS} current="paiement" />
      </div>

      <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-10">
            <h1 className="font-display text-headline-lg text-on-surface">Paiement</h1>
            
            <div>
              <h2 className="text-label-md uppercase tracking-[0.1em] text-on-surface-variant mb-6">
                Informations de carte
              </h2>
              <form className="flex flex-col gap-8">
                <Input placeholder="Numéro de carte" defaultValue="4111 1111 1111 1111" />
                <div className="grid grid-cols-2 gap-6">
                  <Input placeholder="MM/AA" />
                  <Input placeholder="CVV" />
                </div>
                
                <div className="pt-4 border-t border-hairline">
                  <h2 className="text-label-md uppercase tracking-[0.1em] text-on-surface-variant mb-6">
                    Adresse de facturation
                  </h2>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-primary focus:ring-primary border-outline-variant bg-transparent" />
                    <span className="text-body-md text-on-surface">Identique à l&apos;adresse de livraison</span>
                  </label>
                </div>
              </form>
            </div>

            <div className="flex flex-wrap gap-6 items-center justify-between py-6 border-y border-hairline">
              <span className="text-caption uppercase tracking-[0.1em] text-on-surface-variant">🔒 SSL Sécurisé</span>
              <span className="text-caption uppercase tracking-[0.1em] text-on-surface-variant">✓ 3D Secure</span>
              <span className="text-caption uppercase tracking-[0.1em] text-on-surface-variant">🛡️ Données protégées</span>
            </div>

            <p className="text-caption text-on-surface-variant italic text-center">
              En confirmant, vous acceptez nos Conditions Générales de Vente
            </p>
          </div>

          <div className="lg:col-span-5">
            <OrderSummary
              buttonText="Confirmer et Payer"
              onButtonClick={handlePayment}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
