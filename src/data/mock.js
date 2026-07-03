// Datos mock — Küba Barber Studio. Sin backend, todo hardcodeado.

export const barberos = [
  { id: 'b1', nombre: 'Fran', inicial: 'F', especialidad: 'Degradés y diseños', anios: 4 },
  { id: 'b2', nombre: 'Matías', inicial: 'M', especialidad: 'Barba clásica y navaja', anios: 2 },
  { id: 'b3', nombre: 'Diego', inicial: 'D', especialidad: 'Cortes modernos y keratina', anios: 1 },
]

export const servicios = [
  { id: 's1', nombre: 'Corte clásico', precio: 5000, duracion: 30, descripcion: 'Corte a tijera y máquina, prolijo y preciso.' },
  { id: 's2', nombre: 'Degradé', precio: 6500, duracion: 45, descripcion: 'Fade con línea de contorno definida.' },
  { id: 's3', nombre: 'Corte + barba', precio: 8000, duracion: 60, descripcion: 'Combo de corte y arreglo de barba.' },
  { id: 's4', nombre: 'Diseño de barba', precio: 4000, duracion: 30, descripcion: 'Perfilado y diseño personalizado de barba.' },
  { id: 's5', nombre: 'Afeitado con navaja', precio: 5500, duracion: 40, descripcion: 'Afeitado clásico a navaja con toalla caliente.' },
  { id: 's6', nombre: 'Cejas', precio: 2500, duracion: 15, descripcion: 'Diseño y prolijado de cejas.' },
  { id: 's7', nombre: 'Keratina', precio: 9000, duracion: 60, descripcion: 'Tratamiento de keratina, alisado y brillo.' },
  { id: 's8', nombre: 'Combo completo', precio: 11000, duracion: 90, descripcion: 'Corte, barba, cejas y afeitado a navaja.' },
]

// reputacion: 'green' | 'yellow' | 'red'
export const clientes = [
  {
    id: 'c1',
    nombre: 'Juan Pérez',
    email: 'juan.perez@gmail.com',
    reputacion: 'green',
    cortesAcumulados: 3,
    cuponActivo: false,
    turnos: [
      { fecha: '2026-06-20', barbero: 'Fran', servicio: 'Corte clásico', estado: 'completado' },
      { fecha: '2026-06-05', barbero: 'Matías', servicio: 'Corte + barba', estado: 'completado' },
      { fecha: '2026-05-18', barbero: 'Fran', servicio: 'Degradé', estado: 'completado' },
    ],
  },
  {
    id: 'c2',
    nombre: 'Martín Gómez',
    email: 'martin.gomez@gmail.com',
    reputacion: 'green',
    cortesAcumulados: 5,
    cuponActivo: true,
    cuponCodigo: 'KUBA-FREE-2847',
    turnos: [
      { fecha: '2026-06-28', barbero: 'Fran', servicio: 'Degradé', estado: 'completado' },
      { fecha: '2026-06-14', barbero: 'Diego', servicio: 'Corte clásico', estado: 'completado' },
      { fecha: '2026-05-30', barbero: 'Fran', servicio: 'Combo completo', estado: 'completado' },
    ],
  },
  {
    id: 'c3',
    nombre: 'Lucas Romero',
    email: 'lucas.romero@hotmail.com',
    reputacion: 'yellow',
    cortesAcumulados: 2,
    cuponActivo: false,
    turnos: [
      { fecha: '2026-06-22', barbero: 'Matías', servicio: 'Diseño de barba', estado: 'completado' },
      { fecha: '2026-06-01', barbero: 'Diego', servicio: 'Corte clásico', estado: 'no_show' },
    ],
  },
  {
    id: 'c4',
    nombre: 'Nicolás Torres',
    email: 'nico.torres@gmail.com',
    reputacion: 'red',
    cortesAcumulados: 0,
    cuponActivo: false,
    turnos: [
      { fecha: '2026-06-19', barbero: 'Fran', servicio: 'Degradé', estado: 'no_show' },
      { fecha: '2026-05-30', barbero: 'Diego', servicio: 'Corte clásico', estado: 'no_show' },
      { fecha: '2026-05-10', barbero: 'Matías', servicio: 'Corte + barba', estado: 'no_show' },
    ],
  },
  {
    id: 'c5',
    nombre: 'Facundo Álvarez',
    email: 'facu.alvarez@gmail.com',
    reputacion: 'green',
    cortesAcumulados: 1,
    cuponActivo: false,
    turnos: [
      { fecha: '2026-06-25', barbero: 'Matías', servicio: 'Afeitado con navaja', estado: 'completado' },
    ],
  },
  {
    id: 'c6',
    nombre: 'Tomás Herrera',
    email: 'tomas.herrera@gmail.com',
    reputacion: 'green',
    cortesAcumulados: 4,
    cuponActivo: false,
    turnos: [
      { fecha: '2026-06-27', barbero: 'Diego', servicio: 'Corte clásico', estado: 'completado' },
      { fecha: '2026-06-10', barbero: 'Fran', servicio: 'Cejas', estado: 'completado' },
      { fecha: '2026-05-22', barbero: 'Diego', servicio: 'Corte clásico', estado: 'cancelado' },
    ],
  },
  {
    id: 'c7',
    nombre: 'Agustín Molina',
    email: 'agus.molina@hotmail.com',
    reputacion: 'yellow',
    cortesAcumulados: 2,
    cuponActivo: false,
    turnos: [
      { fecha: '2026-06-21', barbero: 'Diego', servicio: 'Keratina', estado: 'completado' },
      { fecha: '2026-05-25', barbero: 'Fran', servicio: 'Corte clásico', estado: 'no_show' },
    ],
  },
  {
    id: 'c8',
    nombre: 'Bruno Castro',
    email: 'bruno.castro@gmail.com',
    reputacion: 'green',
    cortesAcumulados: 3,
    cuponActivo: false,
    turnos: [
      { fecha: '2026-06-26', barbero: 'Fran', servicio: 'Combo completo', estado: 'completado' },
      { fecha: '2026-06-08', barbero: 'Matías', servicio: 'Diseño de barba', estado: 'justificado' },
    ],
  },
  {
    id: 'c9',
    nombre: 'Emiliano Ríos',
    email: 'emi.rios@gmail.com',
    reputacion: 'green',
    cortesAcumulados: 1,
    cuponActivo: false,
    turnos: [
      { fecha: '2026-06-15', barbero: 'Matías', servicio: 'Corte + barba', estado: 'completado' },
    ],
  },
  {
    id: 'c10',
    nombre: 'Santiago Paz',
    email: 'santi.paz@gmail.com',
    reputacion: 'green',
    cortesAcumulados: 2,
    cuponActivo: false,
    turnos: [
      { fecha: '2026-06-17', barbero: 'Matías', servicio: 'Diseño de barba', estado: 'completado' },
      { fecha: '2026-05-29', barbero: 'Diego', servicio: 'Corte clásico', estado: 'justificado' },
    ],
  },
]

