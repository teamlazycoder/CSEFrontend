import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { faculty } from '@/data/content'
import { initials } from '@/lib/utils'

export function FacultyHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
        <SectionHeading eyebrow="Faculty" title="Researchers who still teach." description="32 faculty members across ten research groups, each publishing, supervising, and holding office hours." />
        <Link to="/faculty" className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary shrink-0">
          View full directory <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {faculty.slice(0, 4).map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-slate-200 dark:border-white/10 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white font-display font-bold flex items-center justify-center text-sm">
              {initials(f.name)}
            </div>
            <p className="font-display font-semibold text-primary dark:text-white mt-4 leading-snug">{f.name}</p>
            <p className="text-xs text-text-muted mt-1">{f.designation}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {f.areas.slice(0, 2).map((a) => (
                <span key={a} className="text-[11px] px-2 py-1 rounded-full bg-primary-50 dark:bg-white/5 text-primary dark:text-slate-300">{a}</span>
              ))}
            </div>
            <div className="flex items-center gap-1.5 mt-4 text-xs text-text-muted">
              <GraduationCap className="w-3.5 h-3.5" /> {f.publications} publications
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
