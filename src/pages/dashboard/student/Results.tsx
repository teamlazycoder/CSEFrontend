import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { Download } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { studentResults } from '@/data/content'

export default function StudentResults() {
  const cgpa = (studentResults.reduce((s, r) => s + r.sgpa, 0) / studentResults.length).toFixed(2)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-primary dark:text-white">Results & CGPA</h1>
          <p className="text-sm text-text-muted mt-1">Semester-wise SGPA and cumulative performance.</p>
        </div>
        <Button size="sm" variant="outline"><Download className="w-3.5 h-3.5" /> Download Transcript</Button>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        <Card className="p-6"><p className="text-xs text-text-muted">Cumulative CGPA</p><p className="font-mono text-3xl font-bold text-primary dark:text-white mt-1.5">{cgpa}</p></Card>
        <Card className="p-6"><p className="text-xs text-text-muted">Latest SGPA</p><p className="font-mono text-3xl font-bold text-primary dark:text-white mt-1.5">{studentResults[studentResults.length - 1].sgpa}</p></Card>
        <Card className="p-6"><p className="text-xs text-text-muted">Semesters Completed</p><p className="font-mono text-3xl font-bold text-primary dark:text-white mt-1.5">{studentResults.length}</p></Card>
      </div>

      <Card className="p-7">
        <p className="font-display font-semibold text-primary dark:text-white mb-6">SGPA Trend</p>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={studentResults}>
            <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="4 4" />
            <XAxis dataKey="sem" tickFormatter={(v) => `Sem ${v}`} tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
            <YAxis domain={[7, 10]} tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
            <Line type="monotone" dataKey="sgpa" stroke="#0056D6" strokeWidth={2.5} dot={{ r: 4, fill: '#0056D6' }} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-primary-50 dark:bg-white/5 text-text-muted text-xs uppercase tracking-wide">
            <tr><th className="text-left px-5 py-3 font-semibold">Semester</th><th className="text-left px-5 py-3 font-semibold">SGPA</th><th className="text-left px-5 py-3 font-semibold">Result</th></tr>
          </thead>
          <tbody>
            {studentResults.map((r) => (
              <tr key={r.sem} className="border-t border-slate-100 dark:border-white/5">
                <td className="px-5 py-3.5 font-medium text-primary dark:text-white">Semester {r.sem}</td>
                <td className="px-5 py-3.5 font-mono text-primary dark:text-white">{r.sgpa}</td>
                <td className="px-5 py-3.5"><span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-success dark:bg-emerald-500/10">Pass</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
