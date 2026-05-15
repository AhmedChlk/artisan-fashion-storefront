import Image from "next/image";

const galleryImages = {
  large:
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop",
  small1:
    "https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00?w=700&q=80&auto=format&fit=crop",
  small2:
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&q=80&auto=format&fit=crop",
  wide:
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&q=80&auto=format&fit=crop",
};

export function GallerySection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-section-mobile lg:py-section">
        <span className="text-label-md uppercase text-on-surface-variant">
          L&apos;Atelier
        </span>
        <h2 className="mt-4 font-display text-headline-lg lg:text-display-md">
          Coulisses du geste.
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-8 gap-4 lg:gap-6">
          <div className="lg:col-span-5 relative aspect-[2/3]">
            <Image
              src={galleryImages.large}
              alt="Atelier — vue large"
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-3 grid grid-rows-2 gap-4 lg:gap-6">
            <div className="relative aspect-square">
              <Image
                src={galleryImages.small1}
                alt="Outils de couture"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src={galleryImages.small2}
                alt="Tissus pliés"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-8 relative aspect-[21/9] mt-2">
            <Image
              src={galleryImages.wide}
              alt="Espace de travail"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
