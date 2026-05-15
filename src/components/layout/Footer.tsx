import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surface-container dark:bg-surface-container-highest border-t border-outline-variant/10 w-full px-gutter py-section flex flex-col md:flex-row justify-between items-start gap-gutter mt-auto">
      {/* Logo Column */}
      <div className="w-full md:w-1/4 mb-12 md:mb-0">
        <Link 
          href="/" 
          className="font-headline-lg text-headline-lg italic text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors duration-200 block mb-6 opacity-80 hover:opacity-100 transition-opacity uppercase"
        >
          THE ARTISAN
        </Link>
        <p className="font-body-lg text-body-lg text-on-surface-variant text-sm max-w-[200px]">
          © {year} THE ARTISAN ATELIER. HANDCRAFTED WITH INTENTION.
        </p>
      </div>

      {/* Links Columns Wrapper */}
      <div className="w-full md:w-3/4 flex flex-col sm:flex-row justify-between gap-12 sm:gap-8">
        
        {/* Navigation Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-2">Navigation</h4>
          <Link href="#" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100">Journal</Link>
          <Link href="#" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100">Sustainability</Link>
          <Link href="#" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100">Care Guide</Link>
        </div>

        {/* Legal Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-2">Légal</h4>
          <Link href="#" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100">Shipping</Link>
          <Link href="/contact" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100">Contact</Link>
          <Link href="#" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100">Mentions Légales</Link>
        </div>

        {/* Réseaux Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-2">Réseaux</h4>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100">Instagram</a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100">Pinterest</a>
        </div>
        
      </div>
    </footer>
  );
}
