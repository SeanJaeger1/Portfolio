import { FC } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase } from 'lucide-react'

interface NavLink {
  href: string
  label: string
  icon: typeof Home
}

const links: NavLink[] = [
  { href: '#intro', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#work', label: 'Work', icon: Briefcase },
]

const Navigation: FC<{ className?: string; isMobile?: boolean }> = ({
  className = '',
  isMobile = false,
}) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: 'smooth' })
  }

  if (isMobile) {
    return (
      <motion.nav
        className="fixed bottom-0 left-0 right-0 bg-slate-900/95 
          backdrop-blur-sm border-t border-white/10 py-4 px-6 z-50 lg:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-around items-center max-w-md mx-auto">
          {links.map(({ href, label, icon: Icon }) => (
            <motion.a
              key={href}
              href={href}
              onClick={handleScroll}
              className="flex flex-col items-center gap-1 text-slate-400 
                hover:text-purple-400 transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{label}</span>
            </motion.a>
          ))}
        </div>
      </motion.nav>
    )
  }

  return (
    <motion.nav
      className="hidden lg:block fixed top-12 left-12 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="flex flex-col gap-4">
        {links.map(({ href, label }) => (
          <motion.a
            key={href}
            href={href}
            onClick={handleScroll}
            className="px-4 py-2 text-lg font-medium
              text-slate-400 hover:text-purple-400 
              hover:bg-white/5 rounded-lg backdrop-blur-sm
              transition-all duration-200"
            whileHover={{ x: 4 }}
          >
            {label}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  )
}

export default Navigation
