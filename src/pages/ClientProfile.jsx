import { Mail } from 'lucide-react'
import { clientes } from '../data/mock'
import ReputationBadge from '../components/ReputationBadge'
import CouponCard from '../components/CouponCard'

const cliente = clientes.find((c) => c.reputacion === 'green')

const estadoLabels = {
  completado: { label: 'Completado', classes: 'bg-kuba-green/10 text-kuba-green' },
  cancelado: { label: 'Cancelado con aviso', classes: 'bg-white/10 text-white/70' },
  no_show: { label: 'No show', classes: 'bg-red-500/10 text-red-500' },
  justificado: { label: 'Justificado', classes: 'bg-yellow-400/10 text-yellow-400' },
}

export default function ClientProfile() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
        <div>
          <div className="rounded-2xl border border-kuba-border bg-kuba-card p-6 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-kuba-green/40 text-3xl font-black text-kuba-green">
              {cliente.nombre[0]}
            </div>
            <h1 className="mt-4 text-xl font-extrabold text-white">{cliente.nombre}</h1>
            <p className="mt-1 flex items-center justify-center gap-1 text-sm text-white/70">
              <Mail className="h-3.5 w-3.5" /> {cliente.email}
            </p>
            <div className="mt-4 flex justify-center">
              <ReputationBadge nivel={cliente.reputacion} />
            </div>
            {cliente.reputacion === 'red' && (
              <p className="mt-3 text-xs text-red-400">
                Tu cuenta está temporalmente suspendida por no-shows sin aviso. Se reactiva en 7
                días.
              </p>
            )}
          </div>

          <div className="mt-6">
            <CouponCard
              actual={cliente.cortesAcumulados}
              meta={5}
              activo={cliente.cuponActivo}
              codigo={cliente.cuponCodigo}
            />
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold text-white">Historial de turnos</h2>
          <div className="overflow-x-auto rounded-2xl border border-kuba-border bg-kuba-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase tracking-wide text-white/70">
                <tr>
                  <th className="px-3 py-3 sm:px-5">Fecha</th>
                  <th className="hidden px-5 py-3 sm:table-cell">Barbero</th>
                  <th className="px-3 py-3 sm:px-5">Servicio</th>
                  <th className="px-3 py-3 sm:px-5">Estado</th>
                </tr>
              </thead>
              <tbody>
                {cliente.turnos.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-3 py-8 text-center text-white/60 sm:px-5">
                      Sin turnos registrados todavía.
                    </td>
                  </tr>
                )}
                {cliente.turnos.map((t, i) => (
                  <tr key={i} className="border-t border-kuba-border">
                    <td className="px-3 py-4 text-white/70 sm:px-5">{t.fecha}</td>
                    <td className="hidden px-5 py-4 text-white/70 sm:table-cell">{t.barbero}</td>
                    <td className="px-3 py-4 font-medium text-white sm:px-5">{t.servicio}</td>
                    <td className="px-3 py-4 sm:px-5">
                      <span
                        className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${estadoLabels[t.estado].classes}`}
                      >
                        {estadoLabels[t.estado].label}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
