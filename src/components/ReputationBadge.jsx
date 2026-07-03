const styles = {
  green: {
    label: 'Cliente Premium ✓',
    classes: 'border-[#C8F000] text-[#C8F000]',
  },
  yellow: {
    label: 'Atención requerida ⚠',
    classes: 'border-yellow-400 text-yellow-400',
  },
  red: {
    label: 'Cuenta suspendida ✗',
    classes: 'border-red-500 text-red-500',
  },
}

export default function ReputationBadge({ nivel, size = 'md' }) {
  const style = styles[nivel] ?? styles.green
  const sizeClasses = size === 'sm' ? 'text-xs px-2.5 py-1' : 'text-sm px-3 py-1'

  return (
    <span className={`inline-flex items-center rounded-full border font-bold ${style.classes} ${sizeClasses}`}>
      {style.label}
    </span>
  )
}