// Turnos de hoy — estado: confirmado | completado | no_show | justificado
export const turnosHoy = [
  { id: 't1', hora: '09:00', clienteId: 'c2', barberoId: 'b1', servicioId: 's2', estado: 'completado' },
  { id: 't2', hora: '09:30', clienteId: 'c6', barberoId: 'b3', servicioId: 's1', estado: 'completado' },
  { id: 't3', hora: '10:00', clienteId: 'c4', barberoId: 'b1', servicioId: 's2', estado: 'no_show' },
  { id: 't4', hora: '10:00', clienteId: 'c8', barberoId: 'b2', servicioId: 's8', estado: 'completado' },
  { id: 't5', hora: '10:30', clienteId: 'c1', barberoId: 'b2', servicioId: 's3', estado: 'completado' },
  { id: 't6', hora: '11:00', clienteId: 'c9', barberoId: 'b2', servicioId: 's3', estado: 'confirmado' },
  { id: 't7', hora: '11:30', clienteId: 'c3', barberoId: 'b3', servicioId: 's4', estado: 'confirmado' },
  { id: 't8', hora: '12:00', clienteId: 'c7', barberoId: 'b3', servicioId: 's7', estado: 'completado' },
  { id: 't9', hora: '12:30', clienteId: 'c10', barberoId: 'b2', servicioId: 's4', estado: 'no_show' },
  { id: 't10', hora: '14:00', clienteId: 'c5', barberoId: 'b2', servicioId: 's5', estado: 'confirmado' },
  { id: 't11', hora: '14:30', clienteId: 'c1', barberoId: 'b1', servicioId: 's1', estado: 'confirmado' },
  { id: 't12', hora: '15:00', clienteId: 'c6', barberoId: 'b3', servicioId: 's6', estado: 'confirmado' },
  { id: 't13', hora: '15:30', clienteId: 'c2', barberoId: 'b1', servicioId: 's2', estado: 'confirmado' },
  { id: 't14', hora: '16:00', clienteId: 'c8', barberoId: 'b3', servicioId: 's7', estado: 'confirmado' },
  { id: 't15', hora: '16:30', clienteId: 'c9', barberoId: 'b1', servicioId: 's1', estado: 'confirmado' },
]

export const stock = [
  { id: 'p1', nombre: 'Cera moldeadora', categoria: 'Styling', qty: 4, qtyMin: 5 },
  { id: 'p2', nombre: 'Navajas descartables', categoria: 'Afeitado', qty: 20, qtyMin: 15 },
  { id: 'p3', nombre: 'Hojas de afeitar', categoria: 'Afeitado', qty: 10, qtyMin: 12 },
  { id: 'p4', nombre: 'Shampoo profesional', categoria: 'Higiene', qty: 6, qtyMin: 4 },
  { id: 'p5', nombre: 'Crema de afeitar', categoria: 'Afeitado', qty: 8, qtyMin: 5 },
  { id: 'p6', nombre: 'Toallas descartables', categoria: 'Higiene', qty: 45, qtyMin: 20 },
  { id: 'p7', nombre: 'Alcohol en gel', categoria: 'Higiene', qty: 9, qtyMin: 5 },
  { id: 'p8', nombre: 'Talco para cuello', categoria: 'Styling', qty: 12, qtyMin: 6 },
]
