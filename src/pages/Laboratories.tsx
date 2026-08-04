import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cpu, Users, User } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { labs } from '@/data/content'

export default function Laboratories() {
  const [active, setActive] = useState<typeof labs[number] | null>(null)

  return (
    <>
      <PageHeader eyebrow="Laboratories" title="Ten labs. Real hardware." description="From GPU workstations to a pen-testing range — every lab here is built for hands-on work, not demonstrations." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, i) => (
            <motion.div
              key={lab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Card className="p-6 h-full cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all" onClick={() => setActive(lab)}>
                <Cpu className="w-6 h-6 text-secondary mb-3" />
                <p className="font-display font-semibold text-primary dark:text-white">{lab.name}</p>
                <p className="text-xs text-text-muted mt-2 flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Capacity: {lab.capacity}</p>
                <p className="text-xs text-text-muted mt-1 flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {lab.incharge}</p>
                <button className="mt-4 text-xs font-semibold text-secondary">View details →</button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] bg-primary-900/60 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-white dark:bg-primary-900 p-7 shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <p className="font-display text-xl font-bold text-primary dark:text-white">{active.name}</p>
                <button onClick={() => setActive(null)} className="p-1.5 rounded-lg hover:bg-primary-50 dark:hover:bg-white/5"><X className="w-4 h-4" /></button>
              </div>
              <div className="mt-5 space-y-3 text-sm">
                <p><span className="text-text-muted">Lab In-charge: </span><span className="text-primary dark:text-white font-medium">{active.incharge}</span></p>
                <p><span className="text-text-muted">Capacity: </span><span className="text-primary dark:text-white font-medium">{active.capacity} students</span></p>
                <p><span className="text-text-muted">Equipment: </span><span className="text-primary dark:text-white font-medium">{active.equipment}</span></p>
                <div>
                  <p className="text-text-muted mb-2">Software Stack:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {active.software.map((s) => <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-primary-50 dark:bg-white/5 text-primary dark:text-slate-300">{s}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
