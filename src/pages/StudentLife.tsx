import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { chapters, events } from '@/data/content'

export default function StudentLife() {
  return (
    <>
      <PageHeader eyebrow="Student Life" title="Outside the classroom, still building." description="Five active chapters running weekly workshops, contests, and mentorship — open to every year." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((c, i) => (
            <motion.div key={c.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
              <Card className="p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-xl bg-secondary-50 dark:bg-secondary/15 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <p className="font-display font-semibold text-primary dark:text-white">{c.name}</p>
                <p className="text-xs text-text-muted mt-2 leading-relaxed">{c.desc}</p>
                <p className="text-xs font-mono text-secondary mt-4">{c.members} active members</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-primary-900/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Upcoming" title="Events across chapters" className="mb-10" />
          <div className="grid sm:grid-cols-2 gap-5">
            {events.map((e) => (
              <Card key={e.id} className="p-5 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-primary dark:text-white text-sm">{e.title}</p>
                  <p className="text-xs text-text-muted mt-1">{e.type} · {new Date(e.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long' })}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
