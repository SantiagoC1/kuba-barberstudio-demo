import { navLinks, siteConfig } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-kuba-black border-t border-kuba-border py-16">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-3 gap-10">
        <div>
          <Logo />
          <p className="mt-3 text-xs text-kuba-dim max-w-[220px]">
            La barbería de referencia en La Plata.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-kuba-dim hover:text-kuba-green transition-colors w-fit rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-kuba-dim hover:text-kuba-green transition-colors w-fit"
          >
            Sacar turno
          </a>
        </div>

        <div className="flex flex-col gap-2 text-xs text-kuba-dim">
          <span>{siteConfig.address}</span>
          <span>{siteConfig.hours}</span>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-kuba-green transition-colors w-fit rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green"
          >
            {siteConfig.instagram}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-kuba-border flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-kuba-dim">
        <span>© {year} Küba Barber Studio. Todos los derechos reservados.</span>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-kuba-green transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green"
        >
          {siteConfig.instagram}
        </a>
      </div>
    </footer>
  )
}
