import { motion } from 'framer-motion'
import { Newspaper } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { news } from '@/data/content'

export default function News() {
  return (
    <>
      <PageHeader eyebrow="News" title="Announcements & circulars." description="Scholarships, exam notices, recruitment drives, and department updates." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4 max-w-3xl">
          {news.map((n, i) => (
            <motion.div key={n.id} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}>
              <Card className="p-5 flex items-start gap-4 hover:border-secondary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-secondary-50 dark:bg-secondary/15 flex items-center justify-center shrink-0">
                  <Newspaper className="w-4.5 h-4.5 text-secondary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Badge tone="default" className="!py-0.5 !px-2 text-[10px]">{n.category}</Badge>
                    <span className="text-[11px] text-text-muted">{new Date(n.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <p className="text-sm font-semibold text-primary dark:text-white leading-snug">{n.title}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
