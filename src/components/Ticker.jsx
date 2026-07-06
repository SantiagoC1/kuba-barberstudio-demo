const TICKER_TEXT =
  'KüBA · BARBER STUDIO · DEGRADÉS · BARBA CLÁSICA · DISEÑO DE CEJAS · AFEITADO CON NAVAJA · CORTES DE NIVEL · EXPERIENCIA PREMIUM · LUNES A SÁBADOS · LA PLATA ·'

export default function Ticker() {
  return (
    <div className="mt-16 bg-kuba-green overflow-hidden py-[10px]">
      <div className="flex whitespace-nowrap ticker-track">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="flex-none px-4 text-kuba-black"
            style={{ fontFamily: 'Bebas Neue', letterSpacing: '.15em', fontSize: '14px' }}
          >
            {TICKER_TEXT}
          </span>
        ))}
      </div>
    </div>
  )
}
