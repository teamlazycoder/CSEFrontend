import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts'
import { Card } from '@/components/ui/Card'
import { studentAttendance } from '@/data/content'

export default function StudentAttendance() {
  const data = studentAttendance.map((s) => ({ ...s, pct: Math.round((s.attended / s.total) * 100) }))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-primary dark:text-white">Attendance</h1>
        <p className="text-sm text-text-muted mt-1">Minimum 75% required to be exam-eligible.</p>
      </div>

      <Card className="p-7">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="4 4" />
            <XAxis dataKey="subject" tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} interval={0} angle={-15} textAnchor="end" height={70} />
            <YAxis tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} domain={[0, 100]} />
            <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} formatter={(v) => [`${v}%`, 'Attendance']} />
            <Bar dataKey="pct" radius={[6, 6, 0, 0]}>
              {data.map((d, i) => <Cell key={i} fill={d.pct >= 75 ? '#16A34A' : '#DC2626'} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-primary-50 dark:bg-white/5 text-text-muted text-xs uppercase tracking-wide">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">Subject</th>
              <th className="text-left px-5 py-3 font-semibold">Attended</th>
              <th className="text-left px-5 py-3 font-semibold">Total</th>
              <th className="text-left px-5 py-3 font-semibold">%</th>
              <th className="text-left px-5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((s) => (
              <tr key={s.subject} className="border-t border-slate-100 dark:border-white/5">
                <td className="px-5 py-3.5 font-medium text-primary dark:text-white">{s.subject}</td>
                <td className="px-5 py-3.5 text-text-muted">{s.attended}</td>
                <td className="px-5 py-3.5 text-text-muted">{s.total}</td>
                <td className="px-5 py-3.5 font-mono text-primary dark:text-white">{s.pct}%</td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.pct >= 75 ? 'bg-emerald-50 text-success dark:bg-emerald-500/10' : 'bg-red-50 text-danger dark:bg-red-500/10'}`}>
                    {s.pct >= 75 ? 'Eligible' : 'At Risk'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
