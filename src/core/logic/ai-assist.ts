import type { Lead, VehicleUse } from '../types/lead'
import type { Vehicle } from '../types/vehicle'

/** Disclaimer fijo, no parafrasear. Ver rules.md. */
export const NO_AUTO_SEND_DISCLAIMER = 'Esto NO envia mensajes automaticos.'

const USE_PHRASES: Record<VehicleUse, string> = {
    familiar: 'necesidades familiares',
    trabajo: 'necesidades laborales',
    ciudad: 'trayectos en la ciudad',
    viajes: 'viajes largos',
    mixto: 'uso diario y viajes',
  }

function vehicleLabel(vehicle?: Vehicle): string {
  return vehicle ? vehicle.name : 'un vehiculo aun por definir'
}

/**
 * Resumen de la oportunidad para el asesor (seccion 10 del brief).
 * Generado con reglas/plantillas a partir de los datos del lead.
 * NO es una llamada a un LLM real, es un placeholder deterministico.
 */
export function buildOpportunitySummary(lead: Lead, vehicle?: Vehicle): string {
  const parts: string[] = []

  const useLabel = lead.intendedUse ? USE_PHRASES[lead.intendedUse] : null
  if (useLabel) {
    parts.push(`Cliente interesado en ${vehicleLabel(vehicle)} para ${useLabel}.`)
  } else {
    parts.push(`Cliente interesado en ${vehicleLabel(vehicle)}.`)
  }

  if (lead.financing?.interested || lead.purchaseModality === 'financiado') {
    parts.push('Evalua opciones de financiacion.')
  } else if (lead.purchaseModality === 'contado') {
    parts.push('Busca comprar de contado.')
  } else if (lead.purchaseModality === 'plan_ahorro') {
    parts.push('Interesado en plan de ahorro.')
  }

  if (lead.testDrive?.requested) {
    parts.push('Solicito Test Drive.')
  }

  if (lead.purchaseWithinOneMonth) {
    parts.push('Tiene intencion de compra durante el proximo mes.')
  }

  if (lead.currentVehicle?.description) {
    parts.push(`Cuenta con vehiculo para entregar (${lead.currentVehicle.description}).`)
  }

  if (lead.observations) {
    parts.push(lead.observations)
  }

  return parts.join(' ')
}

/**
 * Mensaje sugerido para que el asesor use como apertura (seccion 11).
 * NUNCA se envia automaticamente, solo se copia manualmente.
 */
export function buildConversationOpener(lead: Lead, vehicle?: Vehicle): string {
  const greeting = `Hola ${lead.firstName}, soy [Nombre], tu asesor en NT.`
  const interest = vehicle
    ? `Vi que estas interesado en el ${vehicle.name}`
    : 'Vi tu consulta'

  const useLabel = lead.intendedUse ? USE_PHRASES[lead.intendedUse] : null
  const useClause = useLabel ? ` para tus ${useLabel}` : ''

  const appointmentClause =
    lead.appointmentStatus === 'pendiente' || lead.appointmentStatus === 'confirmada'
      ? ' y ya tenes tu cita agendada'
      : ''

  const financingClause =
    lead.financing?.interested || lead.purchaseModality === 'financiado'
      ? ' Queres que te adelante las opciones de financiacion antes de vernos?'
      : ' Te gustaria coordinar los proximos pasos?'

  return `${greeting} ${interest}${useClause}${appointmentClause}.${financingClause}`
}