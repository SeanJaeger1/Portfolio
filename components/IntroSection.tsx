import { FC, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Terminal, FileText } from 'lucide-react'
import { gsap } from '../utils/gsap'

const IntroSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: Github,
      text: 'Github',
      url: 'https://github.com/SeanJaeger1',
      ariaLabel: 'View my GitHub profile',
    },
    {
      icon: Linkedin,
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sean-jaeger/',
      ariaLabel: 'Connect with me on LinkedIn',
    },
    {
      icon: Terminal,
      text: 'LeetCode',
      url: 'https://leetcode.com/seanjaeger/',
      ariaLabel: 'View my LeetCode profile',
    },
    {
      icon: FileText,
      text: 'CV',
      url: '/Sean-Jaeger-CV.pdf',
      ariaLabel: 'Download my CV',
    },
  ]

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      const els = [nameRef, lineRef, subtitleRef, descRef, linksRef, ctaRef, badgesRef]
      els.forEach((ref) => {
        if (ref.current) {
          ref.current.classList.remove('gsap-hidden')
          gsap.set(ref.current, { opacity: 1, visibility: 'visible' })
        }
      })
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      // Name lines slide up from below
      if (nameRef.current) {
        gsap.set(nameRef.current, { visibility: 'visible' })
        const lines = nameRef.current.querySelectorAll('.name-line')
        gsap.set(lines, { yPercent: 100 })

        tl.to(lines, {
          yPercent: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.12,
        })
      }

      // Accent line draws in from left
      if (lineRef.current) {
        gsap.set(lineRef.current, {
          visibility: 'visible',
          scaleX: 0,
          transformOrigin: 'left center',
        })
        tl.to(
          lineRef.current,
          { scaleX: 1, duration: 0.8, ease: 'power3.inOut' },
          '-=0.5'
        )
      }

      // Subtitle
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { visibility: 'visible' })
        tl.from(
          subtitleRef.current,
          { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        )
      }

      // Description
      if (descRef.current) {
        gsap.set(descRef.current, { visibility: 'visible' })
        tl.from(
          descRef.current,
          { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        )
      }

      // Badges
      if (badgesRef.current) {
        gsap.set(badgesRef.current, { visibility: 'visible' })
        tl.from(
          badgesRef.current,
          { y: 15, opacity: 0, duration: 0.5, ease: 'power3.out' },
          '-=0.3'
        )
      }

      // Social links
      if (linksRef.current) {
        gsap.set(linksRef.current, { visibility: 'visible' })
        const linkEls = linksRef.current.querySelectorAll('a')
        tl.from(
          linkEls,
          { y: 15, opacity: 0, duration: 0.4, stagger: 0.06, ease: 'power3.out' },
          '-=0.2'
        )
      }

      // CTA
      if (ctaRef.current) {
        gsap.set(ctaRef.current, { visibility: 'visible' })
        tl.from(
          ctaRef.current,
          { y: 15, opacity: 0, duration: 0.5, ease: 'power3.out' },
          '-=0.2'
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="min-h-screen flex items-center relative px-6"
    >
      {/* Warm gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-1/3 left-0 w-[700px] h-[700px]
            rounded-full bg-cinema-accent/[0.04] blur-[150px]"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]
            rounded-full bg-cinema-accentAlt/[0.03] blur-[120px]"
        />
      </div>

      <div className="max-w-5xl mx-auto w-full py-20">
        <h1
          ref={nameRef}
          className="gsap-hidden font-display italic text-[clamp(3.5rem,11vw,9rem)]
            leading-[0.9] tracking-[-0.02em] text-cinema-text mb-6"
        >
          <span className="block" style={{ clipPath: 'inset(-30px -30px 0 -30px)', transform: 'translateZ(0)' }}>
            <span className="name-line block">Sean</span>
          </span>
          <span className="block" style={{ clipPath: 'inset(-30px -30px -30px -30px)', transform: 'translateZ(0)' }}>
            <span className="name-line block">
              Jaeger<span className="text-cinema-accent">.</span>
            </span>
          </span>
        </h1>

        <div
          ref={lineRef}
          className="gsap-hidden w-20 h-[2px] bg-cinema-accent mb-8"
        />

        <p
          ref={subtitleRef}
          className="gsap-hidden font-mono text-xs tracking-[0.3em] uppercase text-cinema-muted mb-6"
        >
          Software Engineer &mdash; 5+ Years &mdash; Startup Specialist
        </p>

        <p
          ref={descRef}
          className="gsap-hidden text-lg text-cinema-muted/80 max-w-xl leading-relaxed mb-8"
        >
          Proven track record building products that secure funding and scale to
          thousands of users. Specializing in early-stage startups with expertise
          in full-stack development, system architecture, and team leadership.
        </p>

        <div
          ref={badgesRef}
          className="gsap-hidden flex flex-wrap gap-3 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cinema-accent/20 bg-cinema-accent/5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-cinema-accent">Available for opportunities</span>
          </div>
          <div className="px-4 py-2 rounded-full border border-cinema-border bg-cinema-surface/50 text-sm text-cinema-muted">
            Top 3% LeetCode
          </div>
          <div className="px-4 py-2 rounded-full border border-cinema-border bg-cinema-surface/50 text-sm text-cinema-muted">
            £4M+ Funding Raised
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-8">
          <div ref={linksRef} className="gsap-hidden flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, url, text, ariaLabel }) => (
              <motion.a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 text-cinema-muted hover:text-cinema-text transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{text}</span>
              </motion.a>
            ))}
          </div>

          <div ref={ctaRef} className="gsap-hidden">
            <a
              href="#work"
              onClick={handleScroll}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                bg-cinema-accent hover:bg-cinema-accent/90 text-white text-sm font-medium
                transition-all duration-200"
            >
              View My Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &rarr;
              </motion.span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
