import { type LucideIcon } from 'lucide-react'

export function EmptyState({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-white/5 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      <p className="font-display font-semibold text-primary dark:text-white">{title}</p>
      <p className="text-sm text-text-muted mt-1.5 max-w-xs">{description}</p>
    </div>
  )
}
