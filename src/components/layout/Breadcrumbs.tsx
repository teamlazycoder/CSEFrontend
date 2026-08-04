import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export function Breadcrumbs() {
  const { pathname } = useLocation()
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
      <ol className="flex items-center gap-1.5 text-xs text-text-muted">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-secondary">
            <Home className="w-3.5 h-3.5" />
          </Link>
        </li>
        {parts.map((part, i) => {
          const path = '/' + parts.slice(0, i + 1).join('/')
          const label = part.replace(/-/g, ' ')
          return (
            <li key={path} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3" />
              <Link to={path} className="capitalize hover:text-secondary last:text-primary last:dark:text-white last:font-medium">
                {label}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
