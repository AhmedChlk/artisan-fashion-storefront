import Link from 'next/link';

export default function APropos() {
  return (
    <main>
      {/* Section 1: Hero Cinématique */}
      <section className="w-full flex flex-col min-h-screen">
        <div className="flex-1 w-full bg-surface-container relative">
          <img alt="Atelier" className="w-full h-full object-cover absolute inset-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt5mnbHHnMuSoY9Jam_m7EOikmKa8GCwoyj3cXIyy2dwW-ErksKOzHFOS2-vdo18pRrpFvdLaErtWHo9sTvYXNNSOljNFR3trggThrmOsWPZjVkDqVwdhcaIVAHtyzaNINlFp2vx7P48NQb5Mo1sVCDKzpSc3qXzKxOEfCmoL3HUwMxvr7kVEuMVhrIq7miz42ChJgdLkVdgurtv-kb2sexMcOdqPkfdsrr9JkvFUvipom-4sOFaLf9d0ptScDNFRB9uEwogfcLx_F"/>
        </div>
        <div className="bg-surface py-section-mobile md:py-section flex flex-col items-center justify-center text-center px-4">
          <div className="w-[60px] h-px bg-outline-variant mb-8"></div>
          <span className="font-label-md text-label-md text-tertiary tracking-widest uppercase mb-4 block">L&apos;HISTOIRE</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-reading-max mx-auto leading-tight">
            Marie-Claire et l&apos;Art du Vêtement.
          </h1>
        </div>
      </section>

      {/* Section 2: Mon Histoire */}
      <section className="bg-surface-container w-full py-section-mobile md:py-section px-6 md:px-gutter">
        <div className="max-w-content-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-1 flex flex-col gap-8">
            <h2 className="font-headline-lg text-headline-lg text-primary leading-snug">
              Née de la conviction que moins, c&apos;est plus.
            </h2>
            <div className="space-y-6 text-on-surface-variant">
              <p>
                J&apos;ai toujours été fascinée par la façon dont un vêtement bien coupé peut transformer non seulement notre allure, mais notre état d&apos;esprit. L&apos;Artisan est né de ce désir profond de revenir à l&apos;essentiel : des matières nobles, des coupes intemporelles et un savoir-faire qui respecte le temps.
              </p>
              <p>
                Après des années passées dans l&apos;industrie de la mode rapide, j&apos;ai ressenti le besoin viscéral de ralentir. De redonner de la valeur à chaque point, à chaque couture. Dans notre atelier, nous ne créons pas des collections saisonnières dictées par des tendances éphémères, mais des pièces compagnes de vie.
              </p>
              <p>
                Chaque vêtement qui quitte cet atelier porte en lui des heures de travail minutieux, une attention obsessionnelle aux détails, et l&apos;âme d&apos;une fabrication véritablement artisanale.
              </p>
            </div>
            <p className="font-display-lg-mobile text-[24px] italic text-primary mt-4">
              — Fondatrice, L&apos;Artisan
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col items-center md:items-start mt-12 md:mt-0">
            <img alt="Marie-Claire" className="w-full aspect-[3/4] object-cover rounded-none" src="https://lh3.googleusercontent.com/aida/ADBb0ujOaQwn9FjEI3PABtZH7tf_FNURapqAp1dGCxUOnN0JuIglnRDkbR9Z0WHBi7noPD-DXVQZWIohkSIQrUEpDQRtGX2ygJ_MjXywR3mPvBBpIUMMqzjwC5zNGUrZ5ig8yzLR5v69LyQhxzxWuSfcwwM1HQdo5YGC7T7qKIvhhy4kVMdCBnsNa-jE4lBinvOkonY6dkwXlOHowig0KDIrbOi3W7fwN-IKcr3Bnit3t7HUG25VRxJagwJ6W7Gd"/>
            <span className="font-label-md text-label-md text-secondary mt-4 block text-left w-full uppercase">Le travail dans l&apos;atelier, 2024</span>
          </div>
        </div>
      </section>

      {/* Section 3: Chiffres Clés */}
      <section className="bg-surface w-full py-section-mobile md:py-24 px-6 md:px-gutter border-y border-outline-variant/30">
        <div className="max-w-content-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 relative">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/4 w-px bg-outline-variant/50"></div>
          <div className="hidden md:block absolute top-0 bottom-0 left-2/4 w-px bg-outline-variant/50"></div>
          <div className="hidden md:block absolute top-0 bottom-0 left-3/4 w-px bg-outline-variant/50"></div>
          <div className="flex flex-col items-center text-center px-4">
            <span className="font-display-lg text-display-lg text-primary mb-2">2 jours</span>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">De production<br/>par semaine</span>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <span className="font-display-lg text-display-lg text-primary mb-2">20 pièces</span>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Par collection<br/>mensuelle</span>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <span className="font-display-lg text-display-lg text-primary mb-2">100%</span>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Matières<br/>naturelles</span>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <span className="font-display-lg text-display-lg text-primary mb-2">0</span>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Pièces<br/>identiques</span>
          </div>
        </div>
      </section>

      {/* Section 4: Mes Valeurs */}
      <section className="bg-surface w-full py-section-mobile md:py-section px-6 md:px-gutter">
        <div className="max-w-content-max mx-auto flex flex-col items-center">
          <span className="font-label-md text-label-md text-tertiary tracking-widest uppercase mb-4 block text-center">LA PHILOSOPHIE</span>
          <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-16">
            Faire peu, faire bien.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
            <div className="md:col-span-4 flex flex-col pt-6 border-t-2 border-primary-container relative">
              <h3 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4">FAIT MAIN</h3>
              <p className="text-on-surface-variant">
                Nous refusons l&apos;automatisation à outrance. Chaque couture, chaque boutonnière est réalisée avec une précision humaine, garantissant une finition que seule la main peut offrir.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col pt-6 border-t-2 border-primary-container relative">
              <h3 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4">MATIÈRES VIVANTES</h3>
              <p className="text-on-surface-variant">
                Lin européen, laine mérinos, coton biologique. Nous sélectionnons des fibres qui respirent, vieillissent avec grâce et développent une patine unique au fil du temps.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col pt-6 border-t-2 border-primary-container relative">
              <h3 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4">PRODUCTION LENTE</h3>
              <p className="text-on-surface-variant">
                Nous prenons le temps nécessaire. Sans hâte, sans compromis. Cette lenteur volontaire est notre garantie de qualité et notre manifeste contre la surproduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Galerie Atelier */}
      <section className="bg-surface-container-low w-full py-section-mobile md:py-section px-6 md:px-gutter">
        <div className="max-w-content-max mx-auto">
          <span className="font-label-md text-label-md text-tertiary tracking-widest uppercase mb-12 block">L&apos;ATELIER</span>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-5 row-span-2">
              <img alt="Atelier Spools" className="w-full h-full object-cover min-h-[400px] md:min-h-full aspect-[2/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0rk6IQp72TQyhl0u6Gt7guIz3gvQvXpiPjaO-lAWlypqzt3P2ug0yTynSVKUDs9W1n9V7p1NucvJz7jBtLVfKc0wzz2n00XUo-ILmrfUDqfZf1o92nVzhnhYv5Iv7ArVd7HAln1eB9GkVVJwKnvY-iwWNvklEso_N8LB15LHUt1ciEp_b6PAR3t9V8jXdWejoHwv9PcZNeTwv97lS-bbVET3DGKU9CcIi1oGC-aEqjcV8al2K9rYkKmqZx-mC8x5Xpwqqk_KaWjl"/>
            </div>
            <div className="md:col-span-4">
              <img alt="Sewing Detail" className="w-full aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8Q_XKqCyutU2WTm4bVrvRf-poTQun2kA1oufWPygHaUev4-uEgswDY5aDVd5xVoAkvfbj_ItmnwbXme0skLV4cV3dLhqb_GI1uynIZMupetrGHduh-W_0VxH9W3GDktC-7ZiIecwr_fsFfZdK9-LNppk-uCpK79q9DlFmoyeRucZFmyODRhEpcSCQEPrOEoHgBLIUcG_-vxx0WthXVNyDGNM0ZedJin5xv_oZHbhrOjSdQm6b56ed0isQMTfVL4zG5K62xKFqn9R"/>
            </div>
            <div className="md:col-span-4 md:col-start-6">
              <img alt="Atelier Tools" className="w-full aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNolNmDTHP66vV4IfRZ2tazqvyYA5kb4S0R2qbTFKrMcNlyxT7LFn59Gwd5LxnL0NoSSQSzz7g9GIKIVyzgomJa2lRBI5wKiI8omqjaf86ymjdMceYw9dMy-iU5_1qU2HgujFtQt5zP5KN53WdlOJ3TF29o34fH4T8QPk4px3Z5E8a37EIhGy0KrjLaj2BJKbi5E26oBXBRE1gQFEL8FsbMB-s9xqvEYDUJUUEmiS3lJNCEWE8m8KsXSF15v3U_7vlPsEjEd6p6ln-"/>
            </div>
          </div>
          <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 md:col-start-6">
              <img alt="Atelier Wide" className="w-full h-auto object-cover aspect-[16/9]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQaihiaV8SQ9ygJG84S7W8oqKOw9og2Egu5euWpfO9SCgOoBjg1daPKgTG3zsF88N_4v4V_kk1ZYFEXQ3tpqNffkJeWE8qWd0sYlhLDywtx7JHY6ml0PWXaHiZKYwDcttQiRnzN3ANBtmB0SfIv1ZmC1jDM2Az5iqPji4TC4cgwI6lXqy3q8yEFeLPQv_cj5ro35nzZuYdwp9gIscbGlqPQjhbjp_iqm8cRDPe1IgGzXOHKYqrdH4djYmOYTCSMVY2FlWvY9JfToZl"/>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Communauté */}
      <section className="bg-[#32302e] w-full py-section-mobile md:py-section px-6 md:px-gutter text-center">
        <div className="max-w-narrow-max mx-auto flex flex-col items-center">
          <h2 className="font-headline-lg md:font-display-lg-mobile text-headline-lg md:text-display-lg-mobile text-on-primary mb-12">
            Rejoindre la Communauté
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <button className="px-8 py-4 border border-on-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-on-primary/10 transition-colors w-full sm:w-auto">
              Me suivre sur Instagram
            </button>
            <button className="px-8 py-4 bg-primary-container text-on-tertiary font-label-md text-label-md uppercase tracking-wider hover:bg-primary transition-colors w-full sm:w-auto border border-primary-container">
              S&apos;inscrire à la Newsletter
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}