import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow, title, description, align = 'left', className,
}: { eyebrow?: string; title: string; description?: string; align?: 'left' | 'center'; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}
    >
      {eyebrow && (
        <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase font-mono">{eyebrow}</span>
      )}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-primary dark:text-white leading-tight">
        {title}
      </h2>
      {description && <p className="mt-4 text-text-muted dark:text-slate-400 text-base leading-relaxed">{description}</p>}
    </motion.div>
  )
}
