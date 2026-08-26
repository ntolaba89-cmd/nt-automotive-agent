import { useState } from 'react'
import type { Vehicle } from '../types/vehicle'

interface RecommendationScreenProps {
  vehicles: Vehicle[]
  onContinue: (selectedVehicleId: string | undefined) => void
}

export function RecommendationScreen({
  vehicles,
  onContinue,
}: RecommendationScreenProps) {
  const [selectedId, setSelectedId] = useState<string | undefined>(
    vehicles[0]?.id,
  )

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-8">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-center text-xl font-semibold text-neutral-100">
          Recomendacion inicial
        </h1>
        <p className="mb-8 text-center text-sm text-neutral-500">
          Basado en lo que nos contaste, estas opciones pueden interesarte.
        </p>

        <div className="mb-8 flex flex-col gap-3">
          {vehicles.map((vehicle) => (
            <button
              key={vehicle.id}
              type="button"
              onClick={() => setSelectedId(vehicle.id)}
              className={`rounded-lg border p-4 text-left transition-colors ${
                selectedId === vehicle.id
                  ? 'border-amber-600 bg-neutral-800'
                  : 'border-neutral-800 bg-neutral-900 hover:bg-neutral-800'
              }`}
            >
              <span className="font-medium text-neutral-100">
                {vehicle.name}
              </span>
              {vehicle.series && (
                <span className="ml-2 text-sm text-neutral-500">
                  {vehicle.series}
                </span>
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onContinue(selectedId)}
          className="w-full rounded-lg bg-amber-500 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-amber-400"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}