import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../utils/gsap'

export function useGsapScrollTrigger(
  callback: (context: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger }) => void,
  deps: unknown[] = []
) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      callback({ gsap, ScrollTrigger })
    },
    { scope: containerRef, dependencies: deps }
  )

  return containerRef
}
