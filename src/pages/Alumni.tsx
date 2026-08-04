import { motion } from 'framer-motion'
import { Building2, Briefcase } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { alumni, testimonials } from '@/data/content'
import { initials } from '@/lib/utils'

export default function Alumni() {
  const byYear = [...alumni].sort((a, b) => b.batch - a.batch)

  return (
    <>
      <PageHeader eyebrow="Alumni" title="Where our graduates go." description="An interactive look at recent batches — companies, roles, and the ones who chose research instead." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative pl-8 border-l-2 border-slate-200 dark:border-white/10 space-y-8">
          {byYear.map((a, i) => (
            <motion.div key={a.id} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="relative">
              <div className="absolute -left-[calc(2rem+5px)] top-2 w-3 h-3 rounded-full bg-secondary ring-4 ring-secondary-50 dark:ring-secondary/15" />
              <Card className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-white font-display font-bold flex items-center justify-center text-xs shrink-0">
                  {initials(a.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-primary dark:text-white text-sm">{a.name} <span className="text-text-muted font-normal">· Batch {a.batch}</span></p>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-text-muted">
                    <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5" /> {a.company}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {a.role}</span>
                  </div>
                </div>
                <p className="font-mono text-sm text-secondary shrink-0">{a.package}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-primary-900/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-8">In their words</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-6">
                <p className="text-sm text-primary dark:text-slate-200 italic leading-relaxed">"{t.quote}"</p>
                <p className="text-sm font-semibold text-primary dark:text-white mt-4">{t.name}</p>
                <p className="text-xs text-text-muted">{t.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
