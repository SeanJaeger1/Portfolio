import { FC, useRef, useEffect } from 'react'
import {
  Trophy,
  TrendingUp,
  Users,
  Code,
  Target,
  Zap,
  Globe,
  DollarSign,
  Medal,
} from 'lucide-react'
import { gsap } from '../utils/gsap'
import SplitType from 'split-type'

interface Achievement {
  icon: any
  title: string
  value: string
  numericValue?: number
  prefix?: string
  suffix?: string
  description: string
}

const AchievementsSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const achievements: Achievement[] = [
    {
      icon: Trophy,
      title: 'LeetCode Ranking',
      value: 'Top 3%',
      description: 'Global ranking among millions of developers',
    },
    {
      icon: Medal,
      title: 'Competition Performance',
      value: 'Top .8%',
      description: 'Ranked top 160 of 20,000+ participants in competitive programming',
    },
    {
      icon: DollarSign,
      title: 'Funding Secured',
      value: '£4M+',
      description: 'Direct contribution to startup funding rounds',
    },
    {
      icon: Users,
      title: 'User Impact',
      value: '120K+',
      numericValue: 120,
      prefix: '',
      suffix: 'K+',
      description: 'Early adopters gained through product development',
    },
    {
      icon: Code,
      title: 'Test Coverage',
      value: '62% → 81%',
      description: 'Improved enterprise platform test coverage',
    },
    {
      icon: Globe,
      title: 'IoT Fleet Scale',
      value: '10,000+',
      numericValue: 10000,
      suffix: '+',
      description: 'Devices managed in real-time monitoring platform',
    },
    {
      icon: Zap,
      title: 'Concurrent Connections',
      value: '10,000+',
      numericValue: 10000,
      suffix: '+',
      description: 'Engineered high-performance real-time systems proven at scale',
    },
    {
      icon: Target,
      title: 'Sprint Performance',
      value: '6 weeks',
      description: 'Investor demo prototype delivery timeline',
    },
  ]

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // Heading
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

      // Achievement cards stagger
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.achievement-card')
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })

        // Counter animations
        cards.forEach((card) => {
          const counterEl = card.querySelector('.counter-val') as HTMLElement
          if (!counterEl) return
          const numVal = Number(counterEl.dataset.numvalue)
          if (isNaN(numVal) || numVal === 0) return

          const prefix = counterEl.dataset.prefix || ''
          const suffix = counterEl.dataset.suffix || ''
          const obj = { value: 0 }

          gsap.to(obj, {
            value: numVal,
            duration: 2,
            ease: 'power2.out',
            snap: { value: 1 },
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            onUpdate: () => {
              counterEl.textContent = `${prefix}${Math.round(obj.value).toLocaleString()}${suffix}`
            },
          })
        })
      }

      // CTA
      if (ctaRef.current) {
        gsap.set(ctaRef.current, { y: 40, opacity: 0, scale: 0.95 })
        gsap.to(ctaRef.current, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="achievements" ref={sectionRef} className="my-32 scroll-mt-24">
      <div className="mb-12 text-center">
        <div className="mb-2">
          <span className="font-mono text-xs text-cinema-accent tracking-widest">05</span>
        </div>
        <h2
          ref={headingRef}
          className="gsap-hidden font-display text-4xl md:text-5xl text-cinema-text mb-4"
        >
          Key Achievements & Impact
        </h2>
        <p className="text-lg text-cinema-muted max-w-3xl mx-auto">
          Quantifiable results from 5+ years of building impactful software solutions
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="achievement-card bg-cinema-surface border border-cinema-border
              rounded-xl p-6 hover:border-cinema-accent/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <achievement.icon className="w-8 h-8 text-cinema-accent" />
              <div className="text-right">
                <div
                  className="counter-val text-2xl font-bold text-cinema-accent whitespace-nowrap"
                  data-numvalue={achievement.numericValue || 0}
                  data-prefix={achievement.prefix || ''}
                  data-suffix={achievement.suffix || ''}
                >
                  {achievement.value}
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-cinema-text mb-2">
              {achievement.title}
            </h3>
            <p className="text-sm text-cinema-muted">{achievement.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        ref={ctaRef}
        className="text-center bg-cinema-surface border border-cinema-accent/20 rounded-xl p-8
          shadow-[0_0_30px_rgba(232,93,58,0.08)]"
      >
        <h3 className="font-display text-xl text-cinema-text mb-4">
          Ready to make an impact together?
        </h3>
        <p className="text-cinema-muted mb-6">
          Let&apos;s discuss how my experience can contribute to your team&apos;s success
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Sean-Jaeger-CV.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cinema-accent
              hover:bg-cinema-accent/90 text-white font-medium rounded-lg
              transition-all duration-200"
          >
            <Trophy className="w-4 h-4" />
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/sean-jaeger/"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cinema-surface
              hover:bg-cinema-border text-cinema-text font-medium rounded-lg
              transition-colors duration-200 border border-cinema-border"
          >
            <Users className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
