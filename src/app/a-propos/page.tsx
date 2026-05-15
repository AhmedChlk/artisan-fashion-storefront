import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AProposPage() {
  return (
    <main>
      {/* Section 1 — Héro cinématique */}
      <section className="relative w-full min-h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1542838686-37da4a7eba63?w=1600&q=80&auto=format&fit=crop"
          alt="Mains d'artisan sur tissu sombre"
          fill
          priority
          className="object-cover"
        />
      </section>
      
      <div className="bg-surface text-center py-16">
        <div className="mx-auto w-[60px] h-px bg-outline-variant mb-8"></div>
        <span className="text-label-md uppercase tracking-[0.1em] text-tertiary block mb-4">
          L&apos;HISTOIRE
        </span>
        <h1 className="font-display text-display-mobile md:text-display-lg text-primary max-w-reading mx-auto leading-tight">
          Marie-Claire<br/>et l&apos;Art du Vêtement.
        </h1>
      </div>

      {/* Section 2 — Mon Histoire */}
      <section className="bg-surface-container py-section-mobile md:py-section px-margin-mobile md:px-margin">
        <div className="mx-auto max-w-content grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 flex flex-col gap-8">
            <h2 className="font-display text-headline-lg text-primary leading-snug">
              Née de la conviction<br/>que moins, c&apos;est plus.
            </h2>
            <div className="space-y-6 text-body-lg text-on-surface-variant">
              <p>J&apos;ai toujours été fascinée par la façon dont un vêtement bien coupé peut transformer non seulement notre allure, mais notre état d&apos;esprit. L&apos;Artisan est né de ce désir profond de revenir à l&apos;essentiel : des matières nobles, des coupes intemporelles et un savoir-faire qui respecte le temps.</p>
              <p>Après des années passées dans l&apos;industrie de la mode rapide, j&apos;ai ressenti le besoin viscéral de ralentir. De redonner de la valeur à chaque point, à chaque couture. Dans notre atelier, nous ne créons pas des collections saisonnières dictées par des tendances éphémères, mais des pièces compagnes de vie.</p>
              <p>Chaque vêtement qui quitte cet atelier porte en lui des heures de travail minutieux, une attention obsessionnelle aux détails, et l&apos;âme d&apos;une fabrication véritablement artisanale.</p>
            </div>
            <p className="font-display text-[24px] italic text-primary mt-4">
              — Fondatrice, L&apos;Artisan
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7 mt-12 md:mt-0">
            <div className="relative w-full aspect-[3/4] -mt-8">
              <Image
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80&auto=format&fit=crop"
                alt="Marie-Claire dans son atelier, 2026"
                fill
                className="object-cover rounded-xs"
              />
            </div>
            <span className="text-label-md uppercase text-on-surface-muted mt-4 block">
              Marie-Claire dans son atelier, 2026
            </span>
          </div>
        </div>
      </section>

      {/* Section 3 — Chiffres clés */}
      <section className="bg-surface py-section-mobile md:py-24 border-y border-hairline">
        <div className="mx-auto max-w-content grid grid-cols-2 md:grid-cols-4 gap-y-12">
          <div className="flex flex-col items-center text-center px-4 md:border-r border-hairline">
            <span className="font-display text-display-mobile md:text-display-lg text-primary mb-2">2 jours</span>
            <span className="text-label-md uppercase text-on-surface-variant">De production<br/>par semaine</span>
          </div>
          <div className="flex flex-col items-center text-center px-4 md:border-r border-hairline">
            <span className="font-display text-display-mobile md:text-display-lg text-primary mb-2">20 pièces</span>
            <span className="text-label-md uppercase text-on-surface-variant">Par collection<br/>mensuelle</span>
          </div>
          <div className="flex flex-col items-center text-center px-4 md:border-r border-hairline">
            <span className="font-display text-display-mobile md:text-display-lg text-primary mb-2">100%</span>
            <span className="text-label-md uppercase text-on-surface-variant">Matières<br/>naturelles</span>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <span className="font-display text-display-mobile md:text-display-lg text-primary mb-2">0</span>
            <span className="text-label-md uppercase text-on-surface-variant">Pièces<br/>identiques</span>
          </div>
        </div>
      </section>

      {/* Section 4 — Valeurs */}
      <section className="bg-surface py-section-mobile md:py-section px-margin-mobile md:px-margin">
        <div className="mx-auto max-w-content flex flex-col items-center">
          <span className="text-label-md text-tertiary uppercase tracking-widest mb-4 block text-center">LA PHILOSOPHIE</span>
          <h2 className="font-display text-headline-lg md:text-display-md text-primary text-center mb-16">
            Faire peu, faire bien.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            <div className="flex flex-col pt-6 border-t-2 border-primary">
              <h3 className="text-label-lg uppercase text-primary mb-4">Fait Main</h3>
              <p className="text-body-md text-on-surface-variant">Nous refusons l&apos;automatisation à outrance. Chaque couture, chaque boutonnière est réalisée avec une précision humaine, garantissant une finition que seule la main peut offrir.</p>
            </div>
            <div className="flex flex-col pt-6 border-t-2 border-primary">
              <h3 className="text-label-lg uppercase text-primary mb-4">Matières Vivantes</h3>
              <p className="text-body-md text-on-surface-variant">Lin européen, laine mérinos, coton biologique. Nous sélectionnons des fibres qui respirent, vieillissent avec grâce et développent une patine unique au fil du temps.</p>
            </div>
            <div className="flex flex-col pt-6 border-t-2 border-primary">
              <h3 className="text-label-lg uppercase text-primary mb-4">Production Lente</h3>
              <p className="text-body-md text-on-surface-variant">Nous prenons le temps nécessaire. Sans hâte, sans compromis. Cette lenteur volontaire est notre garantie de qualité et notre manifeste contre la surproduction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Galerie atelier */}
      <section className="bg-surface-container-low py-section-mobile md:py-section px-margin-mobile md:px-margin">
        <div className="mx-auto max-w-content">
          <span className="text-label-md text-tertiary uppercase tracking-widest mb-12 block">L&apos;ATELIER</span>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-5 md:row-span-2 relative aspect-[2/3] min-h-[400px]">
              <Image src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80&auto=format&fit=crop" fill className="object-cover rounded-xs" alt="Atelier" />
            </div>
            <div className="md:col-span-4 relative aspect-square">
              <Image src="https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00?w=600&q=80&auto=format&fit=crop" fill className="object-cover rounded-xs" alt="Détail machine" />
            </div>
            <div className="md:col-span-4 md:col-start-6 relative aspect-square">
              <Image src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80&auto=format&fit=crop" fill className="object-cover rounded-xs" alt="Outils" />
            </div>
            <div className="md:col-span-7 md:col-start-6 relative aspect-[16/9] mt-2">
              <Image src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80&auto=format&fit=crop" fill className="object-cover rounded-xs" alt="Atelier vue large" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — CTA dark */}
      <section className="bg-inverse-surface py-section-mobile md:py-section px-margin-mobile md:px-margin text-center">
        <div className="max-w-narrow mx-auto flex flex-col items-center">
          <h2 className="font-display text-headline-lg md:text-display-md text-on-primary mb-12">
            Rejoindre la Communauté
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Button variant="inverse" size="lg" className="w-full sm:w-auto">
              Me suivre sur Instagram
            </Button>
            <Button size="lg" className="w-full sm:w-auto">
              S&apos;inscrire à la Newsletter
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
