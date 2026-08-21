import type { AppointmentStatus } from './appointment'

/** Uso previsto del vehículo. */
export type VehicleUse = 'familiar' | 'trabajo' | 'ciudad' | 'viajes' | 'mixto'

/** Modalidad de adquisición. */
export type PurchaseModality =
  | 'contado'
  | 'financiado'
  | 'plan_ahorro'
  | 'sin_definir'

export type FinancingTermMonths = 12 | 24 | 36 | 48 | 60

export type TestDriveStatus =
  | 'no_solicitado'
  | 'solicitado'
  | 'agendado'
  | 'realizado'

export interface CurrentVehicle {
  /** Descripción del vehículo a entregar / trade-in. */
  description: string
  year?: number
  appraisalPending?: boolean
}

export interface LeadFinancing {
  interested: boolean
  termMonths?: FinancingTermMonths
  approximateAmountUsd?: number
}

export interface LeadTestDrive {
  requested: boolean
  status: TestDriveStatus
}

export interface Lead {
  id: string
  firstName: string
  lastName: string

  /** Modelo de interés. */
  interestVehicleId?: string

  /** Uso previsto. */
  intendedUse?: VehicleUse

  /** Modalidad: contado, financiado, plan de ahorro o sin definir. */
  purchaseModality?: PurchaseModality

  /** Preferencia de financiación. */
  financing?: LeadFinancing

  /** Presupuesto estimado en USD. */
  budgetUsd?: number

  /** Vehículo actual (trade-in). */
  currentVehicle?: CurrentVehicle | null

  /** Estado de test drive. */
  testDrive?: LeadTestDrive

  /** Sucursal asignada. */
  branchId?: string

  /** Cita asociada (fecha y hora viven en Appointment). */
  appointmentId?: string
  appointmentStatus?: AppointmentStatus

  observations?: string

  /** Criterio de score: intención de compra (no se muestra al visitante). */
  purchaseIntent?: boolean

  /** Criterio de score: compra en 1 mes (no se muestra al visitante). */
  purchaseWithinOneMonth?: boolean

  assignedAdvisorId?: string
}
