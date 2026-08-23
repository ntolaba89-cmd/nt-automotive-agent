export type VehicleCategory =
  | 'suv'
  | 'sedan'
  | 'grand_tourer'
  | 'city_car'
  | 'pickup'
  | 'moto'
  | 'otro'

export interface Vehicle {
  id: string
  /** Nombre comercial del modelo (ej. "Grand Tourer GT-X"). */
  name: string
  /** Línea o serie del catálogo (dato de tenant, no de marca de producto). */
  series?: string
  category?: VehicleCategory
}
