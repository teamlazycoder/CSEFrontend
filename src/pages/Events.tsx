import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { events } from '@/data/content'

export default function Events() {
  return (
    <>
      <PageHeader eyebrow="Events" title="Hackathons, workshops, and talks." description="Registrations, certificates, and everything the department runs this semester." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {events.map((e, i) => (
            <motion.div key={e.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
              <Card className="p-6 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all">
                <Badge tone="accent" className="self-start">{e.type}</Badge>
                <p className="font-display font-bold text-primary dark:text-white mt-3">{e.title}</p>
                <p className="text-sm text-text-muted mt-2 leading-relaxed flex-1">{e.desc}</p>
                <div className="flex items-center gap-4 mt-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {new Date(e.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> CSE Seminar Hall</span>
                </div>
                <Button size="sm" className="mt-5 self-start">Register</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
