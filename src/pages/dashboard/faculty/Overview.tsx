import { motion } from 'framer-motion'
import { Users, ClipboardCheck, BookOpen, Award, ArrowRight, CheckCircle2, XCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { StatCard } from '@/components/dashboard/StatCard'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'

const LEAVE_REQUESTS = [
  { id: 'l1', name: 'Aarav Deshmukh', reason: 'Medical leave', dates: 'Aug 5–6' },
  { id: 'l2', name: 'Isha Nair', reason: 'Family function', dates: 'Aug 9' },
]

export default function FacultyOverview() {
  const { user } = useAuth()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-primary dark:text-white">Welcome, {user?.name}</h1>
        <p className="text-sm text-text-muted mt-1">Your classes, research, and pending approvals at a glance.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard icon={Users} label="Students Taught" value={186} />
        <StatCard icon={BookOpen} label="Subjects This Sem" value={3} />
        <StatCard icon={ClipboardCheck} label="Pending Grading" value={22} tone="warning" />
        <StatCard icon={Award} label="Active Research Projects" value={4} tone="success" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-5">
            <p className="font-display font-semibold text-primary dark:text-white">Student Leave Requests</p>
            <Link to="/dashboard/faculty/leave" className="text-xs font-semibold text-secondary flex items-center gap-1">View all <ArrowRight className="w-3 h-3" /></Link>
          </div>
          <div className="space-y-3">
            {LEAVE_REQUESTS.map((l, i) => (
              <motion.div key={l.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.06 }} className="flex items-center justify-between py-2.5 border-b border-slate-100 dark:border-white/5 last:border-0">
                <div>
                  <p className="text-sm font-medium text-primary dark:text-white">{l.name}</p>
                  <p className="text-xs text-text-muted mt-0.5">{l.reason} · {l.dates}</p>
                </div>
                <div className="flex gap-2">
                  <button className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-success flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></button>
                  <button className="w-7 h-7 rounded-lg bg-red-50 dark:bg-red-500/10 text-danger flex items-center justify-center"><XCircle className="w-4 h-4" /></button>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <p className="font-display font-semibold text-primary dark:text-white mb-5">Today's Classes</p>
          <div className="space-y-3">
            {[
              { subject: 'Machine Learning', time: '9:00 – 10:00 AM', room: 'Room 204' },
              { subject: 'ML Lab', time: '2:00 – 4:00 PM', room: 'AI Lab' },
            ].map((c) => (
              <div key={c.subject} className="flex items-center justify-between py-2.5 border-b border-slate-100 dark:border-white/5 last:border-0">
                <div>
                  <p className="text-sm font-medium text-primary dark:text-white">{c.subject}</p>
                  <p className="text-xs text-text-muted mt-0.5">{c.room}</p>
                </div>
                <span className="text-xs font-mono text-secondary">{c.time}</span>
              </div>
            ))}
          </div>
          <Button size="sm" variant="outline" className="mt-5 w-full">Mark Attendance</Button>
        </Card>
      </div>
    </div>
  )
}
