export {
  calculateLeadScore,
  classifyLeadScore,
  criteriaFromLead,
  scoreLead,
} from './lead-score'
export type { LeadScoreResult } from './lead-score'

export {
  getAvailability,
  isTimeSlotAvailable,
} from './agenda'
export type { TimeSlotAvailability } from './agenda'

export {
  buildOpportunitySummary,
  buildConversationOpener,
  NO_AUTO_SEND_DISCLAIMER,
} from './ai-assist'

export { calculateDashboardMetrics } from './dashboard-metrics'
export type { DashboardMetrics } from './dashboard-metrics'

export { getNextStepAfterEntry } from './conversation'