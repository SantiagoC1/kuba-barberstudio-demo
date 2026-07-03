# Küba Barber Studio — Boceto / Demo

## Qué es esto
Prototipo visual navegable del sistema de gestión para **Küba Barber Studio**.
Objetivo: mostrar el flujo completo al dueño en una reunión.
NO es producción. Prioridad: fidelidad visual a la marca y navegabilidad total.

## Identidad de marca — CRÍTICO
- **Nombre:** Küba Barber Studio (con diéresis en la U)
- **Instagram:** @kuba.barberstudio
- **Dirección:** Eva Perón entre Pte. Perón y Don Bosco
- **Horario:** Lunes a sábado 09:00 a 20:00 hs
- **Color primario:** Verde lima / amarillo Küba → `#C8F000` (el verde-amarillo del logo)
- **Fondo:** Negro profundo → `#0A0A0A` y `#111111` para cards
- **Texto:** Blanco puro `#FFFFFF` y gris claro `#CCCCCC`
- **Acento secundario:** `#8FB800` (verde lima más oscuro para hovers)
- **Estilo:** Urbano, premium, dark mode agresivo — como el story de "Buscando Barberos"
- **Tipografía:** Inter bold/black para títulos, Inter regular para cuerpo

## Stack
- React + Vite (sin backend, todo estado local y datos mock)
- Tailwind CSS v3 con colores custom en tailwind.config.js:
  ```js
  colors: {
    kuba: {
      green: '#C8F000',
      greenDark: '#8FB800',
      bg: '#0A0A0A',
      card: '#111111',
      border: '#222222',
    }
  }
  ```
- React Router v6
- Lucide React para íconos

## Comandos
- Instalar: `npm install`
- Correr: `npm run dev`
- Build: `npm run build`

## Estructura objetivo
```
src/
  pages/
    Landing.jsx          ← Página pública de Küba
    Booking.jsx          ← Wizard de turno (3 pasos)
    ClientProfile.jsx    ← Perfil del cliente
    BarberPanel.jsx      ← Panel del barbero
    AdminDashboard.jsx   ← Panel del dueño
  components/
    Navbar.jsx
    ReputationBadge.jsx
    CouponCard.jsx
    StatsGrid.jsx
  data/
    mock.js
  App.jsx
  main.jsx
```

## Datos mock (mock.js)
**Barberos (3):**
- Fran — Especialidad: Degradés y diseños, 4 años en Küba
- Matías — Especialidad: Barba clásica y navaja, 2 años en Küba
- Diego — Especialidad: Cortes modernos y keratina, 1 año en Küba

**Servicios con precio y duración:**
- Corte clásico — $5.000 — 30 min
- Degradé — $6.500 — 45 min
- Corte + barba — $8.000 — 60 min
- Diseño de barba — $4.000 — 30 min
- Afeitado con navaja — $5.500 — 40 min
- Cejas — $2.500 — 15 min
- Keratina — $9.000 — 60 min
- Combo completo — $11.000 — 90 min

**Clientes (10):** Mix de reputaciones
- 6 verdes (sin problemas)
- 2 amarillos (1-2 no shows)
- 1 rojo (bloqueado temporalmente)
- 1 con cupón activo listo para canjear

**Turnos de hoy (15):** distribuidos entre los 3 barberos, mix de estados

**Stock (8 items):** ceras, navajas, hojas, shampoo, crema de afeitar, toallas, alcohol, talco
— 2 items deben estar bajo el mínimo para mostrar alertas

## Reglas
- Sin backend ni auth real
- Navegación real con React Router
- Todo visualmente rico — sin pantallas vacías
- El color `#C8F000` debe aparecer en: logo, CTAs principales, badges activos, líneas decorativas, íconos clave
- Las cards de turnos y servicios deben tener hover con borde `#C8F000`
- El logo en el Navbar debe ser texto: "KüBA" en bold grande con la U con diéresis, color `#C8F000`, y "BARBER STUDIO" debajo en blanco pequeño
