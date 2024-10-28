import { FC } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Linkedin, FileText } from 'lucide-react'

interface LinkData {
  icon: typeof ExternalLink
  text: string
  url: string
  ariaLabel: string
}

const IntroSection: FC = () => {
  const links: LinkData[] = [
    {
      icon: ExternalLink,
      text: 'LeetCode Profile',
      url: 'https://leetcode.com/seanjaeger/',
      ariaLabel: 'Visit my LeetCode profile',
    },
    {
      icon: Linkedin,
      text: 'LinkedIn Profile',
      url: 'https://www.linkedin.com/in/sean-jaeger/',
      ariaLabel: 'Connect with me on LinkedIn',
    },
    {
      icon: FileText,
      text: 'View CV',
      url: '/Sean-Jaeger-CV.pdf',
      ariaLabel: 'Download my CV',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.section
      id="intro"
      aria-label="Introduction"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-2xl mx-auto px-4 py-8"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-5xl font-kaisei font-bold text-slate-900 dark:text-slate-100"
      >
        Sean Jaeger
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mt-4 text-lg text-slate-700 dark:text-slate-300"
      >
        Hey, I'm Sean. A start-up focused software engineer.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="my-8 flex flex-col md:flex-row items-center gap-6"
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
          <Image
            src="/headshot.jpg"
            alt="Sean Jaeger"
            fill
            className="rounded-full object-cover shadow-lg"
            sizes="(max-width: 768px) 128px, 160px"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          {links.map(({ icon: Icon, text, url, ariaLabel }, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              className="flex items-center gap-3 text-slate-600 hover:text-slate-900 dark:text-slate-400 
                dark:hover:text-slate-100 transition-colors duration-200"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              <span className="text-base">{text}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4">
        <p className="text-lg text-slate-700 dark:text-slate-300">
          I'm a Front End developer with significant experience working in
          early-stage start up companies.
        </p>

        <p className="text-lg text-slate-700 dark:text-slate-300">
          I'm passionate about product development and computer science,
          currently competing actively as a competitive programmer in my spare
          time.
        </p>
      </motion.div>
    </motion.section>
  )
}

export default IntroSection
