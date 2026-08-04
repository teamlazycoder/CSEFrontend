import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const variants = {
  primary: 'bg-secondary text-white hover:bg-secondary-600 shadow-sm hover:shadow-lg hover:shadow-secondary/25',
  secondary: 'bg-primary text-white hover:bg-primary-900',
  ghost: 'bg-transparent text-primary hover:bg-primary-50 dark:text-white dark:hover:bg-white/5',
  outline: 'border border-primary-100 text-primary hover:border-secondary hover:text-secondary dark:border-white/15 dark:text-white',
}

const sizes = {
  sm: 'text-sm px-3.5 py-1.5 rounded-lg',
  md: 'text-sm px-5 py-2.5 rounded-xl',
  lg: 'text-base px-7 py-3.5 rounded-xl',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
