import { FC } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, FileText, Terminal } from 'lucide-react'
import Image from 'next/image'

const IntroSection: FC = () => {
  const links = [
    {
      icon: Github,
      text: 'Github',
      url: 'https://github.com/seanjaeger',
      ariaLabel: 'View my GitHub profile',
    },
    {
      icon: Linkedin,
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sean-jaeger/',
      ariaLabel: 'Connect with me on LinkedIn',
    },
    {
      icon: Terminal,
      text: 'LeetCode',
      url: 'https://leetcode.com/seanjaeger/',
      ariaLabel: 'View my LeetCode profile',
    },
    {
      icon: FileText,
      text: 'CV',
      url: '/Sean-Jaeger-CV.pdf',
      ariaLabel: 'Download my CV',
    },
  ]

  return (
    <section
      id="intro"
      className="min-h-[90vh] flex flex-col justify-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-32 h-32 mx-auto mb-8"
        >
          <Image
            src="/headshot.jpg"
            alt="Sean Jaeger"
            fill
            className="rounded-full object-cover shadow-2xl ring-4 ring-white dark:ring-slate-700"
            sizes="128px"
            priority
          />
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
            <Terminal className="w-4 h-4 text-white" />
          </div>
        </motion.div>

        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
          >
            Sean Jaeger
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 dark:text-slate-300"
          >
            Start-up Focused Software Engineer
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-6 mt-8"
        >
          {links.map(({ icon: Icon, url, text, ariaLabel }) => (
            <motion.a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 text-slate-600 hover:text-indigo-600 dark:text-slate-400 
                dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <div className="p-3 rounded-lg bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-shadow duration-200">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">{text}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default IntroSection
