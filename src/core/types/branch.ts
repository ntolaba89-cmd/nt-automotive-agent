export interface Branch {
  id: string
  name: string
  address: string
  city?: string
  /** Horario de atención, texto libre (ej. "08:00 - 18:00"). */
  openingHours?: string
}
