import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function AuthLayout({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-primary p-12">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-secondary/25 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/15 blur-3xl animate-pulse-slow" />
        <Link to="/" className="relative flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-display font-bold text-sm">CSE</div>
          <span className="font-display font-bold text-white text-sm">SGGS Nanded</span>
        </Link>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-accent mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Department ERP Portal
          </span>
          <h2 className="font-display text-3xl font-bold text-white leading-tight max-w-md">
            One login. Three dashboards. Zero paperwork.
          </h2>
          <p className="text-slate-400 mt-4 max-w-sm text-sm leading-relaxed">
            Students track attendance and results, faculty manage classes and research, and the HOD runs the department — all from here.
          </p>
        </motion.div>
        <p className="relative text-xs text-slate-500">© {new Date().getFullYear()} Department of CSE, SGGS Nanded</p>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-12 bg-bg dark:bg-primary-900">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-sm">
          <Link to="/" className="lg:hidden flex items-center gap-2.5 mb-10">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-sm">CSE</div>
            <span className="font-display font-bold text-primary dark:text-white text-sm">SGGS Nanded</span>
          </Link>
          <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase font-mono">{eyebrow}</span>
          <h1 className="font-display text-2xl font-bold text-primary dark:text-white mt-2">{title}</h1>
          <p className="text-sm text-text-muted mt-2 mb-8">{description}</p>
          {children}
        </motion.div>
      </div>
    </div>
  )
}
