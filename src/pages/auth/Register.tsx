import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

const schema = z.object({
  name: z.string().min(2, 'Enter your full name'),
  rollNo: z.string().min(3, 'Enter your roll number'),
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'At least 6 characters'),
  confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, { message: 'Passwords do not match', path: ['confirmPassword'] })
type FormData = z.infer<typeof schema>

export default function Register() {
  const navigate = useNavigate()
  const [step, setStep] = useState<1 | 2>(1)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 700))
    setStep(2)
    toast.success('Verification code sent to your email')
  }

  function verify() {
    toast.success('Account created — you can now sign in')
    navigate('/login')
  }

  return (
    <AuthLayout eyebrow="Create Account" title={step === 1 ? 'Register for portal access' : 'Verify your email'} description={step === 1 ? 'Use your official department email to register.' : 'Enter the 6-digit code sent to your inbox.'}>
      {step === 1 ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input label="Full Name" placeholder="Aarav Deshmukh" {...register('name')} error={errors.name?.message} />
          <Input label="Roll Number" placeholder="CSE2022045" {...register('rollNo')} error={errors.rollNo?.message} />
          <Input label="Email" type="email" placeholder="you@sggs.ac.in" {...register('email')} error={errors.email?.message} />
          <Input label="Password" type="password" placeholder="••••••••" {...register('password')} error={errors.password?.message} />
          <Input label="Confirm Password" type="password" placeholder="••••••••" {...register('confirmPassword')} error={errors.confirmPassword?.message} />
          <Button type="submit" disabled={isSubmitting} className="w-full">{isSubmitting ? 'Creating account…' : 'Create Account'}</Button>
        </form>
      ) : (
        <OtpStep onVerify={verify} />
      )}
      <p className="text-xs text-text-muted text-center mt-6">
        Already registered? <Link to="/login" className="font-semibold text-secondary">Sign in</Link>
      </p>
    </AuthLayout>
  )
}

function OtpStep({ onVerify }: { onVerify: () => void }) {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  function update(i: number, val: string) {
    if (!/^[0-9]?$/.test(val)) return
    const next = [...otp]
    next[i] = val
    setOtp(next)
    if (val && i < 5) document.getElementById(`otp-${i + 1}`)?.focus()
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2.5 justify-between">
        {otp.map((val, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            value={val}
            onChange={(e) => update(i, e.target.value)}
            maxLength={1}
            className="w-11 h-12 text-center rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900/40 text-lg font-mono outline-none focus:border-secondary dark:text-white"
          />
        ))}
      </div>
      <Button onClick={onVerify} className="w-full">Verify & Continue</Button>
      <p className="text-xs text-text-muted text-center">Didn't get a code? <button className="font-semibold text-secondary">Resend</button></p>
    </div>
  )
}
