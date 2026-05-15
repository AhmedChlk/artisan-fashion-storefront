import type { Product } from "@/types";

const U = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

const FASHION = [
  U("photo-1594938298603-c8148c4b4bf5"),
  U("photo-1515886657613-9f3515b0c78f"),
  U("photo-1509631179647-0177331693ae"),
  U("photo-1558769132-cb1aea458c5e"),
  U("photo-1529139574466-a303027c1d8b"),
  U("photo-1496747611176-843222e1e57c"),
  U("photo-1545291730-faff8ca1d4b0"),
  U("photo-1552902865-b72c031ac5ea"),
  U("photo-1434389677669-e08b4cac3105"),
  U("photo-1483985988355-763728e1935b"),
  U("photo-1490481651871-ab68de25d43d"),
  U("photo-1539109136881-3be0616acf4b"),
  U("photo-1602810318383-e386cc2a3ccf"),
  U("photo-1576566588028-4147f3842f27"),
  U("photo-1517241034903-9a4c3ab12f00"),
  U("photo-1591047139829-d91aecb6caea"),
  U("photo-1591369822096-ffd140ec948f"),
  U("photo-1485518882345-15568b007407"),
];

export const products: Product[] = [
  {
    id: "1",
    slug: "robe-lin-biologique",
    name: "Robe en Lin Biologique",
    material: "100% Lin Biologique",
    price: 320,
    collection: "Mai 2026",
    category: "robes",
    images: [FASHION[0], FASHION[1], FASHION[2]],
    description:
      "Une robe d'une fluidité remarquable, taillée dans un lin biologique certifié. Sa coupe droite et ses finitions soignées en font une pièce intemporelle qui traversera les saisons avec grâce.",
    sizes: [
      { label: "36", available: true },
      { label: "38", available: true },
      { label: "40", available: false },
      { label: "42", available: true },
    ],
    isNew: true,
    details: {
      fabric: "100% Lin GOTS certifié, tissé en France",
      care: [
        "Lavage à 30°C à la main",
        "Ne pas essorer",
        "Séchage à plat",
        "Repassage vapeur",
      ],
      origin: "Confectionné dans notre atelier, Paris",
    },
  },
  {
    id: "2",
    slug: "chemise-lin-naturel",
    name: "Chemise en Lin Naturel",
    material: "100% Lin Naturel",
    price: 185,
    collection: "Mai 2026",
    category: "hauts",
    images: [FASHION[3], FASHION[4], FASHION[5]],
    description:
      "Coupe oversize, col camionneur, manches longues retroussées. Une chemise qui s'adoucit au fil des lavages et porte la patine du temps.",
    sizes: [
      { label: "36", available: true },
      { label: "38", available: true },
      { label: "40", available: true },
      { label: "42", available: true },
    ],
    isNew: true,
    details: {
      fabric: "100% Lin lavé, écru naturel",
      care: ["Lavage à 30°C", "Séchage à plat", "Repassage doux"],
      origin: "Atelier Paris, France",
    },
  },
  {
    id: "3",
    slug: "pantalon-fluide-coton",
    name: "Pantalon Fluide en Coton",
    material: "100% Coton biologique",
    price: 210,
    collection: "Mai 2026",
    category: "pantalons",
    images: [FASHION[6], FASHION[7], FASHION[0]],
    description:
      "Taille haute, jambe ample, ceinture nouée. Un pantalon qui flotte et donne une silhouette élégante.",
    sizes: [
      { label: "36", available: true },
      { label: "38", available: false },
      { label: "40", available: true },
      { label: "42", available: true },
    ],
    details: {
      fabric: "Coton biologique tissé serré, Portugal",
      care: ["Lavage à 30°C", "Repassage moyen"],
      origin: "Confection Paris",
    },
  },
  {
    id: "4",
    slug: "veste-laine-merinos",
    name: "Veste en Laine Mérinos",
    material: "100% Laine Mérinos",
    price: 450,
    collection: "Mai 2026",
    category: "hauts",
    images: [FASHION[8], FASHION[9], FASHION[10]],
    description:
      "Veste structurée, boutonnage simple, poches plaquées. Une pièce sculpturale conçue pour durer.",
    sizes: [
      { label: "36", available: true },
      { label: "38", available: true },
      { label: "40", available: true },
      { label: "42", available: false },
    ],
    isNew: true,
    details: {
      fabric: "Laine mérinos d'Arles, 280g",
      care: ["Nettoyage à sec uniquement"],
      origin: "Tailleur Lyon, France",
    },
  },
  {
    id: "5",
    slug: "blouse-soie-naturelle",
    name: "Blouse en Soie Naturelle",
    material: "100% Soie",
    price: 295,
    collection: "Mai 2026",
    category: "hauts",
    images: [FASHION[11], FASHION[12], FASHION[13]],
    description:
      "Col rond, manches ballons légères, dos drapé. Une blouse qui capte la lumière.",
    sizes: [
      { label: "36", available: false },
      { label: "38", available: false },
      { label: "40", available: false },
      { label: "42", available: false },
    ],
    isSoldOut: true,
    details: {
      fabric: "Soie naturelle 14mm, teinture végétale",
      care: ["Lavage à la main, eau froide", "Séchage à l'ombre"],
      origin: "Atelier Paris",
    },
  },
  {
    id: "6",
    slug: "jupe-midi-coton",
    name: "Jupe Midi en Coton",
    material: "100% Coton",
    price: 165,
    collection: "Mai 2026",
    category: "robes",
    images: [FASHION[14], FASHION[15], FASHION[16]],
    description:
      "Jupe trapèze à mi-mollet, ceinture haute, plis souples. Confort et tenue.",
    sizes: [
      { label: "36", available: true },
      { label: "38", available: true },
      { label: "40", available: true },
      { label: "42", available: true },
    ],
    details: {
      fabric: "Coton lavé biologique, 240g",
      care: ["Lavage à 30°C", "Séchage à plat"],
      origin: "Confection Paris",
    },
  },
  {
    id: "7",
    slug: "manteau-laine-long",
    name: "Manteau Long en Laine",
    material: "Laine vierge mélangée",
    price: 580,
    collection: "Avril 2026",
    category: "hauts",
    images: [FASHION[17], FASHION[0], FASHION[1]],
    description:
      "Coupe droite, ceinture nouée, doublure intérieure soyeuse. Pour les épaules d'hiver.",
    sizes: [
      { label: "36", available: true },
      { label: "38", available: true },
      { label: "40", available: false },
      { label: "42", available: true },
    ],
    details: {
      fabric: "70% laine vierge, 30% cachemire",
      care: ["Nettoyage à sec"],
      origin: "Maison de couture Lyon",
    },
  },
  {
    id: "8",
    slug: "top-jersey-bio",
    name: "Top Jersey Biologique",
    material: "Jersey de coton bio",
    price: 89,
    collection: "Mai 2026",
    category: "hauts",
    images: [FASHION[2], FASHION[3], FASHION[4]],
    description:
      "Manches courtes, encolure dégagée, jersey doux. La base parfaite à porter chaque jour.",
    sizes: [
      { label: "36", available: true },
      { label: "38", available: true },
      { label: "40", available: true },
      { label: "42", available: true },
    ],
    details: {
      fabric: "Jersey de coton biologique, 180g",
      care: ["Lavage machine 30°C", "Séchage à plat"],
      origin: "Tricoteur Roubaix",
    },
  },
  {
    id: "9",
    slug: "ensemble-lin-ecru",
    name: "Ensemble Lin Écru",
    material: "100% Lin",
    price: 395,
    collection: "Mai 2026",
    category: "robes",
    images: [FASHION[5], FASHION[6], FASHION[7]],
    description:
      "Pantalon ample + haut sans manches assortis. Vendu en ensemble coordonné.",
    sizes: [
      { label: "36", available: true },
      { label: "38", available: false },
      { label: "40", available: true },
      { label: "42", available: true },
    ],
    isNew: true,
    details: {
      fabric: "100% Lin lavé, écru naturel",
      care: ["Lavage à 30°C", "Séchage à plat"],
      origin: "Atelier Paris",
    },
  },
  {
    id: "10",
    slug: "cardigan-alpaga",
    name: "Cardigan en Alpaga",
    material: "100% Alpaga",
    price: 340,
    collection: "Avril 2026",
    category: "hauts",
    images: [FASHION[8], FASHION[9], FASHION[10]],
    description:
      "Maille épaisse, col châle, poches profondes. Une pièce chaude et architecturée.",
    sizes: [
      { label: "36", available: false },
      { label: "38", available: false },
      { label: "40", available: false },
      { label: "42", available: false },
    ],
    isSoldOut: true,
    details: {
      fabric: "100% alpaga des Andes, fil 4 brins",
      care: ["Lavage main eau froide", "Séchage à plat"],
      origin: "Tricoteuse Pyrénées",
    },
  },
  {
    id: "11",
    slug: "robe-midi-coton",
    name: "Robe Midi en Coton",
    material: "Popeline de coton",
    price: 245,
    collection: "Mai 2026",
    category: "robes",
    images: [FASHION[11], FASHION[12], FASHION[13]],
    description:
      "Robe boutonnée, col cranté, manches courtes. Une silhouette précise et élégante.",
    sizes: [
      { label: "36", available: true },
      { label: "38", available: true },
      { label: "40", available: true },
      { label: "42", available: false },
    ],
    details: {
      fabric: "Popeline de coton biologique, 130g",
      care: ["Lavage à 30°C", "Repassage moyen"],
      origin: "Confection Paris",
    },
  },
  {
    id: "12",
    slug: "pantalon-large-lin",
    name: "Pantalon Large en Lin",
    material: "100% Lin",
    price: 230,
    collection: "Mai 2026",
    category: "pantalons",
    images: [FASHION[14], FASHION[15], FASHION[16]],
    description:
      "Taille élastique douce, jambe très large, ourlet à la cheville. La fluidité incarnée.",
    sizes: [
      { label: "36", available: true },
      { label: "38", available: true },
      { label: "40", available: true },
      { label: "42", available: true },
    ],
    details: {
      fabric: "Lin lavé, 230g",
      care: ["Lavage à 30°C", "Séchage à plat"],
      origin: "Atelier Paris",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "tous") return products;
  return products.filter((p) => p.category === category);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew && !p.isSoldOut).slice(0, 3);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.slug !== slug && p.collection === current.collection)
    .slice(0, limit);
}
