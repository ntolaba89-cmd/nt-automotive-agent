import type { Vehicle } from '../types/vehicle'

interface RecommendationScreenProps {
  vehicles: Vehicle[]
  onContinue: () => void
}

export function RecommendationScreen({
  vehicles,
  onContinue,
}: RecommendationScreenProps) {
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
            <div
              key={vehicle.id}
              className="rounded-lg border border-neutral-800 bg-neutral-900 p-4"
            >
              <span className="font-medium text-neutral-100">
                {vehicle.name}
              </span>
              {vehicle.series && (
                <span className="ml-2 text-sm text-neutral-500">
                  {vehicle.series}
                </span>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-lg bg-amber-500 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-amber-400"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}