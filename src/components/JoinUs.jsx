import { motion } from 'framer-motion'
import { siteConfig } from '../data/content'

export default function JoinUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-kuba-dark py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-kuba-card border border-kuba-border rounded-sm p-10 flex flex-col sm:flex-row items-center justify-between gap-8">
          <h3 className="font-display uppercase text-3xl lg:text-4xl text-center sm:text-left leading-tight">
            ¿Sos barbero?
            <br />
            <span className="text-kuba-green">Sumate al equipo.</span>
          </h3>
          <motion.a
            whileHover={{ scale: 1.02 }}
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-kuba-green text-kuba-black text-xs font-bold uppercase tracking-widest px-7 py-4 rounded-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green focus-visible:ring-offset-2 focus-visible:ring-offset-kuba-card"
          >
            Contactar por Instagram
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}
