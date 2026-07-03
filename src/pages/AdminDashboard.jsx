import { useState } from 'react'
import { CalendarDays, DollarSign, Percent, UserX, AlertTriangle } from 'lucide-react'
import { turnosHoy, clientes, servicios, barberos, stock } from '../data/mock'
import StatsGrid from '../components/StatsGrid'

const CAPACIDAD_POR_BARBERO = 22

const estadoLabels = {
  confirmado: { label: 'Confirmado', classes: 'bg-kuba-green/10 text-kuba-green' },
  completado: { label: 'Completado', classes: 'bg-kuba-green/10 text-kuba-green' },
  no_show: { label: 'No show', classes: 'bg-red-500/10 text-red-500' },
  justificado: { label: 'Justificado', classes: 'bg-yellow-400/10 text-yellow-400' },
}

function precioServicio(id) {
  return servicios.find((s) => s.id === id)?.precio ?? 0
}

export default function AdminDashboard() {
  const [hovered, setHovered] = useState(null)

  const ingresosHoy = turnosHoy
    .filter((t) => t.estado === 'completado')
    .reduce((acc, t) => acc + precioServicio(t.servicioId), 0)

  const capacidadTotal = barberos.length * CAPACIDAD_POR_BARBERO
  const ocupacion = Math.round((turnosHoy.length / capacidadTotal) * 100)

  const noShowsDelMes = clientes.reduce(
    (acc, c) => acc + c.turnos.filter((t) => t.estado === 'no_show').length,
    0,
  )

  const stats = [
    { label: 'Turnos hoy', value: turnosHoy.length, icon: CalendarDays },
    { label: 'Ingresos del día', value: `$${ingresosHoy.toLocaleString('es-AR')}`, icon: DollarSign },
    { label: 'Ocupación', value: `${ocupacion}%`, icon: Percent },
    { label: 'No-shows del mes', value: noShowsDelMes, icon: UserX },
  ]

  const porBarbero = barberos.map((b) => ({
    ...b,
    cantidad: turnosHoy.filter((t) => t.barberoId === b.id).length,
  }))
  const maxTurnos = Math.max(...porBarbero.map((b) => b.cantidad), 1)

  const chartW = 360
  const chartH = 220
  const padL = 30
  const padB = 30
  const barW = 60
  const gap = (chartW - padL - porBarbero.length * barW) / (porBarbero.length + 1)
  const yTicks = [0, Math.ceil(maxTurnos / 2), maxTurnos]

  const ultimosTurnos = [...turnosHoy].slice(-5).reverse()

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-10 text-3xl font-black text-white">DASHBOARD</h1>

      <StatsGrid stats={stats} />

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-kuba-border bg-kuba-card p-6">
          <h2 className="mb-4 text-lg font-bold text-white">Turnos por barbero (hoy)</h2>
          <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full">
            {/* Eje Y */}
            {yTicks.map((tick) => {
              const y = chartH - padB - (tick / maxTurnos) * (chartH - padB - 20)
              return (
                <g key={tick}>
                  <line x1={padL} y1={y} x2={chartW - 5} y2={y} stroke="#222222" strokeWidth="1" />
                  <text x={padL - 8} y={y + 4} fontSize="10" fill="#666666" textAnchor="end">
                    {tick}
                  </text>
                </g>
              )
            })}

            {/* Barras */}
            {porBarbero.map((b, i) => {
              const x = padL + gap * (i + 1) + barW * i
              const barH = (b.cantidad / maxTurnos) * (chartH - padB - 20)
              const y = chartH - padB - barH
              const opacity = 0.4 + 0.6 * (b.cantidad / maxTurnos)
              return (
                <g
                  key={b.id}
                  onMouseEnter={() => setHovered(b.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <rect
                    x={x}
                    y={y}
                    width={barW}
                    height={barH}
                    fill="#C8F000"
                    opacity={opacity}
                    rx="4"
                  />
                  {hovered === b.id && (
                    <g>
                      <rect x={x + barW / 2 - 14} y={y - 24} width="28" height="18" rx="4" fill="#111111" stroke="#C8F000" />
                      <text x={x + barW / 2} y={y - 11} fontSize="10" fill="#C8F000" textAnchor="middle">
                        {b.cantidad}
                      </text>
                    </g>
                  )}
                  <text
                    x={x + barW / 2}
                    y={chartH - padB + 16}
                    fontSize="11"
                    fill="#CCCCCC"
                    textAnchor="middle"
                  >
                    {b.nombre}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-bold text-white">Stock</h2>
          <div className="overflow-x-auto rounded-2xl border border-kuba-border bg-kuba-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase tracking-wide text-white/50">
                <tr>
                  <th className="px-3 py-3 sm:px-5">Producto</th>
                  <th className="px-3 py-3 sm:px-5">Stock actual</th>
                  <th className="hidden px-5 py-3 md:table-cell">Mínimo</th>
                  <th className="px-3 py-3 sm:px-5">Estado</th>
                </tr>
              </thead>
              <tbody>
                {stock.map((p) => {
                  const bajo = p.qty < p.qtyMin
                  return (
                    <tr
                      key={p.id}
                      className="border-t border-kuba-border"
                      style={bajo ? { backgroundColor: 'rgba(255,0,0,0.05)' } : undefined}
                    >
                      <td className="px-3 py-4 font-medium text-white sm:px-5">{p.nombre}</td>
                      <td className="px-3 py-4 text-white/70 sm:px-5">{p.qty}</td>
                      <td className="hidden px-5 py-4 text-white/50 md:table-cell">{p.qtyMin}</td>
                      <td className="px-3 py-4 sm:px-5">
                        {bajo ? (
                          <span className="flex w-fit items-center gap-1 whitespace-nowrap rounded-full bg-red-500/10 px-2 py-1 text-[10px] font-semibold text-red-500 sm:gap-1.5 sm:px-3 sm:text-xs">
                            <AlertTriangle className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" /> Reabastecer
                          </span>
                        ) : (
                          <span className="w-fit rounded-full bg-kuba-green/10 px-2 py-1 text-[10px] font-semibold text-kuba-green sm:px-3 sm:text-xs">
                            OK
                          </span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-lg font-bold text-white">Últimos turnos</h2>
        <div className="overflow-x-auto rounded-2xl border border-kuba-border bg-kuba-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-xs uppercase tracking-wide text-white/50">
              <tr>
                <th className="px-3 py-3 sm:px-5">Hora</th>
                <th className="px-3 py-3 sm:px-5">Cliente</th>
                <th className="px-3 py-3 sm:px-5">Servicio</th>
                <th className="hidden px-5 py-3 md:table-cell">Barbero</th>
                <th className="px-3 py-3 sm:px-5">Estado</th>
              </tr>
            </thead>
            <tbody>
              {ultimosTurnos.map((t) => {
                const cliente = clientes.find((c) => c.id === t.clienteId)
                const servicio = servicios.find((s) => s.id === t.servicioId)
                const barbero = barberos.find((b) => b.id === t.barberoId)
                return (
                  <tr key={t.id} className="border-t border-kuba-border">
                    <td className="px-3 py-4 text-white/70 sm:px-5">{t.hora}</td>
                    <td className="px-3 py-4 font-medium text-white sm:px-5">{cliente?.nombre}</td>
                    <td className="px-3 py-4 text-white/70 sm:px-5">{servicio?.nombre}</td>
                    <td className="hidden px-5 py-4 text-white/70 md:table-cell">{barbero?.nombre}</td>
                    <td className="px-3 py-4 sm:px-5">
                      <span
                        className={`whitespace-nowrap rounded-full px-2 py-1 text-[10px] font-semibold sm:px-3 sm:text-xs ${estadoLabels[t.estado].classes}`}
                      >
                        {estadoLabels[t.estado].label}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
