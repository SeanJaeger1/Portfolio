import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react'

interface ProjectCardProps {
  title: string
  image: StaticImageData
  link: string
  github?: string
  tech: string[]
  description: string[]
  metrics?: {
    users?: string
    funding?: string
    timeline?: string
    impact?: string
  }
  status?: 'Live' | 'In Development' | 'Completed'
  featured?: boolean
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  image,
  link,
  github,
  tech,
  description,
  metrics,
  status = 'Completed',
  featured = false,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-700 border-green-300/50'
      case 'In Development':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300/50'
      default:
        return 'bg-blue-100 text-blue-700 border-blue-300/50'
    }
  }

  const getButtonText = (title: string) => {
    switch (title) {
      case 'Human Lambdas':
        return 'View Repo'
      case 'Competitive Programming':
        return 'View Profile'
      default:
        return 'View Live Project'
    }
  }

  return (
    <div
      className={`group rounded-xl overflow-hidden ${featured ? 'bg-gradient-to-br from-blue-100 to-teal-50 border-2 border-blue-300/50 shadow-lg' : 'bg-white/90 border border-slate-200 shadow-md'} 
      hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 h-full flex flex-col relative`}
    >
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-md">
            Featured
          </span>
        </div>
      )}

      {/* Prominent Project Link with Image */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden relative aspect-video group/image"
      >
        <Image
          src={image}
          alt={`${title} Screenshot - Click to visit project`}
          fill
          className="object-cover object-top transform group-hover:scale-105
            transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        {/* Click overlay indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
          <div className="bg-blue-600/90 text-white px-4 py-2 rounded-lg font-medium shadow-lg transform scale-95 group-hover/image:scale-100 transition-transform duration-300">
            <ExternalLink className="w-4 h-4 inline mr-2" />
            {getButtonText(title)}
          </div>
        </div>
      </a>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3
                className="text-xl font-bold text-slate-800 group-hover:text-blue-600 
                transition-colors duration-300"
              >
                {title}
              </h3>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full border shadow-sm ${getStatusColor(status)}`}
              >
                {status}
              </span>
            </div>
          </div>
        </div>

        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item) => (
              <span
                key={item}
                className="px-2 py-1 text-xs font-medium rounded-full 
                  bg-blue-100 text-blue-700 border border-blue-300/50 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-3 text-slate-600 flex-grow">
          {description.map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'hidden md:block' : ''}>
              {paragraph}
            </p>
          ))}
        </div>

        {metrics && (
          <div className="mt-6 pt-4 border-t border-slate-200">
            <div className="grid grid-cols-2 gap-4">
              {metrics.users && (
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium text-slate-700">
                      {metrics.users}
                    </div>
                    <div className="text-xs text-slate-500">Users</div>
                  </div>
                </div>
              )}
              {metrics.funding && (
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-teal-600" />
                  <div>
                    <div className="text-sm font-medium text-slate-700">
                      {metrics.funding}
                    </div>
                    <div className="text-xs text-slate-500">Funding</div>
                  </div>
                </div>
              )}
              {metrics.timeline && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <div>
                    <div className="text-sm font-medium text-slate-700">
                      {metrics.timeline}
                    </div>
                    <div className="text-xs text-slate-500">Timeline</div>
                  </div>
                </div>
              )}
              {metrics.impact && (
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                  <div>
                    <div className="text-sm font-medium text-slate-700">
                      {metrics.impact}
                    </div>
                    <div className="text-xs text-slate-500">Impact</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Prominent CTA Button */}
        <div className="mt-6 pt-4 border-t border-slate-200">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <ExternalLink className="w-4 h-4" />
            {getButtonText(title)}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
