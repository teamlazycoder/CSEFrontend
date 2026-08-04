import { useState } from 'react'
import toast from 'react-hot-toast'
import { CheckCircle2, XCircle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { hodApprovals } from '@/data/content'

export default function HodApprovals() {
  const [items, setItems] = useState(hodApprovals.map((a) => ({ ...a })))

  function update(id: string, status: 'Approved' | 'Rejected') {
    setItems((it) => it.map((x) => (x.id === id ? { ...x, status } : x)))
    toast.success(`${status} successfully`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-primary dark:text-white">Pending Approvals</h1>
        <p className="text-sm text-text-muted mt-1">Faculty leave, student leave, results, and timetable changes.</p>
      </div>
      <div className="space-y-4">
        {items.map((a) => (
          <Card key={a.id} className="p-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge tone="default" className="!py-0.5 !px-2 text-[10px]">{a.type}</Badge>
              </div>
              <p className="text-sm font-semibold text-primary dark:text-white">{a.name}</p>
              <p className="text-xs text-text-muted mt-0.5">{a.detail}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Badge tone={a.status === 'Pending' ? 'warning' : a.status === 'Approved' ? 'success' : 'danger'}>{a.status}</Badge>
              {a.status === 'Pending' && (
                <div className="flex gap-2">
                  <button onClick={() => update(a.id, 'Approved')} className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-success flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></button>
                  <button onClick={() => update(a.id, 'Rejected')} className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-500/10 text-danger flex items-center justify-center"><XCircle className="w-4 h-4" /></button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
