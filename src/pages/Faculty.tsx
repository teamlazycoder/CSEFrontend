import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Mail, GraduationCap } from 'lucide-react'
import { LinkedinIcon } from '@/components/ui/SocialIcons'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { faculty } from '@/data/content'
import { initials } from '@/lib/utils'
import { EmptyState } from '@/components/ui/EmptyState'

export default function Faculty() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () => faculty.filter((f) =>
      f.name.toLowerCase().includes(query.toLowerCase()) ||
      f.areas.some((a) => a.toLowerCase().includes(query.toLowerCase()))
    ),
    [query]
  )

  return (
    <>
      <PageHeader eyebrow="Faculty" title="32 faculty. Ten research groups." description="Every faculty member here is an active researcher and an active teacher — search by name or research area." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative max-w-md mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or research area…"
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900/40 text-sm outline-none focus:border-secondary dark:text-white"
          />
        </div>

        {filtered.length === 0 ? (
          <EmptyState icon={Search} title="No faculty found" description="Try a different name or research area." />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <Card className="p-6 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white font-display font-bold flex items-center justify-center text-sm shrink-0">
                      {initials(f.name)}
                    </div>
                    <div className="min-w-0">
                      <Link to={`/faculty/${f.id}`} className="font-display font-semibold text-primary dark:text-white text-sm hover:text-secondary">{f.name}</Link>
                      <p className="text-xs text-text-muted mt-0.5">{f.designation}</p>
                      <p className="text-xs text-text-muted">{f.qualification}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {f.areas.map((a) => (
                      <span key={a} className="text-[11px] px-2 py-1 rounded-full bg-primary-50 dark:bg-white/5 text-primary dark:text-slate-300">{a}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 mt-4 text-xs text-text-muted">
                    <GraduationCap className="w-3.5 h-3.5" /> {f.publications} publications · {f.patents} patents
                  </div>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-white/10">
                    <a href={`mailto:${f.email}`} className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                    <Link to={`/faculty/${f.id}`} className="ml-auto text-xs font-semibold text-secondary">View profile</Link>
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
