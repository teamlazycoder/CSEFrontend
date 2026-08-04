import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Calendar, ClipboardList } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { programs } from '@/data/content'

const RESOURCES = [
  { icon: FileText, label: 'Curriculum & Syllabus', desc: 'Semester-wise course structure and detailed syllabi' },
  { icon: Calendar, label: 'Academic Calendar', desc: 'Term dates, exam schedules, and holidays' },
  { icon: ClipboardList, label: 'Time Tables', desc: 'Lecture and lab timetables by semester' },
  { icon: Download, label: 'Question Papers', desc: 'Previous years\' end-semester papers' },
]

const TABS = ['UG', 'PG', 'PhD'] as const

export default function Academics() {
  const [tab, setTab] = useState<typeof TABS[number]>('UG')

  return (
    <>
      <PageHeader eyebrow="Academics" title="Curriculum built for depth, not just credits." description="Undergraduate, postgraduate, and doctoral tracks — each with a project-driven core." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-2 border-b border-slate-200 dark:border-white/10 mb-10">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
                tab === t ? 'border-secondary text-secondary' : 'border-transparent text-text-muted hover:text-primary dark:hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {programs
          .filter((p) => (tab === 'UG' ? p.id === 'btech' : tab === 'PG' ? p.id === 'mtech' : p.id === 'phd'))
          .map((p) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Badge tone="accent" className="mb-4">{p.level}</Badge>
              <h2 className="font-display text-2xl font-bold text-primary dark:text-white">{p.title}</h2>
              <p className="text-text-muted mt-3 max-w-2xl leading-relaxed">{p.desc}</p>
              <div className="flex gap-8 mt-6 text-sm">
                <div><p className="text-text-muted text-xs">Duration</p><p className="font-semibold text-primary dark:text-white mt-1">{p.duration}</p></div>
                <div><p className="text-text-muted text-xs">Annual Intake</p><p className="font-semibold text-primary dark:text-white mt-1">{p.intake} students</p></div>
              </div>
            </motion.div>
          ))}
      </section>

      <section className="bg-white dark:bg-primary-900/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-8">Downloads & Resources</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESOURCES.map((r) => (
              <Card key={r.label} className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
                <r.icon className="w-6 h-6 text-secondary mb-3" />
                <p className="text-sm font-semibold text-primary dark:text-white">{r.label}</p>
                <p className="text-xs text-text-muted mt-1.5 leading-relaxed">{r.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
