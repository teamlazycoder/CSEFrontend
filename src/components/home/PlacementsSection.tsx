import { motion } from 'framer-motion'
import { CountUp } from '@/components/ui/CountUp'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { placementStats, placementTrend, recruiters } from '@/data/content'

const KPIS = [
  { label: 'Highest Package', value: placementStats.highest, prefix: '₹', suffix: ' LPA' },
  { label: 'Average Package', value: placementStats.average, prefix: '₹', suffix: ' LPA', decimals: 1 },
  { label: 'Offers Made', value: placementStats.offers, suffix: '' },
  { label: 'Internships', value: placementStats.internships, suffix: '' },
]

export function PlacementsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
        <SectionHeading eyebrow="Placements" title="Outcomes, not promises." description="Six years of consistent upward placement trends, backed by a recruiter base that returns every year." />
        <Link to="/placements" className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary shrink-0">
          Full placement report <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid lg:grid-cols-[1fr,1.1fr] gap-8 items-center">
        <div className="grid grid-cols-2 gap-5">
          {KPIS.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200 dark:border-white/10 p-6"
            >
              <p className="font-mono text-2xl sm:text-3xl font-bold text-primary dark:text-white">
                {k.prefix}<CountUp end={k.value} decimals={k.decimals ?? 0} duration={2} enableScrollSpy scrollSpyOnce />{k.suffix}
              </p>
              <p className="text-xs text-text-muted mt-1.5">{k.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-white/10 p-6">
          <p className="text-sm font-semibold text-primary dark:text-white mb-4">Average package trend (₹ LPA)</p>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={placementTrend}>
              <defs>
                <linearGradient id="avgGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0056D6" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#0056D6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              <Area type="monotone" dataKey="average" stroke="#0056D6" strokeWidth={2.5} fill="url(#avgGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-16 overflow-hidden">
        <p className="text-xs font-bold tracking-[0.2em] text-text-muted uppercase font-mono mb-6 text-center">Top Recruiters</p>
        <div className="relative">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...recruiters, ...recruiters].map((r, i) => (
              <span key={i} className="font-display font-bold text-xl text-primary/30 dark:text-white/20">{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
