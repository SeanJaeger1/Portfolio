import { FC } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

type ExperienceType = 'full-time' | 'contract' | 'founding'

interface Experience {
  company: string
  role: string
  duration: string
  location?: string
  description: string[]
  achievements: string[]
  technologies: string[]
  type?: ExperienceType
}

const ExperienceSection: FC = () => {
  const experiences: Experience[] = [
    {
      company: 'Recirculate Systems',
      role: 'Software Engineer',
      duration: 'August 2023 – Present',
      description: [
        'Built and onboarded customers to MVP showcased to investors that secured £1.4M in investment',
        'Built real-time application using Go, Next.js, Tailwind, and WebSockets for instant payment provider engagement. Stress tested with 10K+ concurrent connections',
        'Built comprehensive CI/CD pipelines for all projects with automated testing and deployment',
        'Managed all AWS deployments and infrastructure',
        'Integrated payment providers for secure transactions',
        'Set up logging systems with automated log rotation',
        'Supervised sprints as scrum master',
      ],
      achievements: [
        'Secured £1.4M investment through MVP demonstration',
        'Delivered scalable real-time infrastructure handling 10K+ concurrent users',
        'Ensured operational reliability via automated pipelines and monitoring',
      ],
      technologies: ['Go', 'Next.js', 'Tailwind', 'WebSockets', 'AWS', 'CI/CD'],
      type: 'full-time',
    },
    {
      company: 'Ancoris',
      role: 'Software Engineer',
      duration: 'September 2022 – April 2023',
      description: [
        "Maintained and scaled a React platform managing Rentokil's entire UK IoT device fleet (20,000+ pest control units), enabling real-time monitoring for 1000+ field technicians",
        'Resolved production bugs and partnered with QA team to establish regression testing practices, improving overall platform stability',
      ],
      achievements: [
        'Increased test coverage from 62% to 81%, achieving 90%+ on critical paths',
        'Established scalability patterns that supported growth in device fleet during my tenure',
        'Stabilised platform through regression testing and QA collaboration',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'IoT', 'Testing'],
      type: 'full-time',
    },
    {
      company: 'Kimo',
      role: 'React Native Developer',
      duration: 'June 2021 – September 2021 (4 month contract)',
      description: [
        'Built Expo React Native MVP that directly secured €3M funding round, gaining 120K+ early adopters',
        'Stepped up as de facto CTO after senior departure, architecting v2 transformation based on user data and stakeholder interviews',
      ],
      achievements: [
        'Delivered investor demo prototype in 6-week sprint that became cornerstone of successful Series A pitch deck',
        'Analyzed user behavior metrics and conducted customer interviews, pivoting features that increased retention',
        'Mentored team of 3 engineers while maintaining aggressive delivery timeline for funding milestones',
        'Partnered directly with founder on technical due diligence and presenting architecture decisions to VCs during funding',
      ],
      technologies: [
        'React Native',
        'Expo',
        'TypeScript',
        'Firebase',
        'Analytics',
      ],
      type: 'contract',
    },
    {
      company: 'DataZoo',
      role: 'Frontend Developer',
      duration: 'December 2020 – May 2021 (6 month contract)',
      description: [
        "Created DataZoo's data analysis UI with Figma, continuously collaborating with the CEO and CTO",
        'Implemented various JupyterLab-based UI views, tailored for timeseries data analysis',
      ],
      achievements: [
        'Sanitized & prepared Plotly and Pandas DataFrames to generate dynamic, interactive graph views for in-depth big data analysis',
      ],
      technologies: [
        'React',
        'Figma',
        'JupyterLab',
        'Plotly',
        'Pandas',
        'Python',
      ],
      type: 'contract',
    },
    {
      company: 'Human Lambdas',
      role: 'Founding Software Engineer',
      duration: 'November 2019 – November 2020',
      description: [
        'Joined as a founding engineer at Seedcamp-backed startup',
        "Collaborated with a team of developers to develop the TypeScript React web app for the company's distributed data labeling platform",
        'Created multiple endpoints for the Django backend including designing the database models',
        'Engaged in code reviews, working closely with the product manager and senior team members',
        'Refactored critical portions of the codebase during product iterations, including a complete overhaul of the front end',
      ],
      achievements: [
        'Took part in company-wide discussions covering product design, implementation, and overall company strategy',
        'Received regular mentorship in software engineering and UI/UX best practices from the three other team members',
        'Helped shape core architecture from the ground up as founding engineer',
      ],
      technologies: ['TypeScript', 'React', 'Django', 'Python', 'Node.js'],
      type: 'founding',
    },
  ]

  const getTypeColor = (type?: ExperienceType) => {
    switch (type) {
      case 'founding':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
      case 'contract':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
      default:
        return 'bg-green-500/10 text-green-400 border-green-500/20'
    }
  }

  const getTypeLabel = (type?: ExperienceType) => {
    switch (type) {
      case 'founding':
        return 'Founding Team'
      case 'contract':
        return 'Contract'
      default:
        return 'Full-time'
    }
  }

  return (
    <section id="experience" className="my-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Professional Experience
        </h2>
        <p className="text-lg text-slate-600">
          5+ years building products and scaling teams at early-stage startups
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company + index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="relative group"
          >
            {index < experiences.length - 1 && (
              <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-transparent" />
            )}

            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-slate-200 shadow-lg group-hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute -left-2 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                      {exp.role}
                    </h3>
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">
                    {exp.company}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                    exp.type
                  )}`}
                >
                  {getTypeLabel(exp.type)}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-slate-400 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                    Key Achievements
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-slate-400 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
