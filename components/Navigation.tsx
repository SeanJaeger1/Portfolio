import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, Code, Award, Zap } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection'

interface NavLink {
  href: string
  label: string
  icon: typeof Home
  index: string
}

const links: NavLink[] = [
  { href: '#intro', label: 'Home', icon: Home, index: '001' },
  { href: '#about', label: 'About', icon: User, index: '002' },
  { href: '#skills', label: 'Skills', icon: Code, index: '003' },
  { href: '#experience', label: 'Experience', icon: Briefcase, index: '004' },
  { href: '#work', label: 'Projects', icon: Zap, index: '005' },
  { href: '#achievements', label: 'Achievements', icon: Award, index: '006' },
]

const Navigation: FC<{ className?: string; isMobile?: boolean }> = ({
  className = '',
  isMobile = false,
}) => {
  const activeSection = useActiveSection()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: 'smooth' })
  }

  const isActive = (href: string) => {
    const sectionId = href.replace('#', '')
    return activeSection === sectionId
  }

  const activeIndex = links.findIndex((l) => isActive(l.href))
  const currentLabel = `${String(activeIndex + 1).padStart(3, '0')} / ${String(links.length).padStart(3, '0')}`

  if (isMobile) {
    return (
      <motion.nav
        className="fixed bottom-0 left-0 right-0 bg-cinema-surface/95
          backdrop-blur-md border-t border-cinema-border py-3 px-4 z-50 md:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-around items-center max-w-md mx-auto">
          {links.map(({ href, label, icon: Icon }) => (
            <motion.a
              key={href}
              href={href}
              onClick={handleClick}
              className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
                isActive(href)
                  ? 'text-cinema-accent'
                  : 'text-cinema-muted hover:text-cinema-text'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{label}</span>
            </motion.a>
          ))}
        </div>
      </motion.nav>
    )
  }

  return (
    <motion.nav
      className={`hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between
        px-8 py-4 transition-all duration-300 ${
          scrolled
            ? 'bg-cinema-bg/80 backdrop-blur-md border-b border-cinema-border/50'
            : 'bg-transparent'
        }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.a
        href="#intro"
        onClick={handleClick}
        className="text-cinema-text font-bold text-lg tracking-tight"
        whileHover={{ opacity: 0.8 }}
      >
        SJ
      </motion.a>

      <div className="flex items-center gap-8">
        {links.map(({ href, label, index }) => (
          <motion.a
            key={href}
            href={href}
            onClick={handleClick}
            className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
              isActive(href)
                ? 'text-cinema-text'
                : 'text-cinema-muted hover:text-cinema-text'
            }`}
            whileHover={{ y: -1 }}
          >
            {label}
          </motion.a>
        ))}
      </div>

      <span className="text-cinema-muted text-xs font-mono tracking-widest">
        {currentLabel}
      </span>
    </motion.nav>
  )
}

export default Navigation
