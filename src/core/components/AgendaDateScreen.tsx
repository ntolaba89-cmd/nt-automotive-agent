import { CalendarDays } from 'lucide-react'
import type { DateOption } from '../logic'

interface AgendaDateScreenProps {
  dates: DateOption[]
  onSelectDate: (date: string) => void
}

export function AgendaDateScreen({ dates, onSelectDate }: AgendaDateScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-8">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-center text-xl font-semibold text-neutral-100">
          Elegi una fecha
        </h1>

        <div className="grid grid-cols-2 gap-3">
          {dates.map((date) => (
            <button
              key={date.value}
              type="button"
              onClick={() => onSelectDate(date.value)}
              className="flex flex-col items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 p-4 transition-colors hover:border-amber-600 hover:bg-neutral-800"
            >
              <CalendarDays size={18} className="text-amber-500" />
              <span className="text-sm font-medium text-neutral-100">
                {date.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}