import { CountUp } from '@/components/ui/CountUp'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { placementStats, placementTrend, recruiters, alumni } from '@/data/content'

export default function Placements() {
  return (
    <>
      <PageHeader eyebrow="Placements" title="Placement statistics, unfiltered." description="Six years of outcomes across highest, average, and median packages — plus the recruiters who keep coming back." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {[
            { label: 'Highest', value: placementStats.highest, prefix: '₹', suffix: ' LPA' },
            { label: 'Average', value: placementStats.average, prefix: '₹', suffix: ' LPA', decimals: 1 },
            { label: 'Median', value: placementStats.median, prefix: '₹', suffix: ' LPA', decimals: 1 },
            { label: 'Offers Made', value: placementStats.offers, suffix: '' },
            { label: 'Internships', value: placementStats.internships, suffix: '' },
            { label: 'Eligible Pool', value: placementStats.eligiblePool, suffix: '' },
          ].map((k) => (
            <Card key={k.label} className="p-5 text-center">
              <p className="font-mono text-xl sm:text-2xl font-bold text-primary dark:text-white">
                {k.prefix}<CountUp end={k.value} decimals={k.decimals ?? 0} duration={1.6} />{k.suffix}
              </p>
              <p className="text-xs text-text-muted mt-1.5">{k.label}</p>
            </Card>
          ))}
        </div>

        <Card className="p-7 mt-10">
          <p className="font-display font-semibold text-primary dark:text-white mb-6">Package trend, 2020–2025 (₹ LPA)</p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={placementTrend}>
              <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="4 4" />
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#6B7280' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#6B7280' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              <Bar dataKey="average" fill="#0056D6" radius={[6, 6, 0, 0]} name="Average" />
              <Bar dataKey="highest" fill="#2DA8FF" radius={[6, 6, 0, 0]} name="Highest" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </section>

      <section className="bg-white dark:bg-primary-900/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Recruiters" title="Companies that recruit here" className="mb-10" />
          <div className="flex flex-wrap gap-3">
            {recruiters.map((r) => (
              <span key={r} className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-sm font-semibold text-primary dark:text-white">{r}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading eyebrow="Alumni Outcomes" title="Where recent graduates landed" className="mb-10" />
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10">
          <table className="w-full text-sm">
            <thead className="bg-primary-50 dark:bg-white/5 text-text-muted text-xs uppercase tracking-wide">
              <tr>
                <th className="text-left px-5 py-3 font-semibold">Name</th>
                <th className="text-left px-5 py-3 font-semibold">Batch</th>
                <th className="text-left px-5 py-3 font-semibold">Company</th>
                <th className="text-left px-5 py-3 font-semibold">Role</th>
                <th className="text-left px-5 py-3 font-semibold">Package</th>
              </tr>
            </thead>
            <tbody>
              {alumni.map((a) => (
                <tr key={a.id} className="border-t border-slate-100 dark:border-white/5">
                  <td className="px-5 py-3.5 font-medium text-primary dark:text-white">{a.name}</td>
                  <td className="px-5 py-3.5 text-text-muted">{a.batch}</td>
                  <td className="px-5 py-3.5 text-text-muted">{a.company}</td>
                  <td className="px-5 py-3.5 text-text-muted">{a.role}</td>
                  <td className="px-5 py-3.5 font-mono text-primary dark:text-white">{a.package}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
