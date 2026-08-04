import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '@/components/ui/SocialIcons'
import { DEPT } from '@/data/content'

const COLS = [
  {
    title: 'Department', links: [
      { label: 'About', path: '/about' }, { label: 'Faculty', path: '/faculty' },
      { label: 'Laboratories', path: '/laboratories' }, { label: 'Research', path: '/research' },
    ],
  },
  {
    title: 'Academics', links: [
      { label: 'Programs', path: '/academics' }, { label: 'Tech Hub', path: '/tech-hub' },
      { label: 'Placements', path: '/placements' }, { label: 'Alumni', path: '/alumni' },
    ],
  },
  {
    title: 'Community', links: [
      { label: 'Student Life', path: '/student-life' }, { label: 'Events', path: '/events' },
      { label: 'News', path: '/news' }, { label: 'Gallery', path: '/gallery' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-primary text-slate-300 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-display font-bold text-sm">
              CSE
            </div>
            <div>
              <p className="font-display font-bold text-white text-sm">{DEPT.institute}</p>
              <p className="text-xs text-slate-400">Department of {DEPT.name}</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-sm">
            Nanded, Maharashtra — training engineers who ship systems that hold up under real load, since {DEPT.founded}.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-secondary flex items-center justify-center transition-colors" aria-label="Social link">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <p className="text-white text-sm font-semibold mb-4">{col.title}</p>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-white text-sm font-semibold mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex gap-2.5"><MapPin className="w-4 h-4 shrink-0 mt-0.5" /> Vishnupuri, Nanded, Maharashtra 431606</li>
            <li className="flex gap-2.5"><Mail className="w-4 h-4 shrink-0 mt-0.5" /> cse@sggs.ac.in</li>
            <li className="flex gap-2.5"><Phone className="w-4 h-4 shrink-0 mt-0.5" /> +91 2462 229 500</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Department of CSE, SGGS Nanded. All rights reserved.</p>
          <p>Designed & built in-house by the Department Tech Hub.</p>
        </div>
      </div>
    </footer>
  )
}
