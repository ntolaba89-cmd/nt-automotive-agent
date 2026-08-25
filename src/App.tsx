import { useState } from 'react'
import { Users, Calendar, TrendingUp, Car } from 'lucide-react'
import { mockLeads } from './mocks/leads'
import { mockAppointments } from './mocks/appointments'
import { mockVehicles } from './mocks/vehicles'
import { mockBranches } from './mocks/branches'
import { calculateDashboardMetrics, recommendVehicles } from './core/logic'
import { KpiCard } from './core/components/KpiCard'
import { LeadRow } from './core/components/LeadRow'
import { LeadDetail } from './core/components/LeadDetail'
import { WelcomeScreen } from './core/components/WelcomeScreen'
import { DiscoveryUseScreen } from './core/components/DiscoveryUseScreen'
import { RecommendationScreen } from './core/components/RecommendationScreen'
import type { ConversationEntryPoint, ConversationState } from './core/types/conversation'
import { INITIAL_CONVERSATION_STATE } from './core/types/conversation'
import type { VehicleUse } from './core/types/lead'
import { getNextStepAfterEntry } from './core/logic'

type ViewMode = 'cliente' | 'asesor'

function AdvisorDashboard() {
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null)

  const selectedLead = mockLeads.find((lead) => lead.id === selectedLeadId)

  if (selectedLead) {
    const vehicle = mockVehicles.find((v) => v.id === selectedLead.interestVehicleId)
    const branch = mockBranches.find((b) => b.id === selectedLead.branchId)
    return (
      <LeadDetail
        lead={selectedLead}
        vehicle={vehicle}
        branch={branch}
        onBack={() => setSelectedLeadId(null)}
      />
    )
  }

  const metrics = calculateDashboardMetrics(mockLeads, mockAppointments)

  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <header className="mb-8">
        <h1 className="text-lg font-semibold text-amber-500">
          NT Automotive Agent
        </h1>
        <p className="text-sm text-neutral-500">Dealer Premier</p>
      </header>

      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <KpiCard label="Nuevos Leads" value={metrics.newLeads} Icon={Users} />
        <KpiCard
          label="Citas Activas"
          value={metrics.appointmentsActive}
          Icon={Calendar}
        />
        <KpiCard
          label="Alta Intencion"
          value={metrics.highIntentLeads}
          Icon={TrendingUp}
        />
        <KpiCard label="Test Drives" value={metrics.testDrives} Icon={Car} />
      </div>

      <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-neutral-400">
        Leads Activos
      </h2>
      <div className="flex flex-col gap-3">
        {mockLeads.map((lead) => {
          const vehicle = mockVehicles.find((v) => v.id === lead.interestVehicleId)
          const branch = mockBranches.find((b) => b.id === lead.branchId)
          return (
            <LeadRow
              key={lead.id}
              lead={lead}
              vehicle={vehicle}
              branch={branch}
              onClick={() => setSelectedLeadId(lead.id)}
            />
          )
        })}
      </div>
    </div>
  )
}

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('cliente')
  const [conversation, setConversation] = useState<ConversationState>(
    INITIAL_CONVERSATION_STATE,
  )

  const handleSelectEntryPoint = (entryPoint: ConversationEntryPoint) => {
    setConversation((prev) => ({
      ...prev,
      entryPoint,
      step: getNextStepAfterEntry(entryPoint),
      draftLead: {
        ...prev.draftLead,
        purchaseModality:
          entryPoint === 'financiacion'
            ? 'financiado'
            : entryPoint === 'plan_ahorro'
              ? 'plan_ahorro'
              : prev.draftLead.purchaseModality,
      },
    }))
  }

  const handleSelectUse = (use: VehicleUse) => {
    setConversation((prev) => ({
      ...prev,
      step: 'recomendacion',
      draftLead: {
        ...prev.draftLead,
        intendedUse: use,
      },
    }))
  }

  const handleContinueFromRecommendation = () => {
    setConversation((prev) => ({
      ...prev,
      step: 'decision',
    }))
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setViewMode(viewMode === 'cliente' ? 'asesor' : 'cliente')}
        className="fixed right-4 top-4 z-50 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300 hover:bg-neutral-800"
      >
        Ver vista {viewMode === 'cliente' ? 'Asesor' : 'Cliente'}
      </button>

      {viewMode === 'cliente' ? (
        conversation.step === 'bienvenida' ? (
          <WelcomeScreen onSelectEntryPoint={handleSelectEntryPoint} />
        ) : conversation.step === 'descubrimiento' &&
          conversation.entryPoint === 'buscar_vehiculo' ? (
          <DiscoveryUseScreen onSelectUse={handleSelectUse} />
        ) : conversation.step === 'recomendacion' &&
          conversation.draftLead.intendedUse ? (
          <RecommendationScreen
            vehicles={recommendVehicles(
              conversation.draftLead.intendedUse,
              mockVehicles,
            )}
            onContinue={handleContinueFromRecommendation}
          />
        ) : (
          <div className="flex min-h-screen items-center justify-center bg-neutral-950 p-8 text-center text-neutral-300">
            <div>
              <p className="mb-2 text-sm text-neutral-500">
                [Vista de depuracion temporal]
              </p>
              <p className="text-lg">
                Entry point: <strong>{conversation.entryPoint}</strong>
              </p>
              <p className="text-lg">
                Step actual: <strong>{conversation.step}</strong>
              </p>
              <p className="text-lg">
                Uso: <strong>{conversation.draftLead.intendedUse ?? '(sin definir)'}</strong>
              </p>
              <button
                type="button"
                onClick={() => setConversation(INITIAL_CONVERSATION_STATE)}
                className="mt-4 rounded-md border border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-800"
              >
                Volver a Bienvenida
              </button>
            </div>
          </div>
        )
      ) : (
        <AdvisorDashboard />
      )}
    </div>
  )
}

export default App