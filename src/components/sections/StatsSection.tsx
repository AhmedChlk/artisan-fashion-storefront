const stats = [
  { value: "2 jours", label: "De production par semaine" },
  { value: "20 pièces", label: "Par collection mensuelle" },
  { value: "100%", label: "Matières naturelles" },
  { value: "0", label: "Pièces identiques" },
];

export function StatsSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-content px-margin-mobile lg:px-margin py-section-mobile lg:py-section">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={
                "flex flex-col gap-3 px-6 py-6 lg:py-2 " +
                (i > 0 ? "lg:border-l border-hairline" : "")
              }
            >
              <span className="font-display text-display-mobile lg:text-display-lg text-primary leading-none">
                {s.value}
              </span>
              <span className="text-label-md uppercase text-on-surface-variant">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
