import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const manifestoImages = [
  "https://images.unsplash.com/photo-1542838686-37da4a7eba63?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&q=80&auto=format&fit=crop",
];

export function ManifestoSection() {
  return (
    <section className="bg-inverse-surface text-inverse-on-surface">
      <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-section-mobile lg:py-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <span className="text-label-md uppercase text-inverse-on-surface-dim">
              Le savoir-faire
            </span>
            <h2 className="mt-6 font-display text-headline-lg lg:text-display-lg leading-[1.1]">
              Pièces uniques,
              <br />
              faites à la main.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-body-lg text-inverse-on-surface/70 max-w-md">
              Nous ne produisons jamais en série. Chaque vêtement traverse les
              mains d&apos;une artisane, de la coupe au point final. Aucune
              pièce n&apos;est identique.
            </p>
            <div className="mt-8">
              <Link href="/a-propos">
                <Button variant="inverse" size="lg">
                  Notre Histoire
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {manifestoImages.map((src, i) => (
            <div
              key={src}
              className="group relative aspect-square overflow-hidden bg-inverse-surface-deep"
            >
              <Image
                src={src}
                alt={`Geste d'atelier ${i + 1}`}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
