import { MessageCircle, Calendar, Search } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type DecisionChoice = 'hablar_asesor' | 'reservar_cita' | 'seguir_consultando'

interface DecisionScreenProps {
  onSelect: (choice: DecisionChoice) => void
}

interface DecisionOption {
  id: DecisionChoice
  label: string
  Icon: LucideIcon
}

const DECISION_OPTIONS: DecisionOption[] = [
  { id: 'hablar_asesor', label: 'Hablar con un asesor', Icon: MessageCircle },
  { id: 'reservar_cita', label: 'Reservar una cita', Icon: Calendar },
  { id: 'seguir_consultando', label: 'Seguir consultando', Icon: Search },
]

export function DecisionScreen({ onSelect }: DecisionScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-8">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-center text-xl font-semibold text-neutral-100">
          Perfecto. Ya tengo una idea bastante clara de lo que estas
          buscando.
        </h1>

        <div className="flex flex-col gap-3">
          {DECISION_OPTIONS.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => onSelect(id)}
              className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-left transition-colors hover:border-amber-600 hover:bg-neutral-800"
            >
              <Icon size={20} className="text-amber-500" />
              <span className="font-medium text-neutral-100">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}