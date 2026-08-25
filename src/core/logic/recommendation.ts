import type { VehicleUse } from '../types/lead'
import type { Vehicle, VehicleCategory } from '../types/vehicle'

const USE_TO_CATEGORY: Record<VehicleUse, VehicleCategory> = {
  familiar: 'suv',
  trabajo: 'pickup',
  ciudad: 'city_car',
  viajes: 'grand_tourer',
  mixto: 'sedan',
}

/** Categoria de respaldo, universal, si no coincide con la principal. */
const FALLBACK_CATEGORY: VehicleCategory = 'sedan'

/**
 * Recomendacion conceptual (seccion 3 del brief): sugiere 1-2 vehiculos
 * segun el uso previsto. No afirma precios ni specs no presentes en los
 * datos.
 */
export function recommendVehicles(
  use: VehicleUse,
  vehicles: Vehicle[],
): Vehicle[] {
  const primaryCategory = USE_TO_CATEGORY[use]
  const primary = vehicles.find((v) => v.category === primaryCategory)
  const fallback =
    primaryCategory !== FALLBACK_CATEGORY
      ? vehicles.find((v) => v.category === FALLBACK_CATEGORY)
      : undefined

  return [primary, fallback].filter((v): v is Vehicle => v !== undefined)
}