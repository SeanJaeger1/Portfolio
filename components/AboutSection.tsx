import { FC } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { ANIMATION_VARIANTS } from '../constants/animations'

const AboutSection: FC = () => {
  const paragraphs = [
    "Hi, I'm Sean.",
    "I've had a very non-traditional path into Software Engineering, having taught myself JavaScript online whilst taking my A levels, landing my first full time role and opting to take that instead of attending university.",
    "I've always maintained an extremely pragmatic approach to solving business problems with well designed code.",
    'Since my first two years of professional experience, I have taken a hiatus from my professional career and taken the time to learn the theory behind my work deeply. This involved self-teaching Computer Science topics, including but not limited to: Data Structures & Algorithms, Systems Design and Front End technologies.',
    'Outside of tech, I have an eclectic mix of interests, from traveling the world as a Digital Nomad, to competing in Mixed Martial Arts to Chess.',
    "I'm deeply passionate about tackling big problems in all fields and love to jump in head first to new challenges.",
  ]

  return (
    <Section id="about" title="About Me">
      {paragraphs.map((text, index) => (
        <motion.p
          key={index}
          variants={ANIMATION_VARIANTS.item}
          className="text-lg text-slate-700 dark:text-slate-300 mt-6 first:mt-0"
        >
          {text}
        </motion.p>
      ))}
    </Section>
  )
}

export default AboutSection
