# KüBA Barber Studio — Landing Institucional

## Contexto del proyecto

Küba Barber Studio es una barbería premium de La Plata, Buenos Aires, Argentina.
Este proyecto es la **landing institucional** (la cara pública de la marca), separada del sistema de turnos que ya existe.

**Cliente:** Fran Balducci — fundador y barbero principal de Küba  
**Instagram:** @kuba.barberstudio  
**Dirección:** Eva Perón entre Pte. Perón y Don Bosco, La Plata  
**Horario:** Lunes a sábados 09:00 a 20:00 hs  
**Seguidores IG:** ~807  

---

## Objetivo del sitio

Una landing de una sola página (scroll) que funcione como **vitrina de marca premium**:
- Transmitir que Küba no es una barbería genérica — es una experiencia de nivel
- Convertir visitantes en clientes que saquen turno
- Mostrar el equipo, los trabajos y los servicios con identidad visual fuerte
- Tener un nivel visual comparable a SOTA Studio (Toronto) y Sevenn Estudio (Mar del Plata)

El botón "Sacar turno" conecta al sistema de booking que ya existe en GitHub Pages.  
URL del sistema de turnos: **https://SantiagoC1.github.io/kuba-barberstudio-demo/**

---

## Stack

- **React 18 + Vite** (mismo stack que el boceto de turnos)
- **Tailwind CSS v3** con colores custom en `tailwind.config.js`
- **Framer Motion** para animaciones de scroll reveal y micro-interacciones
- **React Router v6** (solo para anclas — no hay páginas secundarias por ahora)
- Sin backend, sin auth — es solo una landing estática

---

## Identidad visual — CRÍTICO, leer antes de escribir una línea

### Paleta de colores
```js
// tailwind.config.js → theme.extend.colors
kuba: {
  green:     '#C8F000',   // acento principal — verde lima de Küba
  greenDark: '#8FB800',   // hover de botones
  black:     '#080808',   // fondo base
  dark:      '#0F0F0F',   // fondo secciones alternas
  card:      '#141414',   // cards y paneles
  border:    '#222222',   // bordes y divisores
  muted:     '#555555',   // texto secundario
  dim:       '#888888',   // texto terciario
  txt:       '#E8E6E0',   // texto principal
}
```

### Reglas de color — NO romper estas reglas
- El verde `#C8F000` aparece SOLO en: ticker, botones CTA principales, precios de servicios, specialty del equipo. NUNCA como fondo de sección completa ni en texto largo.
- Máximo 20% de la composición puede tener el verde — si aparece en más lugares pierde impacto
- Fondos SIEMPRE oscuros — nunca blancos ni claros en ninguna sección
- El contraste hero/sección se logra alternando `#080808` y `#0F0F0F`, no con colores

### Tipografía
```css
/* En index.css */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300&display=swap');
```

- **Bebas Neue** → títulos grandes (h1, h2, nombres de equipo, nombre de servicios). Siempre mayúsculas, letter-spacing leve.
- **Inter** → todo lo demás (body, labels, botones, precios, descripciones)
- **NO usar ninguna otra fuente**

### Logo en el Navbar
```jsx
<>
  <span style={{fontFamily:'Bebas Neue', fontSize:'26px', color:'#C8F000', letterSpacing:'.1em'}}>KüBA</span>
  <span style={{fontSize:'8px', letterSpacing:'.3em', color:'rgba(232,230,224,.35)', display:'block'}}>BARBER STUDIO</span>
</>
```

---

## Estructura de componentes

```
src/
  components/
    Navbar.jsx          ← Nav fijo con blur, logo, links, CTA y menú mobile
    Ticker.jsx          ← Banda animada con el verde lima (el elemento de firma)
    Hero.jsx            ← Sección hero asimétrica (texto izq, foto der)
    About.jsx           ← Quiénes somos + grid de valores
    Services.jsx        ← Grid de 8 servicios con precios
    Gallery.jsx         ← Grid de fotos de trabajos
    Team.jsx            ← Cards del equipo con botón "Reservar con X"
    Reviews.jsx         ← Reseñas de clientes reales
    FAQ.jsx             ← Accordion de preguntas frecuentes
    JoinUs.jsx          ← "¿Sos barbero? Sumate al equipo"
    Footer.jsx          ← Footer completo con datos del local
  assets/
    logo-kuba.png       ← Logo real de Küba (ya está en el repo del boceto)
    [fotos del local y equipo cuando las tenga Fran]
  data/
    content.js          ← Todos los textos, servicios, FAQ, reseñas — centralizado acá
  App.jsx
  main.jsx
  index.css
```

