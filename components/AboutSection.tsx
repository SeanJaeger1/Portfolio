import { FC } from 'react'
import { motion } from 'framer-motion'

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
    <section id="about" className="mt-24 scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-slate-200 mb-8"
      >
        About Me
      </motion.h2>

      <div className="space-y-6">
        {paragraphs.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-lg text-slate-400"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
