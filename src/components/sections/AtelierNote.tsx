import Image from "next/image";
import Link from "next/link";

export function AtelierNote() {
  return (
    <section className="bg-surface-container">
      <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-section-mobile lg:py-section grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4 lg:-mt-8">
          <div className="relative aspect-[3/4]">
            <Image
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80&auto=format&fit=crop"
              alt="Tissus pliés sur l'établi"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center">
          <span className="text-label-md uppercase text-on-surface-variant">
            Une note de l&apos;atelier
          </span>
          <h2 className="mt-6 font-display text-headline-lg lg:text-display-md text-on-surface">
            Chaque pièce porte une intention.
          </h2>
          <p className="mt-6 text-body-lg text-on-surface-variant max-w-reading">
            J&apos;ai fondé L&apos;Artisan pour ralentir le geste, écouter la
            matière, et rendre au vêtement la dignité d&apos;un objet pensé.
            Vingt pièces par mois, pas plus.
          </p>
          <p className="mt-4 text-body-lg text-on-surface-variant max-w-reading">
            Chaque collection est une lettre. Chaque couture, une signature.
          </p>
          <p className="mt-8 font-display italic text-headline-sm text-on-surface">
            — Marie-Claire
          </p>
          <Link
            href="/a-propos"
            className="mt-8 self-start text-label-md uppercase text-primary underline underline-offset-4 hover:text-primary-dark"
          >
            En savoir plus →
          </Link>
        </div>
      </div>
    </section>
  );
}
