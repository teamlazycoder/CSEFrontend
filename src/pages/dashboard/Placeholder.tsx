import { type LucideIcon } from 'lucide-react'
import { ModulePlaceholder } from '@/components/dashboard/ModulePlaceholder'

export default function Placeholder({ icon, title, description }: { icon: LucideIcon; title: string; description?: string }) {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-primary dark:text-white">{title}</h1>
      <ModulePlaceholder icon={icon} title={`${title} module`} description={description} />
    </div>
  )
}
