import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { researchDomains } from '@/data/content'

export default function Research() {
  return (
    <>
      <PageHeader eyebrow="Research" title="Ten domains, funded and active." description="From cybersecurity to robotics — every research group here runs on grants, publishes, and takes on undergraduate collaborators." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchDomains.map((d, i) => {
            const Icon = (Icons as any)[d.icon] ?? Icons.Sparkles
            return (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="p-7 h-full hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-secondary-50 dark:bg-secondary/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="font-display font-semibold text-primary dark:text-white">{d.name}</p>
                  <div className="flex gap-4 mt-3 text-xs text-text-muted">
                    <span>{d.papers} papers</span>
                    <span>{d.faculty} faculty leads</span>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="bg-white dark:bg-primary-900/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Funding & Output" title="Research at a glance" className="mb-10" />
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { label: 'Active Grants', value: '18' },
              { label: 'Funding Secured', value: '₹6.4 Cr' },
              { label: 'Papers Published', value: '640+' },
              { label: 'Patents Filed', value: '28' },
            ].map((s) => (
              <Card key={s.label} className="p-6 text-center">
                <p className="font-mono text-2xl font-bold text-primary dark:text-white">{s.value}</p>
                <p className="text-xs text-text-muted mt-1.5">{s.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
