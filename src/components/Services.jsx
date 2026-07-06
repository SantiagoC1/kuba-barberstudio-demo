import { motion } from 'framer-motion'
import { services } from '../data/content'

export default function Services() {
  return (
    <motion.section
      id="servicios"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-kuba-black py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <span className="text-xs uppercase tracking-widest text-kuba-dim whitespace-nowrap">
            Servicios
          </span>
          <span className="h-px flex-1 bg-kuba-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-kuba-border border border-kuba-border rounded-sm overflow-hidden">
          {services.map((s) => (
            <div
              key={s.name}
              className={`p-6 flex flex-col transition-colors hover:bg-[#1c1c1c] ${
                s.name === 'Combo completo' ? 'bg-kuba-dark' : 'bg-kuba-card'
              }`}
            >
              <span className="text-2xl text-kuba-dim">{s.icon}</span>
              <h3 className="font-display uppercase text-2xl mt-4">{s.name}</h3>
              <p className="mt-2 text-xs text-kuba-dim leading-relaxed flex-1">{s.desc}</p>
              <div className="h-px bg-kuba-border my-5" />
              <div className="flex items-end justify-between">
                <span className="font-display text-3xl text-kuba-green">{s.price}</span>
                <span className="text-[11px] uppercase tracking-widest text-kuba-dim">
                  {s.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-kuba-dim">
          Los precios pueden variar según el largo o la complejidad del trabajo. Consultá con tu barbero.
        </p>
      </div>
    </motion.section>
  )
}
