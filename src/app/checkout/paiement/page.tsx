import Link from 'next/link';

export default function PaiementPage() {
  return (
    <>
      <header className="bg-surface dark:bg-surface-dim border-b border-outline-variant/20 flex justify-center items-center w-full px-6 py-6 z-50 sticky top-0">
        <span className="font-headline-md text-headline-md tracking-widest text-primary dark:text-primary-fixed-dim">THE ARTISAN</span>
      </header>
      
      <main className="flex-1 w-full max-w-[960px] mx-auto px-6 py-12 md:py-20 flex flex-col gap-12">
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span>PANIER</span>
            <span className="material-symbols-outlined text-sm">check</span>
          </div>
          <span className="material-symbols-outlined text-outline-variant text-sm">arrow_forward</span>
          <div className="flex items-center gap-2">
            <span>LIVRAISON</span>
            <span className="material-symbols-outlined text-sm">check</span>
          </div>
          <span className="material-symbols-outlined text-outline-variant text-sm">arrow_forward</span>
          <div className="flex items-center gap-2 text-primary-container font-semibold">
            <span>PAIEMENT</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="md:col-span-7 flex flex-col gap-10">
            <div>
              <h1 className="font-headline-md text-headline-md mb-8">Paiement</h1>
              <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-6">INFORMATIONS DE CARTE</h2>
              <form className="flex flex-col gap-8">
                <div className="relative">
                  <label className="sr-only" htmlFor="cardNumber">Card number</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline transition-colors" id="cardNumber" placeholder="Numéro de carte" type="text" defaultValue="4111 1111 1111 1111"/>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2">
                    <span className="material-symbols-outlined text-outline">credit_card</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="sr-only" htmlFor="expiry">Expiry Date</label>
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline transition-colors" id="expiry" placeholder="MM/AA" type="text"/>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="cvv">CVV</label>
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline transition-colors" id="cvv" placeholder="CVV" type="text"/>
                  </div>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 mt-2">
                  <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-6">ADRESSE DE FACTURATION</h2>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-5 h-5">
                      <input defaultChecked className="peer appearance-none w-5 h-5 border border-outline rounded-none checked:bg-primary checked:border-primary focus:ring-1 focus:ring-primary focus:ring-offset-1 focus:ring-offset-surface transition-all cursor-pointer" type="checkbox"/>
                      <span className="material-symbols-outlined absolute text-[14px] text-on-primary opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity">check</span>
                    </div>
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Identique à l&apos;adresse de livraison</span>
                  </label>
                </div>
              </form>
            </div>
            
            <div className="flex flex-wrap gap-6 items-center justify-between py-6 border-y border-outline-variant/20">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lg">lock</span>
                <span className="font-label-md text-[12px] uppercase tracking-wider">SSL Sécurisé</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lg">verified_user</span>
                <span className="font-label-md text-[12px] uppercase tracking-wider">3D Secure</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-lg">shield</span>
                <span className="font-label-md text-[12px] uppercase tracking-wider">Données protégées</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 px-8 uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2" type="button">
                Confirmer et Payer
                <span className="material-symbols-outlined text-sm">lock</span>
              </button>
              <p className="font-body-md text-[14px] text-on-surface-variant italic text-center">
                En confirmant, vous acceptez nos Conditions Générales de Vente
              </p>
            </div>
          </div>

          <div className="md:col-span-5 bg-surface-container-low border border-outline-variant/20 p-8 flex flex-col gap-8 sticky top-32">
            <h2 className="font-headline-md text-headline-md border-b border-outline-variant/20 pb-4">Résumé de la commande</h2>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-20 h-24 bg-surface-dim relative overflow-hidden flex-shrink-0">
                  <img alt="Chemise en Lin" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uhATjmaI_frSDH_W1B357ZgUzlD29Pt5nh0e3uk6sGjftgtnFObK8dx2AFcgW51w5zR1dCNHzCzUIiDOGTz9hPTed0OvrUs2T3PYK0IIau9ka-1R3CvbvtOvu5xv5UNG8yNCjXyHxsMs5N4SB2wbDQZkpe7tbNbq2NRMnUxp_kEDXdn4MhdYUMaJYIbQeS7RMw8QTYoo_4wHry2h_p-T2gCce8WQ4RG2mwDEk8Ai7Lo7naa83IB0GGqHNVr"/>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <span className="font-label-md text-[12px] uppercase tracking-wider text-on-surface-variant">Chemise en Lin</span>
                  <span className="font-body-md text-body-md">Taille M, Beige</span>
                  <span className="font-body-md text-body-md text-on-surface-variant mt-1">Qté: 1</span>
                </div>
                <div className="font-body-md text-body-md">185 €</div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-20 h-24 bg-surface-dim relative overflow-hidden flex-shrink-0">
                  <img alt="Sac en Cuir" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ugtdzfQeaiaSaJdLgTxUco42xC4JJuUIVgJ22cD8us1Vc0HDIzMr-ypdLRoEv7m1_4Wz8MKyzdhnzaHxlt-uAU_u8hT-0BP2ZSGzWXAmMMeeyA4tKztaeiI9stS70zWRIEkYTHXo5CwI8_6BVDPCCFzr_rR_hE9EcE993MitcW9h3GFyFwWgeTYGZBHMa-8BDnUUcxrtE9X5Qvylxr6OVtppwX7FXDQvoy3coUe1GRNuBFxg4VCNqFSAnw2"/>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <span className="font-label-md text-[12px] uppercase tracking-wider text-on-surface-variant">Sac en Cuir</span>
                  <span className="font-body-md text-body-md">Coloris Naturel</span>
                  <span className="font-body-md text-body-md text-on-surface-variant mt-1">Qté: 1</span>
                </div>
                <div className="font-body-md text-body-md">235 €</div>
              </div>
            </div>

            <div className="flex flex-col gap-3 py-6 border-y border-outline-variant/20 text-body-md font-body-md">
              <div className="flex justify-between items-center text-on-surface-variant">
                <span>Sous-total</span>
                <span>420 €</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant">
                <span>Livraison (Standard)</span>
                <span>15 €</span>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <span className="font-headline-md text-headline-md">Total</span>
              <div className="text-right">
                <span className="block font-headline-md text-[28px] leading-none">435 €</span>
                <span className="font-label-md text-[12px] text-on-surface-variant tracking-wider uppercase mt-1 block">TVA incluse</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-surface-container dark:bg-surface-container-highest w-full px-margin-desktop py-section-gap flex flex-col items-center justify-center gap-4 border-t border-outline-variant/10 mt-auto py-12">
        <div className="flex items-center gap-6 font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
          <a className="hover:text-primary transition-colors" href="#">Mentions légales</a>
          <span>·</span>
          <a className="hover:text-primary transition-colors" href="#">Confidentialité</a>
        </div>
        <div className="font-body-md text-[14px] text-on-surface-variant mt-4">
          © 2024 THE ARTISAN ATELIER. HANDCRAFTED WITH INTENTION.
        </div>
      </footer>
    </>
  );
}
