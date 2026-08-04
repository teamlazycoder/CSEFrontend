import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { Card } from '@/components/ui/Card'
import { faculty, researchDomains } from '@/data/content'

const facultyPubs = faculty.map((f) => ({ name: f.name.split(' ').slice(-1)[0], pubs: f.publications })).sort((a, b) => b.pubs - a.pubs)
const domainData = researchDomains.map((d) => ({ name: d.name.split(' ')[0], papers: d.papers }))

export default function HodAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-primary dark:text-white">Department Analytics</h1>
        <p className="text-sm text-text-muted mt-1">Faculty performance and research output at a glance.</p>
      </div>

      <Card className="p-7">
        <p className="font-display font-semibold text-primary dark:text-white mb-6">Publications by Faculty</p>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={facultyPubs} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid horizontal={false} stroke="#e2e8f0" strokeDasharray="4 4" />
            <XAxis type="number" tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} width={90} />
            <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
            <Bar dataKey="pubs" fill="#0056D6" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-7">
        <p className="font-display font-semibold text-primary dark:text-white mb-6">Research Output by Domain</p>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={domainData}>
            <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="4 4" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
            <Bar dataKey="papers" fill="#2DA8FF" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
