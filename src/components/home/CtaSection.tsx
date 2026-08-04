import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CtaSection() {
  const navigate = useNavigate()
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-12 sm:p-16 text-center"
      >
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <h2 className="relative font-display text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
          Thinking about applying, collaborating, or recruiting?
        </h2>
        <p className="relative text-slate-300 mt-4 max-w-lg mx-auto">
          Whether you're a prospective student, a research partner, or hiring from our graduating class — we'd like to talk.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" onClick={() => navigate('/contact')}>
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="!text-white !border-white/25 hover:!border-accent hover:!text-accent" onClick={() => navigate('/placements')}>
            Recruiter Info
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
