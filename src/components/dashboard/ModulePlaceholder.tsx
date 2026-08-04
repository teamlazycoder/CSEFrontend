import { type LucideIcon, Construction } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export function ModulePlaceholder({ icon: Icon = Construction, title, description }: { icon?: LucideIcon; title: string; description?: string }) {
  return (
    <Card className="p-16 flex flex-col items-center justify-center text-center">
      <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-white/5 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      <p className="font-display font-semibold text-primary dark:text-white">{title}</p>
      <p className="text-sm text-text-muted mt-1.5 max-w-sm">{description ?? 'This module is wired into the portal and ready for backend integration.'}</p>
    </Card>
  )
}
