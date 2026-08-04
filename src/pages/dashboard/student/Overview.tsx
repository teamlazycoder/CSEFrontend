import { motion } from 'framer-motion'
import { CalendarCheck, GraduationCap, ClipboardList, Wallet, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { StatCard } from '@/components/dashboard/StatCard'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { studentAttendance, studentAssignments, studentResults } from '@/data/content'
import { useAuth } from '@/context/AuthContext'

export default function StudentOverview() {
  const { user } = useAuth()
  const overallAttendance = Math.round(
    (studentAttendance.reduce((s, a) => s + a.attended, 0) / studentAttendance.reduce((s, a) => s + a.total, 0)) * 100
  )
  const latestSgpa = studentResults[studentResults.length - 1].sgpa
  const pending = studentAssignments.filter((a) => a.status === 'Pending').length

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-primary dark:text-white">Welcome back, {user?.name.split(' ')[0]}</h1>
        <p className="text-sm text-text-muted mt-1">Here's what's happening in your semester right now.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard icon={CalendarCheck} label="Overall Attendance" value={overallAttendance} suffix="%" tone={overallAttendance >= 75 ? 'success' : 'danger'} />
        <StatCard icon={GraduationCap} label="Current SGPA" value={latestSgpa} decimals={1} />
        <StatCard icon={ClipboardList} label="Pending Assignments" value={pending} tone="warning" />
        <StatCard icon={Wallet} label="Fee Status" value={100} suffix="% Paid" tone="success" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-5">
            <p className="font-display font-semibold text-primary dark:text-white">Upcoming Assignments</p>
            <Link to="/dashboard/student/assignments" className="text-xs font-semibold text-secondary flex items-center gap-1">View all <ArrowRight className="w-3 h-3" /></Link>
          </div>
          <div className="space-y-3">
            {studentAssignments.slice(0, 4).map((a, i) => (
              <motion.div key={a.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-white/5 last:border-0">
                <div>
                  <p className="text-sm font-medium text-primary dark:text-white">{a.title}</p>
                  <p className="text-xs text-text-muted mt-0.5">{a.subject} · Due {new Date(a.due).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
                </div>
                <Badge tone={a.status === 'Pending' ? 'warning' : a.status === 'Submitted' ? 'accent' : 'success'}>{a.status}</Badge>
              </motion.div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <p className="font-display font-semibold text-primary dark:text-white mb-5">Attendance by Subject</p>
          <div className="space-y-4">
            {studentAttendance.map((s) => {
              const pct = Math.round((s.attended / s.total) * 100)
              return (
                <div key={s.subject}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-primary dark:text-white font-medium">{s.subject}</span>
                    <span className={pct >= 75 ? 'text-success' : 'text-danger'}>{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`h-full rounded-full ${pct >= 75 ? 'bg-success' : 'bg-danger'}`}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </Card>
      </div>
    </div>
  )
}
