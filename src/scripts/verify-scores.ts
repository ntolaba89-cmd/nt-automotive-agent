import { mockLeads } from '../mocks/leads'
import { scoreLead } from '../core/logic'

for (const lead of mockLeads) {
  const result = scoreLead(lead)
  console.log(
    `${lead.id} | ${lead.firstName} ${lead.lastName} | score: ${result.score} | clasificacion: ${result.classification} | appointmentRequested: ${result.criteria.appointmentRequested}`,
  )
}