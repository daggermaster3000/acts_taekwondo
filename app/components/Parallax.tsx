'use client'

import React, { useEffect, useRef, useState } from 'react'

type ParallaxProps = {
  children: React.ReactNode
  speed?: number // 0..1, how strong the effect is
  className?: string
}

export default function Parallax({ children, speed = 0.3, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setTranslateY(0)
      return
    }

    let rafId = 0
    const onScroll = () => {
      if (!ref.current) return
      const el = ref.current
      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight || 0
      // progress: -1 (way above) to 1 (way below); near 0 around center
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH
      const offset = Math.max(-50, Math.min(50, progress * (speed * 100)))
      setTranslateY(offset)
    }

    const onScrollRAF = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(onScroll)
    }

    onScroll()
    window.addEventListener('scroll', onScrollRAF, { passive: true })
    window.addEventListener('resize', onScrollRAF)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScrollRAF)
      window.removeEventListener('resize', onScrollRAF)
    }
  }, [speed])

  return (
    <div ref={ref} className={className} style={{ transform: `translateY(${translateY}px)`, willChange: 'transform' }}>
      {children}
    </div>
  )
}


