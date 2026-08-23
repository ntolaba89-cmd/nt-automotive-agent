import type { Appointment } from '../types/appointment'

/** Estados de cita que efectivamente ocupan un horario. */
const OCCUPYING_STATUSES: Appointment['status'][] = ['pendiente', 'confirmada']

export interface TimeSlotAvailability {
  time: string
  available: boolean
}

/**
 * Calcula disponibilidad de horarios para una sucursal y fecha dadas.
 * Una cita 'cancelada' o 'completada' NO ocupa el horario (libera el slot).
 */
export function getAvailability(
  timeSlots: string[],
  branchId: string,
  date: string,
  appointments: Appointment[],
): TimeSlotAvailability[] {
  const occupiedTimes = new Set(
    appointments
      .filter(
        (appt) =>
          appt.branchId === branchId &&
          appt.date === date &&
          OCCUPYING_STATUSES.includes(appt.status),
      )
      .map((appt) => appt.time),
  )

  return timeSlots.map((time) => ({
    time,
    available: !occupiedTimes.has(time),
  }))
}

/**
 * Verifica si un horario puntual esta disponible antes de confirmar una cita.
 * Util para validar en el ultimo paso del flujo de agenda (evitar doble booking).
 */
export function isTimeSlotAvailable(
  branchId: string,
  date: string,
  time: string,
  appointments: Appointment[],
): boolean {
  return !appointments.some(
    (appt) =>
      appt.branchId === branchId &&
      appt.date === date &&
      appt.time === time &&
      OCCUPYING_STATUSES.includes(appt.status),
  )
}