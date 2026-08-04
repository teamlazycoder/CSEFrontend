import { useState } from 'react'
import toast from 'react-hot-toast'
import { CheckCircle2, XCircle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const INITIAL = [
  { id: 'l1', name: 'Aarav Deshmukh', reason: 'Medical leave', dates: 'Aug 5–6, 2026', status: 'Pending' },
  { id: 'l2', name: 'Isha Nair', reason: 'Family function', dates: 'Aug 9, 2026', status: 'Pending' },
  { id: 'l3', name: 'Rohan Iyer', reason: 'Hackathon travel', dates: 'Aug 12–14, 2026', status: 'Approved' },
  { id: 'l4', name: 'Kavya Reddy', reason: 'Personal', dates: 'Jul 29, 2026', status: 'Rejected' },
]

export default function FacultyLeave() {
  const [requests, setRequests] = useState(INITIAL)

  function update(id: string, status: 'Approved' | 'Rejected') {
    setRequests((r) => r.map((x) => (x.id === id ? { ...x, status } : x)))
    toast.success(`Leave request ${status.toLowerCase()}`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-primary dark:text-white">Leave Management</h1>
        <p className="text-sm text-text-muted mt-1">Approve or reject student leave requests.</p>
      </div>
      <div className="space-y-4">
        {requests.map((r) => (
          <Card key={r.id} className="p-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div>
              <p className="text-sm font-semibold text-primary dark:text-white">{r.name}</p>
              <p className="text-xs text-text-muted mt-1">{r.reason} · {r.dates}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Badge tone={r.status === 'Pending' ? 'warning' : r.status === 'Approved' ? 'success' : 'danger'}>{r.status}</Badge>
              {r.status === 'Pending' && (
                <div className="flex gap-2">
                  <button onClick={() => update(r.id, 'Approved')} className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-success flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></button>
                  <button onClick={() => update(r.id, 'Rejected')} className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-500/10 text-danger flex items-center justify-center"><XCircle className="w-4 h-4" /></button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
