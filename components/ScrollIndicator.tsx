import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsVisible(!scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-4 z-50 md:bottom-8 md:right-8"
          onClick={handleClick}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="group cursor-pointer flex flex-col items-center"
          >
            <div className="bg-cinema-surface/80 backdrop-blur-sm rounded-full p-3
              shadow-lg ring-1 ring-cinema-border group-hover:ring-cinema-accent/30
              transition-all duration-300">
              <ChevronDown className="w-6 h-6 text-cinema-muted group-hover:text-cinema-accent transition-colors duration-300" />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-cinema-muted mt-2 group-hover:text-cinema-accent transition-colors duration-300"
            >
              Scroll to explore
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollIndicator
