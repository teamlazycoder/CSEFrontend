import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { DEPT } from '@/data/content'

const CYCLE_WORDS = ['Artificial Intelligence', 'Distributed Systems', 'Cyber Security', 'Robotics', 'Data Science']

function NodeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let raf = 0
    let w = 0, h = 0
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    interface Node { x: number; y: number; vx: number; vy: number }
    let nodes: Node[] = []

    function resize() {
      w = canvas!.clientWidth
      h = canvas!.clientHeight
      canvas!.width = w * devicePixelRatio
      canvas!.height = h * devicePixelRatio
      ctx!.scale(devicePixelRatio, devicePixelRatio)
      const count = Math.min(70, Math.floor((w * h) / 18000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    function tick() {
      ctx!.clearRect(0, 0, w, h)
      for (const n of nodes) {
        if (!prefersReduced) {
          n.x += n.vx
          n.y += n.vy
        }
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 140) {
            ctx!.strokeStyle = `rgba(45,168,255,${0.16 * (1 - d / 140)})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }
      for (const n of nodes) {
        ctx!.fillStyle = 'rgba(45,168,255,0.55)'
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
        ctx!.fill()
      }
      raf = requestAnimationFrame(tick)
    }

    resize()
    tick()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}

function TypingCycle() {
  const [wordIndex, setWordIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = CYCLE_WORDS[wordIndex]
    const speed = deleting ? 35 : 60
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (display.length < current.length) setDisplay(current.slice(0, display.length + 1))
        else setTimeout(() => setDeleting(true), 1400)
      } else {
        if (display.length > 0) setDisplay(current.slice(0, display.length - 1))
        else {
          setDeleting(false)
          setWordIndex((i) => (i + 1) % CYCLE_WORDS.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [display, deleting, wordIndex])

  return (
    <span className="text-gradient font-display font-bold">
      {display}
      <span className="inline-block w-[2px] h-[0.9em] bg-accent ml-0.5 align-middle animate-pulse" />
    </span>
  )
}

export function Hero() {
  const navigate = useNavigate()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-eyebrow', { opacity: 0, y: 16, duration: 0.6 })
        .from('.hero-title', { opacity: 0, y: 28, duration: 0.7 }, '-=0.35')
        .from('.hero-desc', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from('.hero-cta', { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 }, '-=0.35')
        .from('.hero-card', { opacity: 0, y: 24, scale: 0.96, duration: 0.7 }, '-=0.5')
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-primary min-h-[92vh] flex items-center">
      <NodeCanvas />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/4 -left-24 w-72 h-72 rounded-full bg-secondary/25 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/15 blur-3xl animate-pulse-slow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center w-full">
        <div>
          <div className="hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-semibold text-accent mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            NBA Accredited · Est. {DEPT.founded}
          </div>
          <h1 className="hero-title font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight">
            Department of<br />
            Computer Science<br />
            &amp; Engineering
          </h1>
          <p className="hero-desc mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
            We build researchers, engineers, and founders around <TypingCycle /> — inside labs, not just lecture halls.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button size="lg" className="hero-cta group" onClick={() => navigate('/about')}>
              Explore the Department
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="hero-cta !text-white !border-white/25 hover:!border-accent hover:!text-accent" onClick={() => navigate('/academics')}>
              Admissions
            </Button>
            <button
              onClick={() => navigate('/gallery')}
              className="hero-cta flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-accent transition-colors px-2"
            >
              <PlayCircle className="w-8 h-8" />
              Virtual Tour
            </button>
          </div>
        </div>

        <div className="hero-card relative hidden lg:block">
          <div className="glass rounded-3xl p-6 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Avg. Package', value: '₹14.2 LPA' },
                { label: 'Highest Package', value: '₹62 LPA' },
                { label: 'Research Papers', value: '640+' },
                { label: 'Active Patents', value: '28' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="font-mono text-2xl font-semibold text-white">{item.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/10 border border-white/10 p-4">
              <p className="text-xs text-slate-300 leading-relaxed">
                "Ten research groups, ten specialized labs, one department obsessed with shipping working systems."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
