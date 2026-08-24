import type { Lead } from './lead'

export type ConversationEntryPoint =
  | 'buscar_vehiculo'
  | 'financiacion'
  | 'plan_ahorro'
  | 'test_drive'
  | 'otra_consulta'

export type ConversationStep =
  | 'bienvenida'
  | 'descubrimiento'
  | 'recomendacion'
  | 'decision'
  | 'agenda_sucursal'
  | 'agenda_fecha'
  | 'agenda_horario'
  | 'confirmacion'

export interface AgendaSelection {
  branchId?: string
  date?: string
  time?: string
}

export interface ConversationState {
  step: ConversationStep
  entryPoint: ConversationEntryPoint | null
  /** Datos del lead que se van completando a medida que avanza la conversacion. */
  draftLead: Partial<Lead>
  /** Seleccion de agenda en progreso, antes de confirmar la cita. */
  agendaSelection: AgendaSelection
}

export const INITIAL_CONVERSATION_STATE: ConversationState = {
  step: 'bienvenida',
  entryPoint: null,
  draftLead: {},
  agendaSelection: {},
}