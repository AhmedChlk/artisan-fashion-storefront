const values = [
  {
    title: "Fait Main",
    body: "Chaque pièce est cousue dans notre atelier. Pas d'usine, pas de sous-traitance. Le temps fait la qualité.",
  },
  {
    title: "Matières Vivantes",
    body: "Lin, coton biologique, soie naturelle, laine d'origine tracée. Des fibres qui respirent et se patinent.",
  },
  {
    title: "Production Lente",
    body: "Vingt pièces par mois. Ni plus, ni moins. Une cadence qui respecte la matière et celles qui la travaillent.",
  },
];

export function ValuesSection() {
  return (
    <section className="bg-surface-container">
      <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-section-mobile lg:py-section">
        <div className="text-center">
          <span className="text-label-md uppercase text-on-surface-variant">
            La philosophie
          </span>
          <h2 className="mt-4 font-display text-headline-lg lg:text-display-md">
            Faire peu, faire bien.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((v) => (
            <article key={v.title} className="pt-6 border-t-2 border-primary">
              <h3 className="text-label-lg uppercase text-on-surface">
                {v.title}
              </h3>
              <p className="mt-4 text-body-md text-on-surface-variant">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
