import type { Lead } from '../types/lead'
import type { Appointment } from '../types/appointment'
import { scoreLead } from './lead-score'

export interface DashboardMetrics {
  newLeads: number
  appointmentsActive: number
  highIntentLeads: number
  testDrives: number
}

const ACTIVE_APPOINTMENT_STATUSES: Appointment['status'][] = [
  'pendiente',
  'confirmada',
]

export function calculateDashboardMetrics(
  leads: Lead[],
  appointments: Appointment[],
): DashboardMetrics {
  const newLeads = leads.length

  const appointmentsActive = appointments.filter((appt) =>
    ACTIVE_APPOINTMENT_STATUSES.includes(appt.status),
  ).length

  const highIntentLeads = leads.filter(
    (lead) => scoreLead(lead).classification === 'ALTA',
  ).length

  const testDrives = leads.filter(
    (lead) => lead.testDrive?.requested === true,
  ).length

  return { newLeads, appointmentsActive, highIntentLeads, testDrives }
}