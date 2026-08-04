import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

interface CountUpProps {
  end: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
  /** Kept for API compatibility with the previous react-countup usage; the counter
   *  always animates once its element scrolls into view unless explicitly disabled. */
  enableScrollSpy?: boolean
  scrollSpyOnce?: boolean
}

/**
 * Lightweight animated number counter built on framer-motion (already a project
 * dependency) instead of `react-countup`, whose UMD-only build triggers a Vite
 * dependency-pre-bundling interop bug ("Element type is invalid... got: object").
 */
export function CountUp({
  end,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
  enableScrollSpy = true,
  scrollSpyOnce = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: scrollSpyOnce, margin: '-60px' })
  const [display, setDisplay] = useState((0).toFixed(decimals))
  const hasAnimated = useRef(false)

  useEffect(() => {
    const shouldRun = !enableScrollSpy || inView
    if (!shouldRun || (scrollSpyOnce && hasAnimated.current)) return

    hasAnimated.current = true
    const controls = animate(0, end, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    })
    return () => controls.stop()
  }, [inView, end, duration, decimals, enableScrollSpy, scrollSpyOnce])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export default CountUp
