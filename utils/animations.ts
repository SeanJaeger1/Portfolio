import { gsap, ScrollTrigger } from './gsap'
import SplitType from 'split-type'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function wordsSlideUp(element: HTMLElement, delay = 0): gsap.core.Timeline {
  if (prefersReducedMotion()) {
    gsap.set(element, { visibility: 'visible', opacity: 1 })
    return gsap.timeline()
  }

  const split = new SplitType(element, { types: 'words' })
  const words = split.words || []

  gsap.set(element, { visibility: 'visible' })
  gsap.set(words, { yPercent: 100, rotateX: 90, opacity: 0 })

  const tl = gsap.timeline({ delay })
  tl.to(words, {
    yPercent: 0,
    rotateX: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.15,
  })

  return tl
}

export function wordsRotateIn(
  element: HTMLElement,
  scrollTriggerConfig?: ScrollTrigger.Vars
): gsap.core.Timeline {
  if (prefersReducedMotion()) {
    gsap.set(element, { visibility: 'visible', opacity: 1 })
    return gsap.timeline()
  }

  const split = new SplitType(element, { types: 'words' })
  const words = split.words || []

  gsap.set(element, { visibility: 'visible', perspective: 1000 })
  gsap.set(words, { rotateX: -90, opacity: 0, transformOrigin: '50% 0%' })

  const tl = gsap.timeline({
    scrollTrigger: scrollTriggerConfig || {
      trigger: element,
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  })

  tl.to(words, {
    rotateX: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.08,
  })

  return tl
}

export function scrubTextReveal(
  element: HTMLElement,
  scrollTriggerConfig?: ScrollTrigger.Vars
): gsap.core.Timeline {
  if (prefersReducedMotion()) {
    gsap.set(element, { visibility: 'visible', opacity: 1 })
    return gsap.timeline()
  }

  const split = new SplitType(element, { types: 'words' })
  const words = split.words || []

  gsap.set(element, { visibility: 'visible' })
  gsap.set(words, { opacity: 0.15 })

  const tl = gsap.timeline({
    scrollTrigger: scrollTriggerConfig || {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 40%',
      scrub: true,
    },
  })

  tl.to(words, {
    opacity: 1,
    duration: 1,
    stagger: 0.1,
  })

  return tl
}

export function parallaxElement(
  element: HTMLElement,
  yDistance: number,
  scrollTriggerConfig?: ScrollTrigger.Vars
): gsap.core.Tween {
  if (prefersReducedMotion()) return gsap.set(element, {}) as gsap.core.Tween

  return gsap.to(element, {
    y: yDistance,
    ease: 'none',
    scrollTrigger: scrollTriggerConfig || {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}

export function staggerCards(
  elements: HTMLElement[] | NodeListOf<Element>
): gsap.core.Timeline {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 })
    return gsap.timeline()
  }

  gsap.set(elements, { y: 60, opacity: 0 })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  })

  tl.to(elements, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.12,
  })

  return tl
}

export function counterAnimation(
  element: HTMLElement,
  endValue: number,
  duration = 2
): gsap.core.Tween {
  if (prefersReducedMotion()) {
    element.textContent = String(endValue)
    return gsap.set(element, {}) as gsap.core.Tween
  }

  const obj = { value: 0 }
  return gsap.to(obj, {
    value: endValue,
    duration,
    ease: 'power2.out',
    snap: { value: 1 },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    onUpdate: () => {
      element.textContent = String(Math.round(obj.value))
    },
  })
}
