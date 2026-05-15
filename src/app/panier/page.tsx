import Link from 'next/link';

export default function PanierPage() {
  return (
    <main className="flex-1 w-full max-w-[960px] mx-auto px-gutter py-section-mobile flex flex-col gap-10">
      <nav className="flex items-center gap-3 font-label-md text-label-md text-outline tracking-wider">
        <span className="text-primary-container">PANIER</span>
        <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
        <span className="">LIVRAISON</span>
        <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
        <span className="">PAIEMENT</span>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 flex flex-col gap-8">
          <h2 className="font-headline-lg text-headline-lg text-primary">Mon Panier</h2>
          <div className="flex flex-col border-t border-outline-variant">
            <div className="py-6 flex gap-6 border-b border-outline-variant">
              <div className="w-[80px] h-[106px] bg-surface-dim shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida/ADBb0uhATjmaI_frSDH_W1B357ZgUzlD29Pt5nh0e3uk6sGjftgtnFObK8dx2AFcgW51w5zR1dCNHzCzUIiDOGTz9hPTed0OvrUs2T3PYK0IIau9ka-1R3CvbvtOvu5xv5UNG8yNCjXyHxsMs5N4SB2wbDQZkpe7tbNbq2NRMnUxp_kEDXdn4MhdYUMaJYIbQeS7RMw8QTYoo_4wHry2h_p-T2gCce8WQ4RG2mwDEk8Ai7Lo7naa83IB0GGqHNVr")' }}></div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="font-headline-lg text-headline-lg text-primary leading-none" style={{ fontSize: "24px" }}>Chemise en Lin</h3>
                    <span className="px-3 py-1 bg-tertiary text-on-tertiary font-label-md text-label-md rounded-full uppercase scale-90 origin-left">LIN BIOLOGIQUE</span>
                    <p className="font-body-lg text-body-lg text-on-surface-variant text-sm mt-1">Taille: 38</p>
                  </div>
                  <span className="font-body-lg text-body-lg text-primary">185 €</span>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center border border-outline-variant">
                    <button aria-label="Decrease quantity" className="px-3 py-2 font-body-lg text-body-lg hover:bg-surface-variant transition-colors">-</button>
                    <span className="px-4 font-label-md text-label-md">1</span>
                    <button aria-label="Increase quantity" className="px-3 py-2 font-body-lg text-body-lg hover:bg-surface-variant transition-colors">+</button>
                  </div>
                  <Link className="font-label-md text-label-md text-on-surface-variant hover:text-error transition-colors pb-1 border-b border-transparent hover:border-error" href="#">Retirer</Link>
                </div>
              </div>
            </div>
            <div className="py-6 flex gap-6 border-b border-outline-variant">
              <div className="w-[80px] h-[106px] bg-surface-dim shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida/ADBb0ugtdzfQeaiaSaJdLgTxUco42xC4JJuUIVgJ22cD8us1Vc0HDIzMr-ypdLRoEv7m1_4Wz8MKyzdhnzaHxlt-uAU_u8hT-0BP2ZSGzWXAmMMeeyA4tKztaeiI9stS70zWRIEkYTHXo5CwI8_6BVDPCCFzr_rR_hE9EcE993MitcW9h3GFyFwWgeTYGZBHMa-8BDnUUcxrtE9X5Qvylxr6OVtppwX7FXDQvoy3coUe1GRNuBFxg4VCNqFSAnw2")' }}></div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="font-headline-lg text-headline-lg text-primary leading-none" style={{ fontSize: "24px" }}>Sac en Cuir</h3>
                    <span className="px-3 py-1 bg-tertiary text-on-tertiary font-label-md text-label-md rounded-full uppercase scale-90 origin-left">CUIR PLEINE FLEUR</span>
                    <p className="font-body-lg text-body-lg text-on-surface-variant text-sm mt-1">Taille: Unique</p>
                  </div>
                  <span className="font-body-lg text-body-lg text-primary">250 €</span>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center border border-outline-variant">
                    <button aria-label="Decrease quantity" className="px-3 py-2 font-body-lg text-body-lg hover:bg-surface-variant transition-colors">-</button>
                    <span className="px-4 font-label-md text-label-md">1</span>
                    <button aria-label="Increase quantity" className="px-3 py-2 font-body-lg text-body-lg hover:bg-surface-variant transition-colors">+</button>
                  </div>
                  <Link className="font-label-md text-label-md text-on-surface-variant hover:text-error transition-colors pb-1 border-b border-transparent hover:border-error" href="#">Retirer</Link>
                </div>
              </div>
            </div>
          </div>
          <Link className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors self-start mt-4" href="/boutique">
            <span className="material-symbols-outlined text-[18px]">arrow_left_alt</span> Continuer mes achats
          </Link>
        </div>
        <div className="md:col-span-5 w-full">
          <div className="bg-surface-container border border-outline-variant p-8 flex flex-col gap-8 sticky top-8">
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary border-b border-outline-variant/50 pb-4">Résumé de la Commande</h3>
            <div className="flex flex-col gap-4 font-body-lg text-body-lg text-primary">
              <div className="flex justify-between items-center">
                <span>Sous-total</span>
                <span>435 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Livraison</span>
                <span className="text-on-surface-variant text-sm italic">Calculée à l&apos;étape suivante</span>
              </div>
            </div>
            <div className="flex justify-between items-center font-headline-lg text-headline-lg text-primary border-t border-outline-variant/50 pt-6" style={{ fontSize: "20px" }}>
              <span>Total</span>
              <span>435 €</span>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-4">
                <input className="flex-1 bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body-lg text-body-lg placeholder:text-outline transition-colors" placeholder="Code promo" type="text"/>
                <button className="px-6 py-2 border border-on-surface font-label-md text-label-md text-on-surface hover:bg-on-surface hover:text-surface transition-colors uppercase tracking-wider">Appliquer</button>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <Link href="/checkout/livraison">
                <button className="w-full py-4 px-8 bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-widest flex justify-center items-center gap-3 hover:opacity-90 transition-opacity">
                  Passer la Commande <span className="material-symbols-outlined text-[20px]">arrow_right_alt</span>
                </button>
              </Link>
              <div className="flex items-center justify-center gap-2 font-label-md text-label-md text-outline mt-2">
                <span className="material-symbols-outlined text-[16px]">lock</span> PAIEMENT 100% SÉCURISÉ
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
