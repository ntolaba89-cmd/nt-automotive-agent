import { TrendingUp, Minus, TrendingDown, type LucideIcon } from 'lucide-react'
import type { LeadScoreClassification } from '../types/lead-score'

interface LeadScoreBadgeProps {
  classification: LeadScoreClassification
}

interface BadgeStyle {
  label: string
  className: string
  Icon: LucideIcon
}

const BADGE_STYLES: Record<LeadScoreClassification, BadgeStyle> = {
  ALTA: {
    label: 'SCORE: ALTA',
    className: 'bg-emerald-950 text-emerald-400 border-emerald-800',
    Icon: TrendingUp,
  },
  MEDIA: {
    label: 'SCORE: MEDIA',
    className: 'bg-amber-950 text-amber-400 border-amber-800',
    Icon: Minus,
  },
  BAJA: {
    label: 'SCORE: BAJA',
    className: 'bg-red-950 text-red-400 border-red-800',
    Icon: TrendingDown,
  },
}

export function LeadScoreBadge({ classification }: LeadScoreBadgeProps) {
  const { label, className, Icon } = BADGE_STYLES[classification]

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium uppercase tracking-wide ${className}`}
    >
      <Icon size={14} />
      {label}
    </span>
  )
}