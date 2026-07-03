import { CheckCircle2 } from 'lucide-react'

export default function Toast({ message }) {
  return (
    <div className="fixed right-6 top-24 z-[100] flex items-center gap-2 rounded-xl border border-kuba-green bg-kuba-card px-5 py-4 shadow-lg shadow-kuba-green/10 animate-[fadeIn_0.2s_ease-out]">
      <CheckCircle2 className="h-5 w-5 shrink-0 text-kuba-green" />
      <span className="text-sm font-semibold text-white">{message}</span>
    </div>
  )
}
