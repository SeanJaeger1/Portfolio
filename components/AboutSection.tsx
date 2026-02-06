import { FC, useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from '../utils/gsap'
import SplitType from 'split-type'

const AboutSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const paragraphs = [
    "Hi, I'm Sean.",
    "I'm a software engineer who thrives in the chaos of early-stage startups. Over the past five years, I've helped build products that secured millions in funding and scaled to thousands of users.",
    '<strong>My superpower?</strong> Turning ambitious ideas into working products, fast. At Kimo, I built an MVP in 6 weeks that directly secured €3M in funding and attracted 120,000 early adopters. When our senior engineer left, I stepped up as de facto CTO, architecting the v2 platform that became the cornerstone of their Series A pitch.',
    "<strong>Currently</strong>, I'm at Recirculate Systems, where I've built a real-time tracking system handling 10,000+ concurrent connections using Go and WebSockets. Before this, I scaled Rentokil's IoT platform managing 20,000+ devices across the UK, boosting test coverage from 62% to 81% along the way.",
    '<strong>What drives me</strong> is the intersection of technical excellence and real-world impact. I\'ve ranked in the top 4% on LeetCode and placed in the top 0.8% in competitive programming competitions. But I\'m equally passionate about the human side - mentoring teams, running sprints as scrum master, and translating complex technical decisions for investors and stakeholders.',
    "<strong>My journey</strong> started unconventionally. At 18, while finishing A-levels, I taught myself JavaScript and joined Human Lambdas as a founding engineer. That experience of building from zero taught me that resourcefulness beats resources every time.",
    "<strong>Beyond the terminal</strong>, you'll find me training as a Judo black belt, exploring new countries as a digital nomad, or improving my Spanish. I believe diverse experiences make better engineers - whether it's the discipline from martial arts or the adaptability from constant travel.",
    "<strong>I'm drawn to</strong> ambitious teams solving hard problems. If you're building something that matters and need someone who can ship fast without sacrificing quality, let's talk.",
  ]

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // Heading rotate-in
      if (headingRef.current) {
        const split = new SplitType(headingRef.current, { types: 'words' })
        const words = split.words || []
        gsap.set(headingRef.current, { visibility: 'visible', perspective: 1000 })
        gsap.set(words, { rotateX: -90, opacity: 0, transformOrigin: '50% 0%' })

        gsap.to(words, {
          rotateX: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Scrub-reveal paragraphs
      const paragraphEls = sectionRef.current?.querySelectorAll('.about-paragraph')
      paragraphEls?.forEach((el) => {
        const htmlEl = el as HTMLElement
        gsap.set(htmlEl, { visibility: 'visible' })
        const split = new SplitType(htmlEl, { types: 'words' })
        const words = split.words || []
        gsap.set(words, { opacity: 0.15 })

        gsap.to(words, {
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: htmlEl,
            start: 'top 85%',
            end: 'bottom 40%',
            scrub: true,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="mt-32 scroll-mt-24">
      <h2
        ref={headingRef}
        className="gsap-hidden text-4xl md:text-5xl font-bold text-cinema-text mb-12"
      >
        About Me
      </h2>

      <div className="space-y-6 max-w-3xl">
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="about-paragraph gsap-hidden text-lg text-cinema-muted leading-relaxed
              [&_strong]:text-cinema-accent [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
    </section>
  )
}

export default AboutSection
