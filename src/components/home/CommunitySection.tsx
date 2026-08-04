import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowUpRight, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { events, testimonials } from '@/data/content'

export function CommunitySection() {
  return (
    <section className="bg-white dark:bg-primary-900/20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center justify-between mb-8">
              <SectionHeading eyebrow="What's Happening" title="Events & News" />
              <div className="flex gap-3 shrink-0">
                <Link to="/events" className="text-xs font-semibold text-secondary">Events</Link>
                <Link to="/news" className="text-xs font-semibold text-secondary">News</Link>
              </div>
            </div>
            <div className="space-y-3">
              {events.slice(0, 3).map((e, i) => (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-white/10 p-4 hover:border-secondary transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary-50 dark:bg-secondary/15 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <Badge tone="accent" className="!py-0.5 !px-2 text-[10px]">{e.type}</Badge>
                      <span className="text-[11px] text-text-muted">{new Date(e.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                    </div>
                    <p className="text-sm font-semibold text-primary dark:text-white mt-1 truncate">{e.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Voices" title="From our alumni" className="mb-8" />
            <div className="space-y-5">
              {testimonials.slice(0, 2).map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl bg-primary-50 dark:bg-white/5 p-6"
                >
                  <Quote className="w-6 h-6 text-secondary/40 mb-3" />
                  <p className="text-sm text-primary dark:text-slate-200 leading-relaxed italic">"{t.quote}"</p>
                  <p className="text-sm font-semibold text-primary dark:text-white mt-4">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </motion.div>
              ))}
            </div>
            <Link to="/alumni" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
              Meet more alumni <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
