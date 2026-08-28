import { useState } from 'react'
import { PartyPopper } from 'lucide-react'
import type { Vehicle } from '../types/vehicle'
import type { Branch } from '../types/branch'

interface ConfirmationScreenProps {
  vehicle?: Vehicle
  branch?: Branch
  date: string
  time: string
  onConfirm: (firstName: string, lastName: string) => void
}

function formatDateLabel(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}

export function ConfirmationScreen({
  vehicle,
  branch,
  date,
  time,
  onConfirm,
}: ConfirmationScreenProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  const canConfirm = firstName.trim() !== '' && lastName.trim() !== ''

  const handleConfirm = () => {
    if (!canConfirm) return
    setConfirmed(true)
    onConfirm(firstName.trim(), lastName.trim())
  }

  if (confirmed) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-8 text-center">
        <PartyPopper size={40} className="mb-4 text-amber-500" />
        <h1 className="mb-6 text-xl font-semibold text-neutral-100">
          Cita confirmada!
        </h1>
        <div className="w-full max-w-sm rounded-lg border border-neutral-800 bg-neutral-900 p-5 text-left text-sm">
          <div className="mb-2 flex justify-between border-b border-neutral-800 pb-2">
            <span className="text-neutral-500">Cliente</span>
            <span className="text-neutral-200">
              {firstName} {lastName}
            </span>
          </div>
          <div className="mb-2 flex justify-between border-b border-neutral-800 pb-2">
            <span className="text-neutral-500">Vehiculo</span>
            <span className="text-neutral-200">
              {vehicle ? vehicle.name : 'Sin definir'}
            </span>
          </div>
          <div className="mb-2 flex justify-between border-b border-neutral-800 pb-2">
            <span className="text-neutral-500">Sucursal</span>
            <span className="text-neutral-200">
              {branch ? branch.name : 'Sin definir'}
            </span>
          </div>
          <div className="mb-2 flex justify-between border-b border-neutral-800 pb-2">
            <span className="text-neutral-500">Fecha</span>
            <span className="text-neutral-200">{formatDateLabel(date)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Hora</span>
            <span className="text-neutral-200">{time}</span>
          </div>
        </div>
        <p className="mt-6 max-w-sm text-sm text-neutral-500">
          Tu asesor ya tiene la informacion de tu consulta y podra
          continuar la atencion cuando llegues.
        </p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-8">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-center text-xl font-semibold text-neutral-100">
          Un ultimo paso
        </h1>
        <label className="mb-2 block text-sm text-neutral-400">
          Cual es tu nombre?
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Tu nombre"
          className="mb-4 w-full rounded-lg border border-neutral-800 bg-neutral-900 p-3 text-neutral-100 placeholder:text-neutral-600 focus:border-amber-600 focus:outline-none"
        />
        <label className="mb-2 block text-sm text-neutral-400">
          Y tu apellido?
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Tu apellido"
          className="mb-4 w-full rounded-lg border border-neutral-800 bg-neutral-900 p-3 text-neutral-100 placeholder:text-neutral-600 focus:border-amber-600 focus:outline-none"
        />
        <button
          type="button"
          onClick={handleConfirm}
          disabled={!canConfirm}
          className="w-full rounded-lg bg-amber-500 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-neutral-500"
        >
          Confirmar cita
        </button>
      </div>
    </div>
  )
}