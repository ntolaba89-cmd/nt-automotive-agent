import { mockLeads } from '../mocks/leads'
import { mockVehicles } from '../mocks/vehicles'
import { buildOpportunitySummary, buildConversationOpener, NO_AUTO_SEND_DISCLAIMER } from '../core/logic'

function findVehicle(vehicleId?: string) {
  return mockVehicles.find((v) => v.id === vehicleId)
}

console.log('=== Carlos Mendoza (lead-001) ===')
const carlos = mockLeads.find((l) => l.id === 'lead-001')!
console.log('Resumen:', buildOpportunitySummary(carlos, findVehicle(carlos.interestVehicleId)))
console.log('Apertura:', buildConversationOpener(carlos, findVehicle(carlos.interestVehicleId)))
console.log('Disclaimer:', NO_AUTO_SEND_DISCLAIMER)

console.log('')
console.log('=== Rodrigo Paz (lead-007, cita cancelada) ===')
const rodrigo = mockLeads.find((l) => l.id === 'lead-007')!
console.log('Resumen:', buildOpportunitySummary(rodrigo, findVehicle(rodrigo.interestVehicleId)))
console.log('Apertura:', buildConversationOpener(rodrigo, findVehicle(rodrigo.interestVehicleId)))

console.log('')
console.log('=== Julia Chen (lead-006, sin vehiculo definido) ===')
const julia = mockLeads.find((l) => l.id === 'lead-006')!
console.log('Resumen:', buildOpportunitySummary(julia, findVehicle(julia.interestVehicleId)))
console.log('Apertura:', buildConversationOpener(julia, findVehicle(julia.interestVehicleId)))