import { motion } from 'framer-motion'
import { siteConfig } from '../data/content'

export default function Hero() {
  return (
    <section className="bg-kuba-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[85vh]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col justify-center px-6 lg:px-12 pt-12 pb-10 md:pt-16 md:pb-12"
        >
          <span className="text-xs uppercase tracking-widest text-kuba-dim mb-6">
            {siteConfig.address}
          </span>
          <h1 className="font-display uppercase leading-[0.9] text-7xl xl:text-9xl">
            El corte
            <br />
            que
            <br />
            <span className="text-kuba-green">te define.</span>
          </h1>
          <p className="mt-8 max-w-md text-sm font-light text-kuba-dim">
            Küba Barber Studio es la barbería de referencia en La Plata. Cortes de
            precisión, barba clásica y una experiencia que no se olvida.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-kuba-green text-kuba-black text-xs font-bold uppercase tracking-widest px-7 py-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green focus-visible:ring-offset-2 focus-visible:ring-offset-kuba-black"
            >
              Sacar turno
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="#servicios"
              className="border border-kuba-border text-kuba-txt text-xs font-bold uppercase tracking-widest px-7 py-4 rounded-sm hover:border-kuba-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green"
            >
              Ver servicios
            </motion.a>
          </div>
        </motion.div>

        <div className="relative min-h-[360px] lg:min-h-0">
          <div className="absolute inset-0 bg-kuba-card flex items-center justify-center">
            <span className="text-[#1c1c1c] text-[10rem] select-none">✂</span>
          </div>
          <div
            className="hidden lg:block absolute inset-y-0 left-0 w-24"
            style={{ background: 'linear-gradient(to right, #080808, transparent)' }}
          />
          <div className="absolute bottom-0 right-0 left-0 lg:left-auto lg:w-64 grid grid-cols-2 bg-kuba-black border-t border-kuba-border">
            <div className="px-6 py-5 border-r border-kuba-border">
              <div className="font-display text-3xl text-kuba-txt">3</div>
              <div className="text-[11px] uppercase tracking-widest text-kuba-dim mt-1">Barberos</div>
            </div>
            <div className="px-6 py-5">
              <div className="font-display text-3xl text-kuba-txt">{siteConfig.followers}</div>
              <div className="text-[11px] uppercase tracking-widest text-kuba-dim mt-1">Seguidores</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
