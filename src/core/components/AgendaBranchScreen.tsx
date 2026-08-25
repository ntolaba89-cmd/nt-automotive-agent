import { MapPin } from 'lucide-react'
import type { Branch } from '../types/branch'

interface AgendaBranchScreenProps {
  branches: Branch[]
  onSelectBranch: (branchId: string) => void
}

export function AgendaBranchScreen({
  branches,
  onSelectBranch,
}: AgendaBranchScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-8">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-center text-xl font-semibold text-neutral-100">
          Elegi la sucursal mas cercana
        </h1>

        <div className="flex flex-col gap-3">
          {branches.map((branch) => (
            <button
              key={branch.id}
              type="button"
              onClick={() => onSelectBranch(branch.id)}
              className="flex items-start gap-3 rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-left transition-colors hover:border-amber-600 hover:bg-neutral-800"
            >
              <MapPin size={20} className="mt-0.5 shrink-0 text-amber-500" />
              <div>
                <span className="block font-medium text-neutral-100">
                  {branch.name}
                </span>
                <span className="block text-sm text-neutral-500">
                  {branch.address}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}