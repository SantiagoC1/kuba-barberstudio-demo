import { useState } from 'react'
import { motion } from 'framer-motion'
import { faq } from '../data/content'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-kuba-black py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <span className="text-xs uppercase tracking-widest text-kuba-dim whitespace-nowrap">
            FAQ
          </span>
          <span className="h-px flex-1 bg-kuba-border" />
        </div>

        <div className="max-w-[720px] mx-auto">
          {faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="border-b border-kuba-border">
                <button
                  className="w-full flex items-center justify-between gap-4 py-6 text-left rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                >
                  <span className="font-display uppercase text-xl">{item.q}</span>
                  <span
                    className="font-display text-2xl text-kuba-green transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '600px' : '0px' }}
                >
                  <p className="pb-6 text-sm font-light text-kuba-dim leading-relaxed">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
