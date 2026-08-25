import { Clock } from 'lucide-react'
import type { TimeSlotAvailability } from '../logic'

interface AgendaTimeScreenProps {
  slots: TimeSlotAvailability[]
  onSelectTime: (time: string) => void
}

export function AgendaTimeScreen({ slots, onSelectTime }: AgendaTimeScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-8">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-center text-xl font-semibold text-neutral-100">
          Elegi un horario
        </h1>

        <div className="grid grid-cols-2 gap-3">
          {slots.map((slot) => (
            <button
              key={slot.time}
              type="button"
              disabled={!slot.available}
              onClick={() => onSelectTime(slot.time)}
              className={`flex items-center justify-center gap-2 rounded-lg border p-4 text-sm font-medium transition-colors ${
                slot.available
                  ? 'border-neutral-800 bg-neutral-900 text-neutral-100 hover:border-amber-600 hover:bg-neutral-800'
                  : 'cursor-not-allowed border-neutral-900 bg-neutral-950 text-neutral-700 line-through'
              }`}
            >
              <Clock size={16} />
              {slot.time}
              {!slot.available && <span className="text-xs">(ocupado)</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}