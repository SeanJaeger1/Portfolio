import { FC, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_VARIANTS } from '../constants/animations'

interface SectionProps extends PropsWithChildren {
  id: string
  title?: string
  className?: string
}

const Section: FC<SectionProps> = ({ id, title, children, className = '' }) => (
  <motion.section
    id={id}
    className={`mt-24 first:mt-0 ${className}`}
    initial="hidden"
    animate="visible"
    variants={ANIMATION_VARIANTS.container}
  >
    {title && (
      <motion.h2
        variants={ANIMATION_VARIANTS.item}
        className="text-3xl md:text-4xl font-kaisei font-bold text-slate-900 dark:text-slate-100 mb-8"
      >
        {title}
      </motion.h2>
    )}
    {children}
  </motion.section>
)

export default Section
