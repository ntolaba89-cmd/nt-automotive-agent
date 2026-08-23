import { useState } from 'react'
import { Users, Calendar, TrendingUp, Car } from 'lucide-react'
import { mockLeads } from './mocks/leads'
import { mockAppointments } from './mocks/appointments'
import { mockVehicles } from './mocks/vehicles'
import { mockBranches } from './mocks/branches'
import { calculateDashboardMetrics } from './core/logic'
import { KpiCard } from './core/components/KpiCard'
import { LeadRow } from './core/components/LeadRow'
import { LeadDetail } from './core/components/LeadDetail'

function App() {
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

export default App