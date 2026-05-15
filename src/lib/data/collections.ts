import type { Collection, DeliveryMethod } from "@/types";

export const collections: Collection[] = [
  {
    id: "may-2026",
    name: "Mai 2026",
    month: "Mai 2026",
    isActive: true,
    productCount: 20,
  },
  {
    id: "april-2026",
    name: "Avril 2026",
    month: "Avril 2026",
    isActive: false,
    productCount: 18,
  },
  {
    id: "march-2026",
    name: "Mars 2026",
    month: "Mars 2026",
    isActive: false,
    productCount: 20,
  },
  {
    id: "february-2026",
    name: "Février 2026",
    month: "Février 2026",
    isActive: false,
    productCount: 15,
  },
];

export const deliveryMethods: DeliveryMethod[] = [
  {
    id: "colissimo",
    name: "Colissimo",
    description: "Livraison à domicile, signature optionnelle",
    price: 4.9,
    estimatedDays: "2 à 3 jours ouvrés",
  },
  {
    id: "relais",
    name: "Point Relais",
    description: "Retrait dans un point relais proche de chez vous",
    price: 3.5,
    estimatedDays: "3 à 5 jours ouvrés",
  },
];

export const FREE_SHIPPING_THRESHOLD = 150;
