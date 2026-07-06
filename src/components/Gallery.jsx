import { motion } from 'framer-motion'
import { gallery, siteConfig } from '../data/content'

export default function Gallery() {
  return (
    <motion.section
      id="trabajos"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-kuba-dark py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <span className="text-xs uppercase tracking-widest text-kuba-dim whitespace-nowrap">
            Trabajos
          </span>
          <span className="h-px flex-1 bg-kuba-border" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4">
          {gallery.map((item, i) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden bg-kuba-card ${
                i === 0 ? 'row-span-2 col-span-2 lg:col-span-1 min-h-[300px]' : 'aspect-square'
              }`}
            >
              <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-[#222] text-6xl select-none">✂</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 left-3 text-[11px] uppercase tracking-widest text-kuba-dim">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-kuba-dim hover:text-kuba-green transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green"
          >
            Ver más en {siteConfig.instagram}
          </a>
        </div>
      </div>
    </motion.section>
  )
}
