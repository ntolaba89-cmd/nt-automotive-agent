import { mockVehicles } from '../mocks/vehicles'
import { recommendVehicles } from '../core/logic'
import type { VehicleUse } from '../core/types/lead'

const usos: VehicleUse[] = ['familiar', 'trabajo', 'ciudad', 'viajes', 'mixto']

for (const uso of usos) {
  const result = recommendVehicles(uso, mockVehicles)
  console.log(
    `${uso} -> ${result.map((v) => v.name).join(', ')}`,
  )
}