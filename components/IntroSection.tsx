import { FC } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Terminal, FileText } from 'lucide-react'
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
      className="min-h-[calc(100vh-80px)] flex flex-col justify-center 
      items-center relative px-4 py-8 sm:py-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-95 -z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-8 max-w-3xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-32 h-32 mx-auto mb-12"
        >
          <Image
            src="/headshot.jpg"
            alt="Sean Jaeger"
            fill
            className="rounded-full object-cover shadow-2xl ring-4 ring-purple-500/20"
            sizes="128px"
            priority
          />
          <div
            className="absolute -bottom-2 -right-2 bg-purple-500 w-8 h-8 rounded-full 
            flex items-center justify-center shadow-lg"
          >
            <Terminal className="w-4 h-4 text-white" />
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-400 to-purple-600 pb-2"
          >
            Sean Jaeger
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-4"
          >
            Start-up Focused Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto px-4"
          >
            Building scalable solutions and shipping products that make a
            difference. Passionate about clean code, user experience, and
            solving complex problems.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-8 pt-8"
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
              className="group relative"
            >
              <div
                className="p-3 rounded-lg bg-white/5 backdrop-blur-sm shadow-lg
                group-hover:bg-purple-500/10 transition-all duration-200
                ring-1 ring-white/10 group-hover:ring-purple-500/30"
              >
                <Icon
                  className="w-6 h-6 text-slate-300 group-hover:text-purple-400
                  transition-colors duration-200"
                />
              </div>
              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-slate-400
                opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                {text}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="pt-12"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
              bg-purple-500 hover:bg-purple-600 text-white font-medium
              transition-colors duration-200 shadow-lg hover:shadow-purple-500/20"
          >
            View My Work
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default IntroSection
