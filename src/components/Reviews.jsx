import { motion } from 'framer-motion'
import { reviews } from '../data/content'

export default function Reviews() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-kuba-dark py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <span className="text-xs uppercase tracking-widest text-kuba-dim whitespace-nowrap">
            Reseñas
          </span>
          <span className="h-px flex-1 bg-kuba-border" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.author} className="bg-kuba-card border border-kuba-border rounded-sm p-8">
              <div className="text-kuba-green tracking-widest">★★★★★</div>
              <p className="mt-5 text-sm italic font-light text-kuba-dim leading-relaxed">
                “{r.text}”
              </p>
              <div className="mt-6 text-sm">
                <span className="font-semibold text-kuba-txt">{r.author}</span>
                <span className="text-kuba-dim"> · {r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
