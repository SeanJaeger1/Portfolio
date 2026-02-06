export const GSAP_DEFAULTS = {
  ease: 'power3.out',
  duration: 1,
}

export const SCROLL_TRIGGER_DEFAULTS = {
  start: 'top 80%',
  toggleActions: 'play none none none' as const,
}

export const TEXT_ANIMATION_PRESETS = {
  slideUp: {
    yPercent: 100,
    rotateX: 90,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: 'power3.out',
  },
  rotateIn: {
    rotateX: -90,
    opacity: 0,
    stagger: 0.08,
    duration: 0.8,
    ease: 'power3.out',
  },
  scrubReveal: {
    initialOpacity: 0.15,
    finalOpacity: 1,
    stagger: 0.1,
  },
}

// Keep FM variants for hover/tap micro-interactions only
export const HOVER_VARIANTS = {
  scale: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
}
