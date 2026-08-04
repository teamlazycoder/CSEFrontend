import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Search, Bell, Moon, Sun, Menu, X, ChevronDown, Command,
  GraduationCap, FlaskConical, Users, Briefcase, Newspaper,
} from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useAuth } from '@/context/AuthContext'
import { CommandPalette } from './CommandPalette'
import { Button } from '@/components/ui/Button'
import { initials } from '@/lib/utils'
import { useClickOutside } from '@/hooks/useClickOutside'

const NAV_GROUPS = [
  {
    label: 'Department', icon: Users,
    items: [
      { label: 'About', path: '/about', desc: 'History, vision, accreditation' },
      { label: 'Faculty', path: '/faculty', desc: 'Directory & research profiles' },
      { label: 'Laboratories', path: '/laboratories', desc: '10 specialized labs' },
      { label: 'Contact', path: '/contact', desc: 'Reach the department' },
    ],
  },
  {
    label: 'Academics', icon: GraduationCap,
    items: [
      { label: 'Programs', path: '/academics', desc: 'UG · PG · PhD' },
      { label: 'Tech Hub', path: '/tech-hub', desc: 'Student-built projects' },
      { label: 'Student Life', path: '/student-life', desc: 'Chapters & clubs' },
      { label: 'Alumni', path: '/alumni', desc: 'Where graduates go' },
    ],
  },
  {
    label: 'Research', icon: FlaskConical,
    items: [
      { label: 'Research Domains', path: '/research', desc: '10 active groups' },
      { label: 'Events', path: '/events', desc: 'Hackathons & seminars' },
      { label: 'News', path: '/news', desc: 'Announcements' },
      { label: 'Gallery', path: '/gallery', desc: 'Campus & labs' },
    ],
  },
  {
    label: 'Careers', icon: Briefcase,
    items: [
      { label: 'Placements', path: '/placements', desc: 'Stats & recruiters' },
      { label: 'Alumni Network', path: '/alumni', desc: 'Mentorship' },
    ],
  },
]

const NOTIFICATIONS = [
  { title: 'HackNanded 6.0 registrations open', time: '2h ago', icon: Newspaper },
  { title: 'Sem 5 internal marks published', time: '1d ago', icon: GraduationCap },
  { title: 'Guest lecture: Cloudflare engineering', time: '2d ago', icon: FlaskConical },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeGroup, setActiveGroup] = useState<string | null>(null)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const notifRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  useClickOutside(notifRef, () => setNotifOpen(false), notifOpen)
  useClickOutside(profileRef, () => setProfileOpen(false), profileOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setPaletteOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-sm shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
              CSE
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="font-display font-bold text-sm text-primary dark:text-white">SGGS Nanded</p>
              <p className="text-[11px] text-text-muted -mt-0.5">Dept. of CSE</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1" onMouseLeave={() => setActiveGroup(null)}>
            {NAV_GROUPS.map((group) => (
              <div key={group.label} className="relative" onMouseEnter={() => setActiveGroup(group.label)}>
                <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-primary/80 dark:text-slate-200 hover:text-secondary dark:hover:text-accent rounded-lg transition-colors">
                  {group.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeGroup === group.label ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeGroup === group.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72"
                    >
                      <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900 shadow-xl p-2">
                        {group.items.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex flex-col gap-0.5 px-4 py-2.5 rounded-xl hover:bg-primary-50 dark:hover:bg-white/5 transition-colors"
                          >
                            <span className="text-sm font-semibold text-primary dark:text-white">{item.label}</span>
                            <span className="text-xs text-text-muted">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setPaletteOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs text-text-muted hover:border-secondary transition-colors"
              aria-label="Open command palette"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Quick search</span>
              <kbd className="flex items-center gap-0.5 text-[10px] font-mono bg-slate-100 dark:bg-white/10 px-1 py-0.5 rounded">
                <Command className="w-2.5 h-2.5" />K
              </kbd>
            </button>

            <button
              onClick={() => setPaletteOpen(true)}
              className="sm:hidden p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-white/5"
              aria-label="Search"
            >
              <Search className="w-4.5 h-4.5 text-primary dark:text-white" />
            </button>

            <button
              onClick={toggle}
              className="p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5 text-white" /> : <Moon className="w-4.5 h-4.5 text-primary" />}
            </button>

            <div className="relative" ref={notifRef}>
              <button
                onClick={() => { setNotifOpen((v) => !v); setProfileOpen(false) }}
                className="relative p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-white/5 transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-4.5 h-4.5 text-primary dark:text-white" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-danger" />
              </button>
              <AnimatePresence>
                {notifOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-80 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900 shadow-xl overflow-hidden"
                  >
                    <div className="px-4 py-3 border-b border-slate-100 dark:border-white/10">
                      <p className="text-sm font-semibold text-primary dark:text-white">Notifications</p>
                    </div>
                    {NOTIFICATIONS.map((n, i) => (
                      <div key={i} className="flex items-start gap-3 px-4 py-3 hover:bg-primary-50 dark:hover:bg-white/5 border-b border-slate-50 dark:border-white/5 last:border-0">
                        <div className="w-8 h-8 rounded-lg bg-secondary-50 dark:bg-secondary/15 flex items-center justify-center shrink-0">
                          <n.icon className="w-4 h-4 text-secondary" />
                        </div>
                        <div>
                          <p className="text-sm text-primary dark:text-white leading-snug">{n.title}</p>
                          <p className="text-xs text-text-muted mt-0.5">{n.time}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {user ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => { setProfileOpen((v) => !v); setNotifOpen(false) }}
                  className="ml-1 w-9 h-9 rounded-full bg-gradient-to-br from-secondary to-accent text-white font-display font-semibold text-xs flex items-center justify-center"
                >
                  {initials(user.name)}
                </button>
                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-primary-900 shadow-xl p-1.5"
                    >
                      <div className="px-3 py-2.5">
                        <p className="text-sm font-semibold text-primary dark:text-white">{user.name}</p>
                        <p className="text-xs text-text-muted">{user.email}</p>
                      </div>
                      <button
                        onClick={() => { navigate(`/dashboard/${user.role}`); setProfileOpen(false) }}
                        className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-primary-50 dark:hover:bg-white/5 text-primary dark:text-white"
                      >
                        Go to dashboard
                      </button>
                      <button
                        onClick={() => { logout(); setProfileOpen(false); navigate('/') }}
                        className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 text-danger"
                      >
                        Log out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Button size="sm" onClick={() => navigate('/login')} className="ml-1">
                Portal Login
              </Button>
            )}

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-white/5"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5 text-primary dark:text-white" /> : <Menu className="w-5 h-5 text-primary dark:text-white" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-slate-100 dark:border-white/10 bg-white dark:bg-primary-900"
            >
              <div className="px-4 py-4 space-y-4 max-h-[70vh] overflow-y-auto">
                {NAV_GROUPS.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-bold uppercase tracking-wide text-text-muted mb-2">{group.label}</p>
                    <div className="space-y-1">
                      {group.items.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 rounded-lg text-sm text-primary dark:text-white hover:bg-primary-50 dark:hover:bg-white/5"
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  )
}
