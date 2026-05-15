"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/ProductCard";
import type { Product } from "@/types";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  },
};

interface ProductGridProps {
  products: Product[];
  layout?: "uniform" | "editorial";
}

export function ProductGrid({ products, layout = "uniform" }: ProductGridProps) {
  if (layout === "editorial" && products.length >= 3) {
    const [feature, a, b, ...rest] = products;
    return (
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-10 lg:gap-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <ProductCard product={feature} variant="feature" priority />
          </motion.div>
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
            <motion.div variants={fadeUp}>
              <ProductCard product={a} variant="standard" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <ProductCard product={b} variant="standard" />
            </motion.div>
          </div>
        </div>

        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rest.map((p) => (
              <motion.div key={p.id} variants={fadeUp}>
                <ProductCard product={p} variant="standard" />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      {products.map((p) => (
        <motion.div key={p.id} variants={fadeUp}>
          <ProductCard product={p} variant="standard" />
        </motion.div>
      ))}
    </motion.div>
  );
}
