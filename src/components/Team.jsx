import { motion } from 'framer-motion'
import { siteConfig, team } from '../data/content'

export default function Team() {
  return (
    <motion.section
      id="equipo"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-kuba-black py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <span className="text-xs uppercase tracking-widest text-kuba-dim whitespace-nowrap">
            Equipo
          </span>
          <span className="h-px flex-1 bg-kuba-border" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-kuba-card border border-kuba-border rounded-sm p-8 flex flex-col items-center text-center transition-colors hover:border-kuba-green"
            >
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-kuba-black border border-kuba-border flex items-center justify-center">
                  <span className="font-display text-3xl text-kuba-green">{member.initial}</span>
                </div>
              )}
              <h3 className="font-display uppercase text-3xl mt-5">{member.name}</h3>
              <span className="text-xs uppercase tracking-widest text-kuba-green mt-2">
                {member.specialty}
              </span>
              <span className="text-xs text-kuba-dim mt-1">{member.role}</span>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 border border-kuba-border text-xs uppercase tracking-widest px-6 py-3 rounded-sm hover:border-kuba-green hover:text-kuba-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kuba-green"
              >
                Reservar con {member.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
