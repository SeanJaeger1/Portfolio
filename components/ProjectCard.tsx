import { FC, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react'
import { gsap } from '../utils/gsap'

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
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced || !containerRef.current) return

    const img = containerRef.current.querySelector('img')
    if (!img) return

    const ctx = gsap.context(() => {
      gsap.to(img, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500/10 text-green-400 border-green-500/20'
      case 'In Development':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
      default:
        return 'bg-cinema-accent/10 text-cinema-accent border-cinema-accent/20'
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
      ref={containerRef}
      className={`group rounded-xl overflow-hidden h-full flex flex-col relative
        bg-cinema-surface border ${
          featured
            ? 'border-cinema-accent/30'
            : 'border-cinema-border'
        } hover:border-cinema-accent/50 transition-all duration-300`}
    >
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-cinema-accent text-white text-xs font-bold rounded-full shadow-md">
            Featured
          </span>
        </div>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden relative aspect-video"
      >
        <Image
          src={image}
          alt={`${title} Screenshot - Click to visit project`}
          fill
          className="object-cover object-top scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-bg/60 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center
          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-cinema-accent/90 text-white px-4 py-2 rounded-lg font-medium shadow-lg">
            <ExternalLink className="w-4 h-4 inline mr-2" />
            {getButtonText(title)}
          </div>
        </div>
      </a>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-cinema-text group-hover:text-cinema-accent transition-colors duration-300">
                {title}
              </h3>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(status)}`}
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
                  bg-cinema-accent/10 text-cinema-accent border border-cinema-accent/20"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-3 text-cinema-muted flex-grow">
          {description.map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'hidden md:block' : ''}>
              {paragraph}
            </p>
          ))}
        </div>

        {metrics && (
          <div className="mt-6 pt-4 border-t border-cinema-border">
            <div className="grid grid-cols-2 gap-4">
              {metrics.users && (
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-cinema-accent" />
                  <div>
                    <div className="text-sm font-medium text-cinema-text">
                      {metrics.users}
                    </div>
                    <div className="text-xs text-cinema-muted">Users</div>
                  </div>
                </div>
              )}
              {metrics.funding && (
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cinema-accentAlt" />
                  <div>
                    <div className="text-sm font-medium text-cinema-text">
                      {metrics.funding}
                    </div>
                    <div className="text-xs text-cinema-muted">Funding</div>
                  </div>
                </div>
              )}
              {metrics.timeline && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-green-400" />
                  <div>
                    <div className="text-sm font-medium text-cinema-text">
                      {metrics.timeline}
                    </div>
                    <div className="text-xs text-cinema-muted">Timeline</div>
                  </div>
                </div>
              )}
              {metrics.impact && (
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="text-sm font-medium text-cinema-text">
                      {metrics.impact}
                    </div>
                    <div className="text-xs text-cinema-muted">Impact</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-cinema-border">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3
              bg-cinema-accent hover:bg-cinema-accent/80 text-white font-medium
              rounded-lg transition-all duration-200"
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
