import { motion } from 'framer-motion'
import { aboutParagraphs, siteConfig, values } from '../data/content'

export default function About() {
  return (
    <motion.section
      id="nosotros"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-kuba-dark py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <span className="text-xs uppercase tracking-widest text-kuba-dim whitespace-nowrap">
            Nosotros
          </span>
          <span className="h-px flex-1 bg-kuba-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display uppercase text-5xl xl:text-6xl leading-tight">
              Más que un corte.
            </h2>
            <div className="mt-8 space-y-5">
              {aboutParagraphs.map((p) => (
                <p key={p} className="text-sm font-light text-kuba-dim leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 border border-kuba-border text-xs uppercase tracking-widest px-6 py-3 rounded-sm hover:border-kuba-green hover:text-kuba-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green"
            >
              Ver {siteConfig.instagram}
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-kuba-border">
            {values.map((v) => (
              <div key={v.name} className="bg-kuba-card p-6">
                <div className="font-semibold text-kuba-txt">{v.name}</div>
                <p className="mt-2 text-xs text-kuba-dim leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
