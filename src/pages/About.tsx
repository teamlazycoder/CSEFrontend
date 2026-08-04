import { motion } from 'framer-motion'
import { CheckCircle2, Award } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { DEPT } from '@/data/content'

const TIMELINE = [
  { year: 1981, text: 'Department established with an initial intake of 40 undergraduate students.' },
  { year: 1998, text: 'M.Tech program launched with specialization in Software Engineering.' },
  { year: 2007, text: 'First NBA accreditation cycle cleared with commendation.' },
  { year: 2015, text: 'Central Research Facility and AI Lab established with DST funding.' },
  { year: 2021, text: 'Ph.D. program expanded; department crosses 500 published research papers.' },
  { year: 2026, text: 'Third consecutive NBA accreditation; Tech Hub innovation portal launched.' },
]

const PEOS = [
  'Graduates will apply core CS knowledge to solve real engineering problems in industry and research.',
  'Graduates will pursue continued learning through higher studies, certifications, or independent research.',
  'Graduates will communicate effectively and work productively within multidisciplinary teams.',
  'Graduates will practice engineering with professional ethics and social responsibility.',
]

const POS = [
  'Apply knowledge of mathematics, computing fundamentals, and engineering to complex problems.',
  'Identify, formulate, and analyze problems using first principles of computer science.',
  'Design solutions for complex problems considering public health, safety, and environment.',
  'Use research methods to design experiments, analyze data, and draw valid conclusions.',
  'Create, select, and apply modern tools and technologies for engineering activities.',
  'Function effectively as an individual and as a member/leader in diverse teams.',
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Built to produce engineers who ship, not just graduate."
        description={`The story of the Department of ${DEPT.name} at ${DEPT.institute}, from a 40-seat classroom in 1981 to a ten-lab research department today.`}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading eyebrow="Timeline" title="Department history" className="mb-12" />
        <div className="relative pl-8 border-l-2 border-slate-200 dark:border-white/10 space-y-10">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative"
            >
              <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-secondary ring-4 ring-secondary-50 dark:ring-secondary/15" />
              <p className="font-mono text-sm font-bold text-secondary">{t.year}</p>
              <p className="text-sm text-text-muted mt-1 max-w-xl leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-primary-900/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <Card className="p-8">
            <p className="font-display font-bold text-primary dark:text-white mb-5">Program Educational Objectives (PEOs)</p>
            <ul className="space-y-3">
              {PEOS.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm text-text-muted leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8">
            <p className="font-display font-bold text-primary dark:text-white mb-5">Program Outcomes (POs)</p>
            <ul className="space-y-3">
              {POS.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm text-text-muted leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading eyebrow="Accreditation" title="Recognized quality, verified externally" className="mb-10" />
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { title: 'NBA Accreditation', detail: 'B.Tech program accredited for 3 consecutive cycles (2025–2028).' },
            { title: 'NAAC A++ Institute', detail: 'SGGS Nanded holds NAAC A++ institutional accreditation.' },
            { title: 'AICTE Approved', detail: 'All UG, PG, and PhD programs approved under AICTE norms.' },
          ].map((a) => (
            <Card key={a.title} className="p-6">
              <Award className="w-6 h-6 text-warning mb-3" />
              <p className="font-semibold text-primary dark:text-white text-sm">{a.title}</p>
              <p className="text-xs text-text-muted mt-2 leading-relaxed">{a.detail}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