---

## Datos del negocio — usar estos exactamente

### Equipo
```js
const team = [
  { name: 'Fran', initial: 'F', specialty: 'Degradés y diseños', role: 'Fundador · Küba Barber Studio', photo: null },
  { name: 'Matías', initial: 'M', specialty: 'Barba clásica y navaja', role: '2 años en Küba', photo: null },
  { name: 'Diego', initial: 'D', specialty: 'Cortes modernos y keratina', role: '1 año en Küba', photo: null },
]
```
Nota: `photo: null` significa que por ahora se muestra el avatar con la inicial. Cuando Fran mande las fotos se reemplaza con `photo: '/assets/fran.jpg'` etc.

### Servicios
```js
const services = [
  { name: 'Corte clásico',      desc: 'A tijera y máquina, prolijo y preciso. El clásico de siempre, ejecutado al detalle.',              price: '$5.000',  duration: '30 min', icon: '✂' },
  { name: 'Degradé',            desc: 'Fade con línea de contorno definida. Desde skin fade a degradé suave.',                            price: '$6.500',  duration: '45 min', icon: '💈' },
  { name: 'Corte + barba',      desc: 'Combo completo. Corte y arreglo de barba en una sola sesión.',                                     price: '$8.000',  duration: '60 min', icon: '🪒' },
  { name: 'Diseño de barba',    desc: 'Perfilado y diseño personalizado de barba según tu estilo y tipo de rostro.',                      price: '$4.000',  duration: '30 min', icon: '✦' },
  { name: 'Afeitado con navaja',desc: 'Afeitado clásico a navaja con toalla caliente. Experiencia de otra categoría.',                    price: '$5.500',  duration: '40 min', icon: '🔥' },
  { name: 'Cejas',              desc: 'Diseño y prolijado de cejas. El detalle que marca la diferencia.',                                 price: '$2.500',  duration: '15 min', icon: '◈' },
  { name: 'Keratina',           desc: 'Tratamiento de keratina, alisado y brillo. Para el cabello que necesita un reset.',               price: '$9.000',  duration: '60 min', icon: '◉' },
  { name: 'Combo completo',     desc: 'Corte, barba, cejas y afeitado a navaja. Para los que no negocian calidad.',                      price: '$11.000', duration: '90 min', icon: '★' },
]
```

### FAQ
```js
const faq = [
  { q: '¿Cómo saco un turno?', a: 'Hacé clic en "Sacar turno". Elegís el servicio, el barbero y el horario disponible. Te llega un email de confirmación al instante.' },
  { q: '¿Cuál es el horario de atención?', a: 'Atendemos de lunes a sábado de 09:00 a 20:00 hs. Los domingos no tenemos atención.' },
  { q: '¿Puedo cancelar o cambiar mi turno?', a: 'Sí. Podés cancelar hasta 24 horas antes sin ningún problema. Cancelaciones con menos tiempo o no presentarse sin avisar afectan tu puntaje en el sistema.' },
  { q: '¿Cómo funciona el corte gratis?', a: 'Por cada turno completado acumulás 1 corte. Al llegar a 5, te aparece automáticamente un cupón de corte gratis en tu perfil. Sin tarjetitas, sin trámites.' },
  { q: '¿Dónde están ubicados?', a: 'Estamos en Eva Perón entre Pte. Perón y Don Bosco, La Plata. Si tenés dudas para llegar, escribinos por Instagram o WhatsApp.' },
  { q: '¿Aceptan todos los medios de pago?', a: 'Aceptamos efectivo y transferencia. Consultá con tu barbero al momento del turno si necesitás otra forma de pago.' },
]
```

### Reseñas (placeholder realista — reemplazar con reales cuando las tenga Fran)
```js
const reviews = [
  { text: 'Vine por primera vez sin saber bien qué quería y Fran me asesoró perfecto. Salí con un degradé que nunca me habían hecho tan bien. Ya saqué el próximo turno antes de salir.', author: 'Tomás V.', date: 'Junio 2026' },
  { text: 'El ambiente del local es otro nivel. Música buena, el equipo te trata con mucho respeto y el resultado siempre está impecable. La mejor barbería que pisé en La Plata.', author: 'Agustín D.', date: 'Mayo 2026' },
  { text: 'El afeitado con navaja es una experiencia aparte. Toalla caliente, crema, navaja — te vas sintiéndote otro. Voy a seguir viniendo sin duda.', author: 'Martín G.', date: 'Junio 2026' },
]
```

