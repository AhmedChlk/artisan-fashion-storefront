"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { DeliveryOption } from "@/components/checkout/DeliveryOption";
import { Input } from "@/components/ui/Input";
import { deliveryMethods } from "@/lib/data/collections";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  address: z.string().min(5),
  city: z.string().min(2),
  zipCode: z.string().min(4),
  country: z.string().min(2),
});
type FormValues = z.infer<typeof schema>;

const STEPS = [
  { id: "panier", label: "Panier" },
  { id: "livraison", label: "Livraison" },
  { id: "paiement", label: "Paiement" },
];

export default function LivraisonPage() {
  const router = useRouter();
  const [shippingMethod, setShippingMethod] = useState(deliveryMethods[0]);
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormValues) => {
    // Save to some state if needed
    router.push("/checkout/paiement");
  };

  return (
    <main>
      <div className="mx-auto max-w-narrow px-margin-mobile lg:px-margin py-8 border-b border-hairline">
        <ProgressBar steps={STEPS} current="livraison" />
      </div>

      <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-12">
            <h1 className="font-display text-headline-lg text-on-surface">
              Détails de Livraison
            </h1>
            
            <form id="shipping-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input placeholder="Prénom" {...register("firstName")} error={errors.firstName?.message} />
                <Input placeholder="Nom" {...register("lastName")} error={errors.lastName?.message} />
              </div>
              <Input placeholder="Adresse" {...register("address")} error={errors.address?.message} />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Input placeholder="Ville" {...register("city")} error={errors.city?.message} />
                <Input placeholder="Code postal" {...register("zipCode")} error={errors.zipCode?.message} />
                <Input placeholder="Pays" {...register("country")} error={errors.country?.message} />
              </div>
            </form>

            <div className="flex flex-col gap-6">
              <h2 className="text-label-md uppercase tracking-[0.1em] text-on-surface">
                Méthode de livraison
              </h2>
              <div className="flex flex-col gap-4">
                {deliveryMethods.map(m => (
                  <DeliveryOption
                    key={m.id}
                    method={m}
                    selected={shippingMethod.id === m.id}
                    onSelect={() => setShippingMethod(m)}
                  />
                ))}
              </div>
            </div>

            <Button size="lg" type="submit" form="shipping-form" className="mt-4">
              Continuer vers le Paiement →
            </Button>
          </div>

          <div className="lg:col-span-5">
            <OrderSummary shippingCost={shippingMethod.price} />
          </div>
        </div>
      </div>
    </main>
  );
}
