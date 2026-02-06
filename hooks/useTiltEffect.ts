import { useRef, useCallback, useEffect } from 'react'

export function useTiltEffect(maxTilt = 8) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const card = cardRef.current
      if (!card) return

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -maxTilt
      const rotateY = ((x - centerX) / centerX) * maxTilt

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      card.style.transition = 'transform 0.1s ease'
    },
    [maxTilt]
  )

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    card.style.transition = 'transform 0.4s ease'
  }, [])

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return cardRef
}
