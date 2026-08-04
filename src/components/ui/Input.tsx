import { type InputHTMLAttributes, forwardRef, useId } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, error, id, name, ...props }, ref) => {
  const generatedId = useId()
  // Prefer an explicit id, fall back to the field's `name` (set by react-hook-form's register),
  // and finally a generated id — so <label htmlFor> is always correctly associated for a11y.
  const inputId = id ?? name ?? generatedId

  return (
    <div>
      {label && <label htmlFor={inputId} className="text-xs font-semibold text-primary dark:text-white">{label}</label>}
      <input
        ref={ref}
        id={inputId}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn(
          'mt-1.5 w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900/40 text-sm outline-none focus:border-secondary transition-colors dark:text-white',
          error && 'border-danger focus:border-danger',
          className
        )}
        {...props}
      />
      {error && <p id={`${inputId}-error`} className="text-xs text-danger mt-1">{error}</p>}
    </div>
  )
})
Input.displayName = 'Input'
