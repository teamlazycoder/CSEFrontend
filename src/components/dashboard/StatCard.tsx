import { type LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { CountUp } from '@/components/ui/CountUp'
import { Card } from '@/components/ui/Card'

export function StatCard({ icon: Icon, label, value, suffix = '', decimals = 0, tone = 'secondary' }: {
  icon: LucideIcon; label: string; value: number; suffix?: string; decimals?: number
  tone?: 'secondary' | 'success' | 'warning' | 'danger'
}) {
  const tones = {
    secondary: 'bg-secondary-50 dark:bg-secondary/15 text-secondary',
    success: 'bg-emerald-50 dark:bg-emerald-500/10 text-success',
    warning: 'bg-amber-50 dark:bg-amber-500/10 text-warning',
    danger: 'bg-red-50 dark:bg-red-500/10 text-danger',
  }
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Card className="p-5">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${tones[tone]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <p className="font-mono text-2xl font-bold text-primary dark:text-white">
          <CountUp end={value} decimals={decimals} duration={1.4} suffix={suffix} />
        </p>
        <p className="text-xs text-text-muted mt-1">{label}</p>
      </Card>
    </motion.div>
  )
}
