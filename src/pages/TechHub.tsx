import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Heart, Search, Rocket } from 'lucide-react'
import { GithubIcon } from '@/components/ui/SocialIcons'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { techHubProjects } from '@/data/content'
import { EmptyState } from '@/components/ui/EmptyState'

const CATEGORIES = ['All', 'Web App', 'AR/Robotics', 'Blockchain', 'IoT', 'AI', 'Mobile']

export default function TechHub() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [liked, setLiked] = useState<Record<string, boolean>>({})

  const filtered = useMemo(() => techHubProjects.filter((p) =>
    (category === 'All' || p.category === category) &&
    p.title.toLowerCase().includes(query.toLowerCase())
  ), [query, category])

  return (
    <>
      <PageHeader eyebrow="Tech Hub" title="Built by students, mentored by faculty." description="A living portfolio of student projects — GitHub links, live demos, and the faculty mentors who guided them." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900/40 text-sm outline-none focus:border-secondary dark:text-white"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  category === c ? 'bg-secondary text-white' : 'bg-primary-50 dark:bg-white/5 text-primary dark:text-slate-300'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <Button size="sm" className="sm:ml-auto shrink-0"><Rocket className="w-3.5 h-3.5" /> Submit Project</Button>
        </div>

        {filtered.length === 0 ? (
          <EmptyState icon={Search} title="No projects match" description="Try a different search term or category." />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.05 }}>
                <Card className="p-6 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="flex items-start justify-between">
                    <Badge tone={p.status === 'Live' ? 'success' : 'warning'}>{p.status}</Badge>
                    <span className="text-[11px] text-text-muted">{p.category}</span>
                  </div>
                  <p className="font-display font-bold text-primary dark:text-white mt-3">{p.title}</p>
                  <p className="text-xs text-text-muted mt-1">Team: {p.team.join(', ')}</p>
                  <p className="text-xs text-text-muted mt-0.5">Mentor: {p.mentor}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {p.stack.map((s) => <span key={s} className="text-[11px] px-2 py-1 rounded-full bg-primary-50 dark:bg-white/5 text-primary dark:text-slate-300 font-mono">{s}</span>)}
                  </div>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100 dark:border-white/10">
                    <a href={p.github} className="flex items-center gap-1.5 text-xs text-text-muted hover:text-secondary"><GithubIcon className="w-3.5 h-3.5" /> Code</a>
                    <a href={p.demo} className="flex items-center gap-1.5 text-xs text-text-muted hover:text-secondary"><ExternalLink className="w-3.5 h-3.5" /> Demo</a>
                    <button
                      onClick={() => setLiked((l) => ({ ...l, [p.id]: !l[p.id] }))}
                      className="ml-auto flex items-center gap-1.5 text-xs text-text-muted hover:text-danger"
                    >
                      <Heart className={`w-3.5 h-3.5 ${liked[p.id] ? 'fill-danger text-danger' : ''}`} /> {p.likes + (liked[p.id] ? 1 : 0)}
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
