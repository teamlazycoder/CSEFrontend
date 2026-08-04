import { useParams, Link } from 'react-router-dom'
import { Mail, ExternalLink, BookOpen, Award, FolderKanban } from 'lucide-react'
import { LinkedinIcon } from '@/components/ui/SocialIcons'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { EmptyState } from '@/components/ui/EmptyState'
import { faculty } from '@/data/content'
import { initials } from '@/lib/utils'

export default function FacultyProfile() {
  const { id } = useParams()
  const f = faculty.find((x) => x.id === id)

  if (!f) {
    return <EmptyState icon={BookOpen} title="Faculty member not found" description="This profile may have been moved. Return to the faculty directory to search again." />
  }

  return (
    <>
      <PageHeader eyebrow="Faculty Profile" title={f.name} description={`${f.designation} · ${f.qualification}`} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-[280px,1fr] gap-10">
        <Card className="p-6 h-fit">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white font-display font-bold flex items-center justify-center text-xl">
            {initials(f.name)}
          </div>
          <p className="font-display font-semibold text-primary dark:text-white mt-4">{f.name}</p>
          <p className="text-xs text-text-muted mt-1">{f.experience} experience</p>
          <div className="mt-5 space-y-2.5">
            <a href={`mailto:${f.email}`} className="flex items-center gap-2 text-xs text-secondary"><Mail className="w-3.5 h-3.5" /> {f.email}</a>
            <a href="#" className="flex items-center gap-2 text-xs text-secondary"><LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn Profile</a>
            <a href="#" className="flex items-center gap-2 text-xs text-secondary"><ExternalLink className="w-3.5 h-3.5" /> Google Scholar</a>
            <a href="#" className="flex items-center gap-2 text-xs text-secondary"><ExternalLink className="w-3.5 h-3.5" /> Scopus Profile</a>
          </div>
          <Link to="/faculty" className="inline-block mt-6 text-xs font-semibold text-text-muted hover:text-secondary">← Back to directory</Link>
        </Card>

        <div className="space-y-8">
          <div>
            <p className="font-display font-semibold text-primary dark:text-white mb-3">Research Areas</p>
            <div className="flex flex-wrap gap-2">
              {f.areas.map((a) => <span key={a} className="text-xs px-3 py-1.5 rounded-full bg-secondary-50 dark:bg-secondary/15 text-secondary font-medium">{a}</span>)}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <Card className="p-5"><BookOpen className="w-5 h-5 text-secondary mb-2" /><p className="font-mono text-2xl font-bold text-primary dark:text-white">{f.publications}</p><p className="text-xs text-text-muted">Publications</p></Card>
            <Card className="p-5"><FolderKanban className="w-5 h-5 text-secondary mb-2" /><p className="font-mono text-2xl font-bold text-primary dark:text-white">{f.projects}</p><p className="text-xs text-text-muted">Active Projects</p></Card>
            <Card className="p-5"><Award className="w-5 h-5 text-secondary mb-2" /><p className="font-mono text-2xl font-bold text-primary dark:text-white">{f.patents}</p><p className="text-xs text-text-muted">Patents</p></Card>
          </div>

          <div>
            <p className="font-display font-semibold text-primary dark:text-white mb-3">Selected Publications</p>
            <div className="space-y-3">
              {[1, 2, 3].map((n) => (
                <Card key={n} className="p-4">
                  <p className="text-sm text-primary dark:text-white leading-snug">
                    {f.areas[0]}: A Systematic Study of Applied Methods — Vol. {2020 + n}, Journal of Computing Research
                  </p>
                  <p className="text-xs text-text-muted mt-1.5">{f.name} et al. · Cited by {14 * n}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
