import { useRef, useEffect, useCallback } from 'react'
import SplitType from 'split-type'

export function useSplitText(types: 'words' | 'chars' | 'words,chars' = 'words') {
  const elementRef = useRef<HTMLElement>(null)
  const splitRef = useRef<SplitType | null>(null)

  const revert = useCallback(() => {
    if (splitRef.current) {
      splitRef.current.revert()
      splitRef.current = null
    }
  }, [])

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    splitRef.current = new SplitType(el, { types })

    const handleResize = () => {
      if (splitRef.current) {
        splitRef.current.revert()
      }
      splitRef.current = new SplitType(el, { types })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      revert()
    }
  }, [types, revert])

  return { elementRef, splitRef, revert }
}
