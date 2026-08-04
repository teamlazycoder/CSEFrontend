import { motion } from 'framer-motion'
import { Target, Eye, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { DEPT } from '@/data/content'

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHeading
            eyebrow="About the Department"
            title="Four decades of building engineers who ship."
            description={`Since ${DEPT.founded}, the Department of ${DEPT.name} at ${DEPT.institute} has trained engineers on a simple premise: understand systems deeply enough to build them, not just describe them.`}
          />
          <Link to="/about" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:gap-2.5 transition-all">
            Read our full story <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { icon: Eye, title: 'Our Vision', text: 'To be a nationally recognized center of excellence producing computer engineers who lead in industry, research, and entrepreneurship.' },
            { icon: Target, title: 'Our Mission', text: 'Deliver rigorous, project-driven education; foster impactful research; and build an ecosystem where students build real things early.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900/40 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary-50 dark:bg-secondary/15 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-secondary" />
              </div>
              <p className="font-display font-semibold text-primary dark:text-white">{item.title}</p>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
