import { useState } from 'react'
import toast from 'react-hot-toast'
import { Upload, FileText } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { studentAssignments } from '@/data/content'

export default function StudentAssignments() {
  const [statusMap, setStatusMap] = useState<Record<string, string>>(
    Object.fromEntries(studentAssignments.map((a) => [a.id, a.status]))
  )

  function submit(id: string) {
    setStatusMap((s) => ({ ...s, [id]: 'Submitted' }))
    toast.success('Assignment submitted successfully')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-primary dark:text-white">Assignments</h1>
        <p className="text-sm text-text-muted mt-1">Track deadlines and submit your work directly.</p>
      </div>

      <div className="space-y-4">
        {studentAssignments.map((a) => (
          <Card key={a.id} className="p-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary-50 dark:bg-secondary/15 flex items-center justify-center shrink-0">
                <FileText className="w-4.5 h-4.5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary dark:text-white">{a.title}</p>
                <p className="text-xs text-text-muted mt-1">{a.subject} · Due {new Date(a.due).toLocaleDateString('en-IN', { day: 'numeric', month: 'long' })}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Badge tone={statusMap[a.id] === 'Pending' ? 'warning' : statusMap[a.id] === 'Submitted' ? 'accent' : 'success'}>{statusMap[a.id]}</Badge>
              {statusMap[a.id] === 'Pending' && (
                <Button size="sm" onClick={() => submit(a.id)}><Upload className="w-3.5 h-3.5" /> Submit</Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
