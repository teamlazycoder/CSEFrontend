import { useState, type ReactNode } from 'react'
import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Bell, Moon, Sun, LogOut, Search, type LucideIcon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useAuth, type Role } from '@/context/AuthContext'
import { initials, cn } from '@/lib/utils'

export interface NavItem { label: string; path: string; icon: LucideIcon }
export interface NavSection { title: string; items: NavItem[] }

const ROLE_LABEL: Record<Role, string> = { student: 'Student Portal', faculty: 'Faculty Portal', hod: 'HOD Executive Portal' }
const ROLE_COLOR: Record<Role, string> = { student: 'from-secondary to-accent', faculty: 'from-primary to-secondary', hod: 'from-primary via-secondary to-accent' }

export function DashboardLayout({ sections, children }: { sections: NavSection[]; children?: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  if (!user) return null

  return (
    <div className="min-h-screen flex bg-bg dark:bg-primary-900">
      {/* Sidebar */}
      <aside className={cn(
        'fixed lg:sticky top-0 z-40 h-screen w-72 shrink-0 bg-primary text-white flex flex-col transition-transform duration-300',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      )}>
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2.5">
            <div className={cn('w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center font-display font-bold text-xs', ROLE_COLOR[user.role])}>CSE</div>
            <span className="font-display font-semibold text-sm">{ROLE_LABEL[user.role]}</span>
          </Link>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}><X className="w-5 h-5" /></button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {sections.map((section) => (
            <div key={section.title}>
              <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">{section.title}</p>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const active = pathname === item.path
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors',
                        active ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                      )}
                    >
                      <item.icon className="w-4 h-4 shrink-0" />
                      {item.label}
                    </NavLink>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-white/10">
          <button
            onClick={() => { logout(); navigate('/') }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-danger w-full transition-colors"
          >
            <LogOut className="w-4 h-4" /> Log out
          </button>
        </div>
      </aside>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-20 h-16 flex items-center justify-between px-4 sm:px-8 bg-white/80 dark:bg-primary-900/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 -ml-2" onClick={() => setSidebarOpen(true)}><Menu className="w-5 h-5 text-primary dark:text-white" /></button>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs text-text-muted w-64">
              <Search className="w-3.5 h-3.5" /> Search this portal…
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={toggle} className="p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-white/5">
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5 text-white" /> : <Moon className="w-4.5 h-4.5 text-primary" />}
            </button>
            <button className="relative p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-white/5">
              <Bell className="w-4.5 h-4.5 text-primary dark:text-white" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-danger" />
            </button>
            <div className="flex items-center gap-2.5 pl-2 ml-1 border-l border-slate-200 dark:border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent text-white font-display font-semibold text-xs flex items-center justify-center">
                {initials(user.name)}
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-xs font-semibold text-primary dark:text-white">{user.name}</p>
                <p className="text-[11px] text-text-muted capitalize">{user.role}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-8">
          {children ?? <Outlet />}
        </main>
      </div>
    </div>
  )
}
