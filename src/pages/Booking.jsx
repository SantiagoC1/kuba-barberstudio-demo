import { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Clock, Check, ArrowLeft, ArrowRight } from 'lucide-react'
import { servicios, barberos } from '../data/mock'
import Toast from '../components/Toast'

const STEPS = ['Servicio', 'Barbero y horario', 'Confirmación']

function generarHorarios() {
  const horarios = []
  for (let h = 9; h <= 19; h++) {
    horarios.push(`${String(h).padStart(2, '0')}:00`)
    if (h < 19.5) horarios.push(`${String(h).padStart(2, '0')}:30`)
  }
  return horarios
}
const HORARIOS = generarHorarios()

function ocupados(barberoId) {
  const seed = { b1: [1, 3, 6, 9, 14], b2: [0, 4, 5, 10, 16], b3: [2, 3, 7, 11, 12, 18] }
  return new Set((seed[barberoId] ?? []).map((i) => HORARIOS[i]))
}

export default function Booking() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [servicioId, setServicioId] = useState(null)
  const [barberoId, setBarberoId] = useState(null)
  const [horario, setHorario] = useState(null)
  const [showToast, setShowToast] = useState(false)

  const servicio = servicios.find((s) => s.id === servicioId)
  const barbero = barberos.find((b) => b.id === barberoId)
  const slotsOcupados = useMemo(() => (barberoId ? ocupados(barberoId) : new Set()), [barberoId])

  useEffect(() => {
    if (!showToast) return
    const timer = setTimeout(() => navigate('/perfil'), 2000)
    return () => clearTimeout(timer)
  }, [showToast, navigate])

  function next() {
    if (step < 3) setStep(step + 1)
  }
  function back() {
    if (step > 1) setStep(step - 1)
  }
  function confirmar() {
    setShowToast(true)
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {showToast && <Toast message="✓ Turno confirmado en Küba Barber Studio" />}

      <div className="mb-4 text-center">
        <h1 className="text-3xl font-black text-white sm:text-4xl">SACAR TURNO</h1>
      </div>

      {/* Stepper */}
      <div className="mx-auto mb-12 flex max-w-2xl items-center justify-between">
        {STEPS.map((label, i) => {
          const n = i + 1
          const done = n < step
          const active = n === step
          const circleStyle = done
            ? { borderColor: '#C8F000', backgroundColor: '#C8F000', color: '#000000' }
            : active
              ? { borderColor: '#C8F000', color: '#C8F000' }
              : { borderColor: '#444444', color: '#666666' }
          const labelStyle = done ? { color: '#C8F000' } : active ? { color: '#FFFFFF' } : { color: '#555555' }
          return (
            <div key={label} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-2">
                <div
                  style={circleStyle}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors"
                >
                  {done ? <Check className="h-5 w-5" /> : n}
                </div>
                <span style={labelStyle} className="hidden text-xs font-medium sm:block">
                  {label}
                </span>
              </div>
              {n < STEPS.length && (
                <div
                  style={{ backgroundColor: done ? '#C8F000' : '#333333' }}
                  className="mx-3 h-0.5 flex-1 transition-colors"
                />
              )}
            </div>
          )
        })}
      </div>

      {step === 1 && (
        <div>
          <h2 className="mb-6 text-xl font-bold text-white">Elegí tu servicio</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {servicios.map((s) => (
              <button
                key={s.id}
                onClick={() => setServicioId(s.id)}
                className={`rounded-2xl border p-6 text-left transition-colors ${
                  servicioId === s.id
                    ? 'border-kuba-green bg-kuba-green/10'
                    : 'border-kuba-border bg-kuba-card hover:border-kuba-green/50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-white">{s.nombre}</h3>
                  {servicioId === s.id && <Check className="h-5 w-5 shrink-0 text-kuba-green" />}
                </div>
                <p className="mt-1 text-xs text-white/50">{s.descripcion}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-white/50">
                    <Clock className="h-3.5 w-3.5" /> {s.duracion} min
                  </span>
                  <span className="font-black text-kuba-green">${s.precio.toLocaleString('es-AR')}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="mb-6 text-xl font-bold text-white">Elegí barbero y horario</h2>
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {barberos.map((b) => (
              <button
                key={b.id}
                onClick={() => {
                  setBarberoId(b.id)
                  setHorario(null)
                }}
                className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition-colors ${
                  barberoId === b.id
                    ? 'border-kuba-green bg-kuba-green/10'
                    : 'border-kuba-border bg-kuba-card hover:border-kuba-green/50'
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-kuba-green text-lg font-black text-kuba-green">
                  {b.inicial}
                </div>
                <div>
                  <p className="font-bold text-white">{b.nombre}</p>
                  <p className="text-xs text-white/50">{b.especialidad}</p>
                </div>
              </button>
            ))}
          </div>

          {barberoId && (
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
                Horarios disponibles hoy
              </h3>
              <div className="grid grid-cols-3 gap-3 md:grid-cols-4">
                {HORARIOS.map((h) => {
                  const ocupado = slotsOcupados.has(h)
                  return (
                    <button
                      key={h}
                      disabled={ocupado}
                      onClick={() => setHorario(h)}
                      className={`rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
                        ocupado
                          ? 'cursor-not-allowed border-kuba-border bg-white/5 text-white/20'
                          : horario === h
                            ? 'border-kuba-green bg-kuba-green text-black'
                            : 'border-kuba-border bg-kuba-card text-white hover:border-kuba-green'
                      }`}
                    >
                      {ocupado ? 'Ocupado' : h}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="mx-auto max-w-lg">
          <h2 className="mb-6 text-xl font-bold text-white">Confirmá tu turno</h2>
          <div className="space-y-4 rounded-2xl border border-kuba-border bg-kuba-card p-6">
            <div className="flex items-center justify-between border-b border-kuba-border pb-4">
              <span className="text-white/50">Servicio</span>
              <span className="font-semibold text-white">{servicio?.nombre}</span>
            </div>
            <div className="flex items-center justify-between border-b border-kuba-border pb-4">
              <span className="text-white/50">Barbero</span>
              <span className="font-semibold text-white">{barbero?.nombre}</span>
            </div>
            <div className="flex items-center justify-between border-b border-kuba-border pb-4">
              <span className="text-white/50">Fecha</span>
              <span className="font-semibold text-white">Hoy</span>
            </div>
            <div className="flex items-center justify-between border-b border-kuba-border pb-4">
              <span className="text-white/50">Horario</span>
              <span className="font-semibold text-white">{horario}</span>
            </div>
            <div className="flex items-center justify-between pt-2 text-lg">
              <span className="font-bold text-white">Total</span>
              <span className="font-black text-kuba-green">${servicio?.precio.toLocaleString('es-AR')}</span>
            </div>
          </div>
          <button
            onClick={confirmar}
            disabled={showToast}
            className="mt-6 w-full rounded-full bg-kuba-green py-3 text-sm font-bold uppercase tracking-wide text-black disabled:opacity-60"
          >
            Confirmar turno
          </button>
        </div>
      )}

      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={back}
          disabled={step === 1}
          className={`flex w-full items-center justify-center gap-2 rounded-lg border border-kuba-border px-6 py-3 text-sm font-bold uppercase tracking-wide sm:w-auto ${
            step === 1 ? 'cursor-not-allowed text-white/20' : 'text-white/70 hover:border-kuba-green/50'
          }`}
        >
          <ArrowLeft className="h-4 w-4" /> Atrás
        </button>
        {step < 3 && (
          <button
            onClick={next}
            disabled={(step === 1 && !servicioId) || (step === 2 && (!barberoId || !horario))}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#C8F000] px-8 py-3 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-[#8FB800] disabled:cursor-not-allowed disabled:opacity-30 sm:w-auto"
          >
            Siguiente <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}
