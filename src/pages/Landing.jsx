import { Link } from 'react-router-dom'
import { Scissors, MapPin, Clock, Instagram, Sparkles, Flame, Layers, Eye, Droplet } from 'lucide-react'
import { servicios, barberos } from '../data/mock'

const galeriaItems = [
  { label: 'Degradé fade', icon: Scissors, gradient: 'linear-gradient(135deg, #1a1a1a 0%, #0f1a00 100%)' },
  { label: 'Barba clásica', icon: Flame, gradient: 'linear-gradient(135deg, #111 0%, #1a2200 100%)' },
  { label: 'Diseño', icon: Sparkles, gradient: 'linear-gradient(135deg, #0d0d0d 0%, #141f00 100%)' },
  { label: 'Corte + barba', icon: Layers, gradient: 'linear-gradient(135deg, #131313 0%, #172000 100%)' },
  { label: 'Cejas', icon: Eye, gradient: 'linear-gradient(135deg, #0f0f0f 0%, #101a00 100%)' },
  { label: 'Keratina', icon: Droplet, gradient: 'linear-gradient(135deg, #121212 0%, #182300 100%)' },
]

export default function Landing() {
  return (
    <div className="bg-kuba-bg">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden border-b border-kuba-border">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, rgba(200,240,0,0.05) 0%, rgba(10,10,10,0) 60%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-black leading-[1.05] md:text-7xl">
            <span className="block text-white">TU PRÓXIMO</span>
            <span className="block text-kuba-green">CORTE PERFECTO</span>
          </h1>
          <p className="mt-6 text-base text-white/60 sm:text-lg">
            Küba Barber Studio · Lunes a sábados 09 a 20 hs · Eva Perón entre Pte. Perón y Don
            Bosco
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link
              to="/booking"
              className="w-full bg-[#C8F000] text-black font-bold px-8 py-3 rounded-lg hover:bg-[#8FB800] transition-colors text-sm uppercase tracking-wide md:w-auto"
            >
              Sacar turno
            </Link>
            <a
              href="#servicios"
              className="w-full rounded-full border border-kuba-green px-8 py-3 text-sm font-bold uppercase tracking-wide text-kuba-green transition-colors hover:bg-kuba-green/10 md:w-auto"
            >
              Ver servicios
            </a>
          </div>
          <div className="mx-auto mt-10 h-px w-32 bg-kuba-green" />
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-6 w-1 bg-kuba-green" />
          <h2 className="text-3xl font-black text-white sm:text-4xl">NUESTROS SERVICIOS</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s) => (
            <div
              key={s.id}
              className="group rounded-2xl border border-kuba-border bg-kuba-card p-6 transition-colors hover:border-kuba-green"
            >
              <h3 className="text-base font-bold text-white">{s.nombre}</h3>
              <p className="mt-2 hidden text-sm text-white/50 sm:block">{s.descripcion}</p>
              <div className="mt-6 flex items-end justify-between">
                <span className="flex items-center gap-1 text-xs text-white/40">
                  <Clock className="h-3.5 w-3.5" />
                  {s.duracion} min
                </span>
                <span className="text-xl font-black text-kuba-green">
                  ${s.precio.toLocaleString('es-AR')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section className="border-y border-kuba-border bg-kuba-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-6 w-1 bg-kuba-green" />
            <h2 className="text-3xl font-black text-white sm:text-4xl">NUESTRO TRABAJO</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {galeriaItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-xl"
                  style={{ background: item.gradient }}
                >
                  <Icon
                    style={{ width: 48, height: 48, color: '#C8F000' }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/60 px-3 py-2 text-center">
                    <span className="text-sm font-semibold text-white">{item.label}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-6 w-1 bg-kuba-green" />
          <h2 className="text-3xl font-black text-white sm:text-4xl">EL EQUIPO</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {barberos.map((b) => (
            <div
              key={b.id}
              className="flex flex-col items-center gap-4 rounded-2xl border border-kuba-border bg-kuba-card p-8 text-center transition-colors hover:border-kuba-green"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-kuba-green bg-kuba-bg text-3xl font-black text-kuba-green">
                {b.inicial}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{b.nombre}</h3>
                <p className="mt-1 text-sm text-kuba-green">{b.especialidad}</p>
                <p className="mt-1 text-xs text-white/40">
                  {b.anios} {b.anios === 1 ? 'año' : 'años'} en Küba
                </p>
              </div>
              <Link
                to="/booking"
                className="mt-2 rounded-full border border-kuba-green px-6 py-2 text-xs font-bold uppercase tracking-wide text-kuba-green transition-colors hover:bg-kuba-green hover:text-black"
              >
                Reservar
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-kuba-border bg-[#050505] py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="font-black text-3xl text-kuba-green">KüBA</span>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/50">
            <MapPin className="h-4 w-4 text-kuba-green" />
            Eva Perón entre Pte. Perón y Don Bosco, La Plata
          </p>
          <p className="mt-2 flex items-center justify-center gap-2 text-sm text-white/50">
            <Clock className="h-4 w-4 text-kuba-green" />
            Lunes a sábado 09:00 a 20:00 hs
          </p>
          <p className="mt-2 flex items-center justify-center gap-2 text-sm text-white/50">
            <Instagram className="h-4 w-4 text-kuba-green" />
            @kuba.barberstudio
          </p>
          <p className="mt-8 text-xs text-white/30">© 2026 Küba Barber Studio.</p>
        </div>
      </footer>
    </div>
  )
}
