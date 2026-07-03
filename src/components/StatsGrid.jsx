export default function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-kuba-border bg-kuba-card p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
              {s.label}
            </span>
            {s.icon && <s.icon className="h-5 w-5 shrink-0 text-kuba-green" />}
          </div>
          <p className="mt-3 text-2xl font-black text-kuba-green sm:text-3xl">{s.value}</p>
          {s.hint && <p className="mt-1 text-xs text-white/40">{s.hint}</p>}
        </div>
      ))}
    </div>
  )
}
