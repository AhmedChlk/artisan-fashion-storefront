"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[88vh]">
        <div className="relative lg:col-span-7 h-[70vh] lg:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80&auto=format&fit=crop"
            alt="Atelier de couture artisanale"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          className="lg:col-span-5 flex flex-col justify-center px-margin-mobile lg:pl-12 lg:pr-margin py-section-mobile lg:py-0"
        >
          <span className="text-label-md uppercase text-on-surface-variant">
            Collection — Mai 2026
          </span>
          <h1 className="mt-6 font-display text-display-mobile lg:text-display-xl text-on-surface leading-[1.05]">
            L&apos;Art du
            <br />
            Vêtement
            <br />
            <em className="not-italic text-primary">Slow.</em>
          </h1>
          <hr className="my-8 w-10 border-t border-outline-variant" />
          <p className="text-body-lg text-on-surface-variant max-w-md">
            Pièces uniques cousues à la main dans notre atelier parisien.
            Matières vivantes, gestes lents, attention aux détails.
          </p>
          <div className="mt-10">
            <Link href="/boutique">
              <Button size="lg">Découvrir la Collection</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
