import Link from 'next/link';

export default function Boutique() {
  return (
    <main className="max-w-content-max mx-auto px-8 md:px-gutter pt-section-mobile md:pt-section pb-section">
      <header className="text-center mb-16 md:mb-24 flex flex-col items-center">
        <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-6">COLLECTION EN COURS</span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8">Collection — Mai 2026</h1>
        <div className="w-20 h-px bg-outline-variant/50"></div>
      </header>
      <div className="bg-surface-container py-4 px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 mb-16 md:mb-24 border border-outline-variant/20 rounded">
        <div className="flex flex-wrap gap-4 font-label-md text-label-md uppercase">
          <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full transition-opacity hover:opacity-80">Tous</button>
          <button className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-6 py-2 rounded-full transition-opacity hover:opacity-80">Hauts</button>
          <button className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-6 py-2 rounded-full transition-opacity hover:opacity-80">Robes</button>
          <button className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-6 py-2 rounded-full transition-opacity hover:opacity-80">Pantalons</button>
          <button className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-6 py-2 rounded-full transition-opacity hover:opacity-80">Accessoires</button>
        </div>
        <div className="flex items-center gap-6 font-label-md text-label-md text-on-surface-variant">
          <div className="flex items-center gap-3">
            <span>En stock uniquement</span>
            <button className="w-10 h-5 bg-outline-variant rounded-full relative transition-colors duration-300">
              <div className="w-4 h-4 bg-surface rounded-full absolute left-0.5 top-0.5 shadow-sm"></div>
            </button>
          </div>
          <div className="h-4 w-px bg-outline-variant/50"></div>
          <button className="flex items-center gap-2 hover:text-primary transition-colors">
            Trier par
            <span className="material-symbols-outlined text-xl">expand_more</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-24">
        <div className="md:col-span-8 group cursor-pointer flex flex-col">
          <Link href="/boutique/chemise-lin-naturel">
            <div className="relative w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[16/10] bg-surface-container-high mb-6 overflow-hidden">
              <img alt="Chemise en Lin Naturel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0uhATjmaI_frSDH_W1B357ZgUzlD29Pt5nh0e3uk6sGjftgtnFObK8dx2AFcgW51w5zR1dCNHzCzUIiDOGTz9hPTed0OvrUs2T3PYK0IIau9ka-1R3CvbvtOvu5xv5UNG8yNCjXyHxsMs5N4SB2wbDQZkpe7tbNbq2NRMnUxp_kEDXdn4MhdYUMaJYIbQeS7RMw8QTYoo_4wHry2h_p-T2gCce8WQ4RG2mwDEk8Ai7Lo7naa83IB0GGqHNVr"/>
              <div className="absolute top-4 left-4 bg-surface text-primary font-label-md text-label-md px-4 py-2 uppercase tracking-wider rounded">NOUVEAUTÉ</div>
            </div>
            <div className="flex justify-between items-start">
              <h3 className="font-headline-lg text-headline-lg text-primary">Chemise en Lin Naturel</h3>
              <span className="font-label-md text-label-md text-on-surface-variant">89 €</span>
            </div>
            <p className="text-on-surface-variant mt-2 text-sm md:text-base max-w-md">Un essentiel intemporel, tissé avec soin pour une légèreté absolue.</p>
          </Link>
        </div>
        <div className="md:col-span-4 flex flex-col gap-6 md:gap-8">
          <div className="group cursor-pointer flex flex-col">
            <Link href="/boutique/sac-toile-brute">
              <div className="relative w-full aspect-[3/4] bg-surface-container-high mb-4 overflow-hidden border border-outline-variant/20">
                <img alt="Sac en Toile Brute" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYHuTdYAeu2-cO0e-qlyy9Cd73fXwAy1cdKnPIoE7Ks3igZCpgZGlw7Xw2gpl3sCqBRdz16Ur-lAl4z0bUnJUo97QwQCjFtBwDc35UnF2H0LA3afO4zXhOyoeRgMZ22lNbSCi_QARXcEMGf9qtxODrv_Strp1cNx1FOJMVJArAhKRG8bhcaGTPB6AzXvDzb0-6AHIXU837lTVe9GbYCUl0RB_rIBWhYtGnJGHFFx3UFonMvwLPe4jM6x7a38dpuw1UPrnP8y3buaFh"/>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-headline-lg text-[24px] text-primary">Sac en Toile Brute</h3>
                <span className="font-label-md text-label-md text-on-surface-variant">120 €</span>
              </div>
            </Link>
          </div>
          <div className="group cursor-pointer flex flex-col">
            <Link href="/boutique/sandales-artisanales">
              <div className="relative w-full aspect-[3/4] bg-surface-container-high mb-4 overflow-hidden border border-outline-variant/20">
                <img alt="Sandales Artisanales" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtuIX6EeG3UT9zRC4GqVSh__HdJpI8GFYYzB2Rfgizy-jZJdycboQSPOivdvzcgtGq6gEyquvSD-tifdalTHdFCtjecvjQikwv-L0vKkO8xMq9eHn2ekwz5EBV9r6Ez88u_zOTsJChs84EXL69R9LGMP6Ls8C8YjJSyf3lxWtFfRh0IRQQOtnovmOCDR3W5jCrCII5Qd0IcLi-Wn3mo8zni-CGmcxsNpz3mlTCmQcR4nNa68sm71kDFXpltZYQ_UltT7kDYoJFxWTj"/>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-headline-lg text-[24px] text-primary">Sandales Artisanales</h3>
                <span className="font-label-md text-label-md text-on-surface-variant">145 €</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="md:col-span-4 group cursor-pointer flex flex-col">
          <Link href="/boutique/haut-coton-doux">
            <div className="relative w-full aspect-[3/4] bg-surface-container-high mb-4 overflow-hidden border border-outline-variant/20">
              <img alt="Haut Coton Doux" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0ugtdzfQeaiaSaJdLgTxUco42xC4JJuUIVgJ22cD8us1Vc0HDIzMr-ypdLRoEv7m1_4Wz8MKyzdhnzaHxlt-uAU_u8hT-0BP2ZSGzWXAmMMeeyA4tKztaeiI9stS70zWRIEkYTHXo5CwI8_6BVDPCCFzr_rR_hE9EcE993MitcW9h3GFyFwWgeTYGZBHMa-8BDnUUcxrtE9X5Qvylxr6OVtppwX7FXDQvoy3coUe1GRNuBFxg4VCNqFSAnw2"/>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-headline-lg text-[24px] text-primary">Haut Coton Doux</h3>
              <span className="font-label-md text-label-md text-on-surface-variant">65 €</span>
            </div>
          </Link>
        </div>
        <div className="md:col-span-4 group cursor-pointer flex flex-col relative">
          <Link href="/boutique/robe-soie-sauvage">
            <div className="relative w-full aspect-[3/4] bg-surface-container-high mb-4 overflow-hidden border border-outline-variant/20">
              <div className="absolute inset-0 bg-surface/40 z-10 flex items-center justify-center">
                <span className="bg-surface text-on-surface font-label-md text-label-md px-4 py-2 uppercase tracking-wider border border-outline-variant/30">ÉPUISÉ</span>
              </div>
              <img alt="Robe Soie Sauvage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA8AYsoavugivTMpngFL761Emldu4F8nhO2dRnWCUMNnBBSvtt0YXWi8YXmR0XEB803HguTJyhb1jMBl_ZfoFW86UjXqRxwR6DzArHInOKPGo4FcwlMC4LHVVIXPjXTsMq0UH_rTHw7uAf5luJ8KzzIa4L1tcKPaPMX3vXoWZgbRowQMN4s-9aud98FIc_p3WVsnhO78iSHpnugMrHJrnNGXSAtvMTwBaLvYLCnEujmsPNhncTjUy5g7c4V1BUHNpFAzIUp3Yoxxiu"/>
            </div>
            <div className="flex justify-between items-center opacity-60">
              <h3 className="font-headline-lg text-[24px] text-primary">Robe Soie Sauvage</h3>
              <span className="font-label-md text-label-md text-on-surface-variant">210 €</span>
            </div>
          </Link>
        </div>
        <div className="md:col-span-4 group cursor-pointer flex flex-col">
          <Link href="/boutique/pantalon-fluide">
            <div className="relative w-full aspect-[3/4] bg-surface-container-high mb-4 overflow-hidden border border-outline-variant/20">
              <img alt="Pantalon Fluide" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBORW_qIxSpMgFiL9WSo-CsGCLsY8ck7EU_sjzukm3PXuRwOoMC4Bl0_0oaB16wWXyFphGjH8_7JEJX54uJhKQEeVlbNBOPppoindvvWtsS3SaqdmNVx3rEfDnYfYT2enNV4-j3Tih-7r45UkkPeTGuT2gU_RsXy2Dbf0eKb_ZmeWiQo_1AqrdWjb8ZtMmCvfAPLVgTKPeJD9R5yv2zO-lOPqD00v9pV7vcV05fasAYF63sWt-zDh8XMIThLKsJt2wOCBoMrpoyi1EL"/>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-headline-lg text-[24px] text-primary">Pantalon Fluide</h3>
              <span className="font-label-md text-label-md text-on-surface-variant">110 €</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center mb-32">
        <button className="border border-on-surface text-on-surface font-label-md text-label-md px-12 py-4 uppercase tracking-widest hover:bg-surface-container transition-colors duration-300 rounded">
          Voir plus — 14 pièces restantes
        </button>
      </div>
      <section className="max-w-narrow-max mx-auto border-t border-outline-variant/30 pt-16">
        <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-8 text-center">ARCHIVES</h2>
        <div className="flex flex-col">
          <div className="border-b border-outline-variant/20 py-6">
            <button className="w-full flex justify-between items-center text-left hover:opacity-70 transition-opacity">
              <h3 className="font-headline-lg text-headline-lg text-primary">Collection Hiver 2025</h3>
              <span className="material-symbols-outlined text-2xl text-on-surface-variant">remove</span>
            </button>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pb-4">
              <div className="aspect-square bg-surface-container border border-outline-variant/20 group cursor-pointer overflow-hidden">
                <img alt="Manteau Laine" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_uVtM7v8zWFLr_dtNSPR2Rt__N0UiQyj-ntFYaJqkTpf4iGP1d5k628MoUPhEJ3l0oaxYslv7l88CZ8a49SKtV-_Is0scn4tgwQuiWa0BXPxdEwV6lJ6o_Op5z_VGelHxinUMCW-aOv1K70RtkonJdSTojWYawikankpz5rYqJrXoHGq2kuLpFsf5tnEP8C4hhML6OgYq1h4LNm4mKgXITJegXBtoq-M5ge8-g9xhNV7kiPSGoBlYk1cuGK65ilvXKj2StJ8KKc0y"/>
              </div>
              <div className="aspect-square bg-surface-container border border-outline-variant/20 group cursor-pointer overflow-hidden">
                <img alt="Pull Tricot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzo98Gq5F4uQ4NlTWUIBsvqK2hmK4g4JJZPup4RRFecwh5_qd3jr35IWTFlQu6_sHUPJPQPtyaroZlQoe0TSAsatjTZfJOfRoH9DxI7gBhNXFnF-f8Xlv1sACbz-WJeMG8LZ-O00vXYMGGtHJpsRZfmwMjYTkyt8OHfE0r5u6XLpK61JksXh2B_zgdHUkdEvkVb9CY7udXdLjDGX88klJLZ_4NKH4ZQ-6_mGb974eCCd_8-_-wIzErlxnyGygQ_-NNQooBedAsgkdZ"/>
              </div>
              <div className="aspect-square bg-surface-container border border-outline-variant/20 group cursor-pointer overflow-hidden">
                <img alt="Gants Cuir" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHnnuuYSq-rwknZYfPeI7gFO0RfZRM7GrSs8NLgIIMRMnbmhlT0ldhFLCsFgDK2-WVpA5orWVfwASjpO89FzXb7G_qJ7ueCshme49robGTAak0NM6-bWB7ceNnW51mXjnZlDYPtXq70e-9jx4cRJbBR-gvrIIh3O9zCCyU_tSwp_cpLvU1vpkfQR2-XSOV-ZHpyDp8ZkDH77juHrtyX6xxmjHO0CVnTWCyPvcxalo8dZ0U1hUfhMLGr2jetKmURY194zT_jj9fvj9N"/>
              </div>
              <div className="aspect-square bg-surface-container border border-outline-variant/20 group cursor-pointer overflow-hidden">
                <img alt="Écharpe Tissée" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvr6sNtYgul8474lyxSxxcePn_YehyGzqIKfU59YxU1C64pOqw0kpVKdDJYN0Cj7nw2oKHZ_bnzv4TRW6Wl79_lFpUpyF7BUvo6n6-gKJSkOBzoqcUJL8qAV-iwTFI-pDwIL4pjXZXboypcv7AlFe9CT_BW3fjJ-reQkv5LSYdO36y82ImLLjQfCKytqG-1hMv_WCeGA2EeAhQBN6dXYsafsY6QkxTGGYW1VTTaVpWr_bFdAAP8UzodA_O8yw3h5dqYKC51bfYYFoN"/>
              </div>
            </div>
          </div>
          <div className="border-b border-outline-variant/20 py-6">
            <button className="w-full flex justify-between items-center text-left hover:opacity-70 transition-opacity">
              <h3 className="font-headline-lg text-headline-lg text-primary">Collection Été 2025</h3>
              <span className="material-symbols-outlined text-2xl text-on-surface-variant">add</span>
            </button>
          </div>
          <div className="border-b border-outline-variant/20 py-6">
            <button className="w-full flex justify-between items-center text-left hover:opacity-70 transition-opacity">
              <h3 className="font-headline-lg text-headline-lg text-primary">Collection Printemps 2024</h3>
              <span className="material-symbols-outlined text-2xl text-on-surface-variant">add</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
