# Prompts de seguimiento — Küba Barber Studio

Usá estos si algo quedó sin terminar o querés pulir una vista antes de la reunión.
Cada uno es independiente — pegalo en Claude Code dentro del mismo proyecto.

---

## FIX: Verificar que todo funciona

```
Corré `npm run dev`. Abrí el navegador y verificá estas rutas sin error:
/ · /booking · /perfil · /barbero · /admin

Si alguna da error, revisá la consola del browser y arreglala.
Verificá también que el color #C8F000 aparezca correctamente en las CTAs,
el logo "KüBA" y los stat numbers del admin.
```

---

## MEJORA: El verde lima no se ve bien

```
El color principal de Küba es #C8F000 (verde lima brillante).
Revisá todos los componentes y asegurate de que:
- El logo "KüBA" en el Navbar use exactamente este color
- Los botones CTA principales tengan fondo #C8F000 con texto negro
- Los números grandes en AdminDashboard usen este color
- El relleno de la progress bar de cupones use este color
- Los slots seleccionados en el booking usen este color

Si en algún lugar usaste un verde diferente (green-400, green-500, lime-400, etc),
reemplazalo por el color exacto #C8F000.
```

---

## MEJORA: Hacer el Hero de la Landing más impactante

```
Mejorá el hero de Landing.jsx para que se parezca al estilo del story de Küba
(fondo muy oscuro, tipografía bold condensada, texto en mayúsculas):

- El título principal debe ser en MAYÚSCULAS, font-black, text-6xl o más grande
- "TU PRÓXIMO" en blanco, "CORTE PERFECTO" en #C8F000, en líneas separadas
- Agregar una línea fina horizontal en #C8F000 de decoración (ancho 60px) entre el eyebrow y el título
- El eyebrow arriba: "KÜBA BARBER STUDIO" en letter-spacing muy amplio, text-xs, color white/50
- El gradiente de fondo debe ser más pronunciado: radial-gradient desde #C8F000 al 3% de opacity en el centro
- Agregar al footer del hero: "Eva Perón entre Pte. Perón y Don Bosco · Lunes a sábados 09 a 20 hs"
  en texto pequeño gris con un ícono de pin de lucide-react
```

---

## MEJORA: Booking — que el Paso 2 se vea más real

```
En Booking.jsx, mejorá el Paso 2 (selección de barbero y horario):

- Los slots de horario deben estar en un grid de 4 columnas
- Cada slot debe mostrar la hora (ej: "10:30") centrada
- Los slots ocupados deben tener texto "✗" en rojo además de "Ocupado"
- El slot seleccionado debe tener fondo #C8F000 y texto negro bold
- Agregar un indicador debajo del grid: "● Disponible  ● Ocupado  ● Seleccionado"
  con los colores correspondientes
- Cuando el usuario tiene barbero Y horario seleccionados, mostrar un mini-resumen
  al pie: "Fran · Miércoles 3 Jul · 10:30 hs" en un banner con borde #C8F000
```

---

## MEJORA: Admin — gráfico de ingresos semanal

```
En AdminDashboard.jsx, agregá debajo del gráfico de barberos un segundo gráfico:
"Ingresos de la semana" — 7 barras (Lun–Dom) con montos en ARS ficticios.
Usá SVG inline igual que el anterior.
Las barras del fin de semana (Sáb y Dom siendo Dom=0 porque está cerrado) deben verse
claramente diferentes: Sáb en #C8F000, Dom en gris oscuro con label "Cerrado".
Agregá el total semanal en grande arriba a la derecha de esta sección.
```

---

## EXTRA: Toast de confirmación de turno

```
En Booking.jsx, cuando el usuario hace click en "CONFIRMAR TURNO" en el Paso 3:
1. Mostrar un overlay oscuro semitransparente sobre toda la pantalla
2. En el centro: un card blanco/oscuro con:
   - Checkmark animado grande en #C8F000 (podés usar un SVG con stroke-dashoffset animation)
   - Texto "¡Turno confirmado!" en bold
   - Resumen: barbero, servicio, hora
   - Texto pequeño: "Te llegará una confirmación por email"
   - Botón "Ver mi perfil" que navega a /perfil
3. El overlay se cierra al clickear fuera o en el botón

Esto hace que la demo se vea mucho más impresionante en la reunión.
```

---

## EXTRA: Página 404 con branding Küba

```
Creá src/pages/NotFound.jsx:
- Fondo #0A0A0A
- "404" gigante en #C8F000 opacity 10%, posición absolute como fondo
- Encima: "PÁGINA NO ENCONTRADA" en blanco bold
- "Volvé al inicio" como botón verde lima
- Logo KüBA centrado arriba

Configurala como <Route path="*"> en App.jsx.
```
