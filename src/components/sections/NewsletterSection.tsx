"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  email: z.string().email("Adresse e-mail invalide"),
});
type FormValues = z.infer<typeof schema>;

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // TODO: connect to newsletter backend
    console.log("newsletter", data);
    await new Promise((r) => setTimeout(r, 400));
    setSubmitted(true);
    reset();
  };

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-narrow px-margin-mobile lg:px-margin py-section-mobile lg:py-section text-center">
        <span className="block mx-auto h-px w-20 bg-outline-variant" />
        <p className="mt-8 text-label-md uppercase text-on-surface-variant">
          La communauté
        </p>
        <h2 className="mt-4 font-display text-headline-lg lg:text-display-md">
          Rejoindre la Prochaine Collection
        </h2>

        {submitted ? (
          <p className="mt-10 text-body-lg text-success">
            Merci. Vous recevrez la prochaine lettre.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col sm:flex-row items-end gap-4 max-w-md mx-auto"
          >
            <div className="flex-1 w-full text-left">
              <Input
                type="email"
                placeholder="votre@email.fr"
                aria-label="Adresse e-mail"
                {...register("email")}
                error={errors.email?.message}
              />
            </div>
            <Button type="submit" loading={isSubmitting}>
              S&apos;inscrire
            </Button>
          </form>
        )}
        <p className="mt-6 text-caption text-on-surface-muted">
          Aucun spam. Une lettre par mois, une collection.
        </p>
      </div>
    </section>
  );
}
