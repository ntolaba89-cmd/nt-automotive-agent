import { mockLeads } from '../mocks/leads'
import { mockAppointments } from '../mocks/appointments'
import { calculateDashboardMetrics } from '../core/logic'

const metrics = calculateDashboardMetrics(mockLeads, mockAppointments)
console.log('Nuevos Leads:', metrics.newLeads)
console.log('Citas Activas:', metrics.appointmentsActive)
console.log('Alta Intencion:', metrics.highIntentLeads)
console.log('Test Drives:', metrics.testDrives)