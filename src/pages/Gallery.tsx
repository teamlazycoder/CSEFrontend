import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHeader } from '@/components/ui/PageHeader'

const ALBUMS = ['All', 'Campus', 'Labs', 'Events', 'Hackathons'] as const

const TILES = [
  { id: 1, album: 'Campus', h: 'h-64', grad: 'from-primary to-secondary', label: 'Main Academic Block' },
  { id: 2, album: 'Labs', h: 'h-48', grad: 'from-secondary to-accent', label: 'AI Lab — GPU Cluster' },
  { id: 3, album: 'Events', h: 'h-56', grad: 'from-primary-400 to-secondary', label: 'HackNanded 5.0 Finale' },
  { id: 4, album: 'Hackathons', h: 'h-72', grad: 'from-accent to-secondary-600', label: 'Winning Team, SIH 2025' },
  { id: 5, album: 'Campus', h: 'h-52', grad: 'from-secondary-600 to-primary', label: 'Central Library' },
  { id: 6, album: 'Labs', h: 'h-60', grad: 'from-primary to-accent', label: 'Cyber Security Range' },
  { id: 7, album: 'Events', h: 'h-44', grad: 'from-secondary to-primary-400', label: 'Guest Lecture Series' },
  { id: 8, album: 'Campus', h: 'h-64', grad: 'from-accent to-primary', label: 'Innovation Courtyard' },
  { id: 9, album: 'Hackathons', h: 'h-52', grad: 'from-primary-400 to-accent', label: 'Team Judging Round' },
]

export default function Gallery() {
  const [album, setAlbum] = useState<typeof ALBUMS[number]>('All')
  const filtered = TILES.filter((t) => album === 'All' || t.album === album)

  return (
    <>
      <PageHeader eyebrow="Gallery" title="Campus, labs, and everything in between." description="A running visual record of the department — updated after every major event." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {ALBUMS.map((a) => (
            <button
              key={a}
              onClick={() => setAlbum(a)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                album === a ? 'bg-secondary text-white' : 'bg-primary-50 dark:bg-white/5 text-primary dark:text-slate-300'
              }`}
            >
              {a}
            </button>
          ))}
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className={`break-inside-avoid rounded-2xl bg-gradient-to-br ${t.grad} ${t.h} flex items-end p-5 relative overflow-hidden group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <p className="relative text-white text-sm font-semibold">{t.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
