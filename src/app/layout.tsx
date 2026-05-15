import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: { default: "L'Artisan — Slow Fashion", template: "%s | L'Artisan" },
  description: "Vêtements artisanaux faits à la main. Collections mensuelles limitées. Chaque pièce porte une intention.",
  keywords: ["slow fashion", "artisan", "vêtements faits main", "collection capsule"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "L'Artisan",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="bg-surface text-on-surface antialiased font-body">
        <Navigation />
        <CartDrawer />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
