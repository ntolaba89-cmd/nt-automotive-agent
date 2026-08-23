import type { LucideIcon } from 'lucide-react'

interface KpiCardProps {
  label: string
  value: number
  Icon: LucideIcon
}

export function KpiCard({ label, value, Icon }: KpiCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900 p-4">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          {label}
        </span>
        <span className="text-2xl font-semibold text-neutral-100">
          {value}
        </span>
      </div>
      <Icon className="text-amber-500" size={22} />
    </div>
  )
}