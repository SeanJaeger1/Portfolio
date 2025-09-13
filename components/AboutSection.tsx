import { FC } from 'react'
import { motion } from 'framer-motion'

const AboutSection: FC = () => {
  const paragraphs = [
    "Hi, I'm Sean, a Software Engineer with five years of experience specializing in early-stage product-focused startups.",
    'My journey into software engineering began unconventionally - self-teaching JavaScript during my A-levels and landing my first role as a founding engineer at Human Lambdas (Seedcamp backed) at age 18, where I contributed to building distributed data labeling infrastructure.',
    "Since then, I've worked across various exciting projects: developing AI-curated learning platforms at Kimo, creating data analysis UIs at DataZoo, and most recently, leading software engineering initiatives at a stealth startup where I've implemented real-time user engagement systems using Go and Next.js.",
    "I've taken time to deepen my theoretical foundation in Computer Science, particularly focusing on Data Structures & Algorithms. This dedication has led to ranking in the top 4% globally on LeetCode, and achieving top 0.8% placement in recent competitive programming competitions with over 17,000 participants.",
    "My recent work includes developing Eloquent, a cross-platform mobile application for language learning that leverages locally-run LLaMA 3, and contributing to environmental sustainability through Recirculate Systems' innovative reusable cup tracking system.",
    "Outside of tech, I embrace a diverse lifestyle as a Digital Nomad, engaging in Mixed Martial Arts and Chess. I'm driven by tackling complex challenges and creating impactful solutions across various domains.",
  ]

  return (
    <section id="about" className="mt-24 scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-slate-800 mb-8"
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
            className="text-lg text-slate-600"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
