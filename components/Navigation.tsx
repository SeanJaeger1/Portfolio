import { FC } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, Code, Award, Zap } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection'

interface NavLink {
  href: string
  label: string
  icon: typeof Home
}

const links: NavLink[] = [
  { href: '#intro', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#work', label: 'Projects', icon: Zap },
  { href: '#achievements', label: 'Achievements', icon: Award },
]

const Navigation: FC<{ className?: string; isMobile?: boolean }> = ({
  className = '',
  isMobile = false,
}) => {
  const activeSection = useActiveSection()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
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

  if (isMobile) {
    return (
      <motion.nav
        className="fixed bottom-0 left-0 right-0 bg-white/95 
          backdrop-blur-sm border-t border-slate-200 py-4 px-6 z-50 lg:hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-around items-center max-w-md mx-auto">
          {links.map(({ href, label, icon: Icon }) => (
            <motion.a
              key={href}
              href={href}
              onClick={handleScroll}
              className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
                isActive(href)
                  ? 'text-blue-600'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <Icon
                className={`w-5 h-5 ${isActive(href) ? 'text-blue-600' : ''}`}
              />
              <span
                className={`text-xs font-medium ${isActive(href) ? 'text-blue-600' : ''}`}
              >
                {label}
              </span>
              {isActive(href) && (
                <div className="w-1 h-1 bg-blue-600 rounded-full mt-1" />
              )}
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
            className={`px-4 py-2 text-lg font-medium rounded-lg backdrop-blur-sm
              transition-all duration-200 border ${
                isActive(href)
                  ? 'text-blue-600 bg-blue-50 border-blue-200'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50 border-transparent hover:border-blue-200'
              }`}
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
