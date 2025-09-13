import { FC } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Settings,
  Zap,
  Trophy,
} from 'lucide-react'

interface SkillCategory {
  title: string
  icon: any
  skills: Array<{
    name: string
    level: 'Strong' | 'Competent' | 'Familiar'
    description?: string
  }>
  color: string
}

const SkillsSection: FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'purple',
      skills: [
        {
          name: 'JavaScript & TypeScript',
          level: 'Strong',
          description: 'ES6+, Modern JS patterns',
        },
        {
          name: 'React.js / Next.js',
          level: 'Strong',
          description: 'Hooks, Context, Redux, SSR',
        },
        {
          name: 'React Native',
          level: 'Strong',
          description: 'Cross-platform mobile apps',
        },
        {
          name: 'HTML5 & CSS3',
          level: 'Strong',
          description: 'Semantic markup, Flexbox, Grid',
        },
        {
          name: 'Tailwind CSS',
          level: 'Strong',
          description: 'Utility-first styling',
        },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'blue',
      skills: [
        {
          name: 'Python',
          level: 'Strong',
          description: 'Django, FastAPI, Data Analysis',
        },
        {
          name: 'Go',
          level: 'Competent',
          description: 'Concurrent programming, APIs',
        },
        {
          name: 'Node.js',
          level: 'Competent',
          description: 'Express, REST APIs',
        },
        {
          name: 'Django / DRF',
          level: 'Competent',
          description: 'Full-stack web applications',
        },
        {
          name: 'PostgreSQL',
          level: 'Competent',
          description: 'Database design, optimization',
        },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'green',
      skills: [
        { name: 'AWS', level: 'Strong', description: 'EC2, S3, Lambda, RDS' },
        {
          name: 'CI/CD',
          level: 'Strong',
          description: 'GitHub Actions, automated deployment',
        },
        {
          name: 'Docker',
          level: 'Competent',
          description: 'Containerization, Docker Compose',
        },
        {
          name: 'Ubuntu',
          level: 'Competent',
          description: 'Server administration',
        },
        {
          name: 'Serverless',
          level: 'Competent',
          description: 'Lambda functions, API Gateway',
        },
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'orange',
      skills: [
        {
          name: 'React Native',
          level: 'Strong',
          description: 'iOS & Android apps',
        },
        {
          name: 'Expo',
          level: 'Strong',
          description: 'Rapid prototyping, deployment',
        },
        {
          name: 'Mobile UI/UX',
          level: 'Competent',
          description: 'Platform-specific design',
        },
        {
          name: 'App Store Deployment',
          level: 'Competent',
          description: 'iOS & Android stores',
        },
      ],
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      color: 'pink',
      skills: [
        {
          name: 'Figma',
          level: 'Strong',
          description: 'UI/UX design, prototyping',
        },
        {
          name: 'Responsive Design',
          level: 'Strong',
          description: 'Mobile-first approach',
        },
        {
          name: 'User Experience',
          level: 'Competent',
          description: 'User research, testing',
        },
        {
          name: 'Design Systems',
          level: 'Competent',
          description: 'Component libraries',
        },
      ],
    },
    {
      title: 'Algorithms & CS',
      icon: Zap,
      color: 'yellow',
      skills: [
        {
          name: 'Data Structures',
          level: 'Strong',
          description: 'Arrays, Trees, Graphs, Hash Tables',
        },
        {
          name: 'Algorithms',
          level: 'Strong',
          description: 'Sorting, Searching, Dynamic Programming',
        },
        {
          name: 'System Design',
          level: 'Strong',
          description: 'Scalable architecture patterns',
        },
        {
          name: 'LeetCode',
          level: 'Strong',
          description: 'Top 3% globally ranked',
        },
        {
          name: 'Competitive Programming',
          level: 'Strong',
          description: 'Top 0.8% in 20K+ competition',
        },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Strong':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'Competent':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'Familiar':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30'
    }
  }

  const getCategoryColor = (color: string) => {
    const colors = {
      purple: 'from-violet-50 to-purple-50 border-violet-200/60',
      blue: 'from-blue-50 to-cyan-50 border-blue-200/60',
      green: 'from-emerald-50 to-teal-50 border-emerald-200/60',
      orange: 'from-amber-50 to-orange-50 border-amber-200/60',
      pink: 'from-rose-50 to-pink-50 border-rose-200/60',
      yellow: 'from-yellow-50 to-amber-50 border-yellow-200/60',
    }
    return colors[color as keyof typeof colors] || colors.purple
  }

  const getIconColor = (color: string) => {
    const colors = {
      purple: 'text-violet-600',
      blue: 'text-blue-600',
      green: 'text-emerald-600',
      orange: 'text-amber-600',
      pink: 'text-rose-600',
      yellow: 'text-yellow-600',
    }
    return colors[color as keyof typeof colors] || colors.purple
  }

  return (
    <section id="skills" className="my-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Technical Skills
        </h2>
        <p className="text-lg text-slate-600">
          A comprehensive overview of my technical expertise and proficiency
          levels
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-br ${getCategoryColor(category.color)} 
              backdrop-blur-sm rounded-xl p-6 border group hover:scale-105 transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-2 rounded-lg bg-white/80 shadow-sm ${getIconColor(category.color)}`}
              >
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                {category.title}
              </h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  className="group/skill"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-700 group-hover/skill:text-slate-900 transition-colors">
                      {skill.name}
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium border ${getLevelColor(skill.level)}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  {skill.description && (
                    <p className="text-sm text-slate-600 group-hover/skill:text-slate-700 transition-colors">
                      {skill.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievements highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 bg-gradient-to-r from-slate-50 to-slate-100/70 rounded-xl p-6 border border-slate-200 shadow-sm"
      >
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-6 h-6 text-amber-500" />
          <h3 className="text-xl font-bold text-slate-800">
            Notable Achievements
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white/70 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-1">Top 3%</div>
            <div className="text-sm text-slate-600">
              LeetCode Global Ranking
            </div>
          </div>
          <div className="text-center p-4 bg-white/70 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-teal-600 mb-1">
              Top 0.8%
            </div>
            <div className="text-sm text-slate-600">
              20K+ Competition Placement
            </div>
          </div>
          <div className="text-center p-4 bg-white/70 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-1">
              5+ Years
            </div>
            <div className="text-sm text-slate-600">Startup Experience</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default SkillsSection