---

## Componentes — detalle de implementación

### Navbar.jsx
- Posición: `fixed top-0`, `z-50`, altura 64px
- Fondo: `rgba(8,8,8,0.92)` con `backdropFilter: blur(12px)`
- Borde inferior: `1px solid #222`
- Logo: texto KüBA (con diéresis) en Bebas Neue verde + "BARBER STUDIO" debajo en gris muy tenue
- Links: Nosotros · Servicios · Trabajos · Equipo · FAQ — texto pequeño, mayúsculas, color `#888`
- CTA: botón "SACAR TURNO" con fondo `#C8F000`, texto negro, sin border-radius o con `rounded-sm`
- Mobile: hamburger que abre un drawer fullscreen oscuro con los links grandes en Bebas Neue
- El link activo al scroll debe resaltarse (usar IntersectionObserver o scroll listener)

### Ticker.jsx
- Banda horizontal de fondo `#C8F000` justo debajo del navbar
- Texto en negro: "KüBA · BARBER STUDIO · DEGRADÉS · BARBA CLÁSICA · DISEÑO DE CEJAS · AFEITADO CON NAVAJA · CORTES DE NIVEL · EXPERIENCIA PREMIUM · LUNES A SÁBADOS · LA PLATA ·"
- Texto en Bebas Neue, letter-spacing amplio, tamaño 13-14px
- Animación CSS pura (no Framer Motion): `@keyframes ticker` con `translateX`
- El track debe estar duplicado para que el loop sea perfecto y sin saltos

### Hero.jsx
- Layout: `grid grid-cols-2` en desktop, stack en mobile
- Izquierda: eyebrow (dirección), título grande en Bebas Neue, descripción, dos botones
- Título: "El corte / que / te define." — "te define." en `#C8F000`
- Derecha: imagen del local/equipo. Mientras no haya foto real, mostrar placeholder oscuro con ícono de tijeras muy tenue
- Gradiente de la derecha hacia la izquierda en el borde para suavizar el corte entre las dos columnas
- Stats abajo a la derecha: "3 Barberos" y "800+ Seguidores" sobre fondo negro con borde superior
- La imagen real se pone así: `<img src="/assets/hero.jpg" className="w-full h-full object-cover" />`

### About.jsx
- Dos columnas: texto a la izquierda, grid de valores a la derecha
- Título: "Más que un corte."
- Texto: dos párrafos sobre la misión de Küba (ya están en content.js)
- Grid de valores: 6 cards en 2 columnas con nombre y descripción de cada valor
- Botón ghost: "Ver @kuba.barberstudio" → link al Instagram

### Services.jsx
- Grid 4 columnas desktop, 2 mobile, 1 en pantallas chicas
- Cada card: ícono, nombre en Bebas Neue, descripción, línea separadora, precio en `#C8F000` grande + duración
- Hover: fondo levemente más claro `#1c1c1c`
- Card "Combo completo" puede tener un tratamiento levemente diferente (fondo `#111`)
- Nota de precio debajo del grid en texto muted

### Gallery.jsx
- Grid asimétrico: primera celda ocupa 2 filas (imagen vertical), resto en 2x2
- Hover: leve zoom en la imagen + overlay oscuro de abajo hacia arriba
- Placeholders oscuros con ícono y label hasta que lleguen las fotos reales
- Link al Instagram al pie de la galería
- **Cuando Fran mande fotos**: `<img src="/assets/gallery/1.jpg" className="w-full h-full object-cover" />`

### Team.jsx
- 3 cards en una fila (1 columna en mobile)
- Avatar: circular con inicial en `#C8F000`, fondo negro, borde `#222`
- Si `photo !== null`: `<img src={member.photo} className="w-18 h-18 rounded-full object-cover" />`
- Nombre en Bebas Neue grande, specialty en verde lima, role en muted
- Botón "Reservar con [nombre]" → link al sistema de turnos

### Reviews.jsx
- 3 cards en una fila
- Estrellas en `#C8F000`
- Texto en itálica, color tenue
- Autor en negrita, fecha en muted

### FAQ.jsx
- Lista de items con accordion
- Solo uno abierto a la vez
- Ícono "+" que rota a "×" al abrir
- Animación de apertura con `max-height` CSS o Framer Motion `AnimatePresence`
- El primero empieza abierto por defecto

