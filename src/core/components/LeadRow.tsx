import { Car } from 'lucide-react'
import type { Lead } from '../types/lead'
import type { Vehicle } from '../types/vehicle'
import type { Branch } from '../types/branch'
import { scoreLead } from '../logic'
import { LeadScoreBadge } from './LeadScoreBadge'

interface LeadRowProps {
  lead: Lead
  vehicle?: Vehicle
  branch?: Branch
  onClick?: () => void
}

const MODALITY_LABELS: Record<string, string> = {
  contado: 'Contado',
  financiado: 'Financiado',
  plan_ahorro: 'Plan de ahorro',
  sin_definir: 'Sin definir',
}

export function LeadRow({ lead, vehicle, branch, onClick }: LeadRowProps) {
  const { classification } = scoreLead(lead)
  const modalityLabel = lead.purchaseModality
    ? MODALITY_LABELS[lead.purchaseModality]
    : 'Sin definir'
  const requestedTestDrive = lead.testDrive?.requested === true

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-left transition-colors hover:bg-neutral-800"
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-neutral-100">
            {lead.firstName} {lead.lastName}
          </span>
          <span className="text-sm text-neutral-500">
            {vehicle ? vehicle.name : 'Vehiculo sin definir'}
          </span>
        </div>
        {requestedTestDrive && (
          <Car
            size={16}
            className="shrink-0 text-amber-500"
            title="Test Drive solicitado"
          />
        )}
      </div>

      <div className="flex items-center gap-6 text-sm text-neutral-400">
        <span className="w-28 shrink-0">{modalityLabel}</span>
        <span className="w-40 shrink-0">{branch ? branch.name : 'Sin sucursal'}</span>
        <span className="w-32 shrink-0 text-right">
          <LeadScoreBadge classification={classification} />
        </span>
      </div>
    </button>
  )
}