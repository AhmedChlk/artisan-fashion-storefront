import Link from 'next/link';

export default function ProductPage() {
  return (
    <>
      <nav className="border-b border-outline-variant/20 py-4 px-gutter max-w-content-max mx-auto w-full">
        <ol className="flex items-center gap-2 font-label-md text-[12px] text-on-surface-variant uppercase tracking-wider">
          <li><Link className="hover:text-primary" href="/">Accueil</Link></li>
          <li>/</li>
          <li><Link className="hover:text-primary" href="/boutique">Boutique</Link></li>
          <li>/</li>
          <li><Link className="hover:text-primary" href="/boutique">Robes</Link></li>
          <li>/</li>
          <li className="text-primary">Robe en Lin Biologique</li>
        </ol>
      </nav>
      <main className="max-w-content-max mx-auto w-full px-gutter py-12">
        <div className="flex flex-col lg:flex-row gap-gutter relative">
          {/* Left Column (Scrollable Photos) */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            <div className="aspect-[3/4] w-full bg-surface-container overflow-hidden rounded-DEFAULT">
              <img alt="Robe en Lin Biologique" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ugtdzfQeaiaSaJdLgTxUco42xC4JJuUIVgJ22cD8us1Vc0HDIzMr-ypdLRoEv7m1_4Wz8MKyzdhnzaHxlt-uAU_u8hT-0BP2ZSGzWXAmMMeeyA4tKztaeiI9stS70zWRIEkYTHXo5CwI8_6BVDPCCFzr_rR_hE9EcE993MitcW9h3GFyFwWgeTYGZBHMa-8BDnUUcxrtE9X5Qvylxr6OVtppwX7FXDQvoy3coUe1GRNuBFxg4VCNqFSAnw2"/>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-square bg-surface-container overflow-hidden rounded-DEFAULT border border-primary p-1 cursor-pointer">
                <img alt="Thumbnail 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwxJyhvGp-UA7XVuFkXO101cbD60Mcd50sEQiPcqV0zKzG5sUKYpBaJc-8jFVwn3VQmi-xVTfseYhkJxnFbypfDFxOIz4Y42Lk3nJ5o45GDjiVlzWKLEBDZWvXYjcjrIpMhez7NddfT-_ZqxhbpcattL_UuEM7TjASKfkp5QtiuNNfwqNzlJMEJmC-CdsTsdCqcbfNWvM7QVyft73Js27f9v8CLhyFH9aQTpM37aJTecmH_EPDFs09n6IVuSUIOsX30MQtAoNx8v6e"/>
              </div>
              <div className="aspect-square bg-surface-container overflow-hidden rounded-DEFAULT hover:opacity-80 transition-opacity cursor-pointer">
                <img alt="Thumbnail 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgr5oBwA9JUozCFeXvAybrfadDFV_yfgMIsnnx49-zcCm7sZ_jJoLoTCrc0J2Oy87C9IlkeQ3gNgoU8yFA3xVhe-AVv8OAOVOepLyO9NKamI6QTNkGuQFQ40YwwdewQRu4GcCfPL3hA5IUeL_gp9285iTgxxVXUoi2j0Fbq_tmRLmmK6qU1LcGnsnfB4XLJjSdwITp2fHF4YsJfArrx-95CKnrHtmurhzQyv7W9s6b4G7eex5lBBRocPXJMA7iGxVllM7vFKnF7Mkh"/>
              </div>
              <div className="aspect-square bg-surface-container overflow-hidden rounded-DEFAULT hover:opacity-80 transition-opacity cursor-pointer">
                <img alt="Thumbnail 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3VywXnMBXL8WSFXq33u1IL8sWzVg4OcCm-wwSoxqgMvNUtK-gU42zTEGp_9A_hpr0FqNIDZA1DxzIxEu99Lhte7qAhEVBJctgRh_ov_-7OnoYH2KS8fS8FIDl5Wh5jRaBvVBFwFpdLCY6gxXue61CTmf0sCw5bfT2nmycPsZmcLx3wJhfEowlZNMOHcWNQLE8jSgWeLnPvg4jlNaenzinC0g7Qxph96aFnLIrwFFwprXHiUQ5oGNnwMdG5cr6u3t9tsvjihWXaMQc"/>
              </div>
              <div className="aspect-square bg-surface-container overflow-hidden rounded-DEFAULT hover:opacity-80 transition-opacity cursor-pointer">
                <img alt="Thumbnail 4" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ugtdzfQeaiaSaJdLgTxUco42xC4JJuUIVgJ22cD8us1Vc0HDIzMr-ypdLRoEv7m1_4Wz8MKyzdhnzaHxlt-uAU_u8hT-0BP2ZSGzWXAmMMeeyA4tKztaeiI9stS70zWRIEkYTHXo5CwI8_6BVDPCCFzr_rR_hE9EcE993MitcW9h3GFyFwWgeTYGZBHMa-8BDnUUcxrtE9X5Qvylxr6OVtppwX7FXDQvoy3coUe1GRNuBFxg4VCNqFSAnw2"/>
              </div>
            </div>
            <div className="aspect-video w-full bg-surface-container overflow-hidden rounded-DEFAULT mt-8">
              <img alt="Fabric Detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWTUwTPng860Amjo6_HG7YXN91BK-p7I3hdjG5M6p_meIWh66jreZvFQPL3SsU4jm04Dc5oNHPgwzXsMlmvzd0NqRht5UuHdNpJ_8hYS0LZ2JN33rB7U76Ed6kw_Qx9Bn6Cb-NFA1usW3bMX-v0Oya0e8HfIF-6ttsO7vw32Z0iGrWUdQ-nnPaaCVBbe2apAfjbZgMWU_A0BLPGSHpU3i76FcsZCKHSmqJWreYVzfJLY3B5fJlCFwxIs0R7RIjDyqLTRCKRLYfnUbj"/>
            </div>
            <div className="mt-12">
              <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-6">Coulisses de Fabrication</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-surface-container overflow-hidden rounded-DEFAULT">
                  <img alt="Artisan Hands" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNG25tMjyEyNPq5mTWxf9M1qO-r2VyKHHlLmBK4sbgosIHN60CV5P83oBn3YA7pAknYbAarQdpMxRcw-mHTuD1Ew3J5b2sLJYb0u56A1HdEICQBJG37HruFzxknO8F7h70tpFqHfg3ojpjfrZvdlZiBYmoYjXEIhhrZFgg2aJWcjgQjPNmo2Q7SslIZEGBN4rWHX49xsC3zjkKbNxg9NERu_3X_BJGSDVG9IliRAUfXx7hnbp_TgpG7YgN61PMsg7okkwUmUJTAzGI"/>
                </div>
                <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded-DEFAULT mt-12">
                  <img alt="Sewing Machine" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7R5UzEcdmcwZQ9yXc8wyf5USqwuSfgGIqPPZhkxT3-SHuIdA-7J0KDJVHdW6QuHqDBuyVJMyDEQuxn5uPHN4eCE1y3hcjnkvjMzx0ZUL9P74OP6dxmSwi_f2Ie7PYvcKjA3m46FlxBxd_9EvpWk79fyE4Yh3Grl_esrt1MFN7fzxO7Ne7BB-yDkf1qkHu-J2iiL8JkG9jf8eEg1nas4RdZqz9EiOM8rJ8cFq417BdH1xp46y0_y29hj4EvTcanjaUvzC5aN8IpZDs"/>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column (Sticky) */}
          <div className="w-full lg:w-2/5 relative">
            <div className="sticky top-32 flex flex-col gap-6">
              <div>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest block mb-2">Collection Mai 2026</span>
                <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-4">Robe en Lin<br/>Biologique</h1>
                <div className="flex items-baseline gap-4">
                  <span className="font-body-lg text-body-lg font-bold text-on-surface">129 €</span>
                  <span className="font-label-md text-[12px] text-on-surface-variant">Livraison offerte dès 150 €</span>
                </div>
              </div>
              <hr className="border-t border-outline-variant/30"/>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container px-3 py-1 rounded-full font-label-md text-[11px] text-on-surface-variant">100% Lin</span>
                <span className="bg-surface-container px-3 py-1 rounded-full font-label-md text-[11px] text-on-surface-variant">Teinture naturelle</span>
                <span className="bg-surface-container px-3 py-1 rounded-full font-label-md text-[11px] text-on-surface-variant">Fait main</span>
              </div>
              <hr className="border-t border-outline-variant/30"/>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-widest">Guide des Tailles</span>
                </div>
                <div className="flex gap-3 mb-2">
                  <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center font-label-md text-label-md text-on-surface hover:border-primary transition-colors">36</button>
                  <button className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md">38</button>
                  <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center font-label-md text-label-md text-on-surface hover:border-primary transition-colors">40</button>
                  <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center font-label-md text-label-md text-on-surface hover:border-primary transition-colors">42</button>
                </div>
                <a className="font-label-md text-[12px] text-primary hover:opacity-70 transition-opacity" href="#">Consulter le guide →</a>
              </div>
              <hr className="border-t border-outline-variant/30"/>
              <div>
                <p className="font-body-lg text-[16px] text-on-surface-variant mb-4">
                  Tissée dans un lin biologique d&apos;une rare finesse, cette robe incarne l&apos;essence même de notre atelier. Sa coupe minimaliste laisse la matière respirer, offrant une fluidité parfaite pour les journées d&apos;été.
                </p>
                <a className="font-label-md text-[12px] text-primary hover:opacity-70 transition-opacity" href="#">Lire la description complète ↓</a>
              </div>
              <hr className="border-t border-outline-variant/30"/>
              <div className="flex flex-col gap-3">
                <Link href="/panier">
                  <button className="w-full bg-primary text-on-primary py-4 rounded-lg font-label-md text-label-md uppercase tracking-wider hover:opacity-90 transition-opacity">
                    Ajouter au Panier
                  </button>
                </Link>
                <button className="w-full border border-on-surface text-on-surface py-4 rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container transition-colors">
                  Sauvegarder
                </button>
              </div>
              <hr className="border-t border-outline-variant/30"/>
              <div className="flex flex-col">
                <button className="flex justify-between items-center py-4 border-b border-outline-variant/30 hover:opacity-70 transition-opacity group">
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-widest">Matières &amp; Entretien</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add</span>
                </button>
                <button className="flex justify-between items-center py-4 border-b border-outline-variant/30 hover:opacity-70 transition-opacity group">
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-widest">Livraison &amp; Retours</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add</span>
                </button>
                <button className="flex justify-between items-center py-4 hover:opacity-70 transition-opacity group">
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-widest">Histoire de la Pièce</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add</span>
                </button>
              </div>
              <div className="flex items-center gap-6 pt-6 mt-2 border-t border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-primary">handshake</span>
                  <span className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Fait Main</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-primary">diamond</span>
                  <span className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Pièce Unique</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                  <span className="font-label-md text-[11px] text-on-surface-variant uppercase tracking-wider">Atelier Français</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="max-w-content-max mx-auto w-full px-gutter py-section border-t border-outline-variant/20">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-12 uppercase text-center tracking-widest">Vous aimerez aussi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link className="group block" href="#">
            <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded-DEFAULT mb-4 relative">
              <img alt="Blouse en Coton" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida/ADBb0ugtdzfQeaiaSaJdLgTxUco42xC4JJuUIVgJ22cD8us1Vc0HDIzMr-ypdLRoEv7m1_4Wz8MKyzdhnzaHxlt-uAU_u8hT-0BP2ZSGzWXAmMMeeyA4tKztaeiI9stS70zWRIEkYTHXo5CwI8_6BVDPCCFzr_rR_hE9EcE993MitcW9h3GFyFwWgeTYGZBHMa-8BDnUUcxrtE9X5Qvylxr6OVtppwX7FXDQvoy3coUe1GRNuBFxg4VCNqFSAnw2"/>
            </div>
            <h3 className="font-body-lg text-body-lg text-on-surface mb-1">Blouse en Coton</h3>
            <p className="font-label-md text-label-md text-on-surface-variant">89 €</p>
          </Link>
          <Link className="group block" href="#">
            <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded-DEFAULT mb-4 relative">
              <img alt="Jupe Midi Lin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCndj8LY3eFVOoGpXdWC4DI9swxuJyhkyhmItLUfkeyLvCdjtzg_ZpsC31yTl28YIXrHjSXdfSv6yYw3VezNaN63WfqFty9ldWI0jYUFfwAYZBevk6NfIICmsOcqNVFddxuOytdhB-mC3m5gflfrn7ihcllxebCqgImBeYw_Ivk8RlCrPSpzwlpuv-L0e6nV5fp_HbhoCylCwM0U2GuK4nBTmwz7sXd-A1TB0OmtvKvN_-19fIN5tbLpkbhP_J-7oEznK1VRlcNPgM1"/>
            </div>
            <h3 className="font-body-lg text-body-lg text-on-surface mb-1">Jupe Midi Lin</h3>
            <p className="font-label-md text-label-md text-on-surface-variant">115 €</p>
          </Link>
          <Link className="group block" href="#">
            <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded-DEFAULT mb-4 relative">
              <img alt="Sac Cabas Tressé" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida/ADBb0ugtdzfQeaiaSaJdLgTxUco42xC4JJuUIVgJ22cD8us1Vc0HDIzMr-ypdLRoEv7m1_4Wz8MKyzdhnzaHxlt-uAU_u8hT-0BP2ZSGzWXAmMMeeyA4tKztaeiI9stS70zWRIEkYTHXo5CwI8_6BVDPCCFzr_rR_hE9EcE993MitcW9h3GFyFwWgeTYGZBHMa-8BDnUUcxrtE9X5Qvylxr6OVtppwX7FXDQvoy3coUe1GRNuBFxg4VCNqFSAnw2"/>
            </div>
            <h3 className="font-body-lg text-body-lg text-on-surface mb-1">Sac Cabas Tressé</h3>
            <p className="font-label-md text-label-md text-on-surface-variant">145 €</p>
          </Link>
          <Link className="group block" href="#">
            <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded-DEFAULT mb-4 relative">
              <img alt="Top Estival" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZj4u5A1oTjvv2TS05wuN3fXJvIGWs8rGcXudU6mjSSWmWogoJfqTahVzOeSfh2kIerRR_E6ez7YmwmnLnk82fa2RzBMMcsAJP-KZUndT3gRs9is79cUOVFHGhvCPRabLKJONmyGeY08PGlWpiJs-_V6jyXaaTN40oRS2rMKQ9kA4ObkOaF_yDvRTSv_FO5FC8HFrK8LIbSDjdIDnfsjHgY0XrZsqZ5IHK7Fcyqe0dZ4qQxi-KSW52zKN-VLeprKc-t4Kpm4Ho7UWX"/>
            </div>
            <h3 className="font-body-lg text-body-lg text-on-surface mb-1">Top Estival</h3>
            <p className="font-label-md text-label-md text-on-surface-variant">65 €</p>
          </Link>
        </div>
      </section>
    </>
  );
}
