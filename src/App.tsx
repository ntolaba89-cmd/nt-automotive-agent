import { mockLeads } from './mocks/leads'
import { scoreLead } from './core/logic'
import { LeadScoreBadge } from './core/components/LeadScoreBadge'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <h1 className="mb-6 text-xl font-semibold text-neutral-100">
        Verificacion visual: LeadScoreBadge
      </h1>
      <div className="flex flex-col gap-3">
        {mockLeads.map((lead) => {
          const result = scoreLead(lead)
          return (
            <div
              key={lead.id}
              className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900 p-4"
            >
              <span className="text-neutral-200">
                {lead.firstName} {lead.lastName}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-sm text-neutral-500">
                  {result.score}/100
                </span>
                <LeadScoreBadge classification={result.classification} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App