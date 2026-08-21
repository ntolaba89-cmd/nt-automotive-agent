import type { Lead } from '../types/lead'
import type {
  LeadScoreClassification,
  LeadScoreCriteria,
} from '../types/lead-score'
import {
  LEAD_SCORE_BANDS,
  LEAD_SCORE_CAP,
  LEAD_SCORE_POINTS,
} from '../types/lead-score'

export interface LeadScoreResult {
  score: number
  classification: LeadScoreClassification
  criteria: LeadScoreCriteria
}

export function criteriaFromLead(lead: Lead): LeadScoreCriteria {
  const testDriveStatus = lead.testDrive?.status

  return {
    modelDefined: Boolean(lead.interestVehicleId),
    purchaseIntent: lead.purchaseIntent === true,
    financing:
      lead.financing?.interested === true ||
      lead.purchaseModality === 'financiado',
    testDrive:
      lead.testDrive?.requested === true ||
      (testDriveStatus !== undefined && testDriveStatus !== 'no_solicitado'),
    // Fix: antes era Boolean(lead.appointmentId), lo cual sumaba puntos
    // incluso con una cita cancelada. Ahora solo cuenta como "solicitada"
    // si la cita esta activa (pendiente o confirmada).
    appointmentRequested:
      lead.appointmentStatus === 'pendiente' ||
      lead.appointmentStatus === 'confirmada',
    purchaseWithinOneMonth: lead.purchaseWithinOneMonth === true,
    tradeInVehicle: Boolean(lead.currentVehicle?.description),
  }
}

/** Formula fija: scoreFinal = Math.min(sumaDeCriterios, 100) */
export function calculateLeadScore(criteria: LeadScoreCriteria): number {
  const sumaDeCriterios =
    (criteria.modelDefined ? LEAD_SCORE_POINTS.modelDefined : 0) +
    (criteria.purchaseIntent ? LEAD_SCORE_POINTS.purchaseIntent : 0) +
    (criteria.financing ? LEAD_SCORE_POINTS.financing : 0) +
    (criteria.testDrive ? LEAD_SCORE_POINTS.testDrive : 0) +
    (criteria.appointmentRequested ? LEAD_SCORE_POINTS.appointmentRequested : 0) +
    (criteria.purchaseWithinOneMonth
      ? LEAD_SCORE_POINTS.purchaseWithinOneMonth
      : 0) +
    (criteria.tradeInVehicle ? LEAD_SCORE_POINTS.tradeInVehicle : 0)

  return Math.min(sumaDeCriterios, LEAD_SCORE_CAP)
}

export function classifyLeadScore(score: number): LeadScoreClassification {
  if (score >= LEAD_SCORE_BANDS.ALTA.min) return 'ALTA'
  if (score >= LEAD_SCORE_BANDS.MEDIA.min) return 'MEDIA'
  return 'BAJA'
}

export function scoreLead(lead: Lead): LeadScoreResult {
  const criteria = criteriaFromLead(lead)
  const score = calculateLeadScore(criteria)

  return {
    score,
    classification: classifyLeadScore(score),
    criteria,
  }
}