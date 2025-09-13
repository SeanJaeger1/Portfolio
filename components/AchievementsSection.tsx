import { FC } from 'react'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  Code, 
  Award, 
  Target,
  Zap,
  Globe,
  DollarSign,
  Medal
} from 'lucide-react'

interface Achievement {
  icon: any
  title: string
  value: string
  description: string
  color: string
  background: string
}

const AchievementsSection: FC = () => {
  const achievements: Achievement[] = [
    {
      icon: Trophy,
      title: "LeetCode Ranking",
      value: "Top 3%",
      description: "Global ranking among millions of developers",
      color: "text-amber-600",
      background: "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/60"
    },
    {
      icon: Medal,
      title: "Competition Performance",
      value: "Top 0.8%",
      description: "20,000+ participant programming competition",
      color: "text-violet-600",
      background: "bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200/60"
    },
    {
      icon: DollarSign,
      title: "Funding Secured",
      value: "€3M+",
      description: "Direct contribution to startup funding rounds",
      color: "text-emerald-600",
      background: "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200/60"
    },
    {
      icon: Users,
      title: "User Impact",
      value: "120K+",
      description: "Early adopters gained through product development",
      color: "text-blue-600",
      background: "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/60"
    },
    {
      icon: Code,
      title: "Test Coverage",
      value: "62% → 81%",
      description: "Improved enterprise platform test coverage",
      color: "text-rose-600",
      background: "bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200/60"
    },
    {
      icon: Globe,
      title: "IoT Fleet Scale",
      value: "10,000+",
      description: "Devices managed in real-time monitoring platform",
      color: "text-teal-600",
      background: "bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200/60"
    },
    {
      icon: Zap,
      title: "Concurrent Connections",
      value: "10,000+",
      description: "Real-time application stress testing success",
      color: "text-indigo-600",
      background: "bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200/60"
    },
    {
      icon: Target,
      title: "Sprint Performance",
      value: "6 weeks",
      description: "Investor demo prototype delivery timeline",
      color: "text-slate-600",
      background: "bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200/60"
    }
  ]

  const highlights = [
    {
      icon: Award,
      title: "Founding Team Member",
      description: "Multiple early-stage startups from idea to funding",
      color: "text-violet-600"
    },
    {
      icon: TrendingUp,
      title: "Product Growth Expert",
      description: "Consistently delivered products that scale and secure investment",
      color: "text-emerald-600"
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Self-taught Computer Science with focus on algorithms and system design",
      color: "text-blue-600"
    }
  ]

  return (
    <section id="achievements" className="my-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Key Achievements & Impact
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Quantifiable results from 5+ years of building impactful software solutions
        </p>
      </motion.div>

      {/* Main achievements grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative group ${achievement.background} backdrop-blur-sm rounded-xl p-6 border hover:shadow-lg hover:scale-105 transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-4">
              <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
              <div className="text-right">
                <div className={`text-2xl font-bold ${achievement.color}`}>
                  {achievement.value}
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">
              {achievement.title}
            </h3>
            <p className="text-sm text-slate-600">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Highlights section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-slate-50 to-blue-50/30 backdrop-blur-sm rounded-xl p-8 border border-slate-200 shadow-sm"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
          What Sets Me Apart
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + (index * 0.1) }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-lg bg-white/80 shadow-sm group-hover:scale-110 transition-transform duration-300 ${highlight.color}`}>
                  <highlight.icon className="w-6 h-6" />
                </div>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                {highlight.title}
              </h4>
              <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        className="text-center mt-12"
      >
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 shadow-lg">
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            Ready to make an impact together?
          </h3>
          <p className="text-slate-600 mb-6">
            Let&apos;s discuss how my experience can contribute to your team&apos;s success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Sean-Jaeger-CV.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <Trophy className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/sean-jaeger/"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors duration-200 border border-slate-300 shadow-md hover:shadow-lg"
            >
              <Users className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AchievementsSection