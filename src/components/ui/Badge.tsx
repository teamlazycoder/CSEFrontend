import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const tones = {
  default: 'bg-primary-50 text-primary dark:bg-white/5 dark:text-white',
  accent: 'bg-secondary-50 text-secondary dark:bg-secondary/15 dark:text-accent',
  success: 'bg-emerald-50 text-success dark:bg-emerald-500/10',
  warning: 'bg-amber-50 text-warning dark:bg-amber-500/10',
  danger: 'bg-red-50 text-danger dark:bg-red-500/10',
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: keyof typeof tones
}

export function Badge({ className, tone = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide',
        tones[tone],
        className
      )}
      {...props}
    />
  )
}
