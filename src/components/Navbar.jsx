import { useEffect, useState } from 'react'
import { navLinks, siteConfig } from '../data/content'
import Logo from './Logo'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-kuba-border"
        style={{ backgroundColor: 'rgba(8,8,8,0.92)', backdropFilter: 'blur(12px)' }}
      >
        <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green"
          >
            <Logo />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-widest transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green ${
                  active === link.href ? 'text-kuba-green' : 'text-kuba-dim hover:text-kuba-txt'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-kuba-green text-kuba-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-sm hover:bg-kuba-greenDark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green focus-visible:ring-offset-2 focus-visible:ring-offset-kuba-black"
            >
              Sacar turno
            </a>

            <button
              aria-label="Abrir menú"
              className="lg:hidden flex items-center justify-center w-11 h-11 -mr-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green"
              onClick={() => setMenuOpen(true)}
            >
              <span className="flex flex-col justify-center gap-1.5">
                <span className="block h-px w-6 bg-kuba-txt" />
                <span className="block h-px w-6 bg-kuba-txt" />
                <span className="block h-px w-6 bg-kuba-txt" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-kuba-black flex flex-col">
          <div className="h-16 flex items-center justify-between px-6 border-b border-kuba-border">
            <Logo size="md" />
            <button
              aria-label="Cerrar menú"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-11 h-11 -mr-1.5 text-kuba-txt text-3xl leading-none rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green"
            >
              ×
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-start justify-center gap-6 px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-display text-5xl text-kuba-txt hover:text-kuba-green transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="mt-6 bg-kuba-green text-kuba-black text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green focus-visible:ring-offset-2 focus-visible:ring-offset-kuba-black"
            >
              Sacar turno
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
