export type AppointmentStatus =
  | 'pendiente'
  | 'confirmada'
  | 'cancelada'
  | 'completada'

export interface Appointment {
  id: string
  leadId: string
  /** Sucursal de la cita. */
  branchId: string
  advisorId?: string
  /** Fecha de la cita, ISO `YYYY-MM-DD`. */
  date: string
  /** Hora de la cita, `HH:mm` (24h). */
  time: string
  status: AppointmentStatus
  /** Si la cita incluye test drive. */
  includesTestDrive: boolean
  notes?: string
}
