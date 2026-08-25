import { Car, Landmark, PiggyBank, Calendar, MessageCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ConversationEntryPoint } from '../types/conversation'

interface WelcomeScreenProps {
  onSelectEntryPoint: (entryPoint: ConversationEntryPoint) => void
}

interface EntryOption {
  id: ConversationEntryPoint
  label: string
  Icon: LucideIcon
}

const ENTRY_OPTIONS: EntryOption[] = [
  { id: 'buscar_vehiculo', label: 'Buscar vehiculo', Icon: Car },
  { id: 'financiacion', label: 'Financiacion', Icon: Landmark },
  { id: 'plan_ahorro', label: 'Plan de ahorro', Icon: PiggyBank },
  { id: 'test_drive', label: 'Test Drive', Icon: Calendar },
  { id: 'otra_consulta', label: 'Otra consulta', Icon: MessageCircle },
]

export function WelcomeScreen({ onSelectEntryPoint }: WelcomeScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-8">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-center text-2xl font-semibold text-neutral-100">
          Hola
        </h1>
        <p className="mb-1 text-center text-neutral-300">
          Estoy aca para ayudarte a encontrar el vehiculo adecuado.
        </p>
        <p className="mb-8 text-center text-sm text-neutral-500">
          Podes consultar modelos, financiacion, Test Drive o hablar con un
          asesor.
        </p>

        <div className="flex flex-col gap-3">
          {ENTRY_OPTIONS.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => onSelectEntryPoint(id)}
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