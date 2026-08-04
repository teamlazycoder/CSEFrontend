import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { CheckCircle2 } from 'lucide-react'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

const emailSchema = z.object({ email: z.string().email('Enter a valid email') })
const resetSchema = z.object({
  password: z.string().min(6, 'At least 6 characters'),
  confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, { message: 'Passwords do not match', path: ['confirmPassword'] })

export default function ForgotPassword() {
  const [step, setStep] = useState<'email' | 'otp' | 'reset' | 'done'>('email')
  const navigate = useNavigate()

  const emailForm = useForm<z.infer<typeof emailSchema>>({ resolver: zodResolver(emailSchema) })
  const resetForm = useForm<z.infer<typeof resetSchema>>({ resolver: zodResolver(resetSchema) })
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  async function sendCode() {
    await new Promise((r) => setTimeout(r, 600))
    toast.success('Reset code sent to your email')
    setStep('otp')
  }

  function verifyOtp() {
    if (otp.some((d) => d === '')) { toast.error('Enter the complete 6-digit code'); return }
    setStep('reset')
  }

  async function resetPassword() {
    await new Promise((r) => setTimeout(r, 600))
    setStep('done')
  }

  const copy = {
    email: { title: 'Reset your password', desc: 'Enter your registered email to receive a reset code.' },
    otp: { title: 'Enter verification code', desc: 'We sent a 6-digit code to your email address.' },
    reset: { title: 'Set a new password', desc: 'Choose a strong password you have not used before.' },
    done: { title: 'Password updated', desc: 'You can now sign in with your new password.' },
  }[step]

  return (
    <AuthLayout eyebrow="Account Recovery" title={copy.title} description={copy.desc}>
      {step === 'email' && (
        <form onSubmit={emailForm.handleSubmit(sendCode)} className="space-y-4">
          <Input label="Email" type="email" placeholder="you@sggs.ac.in" {...emailForm.register('email')} error={emailForm.formState.errors.email?.message} />
          <Button type="submit" disabled={emailForm.formState.isSubmitting} className="w-full">
            {emailForm.formState.isSubmitting ? 'Sending…' : 'Send Reset Code'}
          </Button>
        </form>
      )}

      {step === 'otp' && (
        <div className="space-y-6">
          <div className="flex gap-2.5 justify-between">
            {otp.map((val, i) => (
              <input
                key={i}
                value={val}
                onChange={(e) => {
                  if (!/^[0-9]?$/.test(e.target.value)) return
                  const next = [...otp]; next[i] = e.target.value; setOtp(next)
                  if (e.target.value && i < 5) document.getElementById(`fp-otp-${i + 1}`)?.focus()
                }}
                id={`fp-otp-${i}`}
                maxLength={1}
                className="w-11 h-12 text-center rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900/40 text-lg font-mono outline-none focus:border-secondary dark:text-white"
              />
            ))}
          </div>
          <Button onClick={verifyOtp} className="w-full">Verify Code</Button>
        </div>
      )}

      {step === 'reset' && (
        <form onSubmit={resetForm.handleSubmit(resetPassword)} className="space-y-4">
          <Input label="New Password" type="password" placeholder="••••••••" {...resetForm.register('password')} error={resetForm.formState.errors.password?.message} />
          <Input label="Confirm New Password" type="password" placeholder="••••••••" {...resetForm.register('confirmPassword')} error={resetForm.formState.errors.confirmPassword?.message} />
          <Button type="submit" disabled={resetForm.formState.isSubmitting} className="w-full">
            {resetForm.formState.isSubmitting ? 'Updating…' : 'Update Password'}
          </Button>
        </form>
      )}

      {step === 'done' && (
        <div className="text-center py-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-6 h-6 text-success" />
          </div>
          <Button onClick={() => navigate('/login')} className="w-full">Back to Login</Button>
        </div>
      )}

      {step !== 'done' && (
        <p className="text-xs text-text-muted text-center mt-6">
          Remembered it? <Link to="/login" className="font-semibold text-secondary">Sign in</Link>
        </p>
      )}
    </AuthLayout>
  )
}
