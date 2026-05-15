import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <main>
        {/* 1. Hero Section */}
        <section className="min-h-[921px] flex flex-col md:flex-row relative">
          {/* Left 8 cols: Moody editorial photo */}
          <div className="w-full md:w-2/3 h-[512px] md:h-auto bg-surface-variant relative overflow-hidden">
            <Image
              alt="Hero image"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhLnIHp9ALT07L-mCC4odVxX3tEtgH9RDTkCKRGFagkTtRyST_55TRGkYm0DDUgEKFR9YF5TE3B7DKRvtE0fsv5pDcND1cnTDPij_QTRCGBRqknnQOhsuzNOa6s41q6qjrxoMI5oCETxgj4Nfw_0XkwmH9pCPhprlbNfDvL__09tROQPF-i82k1JZC0YnIb0DgsHfD1g806c_Y54VsjWUmmbiWdf0BiuxTRE3XtGgkgBCKG0q0pE9SxRNNW"
              fill
              priority
              className="absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply opacity-90"
            />
          </div>
          {/* Right 4 cols: Content */}
          <div className="w-full md:w-1/3 flex flex-col justify-center px-gutter py-section-mobile md:py-0 bg-surface">
            <div className="max-w-md mx-auto md:ml-0 md:mr-auto pl-0 md:pl-12">
              <span className="font-label-md text-label-md text-outline uppercase tracking-widest block mb-8">
                COLLECTION — MAI 2026
              </span>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8">
                L&apos;Art du Vêtement Slow.
              </h1>
              <hr className="w-[40px] border-t border-outline-variant mb-8" />
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                Des pièces conçues avec intention, créées pour durer au-delà des saisons. Découvrez notre nouvelle collection où chaque fil raconte une histoire de savoir-faire et de patience.
              </p>
              <Link href="/boutique">
                <button className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 uppercase tracking-widest hover:bg-primary-container transition-colors duration-300">
                  Découvrir la Collection
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Note de l'Artisan */}
        <section className="bg-[#f3ede8] py-section-mobile md:py-section px-gutter">
          <div className="max-w-content-max mx-auto flex flex-col md:flex-row gap-16 items-center">
            {/* Left 4 cols: Portrait */}
            <div className="w-full md:w-4/12 aspect-[3/4] relative overflow-hidden bg-surface-variant">
              <Image
                alt="Artisan portrait"
                src="https://lh3.googleusercontent.com/aida/ADBb0ujOaQwn9FjEI3PABtZH7tf_FNURapqAp1dGCxUOnN0JuIglnRDkbR9Z0WHBi7noPD-DXVQZWIohkSIQrUEpDQRtGX2ygJ_MjXywR3mPvBBpIUMMqzjwC5zNGUrZ5ig8yzLR5v69LyQhxzxWuSfcwwM1HQdo5YGC7T7qKIvhhy4kVMdCBnsNa-jE4lBinvOkonY6dkwXlOHowig0KDIrbOi3W7fwN-IKcr3Bnit3t7HUG25VRxJagwJ6W7Gd"
                fill
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
              />
            </div>
            {/* Right 7 cols: Content */}
            <div className="w-full md:w-7/12 md:pl-16">
              <span className="font-label-md text-label-md text-outline uppercase tracking-widest block mb-6">
                UNE NOTE DE L&apos;ATELIER
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">
                Chaque pièce porte une intention.
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6 max-w-reading-max mb-10">
                <p>
                  Dans un monde qui s&apos;accélère, nous avons choisi de ralentir. Notre processus créatif n&apos;est pas dicté par les tendances éphémères, mais par la recherche constante d&apos;une qualité intemporelle.
                </p>
                <p>
                  Nous sélectionnons minutieusement nos fibres, collaborons avec des tisserands passionnés et prenons le temps nécessaire pour que chaque coupe soit parfaite. C&apos;est ce dévouement au métier qui donne à nos vêtements leur âme singulière.
                </p>
              </div>
              <div className="font-headline-lg text-headline-lg italic text-primary">
                — Marie-Claire
              </div>
            </div>
          </div>
        </section>

        {/* 3. Nouveautés */}
        <section className="py-section-mobile md:py-section px-gutter max-w-content-max mx-auto">
          <div className="flex justify-between items-end mb-16 border-b border-outline-variant/20 pb-4">
            <h2 className="font-display-lg-mobile md:font-headline-lg text-display-lg-mobile md:text-headline-lg text-on-surface">
              Nouveautés
            </h2>
            <Link
              className="font-label-md text-label-md text-primary uppercase tracking-widest hover:opacity-70 transition-opacity flex items-center gap-2"
              href="/boutique"
            >
              Voir tout <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-8">
            {/* Large Card (6 cols) */}
            <Link className="col-span-1 md:col-span-6 group block" href="/boutique/robe-lin-biologique">
              <div className="aspect-[2/3] bg-surface-variant overflow-hidden mb-6 relative">
                <Image
                  alt="Product"
                  src="https://lh3.googleusercontent.com/aida/ADBb0ugtdzfQeaiaSaJdLgTxUco42xC4JJuUIVgJ22cD8us1Vc0HDIzMr-ypdLRoEv7m1_4Wz8MKyzdhnzaHxlt-uAU_u8hT-0BP2ZSGzWXAmMMeeyA4tKztaeiI9stS70zWRIEkYTHXo5CwI8_6BVDPCCFzr_rR_hE9EcE993MitcW9h3GFyFwWgeTYGZBHMa-8BDnUUcxrtE9X5Qvylxr6OVtppwX7FXDQvoy3coUe1GRNuBFxg4VCNqFSAnw2"
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Robe en Lin</h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">Lin naturel non teint</p>
                </div>
                <span className="font-label-md text-label-md text-primary">€320</span>
              </div>
            </Link>

            {/* Stacked Smaller Cards */}
            <div className="col-span-1 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
              {/* Small Card 1 */}
              <Link className="group block" href="/boutique/chemise-lin-naturel">
                <div className="aspect-square bg-surface-variant overflow-hidden mb-6 relative">
                  <Image
                    alt="Product"
                    src="https://lh3.googleusercontent.com/aida/ADBb0uhATjmaI_frSDH_W1B357ZgUzlD29Pt5nh0e3uk6sGjftgtnFObK8dx2AFcgW51w5zR1dCNHzCzUIiDOGTz9hPTed0OvrUs2T3PYK0IIau9ka-1R3CvbvtOvu5xv5UNG8yNCjXyHxsMs5N4SB2wbDQZkpe7tbNbq2NRMnUxp_kEDXdn4MhdYUMaJYIbQeS7RMw8QTYoo_4wHry2h_p-T2gCce8WQ4RG2mwDEk8Ai7Lo7naa83IB0GGqHNVr"
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface text-xl mb-2">Chemise et Pantalon</h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant text-sm">Coton et laine</p>
                  <span className="font-label-md text-label-md text-primary mt-2 block">€280</span>
                </div>
              </Link>
              {/* Small Card 2 */}
              <Link className="group block" href="/boutique/pantalon-fluide-coton">
                <div className="aspect-square bg-surface-variant overflow-hidden mb-6 relative">
                  <Image
                    alt="Product"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6tW56pLKAOJ1SqfiozxA7ECJSPeC9Y7P9dI5DsFkUFgTFlW1cx28IliHH1s8T4sksqZpu58kTH1WkW1Lo6az2tFI6B3FBsJBKkh7SiCYdLPLSvCaG78FHmCMVvXGIFcc8cVDkU4SuwyGRh-VPULCp9mUbJ4OE_HkcWkokq1nWn118wscAD80Q5lxGnrISvRDMi54S5aofIjc6Xhlr9iSQjpxLdwuksADehblBOX0n26dFKGuJ7vswxPUr07IPZCxAuuBQF4Rz-FBY"
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface text-xl mb-2">Pantalon Fluide</h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant text-sm">Lin lavé français</p>
                  <span className="font-label-md text-label-md text-primary mt-2 block">€210</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <span className="inline-block bg-tertiary/10 text-on-surface font-label-md text-label-md px-6 py-2 rounded-full uppercase tracking-widest border border-outline-variant/30">
              20 pièces · Disponible maintenant
            </span>
          </div>
        </section>

        {/* 4. Coulisses */}
        <section className="bg-[#32302d] text-surface py-section-mobile md:py-section px-gutter">
          <div className="max-w-content-max mx-auto text-center">
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-12 max-w-2xl mx-auto">
              Pièces uniques, faites à la main.
            </h2>
            <Link href="/a-propos">
              <button className="border border-surface text-surface font-label-md text-label-md px-8 py-4 uppercase tracking-widest hover:bg-surface hover:text-[#32302d] transition-colors duration-300 mb-20">
                Notre Savoir-Faire
              </button>
            </Link>
            {/* 3 Square Photos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="aspect-square bg-[#4a4743] relative overflow-hidden">
                <Image
                  alt="Atelier detail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOE3ppWb-95sWzue19Gx7yQaFSSM9kL4AXZ5POJZcuSuuwIIrKJ3WaoviFXS9xcxUktcyipRq9kp5cVvvB3LzAsY5-tjRvfLPHDzDKK363V0_3xafHvyAp-8tm99j28-MI2-z57L91by2i_323py6DJPJt3Q9GNlPjmhbamnq4J2jzSJTTdcV5obAF9au4i6wpZCGM4FDvYPLOl3tXIFiNfBoQ-pS9PXA_CSoxyKKri4NCp1IqACDb12FvdCLUpNntf9SBjvq6J58j"
                  fill
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              </div>
              <div className="aspect-square bg-[#4a4743] relative overflow-hidden">
                <Image
                  alt="Atelier detail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCro85F3KZoBkvpHSazHPAnvgs39wr2ND5jiuyihyFl-_NcrXoRFWF1-73D1FOUlOf1pW-lCEV0ASXxolbkQPqhRF7mlCZrjIwrkTP8BSihL0FksuWQ5Hm1M8FHbX7MP6e5iNyLnUE-7Rp8snEGmQczOeL6W2EiugoifOzEU8cqMDC2mW06JDl0TFMlynrvIddBidIvCdYvjSdUdHJaFd9tk_7cQ0osBiEn_wzdpI0Id7v-5hzlUuR49K5iVTtBUfCDFjAHs9N9KSG"
                  fill
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              </div>
              <div className="aspect-square bg-[#4a4743] relative overflow-hidden">
                <Image
                  alt="Atelier detail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcmgLXIVv5fnj3FrrV2tpfzfdMVd1w75TQ4SN4cSL_enx-QugBIiQw5X-UGBYY5qXncniyXAshXLiYxHY3E-m366YY2DbT8R9nRlmjTxs7f5BuF3PVOfYsV0zB-P_rVtKwKvo8nnCk5y_UB05lVf4XTJSuYQY3xMGGZi8041__TXgc-ra2rG0jLYqqq9v6bqUNQ8aDrohDlUzNCCbWE8q7q5NKrQCWDldioKDY8nPnNgn_L_HKX3tk6GEMmgICLRVtJ4goRDt_iv6c"
                  fill
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Newsletter */}
        <section className="py-section-mobile md:py-section px-gutter bg-surface">
          <div className="max-w-narrow-max mx-auto text-center">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
              Rejoindre la Prochaine Collection
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md mx-auto">
              Inscrivez-vous pour être informé de nos nouvelles créations, de nos éditions limitées et des histoires de notre atelier.
            </p>
            <form className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
              <input
                className="flex-grow bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary font-body-lg text-body-lg text-on-surface px-0 py-3 placeholder:text-outline/70 transition-colors"
                placeholder="Votre adresse e-mail"
                type="email"
                required
              />
              <button
                className="bg-primary text-on-primary font-label-md text-label-md px-8 py-3 uppercase tracking-widest hover:bg-primary-container transition-colors duration-300 whitespace-nowrap"
                type="submit"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
