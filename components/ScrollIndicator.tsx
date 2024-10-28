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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-4 z-50 lg:bottom-8 lg:right-8"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="group cursor-pointer flex flex-col items-center"
          >
            <div
              className="bg-white/10 backdrop-blur-sm rounded-full p-3 
              shadow-lg ring-1 ring-white/20 group-hover:ring-purple-400/30 
              transition-all duration-300 group-hover:shadow-purple-500/20"
            >
              <ChevronDown
                className="w-6 h-6 text-slate-200 group-hover:text-purple-400 
                transition-colors duration-300"
              />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-slate-400 mt-2 group-hover:text-purple-400
                transition-colors duration-300"
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
