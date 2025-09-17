import { FC } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Terminal, FileText } from 'lucide-react'
import Image from 'next/image'

const IntroSection: FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    {
      icon: Github,
      text: 'Github',
      url: 'https://github.com/SeanJaeger1',
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600 opacity-10 -z-10" />

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
            className="rounded-full object-cover shadow-2xl ring-4 ring-blue-500/30"
            sizes="128px"
            priority
          />
          <div
            className="absolute -bottom-2 -right-2 bg-blue-500 w-8 h-8 rounded-full 
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
              bg-gradient-to-r from-blue-600 to-teal-600 pb-4"
          >
            Sean Jaeger
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-700 mb-4"
          >
            Software Engineer • 5 Years Experience • Startup Specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto px-4 leading-relaxed"
          >
            Proven track record building products that secure funding and scale
            to thousands of users. Specializing in early-stage startups with
            expertise in full-stack development, system architecture, and team
            leadership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-6 text-sm"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-blue-700">Available for opportunities</span>
            </div>
            <div className="px-4 py-2 bg-white/70 rounded-full border border-slate-200 text-slate-700 shadow-md">
              🏆 Top 3% LeetCode • 🚀 £4M+ Funding Raised
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
                className="p-3 rounded-lg bg-white/70 backdrop-blur-sm shadow-lg
                group-hover:bg-blue-500/10 transition-all duration-200
                ring-1 ring-slate-200 group-hover:ring-blue-500/30"
              >
                <Icon
                  className="w-6 h-6 text-slate-600 group-hover:text-blue-600
                  transition-colors duration-200"
                />
              </div>
              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-slate-600
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
          transition={{ delay: 0.8 }}
          className="pt-12"
        >
          <a
            href="#work"
            onClick={handleScroll}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
              bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium
              transition-all duration-200 shadow-lg hover:shadow-blue-500/20 transform hover:scale-105"
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