### JoinUs.jsx
- Layout horizontal: texto a la izquierda, botón a la derecha
- Título: "¿Sos barbero? / Sumate al equipo." — "Sumate al equipo." en verde lima
- Botón: "Contactar por Instagram" → `https://instagram.com/kuba.barberstudio`
- Fondo: `#141414` con borde

### Footer.jsx
- 3 columnas: logo + tagline, links del sitio, datos de contacto
- Logo en verde lima, tagline "La barbería de referencia en La Plata."
- Links: Nosotros · Servicios · Trabajos · Equipo · FAQ · Sacar turno
- Contacto: dirección, horario, Instagram
- Línea inferior: copyright + link al IG

---

## Animaciones con Framer Motion

Usar `motion.div` con `initial={{ opacity: 0, y: 24 }}` y `whileInView={{ opacity: 1, y: 0 }}` para todas las secciones. Threshold: 0.1. Solo una vez (`once: true`).

Micro-interacciones importantes:
- Botones: `whileHover={{ scale: 1.02 }}` — sutil, no exagerado
- Cards de servicio: hover con `transition: background 0.2s`
- Cards de equipo: hover con borde `#C8F000` con CSS transition
- El ticker NO usa Framer Motion — solo CSS `@keyframes` para performance

---

## Configuración para deploy en GitHub Pages

En `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/kuba-landing/',   // nombre del repo en GitHub
})
```

En `App.jsx`: usar `HashRouter` de react-router-dom (no BrowserRouter) para que GitHub Pages no rompa las rutas.

Scripts en `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

---

## SEO básico en index.html

```html
<title>KüBA Barber Studio — Barbería Premium en La Plata</title>
<meta name="description" content="Barbería premium en La Plata. Turnos online, equipo de nivel, experiencia de otra categoría. Eva Perón entre Pte. Perón y Don Bosco.">
<meta property="og:title" content="KüBA Barber Studio">
<meta property="og:description" content="La barbería de referencia en La Plata.">
<meta property="og:image" content="/assets/og-image.jpg">
<meta name="theme-color" content="#080808">
```

---

## Referencia visual del diseño

El archivo `/kuba-landing.html` en la raíz del proyecto es el prototipo HTML completo de referencia.
Revisalo antes de construir cualquier componente — tiene el layout, colores, tipografías y estructura exacta que debe tener el sitio React.

Elementos de firma que NO pueden faltar:
1. **El ticker verde lima** justo debajo del navbar — es lo primero que el usuario ve al entrar
2. **El hero asimétrico** con la foto a la derecha y el texto a la izquierda
3. **El verde lima apareciendo SOLO** en puntos estratégicos, nunca saturando

---

## Placeholders de imágenes — gestión

Todos los lugares donde van fotos reales deben tener un placeholder oscuro funcional con un ícono tenue y un label de texto indicando qué foto va ahí. Cuando Fran mande las fotos, la estructura para reemplazar es siempre:

```jsx
// Placeholder
<div className="w-full h-full bg-[#141414] flex items-center justify-center">
  <span className="text-[#222] text-6xl">✂</span>
</div>

// Con foto real
<img src="/assets/hero.jpg" className="w-full h-full object-cover" alt="Küba Barber Studio" />
```

---

## Orden de construcción sugerido

1. Setup: `npm create vite@latest . -- --template react` + dependencias + Tailwind config
2. `index.css` con imports de Google Fonts y variables base
3. `content.js` con todos los datos (team, services, faq, reviews)
4. `Navbar.jsx` + `Ticker.jsx` (para ver la identidad desde el primer momento)
5. `Hero.jsx`
6. `About.jsx`
7. `Services.jsx`
8. `Gallery.jsx`
9. `Team.jsx`
10. `Reviews.jsx`
11. `FAQ.jsx`
12. `JoinUs.jsx`
13. `Footer.jsx`
14. `App.jsx` ensamblando todo
15. Revisar responsive mobile (iPhone 12 Pro 390px en DevTools)
16. `npm run build` — verificar que no hay errores
17. Configurar GitHub Pages y hacer deploy

---

## Comandos

```bash
npm install                          # instalar dependencias
npm run dev                          # desarrollo local
npm run build                        # build de producción
npm run deploy                       # deploy a GitHub Pages (requiere gh-pages instalado)
```

Dependencias a instalar:
```bash
npm install react-router-dom framer-motion
npm install -D tailwindcss postcss autoprefixer gh-pages
npx tailwindcss init -p
```
