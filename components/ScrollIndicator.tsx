import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const ScrollIndicator = () => {
  const bounceAnimation = {
    y: ['0%', '20%', '0%'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        animate={bounceAnimation}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-full shadow-lg"
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </motion.div>
    </motion.div>
  )
}

export default ScrollIndicator
