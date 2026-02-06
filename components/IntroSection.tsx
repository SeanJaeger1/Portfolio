import { FC, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Terminal, FileText } from 'lucide-react'
import { gsap } from '../utils/gsap'
import SplitType from 'split-type'

const IntroSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
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
      const els = [nameRef, subtitleRef, descRef, linksRef, ctaRef, badgesRef]
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

      // Name animation with SplitType
      if (nameRef.current) {
        const split = new SplitType(nameRef.current, { types: 'words' })
        const words = split.words || []
        gsap.set(nameRef.current, { visibility: 'visible' })
        gsap.set(words, { yPercent: 100, rotateX: 90, opacity: 0 })

        tl.to(words, {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
        })
      }

      // Subtitle
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { visibility: 'visible' })
        tl.from(
          subtitleRef.current,
          { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        )
      }

      // Description
      if (descRef.current) {
        gsap.set(descRef.current, { visibility: 'visible' })
        tl.from(
          descRef.current,
          { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
      }

      // Badges
      if (badgesRef.current) {
        gsap.set(badgesRef.current, { visibility: 'visible' })
        tl.from(
          badgesRef.current,
          { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
      }

      // Social links
      if (linksRef.current) {
        gsap.set(linksRef.current, { visibility: 'visible' })
        const linkEls = linksRef.current.querySelectorAll('a')
        tl.from(
          linkEls,
          { y: 20, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
          '-=0.3'
        )
      }

      // CTA
      if (ctaRef.current) {
        gsap.set(ctaRef.current, { visibility: 'visible' })
        tl.from(
          ctaRef.current,
          { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]
            rounded-full bg-cinema-accent/5 blur-[120px]"
        />
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px]
            rounded-full bg-cinema-accentAlt/5 blur-[100px]"
        />
      </div>

      <div className="space-y-8 max-w-4xl mx-auto text-center">
        <h1
          ref={nameRef}
          className="gsap-hidden text-7xl sm:text-8xl md:text-9xl font-black text-cinema-text
            tracking-tight leading-none pb-2 split-parent"
        >
          Sean Jaeger
        </h1>

        <p
          ref={subtitleRef}
          className="gsap-hidden text-xl md:text-2xl text-cinema-muted tracking-widest uppercase font-light"
        >
          Software Engineer &bull; 5 Years Experience &bull; Startup Specialist
        </p>

        <p
          ref={descRef}
          className="gsap-hidden text-lg text-cinema-muted/80 max-w-2xl mx-auto leading-relaxed"
        >
          Proven track record building products that secure funding and scale to
          thousands of users. Specializing in early-stage startups with expertise
          in full-stack development, system architecture, and team leadership.
        </p>

        <div
          ref={badgesRef}
          className="gsap-hidden flex flex-wrap justify-center gap-4 text-sm"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-cinema-accent/10 rounded-full border border-cinema-accent/20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-cinema-accent">Available for opportunities</span>
          </div>
          <div className="px-4 py-2 bg-cinema-surface rounded-full border border-cinema-border text-cinema-muted">
            Top 3% LeetCode &bull; £4M+ Funding Raised
          </div>
        </div>

        <div ref={linksRef} className="gsap-hidden flex justify-center gap-6 pt-4">
          {socialLinks.map(({ icon: Icon, url, text, ariaLabel }) => (
            <motion.a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="p-3 rounded-lg bg-cinema-surface/50 border border-cinema-border
                group-hover:border-cinema-accent/30 transition-all duration-200">
                <Icon className="w-5 h-5 text-cinema-muted group-hover:text-cinema-text transition-colors duration-200" />
              </div>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-cinema-muted
                opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {text}
              </span>
            </motion.a>
          ))}
        </div>

        <div ref={ctaRef} className="gsap-hidden pt-8">
          <a
            href="#work"
            onClick={handleScroll}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
              bg-cinema-accent hover:bg-cinema-accent/80 text-white font-medium
              transition-all duration-200 shadow-lg shadow-cinema-accent/20 hover:shadow-cinema-accent/30"
          >
            View My Work
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              &rarr;
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
