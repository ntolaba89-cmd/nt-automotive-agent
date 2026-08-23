import { useState } from 'react'
import { Sparkles, Copy, Check } from 'lucide-react'
import type { Lead } from '../types/lead'
import type { Vehicle } from '../types/vehicle'
import type { Branch } from '../types/branch'
import {
  scoreLead,
  buildOpportunitySummary,
  buildConversationOpener,
  NO_AUTO_SEND_DISCLAIMER,
} from '../logic'
import { LeadScoreBadge } from './LeadScoreBadge'

interface LeadDetailProps {
  lead: Lead
  vehicle?: Vehicle
  branch?: Branch
  onBack: () => void
}

const MODALITY_LABELS: Record<string, string> = {
  contado: 'Contado',
  financiado: 'Financiado',
  plan_ahorro: 'Plan de ahorro',
  sin_definir: 'Sin definir',
}

const USE_LABELS: Record<string, string> = {
  familiar: 'Familiar',
  trabajo: 'Trabajo',
  ciudad: 'Ciudad',
  viajes: 'Viajes',
  mixto: 'Mixto',
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-neutral-800 py-2 text-sm">
      <span className="text-neutral-500">{label}</span>
      <span className="text-neutral-200">{value}</span>
    </div>
  )
}

export function LeadDetail({ lead, vehicle, branch, onBack }: LeadDetailProps) {
  const [showOpener, setShowOpener] = useState(false)
  const [copied, setCopied] = useState(false)

  const { score, classification } = scoreLead(lead)
  const summary = buildOpportunitySummary(lead, vehicle)
  const opener = buildConversationOpener(lead, vehicle)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(opener)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 text-sm text-neutral-400 hover:text-neutral-200"
      >
        ← Volver a Leads Activos
      </button>

      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-100">
            {lead.firstName} {lead.lastName}
          </h1>
          <p className="text-sm text-neutral-500">
            ID: {lead.id} · Lead calificado
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-3xl font-semibold text-neutral-100">
            {score}
            <span className="text-base text-neutral-500">/100</span>
          </span>
          <LeadScoreBadge classification={classification} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-lg border border-neutral-800 bg-neutral-900 p-5">
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-neutral-400">
            Datos Operativos
          </h2>
          <DataRow
            label="Modelo de interes"
            value={vehicle ? vehicle.name : 'Sin definir'}
          />
          <DataRow
            label="Uso previsto"
            value={lead.intendedUse ? USE_LABELS[lead.intendedUse] : 'Sin definir'}
          />
          <DataRow
            label="Modalidad"
            value={
              lead.purchaseModality
                ? MODALITY_LABELS[lead.purchaseModality]
                : 'Sin definir'
            }
          />
          <DataRow
            label="Presupuesto estimado"
            value={
              lead.budgetUsd ? `USD ${lead.budgetUsd.toLocaleString()}` : 'Sin definir'
            }
          />
          <DataRow
            label="Vehiculo actual"
            value={lead.currentVehicle?.description ?? 'No informa'}
          />
          <DataRow
            label="Test Drive"
            value={lead.testDrive?.status ?? 'No solicitado'}
          />
          <DataRow label="Sucursal asignada" value={branch ? branch.name : 'Sin definir'} />
          <DataRow
            label="Observaciones"
            value={lead.observations ?? 'Sin observaciones'}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
            <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-400">
              Resumen de la Oportunidad (IA)
            </h2>
            <p className="text-sm text-neutral-300">{summary}</p>
          </div>

          <button
            type="button"
            onClick={() => setShowOpener(true)}
            className="flex items-center justify-center gap-2 rounded-lg bg-amber-500 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-amber-400"
          >
            <Sparkles size={16} />
            Preparar conversacion
          </button>

          {showOpener && (
            <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
              <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-400">
                Preparar Conversacion
              </h2>
              <p className="mb-3 rounded-md bg-neutral-950 p-3 text-sm text-neutral-200">
                {opener}
              </p>
              <p className="mb-3 text-xs text-neutral-500">
                {NO_AUTO_SEND_DISCLAIMER}
              </p>
              <button
                type="button"
                onClick={handleCopy}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-neutral-700 py-2 text-sm text-neutral-200 hover:bg-neutral-800"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copiado' : 'Copiar mensaje'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}