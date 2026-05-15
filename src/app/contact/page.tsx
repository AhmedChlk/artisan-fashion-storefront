"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, TextArea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

const schema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(1, "Sujet requis"),
  message: z.string().min(10, "Message trop court"),
});
type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    console.log("Contact form submitted:", data);
    // TODO: backend connection
    await new Promise(r => setTimeout(r, 600));
    reset();
    alert("Message envoyé !");
  };

  return (
    <main>
      <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-7">
            <h1 className="font-display text-headline-lg lg:text-display-md text-on-surface mb-10">
              Contact
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Input
                  label="Prénom"
                  {...register("firstName")}
                  error={errors.firstName?.message}
                />
                <Input
                  label="Nom"
                  {...register("lastName")}
                  error={errors.lastName?.message}
                />
              </div>
              <Input
                type="email"
                label="Email"
                {...register("email")}
                error={errors.email?.message}
              />
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-label-md uppercase text-on-surface-variant">Sujet</label>
                <select
                  {...register("subject")}
                  className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-2 text-body-md text-on-surface transition-colors duration-200 outline-none focus:border-primary focus:ring-0"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="order">Ma commande</option>
                  <option value="sizing">Conseil taille</option>
                  <option value="returns">Retour</option>
                  <option value="other">Autre</option>
                </select>
                {errors.subject && <span className="text-caption text-error">{errors.subject.message}</span>}
              </div>
              <TextArea
                label="Message"
                {...register("message")}
                error={errors.message?.message}
              />
              <Button type="submit" size="lg" loading={isSubmitting} className="self-start mt-4">
                Envoyer
              </Button>
            </form>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-12">
            <div>
              <h2 className="text-label-md uppercase text-on-surface-variant tracking-[0.1em] mb-4">
                Informations
              </h2>
              <div className="flex flex-col gap-2 text-body-md text-on-surface">
                <a href="mailto:contact@artisan.fr" className="hover:text-primary">
                  contact@artisan.fr
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary">
                  Instagram : @l.artisan
                </a>
                <p className="mt-4 text-on-surface-variant">
                  Nous répondons à vos messages sous 24h ouvrées.
                </p>
              </div>
            </div>

            <div className="border-t border-hairline pt-12">
              <h2 className="text-label-md uppercase text-on-surface-variant tracking-[0.1em] mb-6">
                Foire aux Questions
              </h2>
              <div className="flex flex-col">
                <Accordion title="Livraison">
                  <p>Livraison offerte dès 150€. Expédition sous 24h ouvrées pour les pièces en stock.</p>
                </Accordion>
                <Accordion title="Tailles">
                  <p>Nos pièces taillent normalement. Consultez le guide des tailles sur chaque fiche produit.</p>
                </Accordion>
                <Accordion title="Entretien">
                  <p>Privilégiez le lavage à froid ou 30°C maximum. Séchage à l&apos;air libre.</p>
                </Accordion>
                <Accordion title="Retours">
                  <p>Les retours sont gratuits sous 14 jours via le portail de retour.</p>
                </Accordion>
                <Accordion title="Commandes spéciales">
                  <p>Nous n&apos;acceptons pas le sur-mesure pour le moment.</p>
                </Accordion>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
