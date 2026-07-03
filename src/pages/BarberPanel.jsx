import { useState } from 'react'
import { CheckCircle2, ShieldAlert, XCircle, Ticket } from 'lucide-react'
import { turnosHoy as turnosIniciales, clientes, servicios, barberos } from '../data/mock'
import ReputationBadge from '../components/ReputationBadge'

export default function BarberPanel() {
  const [barberoId, setBarberoId] = useState(barberos[0].id)
  const [turnos, setTurnos] = useState(turnosIniciales)

  const cambiarEstado = (id, estado) => {
    setTurnos((prev) => prev.map((t) => (t.id === id ? { ...t, estado } : t)))
  }

  const turnosBarbero = turnos
    .filter((t) => t.barberoId === barberoId)
    .sort((a, b) => a.hora.localeCompare(b.hora))

  const completados = turnosBarbero.filter((t) => t.estado === 'completado').length
  const pendientes = turnosBarbero.filter((t) => t.estado === 'confirmado').length

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-black text-white">AGENDA DE HOY</h1>
        <select
          value={barberoId}
          onChange={(e) => setBarberoId(e.target.value)}
          className="cursor-pointer rounded-lg border border-[#C8F000] bg-[#1a1a1a] px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-[#C8F000]"
        >
          {barberos.map((b) => (
            <option key={b.id} value={b.id} style={{ background: '#1a1a1a' }}>
              {b.nombre}
            </option>
          ))}
        </select>
      </div>

      <p className="mb-8 text-sm font-semibold text-white/70">
        Turnos hoy: <span className="text-kuba-green">{turnosBarbero.length}</span> · Completados:{' '}
        <span className="text-kuba-green">{completados}</span> · Pendientes:{' '}
        <span className="text-kuba-green">{pendientes}</span>
      </p>

      <div className="space-y-4">
        {turnosBarbero.length === 0 && (
          <p className="py-12 text-center text-white/40">No hay turnos asignados hoy.</p>
        )}
        {turnosBarbero.map((t) => {
          const cliente = clientes.find((c) => c.id === t.clienteId)
          const servicio = servicios.find((s) => s.id === t.servicioId)
          return (
            <div
              key={t.id}
              className="flex flex-col gap-4 rounded-2xl border border-kuba-border bg-kuba-card p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex w-16 shrink-0 flex-col items-center">
                  <span className="text-2xl font-black text-kuba-green md:text-3xl">{t.hora}</span>
                </div>
                <div>
                  <p className="font-bold text-white">{cliente.nombre}</p>
                  <p className="text-sm text-white/50">
                    {servicio.nombre} · {servicio.duracion} min
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <ReputationBadge nivel={cliente.reputacion} size="sm" />
                    {cliente.cuponActivo && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-kuba-green bg-kuba-green/10 px-2.5 py-1 text-xs font-bold text-kuba-green">
                        <Ticket className="h-3 w-3" /> Viene con cupón — no cobrar
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <button
                  onClick={() => cambiarEstado(t.id, 'completado')}
                  disabled={t.estado === 'completado'}
                  className={`flex items-center justify-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors disabled:cursor-not-allowed ${
                    t.estado === 'completado'
                      ? 'border-kuba-green bg-kuba-green/20 text-kuba-green'
                      : 'border-kuba-border text-white/60 hover:border-kuba-green/50 hover:text-kuba-green'
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" /> Completado
                </button>
                <button
                  onClick={() => cambiarEstado(t.id, 'justificado')}
                  disabled={t.estado === 'justificado'}
                  className={`flex items-center justify-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors disabled:cursor-not-allowed ${
                    t.estado === 'justificado'
                      ? 'border-yellow-400 bg-yellow-400/20 text-yellow-400'
                      : 'border-kuba-border text-white/60 hover:border-yellow-400/50 hover:text-yellow-400'
                  }`}
                >
                  <ShieldAlert className="h-3.5 w-3.5" /> Justificado
                </button>
                <button
                  onClick={() => cambiarEstado(t.id, 'no_show')}
                  disabled={t.estado === 'no_show'}
                  className={`flex items-center justify-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors disabled:cursor-not-allowed ${
                    t.estado === 'no_show'
                      ? 'border-red-500 bg-red-500/20 text-red-500'
                      : 'border-kuba-border text-white/60 hover:border-red-500/50 hover:text-red-500'
                  }`}
                >
                  <XCircle className="h-3.5 w-3.5" /> No show
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
