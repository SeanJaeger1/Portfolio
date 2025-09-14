import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

const AboutSection: FC = () => {
  const paragraphs: ReactNode[] = [
    "Hi, I'm Sean 👋",
    "I'm a software engineer who thrives in the chaos of early-stage startups. Over the past five years, I've helped build products that secured millions in funding and scaled to thousands of users.",
    <>
      <strong>My superpower?</strong> Turning ambitious ideas into working
      products, fast. At Kimo, I built an MVP in 6 weeks that directly secured
      €3M in funding and attracted 120,000 early adopters. When our senior
      engineer left, I stepped up as de facto CTO, architecting the v2 platform
      that became the cornerstone of their Series A pitch.
    </>,
    <>
      <strong>Currently</strong>, I'm at Recirculate Systems, where I've built a
      real-time tracking system handling 10,000+ concurrent connections using Go
      and WebSockets. Before this, I scaled Rentokil's IoT platform managing
      20,000+ devices across the UK, boosting test coverage from 62% to 81%
      along the way.
    </>,
    <>
      <strong>What drives me</strong> is the intersection of technical
      excellence and real-world impact. I've ranked in the top 4% on LeetCode
      and placed in the top 0.8% in competitive programming competitions. But
      I'm equally passionate about the human side – mentoring teams, running
      sprints as scrum master, and translating complex technical decisions for
      investors and stakeholders.
    </>,
    <>
      <strong>My journey</strong> started unconventionally. At 18, while
      finishing A-levels, I taught myself JavaScript and joined Human Lambdas as
      a founding engineer. That experience of building from zero taught me that
      resourcefulness beats resources every time.
    </>,
    <>
      <strong>Beyond the terminal</strong>, you'll find me training as a Judo
      black belt, exploring new countries as a digital nomad, or improving my
      Spanish. I believe diverse experiences make better engineers – whether
      it's the discipline from martial arts or the adaptability from constant
      travel.
    </>,
    <>
      <strong>I'm drawn to</strong> ambitious teams solving hard problems. If
      you're building something that matters and need someone who can ship fast
      without sacrificing quality, let's talk.
    </>,
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
