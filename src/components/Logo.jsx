export default function Logo({ size = 'md' }) {
  const sizes = {
    sm: { main: '20px', sub: '7px' },
    md: { main: '26px', sub: '8px' },
    lg: { main: '36px', sub: '10px' },
  }
  const s = sizes[size]
  return (
    <div>
      <span style={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: s.main,
        color: '#C8F000', letterSpacing: '.1em', lineHeight: 1, display: 'block' }}>
        KüBA
      </span>
      <span style={{ fontSize: s.sub, letterSpacing: '.3em',
        color: 'rgba(232,230,224,.35)', display: 'block', fontFamily: 'Calibri, sans-serif' }}>
        BARBER STUDIO
      </span>
    </div>
  )
}
