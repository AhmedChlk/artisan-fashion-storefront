export interface Product {
  id: string;
  slug: string;
  name: string;
  material: string;
  price: number;
  collection: string;
  category: "hauts" | "robes" | "pantalons" | "accessoires";
  images: string[];
  description: string;
  sizes: ProductSize[];
  isNew?: boolean;
  isSoldOut?: boolean;
  details: {
    fabric: string;
    care: string[];
    origin: string;
  };
}

export interface ProductSize {
  label: string;
  available: boolean;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface Collection {
  id: string;
  name: string;
  month: string;
  isActive: boolean;
  productCount: number;
}

export type DeliveryMethod = {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
};

export type CheckoutStep = "panier" | "livraison" | "paiement" | "confirmation";

export type ProductCategory = Product["category"] | "tous";
