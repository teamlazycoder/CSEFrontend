import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { researchDomains, labs } from '@/data/content'

export function ResearchLabsSection() {
  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-mono">Research</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl">
              Ten domains. Real funded work.
            </h2>
          </div>
          <Link to="/research" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent shrink-0">
            Explore research <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {researchDomains.map((d, i) => {
            const Icon = (Icons as any)[d.icon] ?? Icons.Sparkles
            return (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-300"
              >
                <Icon className="w-5 h-5 text-accent mb-3" />
                <p className="text-sm font-semibold text-white leading-snug">{d.name}</p>
                <p className="text-xs text-slate-400 mt-1.5">{d.papers} papers · {d.faculty} faculty</p>
              </motion.div>
            )
          })}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <h3 className="font-display text-2xl font-bold text-white">Laboratories</h3>
          <Link to="/laboratories" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent shrink-0">
            View all 10 labs <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1 snap-x">
          {labs.slice(0, 6).map((lab) => (
            <div key={lab.id} className="glass rounded-2xl p-5 min-w-[220px] snap-start">
              <p className="text-sm font-semibold text-white">{lab.name}</p>
              <p className="text-xs text-slate-400 mt-1.5">Capacity: {lab.capacity}</p>
              <p className="text-xs text-slate-400 mt-1">In-charge: {lab.incharge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
