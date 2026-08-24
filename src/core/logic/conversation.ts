import type {
    ConversationEntryPoint,
    ConversationStep,
  } from '../types/conversation'
  
  export function getNextStepAfterEntry(
    entryPoint: ConversationEntryPoint,
  ): ConversationStep {
    if (entryPoint === 'test_drive') return 'agenda_sucursal'
    if (entryPoint === 'otra_consulta') return 'decision'
    return 'descubrimiento' // buscar_vehiculo, financiacion, plan_ahorro
  }