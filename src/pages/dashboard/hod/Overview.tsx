import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { Users, GraduationCap, TrendingUp, Wallet } from 'lucide-react'
import { StatCard } from '@/components/dashboard/StatCard'
import { Card } from '@/components/ui/Card'
import { departmentOverview, placementTrend } from '@/data/content'
import { AreaChart, Area, XAxis, CartesianGrid } from 'recharts'

const BUDGET = [
  { name: 'Utilized', value: departmentOverview.budgetUtilized },
  { name: 'Remaining', value: 100 - departmentOverview.budgetUtilized },
]
const COLORS = ['#0056D6', '#e2e8f0']

export default function HodOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-primary dark:text-white">Department Overview</h1>
        <p className="text-sm text-text-muted mt-1">Executive summary across academics, research, and operations.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard icon={Users} label="Total Students" value={departmentOverview.students} />
        <StatCard icon={GraduationCap} label="Faculty Strength" value={departmentOverview.faculty} />
        <StatCard icon={TrendingUp} label="Avg. Attendance" value={departmentOverview.avgAttendance} suffix="%" tone="success" />
        <StatCard icon={Wallet} label="Placement Rate" value={departmentOverview.placementRate} suffix="%" tone="success" />
      </div>

      <div className="grid lg:grid-cols-[1.4fr,1fr] gap-6">
        <Card className="p-7">
          <p className="font-display font-semibold text-primary dark:text-white mb-6">Placement Trend</p>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={placementTrend}>
              <defs>
                <linearGradient id="hodGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0056D6" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#0056D6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="4 4" />
              <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              <Area type="monotone" dataKey="average" stroke="#0056D6" strokeWidth={2.5} fill="url(#hodGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-7">
          <p className="font-display font-semibold text-primary dark:text-white mb-6">Budget Utilization</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={BUDGET} innerRadius={55} outerRadius={80} paddingAngle={3} dataKey="value">
                {BUDGET.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
