import { CheckCircle2 } from 'lucide-react'

interface AdvisorRequestedScreenProps {
  onRestart: () => void
}

export function AdvisorRequestedScreen({ onRestart }: AdvisorRequestedScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-8 text-center">
      <CheckCircle2 size={40} className="mb-4 text-emerald-500" />
      <h1 className="mb-2 text-xl font-semibold text-neutral-100">
        Listo, ya avisamos a un asesor
      </h1>
      <p className="mb-8 max-w-sm text-sm text-neutral-500">
        Un asesor va a revisar tu consulta y se va a poner en contacto con
        vos a la brevedad.
      </p>
      <button
        type="button"
        onClick={onRestart}
        className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800"
      >
        Volver al inicio
      </button>
    </div>
  )
}