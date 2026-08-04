import { CountUp } from '@/components/ui/CountUp'
import { motion } from 'framer-motion'
import { stats } from '@/data/content'

export function StatsSection() {
  return (
    <section className="border-y border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="text-center"
          >
            <p className="font-mono text-3xl sm:text-4xl font-bold text-primary dark:text-white">
              <CountUp end={s.value} duration={2} enableScrollSpy scrollSpyOnce />
              {s.suffix}
            </p>
            <p className="text-xs text-text-muted mt-1.5">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
