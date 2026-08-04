import { motion } from 'framer-motion'
import { ArrowRight, Clock, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { programs } from '@/data/content'

export function ProgramsSection() {
  return (
    <section className="bg-white dark:bg-primary-900/20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Programs Offered" title="Three degrees, one standard." align="center" className="mb-14" />
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-slate-200 dark:border-white/10 p-7 hover:border-secondary hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <Badge tone="accent" className="self-start mb-4">{p.level}</Badge>
              <h3 className="font-display font-bold text-lg text-primary dark:text-white leading-snug">{p.title}</h3>
              <p className="text-sm text-text-muted mt-3 leading-relaxed flex-1">{p.desc}</p>
              <div className="flex items-center gap-4 mt-5 text-xs text-text-muted">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {p.duration}</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {p.intake} seats</span>
              </div>
              <Link to="/academics" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group-hover:gap-2.5 transition-all">
                View curriculum <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
