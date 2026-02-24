import { FC, useState, useRef, useEffect, FormEvent } from 'react'
import { gsap } from '../utils/gsap'
import SplitType from 'split-type'
import { Send } from 'lucide-react'

const ContactSection: FC = () => {
  const [result, setResult] = useState('')
  const [sending, setSending] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
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

      if (formRef.current) {
        gsap.set(formRef.current, { y: 40, opacity: 0 })
        gsap.to(formRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSending(true)
    setResult('')

    const formData = new FormData(event.currentTarget)
    formData.append('access_key', '8e24422b-5fef-4703-9a12-ff6b469c179c')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()
    setSending(false)

    if (data.success) {
      setResult('Message sent — I\'ll get back to you soon.')
      event.currentTarget.reset()
    } else {
      setResult('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="my-32 scroll-mt-24">
      <div className="mb-2">
        <span className="font-mono text-xs text-cinema-accent tracking-widest">06</span>
      </div>
      <h2
        ref={headingRef}
        className="gsap-hidden font-display italic text-5xl md:text-7xl text-cinema-text mb-12 pb-1 split-parent"
      >
        Get in Touch
      </h2>

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="max-w-xl space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-cinema-muted mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-cinema-surface border border-cinema-border rounded-lg px-4 py-3
              text-cinema-text placeholder-cinema-muted/50
              focus:outline-none focus:border-cinema-accent focus:ring-1 focus:ring-cinema-accent
              transition-colors duration-200"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-cinema-muted mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-cinema-surface border border-cinema-border rounded-lg px-4 py-3
              text-cinema-text placeholder-cinema-muted/50
              focus:outline-none focus:border-cinema-accent focus:ring-1 focus:ring-cinema-accent
              transition-colors duration-200"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-cinema-muted mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full bg-cinema-surface border border-cinema-border rounded-lg px-4 py-3
              text-cinema-text placeholder-cinema-muted/50 resize-y min-h-[120px]
              focus:outline-none focus:border-cinema-accent focus:ring-1 focus:ring-cinema-accent
              transition-colors duration-200"
            placeholder="What's on your mind?"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cinema-accent text-white
              font-medium rounded-lg hover:bg-cinema-accent/90
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200"
          >
            <Send className="w-4 h-4" />
            {sending ? 'Sending...' : 'Send Message'}
          </button>

          {result && (
            <span className={`text-sm ${result.includes('sent') ? 'text-green-400' : 'text-cinema-accent'}`}>
              {result}
            </span>
          )}
        </div>
      </form>
    </section>
  )
}

export default ContactSection
