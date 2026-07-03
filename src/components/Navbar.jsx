import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo-kuba.png'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/booking', label: 'Turnos' },
  { to: '/perfil', label: 'Mi Perfil' },
  { to: '/barbero', label: 'Panel Barbero' },
  { to: '/admin', label: 'Admin' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold uppercase tracking-wide transition-colors hover:text-kuba-green ${
      isActive ? 'text-kuba-green' : 'text-white/70'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-kuba-border bg-kuba-bg/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="Küba Barber Studio" className="h-8 w-auto md:h-10" />
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-kuba-border bg-kuba-bg md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `w-full border-b border-[#222] px-6 py-4 text-lg font-semibold uppercase tracking-wide transition-colors hover:text-kuba-green ${
                    isActive ? 'text-kuba-green' : 'text-white/70'
                  }`
                }
                end={link.to === '/'}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
