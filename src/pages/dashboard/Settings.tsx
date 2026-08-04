import { useState } from 'react'
import toast from 'react-hot-toast'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useTheme } from '@/context/ThemeContext'

export default function DashboardSettings() {
  const { theme, toggle } = useTheme()
  const [notifs, setNotifs] = useState({ email: true, push: true, sms: false })

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="font-display text-2xl font-bold text-primary dark:text-white">Settings</h1>

      <Card className="p-7">
        <p className="font-display font-semibold text-primary dark:text-white mb-5">Change Password</p>
        <div className="space-y-4">
          <Input label="Current Password" type="password" placeholder="••••••••" />
          <Input label="New Password" type="password" placeholder="••••••••" />
          <Button size="sm" onClick={() => toast.success('Password updated')}>Update Password</Button>
        </div>
      </Card>

      <Card className="p-7">
        <p className="font-display font-semibold text-primary dark:text-white mb-5">Appearance</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-primary dark:text-white">Dark Mode</p>
            <p className="text-xs text-text-muted mt-0.5">Switch between light and dark themes.</p>
          </div>
          <button
            onClick={toggle}
            className={`w-11 h-6 rounded-full transition-colors relative ${theme === 'dark' ? 'bg-secondary' : 'bg-slate-200'}`}
          >
            <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0.5'}`} />
          </button>
        </div>
      </Card>

      <Card className="p-7">
        <p className="font-display font-semibold text-primary dark:text-white mb-5">Notification Preferences</p>
        <div className="space-y-4">
          {(['email', 'push', 'sms'] as const).map((key) => (
            <div key={key} className="flex items-center justify-between">
              <p className="text-sm text-primary dark:text-white capitalize">{key} notifications</p>
              <button
                onClick={() => setNotifs((n) => ({ ...n, [key]: !n[key] }))}
                className={`w-11 h-6 rounded-full transition-colors relative ${notifs[key] ? 'bg-secondary' : 'bg-slate-200'}`}
              >
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${notifs[key] ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
