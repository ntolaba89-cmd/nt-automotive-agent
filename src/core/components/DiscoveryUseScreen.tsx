import { Home, Briefcase, Building2, Plane, Shuffle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { VehicleUse } from '../types/lead'

interface DiscoveryUseScreenProps {
  onSelectUse: (use: VehicleUse) => void
}

interface UseOption {
  id: VehicleUse
  label: string
  Icon: LucideIcon
}

const USE_OPTIONS: UseOption[] = [
  { id: 'familiar', label: 'Familiar', Icon: Home },
  { id: 'trabajo', label: 'Trabajo', Icon: Briefcase },
  { id: 'ciudad', label: 'Ciudad', Icon: Building2 },
  { id: 'viajes', label: 'Viajes', Icon: Plane },
  { id: 'mixto', label: 'Uso mixto', Icon: Shuffle },
]

export function DiscoveryUseScreen({ onSelectUse }: DiscoveryUseScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-8">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-center text-xl font-semibold text-neutral-100">
          Para que lo vas a utilizar principalmente?
        </h1>

        <div className="flex flex-wrap justify-center gap-3">
          {USE_OPTIONS.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => onSelectUse(id)}
              className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-amber-600 hover:bg-neutral-800"
            >
              <Icon size={16} className="text-amber-500" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}