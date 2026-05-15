import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { formatPrice } from "@/lib/utils/formatPrice";
import { Badge } from "./Badge";
import type { Product } from "@/types";

type Variant = "standard" | "feature" | "small";

interface ProductCardProps {
  product: Product;
  variant?: Variant;
  priority?: boolean;
  className?: string;
}

const aspects: Record<Variant, string> = {
  feature: "aspect-[2/3]",
  standard: "aspect-[3/4]",
  small: "aspect-square",
};

export function ProductCard({
  product,
  variant = "standard",
  priority = false,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={`/boutique/${product.slug}`}
      className={cn("group block", className)}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-surface-container",
          aspects[variant],
        )}
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className={cn(
            "object-cover transition-transform duration-500 ease-editorial",
            product.isSoldOut
              ? "opacity-50"
              : "group-hover:scale-[1.04]",
          )}
        />
        {product.isNew && !product.isSoldOut && (
          <div className="absolute top-3 left-3">
            <Badge tone="new">Nouveauté</Badge>
          </div>
        )}
        {product.isSoldOut && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-4 py-2 bg-surface/90 text-on-surface text-label-md uppercase">
              Épuisé
            </span>
          </div>
        )}
      </div>
      <div className="pt-4 flex flex-col gap-1">
        <span className="text-label-md uppercase text-on-surface-muted">
          {product.material}
        </span>
        <h3 className="font-display text-headline-sm text-on-surface">
          {product.name}
        </h3>
        <span className="font-mono text-price-md text-on-surface">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}
