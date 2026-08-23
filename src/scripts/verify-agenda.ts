import { mockAppointments } from '../mocks/appointments'
import { defaultTimeSlots } from '../config/tenants/dealer-premier/schedule'
import { getAvailability, isTimeSlotAvailable } from '../core/logic'

console.log('--- Disponibilidad branch-001, 2026-08-24 (appt-004 cancelada a las 15:00) ---')
const availability = getAvailability(
  defaultTimeSlots,
  'branch-001',
  '2026-08-24',
  mockAppointments,
)
console.table(availability)

console.log('')
console.log('--- Chequeo puntual: 15:00 en branch-001, 2026-08-24 deberia estar disponible ---')
const isAvailable = isTimeSlotAvailable(
  'branch-001',
  '2026-08-24',
  '15:00',
  mockAppointments,
)
console.log(`Disponible: ${isAvailable}`)

console.log('')
console.log('--- Disponibilidad branch-001, 2026-08-25 (appt-001 confirmada a las 10:00) ---')
const availability2 = getAvailability(
  defaultTimeSlots,
  'branch-001',
  '2026-08-25',
  mockAppointments,
)
console.table(availability2)