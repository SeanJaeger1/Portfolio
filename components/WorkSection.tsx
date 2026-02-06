import { FC, useRef, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projectsData'
import { gsap } from '../utils/gsap'
import SplitType from 'split-type'

const WorkSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // Heading slide-up
      if (headingRef.current) {
        const split = new SplitType(headingRef.current, { types: 'words' })
        const words = split.words || []
        gsap.set(headingRef.current, { visibility: 'visible' })
        gsap.set(words, { yPercent: 100, rotateX: 90, opacity: 0 })

        gsap.to(words, {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Cards stagger
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.project-card-wrapper')
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="my-32 scroll-mt-24">
      <div className="mb-2">
        <span className="font-mono text-xs text-cinema-accent tracking-widest">04</span>
      </div>
      <h2
        ref={headingRef}
        className="gsap-hidden font-display italic text-5xl md:text-7xl text-cinema-text mb-12 pb-1 split-parent"
      >
        My Work
      </h2>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card-wrapper">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkSection
