import { FC, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Zap,
  Trophy,
} from 'lucide-react'
import { gsap, ScrollTrigger } from '../utils/gsap'
import SplitType from 'split-type'
import { useTiltEffect } from '../hooks/useTiltEffect'

interface SkillCategory {
  title: string
  icon: any
  skills: Array<{
    name: string
    level: 'Strong' | 'Competent' | 'Familiar'
    description?: string
  }>
}

const TiltCard: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const cardRef = useTiltEffect(6)
  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  )
}

const SkillsSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'JavaScript & TypeScript', level: 'Strong', description: 'ES6+, Modern JS patterns' },
        { name: 'React.js / Next.js', level: 'Strong', description: 'Hooks, Context, Redux, SSR' },
        { name: 'React Native', level: 'Strong', description: 'Cross-platform mobile apps' },
        { name: 'HTML5 & CSS3', level: 'Strong', description: 'Semantic markup, Flexbox, Grid' },
        { name: 'Tailwind CSS', level: 'Strong', description: 'Utility-first styling' },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Python', level: 'Strong', description: 'Django, FastAPI, Data Analysis' },
        { name: 'Go', level: 'Competent', description: 'Concurrent programming, APIs' },
        { name: 'Node.js', level: 'Competent', description: 'Express, REST APIs' },
        { name: 'Django / DRF', level: 'Competent', description: 'Full-stack web applications' },
        { name: 'PostgreSQL', level: 'Competent', description: 'Database design, optimization' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 'Strong', description: 'EC2, S3, Lambda, RDS' },
        { name: 'CI/CD', level: 'Strong', description: 'GitHub Actions, automated deployment' },
        { name: 'Docker', level: 'Competent', description: 'Containerization, Docker Compose' },
        { name: 'Ubuntu', level: 'Competent', description: 'Server administration' },
        { name: 'Serverless', level: 'Competent', description: 'Lambda functions, API Gateway' },
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 'Strong', description: 'iOS & Android apps' },
        { name: 'Expo', level: 'Strong', description: 'Rapid prototyping, deployment' },
        { name: 'Mobile UI/UX', level: 'Competent', description: 'Platform-specific design' },
        { name: 'App Store Deployment', level: 'Competent', description: 'iOS & Android stores' },
      ],
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 'Strong', description: 'UI/UX design, prototyping' },
        { name: 'Responsive Design', level: 'Strong', description: 'Mobile-first approach' },
        { name: 'User Experience', level: 'Competent', description: 'User research, testing' },
        { name: 'Design Systems', level: 'Competent', description: 'Component libraries' },
      ],
    },
    {
      title: 'Algorithms & CS',
      icon: Zap,
      skills: [
        { name: 'Data Structures', level: 'Strong', description: 'Arrays, Trees, Graphs, Hash Tables' },
        { name: 'Algorithms', level: 'Strong', description: 'Sorting, Searching, Dynamic Programming' },
        { name: 'System Design', level: 'Strong', description: 'Scalable architecture patterns' },
        { name: 'LeetCode', level: 'Strong', description: 'Top 3% globally ranked' },
        { name: 'Competitive Programming', level: 'Strong', description: 'Top 0.8% in 20K+ competition' },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Strong':
        return 'bg-green-500/10 text-green-400 border-green-500/20'
      case 'Competent':
        return 'bg-cinema-accent/10 text-cinema-accent border-cinema-accent/20'
      case 'Familiar':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
      default:
        return 'bg-cinema-muted/10 text-cinema-muted border-cinema-border'
    }
  }

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

      // Cards stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.skill-card')
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }

      // Counter animations for achievements
      const counterEls = sectionRef.current?.querySelectorAll('.counter-value')
      counterEls?.forEach((el) => {
        const htmlEl = el as HTMLElement
        const endVal = htmlEl.dataset.value
        if (!endVal) return

        const numVal = parseFloat(endVal)
        if (isNaN(numVal)) return

        const prefix = htmlEl.dataset.prefix || ''
        const suffix = htmlEl.dataset.suffix || ''
        const obj = { value: 0 }

        gsap.to(obj, {
          value: numVal,
          duration: 2,
          ease: 'power2.out',
          snap: { value: 1 },
          scrollTrigger: {
            trigger: htmlEl,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            htmlEl.textContent = `${prefix}${Math.round(obj.value)}${suffix}`
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="my-32 scroll-mt-24">
      <div className="mb-12">
        <h2
          ref={headingRef}
          className="gsap-hidden text-4xl md:text-5xl font-bold text-cinema-text mb-4"
        >
          Technical Skills
        </h2>
        <p className="text-lg text-cinema-muted">
          A comprehensive overview of my technical expertise and proficiency levels
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <TiltCard
            key={category.title}
            className="skill-card bg-cinema-surface border border-cinema-border
              rounded-xl p-6 hover:border-cinema-accent/30 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cinema-accent/10 text-cinema-accent">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-cinema-text">
                {category.title}
              </h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-cinema-text/90">
                      {skill.name}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium border ${getLevelColor(skill.level)}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  {skill.description && (
                    <p className="text-sm text-cinema-muted">
                      {skill.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Notable Achievements */}
      <div className="mt-12 bg-cinema-surface rounded-xl p-6 border border-cinema-border">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="w-6 h-6 text-amber-500" />
          <h3 className="text-xl font-bold text-cinema-text">
            Notable Achievements
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-cinema-bg rounded-lg border border-cinema-border">
            <div
              className="counter-value text-2xl font-bold text-cinema-accent mb-1"
              data-value="3"
              data-prefix="Top "
              data-suffix="%"
            >
              Top 3%
            </div>
            <div className="text-sm text-cinema-muted">LeetCode Global Ranking</div>
          </div>
          <div className="text-center p-4 bg-cinema-bg rounded-lg border border-cinema-border">
            <div
              className="counter-value text-2xl font-bold text-cinema-accentAlt mb-1"
              data-value="4"
              data-prefix="£"
              data-suffix="M"
            >
              £4M
            </div>
            <div className="text-sm text-cinema-muted">Raised Across StartUps</div>
          </div>
          <div className="text-center p-4 bg-cinema-bg rounded-lg border border-cinema-border">
            <div
              className="counter-value text-2xl font-bold text-green-400 mb-1"
              data-value="5"
              data-suffix="+ Years"
            >
              5+ Years
            </div>
            <div className="text-sm text-cinema-muted">Startup Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
