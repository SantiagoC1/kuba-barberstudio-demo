# Prompt para pegarle a Claude Code — Sesión 1

> Copiá esto y pegalo directo en Claude Code al abrir el proyecto.

---

Quiero que construyas un boceto visual completo y navegable de un sistema de gestión para barberías.
Lee el CLAUDE.md antes de arrancar para entender el contexto, stack y estructura.

El objetivo es tener un prototipo que se pueda mostrar en una reunión mañana: que se vea profesional, tenga datos reales de ejemplo y sea completamente navegable entre todas las vistas.

**Hacelo en este orden, sin pausar a preguntarme:**

1. Creá el proyecto con Vite + React: `npm create vite@latest . -- --template react` y después instalá dependencias: `npm install react-router-dom lucide-react` y Tailwind v3 siguiendo su setup estándar.

2. Creá `src/data/mock.js` con todos los datos de prueba definidos en el CLAUDE.md (barberos, servicios, clientes, turnos de hoy, stock).

3. Construí todas las páginas en este orden:
   - **Landing.jsx**: hero con CTA "Sacar turno", sección de servicios con precios, galería (grid de imágenes placeholder con overlay oscuro), sección del equipo con cards de los 3 barberos, footer con datos del local.
   - **Booking.jsx**: wizard de 3 pasos con stepper visual — Paso 1: elegir servicio (cards con precio y duración), Paso 2: elegir barbero y horario (grid de slots disponibles/ocupados), Paso 3: confirmación con resumen. Botones Atrás/Siguiente entre pasos.
   - **ClientProfile.jsx**: foto y nombre del cliente, badge de reputación (verde/amarillo/rojo con texto explicativo), progress bar de cupones (ej: 3/5 cortes), historial de turnos en tabla con estados coloreados.
   - **BarberPanel.jsx**: vista de agenda del día con lista de turnos ordenados por hora, card por turno con nombre cliente + servicio + hora + badge de reputación del cliente, botones para marcar como "Completado", "Justificado" o "No show" (que cambian el estado con useState).
   - **AdminDashboard.jsx**: 4 stat cards arriba (turnos hoy, ingresos del día, ocupación %, no-shows del mes), gráfico de barras de turnos por barbero (con divs proporcionales, sin librería externa), tabla de stock con columna de alerta cuando qty < min_qty, listado de últimos 5 turnos.

4. Creá `Navbar.jsx` con links a todas las vistas. En mobile debe ser un menú hamburguesa funcional.

5. Configurá `App.jsx` con React Router y todas las rutas.

6. Revisá que `npm run dev` corra sin errores y que todas las rutas sean navegables.

**Paleta a usar en Tailwind:**
- Fondo: bg-[#0D0D0D] y bg-[#1C1C1C] para cards
- Dorado: text-[#C9A84C] y border-[#C9A84C] para acentos
- Texto: text-[#F5F3EE]
- Verde: text-green-400, Amarillo: text-yellow-400, Rojo: text-red-400 para badges

Cuando termines, decime qué ruta abrir para ver cada vista y si hubo algo que no pudiste completar.
