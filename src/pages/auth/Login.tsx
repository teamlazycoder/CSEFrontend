import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Eye, EyeOff, GraduationCap, UserCog, ShieldCheck } from 'lucide-react'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useAuth, type Role } from '@/context/AuthContext'
import { cn } from '@/lib/utils'

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})
type FormData = z.infer<typeof schema>

const ROLES: { id: Role; label: string; icon: typeof GraduationCap }[] = [
  { id: 'student', label: 'Student', icon: GraduationCap },
  { id: 'faculty', label: 'Faculty', icon: UserCog },
  { id: 'hod', label: 'HOD', icon: ShieldCheck },
]

export default function Login() {
  const [role, setRole] = useState<Role>('student')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)
  const { login } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 700))
    login(role)
    toast.success(`Welcome back — signed in as ${role.toUpperCase()}`)
    navigate(`/dashboard/${role}`)
  }

  return (
    <AuthLayout eyebrow="Portal Login" title="Sign in to your account" description="Select your role and enter your credentials to continue.">
      <div className="grid grid-cols-3 gap-2 mb-6">
        {ROLES.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setRole(r.id)}
            className={cn(
              'flex flex-col items-center gap-1.5 py-3 rounded-xl border text-xs font-semibold transition-colors',
              role === r.id ? 'border-secondary bg-secondary-50 dark:bg-secondary/15 text-secondary' : 'border-slate-200 dark:border-white/10 text-text-muted'
            )}
          >
            <r.icon className="w-4 h-4" /> {r.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input label="Email" type="email" placeholder="you@sggs.ac.in" {...register('email')} error={errors.email?.message} />
        <div className="relative">
          <Input label="Password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" {...register('password')} error={errors.password?.message} />
          <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3.5 top-[34px] text-text-muted">
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-text-muted">
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="rounded accent-secondary" />
            Remember me
          </label>
          <Link to="/forgot-password" className="font-semibold text-secondary">Forgot password?</Link>
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Signing in…' : `Sign in as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
        </Button>
      </form>

      <p className="text-xs text-text-muted text-center mt-6">
        Don't have an account? <Link to="/register" className="font-semibold text-secondary">Create one</Link>
      </p>
    </AuthLayout>
  )
}
