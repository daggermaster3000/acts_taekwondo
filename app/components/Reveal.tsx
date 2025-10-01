'use client'

import React, { useEffect, useRef, useState } from 'react'

type RevealProps = {
  children: React.ReactNode
  as?: keyof React.JSX.IntrinsicElements
  delayMs?: number
  offset?: number
  className?: string
}

export default function Reveal({
  children,
  as: Tag = 'div',
  delayMs = 0,
  offset = 0.1,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return
    }

    const element = ref.current
    if (!element) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              const id = setTimeout(() => setVisible(true), delayMs)
              return () => clearTimeout(id)
            }
            setVisible(true)
          }
        })
      },
      { threshold: offset }
    )

    io.observe(element)
    return () => io.disconnect()
  }, [delayMs, offset])

  return (
    <div
      ref={ref}
      className={[
        'transition-all duration-700 ease-out will-change-transform',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
      ].join(' ')}
    >
      <Tag className={className}>{children}</Tag>
    </div>
  )
}


