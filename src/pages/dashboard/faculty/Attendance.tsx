import { useState } from 'react'
import toast from 'react-hot-toast'
import { Check, X } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const STUDENTS = [
  'Aarav Deshmukh', 'Isha Nair', 'Rohan Iyer', 'Kavya Reddy', 'Dev Patel', 'Om Sable',
  'Ananya Bhosale', 'Sahil Wagh', 'Prisha Kadam', 'Yash Chavan',
]

export default function FacultyAttendance() {
  const [status, setStatus] = useState<Record<string, boolean>>(Object.fromEntries(STUDENTS.map((s) => [s, true])))

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-primary dark:text-white">Attendance Management</h1>
          <p className="text-sm text-text-muted mt-1">Machine Learning · Semester 6 · Today</p>
        </div>
        <Button size="sm" onClick={() => toast.success('Attendance submitted for 10 students')}>Submit Attendance</Button>
      </div>

      <Card className="divide-y divide-slate-100 dark:divide-white/5">
        {STUDENTS.map((s) => (
          <div key={s} className="flex items-center justify-between px-6 py-3.5">
            <p className="text-sm font-medium text-primary dark:text-white">{s}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setStatus((st) => ({ ...st, [s]: true }))}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${status[s] ? 'bg-success text-white' : 'bg-slate-100 dark:bg-white/10 text-text-muted'}`}
              ><Check className="w-4 h-4" /></button>
              <button
                onClick={() => setStatus((st) => ({ ...st, [s]: false }))}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${!status[s] ? 'bg-danger text-white' : 'bg-slate-100 dark:bg-white/10 text-text-muted'}`}
              ><X className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}
