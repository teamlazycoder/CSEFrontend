import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Search, ArrowRight } from 'lucide-react'

const ROUTES = [
  { label: 'About the Department', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Faculty Directory', path: '/faculty' },
  { label: 'Research Domains', path: '/research' },
  { label: 'Laboratories', path: '/laboratories' },
  { label: 'Placements', path: '/placements' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Tech Hub', path: '/tech-hub' },
  { label: 'Alumni Network', path: '/alumni' },
  { label: 'Events', path: '/events' },
  { label: 'News & Announcements', path: '/news' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
  { label: 'Login', path: '/login' },
]

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const filtered = ROUTES.filter((r) => r.label.toLowerCase().includes(query.toLowerCase()))

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-primary-900/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-2xl bg-white dark:bg-primary-900 shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden"
            role="dialog"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 dark:border-white/10">
              <Search className="w-4 h-4 text-text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, faculty, research…"
                className="w-full bg-transparent outline-none text-sm placeholder:text-text-muted dark:text-white"
              />
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-200 dark:border-white/15 text-text-muted">ESC</kbd>
            </div>
            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="px-5 py-6 text-sm text-text-muted text-center">No results for "{query}"</p>
              )}
              {filtered.map((r) => (
                <button
                  key={r.path}
                  onClick={() => { navigate(r.path); onClose() }}
                  className="w-full flex items-center justify-between px-5 py-2.5 text-sm text-left hover:bg-primary-50 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="dark:text-white">{r.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
