import { Gift, Ticket } from 'lucide-react'

export default function CouponCard({ actual, meta = 5, activo, codigo }) {
  const pct = Math.min(100, Math.round((actual / meta) * 100))
  const faltan = Math.max(0, meta - actual)

  if (activo) {
    return (
      <div className="rounded-2xl border border-kuba-green bg-kuba-green/10 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-kuba-green/20">
            <Ticket className="h-5 w-5 text-kuba-green" />
          </div>
          <div>
            <h3 className="font-bold text-white">¡Tenés un corte gratis!</h3>
            <p className="text-xs text-white/60">Completaste {meta}/{meta} cortes.</p>
          </div>
        </div>
        <div className="mt-5 rounded-lg border border-dashed border-kuba-green/50 bg-kuba-bg py-3 text-center">
          <span className="font-mono text-lg font-bold tracking-widest text-kuba-green">{codigo}</span>
        </div>
        <button className="mt-5 w-full rounded-full bg-kuba-green py-2.5 text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-[1.02]">
          Usar en mi próximo turno
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-kuba-border bg-kuba-card p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-kuba-green/10">
          <Gift className="h-5 w-5 text-kuba-green" />
        </div>
        <div>
          <h3 className="font-bold text-white">Programa de fidelidad</h3>
          <p className="text-xs text-white/70">
            {faltan > 0
              ? `Te faltan ${faltan} corte${faltan === 1 ? '' : 's'} para tu próximo CORTE GRATIS`
              : '¡Ya podés canjear tu corte gratis!'}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-white/60">Progreso</span>
          <span className="font-bold text-kuba-green">
            {actual}/{meta} cortes
          </span>
        </div>
        <div className="w-full bg-[#222] rounded-full h-3">
          <div
            className="h-3 rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, backgroundColor: '#C8F000' }}
          />
        </div>
      </div>
    </div>
  )
}
