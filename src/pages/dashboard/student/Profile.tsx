import { Globe, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'
import { initials } from '@/lib/utils'

export default function StudentProfile() {
  const { user } = useAuth()
  if (!user) return null

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="font-display text-2xl font-bold text-primary dark:text-white">My Profile</h1>

      <Card className="p-7">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-accent text-white font-display font-bold flex items-center justify-center text-xl">
            {initials(user.name)}
          </div>
          <div>
            <p className="font-display font-semibold text-lg text-primary dark:text-white">{user.name}</p>
            <p className="text-sm text-text-muted">Roll No. CSE2022045 · Semester 6</p>
            <Button size="sm" variant="outline" className="mt-2">Change Photo</Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mt-8">
          <div><p className="text-xs text-text-muted">Email</p><p className="text-sm font-medium text-primary dark:text-white mt-1">{user.email}</p></div>
          <div><p className="text-xs text-text-muted">Branch</p><p className="text-sm font-medium text-primary dark:text-white mt-1">Computer Science & Engineering</p></div>
          <div><p className="text-xs text-text-muted">Batch</p><p className="text-sm font-medium text-primary dark:text-white mt-1">2022 – 2026</p></div>
          <div><p className="text-xs text-text-muted">Advisor</p><p className="text-sm font-medium text-primary dark:text-white mt-1">Dr. Meera Joshi</p></div>
        </div>
      </Card>

      <Card className="p-7">
        <p className="font-display font-semibold text-primary dark:text-white mb-4">Skills & Interests</p>
        <div className="flex flex-wrap gap-2">
          {['React', 'Python', 'Machine Learning', 'DSA', 'System Design'].map((s) => (
            <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-primary-50 dark:bg-white/5 text-primary dark:text-slate-300">{s}</span>
          ))}
        </div>
      </Card>

      <Card className="p-7">
        <p className="font-display font-semibold text-primary dark:text-white mb-4">Linked Accounts</p>
        <div className="space-y-3">
          {[
            { icon: GithubIcon, label: 'GitHub', value: 'Not connected' },
            { icon: LinkedinIcon, label: 'LinkedIn', value: 'Not connected' },
            { icon: Globe, label: 'Portfolio Site', value: 'Not connected' },
            { icon: Mail, label: 'Alternate Email', value: 'Not set' },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-white/5 last:border-0">
              <span className="flex items-center gap-2.5 text-sm text-primary dark:text-white"><row.icon className="w-4 h-4 text-text-muted" /> {row.label}</span>
              <span className="text-xs text-text-muted">{row.value}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
