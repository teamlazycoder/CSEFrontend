import { motion } from 'framer-motion'

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <motion.span
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-mono"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white max-w-2xl leading-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-slate-300 max-w-xl leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </div>
  )
}
