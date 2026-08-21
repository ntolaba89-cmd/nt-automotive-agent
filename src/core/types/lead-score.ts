/**
 * Criterios de lead score. El score final es
 * `Math.min(sumaDeCriterios, LEAD_SCORE_CAP)` y nunca se muestra al visitante.
 */
export interface LeadScoreCriteria {
  /** Modelo definido. */
  modelDefined: boolean
  /** Intención de compra. */
  purchaseIntent: boolean
  /** Financiación. */
  financing: boolean
  /** Test drive. */
  testDrive: boolean
  /** Cita solicitada. */
  appointmentRequested: boolean
  /** Compra en 1 mes. */
  purchaseWithinOneMonth: boolean
  /** Vehículo a entregar. */
  tradeInVehicle: boolean
}

export const LEAD_SCORE_POINTS = {
  modelDefined: 15,
  purchaseIntent: 20,
  financing: 10,
  testDrive: 20,
  appointmentRequested: 25,
  purchaseWithinOneMonth: 20,
  tradeInVehicle: 10,
} as const satisfies Record<keyof LeadScoreCriteria, number>

/** Techo fijo del score. */
export const LEAD_SCORE_CAP = 100

export type LeadScoreClassification = 'BAJA' | 'MEDIA' | 'ALTA'

/** Umbrales inclusivos: 0-29 BAJA, 30-59 MEDIA, 60+ ALTA. */
export const LEAD_SCORE_BANDS = {
  BAJA: { min: 0, max: 29 },
  MEDIA: { min: 30, max: 59 },
  ALTA: { min: 60, max: LEAD_SCORE_CAP },
} as const satisfies Record<LeadScoreClassification, { min: number; max: number }>
