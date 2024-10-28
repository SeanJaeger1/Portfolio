import { FC } from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_VARIANTS } from '../constants/animations'

interface NavLink {
  href: string
  label: string
}

const links: NavLink[] = [
  { href: '#intro', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'My Work' },
]

const Navigation: FC<{ className?: string }> = ({ className = '' }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`${className}`}
      initial="hidden"
      animate="visible"
      variants={ANIMATION_VARIANTS.container}
    >
      {links.map(({ href, label }) => (
        <motion.a
          key={href}
          href={href}
          onClick={handleScroll}
          variants={ANIMATION_VARIANTS.item}
          className="block px-4 py-2 text-lg font-kaisei text-slate-700 hover:text-slate-900 
            dark:text-slate-300 dark:hover:text-slate-100 transition-colors duration-200"
        >
          {label}
        </motion.a>
      ))}
    </motion.nav>
  )
}

export default Navigation
