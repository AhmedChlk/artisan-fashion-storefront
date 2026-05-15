import Link from 'next/link';

export default function LivraisonPage() {
  return (
    <>
      {/* TopNavBar (Suppressed Links for Transactional Flow) */}
      <header className="bg-surface border-b border-outline-variant/20 flex flex-col justify-center items-center w-full px-gutter py-6 z-50 gap-4">
        <div className="font-headline-lg text-headline-lg tracking-widest text-primary text-center uppercase">
          THE ARTISAN
        </div>
        <nav className="flex items-center gap-3 font-label-md text-label-md uppercase tracking-wider text-outline">
          <span className="flex items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">check</span>
            PANIER
          </span>
          <span className="">→</span>
          <span className="text-primary-container">LIVRAISON</span>
          <span className="">→</span>
          <span className="">PAIEMENT</span>
        </nav>
      </header>

      <main className="flex-grow w-full max-w-[960px] mx-auto px-6 md:px-gutter py-16 md:py-24 flex flex-col md:flex-row gap-12 md:gap-gutter">
        <div className="w-full md:w-7/12 flex flex-col gap-12">
          <section className="flex flex-col gap-8">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Détails de Livraison</h1>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 relative group">
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant" id="prenom" placeholder="Prénom" type="text"/>
                </div>
                <div className="flex flex-col gap-2 relative group">
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant" id="nom" placeholder="Nom" type="text"/>
                </div>
              </div>
              <div className="flex flex-col gap-2 relative group">
                <input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant" id="adresse" placeholder="Adresse" type="text"/>
              </div>
              <div className="flex flex-col gap-2 relative group">
                <input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant" id="appt" placeholder="Appartement, suite, etc. (optionnel)" type="text"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2 relative group">
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant" id="ville" placeholder="Ville" type="text"/>
                </div>
                <div className="flex flex-col gap-2 relative group">
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant" id="cp" placeholder="Code postal" type="text"/>
                </div>
                <div className="flex flex-col gap-2 relative group">
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-primary transition-colors appearance-none cursor-pointer" id="pays">
                    <option value="FR">France</option>
                    <option value="BE">Belgique</option>
                    <option value="CH">Suisse</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2 relative group mt-2">
                <input className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant" id="tel" placeholder="Téléphone" type="tel"/>
              </div>
            </form>
          </section>
          
          <section className="flex flex-col gap-6 mt-4">
            <h2 className="font-label-md text-label-md text-on-surface uppercase tracking-widest">MÉTHODE DE LIVRAISON</h2>
            <div className="flex flex-col gap-4">
              <label className="flex items-center justify-between p-6 bg-surface-container border-l-2 border-primary-container cursor-pointer hover:bg-surface-container-high transition-colors">
                <div className="flex items-center gap-4">
                  <input checked className="w-4 h-4 text-primary-container bg-transparent border-outline focus:ring-primary-container focus:ring-2" name="shipping" type="radio" readOnly/>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">COLISSIMO</span>
                    <span className="font-body-lg text-body-lg text-on-surface-variant text-sm">4-6 jours ouvrés</span>
                  </div>
                </div>
                <span className="font-label-md text-label-md text-on-surface">4,90 €</span>
              </label>
              <label className="flex items-center justify-between p-6 border border-outline-variant cursor-pointer hover:bg-surface-variant transition-colors">
                <div className="flex items-center gap-4">
                  <input className="w-4 h-4 text-primary-container bg-transparent border-outline focus:ring-primary-container focus:ring-2" name="shipping" type="radio" readOnly/>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">POINT RELAIS</span>
                    <span className="font-body-lg text-body-lg text-on-surface-variant text-sm">3-5 jours ouvrés</span>
                  </div>
                </div>
                <span className="font-label-md text-label-md text-on-surface">3,50 €</span>
              </label>
            </div>
          </section>

          <Link href="/checkout/paiement">
            <button className="mt-8 bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider py-5 px-8 flex justify-center items-center gap-2 hover:opacity-90 transition-opacity w-full group">
              Continuer vers le Paiement
              <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </Link>
        </div>

        <aside className="w-full md:w-5/12 relative">
          <div className="sticky top-12 bg-surface border border-outline-variant/50 p-8 flex flex-col gap-8">
            <h3 className="font-headline-lg text-headline-lg text-on-surface text-xl">Résumé de la commande</h3>
            <div className="flex flex-col gap-6 border-b border-outline-variant/30 pb-8">
              <div className="flex gap-4">
                <div className="w-20 h-24 bg-surface-container relative overflow-hidden flex-shrink-0">
                  <img alt="Chemise en Lin" className="w-full h-full object-cover grayscale-[20%]" src="https://lh3.googleusercontent.com/aida/ADBb0uhATjmaI_frSDH_W1B357ZgUzlD29Pt5nh0e3uk6sGjftgtnFObK8dx2AFcgW51w5zR1dCNHzCzUIiDOGTz9hPTed0OvrUs2T3PYK0IIau9ka-1R3CvbvtOvu5xv5UNG8yNCjXyHxsMs5N4SB2wbDQZkpe7tbNbq2NRMnUxp_kEDXdn4MhdYUMaJYIbQeS7RMw8QTYoo_4wHry2h_p-T2gCce8WQ4RG2mwDEk8Ai7Lo7naa83IB0GGqHNVr"/>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-tertiary-container text-on-tertiary rounded-full flex items-center justify-center font-label-md text-[10px]">1</div>
                </div>
                <div className="flex flex-col flex-grow pt-1">
                  <span className="font-label-md text-label-md text-on-surface uppercase">Chemise en Lin</span>
                  <span className="font-body-lg text-body-lg text-on-surface-variant text-sm mt-1">Beige</span>
                  <span className="font-label-md text-label-md text-on-surface mt-auto">185,00 €</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-20 h-24 bg-surface-container relative overflow-hidden flex-shrink-0">
                  <img alt="Robe en Lin" className="w-full h-full object-cover grayscale-[20%]" src="https://lh3.googleusercontent.com/aida/ADBb0ugtdzfQeaiaSaJdLgTxUco42xC4JJuUIVgJ22cD8us1Vc0HDIzMr-ypdLRoEv7m1_4Wz8MKyzdhnzaHxlt-uAU_u8hT-0BP2ZSGzWXAmMMeeyA4tKztaeiI9stS70zWRIEkYTHXo5CwI8_6BVDPCCFzr_rR_hE9EcE993MitcW9h3GFyFwWgeTYGZBHMa-8BDnUUcxrtE9X5Qvylxr6OVtppwX7FXDQvoy3coUe1GRNuBFxg4VCNqFSAnw2"/>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-tertiary-container text-on-tertiary rounded-full flex items-center justify-center font-label-md text-[10px]">1</div>
                </div>
                <div className="flex flex-col flex-grow pt-1">
                  <span className="font-label-md text-label-md text-on-surface uppercase">Robe en Lin</span>
                  <span className="font-body-lg text-body-lg text-on-surface-variant text-sm mt-1">Sable</span>
                  <span className="font-label-md text-label-md text-on-surface mt-auto">250,00 €</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 font-body-lg text-body-lg text-on-surface">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Sous-total</span>
                <span>435,00 €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Livraison</span>
                <span>4,90 €</span>
              </div>
            </div>
            <div className="border-t border-outline-variant/30 pt-6 flex justify-between items-end">
              <span className="font-label-md text-label-md text-on-surface uppercase">Total</span>
              <span className="font-headline-lg text-headline-lg text-on-surface text-2xl">439,90 €</span>
            </div>
          </div>
        </aside>
      </main>
      
      <footer className="mt-auto bg-surface-container w-full px-gutter py-12 flex flex-col items-center gap-6 border-t border-outline-variant/10">
        <div className="font-headline-lg text-headline-lg italic text-primary text-center">
          THE ARTISAN
        </div>
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 font-label-md text-label-md text-on-surface-variant">
          <li><a className="hover:text-primary transition-colors" href="#">Journal</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Sustainability</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Care Guide</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Shipping</a></li>
          <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
        </ul>
        <div className="font-body-lg text-body-lg text-on-surface-variant text-sm mt-4 text-center">
          © 2024 THE ARTISAN ATELIER. HANDCRAFTED WITH INTENTION.
        </div>
      </footer>
    </>
  );
}
